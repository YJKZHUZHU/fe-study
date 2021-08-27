/*
 * @Author: 豆芽
 * @Date: 2021-08-27 09:07:44
 * @LastEditTime: 2021-08-27 09:11:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/08/27/index1.ts
 */

/**
 * 
 * @param S 
 * @param length 
 * @returns string
 * @link https://leetcode-cn.com/problems/string-to-url-lcci/
 */
function replaceSpaces(S: string, length: number): string {
  const arr = S.split('')
  arr.length = length
  return arr.map(item => {
    if(item === ' ') return '%20'
    return item
  }).join('')
};

console.log(replaceSpaces("               ",5))
