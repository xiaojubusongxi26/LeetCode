/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;

  let root = new TreeNode(preorder[0])
  let len = preorder.length
  let index = 0;
  let stack = [root]
  for (let i = 1; i < len; i++) {
      let preVal = preorder[i];
      let node = stack[stack.length - 1]
      if (node.val !== inorder[index]) {
          node.left = new TreeNode(preVal)
          stack.push(node.left)
      } else {
          while (stack.length !== 0 && inorder[index] == stack[stack.length - 1].val) {
              node = stack.pop()
              index++
          }
          node.right = new TreeNode(preVal)
          stack.push(node.right)
      }
  }
  return root
};