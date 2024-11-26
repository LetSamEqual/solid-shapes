// import { promises as fs } from "fs";

// const currentDir = process.cwd();
// const basePath = currentDir.split("/").slice(0, -3).join("/");
// const assetPath = basePath + "/public/assets";

// export default async function GetAssets(filePath) {
//   const files = await fs.readdirSync(assetPath + "/" + filePath);
//   let assetObject = {};
//   files.forEach((el) => {
//     assetObject = {
//       ...assetObject,
//       [el]: "@assets/" + filePath + "/" + el,
//     };
//   });
//   return {
//     props: {
//       assetObject,
//     },
//   };
// }

// export default async function getStaticProps(filePath) {
//   const files = await fs.readdirSync(assetPath + "/" + filePath);
//   let assetObject = {};
//   files.forEach((el) => {
//     assetObject = {
//       ...assetObject,
//       [el]: "@assets/" + filePath + "/" + el,
//     };
//   });
//   return {
//     props: {
//       assetObject,
//     },
//   };
// }
