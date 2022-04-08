/*
 * @Author: xiaojubusong
 * @Date: 2022-04-08 09:25:38
 * @LastEditors: xiaojubusong
 * @LastEditTime: 2022-04-08 09:34:26
 * @FilePath: \LeetCode\429. N 叉树的层序遍历.js
 * @Description:
 *
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

//深度优先遍历
/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ans = []
  let deep = 0
  dfs(root, deep, ans)
  return ans
}

function dfs(root, deep, ans) {
  if (!root) {
    return
  } else {
    if (deep > ans.length - 1) {
      ans.push([])
    }
    ans[deep].push(root.val)
    const n = root.children.length
    for (let i = 0; i < n; i++) {
      dfs(root.children[i], deep + 1, ans)
    }
  }
}

// 广度优先遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let ans = []
  let queue = [root]

  while (queue.length) {
    let level = []
    const cnt = queue.length
    for (let i = 0; i < cnt; i++) {
      const cur = queue.shift()
      level.push(cur.val)
      for (const child of cur.children) {
        queue.push(child)
      }
    }
    ans.push(level)
  }
  return ans
}
