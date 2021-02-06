const { existsAsync, mkdirAsync } = require('fs-extra-promise');
const { CONFIG } = require('./constants');
const { join } = require('path');

const generateDir = async () => {
  const directory = join(process.cwd(), CONFIG.appName);
  const existDirectory = await existsAsync(directory);
  if (existDirectory) {
    console.error('Error: There is a directory with that name');
    process.exit();
  }
  mkdirAsync(directory);
  mkdirAsync(`${directory}/src`);
};

module.exports = generateDir;
