echo "Initialize internal build"
yarn build
rm -rf ../front-platform-next/node_modules/@mesalva/mars/dist
cp -r dist ../front-platform-next/node_modules/@mesalva/mars/dist
echo "Internal build done"
