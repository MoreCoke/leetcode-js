/**
 * @param {string} s
 * @return {boolean}
 */

// 解破頭還是沒解出來，下方的寫法無法解決錯誤順序的問題 ex: ']['
var isValid = function (s) {
  // 字串長度是偶數的話才去跑迴圈
  // 有效組合的條件有兩個
  // 1. 頭尾是一個組合的 ex: [{}]
  // 2. 當前字串和下個字串是同個組合: ex: (){}

  if (s.length % 2 !== 0) {
    return false;
  }
  let ans = true;
  const arr = s.split('');
  const obj = {
    '(': ')',
    ')': '(',
    '{': '}',
    '}': '{',
    '[': ']',
    ']': '['
  };

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i + 1] === obj[arr[i]]) {
      i++;
      continue;
    } else if (arr[(len - 1) - i] === obj[arr[i]]) {
      continue;
    } else {
      ans = false;
      break;
    }
  }
  return ans;
};
