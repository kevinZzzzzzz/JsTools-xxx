import fs from 'fs';

/**
 * 复制文件
 * @param {*} source 源文件
 * @param {*} target 目标文件
 */
export const copyFile = (source, target) => {
  if (fs.existsSync(target)) {
    console.log('目标文件已存在!');
    return;
  }
  try {
    fs.writeFileSync(target, fs.readFileSync(source));
    console.log('copy file success!');
  } catch (err) {
    console.log('copy file fail!', err);
  }
};
