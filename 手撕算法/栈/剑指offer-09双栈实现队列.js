stack1 = [1,2,3,4,5]
stack1.pop()
console.log(stack1)
stack1.push(1)
console.log(stack1)


智能模式

模拟面试






6789101112345
var CQueue = function() {

};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {


测试用例
代码执行结果
调试器
已完成
执行用时：104 ms
输入
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出
[null,null,undefined,undefined,undefined]
预期结果
[null,null,3,-1,-1]
控制台 
5 / 903

双栈
shetia

发布于 2020-06-30
3.1k
解题思路
题目说使用两个栈实现队列: 栈, 后进先出, 表示只能使用 push 和 pop 方法


   // 如 现在有两个栈
  stack1 = []
  stack2 = []

  // 我们用 push  往stack1里加入几个元素 
  stack1 = [1, 2, 3]

  // 现在我们要一个一个地取出头部的元素
  // 我们可以循环 stack1,  把 stack1 元素一个个取出来 放入到 stack2中
  stack1 = []
  stack2 = [3, 2, 1]
  // 这样就可以用 pop 取出 头部元素了, 其实就是翻转数组
  // 如果stack2不为空 我们就一直从 stack2 中取, 直到为空了 又重新把 stack1 中的元素放入 stack2 中

  //如
  stack1 = [4, 5]
  stack2 = [3, 2]
  // 现在 2 中有元素, 要出队的话直接从 2 中出, 直到为空
  stack2.pop()
  stack2.pop()   // 现在为空了
  // 重新循环 1 , 回到了上面开始的情况
  stack1 = []
  stack2 = [5, 4]
  


var CQueue = function() {
   this.stack1 = []
   this.stack2 = []
};

CQueue.prototype.appendTail = function(value) {
  this.stack1.push(value)

  return null
};

CQueue.prototype.deleteHead = function() {
  
}