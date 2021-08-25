function sum(a, b)
{
    console.log(this === window); //will return true
    this.mynumber = 20; //add mynumber property to global object
    return a + b;
}

//sum() is inoved as a function
//this in sum() is a global object (window)
console.log(sum(15, 16));
console.log(window.mynumber);



function multiply(a, b)
{
    'use strict';

    console.log(this === undefined);
    return a * b;
}

multiply(2, 5);



function nonStrictSum(a, b)
{
    console.log(this === window);
    return a + b;
}

function strictSum(a, b)
{
    'use strict';

    console.log(this === undefined);
    return a + b;
}

// nonStrictSum() is invoked as a function in non-strict mode
// this in nonStrictSum() is the window object
nonStrictSum(5, 6);

// strictSum() is invoked as a function in strict mode
// this in strictSum() is undefined
strictSum(8, 12);



const numbers = {
    numberA: 5,
    numberB: 10,
    sum: function() 
    {
        console.log(this === numbers); //returns true
        
        function calculate() 
        {
            //this is window or undefined in strict mode
            console.log(this === numbers); //returns false
            return this.numberA + this.numberB;
        }

        /**
         * This is another way to fix the issue, the arrow function.
        const calculate = () => {
            console.log(this ==== numbers); //returns true
            return this.numberA + this.numberB;
        }
        */

        return calculate();
        //return calculate.call(this); //This will fix the issue and make this within the calculate method log true
    }
};

numbers.sum(); //returns NaN or will throw TypeError in strict mode



