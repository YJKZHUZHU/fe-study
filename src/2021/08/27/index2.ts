/*
 * @Author: 豆芽
 * @Date: 2021-08-27 09:17:03
 * @LastEditTime: 2021-08-27 10:19:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/src/2021/08/27/index2.ts
 */

/**
 * 
 * @param s 
 * @link https://leetcode-cn.com/problems/palindrome-permutation-lcci/
 */

function canPermutePalindrome(s: string): boolean {
  const isOld = s.length % 2 === 0 // 是否是偶数
  const arr = s.split('')
  const obj: Record<string, any> = {}, arr1 = []
  arr.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  const result = Object.values(obj)
  if (isOld) { // 如果是偶数
    return result.every(item => item % 2 === 0)
  }

  const diff = result.filter(d => d !== 1)

  if (result.filter(d => d === 1).length === 1 && diff.every(d => d % 2 === 0)) {
    return true
  }
  return false
};

// 优秀代码

function canPermutePalindrome1(s: string) {
  if (!s.length) return false
  let set = new Set()
  for (let i of s) {
    if (set.has(i)) {
      set.delete(i)
    } else {
      set.add(i)
    }
  }
  console.log('set',set)
  return set.size <= 1
}


canPermutePalindrome1('tactcao')
