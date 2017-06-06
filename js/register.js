$(function(){
//phone正则验证
	var phone = /^1[34578]\d{9}$/;
	var nums = null ;
	var random = "";
	$(".set-ver").click(function(){
		random = "";
		var nums = $(".phone-num input[type='text']").val();
		if(!phone.test(nums)){
			$(".reminder").html("手机号码输入有误，请重新输入").fadeIn().fadeOut(3000);
		} else {
			time(this); 
		}
	})
//set倒计时
    var set;
    var Time_nums = 60;
    function time(btn){ 
        btn.disabled = true; //将按钮置为不可点击
        btn.value  = Time_nums + '秒重新获取';
        set = setInterval(function(){
            Time_nums --;
            if(Time_nums > 0){
                btn.value = Time_nums+'秒重新获取';
            }else{
            		clearInterval(set); //清除js定时器
            		btn.disabled = false;
            		btn.value = '重新获取';
                Time_nums = 60; //重置时间
            }
        },1000); //一秒执行一次
    }
})