// const fs = require('fs');
// const path = require('path');

// const fse = require('fs-extra');
// const glob = require('glob');
// const fetch = require('node-fetch');

// const mdxFiles = glob.sync('contents/posts/**/*.mdx');

// // console.log(mdxFiles);

// async function download(url, file) {
//   const response = await fetch(url);
//   const buffer = await response.buffer();
//   return fs.promises.writeFile(file, buffer);
// }

// const downloadImages = async (mdx) => {
//   const imageDir = path.join(path.dirname(mdx), 'images');
//   fse.ensureDirSync(imageDir);

//   let content = fs.readFileSync(mdx, 'utf8');
//   const array = [
//     ...content.matchAll(/\(https:\/\/img\.giuem-lb\.washingpatrick\.cn.*?\)/g),
//   ];

//   if (array.length === 0) return;

//   const images = array.map((a) => a[0].replace('(', '').replace(')', ''));

//   for (let image of images) {
//     const filename = path.basename(image).toLowerCase();
//     const downloadPath = path.join(imageDir, filename);
//     const relativePath = './images/' + filename;
//     await download(image, downloadPath);

//     content = content.replace(image, relativePath);
//   }

//   fs.writeFileSync(mdx, content, { encoding: 'utf-8' });
// };

// mdxFiles.map(downloadImages);
