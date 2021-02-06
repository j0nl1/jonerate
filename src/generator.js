const generateDir = require('./utils/mkdir');
const generateFile = require('./utils/mkfile');
const copyFile = require('./utils/cpfile');
const { spawn } = require('child_process');
const ora = require('ora');
const { TEMPLATES, CONFIG, DEPENDENCIES } = require('./utils/constants');

exports.node = async (options, command) => {
  if (options.name) {
    CONFIG.appName = options.name;
  }
  const pkgJSON = require('./templates/node/package.json');
  await generateDir();
  await copyFile(TEMPLATES.COMMON.babel, '.babelrc');
  await generateFile(JSON.stringify(pkgJSON, null, 2).replace('appname', CONFIG.appName), 'package.json');
  await generateFile(`console.log("Hello ${CONFIG.appName}")`, 'src/index.ts');
  const spinner = ora('Installing packages...').start();
  const npm = spawn('npm', ['i', '-D', 'nodemon', ...DEPENDENCIES.typescript], { cwd: process.cwd() + '/' + CONFIG.appName });
  npm.stdout.on('data', (data) => console.log(data.toString()));
  npm.on('close', () => spinner.stop());
};
