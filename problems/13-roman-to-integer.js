/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 腦袋炸開
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let str = s.replace('IV', 'IIII').replace('IX', 'VIIII');
  str = str.replace('XL', 'XXXX').replace('XC', 'LXXXX');
  str = str.replace('CD', 'CCCC').replace('CM', 'DCCCC');
  const arr = str.split('');
  let ans = 0;
  arr.forEach((el) => (ans += obj[el]));
  return ans;
};

// https://zyrastory.com/en/coding-en/leetcode-en/leetcode-13-roman-to-integer-solution-and-explanation-en/

var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = s.split('');
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = obj[arr[i]];
    const next = obj[arr[i + 1]];
    // IV XL 的共通性是當前數字比前一個數字大
    if (next > current) {
      ans += next - current;
      i++; // 跳過下一次的迴圈
    } else {
      ans += current;
    }
  }
  return ans;
};
