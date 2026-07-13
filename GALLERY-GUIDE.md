# Gallery Images - How to Add

## Quick Start

1. **Add your images** to the `public/images/gallery/` folder
2. **Update** the arrays in `src/app/gallery/page.tsx`
3. Images will automatically appear with lightbox functionality

## Folder Structure

Organize your images like this:

```
public/
  images/
    gallery/
      conferences/
        ieee-2024.jpg
        presentation-tpec.jpg
      lab/
        smartgrid-setup.jpg
        research-demo.jpg
      campus/
        tntech-campus.jpg
        cookeville.jpg
      hobbies/
        photography.jpg
        volunteering.jpg
```

## Adding Images to Gallery

Open `src/app/gallery/page.tsx` and add image objects to the arrays:

### Example: Conference Images

```typescript
const conferenceImages: GalleryImage[] = [
  { 
    src: "/images/gallery/conferences/ieee-2024.jpg", 
    alt: "Presenting at IEEE Conference 2024" 
  },
  { 
    src: "/images/gallery/conferences/presentation-tpec.jpg", 
    alt: "TPEC Conference presentation" 
  },
];
```

### Example: Lab Images

```typescript
const labImages: GalleryImage[] = [
  { 
    src: "/images/gallery/lab/smartgrid-setup.jpg", 
    alt: "Smart Grid Lab equipment setup" 
  },
];
```

## Image Format

Each image needs:
- **src**: Path to image (starts with `/images/gallery/...`)
- **alt**: Description of the image (for accessibility)
- **width/height** (optional): Helps with loading performance

```typescript
{ 
  src: "/images/gallery/conferences/photo.jpg", 
  alt: "Description of photo",
  width: 1200,  // optional
  height: 900   // optional
}
```

## Features

✅ **Responsive grid** - Automatically adjusts for mobile/tablet/desktop
✅ **Lightbox modal** - Click any image to view full-size
✅ **Keyboard navigation** - Use arrow keys to navigate, ESC to close
✅ **Smooth animations** - Professional hover and transition effects
✅ **Lazy loading** - Images load as you scroll for better performance

## Tips

- Use consistent aspect ratios (4:3 or 16:9) for best results
- Optimize images before uploading (recommended: max 2MB per image)
- Use descriptive alt text for accessibility
- JPG for photos, PNG for graphics/screenshots
