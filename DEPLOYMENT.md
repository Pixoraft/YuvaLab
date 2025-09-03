# Yuva Lab Website - Static Deployment Guide

## Render Static Site Deployment

This website is configured for static deployment on Render with full client-side routing support.

### Quick Deploy to Render

1. **Connect your repository to Render:**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub/GitLab repository

2. **Configure the deployment:**
   - **Build Command:** `vite build`
   - **Publish Directory:** `dist/public`
   - **Auto-Deploy:** Yes (recommended)

3. **Or use the render.yaml file:**
   - The included `render.yaml` file will automatically configure your deployment
   - Just push to your repository and Render will handle the rest

### Configuration Files Created

- `client/public/_redirects`: Handles client-side routing (SPA support)
- `render.yaml`: Render deployment configuration
- All routes (`/about`, `/services`, `/packages`, `/blog`, `/contact`) will work correctly

### Features Included

✅ **Client-Side Routing**: All URLs work without 404 errors  
✅ **Modern React SPA**: Smooth transitions between pages  
✅ **Medical Blue Theme**: Professional healthcare design  
✅ **Responsive Design**: Works on all devices  
✅ **WhatsApp Integration**: Direct contact functionality  
✅ **SEO Optimized**: Meta tags and descriptions included  

### Local Testing

To test the static build locally:
```bash
# Build the static files
npm run build:static

# Preview the static site
npm run preview
```

### Manual Deployment Steps

If you prefer manual deployment:

1. **Build the site:**
   ```bash
   vite build
   ```

2. **Deploy the `dist/public` folder:**
   - Upload all files from `dist/public` to your static hosting provider
   - Ensure the `_redirects` file is included for proper routing

### Troubleshooting

- **404 errors on refresh**: Ensure the `_redirects` file is in the root of your deployed files
- **Build fails**: Check that all dependencies are installed and up to date
- **Routes not working**: Verify the static host supports the `_redirects` file format

### Alternative Hosting Providers

This setup also works with:
- **Netlify**: The `_redirects` file is compatible
- **Vercel**: Will auto-detect the SPA and configure routing
- **GitHub Pages**: May require additional configuration for client-side routing

### Contact

For any deployment issues, the website includes WhatsApp integration for direct support.