/**
 * Created by �⻪�� on 2017/4/7.
 */
define(['jquery','jqueryCookie','template'], function ($, undefined, template) {
    //���Ͻ��û���Ϣչʾ
    (function (){
        var userInfoStr=$.cookie('userInfo');
        var userInfoObj=JSON.parse(userInfoStr);
        var prifileTpl=
            '<div class="profile">'+
            '<div class="avatar img-circle">'+
            '<img src={{tc_avatar?tc_avatar:"/img/default.png" }}>'+
            '</div>'+
            '<h4>{{tc_name}}</h4>'+
            '</div>';

        var userInfoRender=template.compile(prifileTpl);
        var userInfoHTML=userInfoRender(userInfoObj);
        $('.aside').prepend(userInfoHTML);
    })();

    //�����������б�
    (function () {
        $('.navSlide').on('click', function () {
            $(this).next().slideToggle();
        })
    })();

    //��λ��ཹ��
    (function () {
        var pathHref = {
            '/html/teacher/teacher_add.html': '/html/teacher/teacher_list.html',
            '/html/user/user_profile.html':'/html/user/user_list.html'

        };
        var pathname = location.pathname;
        var aHref = pathHref[pathname]? pathHref[pathname]: pathname;
        console.log(aHref);
        $('.navs a').removeClass('active').filter('[href="' + aHref + '"]').addClass('active');

    })();
})