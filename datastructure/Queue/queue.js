
/*===========================================*/
/*COMMENT>>>>  基于数组实现的简单队列类型
/*===========================================*/

// 这个队列中实现到的方法有：
// 1. enqueue (进队)
// 2. dequeue (出队)
// 3. front (显示队头）
// 4. isEmpty (判断队列是否为空)
// 5. clear (清空队列)
// 6. size (返回队列的元素个数)
// 7. print (打印队列的内容)
// 注意： 其实队列的主要操作方法只有两个： 进队和出队

/* code的实现 */
// 1. 普通版
function Queue(){
  let items = []
  this.enqueue = function(element){
    items.push(element)
  }
  this.dequeue = function(){
    return items.shift();
  }
  this.front= function(){
    return items[0];
  }
  this.isEmpty = function(){
    return items.length === 0;
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
let Queue = (function(){
  let items = new WeakMap()
  class Queue {
    constructor(){
      items.set(this, [])
    }
    enqueue(element){
      let s = items.get(this)
      s.push(element)
    }
    dequeue(){
      let s = items.get(this)
      return s.shift();
    }
    front(){
      let s = items.get(this)
      return s[0];
    }
    size(){
      let s = items.get(this)
      return s.length;
    }
    isEmpty(){
      let s = items.get(this)
      return s.length === 0;
    }
    clear(){
      let s = items.get(this)
      s = items.set(this, [])
    }
    print(){
      let s = items.get(this)
      console.log(s.toString())
    }
  }
  return Queue;
})()
