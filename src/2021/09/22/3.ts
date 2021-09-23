/*
 * @Author: your name
 * @Date: 2021-09-22 19:57:18
 * @LastEditTime: 2021-09-22 20:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/09/16/3.ts
 */

type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type Simplify<T> = {
  [P in keyof T]: T[P]
}

type SetOptional<T, K extends keyof T> = 
  Simplify<Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>>

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean;
// }

