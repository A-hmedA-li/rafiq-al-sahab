// lib/translationUtils.js
import fs from 'fs';
import path from 'path';

// Helper to read JSON file
export function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return {};
  }
}

// Helper to write JSON file
export  function writeJsonFile(filePath, data) {
 
  try {
     fs.writeFileSync(filePath, JSON.stringify(data , null , 2));
    return true;
  } catch (error) {
    console.error('Error writing JSON file:', error);
    return false;
  }
}

// Get all translation files for a namespace
export function getTranslationFiles() {
  const localesDir = path.join(process.cwd(), 'messages');
  const locales = ['en', 'ar']; 
  
  return locales.map(locale => ({
    locale,
    path: path.join(localesDir,`${locale}.json`),
    data: readJsonFile(path.join(localesDir, `${locale}.json`))
  }));
}

// Add new product to all translation files
export function addServiceToTranslation(serviceID, englishData) {
  const translationFiles = getTranslationFiles();
  const results = [];
  

  translationFiles.forEach(({ locale, path, data }) => {
    // Initialize products object if it doesn't exist

   


    data.ServicesPage.services[serviceID] = englishData;

    // Add translations in defferent languages 
    // if (locale === 'en') {
      
    //   data.products[productId] = englishData;
    // } else {
    //   data.products[productId] = {
    //     name: '', // Empty for manual translation
    //     description: '' // Empty for manual translation
    //   };
    // }

    // Write back to file

   

    const success = writeJsonFile(path, data);
    results.push({
      locale,
      success,
      path
    });
  });

  return results;
}

// Update specific translation
export function updateTranslation(locale, namespace, keyPath, value) {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);
  const data = readJsonFile(filePath);
  
  // Navigate to the nested key path and update value
  const keys = keyPath.split('.');
  let current = data;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  
  current[keys[keys.length - 1]] = value;
  
  return writeJsonFile(filePath, data);
}