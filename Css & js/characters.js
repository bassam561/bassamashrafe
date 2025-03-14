$(".c-btn1, .c-btn2, .c-btn3").click(function () {
    $(".c-btn1, .c-btn2, .c-btn3").css({"background-color": "transparent", "color":"#000"});
    $(this).css({"background-color": "#000", "color":"#fff"});
});

$(".c-btn1").click(function () {
    $(".INFECTED").fadeIn(1);
    $(".MAIN").fadeOut(1);
    $(".SECOND").fadeOut(1); 
});

$(".c-btn2").click(function () {
    $(".INFECTED").fadeOut(1);
    $(".MAIN").fadeIn(1);
    $(".SECOND").fadeOut(1); 
});

$(".c-btn3").click(function () {
    $(".INFECTED").fadeOut(1);
    $(".MAIN").fadeOut(1);
    $(".SECOND").fadeIn(1); 
});