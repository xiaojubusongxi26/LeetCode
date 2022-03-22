/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  return addUp(l1, l2, 0);
  
  function addUp(l1, l2, tot) {
      if (l1 == null && l2 == null && tot == 0)  {
          return null;
      }
      
      if (l1 != null) {
          tot += l1.val;
          l1 = l1.next;
      }
      
      if (l2 != null) {
          tot += l2.val;
          l2 = l2.next;
      }
      
      return new ListNode(tot%10, addUp(l1, l2, Math.floor(tot/10)));
  };
};
