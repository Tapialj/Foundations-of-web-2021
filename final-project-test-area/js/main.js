var cubex = -22,    // initial rotation
cubey = -38,
cubez = 0;
function rotate(variableName, degrees) {
    window[variableName] = window[variableName] + degrees;
    rotCube(cubex, cubey, cubez);
}
function rotCube(degx, degy, degz){
    segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
    $('#D3Cube').css({"transform":segs});
}
function turnRight() {
    rotate("cubey", 90);
}
function turnLeft() {
    rotate("cubey", -90);
}
function flipCube() {
    rotate("cubez", -180);
}

//for first drop down menu example
/*
$(document).on('ready', function () 
{

    $("#source").on('change', function () 
    {
        var el = $(this);

        if (el.val() === "ONLINE") 
        {
            $("#status").append("<option>SHIPPED</option>");
        } 
        else if (el.val() === "MANUAL") 
        {
            $("#status option:last-child").remove();
        }
    });

});
*/

function dynamicdropdown(listindex)
{
    switch (listindex)
    {
        case "manual" :
            document.getElementById("status").options[0]=new Option("Select status","");
            document.getElementById("status").options[1]=new Option("OPEN","open");
            document.getElementById("status").options[2]=new Option("DELIVERED","delivered");
            break;
            
        case "online" :
            document.getElementById("status").options[0]=new Option("Select status","");
            document.getElementById("status").options[1]=new Option("OPEN","open");
            document.getElementById("status").options[2]=new Option("DELIVERED","delivered");
            document.getElementById("status").options[3]=new Option("SHIPPED","shipped");
            break;
        }
            
    return true;
}

//for W3 schools example. Was originally in head script tag, move there if doesn't work. This is PHP I believe.
var subjectObject = 
{
    "Front-end": 
    {
      "HTML": ["Links", "Images", "Tables", "Lists"],
      "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
      "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
    },
    "Back-end": 
    {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}

window.onload = function() 
{
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    
    for (var x in subjectObject) 
    {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    
    subjectSel.onchange = function() 
    {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) 
      {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }

    topicSel.onchange = function() 
    {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      
      for (var i = 0; i < z.length; i++) 
      {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
}

//for blocking out datepicker
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);