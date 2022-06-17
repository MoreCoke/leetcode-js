/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const canDividBy3 = (num) => num % 3 === 0;
  const canDividBy5 = (num) => num % 5 === 0;
  const ans = [];
  for (let i = 1; i < n + 1; i++) {
    if (canDividBy3(i) && canDividBy5(i)) {
      ans.push('FizzBuzz');
    } else if (canDividBy3(i)) {
      ans.push('Fizz');
    } else if (canDividBy5(i)) {
      ans.push('Buzz');
    } else {
      ans.push(`${i}`);
    }
  }
  return ans;
};
