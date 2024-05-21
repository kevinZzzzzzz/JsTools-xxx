/**
 * 时间截取控制
 * @param type subtract | add
 * @param {number | string} amount 截取数量
 * @param {unit} 单位 截取单位
 * @param {string} format
 * @returns {string}
 */
type Base = 'year' | 'years' | 'y' | 'month' | 'months' | 'M' | 'week' | 'weeks' | 'w' | 'day' | 'days' | 'd' | 'hour' | 'hours' | 'h' | 'minute' | 'minutes' | 'm' | 'second' | 'seconds' | 's' | 'millisecond' | 'milliseconds' | 'ms';
type _quarter = 'quarter' | 'quarters' | 'Q';
type controlType = 'subtract' | 'add';
export declare const dateControl: (type: controlType, amount: number | string, unit: Base | _quarter, format?: string) => string;
export {};
//# sourceMappingURL=index.d.ts.map