/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let pre = null
  let curr = head
  while(curr) {
      const next = curr.next
      curr.next = pre
      pre = curr
      curr = next
  }
  return pre
};