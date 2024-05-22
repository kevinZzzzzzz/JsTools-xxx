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
export function getV(defaultResult = '--', ...args: any): any {
  if (args?.length == 2 && args[1]?.includes('.')) {
    const [obj, propPath] = args;
    const propKeys = propPath.split('.');

    let value = obj;
    for (const key of propKeys) {
      value = hasKey(value, key) ? value[key] : defaultResult;
    }

    return value ?? defaultResult;
  }
  return args.length >= 2
    ? // eslint-disable-next-line no-prototype-builtins, indent
      args.reduce((a: any, b: any) => (hasKey(a, b) ? a[b] ?? defaultResult : defaultResult))
    : defaultResult;
}

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
export function hasKey(data: any, key: string): boolean {
  if (!data) {
    return false;
  }
  try {
    // eslint-disable-next-line no-prototype-builtins
    if (data[key] !== undefined || data?.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}
