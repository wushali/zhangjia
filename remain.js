function buildblock1(idname,imgurl){
				var ofu=document.getElementById(idname);
				$("#"+idname+" ul li").attr("class",idname+"_ul_li");
			
			var lis=document.getElementsByClassName(idname+"_ul_li");
		
			for(var i=1;i<lis.length;i++){
				
				var oa=document.createElement("a");
				$(oa).addClass("blockhover");
				lis[i].appendChild(oa);
				var oimg=document.createElement("img");
				
				oimg.setAttribute("src",imgurl);
				oimg.style="width:160px;height:160px;margin-top:30px;";
				oa.appendChild(oimg);
				var oh2=document.createElement("h2");
				oh2.innerHTML="HUAWEI MATEBOOK E"
				oa.appendChild(oh2);
				var op1=document.createElement("p");
				op1.innerHTML="直降200";
				var op2=document.createElement("p");
				op2.innerHTML="￥5999";
				oa.appendChild(op1);
				oa.appendChild(op2);

				op1.style="font:12px/22px '' ;";
				op2.style="font:12px/22px '' ;color:red;";
				var ass=ofu.getElementsByTagName("a");
				$(ass).addClass("movehover");
				
			}
			}
			
			
			
			
			buildblock1("main-shouji","img/main-shouji2.jpg");
			buildblock1("main-bijibendiannao","img/main-bijibendiannao1.jpg");
			buildblock1("main-jingpindiannao","img/jingpindiannao2.jpg");
			buildblock1("main-zhinengchuandai","img/zhinengchuandai2.jpg");
			buildblock1("main-zhinengjiaju","img/zhinengjiaju2.jpg");
			
			
//header btn点击事件
			
			$("#header_btn").click(function(){
				$("#header").css("display","none");
				$("#banner").css("top","110px");
				$("#banner_list").css("top","110px");
			});
			
			
			//subcolumn_t hover事件
		$("#subcolumn_t_left_last").mouseover(function(){
			$("#subcolumn_t_left_last").children().css("display","block");
			$("#subcolumn_t_left_last").mouseout(function(){
			$("#subcolumn_t_left_last").children().css("display","none");
		});
		});
			//banner 图片轮播事件
			
			(function($,undefined){
				$.fn.slider = function(opts){
					var defaults = {
						width:1440,
						height:500,
						direction:"left",
						interval:3000,
						showNav:false,
						showBtns:false
					};
					var options = $.extend(true,{},defaults,opts);
					
					function Slider(options){
						this.ele = $("#banner");
						this.lists = $("#banner_list");
						this.nav = $("#banner_nav");
						this.btns = $("banner_btns");
						this.lists.find("li").eq(0).clone(true).appendTo(this.lists);
						this.list = this.lists.find("li");
						this.ele.css({"width":options.width,"height":options.height});
						this.list.css({"width":options.width,"height":options.height});
						this.list.find("img").css({"width":options.width,"height":options.height});
						this.btns.find(".btn").css("top",((options.height/2)-20));

						switch(options.direction){
							case "top":
								this.topBottom();
								break;
							default:
								this.leftRight();
						}
						if(options.showNav){
							this.nav.show();
						}
						if(options.showBtns){
							this.btns.show();
						}
					}
					Slider.prototype.leftRight = function(){
						this.lists.css({"width":options.width*this.list.length,"height":options.height});
						this.list.css("float","left");
						this.timer = setInterval(move,options.interval);
						var _this = this;
						var index = 0;
						function move(){
							index++;
							if(index == _this.list.length){
								index = 1;
								_this.lists.css("left",0);
							}
							if(index==_this.list.length-1){
								_this.nav.find("li").eq(0).addClass("hover").siblings().removeClass("hover");
							
							}else{
								_this.nav.find("li").eq(index).addClass("hover").siblings().removeClass("hover");	
							}
							_this.lists.stop().animate({"left":-index*options.width},1000,function(){
	
							});
							
						}
						
						this.nav.find("li").hover(function(){
							clearInterval(_this.timer);
							index = $(this).index()-1;
							move();
						},function(){
							_this.timer = setInterval(move,3000);
						});
						
						this.btns.find(".btn").eq(0).click(function(){
							clearInterval(_this.timer);
							move();
							_this.timer = setInterval(move,3000);
						})
						this.btns.find(".btn").eq(1).click(function(){
							clearInterval(_this.timer);
							console.log(index);
							if(index==0){
								index = _this.list.length-3;
								_this.lists.css("left",(-(_this.list.length-1))*options.width);
							}else{
								index = index -2;
							}
							move();
							_this.timer = setInterval(move,3000);
						})
						
						
						
					}
					Slider.prototype.topBottom = function(){
						
					}
					
					new Slider(options);
					return this;
				}
				
				
			})(jQuery)
			
			$("#sliderBox").slider({showNav:true,showBtns:true});

			
			


	$("#jingpin_btns_btn1").click(function(){
		
		var left=$("#jingpin_lunbo").css("left");
		var numleft=parseInt(left);
		
		if(numleft>-536){
			$("#jingpin_lunbo").animate({"left":"-536px"},1000);
		}
		
	});
	
	$("#jingpin_btns_btn2").click(function(){
		
		var left=$("#jingpin_lunbo").css("left");
		var numleft=parseInt(left);
		
		if(numleft==-536){
			$("#jingpin_lunbo").animate({"left":"-50px"},1000);
		}
		
	});
		
