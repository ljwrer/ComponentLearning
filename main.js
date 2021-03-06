require.config({
	paths: {
		Window: "modules/simplePopup/window",
		jquery: "vendor/jquery/jquery-2.1.1",
		jqueryUI:"vendor/jquery/jquery-ui",
		Widget:"modules/widget/widget",
		util:"vendor/util/util"
	}
});
require(['jquery', 'Window'], function(jquery, w) {
	var win = new w.Window();
	$("#a").click(function() {
		win.alert({
			width: 500,
			height: 500,
			content: "hello",
			hasCloseBtn: true,
			handle4CloseBtn: function() {
				alert("click close button")
			},
			handle4AlertBtn: function() {
				alert("click alert button")
			},
			skinClassName:"m-window-bounding-box-skina",
			text4AlertBtn:"OK!",
			dragHandle:".header"
		}).on("alert",function(){
			alert("click 2nd alert button");
		}).on("alert",function(){
			alert("click 3rd alert button");
		}).on("close",function(){
			alert("click 2nd close button");
		});
	});
	$("#b").click(function(){
		new w.Window().confirm({content:"haha?",text4ConfirmBtn: "Yes",text4CancelBtn: "No"}).on("confirm",function(){
			alert(true);
		}).on("cancel",function(){
			alert(false);
		})
	});
	$("#c").click(function(){
		new w.Window().prompt({
			handle4PromptBtn:function(data){
				alert("你输入了"+data);
			}
		});
	});
	$("#d").click(function(){
		new w.Window().common({
			content:"common window",
			hasCloseBtn:true
		})
	})
})