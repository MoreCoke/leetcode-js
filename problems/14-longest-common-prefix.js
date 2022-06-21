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
