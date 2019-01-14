define(["jquery", "template"], ($, template) => {
	function Item(){

	}

	Item.prototype.init = function(url){
		//得到url，然后去请求数据,渲染结构，再load到页面上
		
		//load
		new Promise((resolve, reject) => {
			console.log(url);
			$("#list-item").load("/html/component/item.html", () => {
				resolve();
			})
		}).then(() => {
			$.ajax({
				url: url,
				type: "get",
				success: function(res){
					console.log(res);
					if(res.res_code == 1){
						let list = res.res_body.data;
						console.log(template);
						let html = template("list-template", {list: res.res_body.data});
						console.log(html);
						$("#list-item ul").html(html);


					}
				}
			})
		})
		
		
	}

	return new Item();
})