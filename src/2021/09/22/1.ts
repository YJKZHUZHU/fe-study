/*
 * @Author: 豆芽
 * @Date: 2021-09-22 19:28:05
 * @LastEditTime: 2021-09-22 19:39:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/09/22/1.ts
 */

type User = {
  id: number;
  kind: string;
};

// function makeCustomer<T extends User>(u: T): T {
//   // Error（TS 编译器版本：v4.4.2）
//   // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
//   // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', 
//   // but 'T' could be instantiated with a different subtype of constraint 'User'.
//   return {
//     id: u.id,
//     kind: 'customer'
//   }
// }

// 解决,自行推导
function makeCustomer<T extends User>(u: T) {
  return {
    id: u.id,
    kind: 'customer'
  }
}

