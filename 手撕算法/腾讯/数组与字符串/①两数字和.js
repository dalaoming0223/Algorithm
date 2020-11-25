/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2,7,11,15]
let target = 9
var twoSum = function(nums, target) {
  let map = new Map()
  
  for(let i in nums){
    const tmp = target - nums[i]
    if(map.has(tmp)){
      return [map.get(tmp), i]
    }else{
      map.set(nums[i], i)
    }
  }
};

console.log(twoSum(nums, target))