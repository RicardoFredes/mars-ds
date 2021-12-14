const conventionalCommitsOptions = {
  preset: "conventionalcommits",
  parserOpts: {
    mergePattern: /^Merge pull request #(\d+) from (.*)$/,
    mergeCorrespondence: ["id", "source"],
  },
};

const changelogTitle = `# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).`;

/** @type {import("semantic-release").Config} */
module.exports = {
  branches: ["main", { name: "alpha", prerelease: true }],
  plugins: [
    ["@semantic-release/commit-analyzer", { ...conventionalCommitsOptions }],
    ["@semantic-release/release-notes-generator", { ...conventionalCommitsOptions }],
    ["@semantic-release/changelog", { changelogTitle }],
    [
      "@semantic-release/exec",
      {
        prepare: "node ./bin/update-shields.js ${nextRelease.version}",
      },
    ],
    ["@semantic-release/npm", { tarballDir: "dist" }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "yarn.lock", "CHANGELOG.md", "README.md"],
        message:
          "release(version): Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github",
  ],
};
