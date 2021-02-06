const { copyAsync } = require('fs-extra-promise');
const { CONFIG } = require('./constants');
const { join } = require('path');

const copyFile = async (templatePath, fileName) => {
  const destinationPath = join(process.cwd(), CONFIG.appName);
  await copyAsync(join(process.cwd(), 'src', templatePath), join(destinationPath, fileName));
};

module.exports = copyFile;
