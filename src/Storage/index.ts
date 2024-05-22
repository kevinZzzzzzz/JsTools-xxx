/**
 * 获取localStroage数据
 * @example
 * getLocalStroage('aa') => 'aa' || null
 * @params
 * key 存储的key值
 * @returns
 * value 存储的value值
 */

export const getLocalStroage = (key: string) => () => JSON.parse(localStorage.getItem(key) as string);

/**
 * 获取SessionStroage数据
 * @example
 * getSessionStroage('aa') => 'aa' || null
 * @params
 * key 存储的key值
 * @returns
 * value 存储的value值
 */
export const getSessionStroage = (key: string) => () => JSON.parse(sessionStorage.getItem(key) as string);

/**
 * 设置缓存数据
 * @example
 * setStorage('localStorage', 'aa', '123) => 'aa' || null
 * @params
 * type: 'localStorage' | 'sessionStorage' 存储的位置类型
 * key 存储的key值
 * value 存储的value值
 */
export function setStorage(type: 'localStorage' | 'sessionStorage', key: string, value: string) {
  if (!!window[type].getItem(key)) {
    window[type].removeItem(key);
  }
  window[type].setItem(key, value);
}

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
export function getStorage(type: 'localStorage' | 'sessionStorage', key: string) {
  return !!window[type].getItem(key)
    ? window[type].getItem(key)?.includes('{')
      ? JSON.parse(window[type].getItem(key) as string)
      : window[type].getItem(key)
    : '';
}
/**
 * 设置cookie
 * @example
 * setCookie('aa', 123, 1000) => 'aa' || null
 * @params
 * key 存储的key值
 * value 存储的value值
 * time 存储时限
 */
export function setCookie(key: string, value: string, time: number) {
  const d: any = new Date();
  d.setTime(d.getTime() + time * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = key + '=' + value + '; ' + expires;
}

/**
 * 获取cookie
 * @example
 * getCookie('aa') => 123 || ""
 * @params
 * key 存储的key值
 * @returns
 * value 存储的value值 || ""
 */
export function getCookie(key: string) {
  const name = key + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

/**
 * 删除cookie
 * @example
 * removeCookie('aa')
 * @params
 * key 存储的key值
 * @returns
 * undefined
 */
export function removeCookie(key: string) {
  const d: any = new Date();
  d.setTime(d.getTime() - 1);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = `${key}=''; expires=${expires};`;
}
