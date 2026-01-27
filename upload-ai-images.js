const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

// Node 18+ has built-in fetch, otherwise use node-fetch
let fetch;
try {
  // Try to use built-in fetch (Node 18+)
  fetch = globalThis.fetch;
  if (!fetch) {
    // Fallback to node-fetch if built-in fetch is not available
    const nodeFetch = require('node-fetch');
    fetch = nodeFetch.default || nodeFetch;
  }
} catch (e) {
  const nodeFetch = require('node-fetch');
  fetch = nodeFetch.default || nodeFetch;
}

const BASE_URL = 'https://email-backend.heybuddy.co.in';
const FOLDER_PATH = '/Users/vipulsharma/Downloads/AI Development';
const FOLDER_NAME = 'ai_service_logo'; // S3 folder name

// JWT token is optional - set if authentication is required
const JWT_TOKEN = process.env.JWT_TOKEN || null;

async function uploadFile(filePath, fileName) {
  try {
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    
    // Append file stream with options
    formData.append('file', fileStream, {
      filename: fileName,
      contentType: 'image/svg+xml',
      knownLength: fs.statSync(filePath).size
    });
    formData.append('folder', FOLDER_NAME);

    const headers = formData.getHeaders();
    
    // Add Authorization header only if token is provided
    if (JWT_TOKEN) {
      headers['Authorization'] = `Bearer ${JWT_TOKEN}`;
    }
    
    const response = await fetch(`${BASE_URL}/api/v1/upload/single`, {
      method: 'POST',
      headers: headers,
      body: formData
    });

    const responseText = await response.text();
    let result;
    
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error(`❌ Failed to parse response for ${fileName}:`, responseText);
      return null;
    }
    
    if (result.success) {
      console.log(`✅ Uploaded: ${fileName}`);
      console.log(`   URL: ${result.data.url}`);
      return {
        filename: fileName,
        url: result.data.url,
        key: result.data.key
      };
    } else {
      console.error(`❌ Failed: ${fileName} - ${result.message || responseText}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error.message);
    if (error.response) {
      const errorText = await error.response.text();
      console.error(`   Response: ${errorText}`);
    }
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
    
    console.log(`\n📦 Found ${svgFiles.length} SVG files to upload...\n`);
    console.log('Files:', svgFiles.join(', '));
    console.log('\nStarting upload...\n');
    
    const uploadResults = {};
    let successCount = 0;
    let failCount = 0;
    
    for (let i = 0; i < svgFiles.length; i++) {
      const file = svgFiles[i];
      const filePath = path.join(FOLDER_PATH, file);
      
      console.log(`[${i + 1}/${svgFiles.length}] Uploading ${file}...`);
      const result = await uploadFile(filePath, file);
      
      if (result) {
        // Store the mapping: original filename -> S3 URL
        uploadResults[file] = result.url;
        successCount++;
      } else {
        failCount++;
      }
      
      // Small delay to avoid rate limiting (except for last file)
      if (i < svgFiles.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('📋 Upload Summary:');
    console.log(`✅ Success: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log('='.repeat(60));
    console.log('\n📄 Upload Results:');
    console.log(JSON.stringify(uploadResults, null, 2));
    
    // Create URL-encoded mapping for filenames with spaces
    const urlEncodedMapping = {};
    Object.keys(uploadResults).forEach(filename => {
      // URL encode the filename (spaces become %20, etc.)
      const encodedFilename = encodeURIComponent(filename);
      const urlEncodedPath = uploadResults[filename].replace(filename, encodedFilename);
      urlEncodedMapping[filename] = {
        original: uploadResults[filename],
        urlEncoded: urlEncodedPath,
        filename: filename,
        encodedFilename: encodedFilename
      };
    });
    
    // Save results to files
    fs.writeFileSync(
      'upload-results.json',
      JSON.stringify(uploadResults, null, 2)
    );
    
    fs.writeFileSync(
      'upload-results-encoded.json',
      JSON.stringify(urlEncodedMapping, null, 2)
    );
    
    console.log('\n✅ Results saved to:');
    console.log('   - upload-results.json (original URLs)');
    console.log('   - upload-results-encoded.json (URL-encoded filenames)');
    console.log('\n💡 Note: Use URL-encoded paths in your code for filenames with spaces.');
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
