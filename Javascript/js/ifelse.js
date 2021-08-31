const number = prompt("Enter a number: ");

if(number > 0)
    console.log("The number is positive");

console.log("The if statement is easy");

if(number > 0)
    console.log("The number is positive");
else
    console.log("The number is a negative number or 0");

console.log("The if-else statement is easy!");

if(number > 0)
    console.log("The number is positive");
else if(number == 0)
    console.log("The Number is 0")
else
    console.log("The number is a negative number");

console.log("The if-else-if statement is easy!");

var msg = "enter the percent of student: ";

var percent = prompt(msg);

if(percent > 85)
    console.log("Grade = A");
else if(percent <= 70 && percent > 80)
    console.log("Grade = A-");
else if(percent <= 80 && percent > 70)
    console.log("Grade = B");
else if(percent <=70 && percent > 60)
    console.log("Grade = C");
else if(percent <=60 && percent > 40)
    console.log("Grade = D");
else if(percent <=40)
    if(percent <= 35)
        console.log("Grade = F Student Failed");
    else
        console.log("Grade = F");