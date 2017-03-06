$("#chocolate").on("click", function(){
	window.open(chocolate.html)
});

$("#fruit").on("click", function(){
	window.open(fruit.html)
});

$("#salt").on("click", function(){
	window.open(salt.html)
});

$(".header-links").hide();

$(".hover").on("mouseover", function(){
	$(this).css("opacity", ".5")
	$(this).find(".header-links").show();
});

$(".hover").on("mouseout", function(){
	$(this).css("opacity", "1")
	$(this).find(".header-links").hide();
});


$("hazelnut-truffles-img").on("click", function(){

});

$("oat-choc-chip-cookies-img").on("click", function(){
	
});

$("smores-brownies-img").on("click", function(){
	
});

