/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");

function saveFile(dir, fileName, content) {
  const dest = `${dir}/${fileName}`;
  fs.writeFileSync(dest, content);
}

module.exports = {
  saveFile,
};
