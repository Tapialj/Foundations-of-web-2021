$(function ()
{
    
    var imgID = "#";

    $("h2").mouseover(function ()
    {
        let mouseText = $(this).attr("class").split(" ")[0];
        
        switch(mouseText)
        {
            case "women-cut":
                imgID += mouseText;
                break;
            case "men-cut":
                imgID += mouseText;
                break;
            case "kid-cut":
                imgID += mouseText;
                break;
            case "trim":
                imgID += mouseText;
                break;
            case "shampoo":
                imgID += mouseText;
                break;
            case "blow-out":
                imgID += mouseText;
                break;
            case "formal":
                imgID += mouseText;
                break;    
            case "style":
                imgID += mouseText;
                break;
            case "braid":
                imgID += mouseText;
                break;
            case "wh-light":
                imgID += mouseText;
                break;
            case "wh-hl-ll":
                imgID += mouseText;
                break;
            case "part-hh-ll":
                imgID += mouseText;
                break;
            case "color":
                imgID += mouseText;
                break;
            case "retouch":
                imgID += mouseText;
                break;
            case "bright-color":
                imgID += mouseText;
                break;
            case "perm":
                imgID += mouseText;
                break;
        }

        $(imgID).show();
    });

    $("h2").mouseout(function ()
    {
        $(imgID).delay(1000).hide(0);

        imgID = "#";
    });

})