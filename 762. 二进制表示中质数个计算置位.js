/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
  let ans = 0
  for (let x = left; x <= right; x++) {
      if (isPrime(bitCount(x))) {
          ++ans
      }
  }
  return ans
};

const isPrime = (x) => {
  if (x < 2) {
      return false
  }
  for (let i = 2; i ** 2 <= x; i++) {
      if (x % i === 0) {
          return false
      }
  }
  return true
}

const bitCount = (x) => {
  return x.toString(2).split('0').join('').length
}


// 方法二
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var countPrimeSetBits = function(left, right) {
  let ans = 0
  for (let x = left; x <= right; x++) {
      if (((1 << bitCount(x)) & 665772) != 0) {
          ++ans
      }
  }
  return ans
};


const bitCount = (x) => {
  return x.toString(2).split('0').join('').length
}