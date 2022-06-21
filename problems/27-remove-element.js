/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 var removeElement = function(nums, val) {
  // 題目看不懂，原以為是只要回傳 nums 去過濾掉 val 後的長度
  // 後來在題目中看到禁止建立新的 array 處理，只能去更改 nums
  // Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
  const ans = nums.filter(n => n !== val).length;
  return ans;
};

var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      // 陣列長度變短做的處理 ex: nums = [1, 2, 3, 4, 5] val = 3，
      // 當 i 是 2 時因為 val 和 nums[2] 相等所以把 3 從陣列移除，此時 num 是 [1, 2, 4, 5]。
      // 如果 i 沒減一會變成去檢查 num[3]， 這樣就漏掉 4 ( num[2] ) 的判斷了
      i--;
    }
  }
};
