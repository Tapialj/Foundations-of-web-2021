var myVar = 0;

myVar = true;
myVar = null;
myVar = undefined;
myVar = "Steve";

/**
alert(myVar);

prompt();
*/

console.log(myVar);

var str1 = "this is a \"simple \" string";
var str2 = "This is also a 'simple' string";

console.log(str1);
console.log(str2);

var str3 = new String("Hello World");
var str4 = new String("Hello World");
var str5 = "Hello" + " " + "World";
var str6 = str3;

console.log(typeof(str3) == typeof(str4));
console.log(typeof(str3) == typeof(str5));
console.log(typeof(str3) === typeof(str6));

var school = new String("AIM Code School");

console.log(school.toString());