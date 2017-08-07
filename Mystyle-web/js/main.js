$(function(){
	var $bannerAs =$('#header .banner ul li');
	var $line_right =$('#line_right');
	var $line_left =$('#line_left')
	
//导航过度效果	
	$bannerAs.hover(function(){
		var ulWidth = document.querySelector('#header .banner ul').offsetWidth;
		var index = $(this).index();
		var lineW = 0.2*ulWidth;
		var tagetLM = index*0.2*ulWidth;
		var tagetRM = ($bannerAs.length-index-1)*0.2*ulWidth;

		$line_right.css('width',lineW);
		$line_right.css('right',tagetRM);
		$line_right.css('background','#00a78e')
		$line_left.css('width',lineW);
		$line_left.css('left',tagetLM);
		$line_left.css('background','#00a78e')
	},function(){
		$line_right.css('width',0);
		$line_right.css('right',0);
		$line_left.css('width',0);
		$line_left.css('left',0);
		$line_left.css('background','transparent')
		$line_right.css('background','transparent')
	});
	
//回到顶部
 $('#toTop').click(function(){
 				var currtTop = $('html').scrollTop() + $('body').scrollTop();
 				var talTime = 400;
 				var offsetTime = 20;
 				var offstep = currtTop/(talTime/offsetTime);
 				var timer = setInterval(function(){
 					currtTop -= offstep;
 					$('html,body').scrollTop(currtTop);
 					if(currtTop <= 0){
 					 	currtTop = 0;
 						clearInterval(timer);						
 					}
 					console.log(currtTop);
 				},offsetTime)
		});	

//demo效果显示
	var $showXS = $('#demo .showXS');
//	console.log($showXS)
	$showXS.hover(function(event){
		var num = $(this).index();
		$('#demo .showXS .shouYC.'+num ).css({width:'100%',
		height:'100%',
		fontSize: '2em',
		top: 0,
		left: 0,
		transform: 'rotate(360deg)',
		});

	},function(){
		var num = $(this).index();
		$('#demo .showXS .shouYC.'+num ).css({width:0,
		height:0,
		fontSize: '0px',
		top: '50%',
		left: '50%',
		transform: 'rotate(0deg)',
		});
	})

});
