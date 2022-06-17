/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // loop 一次，用物件紀錄每個數字出現的次數
  // 再 loop 一次，找出 value 是 1 的情況
  // return 只出現一次的值
  const obj = {};
  nums.forEach((el) => {
    if (obj[el]) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  });

  return Object.keys(obj)
    .filter((el) => obj[el] === 1)
    .pop();
};
