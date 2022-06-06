/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
  const list = [];
  const dfs = (node) => {
      if (!node) {
          return;
      }
      dfs(node.left);
      list.push(node.val);
      dfs(node.right);
  }
  dfs(root);
  let left = 0, right = list.length - 1;
  while (left < right) {
      if (list[left] + list[right] > k) {
          right--;
      } else if (list[left] + list[right] < k) {
          left++;
      } else {
          return true;
      }
  }
  return false;
};