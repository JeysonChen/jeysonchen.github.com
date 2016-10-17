/**
 * Created by guoxiaoman on 2016/9/28.
 */
$(function (){
    var $level=$('.navbar .level');
    var $menu=$('.pages .menu');
    var $window=$(window);
    var now=0;
	
	

	if(now==0)
	{
		$('.move img').each(function (){
			$(this).attr('src',$(this).attr('url'));	
			
		})
		$('.img').addClass('animated').addClass('bounceInDown');
		$('.border_top').addClass('animated').addClass('bounceInUp');
		$('.border_name').addClass('animated').addClass('bounceInRight');
		$('.border_job').addClass('animated').addClass('bounceInLeft');
		$('.border_addr').addClass('animated').addClass('bounceInLeft');
	}
	else
	{
		$('.move img').each(function (){
			$(this).attr('src','');	
			
		})
		$('.img').removeClass('animated').removeClass('bounceInDown');
		$('.border_top').removeClass('animated').removeClass('bounceInUp');
		$('.border_name').removeClass('animated').removeClass('bounceInRight');
		$('.border_job').removeClass('animated').removeClass('bounceInLeft');
		$('.border_addr').removeClass('animated').removeClass('bounceInLeft');	
	}
    var nameStr='';
    var jobStr=""

    $level.hover(function (){
        $(this).addClass('active').siblings().removeClass('active');

    },function (){
        $(this).removeClass('active');
    });

    $level.click(function (){
        $(this).addClass('on').siblings().removeClass('on');
        $(this).addClass('active').siblings().removeClass('active');
        now=$(this).index();
       // $('.pages_cont').css("transform", "translate3D(0, -" + (now) * $window.height() + "px, 0)");
        $menu.eq(now).addClass('active').siblings().removeClass('active');
        $('.pages_cont').animate({top:'-' + now * $window.height()},500);
    });

    var aSpan=document.querySelectorAll('.level');

    var bFlag=false;
    addWheel(document,function (down){
        if(down){
            now++;
            //alert(now);
            if(now>=aSpan.length-1)
            {
                now=aSpan.length-1;
            }
            // alert(now);

            $level.eq(now).addClass('on').siblings().removeClass('on');
            //$('.pages_cont').css("transform", "translate3D(0, -" + now * $window.height() + "px, 0)")
            $menu.eq(now).addClass('active').siblings().removeClass('active');

            $('.pages_cont').animate({top:'-' + now * $window.height()},500,function (){
				if(now==0)
				{
					$('.move img').each(function (){
						$(this).attr('src',$(this).attr('url'));	
						
					})
					$('.img').addClass('animated').addClass('bounceInDown');
					$('.border_top').addClass('animated').addClass('bounceInUp');
					$('.border_name').addClass('animated').addClass('bounceInRight');
					$('.border_job').addClass('animated').addClass('bounceInLeft');
					$('.border_addr').addClass('animated').addClass('bounceInLeft');
				}
				else
				{
					$('.move img').each(function (){
						$(this).attr('src','');	
						
					})
					$('.img').removeClass('animated').removeClass('bounceInDown');
					$('.border_top').removeClass('animated').removeClass('bounceInUp');
					$('.border_name').removeClass('animated').removeClass('bounceInRight');
					$('.border_job').removeClass('animated').removeClass('bounceInLeft');	
					$('.border_addr').removeClass('animated').removeClass('bounceInLeft');	
				}
							
				if(now==1)
				{
					$('.person img').each(function (){
						$(this).attr('src',$(this).attr('url'));	
					})
					$('#html5').addClass('html5');
					$('#css3').addClass('css3');
					$('#jquery').addClass('jquery');
					$('#photoshop').addClass('photoshop');
					$('#AngularJs').addClass('AngularJs');
					$('#Javascript').addClass('Javascript');
					$('#VueJs').addClass('VueJs');
					$('.person img:first').addClass('animated').addClass('bounceInDown');
					$('.person img:last').addClass('animated').addClass('bounceInUp');
					
				}	
				else{
						$('.person img').each(function (){
						    $(this).attr('src','');	
					    })
						$('#html5').removeClass('html5');
						$('#css3').removeClass('css3');
						$('#jquery').removeClass('jquery');
						$('#photoshop').removeClass('photoshop');
						$('#AngularJs').removeClass('AngularJs');
						$('#Javascript').removeClass('Javascript');
						$('#VueJs').removeClass('VueJs');
						
						$('.person img:first').removeClass('animated').removeClass('bounceInDown');
				    	$('.person img:last').removeClass('animated').removeClass('bounceInUp');
						
				}
				
				if(now==2)
				{
					rnd();	
				}
			})
        }
        else
        {
            now--;
            if(now<=0)
            {
                now=0;
            }
            $level.eq(now).addClass('on').siblings().removeClass('on');
            //$('.pages_cont').css("transform", "translate3D(0, -" + now * $window.height() + "px, 0)");
            $menu.eq(now).addClass('active').siblings().removeClass('active');
            $('.pages_cont').animate({top:'-' + now * $window.height()},500,function (){
				if(now==0)
				{
					$('.move img').each(function (){
						$(this).attr('src',$(this).attr('url'));	
						
					})
					$('.img').addClass('animated').addClass('bounceInDown');
					$('.border_top').addClass('animated').addClass('bounceInUp');
					$('.border_name').addClass('animated').addClass('bounceInRight');
					$('.border_job').addClass('animated').addClass('bounceInLeft');
					$('.border_addr').addClass('animated').addClass('bounceInLeft');
				}
				else
				{
					/*$('.move img').each(function (){
						$(this).attr('src','_src');	
						
					})*/
					$('.move img').each(function (){
						$(this).attr('src','');	
						
					})
					$('.img').removeClass('animated').removeClass('bounceInDown');
					$('.border_top').removeClass('animated').removeClass('bounceInUp');
					$('.border_name').removeClass('animated').removeClass('bounceInRight');
					$('.border_job').removeClass('animated').removeClass('bounceInLeft');
					$('.border_addr').removeClass('animated').removeClass('bounceInLeft');		
				}
				if(now==1)
				{
					$('.person img').each(function (){
						$(this).attr('src',$(this).attr('url'));	
					})
					
					$('#html5').addClass('html5');
					$('#css3').addClass('css3');
					$('#jquery').addClass('jquery');
					$('#photoshop').addClass('photoshop');
					$('#AngularJs').addClass('AngularJs');
					$('#Javascript').addClass('Javascript');
					$('#VueJs').addClass('VueJs');
					$('.person img:first').addClass('animated').addClass('bounceInDown');
					$('.person img:last').addClass('animated').addClass('bounceInUp');
				}	
				else{
						$('.person img').each(function (){
						    $(this).attr('src','');	
					    })
						$('#html5').removeClass('html5');
						$('#css3').removeClass('css3');
						$('#jquery').removeClass('jquery');
						$('#photoshop').removeClass('photoshop');
						$('#AngularJs').removeClass('AngularJs');
						$('#Javascript').removeClass('Javascript');
						$('#VueJs').removeClass('VueJs');
						$('.person img:first').removeClass('animated').removeClass('bounceInDown');
				    	$('.person img:last').removeClass('animated').removeClass('bounceInUp');
						
						
				}
				
				if(now==2)
				{
					rnd();	
				}
				
			})
        }
    });

    function addWheel(obj, fn)
    {
        if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
        {
            obj.addEventListener('DOMMouseScroll', function (ev){
                if (ev.detail > 0)
                {
                    fn(true);
                }
                else
                {
                    fn(false);
                }
            }, false);
        }
        else
        {
            obj.onmousewheel=function (){
                if (event.wheelDelta > 0)
                {
                    fn(false);
                }
                else
                {
                    fn(true);
                }
            };
        }
    }
    
    //文字打印


    //alert(str.length);


    function print(obj,str)
    {
        var aSpan=[];
        for(var i=0; i<str.length; i++){
            var oSpan=document.createElement('span');
            oSpan.innerHTML=str.charAt(i);
            obj.appendChild(oSpan);
            aSpan.push(oSpan);
        }

        var n=0;
        var timer=null;

        timer=setInterval(function(){
            aSpan[n].className='on';

            n++;
            if(n==aSpan.length){
                clearInterval(timer);
            }
        },100);
    }
	
	/*var $winH=$window.height();
	//alert($winH);
	var scroTop=$(document).scrollTop();
	
	$('#about').click(function (){
		alert(1);
			if($('#about').offset().top<($winH+scroTop))
			{
				$('#html5').addClass('html5');
			}	
		})	*/
		

   //照片墙
		var oUl=document.getElementById('ul1');
            var aLi=oUl.children;

            var zIndex=1000;

            //布局转化
            var aPos=[];

            for(var i=0; i<aLi.length; i++){
                aPos[i]={
                    left:aLi[i].offsetLeft,
                    top:aLi[i].offsetTop
                };
            }

            for(var i=0; i<aPos.length; i++){
                aLi[i].style.left=aPos[i].left+'px';
                aLi[i].style.top=aPos[i].top+'px';
                aLi[i].style.position='absolute';
                aLi[i].style.margin=0;
            }

            for(var i=0; i<aLi.length; i++){
                drag(aLi[i]);

                aLi[i].index=i;
            }

            //拖拽
            function drag(obj){
                obj.onmousedown=function(ev){
                    var oEvent=ev || event;
                    var disX=oEvent.clientX-obj.offsetLeft;
                    var disY=oEvent.clientY-obj.offsetTop;

                    obj.style.zIndex=zIndex++;
                    clearInterval(obj.timer);

                    document.onmousemove=function(ev){
                        var oEvent=ev || event;

                        obj.style.left=oEvent.clientX-disX+'px';
                        obj.style.top=oEvent.clientY-disY+'px';

                        var oNear=findNearest(obj);
                        if(oNear && oNear!=obj){
                            var m=obj.index;
                            var n=oNear.index;

                            if(m<n){
                                for(var i=0; i<aLi.length; i++){
                                    if(aLi[i].index>=m+1 && aLi[i].index<=n){
                                        aLi[i].index--;

                                        move(aLi[i],aPos[aLi[i].index]);
                                    }
                                }
                                obj.index=n;
                            }else{
                                for(var i=0; i<aLi.length; i++){
                                    if(aLi[i].index>=n && aLi[i].index<=m-1){
                                        aLi[i].index++;

                                        move(aLi[i],aPos[aLi[i].index]);
                                    }
                                }
                                obj.index=n;
                            }
                        }
                    };

                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null;

                        move(obj,aPos[obj.index]);
                    };
                    return false;
                };
            }

            function findNearest(obj){
                var iMin=999999999999;
                var iMinIndex=-1;
                for(var i=0; i<aLi.length; i++){
                    if(collTest(obj,aLi[i])){
                        var dis=getDis(obj,aLi[i]);

                        if(dis<iMin){
                            iMin=dis;
                            iMinIndex=i;
                        }
                    }
                }

                if(iMinIndex==-1){
                    return null;
                }else{
                    return aLi[iMinIndex];
                }
            }

            function getDis(obj,obj2){
                var l1=obj.offsetLeft+obj.offsetWidth/2;
                var l2=aPos[obj2.index].left+obj2.offsetWidth/2;

                var t1=obj.offsetTop+obj.offsetHeight/2;
                var t2=aPos[obj2.index].top+obj2.offsetHeight/2;

                var a=l1-l2;
                var b=t1-t2;

                return Math.sqrt(a*a+b*b);
            }

            //碰撞检测
            function collTest(obj,obj2){
                var l1=obj.offsetLeft;
                var r1=obj.offsetLeft+obj.offsetWidth;
                var t1=obj.offsetTop;
                var b1=obj.offsetTop+obj.offsetHeight;

                var l2=aPos[obj2.index].left;
                var r2=aPos[obj2.index].left+obj2.offsetWidth;
                var t2=aPos[obj2.index].top;
                var b2=aPos[obj2.index].top+obj2.offsetHeight;

                if(r1<l2 || l1>r2 || b1<t2 || t1>b2){
                    return false;
                }else{
                    return true;
                }
            }
			
			
			function rnd(){
				aPos.sort(function (){
					return Math.random()-0.5;
				});
				
				for (var i=0; i<aLi.length; i++)
				{
					move(aLi[i], aPos[i]);
				}

			}	
							



})


	window.onload = function(){

		//各种初始化
		var oBox = document.getElementById("move");
		var oBorder = document.getElementById("border");
		var oImg = document.getElementById("img");
		var middlePointX = 0;
		var middlePointY = 0;
		var oBorderV = 0;
		var oImgV = 0;
		function getStyle(){
			middlePointX = document.documentElement.clientWidth/2;
			middlePointY = document.documentElement.clientHeight/2;

			oBox.width = oBorder.offsetWidth > oImg.clientWidth ? oBorder.clientWidth : oImg.clientWidth ;
		
			oBox.height = oBorder.clientHeight > oImg.clientHeight ? oBorder.clientHeight : oImg.clientHeight ;	

			oBox.style.width = oBox.width + "px";

			oBox.style.height = oBox.height + "px";

			oBox.style.left = middlePointX - oBox.width/2 + "px";

			oBox.style.top = middlePointY - oBox.height/2 + "px";

			oBorder.style.left = oBox.width/2 - oBorder.clientWidth/2 + "px";

			oBorder.style.top = oBox.height/2 - oBorder.clientHeight/2 + "px";

			oImg.style.left = oBox.width/2 - oImg.clientWidth/2 + "px";

			oImg.style.top = oBox.height/2 - oImg.clientHeight/2 + "px";
		}

		getStyle();
		window.onresize = getStyle;
		document.onmousemove = function(ev){
			var ev = ev || event;
			var disX = ev.clientX;
			var disY = ev.clientY;
			oBorderV = 20;//文字速率比例
			oImgV = 50;//图片速率比例

			//(X坐标-中点)/V + 本身的left值
			oBorder.style.left = (disX - middlePointX)/oBorderV + oBox.width/2 - oBorder.clientWidth/2 + "px";

			oBorder.style.top = (disY - middlePointY)/oBorderV + oBox.height/2 - oBorder.clientHeight/2 + "px";

			oImg.style.left = (disX - middlePointX)/oImgV + oBox.width/2 - oImg.clientWidth/2 + "px";

			oImg.style.top = (disY - middlePointY)/oImgV + oBox.height/2 - oImg.clientHeight/2 + "px";
		}
		
		
		
     
	}

	
