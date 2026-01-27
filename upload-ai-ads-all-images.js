const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const axios = require('axios');

const BASE_URL = 'https://email-backend.heybuddy.co.in';
const FOLDER_NAME = 'Images';

// JWT token is optional
const JWT_TOKEN = process.env.JWT_TOKEN || null;

const IMAGES = [
  {
    name: 'Dynamic Social Media Creatives',
    path: '/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/_thevisualizer_a_cartoon_phoenix_bird_is_holing_a_big_beer_in_o_2d9c1ac7-924d-4236-b72c-94b7e4ad7c84-ec4bc5b8-8e35-4b85-b801-3a3376e528c5.png'
  },
  {
    name: 'AI-Generated Ad Copywriting',
    path: '/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/roachbot_cinematic_portrait_of_a_male_cyborg_hacker_with_hologr_8c72874a-dc54-49cc-a528-f6419514d781-7771f687-6b88-4d68-a637-66939a7f8aa8.png'
  },
  {
    name: 'Platform-Specific AI Ad Designs',
    path: '/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/u6355339189_Realistic_matcha_pistachio_levain_cookies_two_halve_600e6274-feab-4145-a003-2007c78f6b0d-450e442f-7bdf-4151-b287-d23466dddfdd.png'
  },
  {
    name: 'Personalized Generative AI Creatives',
    path: '/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/sahm_futuristic_human_robot_with_a_black_faceshield_featureless_bb4f31d9-7706-4024-ad8d-f6360d0d075f-3bd68e8e-d14b-4998-a055-ef061529fc7f.png'
  },
  {
    name: 'Automated AI Campaign Optimization',
    path: '/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/gen_reacher_A_high-resolution_architectural_image_of_an_luxury__24ff36eb-58df-4a2f-9397-e51d1bca7b9f-b9680c77-5d9d-4ee4-90e4-5975fe7032ed.png'
  }
];

async function uploadFile(filePath, fileName) {
  try {
    const formData = new FormData();
    const fileStream = fs.createReadStream(filePath);
    
    formData.append('file', fileStream, {
      filename: path.basename(filePath),
      contentType: 'image/png'
    });
    formData.append('folder', FOLDER_NAME);

    const headers = {
      ...formData.getHeaders(),
    };

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

    if (response.data && response.data.url) {
      console.log(`✅ Uploaded: ${fileName}`);
      console.log(`   URL: ${response.data.url}`);
      return response.data.url;
    } else if (response.data && response.data.data && response.data.data.url) {
      console.log(`✅ Uploaded: ${fileName}`);
      console.log(`   URL: ${response.data.data.url}`);
      return response.data.data.url;
    } else {
      throw new Error('No URL in response');
    }
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error.response?.data || error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting upload process...\n');

  const results = {};
  let successCount = 0;
  let failCount = 0;

  for (const image of IMAGES) {
    if (!fs.existsSync(image.path)) {
      console.error(`❌ File not found: ${image.path}`);
      failCount++;
      continue;
    }

    try {
      const url = await uploadFile(image.path, image.name);
      results[image.name] = url;
      successCount++;
    } catch (error) {
      failCount++;
    }
  }

  console.log('\n============================================================');
  console.log('📋 Upload Summary:');
  console.log(`✅ Success: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log('============================================================\n');
  console.log('📄 Upload Results:');
  console.log(JSON.stringify(results, null, 2));
  
  fs.writeFileSync('upload-ai-ads-all-images-result.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Results saved to upload-ai-ads-all-images-result.json');
}

main();
