/*
 * @Author: your name
 * @Date: 2021-09-22 19:40:51
 * @LastEditTime: 2021-09-22 19:42:52
 * @LastEditors: Please set LastEditors
 * @Description: 本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。
 * @FilePath: /fe-study/src/2021/09/22/2.ts
 */

// 解决，函数重载

function f(a: string, b: string): string

function f(a: number, b: number): number


function f(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a + ':' + b; // no error but b can be number!
  }
  return a + b; // error as b can be number | string
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok

