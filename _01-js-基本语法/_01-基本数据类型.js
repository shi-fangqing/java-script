var num=123;
console.log(typeof num); // number

var str="abc";
console.log(typeof str); // string

var isSuccess=true;
console.log(typeof isSuccess); // boolean

var val=null;
console.log(typeof val); // object , null是空对象，是null型

var cur;
console.log(typeof cur);  // undefined

/*
1. Number  
    特殊的数字：Infinity  正无穷
               -Infinity 负无穷
               NaN  非数字 （Not a Number）

2. String 
    使用单引号或双引号 括起来

3. Boolean 
    true false

4. Undefined
    Undefined类型只有一个值，即undefined
    使用的变量没有赋值就是 undefined.

5. Null
    undefined==null 返回 true  
*/