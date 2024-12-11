/**
 * 获取多级对象值
 * @example
 *  getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 *  getV('默认值', {name: {children: [123, 456]}}, 'name.children.0'); /// 123
 *  getV('默认值', {name: {children: [123, 456]}}, 'name.children.xxx'); /// 默认值
 *  getV('默认值', { name: {children: [123, 456], '[]': ['test']} }, 'name.[].0'); /// 'test'
 *  getV('默认值', { name: {children: [123, 456], '[]': ['test']} }, 'name', '[]', 0); /// 'test'
 * @param defaultResult 默认值(兜底'--')
 * @param args 需要获取的多级 rest 参数或者独立多级 string
 * @returns
 */
export declare function getV(defaultResult?: string, ...args: any): any;
/**
 * 对象/数组包含某个 key/index 或者属性
 * @example
 * hasKey({ a: 1 }, 'a'); /// true
 * hasKey([0, 1], '0'); /// true
 * hasKey([0, 1], 2); /// false
 * hasKey({ a: 1 }, 'b'); /// false
 * const a = { a: 1 };
 * a.__proto__.x = 1;
 * hasKey(a, 'x'); /// true;
 * @param data 对象
 * @param key 需要判断的 key
 * @returns
 */
export declare function hasKey(data: any, key: string): boolean;
//# sourceMappingURL=index.d.ts.map