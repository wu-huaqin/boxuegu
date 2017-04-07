/**
 * Created by 吴华钦 on 2017/4/7.
 */
define(['jquery','jqueryCookie','template'], function ($, undefined, template) {
    //左上角用户信息展示
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

    //导航栏下拉列表
    (function () {
        $('.navSlide').on('click', function () {
            $(this).next().slideToggle();
        })
    })();

    //定位左侧焦点
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