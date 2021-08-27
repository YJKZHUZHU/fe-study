/*
 * @Author: 豆芽
 * @Date: 2021-08-27 08:59:54
 * @LastEditTime: 2021-08-27 09:04:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/08/27/index.ts
 */

/**
 * 
 * @param astr 
 * @link https://leetcode-cn.com/problems/is-unique-lcci/
 */
function isUnique(astr: string): boolean {
  const arr = astr.split('')
  return Array.from(new Set(arr)).length === arr.length
};
console.log(isUnique('abc'))
