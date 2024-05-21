# 开发指南


## 添加函数

* 在对应分类的文件夹下的 `index.ts` 文件中添加函数即可
* 请参考并遵循 `JSDoc` 开发规范，必须要有**函数说明、参数解释与范例**，`@example` 的内容需换行且为真实代码，禁止使用伪代码，可参考已存在的函数注释。
* 统一使用 `export function functionName() {}` 导出函数，不要使用 `export const functionName = function() {}` 或者`箭头函数`。
* 函数范例结果统一使用 ` /// `，前后都需**空格**，函数内注释统一**放在代码上一行**，`禁止放在代码行末尾`。
* 确保每次提交时 `src` 目录下的 `export function` 的数目与 `@example`/`@returns` 的数目一致。
* 提交前在 `package.json` 中修改版本号，并执行 `npm run build && npm run doc` or `npm run push:before`
* 开发时使用 `npm run lint` 可进行代码检查
* `push` 到 `publish` 分支即可发布新版本。

```javascript
/**
 * 函数注释说明
 * @example
 * demo('1'); /// 'demo'
 * demo('test', 100); /// 'demo'
 * @param a 参数 a 意义
 * @param b 参数 b 意义
 * @returns {大括号类型可写可不写，函数写了返回类型会自动识别，参数类型亦同，上面就没写。}
 */
export function demo(a: string, b: number = 0): string {
  return 'demo';
}
```

## 创建分类

* 常用/共用常量导出请写到 `Data` 目录下，使用 `export const .` 导出，并使用 `@const` 说明用途。
* 创建分类文件夹后，请添加文件头说明此分类主要内容。
* 根目录 `src/index.ts` 批量导出时请勿使用**路径别名**，否则会导致声明文件路径失效。
* 在 `src/index.ts` 中 `export * ...` 新分类的文件。
* 提交前在 `package.json` 中修改版本号，并执行 `npm run build && npm run doc` or `npm run push:before`
* `push` 到 `publish` 分支即可发布新版本。

## 测试函数

* 可在 `demo` 文件夹中进行测试，但注意先 `npm run build`。
