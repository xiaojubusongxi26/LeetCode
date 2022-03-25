/* 
剑指 Offer 07. 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

思路：
方法一：递归
先利用哈希表存储中序遍历中各个节点的索引，然后通过递归找到左右子树。
1. 获取树的头结点，然后直接构建二叉树
2. 构建左树：左子树的长度为  leftSize = index(中序遍历根节点位置) - inoStart(中序遍历中的起始点)
  - 左子树前序遍历的范围为 [preStart + 1, preStart + leftSize]
  - 左子树中序遍历的范围为 [preStart, index - 1]

3. 构建右树：
  - 右子树前序遍历的范围为 [preStart + leftSize + 1, preEnd]
  - 右子树中序遍历的范围为 [index + 1, inoEnd]

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 方法一：递归

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  // 利用哈希表存储中序遍历每个值的下标
  let rootMap = new Map()
  for (let i = 0; i < inorder.length; i++) {
      rootMap.set(inorder[i], i);
  }
  // 递归构建树
  return fn(0, 0, preorder.length - 1);

  //  前序遍历根节点位置， 中序遍历的左边界，中序遍历的右边界
  function fn (root, left, right) {
      if (left > right) {
          return null;
      }

      // 创建新节点
      let node = new TreeNode(preorder[root])
      // 根节点在中序遍历中的位置
      let mid = rootMap.get(preorder[root])

      // 遍历左子树
      node.left = fn(root + 1, left, mid - 1);

      // 遍历右子树
      node.right = fn(root + mid - left + 1, mid + 1, right);

      return node
  }
};