function newItem()
{
    //this grabs user text inside input from ID todo, grabs the value element.
    let item = document.getElementById("todo").value;
    //this is grabbing the <ul> from the HTML and assigning it to a variable
    let ul = document.getElementById("list");
    //this is creating an <li> element and assigning it to a variable
    let li = document.createElement("li");

    //the appendChild() methond is taking the value of our item and creating a textnode (essentially a string) that will append as "- item". Append
    li.appendChild(document.createTextNode("- " + item));

    ul.appendChild(li);

    //resets the input tag value to empty string
    document.getElementById("todo").value = "";

    li.onclick = removeItem;
}

document.body.onkeyup = function(e) 
{
    if(e.keyCode == 13)
        newItem();
};

//e represents element effected by event
function removeItem(e)
{
    e.target.parentElement.removeChild(e.target);
}