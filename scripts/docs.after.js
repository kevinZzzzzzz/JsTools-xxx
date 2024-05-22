const fs = require('fs')
const path = require('path')

/**
 * 复制文件
 * @param {*} source 源文件
 * @param {*} target 目标文件
 */
const copyFile = (source, target) => {
  if (fs.existsSync(target)) {
    console.log('目标文件已存在!');
    return;
  }
  try {
    const data = fs.readFileSync(source, 'utf8');
    fs.writeFileSync(target, data);
    console.log('copy file success!');
  } catch (err) {
    console.log('copy file fail!', err);
  }
};
// 将源文件复制到html文件夹下  保证在页面端控制台直接使用库里面的方法
copyFile(path.resolve(__dirname, '../iife/index.min.js'), path.resolve(__dirname, '../html/js-tools-xxx.js'))
copyFile(path.resolve(__dirname, './docs.onload.js'), path.resolve(__dirname, '../html/docs.onload.js'))

// 直接在html里面引入该源文件
const filePath = './html/index.html'
const html = fs.readFileSync(filePath, 'utf-8')

const addFilePath = ['./js-tools-xxx.js', './docs.onload.js']
let modifiedHtml = ''
addFilePath.forEach((filePath, index) => {
  modifiedHtml += `\n<script src="${filePath}"></script>`
})

fs.writeFileSync(filePath, html.replace('</body>', modifiedHtml + '\n</body>'), 'utf-8')
