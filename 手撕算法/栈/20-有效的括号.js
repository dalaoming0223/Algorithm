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


var isValid = function(s) {
  let stack = []
  for (n in s){
      
      let gg = s[n];
      if(gg === '(' || gg === '[' || gg === '{' ){
          stack.push(gg)
      }else{
          let mm = stack[stack.length - 1]
          if((mm==="(" && gg===')') || 
             (mm==="[" && gg===']') ||
             (mm==="{" && gg==='}')
          ){
              stack.pop()
          }else{
              return false
          }
      }


  }
  return stack.length === 0
};