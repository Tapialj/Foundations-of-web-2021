//initialize array with 3 variables
var fruits = new Array("apple", "orange", "peach");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//add item at end
fruits.push("pear");

console.log(fruits);

//add item at beginning
fruits.unshift("plum");

//add item via index
fruits[5] = "banana";

//change array item per index
fruits[1] = "not apple";

console.log(fruits);

//remove last element of array with pop, you can add popped item to var to log what was removed
var removedElement = fruits.pop();

console.log(fruits);
console.log(removedElement);

//remove first element of array with shift and returns removed item similar to pop
removedElement = fruits.shift();

console.log(fruits);
console.log(removedElement);

//show the number of elements in an array
console.log(fruits.length);