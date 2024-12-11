/**
 * @Author: kevinZzzzzz
 * @Date: 2023-04-25 16:47:40
 * @version:
 * @LastEditors: kevinZzzzzz
 * @LastEditTime: 2023-04-26 15:21:28
 * @Description: 发布订阅类
 * @FilePath: \hoslink-xxx\src\Bus\index.ts
 */
declare class BusClass {
    emit: ((name: string) => void) | undefined;
    on: ((name: string, callback: () => void) => void) | undefined;
}
type ParamsKey = string | number | symbol;
type List = {
    [key in ParamsKey]: Array<any>;
};
declare class Bus implements BusClass {
    list: List;
    constructor();
    emit(name: string, ...args: Array<any>): void;
    on(name: string, callback: () => void): void;
}
export { Bus };
//# sourceMappingURL=index.d.ts.map