require(["./requirejs.config"], () => {
	require(["jquery","cookie","header","footer"], () => {
	        
		   	//注册逻辑
		    $("#regBtn").on("click",function(e){
		    	e.preventDefault();
		    	 regValue();
     			 addCookie();
			})
		 let flag = true;
		 
		  //正则判断
		 function regValue(){
		 	flag = false;
		 	let userNameReg = /^1\d{10}$/,
		 	    pwdReg = /^.{8,}$/;		 	    
		 	if(userNameReg.test($("#username").val())){
	 		flag = true;
	 	}
	 	if(pwdReg.test($("#password").val())){
		 		flag = true;
		 	}
		 }
		 
		 //cookie
		 function addCookie(){
	 	//判断标记
		 	if(flag){
		 		let json = $.cookie("user")? JSON.parse($.cookie("user")) : [];
			 		let obj = {
		 			"user" : $("#username").val(),
					"password":$("#password").val()
		 		};
		 		for(var i = 0; i<json.length;i++){
		 			if(json[i].user === obj.user){
		 				break;
		 		}
		 	}
		 		if(i<json.length){
		 			alert("已有此用户名")
		 		}else{
		 			json.push(obj);
		 			$.cookie("user",JSON.stringify(json));
		 			if(confirm("注册成功，去登陆")){
		 				window.location.href = "/html/login.html";
		 			}
		 		let aInputs = $("input")
		 		for(let j = 0 ;j<aInputs.length-1;j++){
		 			aInputs[j].value = ""
		 		   }
		 		 }
		 		console.log($.cookie("user"));
		 	}
		 }
		 
		})
	})




