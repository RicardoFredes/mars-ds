/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");

function saveFile(dir, fileName, content) {
  const dest = `${dir}/${fileName}`;
  fs.writeFileSync(dest, content);
}

function readFile(path) {
  return fs.readFileSync(path, "utf8");
}

function getFiles(dir, $files) {
  $files = $files || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, $files);
    } else {
      $files.push(name);
    }
  }
  return $files;
}

module.exports = {
  getFiles,
  readFile,
  saveFile,
};
