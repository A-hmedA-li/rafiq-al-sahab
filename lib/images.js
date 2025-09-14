// lib/imageUpload.js
import fs from 'fs';
import path from 'path';



export async function saveImageFile(base64Data, fileName='fileName', folder = 'services') {
  try {
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', folder);
    
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Extract image data from base64
    const matches = base64Data.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid base64 image data');
    }

    const imageType = matches[1];
    const imageData = matches[2];
    
    // Get file extension from image type
    const extension = imageType.split('/')[1];
    
    // Generate unique filename
    const uniqueFileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${extension}`;
    const filePath = path.join(uploadsDir, uniqueFileName);
    
    // Convert base64 to buffer and write file
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(filePath, buffer);    
    // Return the public URL path (relative to public folder)
    return `/uploads/${folder}/${uniqueFileName}`;
    
  } catch (error) {
    console.error('Error saving image:', error);
    throw new Error('Failed to save image');
  }
}

export  function deleteImageFile(imagePath) {
  try {
    if (!imagePath) return;
    
    // Remove leading slash to get relative path from public folder
    const relativePath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    const fullPath = path.join(process.cwd(), 'public', relativePath);

    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      console.log('Deleted image:', fullPath);
    }
  
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}

export function isValidBase64Image(base64Data) {
  return base64Data && base64Data.startsWith('data:image/');
}