define(['jquery','jqueryCookie','nprogress'], function($,undefined,nprogress) {
    //�������ύ�¼���������ֹ������ת����ajax
    $('#login-form').on('submit', function () {
        console.log($(this).serialize())
        $.ajax({
            url:'/v6/login/',
            type:'POST',
            data:$(this).serialize(),
            //����ɹ���ת����ҳ
            success: function (data) {
                if(data.code==200){
                    $.cookie('userInfo',JSON.stringify(data.result),{
                        path:'/'
                    })
                    location.href='/';
                }
            },
            //����ʧ�ܸ���������ʾ
            error: function () {
                alert(arguments[2])
            }
        })
        //��ֹ���ύ
        return false;
    })
    //����������
    //nprogress.done();
});
