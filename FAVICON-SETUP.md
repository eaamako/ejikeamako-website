# Favicon Setup Guide

Your site is configured to use proper favicon files, but you need to create them first.

## Required Favicon Files

Place these files in your `public` folder:

1. **favicon.ico** (32x32 or 16x16x32x32 multi-size)
2. **favicon-16x16.png** (16×16px PNG)
3. **favicon-32x32.png** (32×32px PNG)
4. **apple-touch-icon.png** (180×180px PNG)

## Quick Generation Methods

### Option 1: Online Favicon Generator (Easiest)
1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload your profile image (`public/images/profile1.jpg`)
3. Download the generated favicon package
4. Extract and copy these files to your `public` folder:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option 2: Using Photoshop/GIMP
1. Open `profile1.jpg` in your image editor
2. Create these sizes:
   - 16×16px → save as `favicon-16x16.png`
   - 32×32px → save as `favicon-32x32.png`
   - 180×180px → save as `apple-touch-icon.png`
3. Convert 32×32px to ICO format → save as `favicon.ico`

### Option 3: Command Line (ImageMagick)
```bash
# Install ImageMagick first, then run:
cd public/images
convert profile1.jpg -resize 16x16 ../favicon-16x16.png
convert profile1.jpg -resize 32x32 ../favicon-32x32.png
convert profile1.jpg -resize 180x180 ../apple-touch-icon.png
convert profile1.jpg -resize 32x32 ../favicon.ico
```

## Verify Installation

After creating the favicons, verify they exist:
```
public/
  ├── favicon.ico
  ├── favicon-16x16.png
  ├── favicon-32x32.png
  └── apple-touch-icon.png
```

Then refresh your browser (hard refresh: Ctrl+Shift+R or Cmd+Shift+R) to see the new favicon.

## Current Fallback

Until you create these files, the site will use the default Next.js favicon or may show no icon.
