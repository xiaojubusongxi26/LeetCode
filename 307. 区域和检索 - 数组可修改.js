/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  this.tree = new Array(nums.length + 1).fill(0)
  this.nums = nums
  for (let i = 0; i < nums.length; i++) {
      this.add(i + 1, nums[i])
  }
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
NumArray.prototype.update = function(index, val) {
  this.add(index + 1, val - this.nums[index])
  this.nums[index] = val
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  return this.prefixSum(right + 1) - this.prefixSum(left)
};

NumArray.prototype.lowBit = function(x) {
  return x & -x
}

NumArray.prototype.add = function(index, val) {
  while (index < this.tree.length) {
      this.tree[index] += val
      index += this.lowBit(index)
  }
}

NumArray.prototype.prefixSum  = function (index) {
  let sum = 0
  while (index > 0) {
      sum += this.tree[index]
      index -= this.lowBit(index)
  }
  return sum
}
/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* obj.update(index,val)
* var param_2 = obj.sumRange(left,right)
*/