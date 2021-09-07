$(function ()
{
    let baseImgID = "#";
    let targetImgID = "";
    let currentImgID = "";

    const hideImageNow = function(imgID) {
        $(imgID).hide();

        if(currentImgID == imgID)
        {
            currentImgID = "";
        }
    }

    const hideImageLater = function(imgID, delay) {
        setTimeout(hideImageNow, delay, imgID);
    }

    const showImage = function(imgID) {
        if(currentImgID != "")
        {
            hideImageNow(currentImgID);
        }

        currentImgID = imgID;

        $(imgID).show();
    }

    $("h2").mouseover(function ()
    {
        let mouseText = $(this).attr("class").split(" ")[0];
        targetImgID = baseImgID;
        
        switch(mouseText)
        {
            case "women-cut":
                targetImgID += mouseText;
                break;
            case "men-cut":
                targetImgID += mouseText;
                break;
            case "kid-cut":
                targetImgID += mouseText;
                break;
            case "trim":
                targetImgID += mouseText;
                break;
            case "shampoo":
                targetImgID += mouseText;
                break;
            case "blow-out":
                targetImgID += mouseText;
                break;
            case "formal":
                targetImgID += mouseText;
                break;    
            case "style":
                targetImgID += mouseText;
                break;
            case "braid":
                targetImgID += mouseText;
                break;
            case "wh-light":
                targetImgID += mouseText;
                break;
            case "wh-hl-ll":
                targetImgID += mouseText;
                break;
            case "part-hh-ll":
                targetImgID += mouseText;
                break;
            case "balayage":
                targetImgID += mouseText;
                break;
            case "color":
                targetImgID += mouseText;
                break;
            case "retouch":
                targetImgID += mouseText;
                break;
            case "bright-color":
                targetImgID += mouseText;
                break;
            case "perm":
                targetImgID += mouseText;
                break;
        }

        showImage(targetImgID);
    });

    $("h2").mouseout(function ()
    {
        hideImageLater(currentImgID, 3000);
    });

})