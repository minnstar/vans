require(["./requirejs.config"], () => {
	require(["jquery","header","footer","cookie"], () => {
		

			var box = $("#box"),
		    table = $("#sheet"),
		    tbody = $("#part");
		    
		//拼接购物车
		var arr = JSON.parse($.cookie("cart"));
		var str = "";
		for(var value of arr){
			str += '<tr>'+
	        	'<td>选择：<input type="checkbox" class="check"/></td>'+
	            '<td><span>'+ value.name +'</span><input type="text"></td>'+
	            '<td><span>'+ value.num +'</span><input type="text"></td>'+
	            '<td><span>'+ value.price +'</span><input type="text"></td>'+
	             '<td><span>'+ parseInt(value.price)*parseInt(value.num) +'</span><input type="text"></td>'+
	            '<td>'+
	            	'<a href="javascript:;" class="editBtn">编辑</a>'+
	            	'<a href="javascript:;" class="okBtn">确定</a>'+
	            	'<a href="javascript:;" class="cancelBtn">取消</a>'+
	            	 '<a href="javascript:;" class="delBtn">删除</a>'+
	            '</td>'+
	        '</tr>';
		}
		tbody.html(str);
		
		var allCheck = $("#allCheck");
        var n = 0 ;
        
        table.on("click",function(e){
        	e = e || window.event;
        	var target = e.target || e.srcElement,
        	    tr = target.parentNode.parentNode;
        	    
        	if(target.className === "editBtn"){
        		tr.className = "edit";
      	    		var aSpan = $("span",tr);
      	    		for(var i = 0;i<aSpan.length;i++){
  	    			aSpan[i].nextElementSibling.value = aSpan[i].innerHTML;
      	    		}
        	}else if(target.className === "okBtn"){
        		tr.className = "";
      	    		var aSpan = $("span",tr);
      	    		for(var i = 0; i<aSpan.length; i++){
  	    			aSpan[i].innerHTML = aSpan[i].nextElementSibling.value;
      	    		}
      	    		calcprice();
        	}else if(target.className === "cancelBtn"){
        		tr.className = "";
        	}else if(target.className === "delBtn"){
        		if(confirm("确认删除？")){
      	    			tr.parentNode.removeChild(tr);
      	    			//判断是否选中
      	    		var check = $(".check",tr)[0];
      	    		    //如果选中N--
      	    		if(check.checked) n--;
      	    		//判断n跟aCheck的length的关系
      	    			allCheck.checked = (n === $(".check",box).length);
      	    			calcprice();
      	    		}
        	}else if(target.id === "allCheck"){
        		//全选
				//找到所有的单选
				var aCheck = $(".check", box);
				for(var i = 0; i < aCheck.length; i++){
					//单选得状态跟全选同步
					aCheck[i].checked = target.checked;
				}
				//n得值也要修改
				n = target.checked ? aCheck.length : 0;
				calcprice();
        	}else if(target.className === "check"){
        		target.checked ? n++ : n--;
				var aCheck = $(".check", box);
				allCheck.checked = n === aCheck.length;
				calcprice();
        	}
        })
        
        	function calcprice(){
      	    	var sum = 0 ;
      	    	//选中的那些行。然后单价X数量 累加
      	    	var aTr = $("tr",tbody);
      	    	for(var j = 0; j<aTr.length;j++){
      	    		if($(".check", aTr[j])[0].checked){
      	    		var price = Number($("span", aTr[j])[1].innerHTML);
					var num = Number($("span", aTr[j])[2].innerHTML);
						sum += price*num;		
      	    	}
      	    }
      	    	$("#money").html(sum) + "元"
       	}
        	
        	
        $("#Settlement").on("click",function(){
        	alert("订单提交成功")
        })
        
		
	})
})