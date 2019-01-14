//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","footer"], () => {
		
		  $(function(){
              let  $ul = $("#swiper-wrapper"),
                   $imgs = $ul.children(),
                   index = 0,
                   len = $imgs.length,
                   liWidth = $imgs.eq(0).width(),
                   btns = [];
                   
            //在结尾追加一个img，计算ul的长度
	        $ul.append($imgs.eq(0).clone());
	     	$ul.width((len+1)*liWidth);
            
            //上一张
            $("#goPrev").on("click",function(){
            	if(--index < 0){
            		$ul.css({left :-index*liWidth});
            		index = len-1;
            	}
            	$ul.stop().animate({left: -index*liWidth});
            })
            
            
            //下一张
            $("#goNext").on("click",function(){
            	if(++index >= len){
            		$ul.stop().animate({left:-index*liWidth},function(){
            			$ul.css({left:0});
            		})
            		index = 0 ;
            	}else{
            		$ul.stop().animate({left:-index*liWidth})
            	}
            })
            
            
	})
          
 })
})
