define(["jquery","cookie"], () => {
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			$("header").load("/html/component/header.html",()=>{
				this.hover();
			})	
		 }
		hover(){
			$(".hoverchange").on("mouseover",function(){
				let index=$(this).index(".hoverchange");
				$(".list").eq(index).css({"display":"block"});
			})
			$(".hoverchange").on("mouseleave",function(){
				let index=$(this).index(".hoverchange");
				$(".list").eq(index).css({"display":"none"});
			})
		}
		
		
		}
		
		
		
	}
	return new Header();
})
