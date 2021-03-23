<?php

/**
 * 默认展示的代码
 */
$_postCode = $_POST["mod_code"];
$_postCode_preview = $_POST["mod_code_preview"];
// $_apphide = $_GET["apphide"]

// data-colde-preview 用于标记该页面应该跳转至效果预览
// 从data-code获取到组件数据后触发导入和渲染逻辑,渲染出dom后跳转至preview.php
// 具体逻辑在 js/rootjs/index.js 1204-1217

?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=8">
  <meta http-equiv="Expires" content="0">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-control" content="no-cache">
  <meta http-equiv="Cache" content="no-cache">
  <title>沃姆设计-WEEX-创意工具</title>
  <script src="js/require.js" data-main="js/main.js"></script>
  <link charset="utf-8" href="js/layer/theme/default/layer.css" rel="stylesheet">
  <link charset="utf-8" href="js/takecolor/spectrum.css" rel="stylesheet">
  <link charset="utf-8" href="css/index.css" rel="stylesheet">
  <link charset="utf-8" href="css/wdragUI.css" rel="stylesheet">
  <link charset="utf-8" href="css/edit.css" rel="stylesheet">
  <link charset="utf-8" href="js/smartMenu/menu.css" rel="stylesheet">
  <link charset="utf-8" href="js/tao_power/getImages.css" rel="stylesheet">
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.8.3/jquery.js"></script>
</head>

<body class="<?php if ($_postCode_preview) {
                echo "_code_preview_";
              } ?>" 
      data-code='<? if ($_postCode_preview) {
                          echo $_postCode_preview;
                        } else {
                          echo $_postCode;
                        } ?>'
      data-colde-preview='<? if ($_postCode_preview) {
                          echo 'preview';
                        }?>'
