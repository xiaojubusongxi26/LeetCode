/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
  // 利用哈希表存储中序遍历每个值的下标
  let rootMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
      rootMap.set(inorder[i], i);
  }

  // 递归构建树
  return fn (0, inorder.length - 1, 0, inorder.length - 1)

  function fn (il, ir, pl, pr) {
      if (il > ir) {
          return null;
      }

      // 中序遍历中根节点的位置
      let index = rootMap.get(postorder[pr])
      // 创建节点
      let node = new TreeNode(postorder[pr])

      // 构建左子树
      node.left = fn(il, index - 1, pl, pl + index - il - 1)

      // 构建右子树
      node.right = fn(index + 1, ir, pl + index - il, pr - 1)

      return node
  }
};