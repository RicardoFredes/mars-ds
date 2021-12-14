"use strict";

const fs = require("fs");
const path = require("path");

const destFile = path.resolve(__dirname, "../README.md");
const lastVersion = /label=Version&message=(.*)&/;
const nextVersion = process.argv[2];

fs.readFile(destFile, "utf8", (err, data) => {
  if (err || !nextVersion) {
    console.error(err || "No version specified");
    process.exit(1);
  }

  const result = data.replace(lastVersion, `label=Version&message=${nextVersion}&`);

  fs.writeFile(destFile, result, "utf8", (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.debug(`Updated ${destFile} to use version ${nextVersion}`);
  });
});
