<?php
/**
 * 
 * 权限效验判断是不是本站发出的请求
 * 然后再决定给返回什么
 * 
 */
    //非本商，直接退出
   //  if( !strstr( $_SERVER['HTTP_REFERER'], 'dashi51.ews.m.jaeapp.com') && !strstr( $_SERVER['HTTP_REFERER'], 'dashi51.com') && !strstr( $_SERVER['HTTP_REFERER'], 'dashi51.ewszjk.m.jaeapp.com') ){ die(0); }


     if( !strstr( $_SERVER['HTTP_REFERER'], 'cnzoom.com') && !strstr( $_SERVER['HTTP_REFERER'], 'cnzoom.com') && !strstr( $_SERVER['HTTP_REFERER'], 'cnzoom.com') ){ die(0); }


    /**
     * 令牌制作
     */
    $token = uniqid('wxdashi51.com.sjdz.', true);

    session_set_cookie_params(24 * 3600); 

    session_start();
    $_SESSION["_sjdz_token_"] = $token;

    echo $token;

?>