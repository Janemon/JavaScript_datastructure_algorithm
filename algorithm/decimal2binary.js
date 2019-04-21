// verson 1
function d2b(int_num){
  let result = []
  while(int_num >= 1){
      result.push(int_num%2)
      int_num = Math.floor(int_num/2)
  }
  return result.reverse().join("")
}


// version 2
// 使用位操作符: >>
// 1. 右移相当于除2, 使用有符号右移(正负数都可以使用)
// 2. 但是这个移动是需要少于32位
// 3. 奇数的二进制末尾是 1
// 注意： 这个只有32位啊
function d2b(int_num){
  let result = []
  for(let i = 0; i<=32; i++){
    if((int_num >> i) === 0){
      break;
    }else{
      if((int_num >> i) & 1){
        result.push(1)
      }else{
        result.push(0)
      }
    }
  }
  return result.reverse().join("");
}
