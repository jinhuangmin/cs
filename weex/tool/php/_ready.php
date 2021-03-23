<?php

/**
 * 
 * 权限效验判断是不是本站(cnzoom.com)发出的请求
 * 然后再决定给返回什么
 * 非本商，直接退出
 */

if (strstr($_SERVER['HTTP_REFERER'], 'cnzoom.com') || strstr($_SERVER['HTTP_REFERER'], '127.0.0.1')) {

  /**
   * 令牌制作
   */
  $token = uniqid('wxdashi51.com.sjdz.', true);

  // 设置cookie有效时间，秒为单位
  session_set_cookie_params(24 * 3600);

  session_start();
  $_SESSION["_sjdz_token_"] = $token;

  echo $token;
} else {
  die(0);
}
