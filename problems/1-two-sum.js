/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 建立 Map 加快拿資料的速度
  // 加入 if 避免拿到重複的元素
  // 利用 target - num 來找出 num 的互補數

  const numsMap = new Map(nums.map((num, idx) => [num, idx]));
  let ans = [];
  nums.some((num, idx) => {
    const rest = target - num;
    if (numsMap.has(rest) && idx !== numsMap.get(rest)) {
      ans = [idx, numsMap.get(rest)];
      return true;
    }
  });
  return ans;
};

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (obj.hasOwnProperty(rest)) {
      return [obj[rest], i];
    }
    obj[nums[i]] = i;
  }
};
