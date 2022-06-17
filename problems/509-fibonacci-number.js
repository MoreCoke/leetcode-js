/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 0 1 1 2 3 5 8
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
      const el = arr[i - 1] + arr[i - 2];
      arr.push(el);
    }
    return arr[arr.length - 1];
  }
};
