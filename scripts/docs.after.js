const fs = require('fs')
const {copyFile} = require('../src/Node/files')

// 将源文件复制到html文件夹下  保证在页面端控制台直接使用库里面的方法
copyFile('../src/iife/index.min.js', '../html/js-tools-xxx.js')
copyFile('./docs.onload.js', '../html/docs.onload.js')

// 直接在html里面引入该源文件
const filePath = './html/index.html'
const html = fs.readFileSync(filePath, 'utf-8')

const addFilePath = ['./js-tools-xxx.js', './docs.onload.js']
let modifiedHtml = ''
addFilePath.forEach((filePath, index) => {
  modifiedHtml += `<script src="${filePath}"></script>\n`
  if (index === addFilePath.length - 1) {
    fs.writeFileSync(filePath, html.replace('</body>', modifiedHtml + '</body>'), 'utf-8')
  }
})

