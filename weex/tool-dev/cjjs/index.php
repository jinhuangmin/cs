<?php
	/**
	 * 第一次自动处理页面
	 * 插件请求处理php
	 * 返回，cjjs/tb.js
	 * 对应插件中的，tb.js
	 */
	$tb = "tb.js";
	echo ( file_get_contents($tb) );
?>