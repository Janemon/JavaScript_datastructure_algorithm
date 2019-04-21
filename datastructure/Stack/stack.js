
/*===========================================*/
/*COMMENT>>>>  基于数组来实现的简单栈类型
/*===========================================*/

// 栈中的实现的方法有：
// 1. push (推入)
// 2. pop (弹出）
// 3. peek (显示栈顶）
// 4. isEmpty (判断栈是否为空)
// 5. clear (清空栈)
// 6. size (返回栈的元素个数)
// 7. print (打印栈的内容)

/* Code实现 */
// 1. 普通版
function Stack(){
  let items = []
  this.push = function(element){
    items.push(element)
  }
  this.pop = function(){
    return items.pop();
  }
  this.peek = function(){
    return items[items.length-1];
  }
  this.isEmpty = function(){
    return this.length === 0;
  }
  this.clear = function(){
    items = []
  }
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    console.log(items.toString())
  }
}
// 缺点:  这个方法，会给每个实例创建了一个items变量的副本, 如果要创建多个实例就不怎么合适了

// 2. 使用 weakMap, 构建类的私有变量
let Stack = (function(){
  const items = new WeakMap()   // 为了设置私有变量而引入
  class Stack {
    constructor(){
      items.set(this, [])
    }
    push(element){
      let q = items.get(this)
      q.push(element)
    }
    pop(){
      let q = items.get(this)
      return q.pop();
    }
    peek(){
      let q = items.get(this)
      return q[s.length-1]
    }
    isEmpty(){
      let q = items.get(this)
      return q.length === 0;
    }
    clear(){
      items.set(this, [])
    }
    print(){
      let q = items.get(this)
      console.log(q.toString())
    }
    size(){
      let q = items.get(this)
      return q.length;
    }
  }
  return Stack;
})()
