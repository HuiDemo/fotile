$(function(){
//phone正则验证
	var phone = /^1[34578]\d{9}$/;
	var nums = null ;
	var random = "";
	$(".login-btn").click(function(){
		random = "";
		var nums = $(".phone-num input[type='text']").val();
		if(!phone.test(nums)){
			$(".reminder").html("手机号码或密码输入有误，请重新输入").fadeIn().fadeOut(3000);
		}
	})	
})