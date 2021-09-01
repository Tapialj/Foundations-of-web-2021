$(function() 
{
    $("#clicker").click(buttonClicked);
    $("#welcome").click(buttonWelcome);
    $(".text-box").focus(focusColorChange);
    $(".text-box").blur(blurColorChange);
    $("#change-me").click(styleChange);
    $("#change-me").click(styleChange2);
    $(".button-color-change").click(styleID);
    $("#button-toggle").click(toggleStyle);
    $("#button-text").click(adoptText);
    $("#text-area-length").on("input", charCount);
    $("#toggle-message").click(toggleMessage);


    function buttonClicked()
    {
        $("body").append("<p>Button was clicked!</p>");
    }

    function buttonWelcome()
    {
        $("#welcome-message").html("Welcome to my Website!");
    }

    function focusColorChange()
    {
        $(this).css("background-color", "#ffff00");
    }

    function blurColorChange()
    {
        $(this).css("background-color", "#ffffff");
    }

    function styleChange()
    {          
        $("#color-change-text").removeClass("box-change").addClass("box-change-alt");
    }

    function styleChange2()
    {
        let thisClass = $("#color-change-text2").attr("class");

        if(thisClass == "box-change-2")
        {
            $("#color-change-text2").removeClass(thisClass).addClass("box-change-2-alt");
        }
        else
        {
            $("#color-change-text2").removeClass(thisClass).addClass("box-change-2");
        }
    }

    function styleID()
    {
        let thisID = $(this).attr("id");

        console.log(thisID);

        if(thisID == "button-change-2")
        {
            $(this).attr("id", "button-change");
        }
        else
        {
            $(this).attr("id", "button-change-2");
        }
    }
    
    function toggleStyle()
    {
        $(this).toggleClass("button-style-change-toggle");
    }

    function adoptText()
    {
        let inputText = $("#text-adopt").val();

        $(this).text(inputText);
    }

    function charCount ()
    {
        let charLength = $(this).val().length;

        $("#char-count").text("Character Count = " + charLength);
    }

    function toggleMessage()
    {
        $("#secret-message").toggle("slow");
    }

});