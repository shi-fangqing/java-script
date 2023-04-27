function Person(){
    this.age='23';
}

var person=new Person();
Person.prototype.name="名称";
console.log('name' in person);  // true
console.log(person.hasOwnProperty('name')); // false

console.log('age' in person); // true
console.log(person.hasOwnProperty('age')); // true 

/*
    'property' in object   // 会到原型对象内查找
     object.hasOwnProperty('property') // 只在自身对象中查找属性
*/