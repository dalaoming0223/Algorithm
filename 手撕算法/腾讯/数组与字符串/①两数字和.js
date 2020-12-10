/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [-2, 1, 2, 7, 11, 15]
let target = 9
// var twoSum = function(nums, target) {
//   let map = new Map()

//   for(let i in nums){
//     const tmp = target - nums[i]
//     if(map.has(tmp)){
//       return [map.get(tmp), i]
//     }else{
//       map.set(nums[i], i)
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === target - nums[j]) {
//         return [i, j]
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  const originMap = new Map();
  nums.forEach((item, index) => {
    originMap.set(item, index);
  });
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (originMap.has(diff) && i !== originMap.get(diff)) {
      return [i, originMap.get(diff)];
    }
  }

};


console.log(twoSum(nums, target))