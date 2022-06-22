/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 找出 array 裡最長的字，用字數多寡決定迴圈次數
  // 看 array 每個元素第一個字，一樣就加到 str ，不一樣就 break
  const longestN = Math.max(...strs.map((s) => s.length));
  let str = '';
  for (let i = 0; i < longestN; i++) {
    const isCommon = strs.every((s) => strs[0][i] === s[i]);
    if (isCommon) {
      str += strs[0][i];
    } else {
      break;
    }
  }
  return str;
};

// 2nd
// https://leetcode.com/problems/longest-common-prefix/discuss/1309953/5-lines-js-solution-beats-99.62-of-js-solutions
// 要了解 js sort() 的排序行為，預設根據 unicode 排序

var longestCommonPrefix = function (strs) {
  // 讓 strs 內的字串照字母排列
  // 取 strs 頭尾的元素
  // 拿最短的元素跑迴圈比對字串
  if (strs.length <= 1) return strs[0] || '';
  const arr = [...strs].sort();
  const first = arr[0];
  const last = arr[arr.length - 1];
  // 減少迴圈執行次數
  const len = first.length > last.length ? last.length : first.length;
  for (let i = 0; i < len; i++) {
    if (first[i] !== last[i]) {
      return first.substring(0, i);
    }
  }
  return arr[0];
};

// 3rd
// 1. 用 strs[0] 當基準，和陣列中的其他元素進行比較
// 2. strs 用 for 跑迴圈看每個元素中同個 index 的情況下字元是否相同，使用 currentIdx 紀錄現在執行到哪個 index
// 3. 不知道用 strs 的迴圈要跑幾次，外面包一個 while 處理
// 4. 因為用 strs[0] 當基準，在 strs 的迴圈從 1 開始跑
// 5. 加入 break 處理，如果當前元素中的字元和 strs[0] 對不上就中斷 for 迴圈和 while 迴圈
// 6. 如果 for 迴圈順利跑完代表當前 str[0][currentIdx] 這個字元是所有元素都有的，把這個字元加入 ans，currentIdx + 1 去跑下一次的迴圈
// ----
// 7. 沒考慮到 strs 只有一個元素的情形，所以在程式執行一開始加入針對一個元素的判斷
// 8. 沒考慮到 strs 所有元素都相同造成無窮迴圈的情況，利用 currentIdx++ 可能會超過 strs[0] 的情況來中斷 while 迴圈
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }
  let ans = '';
  let currentIdx = 0;
  let isFinished = false;
  while (true) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[0][currentIdx] !== strs[i][currentIdx]) {
        isFinished = true;
        break;
      }
    }
    if (isFinished || currentIdx > strs[0].length - 1) {
      break;
    } else {
      ans += strs[0][currentIdx];
      currentIdx++;
    }
  }
  return ans;
};
