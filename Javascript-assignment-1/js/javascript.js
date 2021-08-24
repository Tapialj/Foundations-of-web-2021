//Part 1
var count = 1;
var sentence = "This is a string";
var isTrue = true;


//Part 2
console.log("count is a " + typeof(count) + " type" + "\nsentence is a " + typeof(sentence) + " type" + "\nisTrue is a " + typeof(isTrue) + "type");


//Part 3
{
    var globalVar1 = 6;
    var globalVar2 = 8;
}

function add(num1, num2) 
{
    return num1 + num2;
}

console.log(add(globalVar1, globalVar2));


//Part 4
var multiType = null;

console.log(typeof(multiType));

multiType = 500;

console.log(typeof(multiType));

multiType = "Yellow";

console.log(typeof(multiType));

multiType = {   
    carMake: "Chevy",
    carModel: "Corvette",
    carColor: "Black",
    carSpecs: function() 
    {
        return "This is a " + this.carMake + " " + this.carModel + " and is the color " + this.carColor + ".";
    }
}

console.log(typeof(multiType) + "\n" + multiType.carSpecs());


//Part 5
var toDoList = new Array("Vacuum", "Wash dishes", "Do laundry");

function toDoListLength(arrayToCheck) 
{
    console.log(arrayToCheck.length);
}

toDoListLength(toDoList);

for(let i = 0; i < toDoList.length; i++) 
{
    console.log(toDoList[i]);
}

//Part 6
var animal = {
    type: "sky bison",
    name: "Appa",
    color: "off white",
    weight: 20000,
    diet: "hey",
    activities: 
    {
        activity1: "fly",
        activity2: "eat",
        activity3: "sleep"
    },
    animalSummary: function()
    {
        return this.name + " is a " + this.type + " and they like to " + this.activities.activity1 + ", " + this.activities.activity2 + ", and " + this.activities.activity3;
    }
}

console.log(animal.animalSummary());