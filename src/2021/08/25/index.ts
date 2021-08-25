/*
 * @Author: 豆芽
 * @Date: 2021-08-25 16:37:04
 * @LastEditTime: 2021-08-25 17:47:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fe-study/2021/08/25/index.js
 */

// https://leetcode-cn.com/problems/two-sum/

/**
 * 
 * @param nums 
 * @param target 
 * @desc 输入：nums = [2,7,11,15], target = 9
 * @desc 输出：[0,1]
 * @desc 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * @result 性能不佳，不通过
 */

function twoSum(nums: number[], target: number): number[] {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      result.push({
        total: nums[i] + nums[j],
        start: i,
        end: j
      })
    }
  }
  return result.map(item => {
    if (item.total === target) {
      return [item.start, item.end]
    }
    return []
  }).flat()
};

// 优秀代码
function twoSum1(nums: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    let key = target - nums[i];
    if (map.has(key)) {
      return [map.get(key), i]
    }
    map.set(nums[i], i)
  }
  throw Error('No two sum solution')
};


function twoSum2(nums: number[], target: number): number[] {
  let result: number[] = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j]
      }
    }
  }
  return result
};


console.log(twoSum1([2, 7, 11, 15], 9))

