define(['jquery','jqueryCookie','nprogress'], function($,undefined,nprogress) {
    //监听表单提交事件，并且阻止，进而转换成ajax
    $('#login-form').on('submit', function () {
        console.log($(this).serialize())
        $.ajax({
            url:'/v6/login/',
            type:'POST',
            data:$(this).serialize(),
            //请求成功跳转到首页
            success: function (data) {
                if(data.code==200){
                    $.cookie('userInfo',JSON.stringify(data.result),{
                        path:'/'
                    })
                    location.href='/';
                }
            },
            //请求失败给出错误提示
            error: function () {
                alert(arguments[2])
            }
        })
        //阻止表单提交
        return false;
    })
    //进度条结束
    //nprogress.done();
});
