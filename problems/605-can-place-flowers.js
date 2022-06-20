/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  let max = 0;
  let arr = [...flowerbed]; // 避免直接改 flowerbed 動到原本變數
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1] || 0; // || 0 用來處理尾端能種花的情形，當 current 是最後一個且是 0， next 會是 undefined 用 || 0 把它轉成 0，如果 prev 也是 0 就符合種花條件
    const prev = arr[i - 1] || 0; // || 0 用來處理首端能種花的情形，當 current 是第一個且是 0， prev 會是 undefined 用 || 0 把它轉成 0，如果 prev 也是 0 就符合種花條件
    // 出現三個洞時，可以在當前的洞種花
    if (current === 0 && next === 0 && prev === 0) {
      max++;
      arr[i] = 1; // 在當前的洞種花
    }
  }
  return max >= n;
};
