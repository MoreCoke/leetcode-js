/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 不懂 O(log n) 怎麼實作，這是直接寫的答案
var searchInsert = function (nums, target) {
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      ans = i;
      break;
    }
    if (target > nums[i]) {
      ans++;
    }
  }
  return ans;
};

// 練習用二元搜尋法
var searchInsert = function (nums, target) {
  let ans = -1;
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (endIdx >= startIdx) {
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    if (target > nums[middleIdx]) {
      startIdx = middleIdx + 1;
    } else if (target < nums[middleIdx]) {
      endIdx = middleIdx - 1;
    } else {
      ans = middleIdx;
      break;
    }
  }

  if (ans < 0) {
    ans = endIdx + 1;
  }

  return ans;
};
