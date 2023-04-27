function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log('我是'+this.name);
    }
}

var person=new Person('孙悟空',23);
console.log(person instanceof Person); // true