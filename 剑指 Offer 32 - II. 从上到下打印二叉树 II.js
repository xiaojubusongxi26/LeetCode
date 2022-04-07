/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) {
      return []
  }
  let ans = []
  let q = []
  q.push(root)
  while (q.length != 0) {
      const len = q.length
      ans.push([])
      for (let i = 1; i <= len; i++) {
          const node = q.shift()
          ans[ans.length - 1].push(node.val)
          if (node.left) q.push(node.left)
          if (node.right) q.push(node.right)
      }
  }
  return ans
};