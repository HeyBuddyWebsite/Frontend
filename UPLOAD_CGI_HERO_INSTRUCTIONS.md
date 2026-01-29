# Upload CGI Development Hero Image to S3

## ✅ Code Updated

The hero section code has been updated to use:
```
https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/CGI-development-hero.png
```

## 📤 Upload Options

### Option 1: Using the Upload Script (Recommended)

1. **Install dependencies** (if not already installed):
   ```bash
   npm install form-data node-fetch
   ```

2. **Get your JWT token** (if required):
   - Log into the admin panel
   - Get the token from browser cookies or localStorage
   - Set it as an environment variable:
     ```bash
     export JWT_TOKEN="your_jwt_token_here"
     ```

3. **Update the API URL** (if needed):
   - Open `upload-cgi-hero-image.js`
   - Update `UPLOAD_API_URL` with your actual upload endpoint
   - Default: `https://api.heybuddy.in/api/upload`

4. **Run the upload script**:
   ```bash
   node upload-cgi-hero-image.js
   ```

5. **Verify**:
   - Check `upload-cgi-hero-result.json` for the S3 URL
   - The image should now be accessible at the URL used in the code

### Option 2: Manual Upload via AWS CLI

If you have AWS CLI configured:

```bash
aws s3 cp "/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/7.CGI_development-1785a406-543e-4888-8eef-b0748cafab8c.png" s3://heybuddy-images/website-images/CGI-development-hero.png
```

### Option 3: Upload via S3 Console

1. Go to AWS S3 Console
2. Navigate to `heybuddy-images` bucket
3. Go to `website-images` folder (create if it doesn't exist)
4. Upload the image and rename it to `CGI-development-hero.png`
5. Make sure the file is publicly accessible

## 📍 Image Location

The image is currently at:
```
/Users/vipulsharma/.cursor/projects/Users-vipulsharma-Documents-Documents-Vipul-s-Mac-mini-HeyBuddy-Frontend-main-2/assets/7.CGI_development-1785a406-543e-4888-8eef-b0748cafab8c.png
```

## ✅ After Upload

Once uploaded, the hero section will automatically use the new S3 image. The code is already updated at:
- `src/components/servicescomp/cgidevelopmentcomp/Section1.jsx`

## 🔍 Verify

After uploading, verify the image is accessible by visiting:
```
https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/CGI-development-hero.png
```

If you see the image, it's working correctly!
