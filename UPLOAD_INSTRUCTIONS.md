# Upload AI Development Technology Images to S3

## Prerequisites

1. Install required dependencies:
```bash
npm install form-data node-fetch
```

2. Get your JWT token:
   - Log into the admin panel
   - Get the token from browser cookies or localStorage
   - Set it as an environment variable or update the script

## Upload Process

### Option 1: Using Environment Variable
```bash
export JWT_TOKEN="your_jwt_token_here"
node upload-ai-images.js
```

### Option 2: Edit the Script
1. Open `upload-ai-images.js`
2. Replace `YOUR_JWT_TOKEN_HERE` with your actual JWT token
3. Run: `node upload-ai-images.js`

## Images in Folder

The following images are available in `/Users/vipulsharma/Downloads/AI Development`:
- Frontend: Kotlin, Xamarin, Swift, React Native, Cordova, Flutter, Objective C
- Backend: Node, Golang, Kibana, Java Spring, Django, PHP Laravel, ASP. Net
- Database: Redis, MongoDB, Elastic Search, GraphQL, MS SQL, MySQL
- Infrastructure: Docker, AWS, Nginx, Azure, Apache, Kubernetes, GCP

## Missing Images

The following AI/ML technology images are NOT in the folder and need to be added separately:
- TensorFlow
- PyTorch
- OpenAI
- Scikit-learn
- Keras
- Pandas
- NumPy
- LangChain
- Hugging Face
- OpenCV
- Anaconda
- Jupyter

**Action Required**: Either:
1. Add these AI/ML images to the folder and re-run the upload script, OR
2. Upload them manually using the same API endpoint, OR
3. Remove/comment out the AI/ML Technologies tab if these images aren't available

## After Upload

The script will create `upload-results.json` with the mapping of filenames to S3 URLs. The component has already been updated to use the new S3 URLs.

## URL Pattern

All images will be uploaded to:
`https://heybuddy-images.s3.ap-south-1.amazonaws.com/ai_service_logo/[filename]`

The component URLs have been updated to match this pattern.
