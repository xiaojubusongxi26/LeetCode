/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
  let max = 10 ** n - 1;
  let arr = Array(max).fill(0)
  for (let i = 1; i <= max; i++) {
      arr[i - 1] = i;
  }
  return arr;
};