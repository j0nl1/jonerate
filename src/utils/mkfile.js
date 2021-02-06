const { writeFileAsync } = require('fs-extra-promise');
const { CONFIG } = require('./constants');
const { join } = require('path');

const generateFile = async (fileData, fileName) => {
  const destinationPath = join(process.cwd(), CONFIG.appName);
  await writeFileAsync(join(destinationPath, fileName), fileData);
};

module.exports = generateFile;
