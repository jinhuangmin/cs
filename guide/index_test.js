 $(function(){
 	var navHtml=`<div class="head">
								<div class="logo2">
												<a href="https://www.cnzoom.com">
														<img src="../public/images/logo/home_logo.png">
												</a>
								</div>
								<div class="nnnna">
										<ul id="ddmenu">
												<li class="dflli home"><a target="_blank" class="d-menu" href="https://www.cnzoom.com"><em>首页</em></a></li>

												<li class="dflli submenu"><a target="_blank" href="https://zxn.taobao.com/designer_detail.htm?&designerId=1016893" class="d-menu"><em>无线Weex定制</em><span></span></a>
														<ul class="xflul" style="display: none;">
																<li class="xflli"><a target="_blank" href="https://www.cnzoom.com/3.0" class="x-menu">新版工具3.0</a></li>
																<li class="xflli"><a target="_blank" href="https://www.cnzoom.com/new" class="x-menu">旧版工具2.0</a></li>
														</ul>
												</li>
												<li class="dflli submenu"><a target="_blank" href="https://www.cnzoom.com/3.0" class="d-menu"><em>PC/无线模板</em><span></span></a>
																<ul class="xflul" style="display: none;">
																				<li class="xflli"><a target="_blank" href="https://www.cnzoom.com/3.0" class="x-menu">新版工具3.0</a></li>
																				<li class="xflli"><a target="_blank" href="https://www.cnzoom.com/new" class="x-menu">旧版工具2.0</a></li>
																</ul>
												</li>
												<li class="dflli submenu"><a target="_blank" class="d-menu"><em>装修工具</em><span></span></a>
																<ul class="xflul" style="display: none;">
																				<li class="xflli"><a target="_blank"  class="x-menu">PC装修辅助工具</a></li>
																				<li class="xflli"><a target="_blank"  class="x-menu">无线装修工具（定制）</a></li>
																				<li class="xflli"><a target="_blank"  class="x-menu">无线连接转换工具</a></li>
																				<li class="xflli"><a target="_blank"  class="x-menu">颜色值获取工具</a></li>
																</ul>
												</li>
												<li class="dflli"><a target="_blank" href="https://www.cnzoom.com/guide/tool.html" class="d-menu">案例展示</a></li>
												<li class="dflli"><a target="_blank" href="https://www.cnzoom.com/guide/tool.html" class="d-menu">教程帮助</a></li>
										</ul>
								</div>
								<a target="_blank" href="" class='contact'>
										<svg class="iconfont-symbol " aria-hidden="true" style="font-size: 15px;position: relative;top: 1px;">
												<use xlink:href="#iconicon-test"></use>
										</svg>
										联系我们
								</a>
							</div>`;

	var ftHtml='<div class="row">'+
	        '<div class="top">'+
	        '<div class="left">'+
	        '<div>'+
	        '<img class="logo" src="https://img.alicdn.com/imgextra/i2/800803731/O1CN01mp57RK1dQqENW1ISm_!!800803731.png">'+
	        '<h2>淘宝 天猫 阿里国际站</h2>'+
	        '<h1>15355003615</h1>'+
	        '<h2>淘宝天猫WEEX无线定制</h2>'+
	        '<h1>18072803854</h1>'+
	        '<ul>'+
	        '<li>'+
	        '    <span style="float: left;color:#9b9ea0;">淘宝天猫服务</span>'+
	        '    <a target="_blank" href="https://www.taobao.com/webww/ww.php?ver=3&touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&siteid=cntaobao&status=1&charset=utf-8" style="background:url(https://img.alicdn.com/imgextra/i4/800803731/O1CN01Eo4Zhm1dQqENdaQiF_!!800803731.png) left center no-repeat;margin:4px 0 0 15px;width:20px;height:20px;display:block;float: left;"></a>'+
	        '    <a target="blank" href="https://wpa.qq.com/msgrd?V=3&uin=11627067&Site=QQ客服&Menu=yes" style="width: 20px;height:21px;margin:2px 0 0 15px;display:block;float: left;"><img src="https://img.alicdn.com/imgextra/i1/800803731/O1CN010bT9wD1dQqEMphL7t_!!800803731.png" alt="点击这里给我发消息"></a>'+
	        '</li>'+
	        ' <li>'+
	        '    <span style="float: left;color:#9b9ea0;">阿里国际站服务</span>'+
	        '    <a target="_blank" href="https://amos.alicdn.com/msg.aw?v=2&amp;uid=沃姆设计&amp;site=enaliint&amp;s=24&amp;charset=UTF-8" style="background:url(https://img.alicdn.com/imgextra/i4/800803731/O1CN01Eo4Zhm1dQqENdaQiF_!!800803731.png) left center no-repeat;margin:4px 0 0 15px;width:20px;height:20px;display:block;float: left;"></a>'+
	        '    <a target="blank" href="https://wpa.qq.com/msgrd?V=3&uin=79001768&Site=QQ客服&Menu=yes" style="width: 20px;height:21px;margin:2px 0 0 15px;display:block;float: left;"><img src="https://img.alicdn.com/imgextra/i1/800803731/O1CN010bT9wD1dQqEMphL7t_!!800803731.png" alt="点击这里给我发消息"></a>'+
	        '</li>'+
	        '<li>'+
	        '    <span style="float: left;color:#9b9ea0;font-size: 12px;">工作时间：周一至周五 9:00--18:00</span>'+
	        '</li>'+
	        '</ul>'+
	        '</div>'+
	        '</div>'+
	        '<ul class="right">'+
	        '<li>'+
	        '<h3>入住官方平台模板</h3>'+
	        '<ul>'+
	        '<li><a target="blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.1998546510.6.qvSIcI&designerId=1016893&productType=0&site=1003">无线端</a></li>'+
	        '<li><a target="blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.xB9n9L&designerId=1016893&productType=0&site=3&price=50-100">天猫PC端</a></li>'+
	        '<li><a target="blank" href="https://zxn.taobao.com/designer_detail.htm?spm=a215h.7721252.0.0.wQp1gr&designerId=1016893&productType=0&site=2&price=30-50">淘宝PC端</a></li>'+
	        '<li><a target="blank" href="https://cnzoom.com/weex/">天猫淘宝WEEX定制</a></li>'+
	        '<li><a target="blank" href="https://zhuangxiu.alibaba.com/list.html?viewMarket=icbuzxAll&key=%E6%B2%83%E5%A7%86&pageSize=20&startPrice=&endPrice=&sort=sale-show&market=icbuzx">阿里巴巴国际站</a></li>'+
	        '<li><a target="blank" href="https://xiangqing.taobao.com/list.html?spm=a2o1b.7760070.1998632851.3.24484f64trwW82&q=%E6%B2%83%E5%A7%86&client=&industry=&style=&sort=3">神笔详情</a></li>'+
	        '</ul>'+
	        '</li>'+
	        '<li>'+
	        '<h3>自建工具平台</h3>'+
	        '<ul>'+
	        '<li><a target="blank" href="https://cnzoom.com/3.0/">天猫/淘宝PC端装修工具</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/gm">无线端链接转换</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/tool/nav">天猫/淘宝PC端导航样式修改工具</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/zxn/color">取色值工具</a></li>'+
	        '<li><a target="blank" href="https://cnzoom.com/en/tool/">阿里国际站热区工具</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/zxd/index.php">京东装修工具</a></li>'+
	        '</ul>'+
	        '</li>'+
	        '<li>'+
	        '<h3>帮助教程</h3>'+
	        '<ul>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/guide/tool.html">天猫/淘宝PC端教程</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/guide/wuxian.html">无线端模板教程</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/en/guide/">国际站模板教程</a></li>'+
	        '<li><a target="blank" href="https://www.cnzoom.com/doc/buyandfapiao/">发票说明</a></li>'+
	        '    </ul>'+
	        '</li>'+
	        '</ul>'+
	        '</div>'+
	        '<div class="mid">'+
	        '     <div class="row">'+
	        '<ul>'+
	        '    <li>公司地址：浙江省杭州市滨江区江南大道江南岸艺术园区1215室</li>'+
	        '             <li>官方唯一网站：https://www.cnzoom.com</li>'+
	        '             <li>专注阿里巴巴集团旗下开放平台模板创意设计与开发</li>'+
	        '         </ul>'+
	        '     </div>'+
	        ' </div>'+
	        ' <div class="bot">'+
	        '     <div class="row">'+
	        '         <p class="copyright">© 2013-2019 Cnzoom.com <span class="">版权所有</span></p>'+
	        '         <div><img style="width:20px;" src="https://img.alicdn.com/imgextra/i3/800803731/O1CN01tGTyRm1dQqEMT1sgS_!!800803731.gif"><img style="width:20px;margin:0 5px 0 2px;" src="https://img.alicdn.com/imgextra/i3/800803731/O1CN018m4mET1dQqELLGwVe_!!800803731.png"><span>浙公网安备 33010802005272号</span><a target="blank" style="color:#939393;padding-left:20px;" href="http://www.beian.miit.gov.cn/">浙ICP备09006645号-2</a></div>'+
	        '     </div>'+
	        ' </div>'+
	        '</div>';

	    var contactHtml='<div class="tel">'+
	        '<div class="icon"></div>'+
	        '<p class="title">联系我们</p>'+
	        '<div class="sub-nav">'+
	        '    <div class="list">'+
	        '        <div class="sub_icon f1"></div>'+
	        '        <p><a href="https://www.taobao.com/webww/ww.php?ver=3&amp;touid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&amp;siteid=cntaobao&amp;status=1&amp;charset=utf-8" target="_blank" rel="noopener"><img class="tb" src="https://amos.alicdn.com/realonline.aw?v=2&amp;uid=%E6%B2%83%E5%A7%86%E8%AE%BE%E8%AE%A1&amp;site=cntaobao&amp;s=1&amp;charset=utf-8" alt="点这里给我发消息"></a></p>'+
	        '    </div>'+
	        '    <div class="list">'+
	        '        <div class="sub_icon f2"></div>'+
	        '        <p><a target="blank" href="tencent://message/?uin=11627067&amp;Site=点击这里给我发消息&amp;Menu=yes"><img class="tb" src="https://pub.idqqimg.com/qconn/wpa/button/button_old_11.gif" alt="点击这里给我发消息"></a></p>'+
	        '    </div>'+
	        '    <div class="list">'+
	        '        <div class="sub_icon f3"></div>'+
	        '        <p>定制咨询</p>'+
	        '        <p class="number">15355003615</p>'+
	        '    </div>'+
	        '    <div class="list">'+
	        '        <div class="sub_icon f3"></div>'+
	        '        <p>技术支持</p>'+
	        '        <p class="number">18072803854</p>'+
	        '    </div>'+
	        '    <div class="list">'+
	        '        <div class="sub_icon f4"></div>'+
	        '        <img src="https://www.cnzoom.com/en/images/weixin.jpg">'+
	        '    </div>'+
	        '    <div class="list">'+
	        '        <div class="sub_icon f5"></div>'+
	        '        <p>杭州市滨江区江南岸艺术园区A幢-1215室</p>'+
	        '    </div>'+
	        '</div>'+
	        '</div>'+
	        '<a href="#top" class="gotop"><i></i></a>';

     $(".header").append(navHtml);
    $(".footer").append(ftHtml);
	$(".sidebar").append(contactHtml);

});