var $xxx = (function (exports) {
  'use strict';

  /**
   * 比较前一个版本号是否比后一个版本号高
   * @example
   * compareVer('1.1.1', '1.2.1') => false
   * @params firstV 比较的版本号
   * @params secV 被比较的版本号
   * @returns true or false
   */
  function compareVer(firstV, secV) {
      var firstVer = firstV.split('.');
      var secVer = secV.split('.');
      var bool = false;
      var a = true;
      bool = secVer.some(function (e, idx) {
          if (Number(firstVer[idx]) < Number(e))
              a = false;
          return Number(firstVer[idx]) > Number(e);
      });
      return bool && a;
  }

  /**
   * 将参数拼接到接口 url 上
   * @example:
   * formatGetParams({ a: 1, b: 2, }) => '?a=1&b=2'
   * @params obj 对象
   * @returns temp 完整接口 uri 路径
   */
  var formatGetParams = function (obj) {
      obj = everyTrim(obj);
      var temp = '';
      if (Object.prototype.toString.call(obj) === '[object Object]') {
          var _loop_1 = function (key) {
              if (Array.isArray(obj[key])) {
                  obj[key].forEach(function (elem) {
                      temp += "".concat(key, "=").concat(elem, "&");
                  });
              }
              else {
                  if (obj[key] !== null) {
                      temp += "".concat(key, "=").concat(obj[key], "&");
                  }
              }
          };
          for (var key in obj) {
              _loop_1(key);
          }
      }
      if (temp.length > 0) {
          temp = "?".concat(temp);
          return temp.substring(0, temp.length - 1);
      }
      else {
          return '';
      }
  };
  /**
   * 判断是否为对象
   * @example
   * isObject({}) => true
   * @params obj 任意类型的值
   * @returns true | false
   */
  var isObject = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
  };
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
  var everyTrim = function (data) {
      for (var key in data) {
          if (typeof data[key] === 'object') {
              everyTrim(data[key]);
          }
          else {
              if (typeof data[key] === 'string') {
                  data[key] = trim(data[key]);
              }
          }
      }
      return data;
  };
  /**
   * 去掉字符串空格
   * @example
   *  trim(' aa ', true) => 'aa'
   * @params str 字符串内容
   * @params global 是否匹配全部空格
   * @returns string
   */
  var trim = function (str, global) {
      if (global === void 0) { global = false; }
      /*
        \s 表示匹配任何空白字符，包括空格、制表符、换页符等等, 等价于[ \f\n\r\t\v]
        而"\s+"则表示匹配任意多个上面的字符
      */
      var result = str.replace(/(^\s+)|(\s+$)/g, '');
      if (global) {
          result = result.replace(/\s/g, '');
      }
      return result;
  };

  exports.compareVer = compareVer;
  exports.everyTrim = everyTrim;
  exports.formatGetParams = formatGetParams;
  exports.isObject = isObject;
  exports.trim = trim;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
