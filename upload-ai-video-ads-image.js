const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');

const BASE_URL = 'https://email-backend.heybuddy.co.in';
const IMAGE_PATH = '/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/borisa82_a_photo_of_a_cute_young_cat_Dancing_dressed_in_Traditi_b2141317-9cab-42b9-a4ce-28ecce585526-b93dd86e-e044-411c-94b5-d564866fb4e5.png';
const FOLDER_NAME = 'Images'; // Upload to Images folder

// JWT token is optional
const JWT_TOKEN = process.env.JWT_TOKEN || null;

async function uploadFile(filePath) {
  try {
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    const fileName = path.basename(filePath);
    
    // Append file stream
    formData.append('file', fileStream, {
      filename: fileName,
      contentType: 'image/png'
    });
    formData.append('folder', FOLDER_NAME);

    const headers = {
      ...formData.getHeaders(),
    };

    // Add JWT token if provided
    if (JWT_TOKEN) {
      headers['Authorization'] = `Bearer ${JWT_TOKEN}`;
    } else {
      console.log('⚠️  No JWT token provided - uploading without authentication');
    }

    console.log(`📤 Uploading ${fileName}...`);

    const response = await axios.post(
      `${BASE_URL}/api/v1/upload/single`,
      formData,
      {
        headers,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );

    console.log('📥 Response:', JSON.stringify(response.data, null, 2));
    
    if (response.data && response.data.url) {
      console.log(`✅ Uploaded: ${fileName}`);
      console.log(`   URL: ${response.data.url}`);
      return response.data.url;
    } else if (response.data && response.data.data && response.data.data.url) {
      console.log(`✅ Uploaded: ${fileName}`);
      console.log(`   URL: ${response.data.data.url}`);
      return response.data.data.url;
    } else {
      console.error('❌ Response structure:', JSON.stringify(response.data, null, 2));
      throw new Error('No URL in response');
    }
  } catch (error) {
    console.error(`❌ Error uploading ${path.basename(filePath)}:`, error.response?.data || error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting upload process...\n');

  if (!fs.existsSync(IMAGE_PATH)) {
    console.error(`❌ File not found: ${IMAGE_PATH}`);
    process.exit(1);
  }

  try {
    const url = await uploadFile(IMAGE_PATH);
    
    console.log('\n============================================================');
    console.log('📋 Upload Summary:');
    console.log('✅ Success: 1');
    console.log('============================================================\n');
    console.log('📄 Upload Result:');
    console.log(JSON.stringify({ [path.basename(IMAGE_PATH)]: url }, null, 2));
    
    // Save result to file
    fs.writeFileSync('upload-ai-video-ads-image-result.json', JSON.stringify({ [path.basename(IMAGE_PATH)]: url }, null, 2));
    console.log('\n✅ Result saved to upload-ai-video-ads-image-result.json');
  } catch (error) {
    console.error('\n❌ Upload failed:', error.message);
    process.exit(1);
  }
}

main();
