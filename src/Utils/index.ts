/**
 * 将参数拼接到接口 url 上
 * @example:
 * formatGetParams({ a: 1, b: 2, }) => '?a=1&b=2'
 * @params obj 对象
 * @returns temp 完整接口 uri 路径
 */
export const formatGetParams = (obj: any) => {
  obj = everyTrim(obj);
  let temp = '';
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((elem: any) => {
          temp += `${key}=${elem}&`;
        });
      } else {
        if (obj[key] !== null) {
          temp += `${key}=${obj[key]}&`;
        }
      }
    }
  }
  if (temp.length > 0) {
    temp = `?${temp}`;
    return temp.substring(0, temp.length - 1);
  } else {
    return '';
  }
};

/**
 * 判断是否为对象
 * @example:
 * isObject({}) => true
 * @params obj 任意类型的值
 * @returns true | false
 */
export const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

/**
 * 深度为对象的每个属性都去掉空格
 * @example:
 * everyTrim({  name: '  张三  ' }) => { name: '张三' }
 * @example:
 * everyTrim({
 *    name: '  张三  ',
 *    age: {
 *      name: '  张三  ',
 *    },
 * }) => {
 *    name: '张三',
 *    age: {
 *      name: '张三',
 *    },
 *
 }
 * @params data 任意类型的值
 * @returns data
 */
export const everyTrim = function (data: any) {
  for (const key in data) {
    if (typeof data[key] === 'object') {
      everyTrim(data[key]);
    } else {
      if (typeof data[key] === 'string') {
        data[key] = trim(data[key]);
      }
    }
  }
  return data;
};

/**
 * 去掉字符串空格
 * @example:
 * `trim(' aa ', true) => 'aa'`
 * @params str 字符串内容
 * @params global 是否匹配全部空格
 * @returns string
 */
export const trim = function (str: string, global = false) {
  /*
    \s 表示匹配任何空白字符，包括空格、制表符、换页符等等, 等价于[ \f\n\r\t\v]
    而"\s+"则表示匹配任意多个上面的字符
  */
  let result: string = str.replace(/(^\s+)|(\s+$)/g, '');
  if (global) {
    result = result.replace(/\s/g, '');
  }
  return result;
};
