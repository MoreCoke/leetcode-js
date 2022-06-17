/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const numsMap = new Map(
      nums.map((num, idx) => [num, idx])
  );
  let ans = [];
  nums.some((num, idx) => {
      const rest = target - num;
      if (numsMap.has(rest) && idx !==numsMap.get(rest)) {
          ans = [idx, numsMap.get(rest)];
          return true;
      }
  })
  return ans;
};

// 建立 Map 加快拿資料的速度
// 加入 if 避免拿到重複的元素
// 利用 target - num 來找出 num 的互補數