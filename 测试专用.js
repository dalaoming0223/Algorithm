const target = 4
const nums = [-2,-1,1,2,3,4,5,6,7,8,9,10,11,12]

var twoSum = function(nums, target) {
  let res = {}
  for(let i =0; i < nums.length ; i++){
    if(res[nums[i]] != undefined){
      return [nums[i],res[nums[i]]]
    }else{
      res[target - nums[i]] = nums[i]
    }
  }
}

console.log(twoSum(nums, target))