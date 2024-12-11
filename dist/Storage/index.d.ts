/**
 * 获取localStroage数据
 * @example
 * getLocalStroage('aa') => 'aa' || null
 * @params
 * key 存储的key值
 * @returns
 * value 存储的value值
 */
export declare const getLocalStroage: (key: string) => () => any;
/**
 * 获取SessionStroage数据
 * @example
 * getSessionStroage('aa') => 'aa' || null
 * @params
 * key 存储的key值
 * @returns
 * value 存储的value值
 */
export declare const getSessionStroage: (key: string) => () => any;
/**
 * 设置缓存数据
 * @example
 * setStorage('localStorage', 'aa', '123) => 'aa' || null
 * @params
 * type: 'localStorage' | 'sessionStorage' 存储的位置类型
 * key 存储的key值
 * value 存储的value值
 */
export declare function setStorage(type: 'localStorage' | 'sessionStorage', key: string, value: string): void;
/**
 * 获取缓存数据
 * @example
 * getStorage('localStorage', 'aa') => '123' || null
 * @params
 * type: 'localStorage' | 'sessionStorage' 存储的位置类型
 * key 存储的key值
 * @returns
 * value: 存储的value值
 */
export declare function getStorage(type: 'localStorage' | 'sessionStorage', key: string): any;
/**
 * 设置cookie
 * @example
 * setCookie('aa', 123, 1000) => 'aa' || null
 * @params
 * key 存储的key值
 * value 存储的value值
 * time 存储时限
 */
export declare function setCookie(key: string, value: string, time: number): void;
/**
 * 获取cookie
 * @example
 * getCookie('aa') => 123 || ""
 * @params
 * key 存储的key值
 * @returns
 * value 存储的value值 || ""
 */
export declare function getCookie(key: string): string;
/**
 * 删除cookie
 * @example
 * removeCookie('aa')
 * @params
 * key 存储的key值
 * @returns
 * undefined
 */
export declare function removeCookie(key: string): void;
//# sourceMappingURL=index.d.ts.map