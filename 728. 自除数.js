/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
  let arr  = []
  for (let i = left; i <= right; i++) {
      if (isSelfDividing(i)) {
          arr.push(i)
      }
  }
  return arr
};

const isSelfDividing = (num) => {
  let t = num
  while(t > 0) {
      const digit = t % 10
      if (digit == 0 || num % digit !== 0) {
          return false
      }
      t = Math.floor(t / 10)
  }
  return true
}