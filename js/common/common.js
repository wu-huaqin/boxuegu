/**
 * Created by 吴华钦 on 2017/4/6.
 */
define([], function () {
    /*
    * 判断用户有没有登陆过，
    * 有登陆过就跳转到首页，没有就返回到登陆界面
    * */
    var cookieArr=document.cookie.split(';');
    var isLogin=false;

    //必须是所有的cookie没有PHPSESSID才算没有登陆过
    for(var i=0;i<cookieArr.length;i++){
        if(cookieArr[i].indexOf('PHPSESSID=')===0){
            isLogin=true;
            break;
        }
        !isLogin&&(location.href = '/html/home/login.html');
    }
})