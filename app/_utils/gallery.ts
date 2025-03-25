import path from 'path';
import fs from 'fs/promises';

export interface MediaItem {
  src: string;
  name: string;
  type: 'image' | 'video';
}

export async function getGalleryMedia(folder: 'gallery' | 'commissions') {
  const basePath = path.join(process.cwd(), 'public', 'images', folder);
  
  try {
    const dirents = await fs.readdir(basePath, { withFileTypes: true });
    
    // Get all numbered subfolders and sort them
    const sortedFolders = dirents
      .filter(dirent => dirent.isDirectory())
      .map(dirent => ({
        name: dirent.name,
        num: parseInt(dirent.name.match(/\d+/)?.[0] || '0')
      }))
      .sort((a, b) => b.num - a.num); // Descending order

    // Collect media from all folders in sorted order
    const media = await Promise.all(
      sortedFolders.map(async ({ name }) => {
        const folderPath = path.join(basePath, name);
        const files = await fs.readdir(folderPath);
        
        return files.map(file => {
          const ext = path.extname(file).toLowerCase().slice(1);
          return {
            src: `/images/${folder}/${name}/${file}`,
            name: path.parse(file).name,
            type: ['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(ext) 
              ? 'image' 
              : 'video',
            folderNum: parseInt(name.match(/\d+/)?.[0] || '0')
          };
        });
      })
    );

    return media.flat().filter(item => item.name && item.src);
  } catch (error) {
    return [];
  }
}