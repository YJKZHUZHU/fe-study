/*
 * @Author: 豆芽
 * @Date: 2021-09-06 18:12:11
 * @LastEditTime: 2021-09-06 18:21:29
 * @LastEditors: Please set LastEditors
 * @Description: 对象合并
 * @FilePath: /fe-study/src/2021/09/06/index1.ts
 */

const obj1 = {
  '2021': [1, 2, 3, 4],
  '2022': [2, 3, 4, 5]
}

const obj2 = {
  '2021': [1, 3, 4, 5, 6],
  '2022': [3, 4, 5, 6, 7]
}

const extend = (target: any, source: any) => {
  for (const obj in source) {
    console.log(source[obj],target[obj])
    target[obj] = target[obj].concat(source[obj]);
  }
  return target;
}

const newObj = extend(obj1, obj2)
console.log(newObj)