/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
      const res = target - nums[i];
      if (map[res] !== undefined) {
          return [map[res], i]
      }
      map[nums[i]] = i;
  }
  return []
};

