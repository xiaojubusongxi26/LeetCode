/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangularSum = function(nums) {
  const n = nums.length
  if (n === 1) {
      return nums
  }
  let size = n
  while (size > 1) {
      for (let i = 0; i < size - 1; i++) {
          nums[i] = (nums[i] + nums[i+1]) % 10
      }
      size--
  }
  
  return nums[0]
};