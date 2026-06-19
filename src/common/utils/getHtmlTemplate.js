const fs = require('fs');
const path = require('path');

exports.getHtmlTemplate = async (filePath, replacements) => {
  try {
    let template = await fs.readFile(filePath, 'utf-8'); // Read file asynchronously
    for (let key in replacements) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, replacements[key]);
    }
    return template;
  } catch (err) {
    throw new Error(`Error reading the file: ${err.message}`);
  }
};