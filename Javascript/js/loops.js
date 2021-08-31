const limit = 5;

for(var i = 0; i <= limit; i++)
{
    console.log("I Love Javascript");
    console.log(i);
}

let sum = 0;
let sumLimit = 100;

for(i = 1; i <= sumLimit; i++)
{
    sum += i;
}

console.log("Sum = " + sum);

let num = 1;
let numLimit = 20;

for(; num <= numLimit; num++)
{
    if(num % 2 === 0)
    {
        console.log(num + " is even.");
    }
    else
    {
        console.log(num + " is odd.");
    }
}

let multiplier = 9;

for(var i = 0; i <= 10; i++)
{
    var result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
}