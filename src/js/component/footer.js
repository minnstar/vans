define(["jquery"], () => {
	class footer{
		constructor(){
			this.init();
		}
		init(){
			//加载footer.html
			$("footer").load("/html/component/footer.html .inner")
		}
	}
	return new footer();
})
