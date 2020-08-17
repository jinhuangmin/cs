<?php

$_postCode = $_POST["code"];

?>



<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>大师助手-WEEX-创意预览</title>
    <link charset="utf-8" type="text/css" href="css/index.css" rel="stylesheet">
    <link charset="utf-8" type="text/css" href="css/preview.css" rel="stylesheet">
    <script type="text/javascript" src="js/rootjs/jquery.js"></script>
    <script type="text/javascript" src="js/preview.js"></script>

</head>

<body data-code='<? echo $_postCode; ?>'>
    <div class="content">
        <div class="hd" style="text-align: center; line-height: 160px;background: #eff2f7;">
            <a href="https://wangpu.taobao.com/wirelessPageList.htm" target="_blank" style="color: #999; font-size: 14px; text-decoration:none;">提示：真实预览效果以店铺装修后台扫码为准，页面效果<span style="color:#0faaf6;">仅供参考</span>哦！</a>
        </div>
        <div class="bd">
            <div class="weexApp" data-ui="wdragUI">
                <div class="pageBox">
                    <div id="previewCode" class="box-wrap">
                    </div>
                </div>
            </div>
        </div>
        <div class="ft"></div>
    </div>
</body>

</html>