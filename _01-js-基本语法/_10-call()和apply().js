function fun(a,b){
    console.log('a='+a);
    console.log('b='+b);
    console.log('this='+this);
}

fun(2,3);  // this=[object global]

var obj=new Object();
fun.call(obj,12,13); // this=[object Object]

fun.apply(obj,[12,13]); // this=[object Object]

/**
 * call() 和 apply()
 *  共同点：函数名. 的方式调用，第一个参数指明调用哪个对象的方法。
 *  不同点：
 *      call() 将实参在对象之后依次传递。
 *      apply() 将实参封装成数组对象传递。    
 */