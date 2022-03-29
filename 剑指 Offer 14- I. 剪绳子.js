/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
  if (n <= 3) return n - 1;
  let ret = Array(n).fill(0);
  for (let i = 1; i <= Math.ceil(n / 2); i++ ) {
      let mul = 1;
      let nums = n;
      for (let j = 0; j < i; j++) {
          mul = mul * parseInt(nums / (i - j));
          nums = nums - parseInt(nums / (i - j));
      }
      ret[i] = mul;
      console.log(mul)
  }
  return Math.max(...ret);
};

// 方法二：数学
/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
  if (n <= 3) return n - 1;
  let a = parseInt(n / 3);
  let b = parseInt(n % 3);
  if (b == 0) {
      return 3 ** a;
  } else if (b == 1) {
      return 3 ** (a - 1) * 4;
  } else {
      return 3 ** a * b;
  }
  
}; 