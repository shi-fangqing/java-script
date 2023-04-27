var arr=[2,3,5,1,6,2];
for(var i in arr){
    console.log(arr[i]);
}

console.log('构造函数：'+arr.constructor); // [Function: Array]

console.log('数组长度：'+arr.length); // 6

arr.push(10);
console.log('尾插：'+arr); // [2, 3, 5, 1,6, 2, 10]

var res=arr.pop();
console.log('尾删：'+res); // [2, 3, 5, 1,6, 2]

arr.unshift(9);
console.log('头插：'+arr); // [9,2,3,5,1,6,2]

res=arr.shift();
console.log('头删：'+res); // [2,3,5,1,6,2]

arr.forEach((item,i)=>{
    console.log('arr['+i+']='+item);
})

//slice() 数组的截取，左闭右开
arr=arr.slice(1,4); // [2,3,5,1,6,2] => [3,5,1]
console.log(arr); // [ 3, 5, 1 ]

//splice() arg1:开始位置的索引，
//         arg2:要删除的元素数量，
//         arg3:插入新的元素，自动插入到开始索引前面
arr.splice(0,2,9,3,1); //从索引0开始，删除两个元素，再依次插入9,3,1
console.log(arr); // [ 9, 3, 1, 1 ]