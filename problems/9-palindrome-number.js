/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // arr[0] === arr[len-1]; arr[1] === arr[len-2]; arr[2] === arr[len-3];
  // 迴圈跑一半就好 Math.floor
  const len = x.toString().length;

  const arr = x.toString().split('');
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - 1 - i]) return false;
  }
  return true;
};

var isPalindrome = function(x) {
  if (x < 0) return false;
  // 利用 + 將字串轉成數字
  return +String(x).split('').reverse().join('') === x;
};