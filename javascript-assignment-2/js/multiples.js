const limit = 1000;
let sum = 0;

for(var i = 0; i < limit; i++)
{
    if(i % 2 == 0 || i % 6 == 0)
    {
        sum += i;
    }
}

console.log("The sums of multiples of 2 and/or 6 below 1000 is: " + sum);