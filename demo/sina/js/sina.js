
$(function (){
	//顶部显示隐藏菜单
	$('.top-nav-wrap li').hover(function (){
		$(this).find('.tn-menu').show();
	},function (){
		$(this).find('.tn-menu').hide();
	})

	//登录弹出框
	$('#tn-nav2 li:first').hover(function (){
		$(this).find('.tn-login').show();
	},function (){
		$(this).find('.tn-login').hide();
	})
	$('#login-close').click(function (){
		$(this).parents().find('.tn-login').hide();
	})
	//登录表单 
	/*$('.login-txt').focus(function (){
		var txt_val=$(this).val();
		if(txt_val=='微博/博客/邮箱')
		{
			$(this).val('');
		}
	})
	$('.login-txt').blur(function (){
		var txt_val=$(this).val();
		if(txt_val=='')
		{
			$(this).val('微博/博客/邮箱');
		}
	})

	$('.login-pwd').focus(function (){
		var txt_val=$(this).val();
		if(txt_val=='请输入密码')
		{
			$(this).val('');
		}
	})
	$('.login-pwd').blur(function (){
		var txt_val=$(this).val();
		if(txt_val=='')
		{
			$(this).val('请输入密码');
		}
	})*/

	$('form :input').focus(function (){
		var txt_val=$(this).val();
		if(txt_val==this.defaultValue)
		{
			$(this).val('');
		}
	})
	$('form :input').blur(function (){
		var txt_val=$(this).val();
		if(txt_val=='')
		{
			$(this).val(this.defaultValue);
		}
	})


	//搜索框标题切换
	$('.s-slt h3').click(function (){
		$(this).next().show();
		return false;
	})
	$('.s-slt ul li').click(function (){
		$(this).parent().prev().html($(this).html());
	})

	$(document).click(function (){
		$('.s-slt ul').hide();
	})

	//主体部分tab切换
	var box=$('.m .box>div');
	$('.title li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$(this).parent().parent().next().find('.b-box').eq(index).show().siblings().hide();
	})

	//侧边栏tab切换
	var t1boxDiv=$('.t1-box>div');
	$('.t1-ul li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		t1boxDiv.eq(index).show().siblings().hide();
	})
	
	//科技 探索下面的选项卡
	$('.mt2-ul li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$(this).parent().next().find('div').eq(index).show().siblings().hide();
	})

	//视频直播 今日 明日切换
	$('.zhibo h3 li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$(this).parents('.zhibo').find('.lvbox>div').eq(index).show().siblings().hide();
	})

	//淘宝列表
	var imgsrc=['img.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg'];
	$('.t2-ul li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$(this).parent().siblings().children().eq(index).show().siblings().hide();
		$(this).parent().siblings().children().eq(index).find('img').attr('src','images/'+imgsrc[index]);
	})

	//淘宝列表2
	var imgsrc2=['img.jpg','img23.jpg','img14.jpg','img16.jpg','img5.jpg','img8.jpg','img29.jpg','img36.jpg',
		'img17.jpg','img19.jpg','img18 .jpg','img33.jpg','img36.jpg','img26.jpg','img3.jpg','img10.jpg','img19.jpg'];
	$('.t3-ul li').mouseover(function (){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$(this).parent().siblings().children().eq(index).show().siblings().hide();
		$(this).parent().siblings().children().eq(index).find('img').attr('src','images/'+imgsrc2[index]);
	})
	
	
		var oAds=$('.ads');
		$.ajax({
			url:'js/data.js',
			success:function (str){

				//alert(JSON.stringify(adsJson));
				var arr1=adsJson.ads_top;
				var oP1=$('<p></p>');
				for(var i=0;i<arr1.length;i++)
				{
					$('<a href="'+arr1[i].href+'">'+arr1[i].title+'</a>').appendTo(oP1);
				}
				oP1.appendTo(oAds);

				var oP2=$('<p></p>');
				$('<img src="images/'+adsJson.image[0]+'" width="1000" height="90" />').appendTo(oP2);
				oP2.appendTo(oAds);

				var arr2=adsJson.ads_bottom;
				var oP3=$('<p></p>');
				for(var i=0;i<arr2.length;i++)
				{
					$('<a href="'+arr2[i].href+'">'+arr2[i].title+'</a>').appendTo(oP3);
				}
				oP3.appendTo(oAds);

				//alert(JSON.stringify(tv));

				/*var oDate=new Date();
				var year=oDate.getFullYear();
				var month=oDate.getMonth();
				var date=oDate.getDate();

				var oMTab=$('#m-tab');
				var oTVTit=$('<div class="title clearfix"><ul></ul><a href="#" class="more" id="today">北京时间:'+year+'.'+(month+1)+'.'+date+'</a></div>');
				var oTVul=oTVTit.find('ul');
				var oBox=$('<div class="box"></div>');

				for(var name in tv)
				{
					$(' <li><a href="#">'+name+'</a></li>').appendTo(oTVul);

					$('<div class="b-box"><ul></ul></div>').appendTo(oBox);
					var oBoxUl=$('.b-box ul');
					//alert(name);
					var vedio=tv[name].vedio;
					//alert(vedio.length);
					

				}
				oTVTit.appendTo(oMTab);
*/


				

			}
			
		});

	//新闻块 列表
		$.ajax({
			url:'data/news.txt',
			success:function (str){
				var json=eval('('+str+')');
				//alert(JSON.stringify(json));
				var mTab=$('.part1 .r .m-tab:last');
				$('<div class="title clearfix"></div>').prependTo(mTab);
				var title=mTab.find('.title');
			    title.html(' <ul> <li class="on"><a href="#">'+json.name+'</a></li> </ul>\
					<a href="#" class="more">'+json.tips+'</a>');
				var mBox=$('.part1 .r .box');
				$('<div class="b-box" style="display:block"><ul></ul><div class="blank10"></div><ul></ul><div class="blank20"></div><ul></ul></div>').prependTo(mBox);
				var aUl=mBox.find('.b-box ul');
				var arr=json.content;
				//alert(arr.length);
				for (i=0;i<arr[0].length;i++)
				{
					if(typeof (arr[0][i].title)!='string')
					{
						$('<li><p><a href="#" class="linkRed">'+arr[0][i].title[0]+'</a> | <a href="'+arr[0][i].href+'">'+arr[0][i].title[1]+'</a></p></li>').appendTo(aUl.eq(0));
					}
					else
					{
						$('<li><p><a href="'+arr[0][i].href+'">'+arr[0][i].title+'</a></p></li>').appendTo(aUl.eq(0));
					}
				}
				for (i=0;i<arr[1].length;i++)
				{
					if(typeof (arr[1][i].title)!='string')
					{
						$('<li><p><a href="#" class="linkRed">'+arr[1][i].title[0]+'</a> | <a href="'+arr[1][i].href+'">'+arr[1][i].title[1]+'</a></p></li>').appendTo(aUl.eq(1));
					}
					else
					{
						$('<li><p><a href="'+arr[1][i].href+'">'+arr[1][i].title+'</a></p></li>').appendTo(aUl.eq(1));
					}
				}
				for (i=0;i<arr[2].length;i++)
				{
					if(typeof (arr[2][i].title)!='string')
					{
						$('<li><p><a href="#" class="linkRed">'+arr[2][i].title[0]+'</a> | <a href="'+arr[2][i].href+'">'+arr[2][i].title[1]+'</a></p></li>').appendTo(aUl.eq(2));
					}
					else
					{
						$('<li><p><a href="'+arr[2][i].href+'">'+arr[2][i].title+'</a></p></li>').appendTo(aUl.eq(2));
					}
				}

			},
			error:function (){
				alert('加载失败，请重新加载！');
			}
		});
	 //猜你喜欢

	//图片懒加载
	$(document).scroll(function(){
		var scrollTop = parseInt($(document).scrollTop());
		$('img').each(function(i){
			var imgTop = parseInt($('img').eq(i).offset().top);
			if(imgTop>=scrollTop){
				$('img').eq(i).attr('src',$('img').eq(i).attr('_src'));
			}
		})
	});
	
	
})
