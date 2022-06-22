#!/usr/bin/env sh

echo "Initialize internal build"
yarn build
command rm -rf ../front-platform-next/node_modules/@mesalva/mars/dist
command cp -r dist ../front-platform-next/node_modules/@mesalva/mars/dist
echo "Internal build done"
