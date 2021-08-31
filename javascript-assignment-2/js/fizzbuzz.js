const limit = 100;

for(var i = 1; i <= limit; i++)
{
    let output = "";

    if(i % 3 == 0)
    {
        output += "Fizz";
    }

    if(i % 5 == 0)
    {
        output += "Buzz";
    }

    console.log(i + " " + output);
}