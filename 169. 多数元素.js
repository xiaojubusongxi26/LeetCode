/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let m = new Map()
  const n = nums.length
  let a = 0
  for (let item of nums) {
      if(m.get(item) !== undefined) {
          m.set(item, m.get(item) + 1)
      } else {
          m.set(item, 1)
      }
      if (m.get(item) > Math.floor(n / 2)) {
          return item
      }
  }
};