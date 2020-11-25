let arr = [12,13,12,43,54,65,15,25,23,15,33]

//TODO: set
let Arr =  [...new Set(arr)]
console.log(Arr)

//TODO: indexOf去重

function fn(array){
  let res = []
  for(let i = 0; i< array.length; i++){
    if(res.indexOf(array[i])=== -1)
    res.push(arr[i])
  }
  return res
}

// console.log(fn(arr))

//TODO: 先排序
function fn2(array){
  let res = []
  array.sort((a,b)=>a-b)
  for(let i = 0;i < array.length;i++){
    if(array[i] !== array[i-1]){
      res.push(array[i])
    }
  }
  return res
}

console.log(fn2(arr))