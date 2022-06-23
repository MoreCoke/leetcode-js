/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 1st 答案是錯的，沒搞懂 linked list 是什麼，先放棄
// TODO
var mergeTwoLists = function (list1, list2) {
  let ans = [];
  let currentIdx1 = 0;
  let currentIdx2 = 0;
  while (true) {
    if (currentIdx1 === list1.length) {
      break;
    }
    if (list1[currentIdx1] > list2[currentIdx2] && currentIdx2 < list1.length) {
      ans.push(list2[currentIdx2]);
      currentIdx2++;
    } else if (
      list1[currentIdx1] === list2[currentIdx2] &&
      currentIdx1 < list1.length &&
      currentIdx2 < list2.length
    ) {
      ans.push(list2[currentIdx2]);
      ans.push(list1[currentIdx1]);
      currentIdx1++;
      currentIdx2++;
    } else {
      ans.push(list1[currentIdx1]);
      currentIdx1++;
    }
  }
  return ans;
};
