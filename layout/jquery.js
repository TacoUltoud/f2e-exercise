$(document).ready(function() {
  console.log("ready!");
});

$(window).on("load", function() {
  console.log("window loaded");
});

// $(function) is shorthand for $(document).read()
$("#backtotop").on("click",function(){
  $("html,body").animate({scrollTop: 0},1000);
});

$(window).on("scroll",function(){
  if($(this).scrollTop() > 300) $("#backtotop").addClass("visible");
  else $("#backtotop").removeClass("visible");
});

$(".hide").on("click",function(){
  $(".services article p").hide();
});

$(".show").on("click",function(){
  $(".services article p").show();
});

$("#toggle").on("click",function(){
  $(".services article p").toggle("slow");
})

$("#slide_up").on("click",function(){
  $(".pricelist div:last-child").slideUp("slow");
})

$("#slide_down").on("click",function(){
  $(".pricelist div:last-child").slideDown("down");
})