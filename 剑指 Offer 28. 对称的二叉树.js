/*
 * @Author: xiaojubusong
 * @Date: 2022-04-08 09:50:27
 * @LastEditors: xiaojubusong
 * @LastEditTime: 2022-04-08 09:50:27
 * @FilePath: \LeetCode\剑指 Offer 28. 对称的二叉树.js
 * @Description:
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if (!root || root.left === null && root.right === null) {
      return true
  }
  return dfs(root.left, root.right)
};

function dfs (root1, root2) {
  if (root1 === null && root2 === null ) {
      return true
  }
  if (root1 === null || root2 === null) {
      return false
  }
  if (root1.val === root2.val) {
      if (!(dfs(root1.left, root2.right) && dfs(root1.right, root2.left))) {
          return false
      }
  } else {
      return false
  }
  return true
}