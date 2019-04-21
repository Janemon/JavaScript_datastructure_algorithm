
/*===========================================*/
/*COMMENT>>>> 基于数组实现的优先队列
/*===========================================*/

// 根据优先级来对数据进行入队，数值大就排在前面，
// 反之亦然

function priorityQueue(){
  let items = []
  this.enqueue = function(element, int_priority){
    let obj = {
      value: element,
      priority: int_priority
    }
    if(items.length === 0){
      items.push(obj)
    }else{
      for(let i=0, len = items.length; i<len; i++){
        if(obj.priority > items[i].priority){
          items.splice(i, 0, obj)
          return;
        }
      }
      items.push(obj)
    }
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
    console.log(items)
  }
}


let priorityQueue = (function(){
  const items = new WeakMap()
  class priorityQueue {
    constructor(){
      items.set(this, [])
    }
    enqueue(element, int_priority){
      let q = items.get(this)
      let obj = {
        value: element,
        priority: int_priority
      }
      if(q.length === 0 || typeof obj.priority !== "number"){
        q.push(obj)
      }else{
        for(let i=0, len = q.length; i<len; i++){
          if(obj.priority > q[i].priority || typeof q[i].priority !== "number"){
            q.splice(i, 0, obj)
            return;
          }
        }
        q.push(obj)
      }
    }
    dequeue(){
      let q = items.get(this)
      return q.shift();
    }
    front(){
      let q = items.get(this)
      return q[0];
    }
    size(){
      let q = items.get(this)
      return q.length;
    }
    isEmpty(){
      let q = items.get(this)
      return q.length === 0;
    }
    clear(){
      let q = items.get(this)
      q = items.set(this, [])
    }
    print(){
      let q = items.get(this)
      console.log(q)
    }
  }
  return priorityQueue;
})()
