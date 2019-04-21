function circulQueue(){
  let items = new Array(6),
      len = 6,
      num = 0;
  items.head = items.tail = 0

  // the following are methods
  this.enqueue = function(element){
    items[items.tail] = element
    num+=1
    items.tail = num % len
    if(items.tail === items.head){
      items.head = (items.tail + 1) % len
    }
  }
  this.dequeue = function(){
    if(items.head === items.tail){
      items[items.head] = undefined
      return;
    }
    items[items.head] = undefined
    items.head = (items.head + 1) % len
  }
  this.print = function(){
    let arr = []
    for(let i = 0; i<len; i++){
        arr.push(items[i])
    }
    console.log(arr)
  }
  this.head = function(){
    console.log(items.head)
  }
  this.tail = function(){
    console.log(items.tail)
  }
}
