//登录业务逻辑
require(["./requirejs.config"], () => {
	require(["jquery","cookie","header","footer"], () => {
			
		    
		    //选项卡
		 	$("#tab li").on("click",function(){
		   	$(this).addClass("bc").siblings().removeClass("bc");	
		   })
		  
		 
		  //登录
		   	let users = JSON.parse($.cookie("user"));
		    let flag = false;
		    var userName = $("#username"),
	    		pwd = $("#password");
		    	if(confirm("是否使用记录的账号密码")){
	    	   //加载最后一次记录的账号
	    	    userName.val(users[users.length-1].user);
				pwd.val(users[users.length-1].password);
		     }
		    $("#regBtn").on("click",function(){
		    	flag = false;
		    	for(var i = 0; i<users.length;i++){
		    		if(userName.val(users[i].user)   && pwd.val(users[i].password) ){
		    			flag = true;
		    			break;
		    		}
	    	}
	    	if(flag){
	    		alert("登录成功")
	    		location.href = "/"
	    	}else{
	    		alert("登录失败")
	    	}
   		 })	

	})
	
})

