function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log('我是'+this.name);
    }
}

var person1=new Person('孙悟空',24);
var person2=new Person('猪八戒',34);
var person3=new Person('唐僧',124);

person1.sayName();
person2.sayName();
person3.sayName();