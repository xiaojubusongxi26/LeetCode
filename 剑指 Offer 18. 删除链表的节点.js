/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  if (head.val === val) {
      return head.next;
  }
  let pre = head, p = head.next
  while (p) {
      if (p.val === val) {
          pre.next = p.next
          break;
      } else if (p.val === val && p.next === null) {
          pre.next = null
          break;
      } else {
          pre = p;
          p = p.next
      }
  }
  return head
};