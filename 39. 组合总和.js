/*
 * @Author: xiaojubusong
 * @Date: 2022-04-08 10:18:11
 * @LastEditors: xiaojubusong
 * @LastEditTime: 2022-04-08 10:18:11
 * @FilePath: \LeetCode\39. 组合总和.js
 * @Description:
 *
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let ans = []
  const dfs = (target, combine, index) => {
      if (index === candidates.length) {
          return;
      }
      if (target === 0) {
          ans.push(combine)
          return;
      }

      // 跳过当前索引
      dfs(target, combine, index + 1)
      // 选择当前索引
      if (target - candidates[index] >= 0) {
          dfs(target - candidates[index], [...combine, candidates[index]], index)
      }
  }
  dfs(target, [], 0)
  return ans
};