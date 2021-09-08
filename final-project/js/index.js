$(function ()
{

    $(".mobile-menu").click(expandMenu);


    function expandMenu()
    {
        $(".desktop-menu").toggleClass("menu-expand");
        $(this).toggleClass("menu-open");
    };
});