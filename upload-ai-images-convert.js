const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const sharp = require('sharp');
const axios = require('axios');

const BASE_URL = 'https://email-backend.heybuddy.co.in';
const FOLDER_PATH = '/Users/vipulsharma/Downloads/AI Development';
const FOLDER_NAME = 'ai_service_logo';
const TEMP_DIR = path.join(__dirname, 'temp-png-conversions');

// JWT token is optional
const JWT_TOKEN = process.env.JWT_TOKEN || null;

// Create temp directory if it doesn't exist
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

async function convertSvgToPng(svgPath, pngPath) {
  try {
    await sharp(svgPath)
      .resize(512, 512, { 
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
      })
      .png()
      .toFile(pngPath);
    return true;
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(svgPath)}:`, error.message);
    return false;
  }
}

async function uploadFile(filePath, fileName) {
  try {
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    
    // Change extension to .png for upload
    const pngFileName = fileName.replace('.svg', '.png');
    
    // Append file stream
    formData.append('file', fileStream, {
      filename: pngFileName,
      contentType: 'image/png'
    });
    formData.append('folder', FOLDER_NAME);

    const headers = {
      ...formData.getHeaders()
    };
    
    if (JWT_TOKEN) {
      headers['Authorization'] = `Bearer ${JWT_TOKEN}`;
    }
    
    const response = await axios.post(
      `${BASE_URL}/api/v1/upload/single`,
      formData,
      {
        headers: headers,
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      }
    );
    
    const result = response.data;
    
    if (result.success) {
      console.log(`✅ Uploaded: ${fileName} (as ${pngFileName})`);
      console.log(`   URL: ${result.data.url}`);
      return {
        originalFilename: fileName,
        uploadedFilename: pngFileName,
        url: result.data.url,
        key: result.data.key
      };
    } else {
      console.error(`❌ Failed: ${fileName} - ${result.message}`);
      return null;
    }
  } catch (error) {
    const errorMsg = error.response?.data?.message || error.message;
    console.error(`❌ Error uploading ${fileName}:`, errorMsg);
    return null;
  }
}

async function uploadAllImages() {
  try {
    const files = fs.readdirSync(FOLDER_PATH);
    const svgFiles = files.filter(file => file.endsWith('.svg'));
    
    if (svgFiles.length === 0) {
      console.error('❌ No SVG files found in the folder!');
      return;
    }
    
    console.log(`\n📦 Found ${svgFiles.length} SVG files to convert and upload...\n`);
    console.log('Files:', svgFiles.join(', '));
    console.log('\n🔄 Converting SVGs to PNGs...\n');
    
    const uploadResults = {};
    let successCount = 0;
    let failCount = 0;
    
    // Step 1: Convert all SVGs to PNGs
    const conversionResults = {};
    for (let i = 0; i < svgFiles.length; i++) {
      const file = svgFiles[i];
      const svgPath = path.join(FOLDER_PATH, file);
      const pngPath = path.join(TEMP_DIR, file.replace('.svg', '.png'));
      
      console.log(`[Convert ${i + 1}/${svgFiles.length}] Converting ${file}...`);
      const converted = await convertSvgToPng(svgPath, pngPath);
      if (converted) {
        conversionResults[file] = pngPath;
        console.log(`   ✅ Converted to ${path.basename(pngPath)}`);
      } else {
        console.log(`   ❌ Conversion failed`);
        failCount++;
      }
    }
    
    console.log(`\n📤 Uploading ${Object.keys(conversionResults).length} PNG files...\n`);
    
    // Step 2: Upload all converted PNGs
    for (let i = 0; i < Object.keys(conversionResults).length; i++) {
      const originalFile = Object.keys(conversionResults)[i];
      const pngPath = conversionResults[originalFile];
      
      console.log(`[Upload ${i + 1}/${Object.keys(conversionResults).length}] Uploading ${originalFile}...`);
      const result = await uploadFile(pngPath, originalFile);
      
      if (result) {
        // Store mapping: original SVG filename -> S3 URL (PNG)
        uploadResults[originalFile] = result.url;
        successCount++;
      } else {
        failCount++;
      }
      
      if (i < Object.keys(conversionResults).length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    // Cleanup temp files
    console.log('\n🧹 Cleaning up temporary files...');
    Object.values(conversionResults).forEach(pngPath => {
      try {
        fs.unlinkSync(pngPath);
      } catch (e) {
        // Ignore cleanup errors
      }
    });
    
    console.log('\n' + '='.repeat(60));
    console.log('📋 Upload Summary:');
    console.log(`✅ Success: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log('='.repeat(60));
    console.log('\n📄 Upload Results:');
    console.log(JSON.stringify(uploadResults, null, 2));
    
    // Save results
    fs.writeFileSync(
      'upload-results.json',
      JSON.stringify(uploadResults, null, 2)
    );
    
    console.log('\n✅ Results saved to upload-results.json');
    console.log('\n💡 Note: Files were converted from SVG to PNG before upload.');
    console.log('   Update your code to use .png extension in URLs if needed.');
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the upload
console.log('🚀 Starting upload process...');
if (JWT_TOKEN) {
  console.log('🔐 Using JWT token for authentication');
} else {
  console.log('⚠️  No JWT token provided - uploading without authentication');
}

uploadAllImages().catch(console.error);
