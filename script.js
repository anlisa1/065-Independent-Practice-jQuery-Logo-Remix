$(".board").hide();
$(".start").click(function(){
	$(".board").slideDown();
});
//1
$(".end").click(function(){
	$(".board").slideUp();
});

//2

$(".board").hover(function() {
    $(".board").css("border","solid blue 5px");
    $("button").css("background-color","blue");
    $("button").css("color","black");
});

//3
$(".board").mouseenter(function() {
    $(".board").css("border-color","black");
    $("button").css("background-color","black");
    $("button").css("color","white");
});

//4
$(".board").dblclick(function() {
    $(".company-slogan").text("Connecting Communities.Creating Opportunities");
    
});

//5
$(".board").mouseout(function() {
    $(".company-slogan").text("");
    $("button").css("background-color","blue");
    $("button").css("color","black");
});


//6
