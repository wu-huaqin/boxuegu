/**
 * Created by �⻪�� on 2017/4/6.
 */
define([], function () {
    /*
    * �ж��û���û�е�½����
    * �е�½������ת����ҳ��û�оͷ��ص���½����
    * */
    var cookieArr=document.cookie.split(';');
    var isLogin=false;

    //���������е�cookieû��PHPSESSID����û�е�½��
    for(var i=0;i<cookieArr.length;i++){
        if(cookieArr[i].indexOf('PHPSESSID=')===0){
            isLogin=true;
            break;
        }
        !isLogin&&(location.href = '/html/home/login.html');
    }
})