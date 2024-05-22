import moment from 'moment';
import { dateFormatPost } from '../Other/variable';
import { DateBaseUtil, controlType, _quarter } from '../Other/type';

/**
 * 时间截取控制
 * @param type subtract | add
 * @param {number | string} amount 截取数量
 * @param {unit} 单位 截取单位
 * @param {string} format
 * @returns {string}
 */

export const dateControl = function (
  type: controlType,
  amount: number | string,
  unit: DateBaseUtil | _quarter,
  format: string = dateFormatPost,
) {
  return moment()[type](amount, unit).format(format) === 'Invalid date'
    ? ''
    : moment()[type](amount, unit).format(format);
};
