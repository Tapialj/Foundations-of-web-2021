$(function(){

    $("section").hide().fadeIn(1000);

    $("a").click(function (e) 
    {
        e.preventDefault();
        $link = $(this).attr("href");
        $("section").fadeOut(1000, function () 
        {
            window.location = $link;
        });
    });

    $(window).scroll(function () 
    {
        if($(this).scrollTop())
        {
            $("#toTop").fadeIn();
        }
        else
        {
            $("#toTop").fadeOut();
        }
    })

    $("#toTop").click(function ()
    {
        $("html,body").animate({scrollTop: 0}, 1000);
    })

})