>
  <div class="previewCode_temp" style="display:none;"></div>
  <div class="content">
    <div class="hd"></div>
    <div class="bd">
      <div class="weexApp" data-ui="wdragUI">
        <div class="uiExpoperat">
          <div class="cnt">
            <span id="uiAdd_Sync" data-title="编辑后可同时移动位置，变化大小" style="display:none;">编组</span>
            <span data-title="右边选择对齐方式">对齐</span>
            <icon data-op="i_1" data-title="顶部对齐">&#xe60b;</icon>
            <icon data-op="i_2" data-title="垂直居中对齐">&#xe607;</icon>
            <icon data-op="i_3" data-title="底部对齐">&#xe60c;</icon>
            <icon data-op="i_4" data-title="左边对齐">&#xe60d;</icon>
            <icon data-op="i_5" data-title="水平居中对齐">&#xe608;</icon>
            <icon data-op="i_6" data-title="右边对齐">&#xe60a;</icon>
            <icon data-op="b_1" data-title="水平居中分布">&#xe603;</icon>
            <icon data-op="b_2" data-title="垂直居中分布">&#xe606;</icon>
          </div>
        </div>
        <div class="ruler">
          <span class="moveLine moveLine_l"><em>0</em></span>
          <span class="moveLine moveLine_c"><em>0</em></span>
          <span class="moveLine moveLine_r"><em>0</em></span>
          <span class="l"></span><span class="c"></span>
          <span class="r"></span>
        </div>
        <div id="top" class="pageTop">
          <div class="top_df">
            <div class="topLeft"><span><img src="img/logo.png" /></span></div>
            <div class="topRight">
              <div class="histRecord"><i class="prev">&#xe656;</i><i class="next">&#xe654;</i></div>
              <div class="Afast_key"><a class="t t3" target="_blank">快捷键<i>&#xe6b0;</i> </a>
                <ul class="fast_key">
                  <li><span class="z1">全选：</span><span class="z2">Ctrl + A</span></li>
                  <li><span class="z1">双击元素：</span><span class="z2">快速编辑</span></li>
                  <li><span class="z1">快速复制：</span><span class="z2">Alt + 移动元素</span></li>
                  <li><span class="z1">复制粘贴：</span><span class="z2">ctrl+c -> ctrl+v</span></li>
                  <li><span class="z1">多选：</span><span class="z2">Ctrl + 单击</span></li>
                  <li><span class="z1">撤销操作：</span><span class="z2">Ctrl + Z</span></li>
                  <li><span class="z1">恢复操作：</span><span class="z2">Ctrl + Y</span></li>
                  <li><span class="z1">删除元素：</span><span class="z2">Delete</span></li>
                  <li><span class="z1">等比缩放：</span><span class="z2">Shift + 移动控点</span></li>
                  <li><span class="z1">水平垂直移：</span><span class="z2">Shift + 移动元素</span></li>
                  <li><span class="z1">1像素移动：</span><span class="z2">← ↑ → ↓</span></li>
                </ul>
              </div>
              <div class="operation">
                <div class="bornedit editopt">
                  <span class="Export_code">生成代码</span>
                  <span class="Import_code">导入代码</span>
                </div>
                <div class="shopedit editopt">
                  <span class="Export_code_shop">保存到店铺</span>
                  <span class="close_shop">取消</span>
                </div>
                <span class="Preview_code">效果预览</span>
                <span class="preview-inline">本页预览</span>
              </div>
            </div>
          </div>
          <div class="top_child">
            <div class="child_open_start" style="display:none;"></div>
            <div class="topLeft"><span><img src="img/logo2.png" /></span></div>
            <div class="topRight">
              <div class="histRecord"><i class="prev">&#xe656;</i><i class="next">&#xe654;</i></div>
              <div class="operation"><span class="childSave_code">确定并返回</span><span class="child_close">退出</span></div>
            </div>
          </div>
        </div>
        <div id="left" class="pageLeft">
          <div class="le1">
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="le2" id="appAdd-panel">
            <div class="title" id="appAdd-panel-t"><span>组件面板</span></div>
            <ul class="applistbox">
              <li class="" id="appDrawHots">
                <icon>&#xe611;</icon><span>绘制热区</span>
                <icon class="in">&#xe62c;</icon>
              </li>
              <li class="app" data-type="apwx_jtup" data-key="0">
                <icon>&#xe66a;</icon><span>单图</span>
              </li>
              <li class="app" data-type="apwx_jwz" data-key="0">
                <icon>&#xe652;</icon><span>文字</span>
              </li>
              <li class="app" data-type="apwx_jdjs" data-key="0">
                <icon>&#xe665;</icon><span>倒计时</span>
              </li>
              <li class="app" data-type="apwx_jsp" data-key="0">
                <icon>&#xe619;</icon><span>视频</span>
              </li>
              <li class="app" data-type="apwx_jnbo" data-key="0">
                <icon>&#xe623;</icon><span>轮播</span>
              </li>
              <li class="app" data-type="apwx_jkcdh" data-key="0">
                <icon>&#xe614;</icon><span>开场动画</span>
              </li>
              <li class="app" data-type="apwx_jxdh" data-key="0">
                <icon>&#xe6ea;</icon><span>循环动画</span>
              </li>
              <li class="app" data-type="apwx_jdtuhd" data-key="0">
                <icon>&#xe620;</icon><span>多图滑动</span>
              </li>
              <li class="app" data-type="apwx_jgdpic" data-key="0"><icon>&#xe698;</icon><span>滚动图片</span></li>
              <li class="app" data-type="apwx_jgdtw" data-key="0">
                <icon>&#xe6ea;</icon><span>滚动公告</span>
              </li>
              <li class="app" data-type="apwx_jtgif" data-key="0">
                <icon>&#xe6ea;</icon><span>逐帧动画</span>
              </li>
              <!-- <li class="app" data-type="apwx_jkctc" data-key="0">
                <icon>&#xe630;</icon><span>开场弹窗</span>
              </li> -->
              <li class="app" data-type="apwx_jbblb" data-key="0">
                <icon>&#xe639;</icon><span>宝贝列表</span>
              </li>
              <!-- <li class="app" data-type="apwx_jgwc" data-key="0"><icon>&#xe61a;</icon><span>购物车</span></li> -->
              <!-- <li class="app" data-type="apwx_jautoqt" data-key="0"><icon>&#xe60e;</icon><span>智能切图</span></li> -->

              <!-- ↓↓↓↓↓↓ ↓ 预设组件 ↓↓↓↓↓↓ ↓ -->
              <!-- 预设组件需添加data-json data-addIndex为true时,组件添加在画布的固定位置 -->
              <!-- <li class="app" data-json='{"appName":"倒计时","appType":"apwx_jdjs","config":{"startTime":"2020-07-26 14:00:00","endTime":"2020-07-29 14:00:00","bgImg":"https://img.alicdn.com/imgextra/i2/1867852664/O1CN01BqErsO1VY9cRRxh8X_!!1867852664.jpg","bgImg_width":"750","bgImg_height":"400","bgColor":"#ffffff","customContent_1":{"width":750,"height":1200,"bgImg":"","bgImgSize":"","bgColor":"rgb(255, 255, 255)","app":[{"appName":"轮播","appType":"apwx_jnbo","config":{"slider":[{"img":"https://img.alicdn.com/imgextra/i4/1867852664/O1CN018h6M5x1VY9cH9Rdi2_!!1867852664.jpg","href":"","customContent":{"width":750,"height":1200,"bgImg":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01gr7seL28zsfaWmxrd_!!2885348004.jpg","bgImgSize":{"width":750,"height":1461},"bgColor":"rgba(255, 255, 255, 0)","app":[{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i1/2885348004/O1CN01VGD0zR28zsfam7jdK_!!2885348004.png","pSrc_width":359,"pSrc_height":195,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"-200","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568705588836},"pos":"359|195|879|0"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01OsbueJ28zsfam6axR_!!2885348004.png","pSrc_width":750,"pSrc_height":552,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"-200","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":"1595498283319_2"},"pos":"750|552|648|0"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i4/2885348004/O1CN01efVf2l28zsfjF5hQ6_!!2885348004.png","pSrc_width":555,"pSrc_height":271,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1625","delay":"0","appID":1568703928029},"pos":"555|271|76|98"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i2/2885348004/O1CN017X7NWy28zsfZxT73Y_!!2885348004.png","pSrc_width":673,"pSrc_height":386,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"1000","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"860","delay":"0","appID":1568703937494,"memoryImgwh":{"W":670,"H":386},"memoryPagewh":{"W":670,"H":386}},"pos":"670|386|662|31"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01aSyIbl28zsfds9ROH_!!2885348004.png","pSrc_width":656,"pSrc_height":414,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"-684","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568703958944},"pos":"650|410|336|34"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i4/2885348004/O1CN011aK6Ek28zsfbOo3Nu_!!2885348004.png","pSrc_width":385,"pSrc_height":603,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"750","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568703976960},"pos":"385|610|230|54"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i2/2885348004/O1CN01qfaLU928zsfdsAFIA_!!2885348004.png","pSrc_width":229,"pSrc_height":410,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":-336,"translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568703992146},"pos":"229|410|431|413"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i1/2885348004/O1CN01GCZU1u28zsfcstyW3_!!2885348004.png","pSrc_width":490,"pSrc_height":44,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"","translate_Ypx":"-300","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1670","delay":"0","appID":1568703999036},"pos":"490|43|806|121"}],"appLinks":[]},"show":"2","img_width":750,"img_height":360},{"img":"","href":"","customContent":{"width":750,"height":1200,"bgImg":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01gr7seL28zsfaWmxrd_!!2885348004.jpg","bgImgSize":{"width":750,"height":1461},"bgColor":"rgba(0, 0, 0, 0)","app":[{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i2/2885348004/O1CN01t8EL9S28zsfeMPJXB_!!2885348004.png","pSrc_width":818,"pSrc_height":1176,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568706620128},"pos":"818|1176|-5|0"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01JFHS4j28zsfbynGdH_!!2885348004.png","pSrc_width":566,"pSrc_height":666,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"750","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568706690160},"pos":"566|666|218|81"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01ADVcbT28zsfYfvgIT_!!2885348004.png","pSrc_width":656,"pSrc_height":392,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"300","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568706670412},"pos":"656|392|729|44"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i4/2885348004/O1CN01gJKwIa28zsfaHVRPi_!!2885348004.png","pSrc_width":195,"pSrc_height":207,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"100","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568706716717},"pos":"195|207|751|81"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i2/2885348004/O1CN01Gta0Iq28zsfduyvge_!!2885348004.png","pSrc_width":626,"pSrc_height":333,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"0","translate_Ypx":"-30","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568706643930},"pos":"626|330|42|38"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i4/2885348004/O1CN0138TbXv28zsfeMOykb_!!2885348004.png","pSrc_width":518,"pSrc_height":594,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"750","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568706654803},"pos":"518|594|388|196"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i4/2885348004/O1CN01DqYLte28zsfYSqUkG_!!2885348004.png","pSrc_width":107,"pSrc_height":174,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"500","translate_Ypx":"-500","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":1568707383261},"pos":"107|174|564|577"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i3/2885348004/O1CN01MNbW1628zsfa0BYM7_!!2885348004.png","pSrc_width":160,"pSrc_height":140,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"100","translate_Ypx":"-500","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":"1568707413682_1"},"pos":"160|140|375|21"},{"appName":"开场动画","appType":"apwx_jkcdh","config":{"pSrc":"https://img.alicdn.com/imgextra/i2/2885348004/O1CN01xR8kvk28zsfXVD427_!!2885348004.png","pSrc_width":157,"pSrc_height":144,"pSrc_href":"","show":"1","customContent":"","translate_type":"1","translate":"X","opacity":"0|1","timingFunction":"ease","translate_Xpx":"750","translate_Ypx":"0","transform_scale":"scale(1, 1)","transform_rotate":"rotate(0deg)","duration":"1000","delay":"0","appID":"1568707396934_1"},"pos":"150|150|308|490"}],"appLinks":[]},"show":"2","img_width":"","img_height":""}],"PagStyle_obj":[{"style":{"fontSize":15,"select_bgColor":"#8e1a34","bgColor":"#ffffff","margin":4}},{"content":["1","2","3"],"style":{"width":120,"height":24,"color":"#000000","bgColor":"#f9f9f9","fontSize":16,"left":8,"top":8,"borderRadius":0,"partial":0,"select_color":"#ffffff","select_bgColor":"#f60f60","pag_bgColor":"#ffffff","pagSrc":"","pagSrc_width":0,"pagSrc_height":0}},{"content":[{"default":"https://img.alicdn.com/imgextra/i2/1867852664/O1CN01pjaHJw1VY9ctHDuy7_!!1867852664.jpg","select":"https://img.alicdn.com/imgextra/i2/1867852664/O1CN01YxPUNy1VY9d4Aumli_!!1867852664.jpg"},{"default":"https://img.alicdn.com/imgextra/i1/1867852664/O1CN01WWLFqp1VY9cwao0zx_!!1867852664.jpg","select":"https://img.alicdn.com/imgextra/i4/1867852664/O1CN01Om3LBQ1VY9d1e8eYm_!!1867852664.jpg"},{"default":"https://img.alicdn.com/imgextra/i3/1867852664/O1CN01L26zGz1VY9cwamL4M_!!1867852664.jpg","select":"https://img.alicdn.com/imgextra/i3/1867852664/O1CN01zZuode1VY9d6AmBk4_!!1867852664.jpg"}],"style":{"width":80,"height":24,"left":8,"top":8,"partial":0,"pag_bgColor":"#ffffff","pagSrc":"","pagSrc_width":0,"pagSrc_height":0}}],"PagPos_obj":[{"width":803,"height":145,"left":240,"top":451},{"width":138,"height":360,"left":0,"top":0},{"width":138,"height":360,"left":550,"top":0},{"width":750,"height":40,"left":0,"top":0},{"width":750,"height":40,"left":0,"top":300}],"PagStyle":0,"PagPos":0,"bgColor":"rgba(255, 255, 255, 0)","showsPagination":"true","autoPlay":"true","autoPlayInterval":"9000","loop":"true","page_color_select":"#8e1a34","prev_next":{"show":"false","prev_pSrc":"https://img.alicdn.com/imgextra/i4/1867852664/O1CN01FzDVbS1VY9dz5iCXR_!!1867852664.png","next_pSrc":"https://img.alicdn.com/imgextra/i4/1867852664/O1CN01MT5VTI1VY9dwO0XSl_!!1867852664.png","prev_width":48,"prev_height":48,"next_width":48,"next_height":48},"children_kcdh":true,"appID":1595498280344},"pos":"750|1200|0|0","child_data":[{"width":750,"height":40,"left":0,"top":1144,"type":"pagination","visibility":"visible","style":{}},{"width":50,"height":48,"left":29,"top":152,"visibility":"hidden","style":{},"type_extend":"prev"},{"width":48,"height":48,"left":675,"top":152,"visibility":"hidden","style":{},"type_extend":"next"}]}],"appLinks":[]},"customContent_2":"","customContent_3":"","appID":1595498254509,"rotate_s":"8","rotate_h":"-8","rotate_d":"-8","rotate_m":"8"},"pos":"750|382|71|0","child_data":[{"width":56,"height":58,"left":157,"top":13,"type":"d","visibility":"visible","style":{"font-size":"50px","color":"rgb(255, 255, 255)","font-weight":"700","text-decoration":"line-through solid rgb(255, 255, 255)","text-align":"center","background-color":"rgba(0, 0, 0, 0)","background-image":"","line-height":"normal"}},{"width":56,"height":58,"left":278,"top":13,"type":"h","visibility":"visible","style":{"font-size":"50px","color":"rgb(255, 255, 255)","font-weight":"700","text-decoration":"line-through solid rgb(255, 255, 255)","text-align":"center","background-color":"rgba(0, 0, 0, 0)","background-image":"","line-height":"normal"}},{"width":56,"height":58,"left":400,"top":13,"type":"m","visibility":"visible","style":{"font-size":"50px","color":"rgb(255, 255, 255)","font-weight":"700","text-decoration":"line-through solid rgb(255, 255, 255)","text-align":"center","background-color":"rgba(0, 0, 0, 0)","background-image":"","line-height":"normal"}},{"width":56,"height":58,"left":521,"top":13,"type":"s","visibility":"visible","style":{"font-size":"50px","color":"rgb(255, 255, 255)","font-weight":"700","text-decoration":"line-through solid rgb(255, 255, 255)","text-align":"center","background-color":"rgba(0, 0, 0, 0)","background-image":"","line-height":"normal"}}]}'>
                <icon>&#xe623;</icon><span>预设组件</span>
              </li> -->
              <!-- ↑↑↑↑↑↑ ↑ 预设组件 ↑↑↑↑↑↑ ↑ -->

            </ul>
          </div>
        </div>
        <div id="box" class="pageBox">
          <div class="box-wrap">
            <div class="skin-up-save">
              <span class="setskinup-app" style="display:none;"></span>
              <span class="skin-show">样式预设</span>
              <span class="skin-save">+</span>
            </div>
            <div class="box-inner" data-boxselect="open">
              <div id="SJDZ_APP" class="canvas">
                <div class="hot-box"></div>
                <div class="app-box"></div>
              </div>
            </div>
            <div class="opBg"></div>
          </div>
        </div>
        <div id="right" class="pageRight">
          <div class="app-layer">
            <div class="app-layer-hd close tips" data-title="编辑图层"><i class="hd-i">&#xe68a;</i></div>
            <div class="app-layer-bd">
              <div class="name-hd">编辑图层</div>
              <ul class="app-layer-list"></ul>
            </div>
          </div>
          <div class="rmoveHD"></div>
          <div id="appEditPanel" class="rbd">
            <div id="adialog-signal" style="display:none;"></div>
            <div id="adialog-box" class="app-dialog">
              <div id="adialog-title" class="rhd"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ft"></div>
  </div>
  <div class="codePanel">
    <div class="appSignal" style="display:none;"><span class="getChildData"></span></div>
    <div class="Export epbox">
      <div class="hd"><span class="title">生成代码</span><span class="close">&#xe63f;</span></div>
      <div class="codetip">
        提醒：本工具生成的代码，只能在
        <a href="https://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=2&charset=utf-8" target="_blank">沃姆设计</a>
        定制模块中使用，
        <a href="https://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=2&charset=utf-8" target="_blank">点击咨询客服>></a>
      </div>
      <div class="bd">
        <textarea id="ePcodeText"></textarea>
      </div>
      <div class="buttom"><span class="copy">复制代码</span><span class="close2">取消</span></div>
    </div>
    <div class="Import epbox">
      <div class="hd"><span class="title">导入代码</span><span class="close">&#xe63f;</span></div>
      <div class="codetip">
        请在下面输入框中，粘贴JSON代码
      </div>
      <div class="bd">
        <textarea id="ePdaoruCode"></textarea>
      </div>
      <div class="buttom"><span class="impcode">导入</span><span class="close2">取消</span></div>
    </div>
    <div class="heiBg"></div>
  </div>
  <div class="appStyles">
    <div class="skin">
      <div class="hd"><span>选择预设皮肤</span><i class="close">&#xe63f;</i></div>
      <div class="bd">
      </div>
    </div>
    <div class="heiBg"></div>
  </div>
  <div class="tbapps">
    <div class="tbapp_exchange">
      <i class="tu"></i>
      <i class="tu_get"></i>
      <i class="up_tu"></i>
      <i class="up_tu_get"></i>
      <i class="video"></i>
      <i class="tu_video"></i>
      <i class="pck"></i>
      <i class="wxk"></i>
      <i class="wxk_get"></i>
      <i class="wxitem"></i>
      <i class="wxitem_get"></i>
      <span class="open_tb_tip"></span>
    </div>
    <div class="cj_TAOTU">
      <div class="tu_panel">
        <div class="cj_header"><span class="hdtit">选择图片</span><span class="cjclose"></span></div>
        <div class="cj_ems"><span></span></div>
        <!-- <div class="cj_inbox"><div><span class="thd">图片地址</span><input class="inlink" name="cjlink" type="text"/><span class="tuinputOK">确定</span></div></div> -->
        <div class="cj_content">
          <div class="tu_Nav">
            <div class="listnav">
              <div class="nav tu_group" get_data="tumain"><span>图片空间</span></div>
              <div class="nav tu_group" get_data="itemtus"><span>宝贝图片</span></div>
              <div class="nav_tusc tu_group tuselected" get_data="tusck"><span>素材库</span></div>
              <div class="nav_taovideo" get_data="taovideo"><span>视频</span></div>
              <span class="cjupimg"><a class="upbox" href="//tu.taobao.com/redaction/manager.htm" target="_blank">上传图片</a></span>
            </div>
          </div>
          <div class="mainbox tumain">
            <div class="CT_tree-wrap">
              <div class="tree_search"><input id="Intree" type="text" /></div>
              <div class="folder_tree"></div>
            </div>
            <div class="cjcontainer_hd">
              <div class="cjsearchKey"><input id="cjseKey" type="text" /><i></i></div>
            </div>
            <div class="cjarea-container">
              <div class="mod-container">
                <div class="search-container"></div>
                <ul class="cjtu_result"></ul>
              </div>
            </div>
          </div>
          <div class="mainbox itemtus">
            <div class="search_items"><span><input type="text" name="itemname" placeholder="输入关键字"></span>
              <div class="Price"><label>价格:</label><span><input type="text" name="startPrice"></span><label>-</label><span><input type="text" name="endPrice"></span><button id="Items_Search">搜索</button></div>
            </div>
            <div class="btu_box"></div>
          </div>
          <div class="mainbox tusck">
            <div class="sck_box"></div>
          </div>
          <div class="mainbox taovideo">
            <div class="search_video"><span><i></i><input id="cjsearch_video" type="text" name="itemname" placeholder="输入关键字"></span></div>
            <div class="video_box"></div>
          </div>
        </div>
        <div class="cj_ft">
          <div class="cjnext_pagination nex_tu"><span class="mPrev no_more">上一页</span><span class="mNext">下一页</span></div>
          <div class="cjnext_pagination nex_titemtu"><span class="itemtuMore itemPrev no_more">上一页</span><span class="itemtuMore itemNext">下一页</span></div>
          <div class="cjnext_pagination nex_scku"><span class="srckMore scPrev no_more">上一页</span><span class="srckMore scNext no_more">下一页</span></div>
          <div class="cjnext_pagination nex_video"><span class="videoMore videoPrev no_more">上一页</span><span class="videoMore videoNext">下一页</span></div>
        </div>
      </div>
      <div class="cj_heiBG"></div>
    </div>
    <div class="WXHref">
      <div class="href_panel">
        <div class="cj_header"><span>链接小工具</span><span class="cjclose"></span></div>
        <div class="cj_ems"><span></span></div>
        <!--<div class="cj_inbox"><div><span class="thd">添加链接</span><input class="inlink" name="cjlink" type="text"/></div></div>-->
        <div class="cj_content">
          <div class="tumain">
            <div class="CT_tree-wrap">
              <div class="folder_tree">
                <div class="nav linkselected" get_data="common"><span>常用链接</span></div>
                <div class="nav" get_data="items"><span>宝贝链接</span></div>
                <div class="nav" get_data="category"><span>宝贝分类</span></div>
                <div class="nav" get_data="coupon"><span>优惠券</span></div>
                <div class="nav" get_data="page"><span>店铺故事承接页</span></div>
                <div class="nav" get_data="activity"><span>自定义页面链接</span></div>
              </div>
            </div>
            <div class="cjarea-container">
              <div class="mod-container">
                <div class="modpanel" showd="common">
                  <div class="local-input">
                    <span class="local-input__label">楼层跳转</span>
                    <span class="local-input__info">输入模块widgetid：</span>
                    <input class="local-input__input" placeholder="可联系客服获取模块widgetid" type="text" data-pre="widgetid|" />
                    <span class="local-input__button">确定</span>
                  </div>
                  <div class="local-input">
                    <span class="local-input__label">旺旺</span>
                    <span class="local-input__info">输入发送宝贝ID</span>
                    <input class="local-input__input" placeholder="联系旺旺可将宝贝发送给客服, 可以不填" type="text" data-pre="wang|" />
                    <span class="local-input__button">确定</span>
                  </div>
                  <div class="local-input">
                    <span class="local-input__label">店铺关注</span>
                    <span class="local-input__info">关注后跳转链接</span>
                    <input class="local-input__input" placeholder="可以不填" type="text" data-pre="follow|" />
                    <span class="local-input__button">确定</span>
                  </div>
                </div>
                <div class="modpanel" showd="items">
                  <div class="search_items"><span><input type="text" name="itemname" placeholder="输入关键字"></span>
                    <div class="Price"><label>价格:</label><span><input type="text" name="startPrice"></span><label>-</label><span><input type="text" name="endPrice"></span><button id="Items_Search_wx">搜索</button></div>
                  </div>
                </div>
                <div class="modpanel" showd="category"></div>
                <div class="modpanel" showd="coupon"></div>
                <div class="modpanel" showd="page"></div>
                <div class="modpanel" showd="activity"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cj_ft">
          <div class="cjnext_pagination"><span class="mPrev no_more">上一页</span><span class="mNext no_more">下一页</span></div>
        </div>
      </div>
      <div class="cj_heiBG"></div>
    </div>
    <div class="WXItems">
      <div class="href_panel">
        <div class="cj_header"><span>宝贝选择器</span><span class="cjclose"></span></div>
        <div class="cj_ems"><span></span></div>
        <div class="cj_content">
          <div class="tumain">
            <div class="CT_tree-wrap">
              <div class="folder_tree">
                <div class="nav linkselected" get_data="items"><span>选择宝贝</span></div>
                <div class="nav" get_data="items_Imp"><span>批量导入</span></div>
              </div>
            </div>
            <div class="cjarea-container">
              <div class="mod-container">
                <div class="modpanel" showd="items">
                  <div class="search_items">
                    <span class="all_icon"><i class="icon"></i>全选</span>
                    <span><input type="text" name="itemname" placeholder="输入关键字"></span>
                    <div class="Price"><label>价格:</label><span><input type="text" name="startPrice"></span><label>-</label><span><input type="text" name="endPrice"></span><button id="Items_Search_wx">搜索</button></div>
                  </div>
                </div>
                <div class="modpanel" showd="items_Imp">
                  <div class="Impid_items">
                    <span class="tip_id">输入宝贝ID ↓</span>
                    <span class="all_icon"><i class="icon"></i>全选</span>
                  </div>
                  <div class="Impid_main">
                    <div class="left">
                      <div class="tips">提示：请以回车换行区隔宝贝ID，最多只能输入10个宝贝ID以供选择。</div>
                      <div class="input-box">
                        <div class="input">
                          <textarea class="input-area"></textarea>
                        </div>
                        <div class="action-bar">
                          <button type="button" class="id_empty" role="button">清空ID</button>
                          <button type="button" class="id_query" role="button">查询</button>
                        </div>
                      </div>
                    </div>
                    <div class="right">
                      <div class="no-data">请在左侧输入宝贝ID后，点击“查询”</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cj_ft">
          <div class="cjnext_pagination"><span class="mPrev no_more">上一页</span><span class="mNext no_more">下一页</span></div>
          <div class="cj_setitems"><span class="cjclose">取消</span><span class="setItems">确定</span></div>
        </div>
      </div>
      <div class="cj_heiBG"></div>
    </div>
  </div>

  <div id="previewFrameWrapper">
    <span class="close-iframe">关闭预览</span>
    <div id="previewFrame"><iframe width="100%" height="100%" src="./preview.php" name="preview"  frameborder="0"></iframe></div>
  </div>
  <script>
    // let closeIframe = document.querySelector('.close-iframe');
    // closeIframe.addEventListener("click", () => {
    //   document.querySelector("#previewFrameWrapper").style.display = "none";
    // })
    // window.previewInSameWindow = function(data) {
    //   let previewFrameWrapper = document.querySelector("#previewFrameWrapper");
    //   previewFrameWrapper.style.display = "block";
    //   let iframe = window.frames['preview'];
    //   // from 表单触发 POST 请求
    //   let form = iframe.document.createElement('form');
    //   form.method = 'post';
    //   form.target = "_self";
    //   form.action = "./preview.php";
    //   let input = document.createElement('input');
    //   input.setAttribute('name', 'code');
    //   input.setAttribute('value', data);
    //   form.appendChild(input);
    //   iframe.document.body.appendChild(form);
    //   form.submit();
    // }

    let previewInline = document.querySelector('.preview-inline')
    previewInline.addEventListener("click", () => {
      const preview = document.querySelector('.Preview_code')
      preview.setAttribute('open-page', "iframe");
      preview.click();
      preview.setAttribute('open-page', "");
    })
  </script>
</body>

</html>