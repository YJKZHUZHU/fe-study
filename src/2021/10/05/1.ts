/**
 * @description 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function removeDuplicates(nums: number[]): number {
  let j = 0
  for(let i = 1; i< nums.length; i++) {
    if(nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j+1
}

function getList() {
  console.log('111wefwefcecwc牛啊牛啊')
}

console.log(removeDuplicates([1,2,3,4,1,2,1]))


