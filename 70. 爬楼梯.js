/* 70. 爬楼梯 

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  if (n === 1){
      return 1;
  }
  let a = 1, b = 1, sum = 0;
  for(let i = 2; i <= n; i++) {
      sum = a + b;
      a = b;
      b = sum;
  }
  return sum;
};