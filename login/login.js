
$(function(){
$("#header-t").css({"background-color":"#333333","height":"62px","padding-top":"5px"});
$("#header").children().css({"float":"left"}).end().find("p").css({"font":"600 18px/43px '' ","color":"white"})
$("#type").css({"height":"33px","margin-top":"33px"}).children()
.css({"float":"left","font":"14px/33px '' "}).end().find(".p").css({"float":"right"}).find("span").css({"color":"red"});








$(".type_phone").click(function(){
	$(this).css({"background-color":"red"}).siblings("div").css({"background-color":"darkgray"});
	$("#tel").css({"display":"block"});
	$("#eml").css({"display":"none"});
});
$(".type_email").click(function(){
	$(this).css({"background-color":"red"}).siblings("div").css({"background-color":"darkgray"});
	$("#eml").css({"display":"block"});
	$("#tel").css({"display":"none"});
});











});