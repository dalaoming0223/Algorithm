/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
      "(":")",
      "[":"]",
      "{":"}"
  }
  let leftArr = []
  for(n of s){
      if(map[n]){
          leftArr.push(n)
      }
      else{
          let last = leftArr.pop()
          if(n != map[last]){
              return false
          }
      }
  }
  return !leftArr.length
};