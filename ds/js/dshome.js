
$(function(){
	/*导航栏*/
	var lis=$(".nav li a ");
	lis.bind("click",function(){
      	$(this).addClass("active").parent().siblings().children("a").removeClass("active");
    });

    /*banner*/
    var aBtns  = $('.biNum>a'),
        imgbox = $(".bibox"),
        len    = 2,
        index=1;
    var timer;
        function    animate(offset){
        	var left=parseInt(imgbox.css("left"))+offset;
        	if (offset>0) {
        		offset="+="+offset;
        	}else {
        		offset="-="+ Math.abs(offset);
        	}
        	imgbox.animate({'left':offset},300,function(){
        		if (left < -812*len) {
        			imgbox.css('left' , -812);
        		}
        		if (left>-100) {
        			imgbox.css('left' , -812*len);
        		}
        	})
        };
        function showBtns() {
        	aBtns.eq(index-1).addClass("on").siblings().removeClass("on");
        };
        function play() {
        	timer=setTimeout(function(){
               aBtns.eq(1).trigger('click');
               play();
        	},3000)
        }
        function stop() {
        	clearTimeout(timer);
        }
        /* aBtns.each(function(){
        	$(this).bind("click",function(){
        		var myIndex=parseInt($(this).attr("index")),
        		    offset=-812 * (myIndex-index);

                    animate(offset);
        	})
        }) */
         aBtns.eq(0).bind('click',function(){
            if (imgbox.is(":animated")) {
                return;
            }
         	if (index==1) {
               index=2;
         	}else {
         		index -= 1;
         	}
         	animate(812);
         	showBtns();
         });
         aBtns.eq(1).bind('click',function(){
            if (imgbox.is(":animated")) {
                return;
            }
         	if (index==2) {
               index=1;
         	}else {
         		index += 1;
         	}
         	animate(-812);
         	showBtns();
         });
         imgbox.hover(play,stop);
         play();

         //下拉菜单
        var $shpclass = $(".shopclass").find('h3'),
            $shpshow  = $(".shopclass_show"),
            $shpiteam = $(".shopclass_iteam"),
            $shplist  = $(".shopclasslist"),
            show      = false;
        $shpclass.bind("click",function(e){
            e.stopPropagation();
            if (!show) {
                $shpshow.show();
            }else {
                $shpshow.hide();
            }
               show=!show;
        });
        //弹出菜单
        $shpiteam.hover(
            function(){
                if(!$(this).hasClass('shopclass_active')){
                    $(this).addClass('shopclass_active').siblings().removeClass('shopclass_active');
                    $shplist.show();
                }    
            },function(){
                $(this).removeClass('shopclass_active');
                $shplist.hide();
            })
        $shplist.hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        })
});

