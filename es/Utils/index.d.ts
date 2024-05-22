/**
 * 将参数拼接到接口 url 上
 * @example:
 * formatGetParams({ a: 1, b: 2, }) => '?a=1&b=2'
 * @params obj 对象
 * @returns temp 完整接口 uri 路径
 */
export declare const formatGetParams: (obj: any) => string;
/**
 * 判断是否为对象
 * @example
 * isObject({}) => true
 * @params obj 任意类型的值
 * @returns true | false
 */
export declare const isObject: (obj: any) => boolean;
/**
 * 深度为对象的每个属性都去掉空格
 * @example
 * everyTrim({  name: '  张三  ' }) => { name: '张三' }
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
export declare const everyTrim: (data: any) => any;
/**
 * 去掉字符串空格
 * @example
 *  trim(' aa ', true) => 'aa'
 * @params str 字符串内容
 * @params global 是否匹配全部空格
 * @returns string
 */
export declare const trim: (str: string, global?: boolean) => string;
//# sourceMappingURL=index.d.ts.map