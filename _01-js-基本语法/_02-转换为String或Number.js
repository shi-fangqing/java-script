var a=123;
a=a.toString();
console.log(a); 
console.log(typeof a); // string

var b=123;
b=String(b);
console.log(b);
console.log(typeof b);

var c=123;
c=c+"";
console.log(c);
console.log(typeof c);

// =====================================

var d="123";
d=Number(d);
console.log(d);
console.log(typeof d); // number

var e="123";
e=parseInt(e);
console.log(e);
console.log(typeof e);

var f="123";
f=parseFloat(f);
console.log(f);
console.log(typeof f);