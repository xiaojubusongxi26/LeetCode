/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  let len = 0, p = head
  while( p) {
      len++
      p = p.next
  }
  for (let i = 0; i < len - k; i++) {
      head = head.next
  }
  return head
};