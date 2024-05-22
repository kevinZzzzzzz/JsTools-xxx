/*
 * @Author: kevinZzzzzz
 * @Date: 2023-04-14 10:10:50
 * @version:
 * @LastEditors: kevinZzzzzz
 * @LastEditTime: 2023-04-14 15:03:53
 * @Description: rollup配置
 * @FilePath: \kevin-jsTools\rollup.config.js
 */
import path from 'path';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve'; // 解析 node_modules 中的模块
import commonjs from '@rollup/plugin-commonjs'; // 让rollup支持commonjs
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias'; // alias 和 reslove 功能
import eslint from '@rollup/plugin-eslint';
import clear from 'rollup-plugin-clear';
import pkg from './package.json';

/**
 * 获取文件绝对路径
 * **/
const getPath = (_path) => path.resolve(__dirname, _path);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: getPath('src/index.ts'),
  output: [
    {
      file: getPath(pkg.iife),
      format: 'iife', // iife 支持 自执行函数，可通过 `<script>` 标签加载。
      name: '$toolsXxx',
      plugins: [terser()],
    },
    {
      file: getPath(pkg.main),
      format: 'cjs', // lib 兼容 CommonJS Node 默认的模块规范，可通过 Webpack 加载。
      name: '$toolsXxx',
      plugins: [terser()],
    },
    {
      file: getPath(pkg.module),
      format: 'es', // es es6模块 ES module 规范，可用 Webpack、Rollup 加载。
      name: '$toolsXxx',
      plugins: [terser()],
    },
    {
      file: getPath(pkg.unpkg),
      format: 'umd', // dist 通用模块 IIFE，AMD[`amd`: 浏览器端的模块规范-可通过 RequireJS 可加载]，CJS。
      name: '$toolsXxx',
      plugins: [terser()],
    },
    {
      file: getPath(pkg['iife-source']),
      name: '$toolsXxx',
      format: 'iife', // iife
    },
    {
      file: getPath(pkg['main-source']),
      name: '$toolsXxx',
      format: 'cjs', // lib
    },
    {
      file: getPath(pkg['module-source']),
      name: '$toolsXxx',
      format: 'es', // es
    },
    {
      file: getPath(pkg['unpkg-source']),
      name: '$toolsXxx',
      format: 'umd', // dist
    },
  ],
  plugins: [
    resolve(extensions),
    commonjs(),
    eslint({
      fix: true, // 自动修复
    }),
    clear({
      targets: ['dist', 'es', 'lib', 'iife', 'docs', 'html'],
      watch: true,
    }),
    typescript({ tsconfig: getPath('tsconfig.json'), extensions }),
    alias({
      entries: [{ find: '@', replacement: getPath('src') }],
    }),
  ],
};
