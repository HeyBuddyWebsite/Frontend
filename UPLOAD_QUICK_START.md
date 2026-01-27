# Quick Start: Upload AI Development Technology Images

## Step 1: Install Dependencies
```bash
npm install form-data node-fetch
```

## Step 2: Run the Upload Script

The script works **without JWT token** by default. Simply run:

```bash
node upload-ai-images.js
```

### Optional: If Authentication is Required
If the API requires authentication, you can provide a JWT token:

```bash
export JWT_TOKEN="your_jwt_token_here"
node upload-ai-images.js
```

## Step 4: Verify Upload
The script will:
- Upload all SVG files from `/Users/vipulsharma/Downloads/AI Development`
- Save results to `upload-results.json` and `upload-results-encoded.json`
- Show success/failure count

## Step 5: Check URLs
All technology logo URLs in `Section8.jsx` are already updated to use:
```
https://heybuddy-images.s3.ap-south-1.amazonaws.com/ai_service_logo/[filename]
```

**Important**: Filenames with spaces (like "ASP. Net.svg") are URL-encoded in the code (e.g., "ASP.%20Net.svg") which is correct.

## Troubleshooting

### Error: "Token not found" or "Unauthorized"
- If you see this error, the API might require authentication
- Get your JWT token from the admin panel and set it as an environment variable:
  ```bash
  export JWT_TOKEN="your_jwt_token_here"
  node upload-ai-images.js
  ```

### Error: "Invalid file type"
- Only SVG files are being uploaded (as expected)
- If you need to upload other formats, modify the filter in the script

### Images not showing after upload
- Verify the URLs in `upload-results.json` are accessible
- Check that filenames match exactly (including spaces and special characters)
- Ensure URL encoding is correct for filenames with spaces

## Files to Upload
The following 27 SVG files will be uploaded:
- Frontend: Kotlin, Xamarin, Swift, React Native, Cordova, Flutter, Objective C
- Backend: Node, Golang, Kibana, Java Spring, Django, PHP Laravel, ASP. Net
- Database: Redis, MongoDB, Elastic Search, GraphQL, MS SQL, MySQL
- Infrastructure: Docker, AWS, Nginx, Azure, Apache, Kubernetes, GCP
