/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
  let left = 0, right = 0, n = nums.length;
  right = n - 1
  while (left < right) {
      while (left < right && (nums[left] & 1) == 1) left++;
      while (left < right && (nums[right] & 1) == 0) right--;
      let t = nums[left]
      nums[left] = nums[right]
      nums[right] = t
  }
  return  nums
};