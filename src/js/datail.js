require(["./requirejs.config"], () => {
	require(["jquery","header","footer","cookie"], () => {
		
		//选项卡
		$("#tab li").on("click",function(){
			$(this).addClass("bc").siblings().removeClass("bc");
		})
		
		$("#tabs li").on("click",function(){
			$(this).addClass("bc").siblings().removeClass("bc");
		})
		
		//购物车
		$("#getcar").on("click",function(e){
			e = e || window.event;
		var target = e.target|| e.srcElement;
		if(target.className === "addMe"){
			//加入购物车
			var obj = {
				name : "滑板鞋",
				price: 699,
				num : 1
			};
			//判断cookie
			var arr;
			if($.cookie("cart")){
			    arr = JSON.parse($.cookie("cart"))
			}else{
				arr = []
			};
			
			var index;
			var isExist = arr.some(function(itme,i){
				//some只要有满足条件的，就返回true
				index = i;
				return itme.name === obj.name;
			})
			if(isExist){
				arr[index].num++;
			}else{
				arr.push(obj);
			}
			$.cookie("cart",JSON.stringify(arr));
			if(confirm("加入成功去结算？")){
				location.href = "/html/car.html"
			}
		}
		})
		
	})
})