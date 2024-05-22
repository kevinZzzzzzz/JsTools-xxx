export * from './type';
export * from './variable';
/**
 * 比较前一个版本号是否比后一个版本号高
 * @example
 * compareVer('1.1.1', '1.2.1') => false
 * @params firstV 比较的版本号
 * @params secV 被比较的版本号
 * @returns true or false
 */

export function compareVer(firstV: string, secV: string): boolean {
  const firstVer = firstV.split('.');
  const secVer = secV.split('.');
  let bool = false;
  let a = true;
  bool = secVer.some((e, idx) => {
    if (Number(firstVer[idx]) < Number(e)) a = false;
    return Number(firstVer[idx]) > Number(e);
  });
  return bool && a;
}
