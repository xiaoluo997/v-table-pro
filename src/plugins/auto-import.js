
// const fs = require('fs');
// const path = require('path');
// // import type {} from 'umi'
 
// module.exports = (api:, options) => {
//   // 在此处编写自动导入逻辑
//   api.addEntryCode(() => {
//     const modulesPath = path.resolve(__dirname, '../src/modules');
//     const files = fs.readdirSync(modulesPath);
//     const modules = files.map(file => `import '${path.join('../src/modules', file)}'`);
//     return modules.join(';\n');
//   });
// };