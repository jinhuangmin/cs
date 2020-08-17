<?php
	//非本商，直接退出,此处可不开启
    // if( !strstr( $_SERVER['HTTP_REFERER'], 'dashi51.ews.m.jaeapp.com') && !strstr( $_SERVER['HTTP_REFERER'], 'dashi51.com') ){ die(0); }
	/**
	 * 令牌校验
	 */
	$_sjdz_token_ = trim($_POST["_sjdz_token_"]);
	session_start();
	if( !$_sjdz_token_ || $_sjdz_token_ != trim(strval($_SESSION["_sjdz_token_"]))  ){
		die(0);
	}	
	 /**
	 * 宝贝列表数组
	 * 多宝贝样式预设
	 */
	$apwx_jbblb = array(
		array(
			name => '宝贝列表',
			pic => 'https://img.alicdn.com/imgextra/i1/1867852664/O1CN01SWTJnJ1VY9cTSvyOe_!!1867852664.jpg',
			type => 'apwx_jbblb',
			data => '{
				"appType": "apwx_jbblb",
				"config": {
					"item_box": {
						"width": "368",
						"height": "600",
						"right": "14",
						"bottom": "14",
						"list": "2",
						"bgColor": "#ffffff"
					},
					"items": [{
						"itemId": "",
						"picUrl": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01pqA1Fh1VY9c9ZG1u9_!!1867852664.jpg",
						"itemLink": "",
						"addhref": "",
						"title": "连衣裙香影春装新款裙子女百褶西装裙中长风衣春秋款格子女装",
						"subtitle": "双击可编辑文本",
						"subtitle2": "双击可编辑扩展文本内容",
						"salePrice": "000.0",
						"reservePrice": "000.0",
						"sale30": "008",
						"tagpSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN013Jfjdx1VY9cKg0xy8_!!1867852664.png",
						"subpSrc1": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN011YYUFL1VY9cI6Pne2_!!1867852664.png"
					}, {
						"itemId": "",
						"picUrl": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01eSjgko1VY9cHfUfz7_!!1867852664.jpg",
						"itemLink": "",
						"addhref": "",
						"title": "连衣裙香影春装新款裙子女百褶西装裙中长风衣春秋款格子女装",
						"subtitle": "双击可编辑文本",
						"subtitle2": "双击可编辑扩展文本内容",
						"salePrice": "000.0",
						"reservePrice": "000.0",
						"sale30": "008",
						"tagpSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN013Jfjdx1VY9cKg0xy8_!!1867852664.png",
						"subpSrc1": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN011YYUFL1VY9cI6Pne2_!!1867852664.png"
					}, {
						"itemId": "",
						"picUrl": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01FxgxwG1VY9cH7tLuF_!!1867852664.jpg",
						"itemLink": "",
						"addhref": "",
						"title": "连衣裙香影春装新款裙子女百褶西装裙中长风衣春秋款格子女装",
						"subtitle": "双击可编辑文本",
						"subtitle2": "双击可编辑扩展文本内容",
						"salePrice": "000.0",
						"reservePrice": "000.0",
						"sale30": "008",
						"tagpSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN013Jfjdx1VY9cKg0xy8_!!1867852664.png",
						"subpSrc1": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN011YYUFL1VY9cI6Pne2_!!1867852664.png"
					}, {
						"itemId": "",
						"picUrl": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01yNAJ9s1VY9c9ZHEjp_!!1867852664.jpg",
						"itemLink": "",
						"addhref": "",
						"title": "连衣裙香影春装新款裙子女百褶西装裙中长风衣春秋款格子女装",
						"subtitle": "双击可编辑文本",
						"subtitle2": "双击可编辑扩展文本内容",
						"salePrice": "000.0",
						"reservePrice": "000.0",
						"sale30": "008",
						"tagpSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN013Jfjdx1VY9cKg0xy8_!!1867852664.png",
						"subpSrc1": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN011YYUFL1VY9cI6Pne2_!!1867852664.png"
					}],
					"videoShow": "true",
					"picUrlRadius": 0,
					"prece_ltxt": "￥",
					"reservePrice_ltxt": "￥",
					"sale30_ltxt": "已售",
					"sale30_rtxt": "件",
					"buypSrc": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN012goyn41VY9cGKiEVc_!!1867852664.jpg",
					"addbuypSrc": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01BfGUQ21VY9cN2qON5_!!1867852664.jpg",
					"exp_alltxt": "双击编辑模块通用文本2",
					"exp_allimg": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01BIbReh1VY9cJv3SYQ_!!1867852664.jpg",
					"exp_alltxt3": "通用文本3-背景专用",
					"exp_allimg3": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01gOUNLt1VY9cPTj987_!!1867852664.jpg",
					"appID": 1551939721181
				},
				"pos": "750|1214|0|0",
				"child_data": [{
					"width": 180,
					"height": 40,
					"left": 13,
					"top": 556,
					"type": "exp_allimg3",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 148,
					"height": 19,
					"left": 13,
					"top": 534,
					"type": "exp_alltxt3",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 375,
					"height": 420,
					"left": 0,
					"top": 0,
					"type": "picUrl",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(0, 0, 238)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(0, 0, 238)",
						"text-align": "start",
						"background-color": "rgb(248, 248, 248)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 280,
					"height": 136,
					"left": 46,
					"top": 160,
					"type": "exp_allimg",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 60,
					"height": 60,
					"left": 0,
					"top": 0,
					"type": "tagpSrc",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 220,
					"height": 40,
					"left": 76,
					"top": 380,
					"type": "subpSrc1",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 72,
					"height": 100,
					"left": 296,
					"top": 396,
					"type": "buypSrc",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(0, 0, 238)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(0, 0, 238)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 72,
					"height": 40,
					"left": 296,
					"top": 356,
					"type": "addbuypSrc",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(0, 0, 238)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(0, 0, 238)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 273,
					"height": 20,
					"left": 14,
					"top": 434,
					"type": "title",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 98,
					"height": 20,
					"left": 14,
					"top": 489,
					"type": "subtitle",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 36,
					"height": 19,
					"left": 27,
					"top": 463,
					"type": "salePrice",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 36,
					"height": 19,
					"left": 93,
					"top": 463,
					"type": "reservePrice",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 25,
					"height": 19,
					"left": 238,
					"top": 463,
					"type": "sale30",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 14,
					"height": 19,
					"left": 79,
					"top": 463,
					"type": "reservePrice_ltxt",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 14,
					"height": 19,
					"left": 13,
					"top": 463,
					"type": "prece_ltxt",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 28,
					"height": 19,
					"left": 207,
					"top": 463,
					"type": "sale30_ltxt",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 14,
					"height": 19,
					"left": 264,
					"top": 463,
					"type": "sale30_rtxt",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 154,
					"height": 19,
					"left": 166,
					"top": 508,
					"type": "subtitle2",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}, {
					"width": 140,
					"height": 19,
					"left": 13,
					"top": 508,
					"type": "exp_alltxt",
					"visibility": "visible",
					"style": {
						"font-size": "14px",
						"color": "rgb(69, 69, 69)",
						"font-weight": "400",
						"text-decoration": "none solid rgb(69, 69, 69)",
						"text-align": "start",
						"background-color": "rgba(0, 0, 0, 0)",
						"background-image": "",
						"line-height": "normal"
					}
				}]
			}'
		)
	);



	 /**
	 * 倒计时模块
	 * 多样式预设
	 */
	$apwx_jdjs = array(
		array(
			name => '倒计时',
			pic => 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01wpfj9x1dQqHLgCTe9_!!800803731.jpg',
			type => 'apwx_jdjs',
			data => '{
						"appType": "apwx_jdjs",
						"config": {
							"startTime": "2019-02-20 09:40:53",
							"endTime": "2019-02-23 09:40:53",
							"bgImg": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01Pvy8WF1dQqHLTiome_!!800803731.jpg",
							"bgImg_width": "750",
							"bgImg_height": "230",
							"bgColor": "#ffffff",
							"customContent_1": "",
							"customContent_2": "",
							"customContent_3": ""
						},
						"pos": "750|230|0|0",
						"child_data": [
			                {
			                    "width": 56, 
			                    "height": 64, 
			                    "left": 160, 
			                    "top": 106, 
			                    "type": "d", 
			                    "visibility": "visible", 
			                    "style": {
			                        "font-size": "48px", 
			                        "color": "rgb(255, 255, 255)", 
			                        "font-weight": "400", 
			                        "text-decoration": "none solid rgb(69, 69, 69)", 
			                        "text-align": "center", 
			                        "background-color": "rgba(0, 0, 0, 0)", 
			                        "background-image": "", 
			                        "line-height": "normal"
			                    }
			                }, 
			                {
			                    "width": 57, 
			                    "height": 64, 
			                    "left": 285, 
			                    "top": 106, 
			                    "type": "h", 
			                    "visibility": "visible", 
			                    "style": {
			                        "font-size": "48px", 
			                        "color": "rgb(255, 255, 255)", 
			                        "font-weight": "400", 
			                        "text-decoration": "none solid rgb(69, 69, 69)", 
			                        "text-align": "center", 
			                        "background-color": "rgba(0, 0, 0, 0)", 
			                        "background-image": "", 
			                        "line-height": "normal"
			                    }
			                }, 
			                {
			                    "width": 56, 
			                    "height": 64, 
			                    "left": 408, 
			                    "top": 106, 
			                    "type": "m", 
			                    "visibility": "visible", 
			                    "style": {
			                        "font-size": "48px", 
			                        "color": "rgb(255, 255, 255)", 
			                        "font-weight": "400", 
			                        "text-decoration": "none solid rgb(69, 69, 69)", 
			                        "text-align": "center", 
			                        "background-color": "rgba(0, 0, 0, 0)", 
			                        "background-image": "", 
			                        "line-height": "normal"
			                    }
			                }, 
			                {
			                    "width": 56, 
			                    "height": 64, 
			                    "left": 533, 
			                    "top": 106, 
			                    "type": "s", 
			                    "visibility": "visible", 
			                    "style": {
			                        "font-size": "48px", 
			                        "color": "rgb(255, 255, 255)", 
			                        "font-weight": "400", 
			                        "text-decoration": "none solid rgb(69, 69, 69)", 
			                        "text-align": "center", 
			                        "background-color": "rgba(0, 0, 0, 0)", 
			                        "background-image": "", 
			                        "line-height": "normal"
			                    }
			                }
			            ]
				}'
		),
		array(
			name => '倒计时',
			pic => 'https://img.alicdn.com/imgextra/i4/1867852664/O1CN01BvBdim1VY9d1gDgWm_!!1867852664.jpg',
			type => 'apwx_jdjs',
			data => '{
						"appType": "apwx_jdjs",
						"config": {
							"startTime": "2019-02-20 09:40:53",
							"endTime": "2019-02-23 09:40:53",
							"bgImg": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01BqErsO1VY9cRRxh8X_!!1867852664.jpg",
							"bgImg_width": "750",
							"bgImg_height": "400",
							"bgColor": "#ffffff",
							"customContent_1": "",
							"customContent_2": "",
							"customContent_3": ""
						},
						"pos": "750|400|0|0",
						"child_data": [{
							"width": 31,
							"height": 35,
							"left": 288,
							"top": 257,
							"type": "d",
							"visibility": "visible",
							"style": {
								"font-size": "26px",
								"color": "rgb(69, 69, 69)",
								"font-weight": "400",
								"text-decoration": "none solid rgb(69, 69, 69)",
								"text-align": "center",
								"background-color": "rgba(0, 0, 0, 0)",
								"background-image": "",
								"line-height": "normal"
							}
						}, {
							"width": 31,
							"height": 35,
							"left": 363,
							"top": 257,
							"type": "h",
							"visibility": "visible",
							"style": {
								"font-size": "26px",
								"color": "rgb(69, 69, 69)",
								"font-weight": "400",
								"text-decoration": "none solid rgb(69, 69, 69)",
								"text-align": "center",
								"background-color": "rgba(0, 0, 0, 0)",
								"background-image": "",
								"line-height": "normal"
							}
						}, {
							"width": 31,
							"height": 35,
							"left": 438,
							"top": 257,
							"type": "m",
							"visibility": "visible",
							"style": {
								"font-size": "26px",
								"color": "rgb(69, 69, 69)",
								"font-weight": "400",
								"text-decoration": "none solid rgb(69, 69, 69)",
								"text-align": "center",
								"background-color": "rgba(0, 0, 0, 0)",
								"background-image": "",
								"line-height": "normal"
							}
						}, {
							"width": 31,
							"height": 35,
							"left": 513,
							"top": 257,
							"type": "s",
							"visibility": "visible",
							"style": {
								"font-size": "26px",
								"color": "rgb(69, 69, 69)",
								"font-weight": "400",
								"text-decoration": "none solid rgb(69, 69, 69)",
								"text-align": "center",
								"background-color": "rgba(0, 0, 0, 0)",
								"background-image": "",
								"line-height": "normal"
							}
						}]
				}'
		)
	);

	/**
	 * 轮播的多风格多皮肤
	 */
	$apwx_jnbo = array(
		array(
			name => '轮播',
			pic => 'https://img.alicdn.com/imgextra/i4/800803731/O1CN01HBGyES1dQqHD9HVSg_!!800803731.jpg',
			type => 'apwx_jnbo',
			data => '{
						"appType": "apwx_jnbo",
						"config": {
			                "slider": [
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN018h6M5x1VY9cH9Rdi2_!!1867852664.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 360
			                    }, 
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN0114hWXh1VY9cG3EMsi_!!1867852664.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 360
			                    }, 
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01nNURot1VY9cFJRRKx_!!1867852664.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 360
			                    }
			                ], 
			                "PagStyle_obj": [
			                    {
			                        "style": {
			                            "fontSize": 10, 
			                            "select_bgColor": "#000000", 
			                            "bgColor": "rgba(113, 113, 113, 0.5)"
			                        }
			                    }, 
			                    {
			                        "content": [
			                            "1", 
			                            "2", 
			                            "3"
			                        ], 
			                        "style": {
			                            "width": 120, 
			                            "height": 24, 
			                            "color": "#000000", 
			                            "bgColor": "#f9f9f9", 
			                            "fontSize": 16, 
			                            "left": 8, 
			                            "top": 8, 
			                            "borderRadius": 0, 
			                            "partial": 0, 
			                            "select_color": "#ffffff", 
			                            "select_bgColor": "#f60f60", 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }, 
			                    {
			                        "content": [
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01pjaHJw1VY9ctHDuy7_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01YxPUNy1VY9d4Aumli_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01WWLFqp1VY9cwao0zx_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01Om3LBQ1VY9d1e8eYm_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01L26zGz1VY9cwamL4M_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01zZuode1VY9d6AmBk4_!!1867852664.jpg"
			                            }
			                        ], 
			                        "style": {
			                            "width": 80, 
			                            "height": 24, 
			                            "left": 8, 
			                            "top": 8, 
			                            "partial": 0, 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }
			                ], 
			                "PagPos_obj": [
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 310
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 550, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 300
			                    }
			                ], 
			                "PagStyle": 0, 
			                "PagPos": "0", 
			                "bgColor": "rgba(255, 255, 255, 0)", 
			                "showsPagination": "true", 
			                "autoPlay": "true", 
			                "autoPlayInterval": 3000, 
			                "loop": "true", 
			                "page_color_select": "#000000", 
			                "prev_next": {
			                    "show": "true", 
			                    "prev_pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01FzDVbS1VY9dz5iCXR_!!1867852664.png", 
			                    "next_pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01MT5VTI1VY9dwO0XSl_!!1867852664.png", 
			                    "prev_width": 48, 
			                    "prev_height": 48, 
			                    "next_width": 48, 
			                    "next_height": 48
			                }, 
			                "children_kcdh": true,
			                "appID": 1567826622482
			            }, 
						"child_data": [
			                {
			                    "width": 750, 
			                    "height": 40, 
			                    "left": 0, 
			                    "top": 360, 
			                    "type": "pagination", 
			                    "visibility": "visible", 
			                    "style": { }
			                }, 
			                {
			                    "width": 48, 
			                    "height": 48, 
			                    "left": 29, 
			                    "top": 152, 
			                    "visibility": "visible", 
			                    "style": { }, 
			                    "type_extend": "prev"
			                }, 
			                {
			                    "width": 48, 
			                    "height": 48, 
			                    "left": 675, 
			                    "top": 152, 
			                    "visibility": "visible", 
			                    "style": { }, 
			                    "type_extend": "next"
			                }
			            ],
						"pos": "750|360|0|0"
					}'
		),
		array(
			name => '轮播',
			pic => 'https://img.alicdn.com/imgextra/i3/800803731/O1CN01HuyQlk1dQqHMazg7U_!!800803731.jpg',
			type => 'apwx_jnbo',
			data => '{
						"appType": "apwx_jnbo",
						"config": {
			                "slider": [
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01viVoKP1dQqHCejiKk_!!800803731.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 500
			                    }, 
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i1/800803731/O1CN0112530o1dQqHKQasFt_!!800803731.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 500
			                    }, 
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01A0AQxD1dQqHIPm93B_!!800803731.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 500
			                    }, 
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01y1YVg61dQqHMaSW3p_!!800803731.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 500
			                    }, 
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01WTLb481dQqHN6Y2x8_!!800803731.jpg", 
			                        "href": "", 
			                        "customContent": "", 
			                        "show": 1, 
			                        "img_width": 750, 
			                        "img_height": 500
			                    }
			                ], 
			                "PagStyle_obj": [
			                    {
			                        "style": {
			                            "bgColor": "rgba(71, 69, 69, 0.5)"
			                        }
			                    }, 
			                    {
			                        "content": [
			                            "1", 
			                            "2", 
			                            "3", 
			                            "4", 
			                            "5"
			                        ], 
			                        "style": {
			                            "width": 120, 
			                            "height": 24, 
			                            "color": "#000000", 
			                            "bgColor": "#f9f9f9", 
			                            "fontSize": 16, 
			                            "left": 8, 
			                            "top": 25, 
			                            "borderRadius": 0, 
			                            "partial": 0, 
			                            "select_color": "#ffffff", 
			                            "select_bgColor": "#f60f60", 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }, 
			                    {
			                        "content": [
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01QkPpW91dQqHICiMoo_!!800803731.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01brlKbr1dQqHKGnISf_!!800803731.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01hNBUEI1dQqHL9MDSI_!!800803731.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01MuJjXO1dQqHMaSv0s_!!800803731.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i2/800803731/O1CN015ob4vs1dQqHLerA1W_!!800803731.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01rGPddz1dQqHIClFZa_!!800803731.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01PPqBwo1dQqHMaSW4W_!!800803731.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01pxGiCE1dQqHHEsJbZ_!!800803731.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01uPFPKG1dQqHNa37zz_!!800803731.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01L127es1dQqHKGqRvj_!!800803731.jpg"
			                            }
			                        ], 
			                        "style": {
			                            "width": 130, 
			                            "height": 300, 
			                            "left": 0, 
			                            "top": 0, 
			                            "partial": 50, 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }
			                ], 
			                "PagPos_obj": [
			                    {
			                        "width": 750, 
			                        "height": 300, 
			                        "left": 0, 
			                        "top": 500
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 550, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 300
			                    }
			                ], 
			                "PagStyle": 2, 
			                "PagPos": 0, 
			                "bgColor": "rgba(255, 255, 255, 0)", 
			                "showsPagination": "true", 
			                "autoPlay": "true", 
			                "autoPlayInterval": 3000, 
			                "loop": "true", 
			                "page_color_select": "rgb(255, 80, 0)", 
			                "prev_next": {
			                    "show": "false", 
			                    "prev_pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01FzDVbS1VY9dz5iCXR_!!1867852664.png", 
			                    "next_pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01MT5VTI1VY9dwO0XSl_!!1867852664.png", 
			                    "prev_width": 48, 
			                    "prev_height": 48, 
			                    "next_width": 48, 
			                    "next_height": 48
			                }, 
			                "children_kcdh": true,
			                "appID": 1567764334996
			            },
			            "child_data": [
			                {
			                    "width": 750, 
			                    "height": 300, 
			                    "left": 0, 
			                    "top": 500, 
			                    "type": "pagination", 
			                    "visibility": "visible", 
			                    "style": { }
			                }, 
			                {
			                    "width": 48, 
			                    "height": 48, 
			                    "left": 29, 
			                    "top": 245, 
			                    "visibility": "hidden", 
			                    "style": { }, 
			                    "type_extend": "prev"
			                }, 
			                {
			                    "width": 48, 
			                    "height": 48, 
			                    "left": 675, 
			                    "top": 245, 
			                    "visibility": "hidden", 
			                    "style": { }, 
			                    "type_extend": "next"
			                }
			            ],
						"pos": "750|500|0|0"
					}'
		),
		array(
			name => '轮播',
			pic => 'https://img.alicdn.com/imgextra/i4/800803731/O1CN012uKTu91dQqHLgitjB_!!800803731.jpg',
			type => 'apwx_jnbo',
			data => '{
						"appType": "apwx_jnbo",
						"config": {
			                "slider": [
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN0114hWXh1VY9cG3EMsi_!!1867852664.jpg", 
			                        "href": "", 
			                        "customContent": {
			                            "width": 750, 
			                            "height": 641, 
			                            "bgImg": "", 
			                            "bgImgSize": "", 
			                            "bgColor": "rgb(255, 255, 255)", 
			                            "app": [
			                                {
			                                    "appType": "apwx_jtup", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01PtBrLO1VY9cnouwnz_!!1867852664.jpg", 
			                                        "width": 750, 
			                                        "height": 640, 
			                                        "href": "", 
			                                        "appID": 1553754501342
			                                    }, 
			                                    "pos": "750|641|0|0"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01AFEH7S1VY9co7kx9Q_!!1867852664.png", 
			                                        "pSrc_width": 660, 
			                                        "pSrc_height": 100, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "150", 
			                                        "appID": 1553754692157
			                                    }, 
			                                    "pos": "660|100|237|46", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01B56JZC1VY9cnpMTDT_!!1867852664.png", 
			                                        "pSrc_width": 140, 
			                                        "pSrc_height": 48, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "300", 
			                                        "appID": 1553754713544
			                                    }, 
			                                    "pos": "140|48|340|52", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01saundg1VY9cyYwUpT_!!1867852664.png", 
			                                        "pSrc_width": 120, 
			                                        "pSrc_height": 30, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "450", 
			                                        "appID": 1553754713544
			                                    }, 
			                                    "pos": "120|30|387|64", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01JMpg7N1VY9cydHHqA_!!1867852664.png", 
			                                        "pSrc_width": 120, 
			                                        "pSrc_height": 30, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "600", 
			                                        "appID": 1553754713544
			                                    }, 
			                                    "pos": "120|30|418|65", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN012C0CAJ1VY9cpb5YkO_!!1867852664.png", 
			                                        "pSrc_width": 480, 
			                                        "pSrc_height": 440, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "0", 
			                                        "appID": 1553754647163
			                                    }, 
			                                    "pos": "480|440|86|158", 
			                                    "appName": "开场动画"
			                                }
			                            ], 
			                            "appLinks": [ ]
			                        }, 
			                        "show": "2", 
			                        "img_width": 750, 
			                        "img_height": 360
			                    }, 
			                    {
			                        "img": "", 
			                        "href": "", 
			                        "customContent": {
			                            "width": 750, 
			                            "height": 640, 
			                            "bgImg": "", 
			                            "bgImgSize": "", 
			                            "bgColor": "rgb(255, 255, 255)", 
			                            "app": [
			                                {
			                                    "appType": "apwx_jtup", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01pbQmpI1VY9cp8LCKB_!!1867852664.jpg", 
			                                        "width": 750, 
			                                        "height": 640, 
			                                        "href": "", 
			                                        "appID": 1553310588819
			                                    }, 
			                                    "pos": "750|640|0|0"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01RkS2qc1VY9cqfwqjX_!!1867852664.png", 
			                                        "pSrc_width": 660, 
			                                        "pSrc_height": 120, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "150", 
			                                        "appID": 1553755237174
			                                    }, 
			                                    "pos": "660|120|219|49", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01B56JZC1VY9cnpMTDT_!!1867852664.png", 
			                                        "pSrc_width": 140, 
			                                        "pSrc_height": 48, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "300", 
			                                        "appID": 1553755261175
			                                    }, 
			                                    "pos": "140|48|326|55", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01eqwvyf1VY9d19QeIK_!!1867852664.png", 
			                                        "pSrc_width": 120, 
			                                        "pSrc_height": 30, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "450", 
			                                        "appID": 1553755295020
			                                    }, 
			                                    "pos": "120|30|373|70", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01otuwbh1VY9cwpqcEg_!!1867852664.png", 
			                                        "pSrc_width": 120, 
			                                        "pSrc_height": 30, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "600", 
			                                        "appID": 1553755309285
			                                    }, 
			                                    "pos": "120|30|408|52", 
			                                    "appName": "开场动画"
			                                }, 
			                                {
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN010PsZ8A1VY9cpd3Cmt_!!1867852664.png", 
			                                        "pSrc_width": 520, 
			                                        "pSrc_height": 480, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "50", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "500", 
			                                        "delay": "0", 
			                                        "appID": 1553755208824
			                                    }, 
			                                    "pos": "520|480|77|163", 
			                                    "appName": "开场动画"
			                                }
			                            ], 
			                            "appLinks": [ ]
			                        }, 
			                        "show": "2", 
			                        "img_width": "", 
			                        "img_height": ""
			                    }
			                ], 
			                "PagStyle_obj": [
			                    {
			                        "style": {
			                            "fontSize": 8, 
			                            "bgColor": "rgba(191, 188, 188, 0.37)", 
			                            "select_bgColor": "#0c0400"
			                        }
			                    }, 
			                    {
			                        "content": [
			                            "1", 
			                            "2", 
			                            "3", 
			                            "4"
			                        ], 
			                        "style": {
			                            "width": 120, 
			                            "height": 24, 
			                            "color": "#000000", 
			                            "bgColor": "#f9f9f9", 
			                            "fontSize": 16, 
			                            "left": 8, 
			                            "top": 8, 
			                            "partial": 0, 
			                            "select_color": "#ffffff", 
			                            "select_bgColor": "#f60f60", 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }, 
			                    {
			                        "content": [
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01pjaHJw1VY9ctHDuy7_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01sI2RNI1VY9cwc5Zwu_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01WWLFqp1VY9cwao0zx_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01XkaMbz1VY9cu2YIVt_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01L26zGz1VY9cwamL4M_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01eTgBxH1VY9cyJlyVW_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01NuR1il1VY9ctMEkPr_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01b2Fns31VY9cxKMlzD_!!1867852664.jpg"
			                            }
			                        ], 
			                        "style": {
			                            "width": 80, 
			                            "height": 24, 
			                            "left": 8, 
			                            "top": 8, 
			                            "partial": 0, 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }
			                ], 
			                "PagPos_obj": [
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 310
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 550, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 300
			                    }
			                ], 
			                "PagStyle": 0, 
			                "PagPos": "0", 
			                "bgColor": "rgba(255, 255, 255, 0)", 
			                "showsPagination": "true", 
			                "autoPlay": "true", 
			                "autoPlayInterval": "5000", 
			                "loop": "true", 
			                "page_color_select": "#0c0400", 
			                "children_kcdh": true,
			                "appID": 1567766813585
			            }, 
			            "child_data": [
			                {
			                    "width": 750, 
			                    "height": 40, 
			                    "left": 0, 
			                    "top": 640, 
			                    "type": "pagination", 
			                    "visibility": "visible", 
			                    "style": { }
			                }
			            ],
						"pos": "750|640|0|0"
					}'
		),
		array(
			name => '轮播',
			pic => 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01CivYnK1dQqHdCNN5S_!!800803731.jpg',
			type => 'apwx_jnbo',
			data => '{
						"appType": "apwx_jnbo",
						"config": {
			                "slider": [
			                    {
			                        "img": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN018h6M5x1VY9cH9Rdi2_!!1867852664.jpg", 
			                        "href": "", 
			                        "customContent": {
			                            "width": 750, 
			                            "height": 1200, 
			                            "bgImg": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01gr7seL28zsfaWmxrd_!!2885348004.jpg", 
			                            "bgImgSize": {
			                                "width": 750, 
			                                "height": 1461
			                            }, 
			                            "bgColor": "rgba(255, 255, 255, 0)", 
			                            "app": [
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i1/2885348004/O1CN01VGD0zR28zsfam7jdK_!!2885348004.png", 
			                                        "pSrc_width": 359, 
			                                        "pSrc_height": 195, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-200", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568705588836
			                                    }, 
			                                    "pos": "359|195|879|0"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01OsbueJ28zsfam6axR_!!2885348004.png", 
			                                        "pSrc_width": 750, 
			                                        "pSrc_height": 552, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-200", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568705588836
			                                    }, 
			                                    "pos": "750|552|648|0"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/2885348004/O1CN01efVf2l28zsfjF5hQ6_!!2885348004.png", 
			                                        "pSrc_width": 555, 
			                                        "pSrc_height": 271, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1625", 
			                                        "delay": "0", 
			                                        "appID": 1568703928029
			                                    }, 
			                                    "pos": "555|271|76|98"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/2885348004/O1CN017X7NWy28zsfZxT73Y_!!2885348004.png", 
			                                        "pSrc_width": 673, 
			                                        "pSrc_height": 386, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "1000", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "860", 
			                                        "delay": "0", 
			                                        "appID": 1568703937494, 
			                                        "memoryImgwh": {
			                                            "W": 670, 
			                                            "H": 386
			                                        }, 
			                                        "memoryPagewh": {
			                                            "W": 670, 
			                                            "H": 386
			                                        }
			                                    }, 
			                                    "pos": "670|386|662|31"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01aSyIbl28zsfds9ROH_!!2885348004.png", 
			                                        "pSrc_width": 656, 
			                                        "pSrc_height": 414, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "-684", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568703958944
			                                    }, 
			                                    "pos": "650|410|336|34"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/2885348004/O1CN011aK6Ek28zsfbOo3Nu_!!2885348004.png", 
			                                        "pSrc_width": 385, 
			                                        "pSrc_height": 603, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "750", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568703976960
			                                    }, 
			                                    "pos": "385|610|230|54"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/2885348004/O1CN01qfaLU928zsfdsAFIA_!!2885348004.png", 
			                                        "pSrc_width": 229, 
			                                        "pSrc_height": 410, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": -336, 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568703992146
			                                    }, 
			                                    "pos": "229|410|431|413"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i1/2885348004/O1CN01GCZU1u28zsfcstyW3_!!2885348004.png", 
			                                        "pSrc_width": 490, 
			                                        "pSrc_height": 44, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "", 
			                                        "translate_Ypx": "-300", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1670", 
			                                        "delay": "0", 
			                                        "appID": 1568703999036
			                                    }, 
			                                    "pos": "490|43|806|121"
			                                }
			                            ], 
			                            "appLinks": [ ]
			                        }, 
			                        "show": "2", 
			                        "img_width": 750, 
			                        "img_height": 360
			                    }, 
			                    {
			                        "img": "", 
			                        "href": "", 
			                        "customContent": {
			                            "width": 750, 
			                            "height": 1200, 
			                            "bgImg": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01gr7seL28zsfaWmxrd_!!2885348004.jpg", 
			                            "bgImgSize": {
			                                "width": 750, 
			                                "height": 1461
			                            }, 
			                            "bgColor": "rgba(0, 0, 0, 0)", 
			                            "app": [
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/2885348004/O1CN01t8EL9S28zsfeMPJXB_!!2885348004.png", 
			                                        "pSrc_width": 818, 
			                                        "pSrc_height": 1176, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568706620128
			                                    }, 
			                                    "pos": "818|1176|-5|0"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01JFHS4j28zsfbynGdH_!!2885348004.png", 
			                                        "pSrc_width": 566, 
			                                        "pSrc_height": 666, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "750", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568706690160
			                                    }, 
			                                    "pos": "566|666|218|81"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01ADVcbT28zsfYfvgIT_!!2885348004.png", 
			                                        "pSrc_width": 656, 
			                                        "pSrc_height": 392, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "300", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568706670412
			                                    }, 
			                                    "pos": "656|392|729|44"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/2885348004/O1CN01gJKwIa28zsfaHVRPi_!!2885348004.png", 
			                                        "pSrc_width": 195, 
			                                        "pSrc_height": 207, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "100", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568706716717
			                                    }, 
			                                    "pos": "195|207|751|81"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/2885348004/O1CN01Gta0Iq28zsfduyvge_!!2885348004.png", 
			                                        "pSrc_width": 626, 
			                                        "pSrc_height": 333, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "0", 
			                                        "translate_Ypx": "-30", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568706643930
			                                    }, 
			                                    "pos": "626|330|42|38"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/2885348004/O1CN0138TbXv28zsfeMOykb_!!2885348004.png", 
			                                        "pSrc_width": 518, 
			                                        "pSrc_height": 594, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "750", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568706654803
			                                    }, 
			                                    "pos": "518|594|388|196"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i4/2885348004/O1CN01DqYLte28zsfYSqUkG_!!2885348004.png", 
			                                        "pSrc_width": 107, 
			                                        "pSrc_height": 174, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "500", 
			                                        "translate_Ypx": "-500", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": 1568707383261
			                                    }, 
			                                    "pos": "107|174|564|577"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i3/2885348004/O1CN01MNbW1628zsfa0BYM7_!!2885348004.png", 
			                                        "pSrc_width": 160, 
			                                        "pSrc_height": 140, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "100", 
			                                        "translate_Ypx": "-500", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": "1568707413682_1"
			                                    }, 
			                                    "pos": "160|140|375|21"
			                                }, 
			                                {
			                                    "appName": "开场动画", 
			                                    "appType": "apwx_jkcdh", 
			                                    "config": {
			                                        "pSrc": "https://img.alicdn.com/imgextra/i2/2885348004/O1CN01xR8kvk28zsfXVD427_!!2885348004.png", 
			                                        "pSrc_width": 157, 
			                                        "pSrc_height": 144, 
			                                        "pSrc_href": "", 
			                                        "show": "1", 
			                                        "customContent": "", 
			                                        "translate_type": "1", 
			                                        "translate": "X", 
			                                        "opacity": "0|1", 
			                                        "timingFunction": "ease", 
			                                        "translate_Xpx": "750", 
			                                        "translate_Ypx": "0", 
			                                        "transform_scale": "scale(1, 1)", 
			                                        "transform_rotate": "rotate(0deg)", 
			                                        "duration": "1000", 
			                                        "delay": "0", 
			                                        "appID": "1568707396934_1"
			                                    }, 
			                                    "pos": "150|150|308|490"
			                                }
			                            ], 
			                            "appLinks": [ ]
			                        }, 
			                        "show": "2", 
			                        "img_width": "", 
			                        "img_height": ""
			                    }
			                ], 
			                "PagStyle_obj": [
			                    {
			                        "style": {
			                            "fontSize": 15, 
			                            "select_bgColor": "#8e1a34", 
			                            "bgColor": "#ffffff", 
			                            "margin": 4
			                        }
			                    }, 
			                    {
			                        "content": [
			                            "1", 
			                            "2", 
			                            "3"
			                        ], 
			                        "style": {
			                            "width": 120, 
			                            "height": 24, 
			                            "color": "#000000", 
			                            "bgColor": "#f9f9f9", 
			                            "fontSize": 16, 
			                            "left": 8, 
			                            "top": 8, 
			                            "borderRadius": 0, 
			                            "partial": 0, 
			                            "select_color": "#ffffff", 
			                            "select_bgColor": "#f60f60", 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }, 
			                    {
			                        "content": [
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01pjaHJw1VY9ctHDuy7_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01YxPUNy1VY9d4Aumli_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01WWLFqp1VY9cwao0zx_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01Om3LBQ1VY9d1e8eYm_!!1867852664.jpg"
			                            }, 
			                            {
			                                "default": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01L26zGz1VY9cwamL4M_!!1867852664.jpg", 
			                                "select": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01zZuode1VY9d6AmBk4_!!1867852664.jpg"
			                            }
			                        ], 
			                        "style": {
			                            "width": 80, 
			                            "height": 24, 
			                            "left": 8, 
			                            "top": 8, 
			                            "partial": 0, 
			                            "pag_bgColor": "#ffffff", 
			                            "pagSrc": "", 
			                            "pagSrc_width": 0, 
			                            "pagSrc_height": 0
			                        }
			                    }
			                ], 
			                "PagPos_obj": [
			                    {
			                        "width": 803, 
			                        "height": 145, 
			                        "left": 240, 
			                        "top": 451
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 138, 
			                        "height": 360, 
			                        "left": 550, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 0
			                    }, 
			                    {
			                        "width": 750, 
			                        "height": 40, 
			                        "left": 0, 
			                        "top": 300
			                    }
			                ], 
			                "PagStyle": 0, 
			                "PagPos": 0, 
			                "bgColor": "rgba(255, 255, 255, 0)", 
			                "showsPagination": "true", 
			                "autoPlay": "true", 
			                "autoPlayInterval": "9000", 
			                "loop": "true", 
			                "page_color_select": "#8e1a34", 
			                "prev_next": {
			                    "show": "false", 
			                    "prev_pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01FzDVbS1VY9dz5iCXR_!!1867852664.png", 
			                    "next_pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01MT5VTI1VY9dwO0XSl_!!1867852664.png", 
			                    "prev_width": 48, 
			                    "prev_height": 48, 
			                    "next_width": 48, 
			                    "next_height": 48
			                }, 
			                "children_kcdh": true,
			                "appID": 1568703912743
			            }, 
			            "child_data": [
			                {
			                    "width": 750, 
			                    "height": 40, 
			                    "left": 0, 
			                    "top": 1144, 
			                    "type": "pagination", 
			                    "visibility": "visible", 
			                    "style": { }
			                }, 
			                {
			                    "width": 50, 
			                    "height": 48, 
			                    "left": 29, 
			                    "top": 152, 
			                    "visibility": "hidden", 
			                    "style": { }, 
			                    "type_extend": "prev"
			                }, 
			                {
			                    "width": 48, 
			                    "height": 48, 
			                    "left": 675, 
			                    "top": 152, 
			                    "visibility": "hidden", 
			                    "style": { }, 
			                    "type_extend": "next"
			                }
			            ],
						"pos": "750|1200|0|0"
					}'
		)
	);




	/*
	 * 模块数据列表
	 */
	$Appdata = array(
		array(
			name => '单图',
			type => 'apwx_jtup',
			data => '{
						"appType": "apwx_jtup",
						"config": {
							"pSrc": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01hkMu0B1dQqHKAOHDv_!!800803731.jpg",
							"width":"750",
							"height":"400",
							"href": ""
						},
						"pos": "750|400|0|0"
					}'
		),
		$apwx_jdjs,
		array(
			name => '视频',
			type => 'apwx_jsp',
			data => '{
						"appType": "apwx_jsp",
						"config": {
							"id":"220992156923",
							"width":"",
							"height":"",
							"videoSrc": "https://cloud.video.taobao.com//play/u/1867852664/p/2/e/6/t/1/220992156923.mp4",
							"videoPoster": "https://img.alicdn.com/imgextra/i2/6000000005761/O1CN01XPaf3C1sQaEuBg2Wt_!!6000000005761-0-tbvideo.jpg",
							"autoPlay": "video_true_auto",
							"videoLoop": "true",
							"stopShowPoster": "",
							"videoControls": "",
							"videoMuted": "",
							"autoRotate": "true"
						},
						"pos": "750|422|0|0"
					}'
		),
		$apwx_jnbo,
		array(
			name => '多图滑动',
			type => 'apwx_jdtuhd',
			data => '{
					"appType": "apwx_jdtuhd",
					"config": {
						"slider": [{
							"img": "https://img.alicdn.com/imgextra/i4/800803731/O1CN014gIYes1dQqH5RyX8u_!!800803731.jpg",
							"href": "",
							"img_width": 625,
							"img_height": 520
						}, {
							"img": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01hKsXxR1dQqH3mgRWW_!!800803731.jpg",
							"href": "",
							"img_width": 625,
							"img_height": 520
						}, {
							"img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01bcXmSZ1dQqH5tAp0S_!!800803731.jpg",
							"href": "",
							"img_width": 625,
							"img_height": 520
						}],
						"slider_right": 0,
						"customContent": "",
						"show": "1",
						"PagStyle": 1,
						"bgColor": "#f9f9f9",
						"showsPagination": "true",
						"page_width": 30,
						"page_height": 4,
						"page_width_select": 40,
						"page_height_select": 16,
						"page_radius": 0,
						"page_margin": 6,
						"page_wz_color": "#333333",
						"page_wz_color_select": "#333333",
						"page_wz_size": "20",
						"page_color": "rgba(195, 195, 195, 0.5)",
						"page_color_select": "#484848"
					},
					"pos": "750|520|0|0",
					"child_data": [{
						"width": 750,
						"height": 40,
						"left": 0,
						"top": 480,
						"type": "pagination",
						"visibility": "visible",
						"style": {}
					}]
				}'
		),
		array(
			name => '循环动画',
			type => 'apwx_jxdh',
			data => '{
						"appType": "apwx_jxdh",
						"config": {
							"pSrc": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01TKqk901dQqGR5N3zR_!!800803731.png",
							"pSrc_width": "120",
							"pSrc_height": "120",
							"pSrc_href": "",
							"show": "1",
							"customContent": "",
							"translate_type": "1",
							"translate": "X",
							"opacity": "1|1",
							"timingFunction": "linear",
							"translate_Xpx": "0",
							"translate_Ypx": "0",
							"transform_scale": "scale(1, 1)",
							"transform_rotate": "rotate(45deg)",
							"duration": "1000",
							"delay": "0"
						},
						"pos": "120|120|0|0"
					}'
		),
		array(
			name => '逐帧动画',
			type => 'apwx_jtgif',
			data => '{
					"appType": "apwx_jtgif",
					"config": {
						"slider": [{
							"img": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01A8zLVH1VY9ecCHCZW_!!1867852664.jpg",
							"href": "-1",
							"img_width": 750,
							"img_height": 560
						}, {
							"img": "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01SdqAEg1VY9eZ3E7A2_!!1867852664.jpg",
							"href": "-1",
							"img_width": 750,
							"img_height": 560
						}, {
							"img": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01ezhc8B1VY9eYAVCzI_!!1867852664.jpg",
							"href": "-1",
							"img_width": 750,
							"img_height": 560
						}, {
							"img": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01TG2vEE1VY9eaz2bw4_!!1867852664.jpg",
							"href": "-1",
							"img_width": 750,
							"img_height": 560
						}],
						"href": "",
						"bgColor": "rgba(0, 0, 0, 0)",
						"customContent": "",
						"show": "1",
						"translate_type": "1",
						"translate": "X",
						"opacity": "1|1",
						"timingFunction": "ease",
						"translate_Xpx": "0",
						"translate_Ypx": "0",
						"transform_scale": "scale(1, 1)",
						"transform_rotate": "rotate(0deg)",
						"duration": "0",
						"delay": "500",
						"slider_change": "1"
					},
					"pos": "750|560|0|0"
				}'
		),
		array(
			name => '开场动画',
			type => 'apwx_jkcdh',
			data => '{
						"appType": "apwx_jkcdh",
						"config": {
							"pSrc": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01tUovCX1dQqGWY9a3p_!!800803731.png",
							"pSrc_width": "750",
							"pSrc_height": "220",
							"pSrc_href": "",
							"show": "1",
							"customContent": "",
							"translate_type": "1",
							"translate": "X",
							"opacity": "0|1",
							"timingFunction": "ease",
							"translate_Xpx": "750",
							"translate_Ypx": "0",
							"transform_scale": "scale(1, 1)",
							"transform_rotate": "rotate(0deg)",
							"duration": "1000",
							"delay": "0"
						},
						"pos": "750|220|0|0"
					}'
		),
		array(
			name => '开场弹窗',
			type => 'apwx_jkctc',
			data => '{
						"appName": "开场弹窗",
						"appType": "apwx_jkctc",
						"config": {
							"pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01Jp6NU41VY9eZ9eCqg_!!1867852664.png",
							"pSrc_width": 550,
							"pSrc_height": 420,
							"pSrc_href": "",
							"bg_color": "rgba(0,0,0,0.6)",
							"bg_img": "",
							"bg_img_width": 136,
							"bg_img_height": 40,
							"close_img": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01eYeEiK1VY9eXOc5yf_!!1867852664.png",
							"close_width": "56",
							"close_height": "56",
							"outTime": 5,
							"outTime_fontSize": 40,
							"outTime_color": "#ffffff",
							"show": "1",
							"customContent": "",
							"translate_type": "2",
							"translate": "X",
							"opacity": "0|1",
							"timingFunction": "cubic-bezier(0.5, 1.6, 0.3, 0.6)",
							"translate_Xpx": "0",
							"translate_Ypx": "0",
							"transform_scale": "scale(1, 1)",
							"transform_rotate": "rotate(0deg)",
							"duration": "1000",
							"delay": "0",
							"_scale_exp_": {
								"_scale_exp_": 5,
								"scale_1": "scale(0.1, 0.1)",
								"scale_2": "scale(1, 1)"
							}
						},
						"pos": "750|1210|0|0",
						"child_data": [{
							"width": 550,
							"height": 420,
							"left": 98,
							"top": 333,
							"type": "popup",
							"visibility": "visible",
							"style": {}
						}, {
							"width": 23,
							"height": 52,
							"left": 666,
							"top": 38,
							"type": "time",
							"visibility": "visible",
							"style": {}
						}, {
							"width": 48,
							"height": 48,
							"left": 347,
							"top": 802,
							"type": "close",
							"visibility": "visible",
							"style": {}
						}]
					}'
		),
		$apwx_jbblb,
		array(
			name => '文字',
			type => 'apwx_jwz',
			data => '{
						"appType": "apwx_jwz",
						"config": {
							"text": "请双击编辑文本内容",
							"color": "#000000",
							"bgColor": "",
							"fontSize": "20",
							"href": "",
							"align": "center",
							"bgImg": "none",
							"bgImg_align": "",
							"fontWeight": "",
							"textDecoration": "",
							"borderWidth": "0",
							"borderColor": "#000000",
							"borderRadius": "0"
						},
						"pos": "200|50|0|0"
					}'
		),
		array(
	      name => '滚动公告',
	      type => 'apwx_jgdtw',
	      data => '{
	            "appType": "apwx_jgdtw",
	            "config": {
	                "pSrc": "https://img.alicdn.com/imgextra/i4/1867852664/O1CN017bNaPr1VY9ekfKVbK_!!1867852664.png", 
	                "pSrc_width": "260", 
	                "pSrc_height": "48", 
	                "pSrc_href": "", 
	                "show": "2", 
	                "wufeng": "1", 
	                "customContent": {
	                    "width": 1140, 
	                    "height": 484, 
	                    "bgImg": "", 
	                    "bgImgSize": "", 
	                    "bgColor": "rgb(255, 255, 255)", 
	                    "app": [
	                        {
	                            "appName": "图片", 
	                            "appType": "apwx_jtup", 
	                            "config": {
	                                "pSrc": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01VOeUCX1dQqHIjCbEN_!!800803731.jpg", 
	                                "width": 285, 
	                                "height": 484, 
	                                "href": "", 
	                                "appID": 1567828881261
	                            }, 
	                            "pos": "285|484|0|0"
	                        }, 
	                        {
	                            "appName": "图片", 
	                            "appType": "apwx_jtup", 
	                            "config": {
	                                "pSrc": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01LsJPuP1dQqHKWL9Nf_!!800803731.jpg", 
	                                "width": 285, 
	                                "height": 484, 
	                                "href": "", 
	                                "appID": "1567829118446_1"
	                            }, 
	                            "pos": "285|484|0|285"
	                        }, 
	                        {
	                            "appName": "图片", 
	                            "appType": "apwx_jtup", 
	                            "config": {
	                                "pSrc": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01vrgdPQ1dQqHO6t6yp_!!800803731.jpg", 
	                                "width": 285, 
	                                "height": 484, 
	                                "href": "", 
	                                "appID": "1567829120027_1"
	                            }, 
	                            "pos": "285|484|0|570"
	                        }, 
	                        {
	                            "appName": "图片", 
	                            "appType": "apwx_jtup", 
	                            "config": {
	                                "pSrc": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01KvEv0p1dQqHKFCLOR_!!800803731.jpg", 
	                                "width": 285, 
	                                "height": 484, 
	                                "href": "", 
	                                "appID": "1567829120408_1"
	                            }, 
	                            "pos": "285|484|0|855"
	                        }
	                    ], 
	                    "appLinks": [ ]
	                }, 
	                "translate_type": "2", 
	                "translate": "X", 
	                "opacity": "1|1", 
	                "timingFunction": "linear", 
	                "translate_Xpx": -750, 
	                "translate_Ypx": 0, 
	                "transform_scale": "scale(1, 1)", 
	                "transform_rotate": "rotate(0deg)", 
	                "duration": "15000", 
	                "delay": "0", 
	                "text": "双击编辑滚动文字内容", 
	                "text_size": "20", 
	                "text_color": "#333333", 
	                "align": "center", 
	                "roll_fx": 1, 
	                "whiteSpace": "pre-wrap", 
	                "box": {
	                    "bgColor": "", 
	                    "bgImg": "", 
	                    "bgImg_width": "", 
	                    "bgImg_height": "", 
	                    "paddingLR": "0", 
	                    "borderWidth": "0", 
	                    "borderColor": "#000000", 
	                    "borderRadius": "0", 
	                    "child_width": ""
	                }, 
	                "appID": 1572333022480
	            }, 
	            "child_extend": [
	                {
	                    "width": 0, 
	                    "height": 0, 
	                    "left": 0, 
	                    "top": 0, 
	                    "type": "pic", 
	                    "visibility": "visible", 
	                    "style": { }
	                }, 
	                {
	                    "width": 0, 
	                    "height": 0, 
	                    "left": 0, 
	                    "top": 0, 
	                    "type": "text", 
	                    "visibility": "visible", 
	                    "style": { }
	                }, 
	                {
	                    "width": 2565, 
	                    "height": 484, 
	                    "left": 0, 
	                    "top": 0, 
	                    "type": "child_page", 
	                    "visibility": "visible", 
	                    "style": { }
	                }
	            ],
	            "pos": "750|484|0|0"
	          }'
	    ),
		array(
			name => '购物车',
			type => 'apwx_jgwc',
			data => '{
						"appType": "apwx_jgwc",
						"config": {
							"pSrc": "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01MzOKir1VY9cAqHm3L_!!1867852664.png",
							"width":"200",
							"height":"40",
							"href": ""
						},
						"pos": "200|40|0|0"
					}'
		),
		array(
			name => '智能切图',
			type => 'apwx_jautoqt',
			data => '{
						"appType": "apwx_jautoqt",
						"config": {
							"cutpic": [],
							"mpSrc": "https://img.alicdn.com/imgextra/i2/1867852664/O1CN01HFNMGF1VY9dlj4d0t_!!1867852664.png",
							"width":"750",
							"height":"500"
						},
						"pos": "750|500|0|0"
					}'
		),
	);

	
	
	
	// echo "<pre>";
	// print_r( $Appdata );
	// echo "</pre>";
	
	
	

	$type = $_POST["type"] ? $_POST["type"] : "apwx_jbblb";
	$key = $_POST["key"] ? $_POST["key"]: null;
	$list = array();
	$data = null;
	
	
	if(true){
		foreach($Appdata as $k=>$app){
			//判断是否为数组，如果为数组则有预设皮肤，全部返回
			if($app[0]){
				$arrType = $app[0]["type"];
				if($type==$arrType){
					$data = json_encode($app);
					break;
				}
			}else{
				$arrType = $app["type"];
				if($type==$arrType){
					$data = $app["data"];
					break;
				}
			}
		}

		
		if(count($list)>0){
			echo json_encode($list);
			exit();
		}
		
		if($data){
			echo $data;
			exit();
		}
		
		if(!$data && count($list)==0){
			echo "查询的参数有误";
			exit();
		}
			
		
	}
	
	
?>