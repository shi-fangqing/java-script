function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.sayName=function(){
    console.log('我是'+this.name);
}

var person1=new Person('jack',43);
var person2=new Person('tom',34);

person1.sayName();
person2.sayName();

// ========================================================

person1.__proto__.sayName=function(){
    console.log('他是'+this.name);
}

person1.sayName();
person2.sayName();

// ===========================================================

Person.prototype.name="名称";
person1.sayName(); // jack
person2.sayName(); // tom 

/*
    Person.prototype
    person1.__proto__
    以上两种方式均可以找到原型对象，
    通过对原型对象属性和方法的修改可以影响它的每一个实例。
    当前对象自身找不到某个属性时，就会去原型对象上找，如果一直向上找不到就报错。
*/
