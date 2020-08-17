!function() {
	$(".tbapp_exchange").attr("data-dashi51-token", !0);

	function e(e) {
		try {
			e = e || {};
			var t = "jq" + (new Date).getTime();
			$("body").append('<script id="' + t + '" type="text/javascript"> function ' + t + '(response){ document.body.setAttribute("' + t + '",JSON.stringify(response)); } <\/script>'), $.ajax({
				type: e.type || "get",
				url: e.url || "",
				data: e.data || "",
				success: function(e) {
					console.info("success", e)
				},
				error: function(i) {
					var o = $("body").attr(t) || "";
					e && e.callback && e.callback(o), $("body").removeAttr(t), $("#" + t).remove()
				},
				dataType: "jsonp",
				jsonpCallback: t
			})
		} catch (e) {
			console.info(e)
		}
	}
	function t(e, t, i) {
		t = t, i = i;
		$.isFunction(t) && !i && (i = t, t = {}), $.ajax({
			type: "get",
			url: e,
			data: t,
			success: function(e) {
				i && i(e)
			},
			error: function(e) {
				i && i(-1)
			},
			dataType: "html"
		})
	}
	function i(e) {
		e = e || {};
		chrome.runtime.connect({
			name: "tbapp"
		}).postMessage(e)
	}
	chrome.runtime.onConnect.addListener(function(e) {
		"tbapp" == e.name && e.onMessage.addListener(function(e) {
			if (e) {
				if ("_tb_data_" == e.question) try {
					if (-1 == e.data) return $(".tbapp_exchange .open_tb_tip").attr("tao-err", !0), $(".tbapp_exchange .open_tb_tip").click(), !1;
					JSON.parse(e.data), $(".tbapp_exchange .open_tb_tip").removeAttr("tao-err"), "tu" == e.token.type && o.set(e), "video" == e.token.type && n.set(e), "wxk" == e.token.type && a.set(e), "wxitem" == e.token.type && d.set(e), "up_tu" == e.token.type && s.set(e)
				} catch (e) {
					$(".tbapp_exchange .open_tb_tip").attr("tao-err", !0), $(".tbapp_exchange .open_tb_tip").click()
				}
				"_open_tb_ok_" == e.question && ("tu" == e.token.type && o.get(e), "video" == e.token.type && n.get(e), "wxk" == e.token.type && a.get(e), "wxitem" == e.token.type && d.get(e), "up_tu" == e.token.type && s.get(e))
			}
			"_open_tb_not_" == e.question && $(".tbapp_exchange .open_tb_tip").click(), o.question = e.question
		})
	});
	var o = {
		ChoiceTUID: !1,
		page: 1,
		itemPage: 1,
		folderid: 0,
		panel: "tu"
	};
	o.root = $(".tbapps .cj_TAOTU"), o.init = function() {
		var e = o.root.find(".tuselected").attr("get_data");
		o.set({
			token: {}
		}), "tumain" == e && o.root.find(".nav[get_data=tumain]").click(), "itemtus" == e && (o.set({
			token: {}
		}), o.root.find(".nav[get_data=itemtus]").click())
	}, o.get = function(o) {
		var n = o.token.Do;
		this.ChoiceTUID && this.ChoiceTUID;
		if (!$.cookie("_tb_token_")) return !1;

		function a(e) {
			t("https://stream.taobao.com/api/get_files.api?appkey=tu&folderId=" + (e.token.folderid || "") + "&searchKey=" + (e.token.searchKey || "") + "&page=" + (e.token.page || 1) + "&pageSize=60&sort=1&_input_charset=utf-8", function(t) {
				t ? -1 != t ? i({
					question: "_tb_data_",
					data: t,
					token: {
						type: "tu",
						Do: "tree_click"
					}
				}) : console.info("数据返回异常") : function(e) {
					var t = e.token.folderid || "",
						o = e.token.searchKey || "",
						n = e.token.page || 1,
						a = "https://stream.taobao.com/api/get_files.api?appkey=tu&folderId=" + t + "&searchKey=" + o + "&page=" + n + "&pageSize=60&sort=1&_input_charset=utf-8";
					$("#tree_click_spare").remove(), $("body").append('<script id="tree_click_spare" type="text/javascript"> function callback_spare(response){ document.body.setAttribute("tree_click_spare",JSON.stringify(response)); console.log(response); } <\/script>'), $.ajax({
						type: "get",
						url: a,
						data: "",
						success: function(e) {},
						error: function(e) {
							var t = $("body").attr("tree_click_spare") || "",
								o = {
									question: "_tb_data_",
									data: t,
									token: {
										type: "tu",
										Do: "tree_click"
									}
								};
							i(o)
						},
						dataType: "jsonp",
						jsonpCallback: "callback_spare"
					})
				}(e)
			})
		}
		"tree" == n && t("//stream.taobao.com/api/get_folders.api?parentFolderId=&appkey=tu&sort=0", function(e) {
			if (e) if (-1 != e) {
				var t = {
					question: "_tb_data_",
					data: e,
					token: {
						type: "tu",
						Do: "tree"
					}
				};
				i(t)
			} else console.info("数据返回异常");
			else $("#tree_spare").remove(), $("body").append('<script id="tree_spare" type="text/javascript"> function callback_spare(response){ document.body.setAttribute("tree_spare",JSON.stringify(response)); console.log(response); } <\/script>'), $.ajax({
				type: "get",
				url: "//stream.taobao.com/api/get_folders.api?parentFolderId=&appkey=tu&sort=0",
				data: "",
				success: function(e) {},
				error: function(e) {
					var t = $("body").attr("tree_spare") || "",
						o = {
							question: "_tb_data_",
							data: t,
							token: {
								type: "tu",
								Do: "tree"
							}
						};
					i(o)
				},
				dataType: "jsonp",
				jsonpCallback: "callback_spare"
			})
		}), "tree_click" == n && a(o), "getnp_click" == n && a(o), "get_item_tu" == n &&
		function(o) {
			var n = "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8",
				a = o.token.currentPage || 1,
				d = o.token.price1 || "",
				s = o.token.price2 || "",
				r = o.token.kwd || "",
				c = {
					_tb_token_: $.cookie("_tb_token_"),
					currentPage: a,
					pageSize: 60
				};
			d && (c.price1 = d), s && (c.price2 = s), r && (c.kwd = r), t(n, c, function(t) {
				if (t) if (-1 != t) {
					var o = {
						question: "_tb_data_",
						data: t,
						token: {
							type: "tu",
							Do: "get_item_tu"
						}
					};
					i(o)
				} else console.info("数据返回异常");
				else e({
					type: "get",
					url: n,
					data: c,
					callback: function(e) {
						var t = {
							question: "_tb_data_",
							data: e,
							token: {
								type: "tu",
								Do: "get_item_tu"
							}
						};
						i(t)
					}
				})
			})
		}(o)
	}, o.set = function(e) {
		var t, o = this,
			n = e.token.Do;
		if ("tree" == n) try {
			var a = function e(t) {
					if (0 == t.folderId) {
						var i = 0 == t.parentFolderId ? "rshow" : "rhide",
							o = "<ul class='cjztree-inner " + i + "'>";
						o += "<li><span class='icon tree_open'></span><a id='Mypicture' class='tucat' d_folderId='" + t.folderId + "' d_parentFolderId='" + t.parentFolderId + "'><span></span><span class='tname'>" + t.folderName + "</span></a>", $(t.childrens).length > 0 && (o += e(t.childrens)), o += "</li>"
					} else for (var i = 0 == t[0].parentFolderId ? "rshow" : "rhide", o = "<ul class='ztree " + i + "'>", n = 0; n < $(t).length; n++) {
						var a = $(t[n].childrens).length > 0 ? "tree_close" : "tree_docu";
						o += "<li><span class='icon " + a + "'></span><a class='tucat' d_folderId='" + t[n].folderId + "' d_parentFolderId='" + t[n].parentFolderId + "'><span></span><span class='tname'>" + t[n].folderName + "</span></a>", $(t[n].childrens).length > 0 && (o += e(t[n].childrens)), o += "</li>"
					}
					o += "</ul>";
					return o
				}(JSON.parse(e.data).object);
			o.root.find(".folder_tree").append(a), o.root.find(".cjztree-inner").find(".icon").unbind("click"), o.root.find(".cjztree-inner").find(".icon").bind("click", function() {
				var e = $(this);
				e.hasClass("tree_open") ? (e.removeClass("tree_open").addClass("tree_close"), e.siblings(".ztree").slideUp("fast", function() {
					$(this).removeClass("rshow").addClass("rhide")
				})) : e.hasClass("tree_close") && (e.removeClass("tree_close").addClass("tree_open"), e.siblings(".ztree").slideDown("fast", function() {
					$(this).removeClass("rhide").addClass("rshow")
				}))
			}), o.root.find(".tucat").unbind("click"), o.root.find(".tucat").bind("click", function() {
				var e = $(this).attr("d_folderid");
				o.folderid = e, o.page = 1, o.root.find("#cjseKey").val("");
				var t = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "tree_click",
						folderid: e
					}
				};
				i(t)
			}), o.root.find("#Mypicture").click(), $(".tbapp_exchange").attr("data-tuinit", !0)
		} catch (e) {}
		o.root.find(".mPrev").unbind("click"), o.root.find(".mPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				o.page--;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "getnp_click",
						folderid: o.folderid,
						searchKey: o.root.find("#cjseKey").val(),
						page: o.page
					}
				};
				i(e)
			}
		}), o.root.find(".mNext").unbind("click"), o.root.find(".mNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				o.page++;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "getnp_click",
						folderid: o.folderid,
						searchKey: o.root.find("#cjseKey").val(),
						page: o.page
					}
				};
				i(e)
			}
		}), $("#cjseKey").keyup(function(e) {
			var e = e || event,
				t = e.keyCode,
				n = $(this).val();
			if (13 == t && n) {
				o.folderid = "", o.page = 1;
				var a = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "getnp_click",
						folderid: "",
						searchKey: n,
						page: o.page
					}
				};
				i(a)
			}
		}), o.root.find(".nav").unbind("click"), o.root.find(".nav").bind("click", function() {
			var e, n;
			t = $(this).attr("get_data"), $(this).addClass("tuselected"), $(this).siblings("div").removeClass("tuselected"), o.root.find("." + t).show().siblings(".mainbox").hide(), o.root.find(".tu_Nav").attr("data-selected", $(this).attr("get_data")), "itemtus" == t ? (o.root.find(".search_items").find("input").val(""), o.panel = "item", e = o.root.find(".search_items"), n = o.root.find(".itemtuMore"), i({
				question: "_open_tb_page_",
				token: {
					type: "tu",
					Do: "get_item_tu"
				}
			}), e.find("#Items_Search").unbind("click"), e.find("#Items_Search").bind("click", function() {
				o.itemPage > 1 && (o.itemPage = 1);
				var t = {
					question: "_open_tb_page_",
					token: {
						type: "tu",
						Do: "get_item_tu",
						price1: e.find("input[name=startPrice]").val(),
						price2: e.find("input[name=endPrice]").val(),
						kwd: e.find("input[name=itemname]").val()
					}
				};
				i(t)
			}), n.unbind("click"), n.bind("click", function() {
				if (!$(this).hasClass("no_more")) {
					$(this).hasClass("itemPrev") && o.itemPage > 1 && o.itemPage--, $(this).hasClass("itemNext") && o.itemPage++;
					var t = {
						question: "_open_tb_page_",
						token: {
							type: "tu",
							Do: "get_item_tu",
							currentPage: o.itemPage,
							price1: e.find("input[name=startPrice]").val(),
							price2: e.find("input[name=endPrice]").val(),
							kwd: e.find("input[name=itemname]").val()
						}
					};
					i(t)
				}
			})) : (o.root.find(".nex_titemtu").hide(), o.panel = "tu", ("_open_tb_not_" == o.question || !o.root.find(".cjtu_result").children().length && !o.root.find(".folder_tree").children().length) && i({
				question: "_open_tb_page_",
				token: {
					type: "tu",
					Do: "tree"
				}
			})), "tu" == o.panel && o.root.find(".nex_tu").show().siblings().hide(), "item" == o.panel && o.root.find(".nex_titemtu").show().siblings().hide()
		}), "tree_click" == n &&
		function(e) {
			var t = o.folderid || "",
				i = o.root.find(".tucat[d_folderid='" + t + "']");
			o.root.find(".tucat").removeClass("TUselected"), i.addClass("TUselected"), $("#Intree").val(o.root.find(".tucat[d_folderid='" + t + "']").find(".tname").text());
			try {
				var n = JSON.parse(e.data),
					a = "";
				if (n.object.length > 0) for (var d = 0; d < n.object.length; d++) a += "<li><a title='" + n.object[d].fileName + "' class='cjitem_img' data-tupix='" + n.object[d].pix + "' ><img src='" + n.object[d].url + "_100x100'><span class='settu'>选择本图</span></a><span class='tupix'>" + n.object[d].pix + "</span></li>";
				else a = "<li class='mod_Nocontent'>该类目没有图片！</li>";
				o.root.find(".cjtu_result").empty().append(a);
				var s = o.root.find(".cjnext_pagination").find(".mNext");
				"tu" == o.panel && (n.hasNext && n.total && n.object.length ? s.removeClass("no_more") : (s.addClass("no_more"), n.object.length || i.siblings(".tree_close").click())), o.page <= 1 ? o.root.find(".cjnext_pagination").find(".mPrev").addClass("no_more") : o.root.find(".cjnext_pagination").find(".mPrev").removeClass("no_more"), o.root.find(".cjitem_img").unbind("click"), o.root.find(".cjitem_img").bind("click", function() {
					var e = $(this).children("img").attr("src");
					e = -1 == e.indexOf("_100x100") ? e : e.slice(0, e.indexOf("_100x100")), $(".tbapp_exchange").attr("data-tu", e), $(".tbapp_exchange").find(".tu_get").click()
				})
			} catch (e) {}
		}(e), "get_item_tu" == n &&
		function(e) {
			var t = "";
			try {
				var i = JSON.parse(e.data),
					n = i.module.currentPage || 1,
					a = i.module.itemList,
					d = (i.module.totalCount, i.module.totalPage),
					t = "";
				a.length > 0 ? $.each(a, function(e, i) {
					t += "<li><a title='" + i.title + "' class='cjmod_img' data-tupix='' data-item='" + JSON.stringify(i) + "' ><img src='" + i.picUrl + "_100x100'><span class='settu'>选择本图</span></a><span class='tupix'>" + i.salePrice + "</span></li>"
				}) : t = "<div class='mod_Nocontent'>亲，你的店铺没有宝贝呀！</div>", o.root.find(".btu_box").empty().append("<ul class='itemtu_result'>" + t + "</ul>"), d > n ? o.root.find(".itemNext").removeClass("no_more") : o.root.find(".itemNext").addClass("no_more"), n > 1 ? o.root.find(".itemPrev").removeClass("no_more") : o.root.find(".itemPrev").addClass("no_more"), o.itemPage < 1 && (o.itemPage = 1), o.itemPage > d && (o.itemPage = d), o.root.find(".cjmod_img").unbind("click"), o.root.find(".cjmod_img").bind("click", function() {
					var e = $(this).children("img").attr("src");
					e = -1 == e.indexOf("_100x100") ? e : e.slice(0, e.indexOf("_100x100")), $(".tbapp_exchange").attr("data-tu", e), $(".tbapp_exchange").find(".tu_get").click()
				})
			} catch (e) {
				t = "<div class='mod_Nocontent'>亲，没有获取到宝贝数据，<em>您可能没有登陆淘宝，或没有查看宝贝的权限，或没有更多宝贝了！</em></div>", o.root.find(".btu_box").empty().append("<ul class='itemtu_result'>" + t + "</ul>")
			}
		}(e)
	};
	var n = {
		page: 1,
		itemPage: 1,
		pageSize: 30
	};
	n.root = $(".tbapps .cj_TAOTU"), n.init = function() {
		i({
			question: "_open_tb_page_",
			token: {
				type: "video",
				Do: "list"
			}
		})
	}, n.get = function(e) {
		var o = this;
		"list" == e.token.Do &&
		function(e) {
			var n = e.token.name || "",
				a = e.token.page || 1,
				d = e.token.pageSize || 30,
				s = e.token._tb_token_ || $.cookie("_tb_token_"),
				r = "https://ugc.taobao.com/sucai/ajax/videoQuery1.do?_input_charset=utf-8&pageNum=" + a + "&pageSize=" + d + "&type=mobile&sort=uploadTime&_tb_token_=" + s + "&name=" + n;
			s && t(r, function(e) {
				try {
					var n = {
						question: "_tb_data_",
						data: e,
						token: {
							type: "video",
							Do: "list"
						}
					},
						a = JSON.parse(e);
					a.model.rows.length && !o.userId ? t("https://ugc.taobao.com/sucai/ajax/videoLabelAndKeywordQuery.do?_input_charset=utf-8&videoId=" + (a = a.model.rows[0].id) + "&type=0", function(e) {
						var t = JSON.parse(e);
						o.userId = t.model.videoInfo[0].userId, n.token.userId = o.userId, i(n)
					}) : (o.userId && (n.token.userId = o.userId), i(n))
				} catch (e) {
					var n = {
						question: "_tb_data_",
						data: -1,
						token: {
							type: "video",
							Do: "list"
						}
					};
					i(n)
				}
			})
		}(e)
	}, n.set = function(e) {
		var t = this,
			o = e.token.Do;
		e.token.userId && (t.userId = e.token.userId), "list" == o && (!
		function(e) {
			var i = JSON.parse(e.data).model;
			t.pageSize;
			if (i.totalNum && i.rows.length) {
				var o = "";
				$.each(i.rows, function(e, i) {
					var n = i.snapshot,
						a = i.id,
						d = i.width,
						s = i.height,
						r = "https://cloud.video.taobao.com//play/u/" + t.userId + "/p/2/e/6/t/1/" + a + ".mp4",
						c = {
							id: a,
							width: d,
							height: s,
							url: r,
							snapshot: n
						};
					o += "<li><a title='" + i.name + "' class='cjmod_video' data-video='" + JSON.stringify(c) + "' ><img src='" + n + "_130x130'><span class='settu'>选择视频</span></a><span class='tupix'>" + i.name + "</span></li>"
				}), (i.totalNum == i.rows.length || i.rows.length < t.pageSize) && t.root.find(".cjnext_pagination").find(".videoNext").addClass("no_more")
			} else o = "<div class='mod_Nocontent'>亲，没有更多视频了！</div>", t.root.find(".cjnext_pagination").find(".videoNext").addClass("no_more");
			t.page <= 1 ? t.root.find(".cjnext_pagination").find(".videoPrev").addClass("no_more") : t.root.find(".cjnext_pagination").find(".videoPrev").removeClass("no_more");
			t.root.find(".video_box").empty().append("<ul class='video_result'>" + o + "</ul>"), t.root.find(".cjmod_video").unbind("click"), t.root.find(".cjmod_video").bind("click", function() {
				var e = $(this).attr("data-video");
				$(".tbapp_exchange").attr("data-video", e), $(".tbapp_exchange").find(".tu_video").click()
			})
		}(e), t.root.find(".videoPrev").unbind("click"), t.root.find(".videoPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				t.page--;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "video",
						Do: "list",
						pageSize: t.pageSize,
						page: t.page
					}
				};
				i(e), t.root.find(".cjnext_pagination").find(".videoNext").removeClass("no_more")
			}
		}), t.root.find(".videoNext").unbind("click"), t.root.find(".videoNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				t.page++;
				var e = {
					question: "_open_tb_page_",
					token: {
						type: "video",
						Do: "list",
						pageSize: t.pageSize,
						page: t.page
					}
				};
				i(e)
			}
		}), $("#cjsearch_video").unbind("keyup"), $("#cjsearch_video").bind("keyup", function(e) {
			var e = e || event,
				o = e.keyCode,
				n = $(this).val();
			if (13 == o) {
				t.page = 1;
				var a = {
					question: "_open_tb_page_",
					token: {
						type: "video",
						Do: "list",
						pageSize: t.pageSize,
						name: n
					}
				};
				i(a)
			}
		}), $(".tbapp_exchange").attr("data-tuinit", !0))
	};
	var a = {
		page: 1,
		pageSize: 20,
		shop: "",
		postd: {
			common: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getCommonLinkList.do?_input_charset=utf-8",
			items: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8",
			category: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemCategoryLinkList.do?_input_charset=utf-8",
			coupon: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getCouponLinkList.do?_input_charset=utf-8",
			page: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getShopLoftList.do?_input_charset=utf-8",
			activity: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getActivityPageLinkList.do?_input_charset=utf-8&namespace=shop&path=activity"
		}
	};
	a.root = $(".tbapps .WXHref"), a.init = function() {
		a.root.find(".modpanel[showd=common]").children().length || (a.get({
			token: {}
		}), a.root.find(".nav[get_data=common]").click())
	}, a.get = function(o) {
		var n = this,
			a = o.token.Do;
		n.root.find(".nav").unbind("click"), n.root.find(".nav").bind("click", function() {
			$(this).addClass("linkselected").siblings().removeClass("linkselected"), n.root.find(".mPrev").addClass("no_more"), n.page = 1;
			var e = $(this).attr("get_data"),
				t = n.postd[e],
				o = n.root.find(".modpanel[showd=" + e + "]");
			if ("items" == e) {
				var a = n.root.find(".modpanel[showd=items]");
				(a.find("input[name=itemname]").val() || a.find("input[name=startPrice]").val() || a.find("input[name=endPrice]").val()) && (n.root.find(".modpanel[showd=items]").find("input").val(""), a.find(".list_box").remove())
			}
			// if ("widgetid" == e) {
		 //        if (a.show().siblings().hide(), 
		 //        return t.root.find(".widgetid-but").unbind("click"), t.root.find(".widgetid-but").bind("click", function() {
		 //          if (t.root.find(".get-widgetid").val()) {
		 //            let e = "widgetid|" + t.root.find(".get-widgetid").val();
		 //            $(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
		 //          }
		 //        }), !1
		 //    }
			o.find(".list_box").html() ? (o.show().siblings().hide(), "true" == o.attr("mnext") ? n.root.find(".mNext").removeClass("no_more") : n.root.find(".mNext").addClass("no_more")) : i({
				question: "_open_tb_page_",
				token: {
					type: "wxk",
					dtype: e,
					Do: "list",
					url: t,
					pageSize: n.pageSize
				}
			})
		}), "list" == a &&
		function(o) {
			var n = o.token.url,
				a = o.token.price1 || null,
				d = o.token.price2 || null,
				s = o.token.kwd || null,
				r = {
					currentPage: o.token.currentPage || 1,
					pageSize: o.token.pageSize,
					_tb_token_: o.token._tb_token_ || $.cookie("_tb_token_")
				};
			a && (r.price1 = a), d && (r.price2 = d), s && (r.kwd = s), t(n, r, function(t) {
				if (t) if (-1 != t) {
					var a = {
						question: "_tb_data_",
						data: t,
						token: {
							type: "wxk",
							dtype: o.token.dtype || "",
							Do: "list"
						}
					};
					i(a)
				} else console.info("数据返回异常");
				else e({
					type: "get",
					url: n,
					data: r,
					callback: function(e) {
						var t = {
							question: "_tb_data_",
							data: e,
							token: {
								type: "wxk",
								dtype: o.token.dtype || "",
								Do: "list"
							}
						};
						i(t)
					}
				})
			})
		}(o)
	}, a.set = function(e) {
		var t = this;
		"list" == e.token.Do && (!
		function(e) {
			var i = e.data ? JSON.parse(e.data) : {},
				o = e.token.dtype,
				n = t.root.find(".modpanel[showd=" + o + "]");
			if (n.find($(".err").remove()), n.show().siblings().hide(), n.find(".list_box").remove(), "common" == o) {
				var a = "<ul class='list_box'></ul>",
					d = "";
				$.each(i.module.content, function(e, t) {
					d += "<li class='glinkli' linkd='" + t.link + "'><div class='link_title'>" + t.title + "</div><a class='set'>选择链接</a></li>"
				}), n.append($(a).append(d))
			}
			if ("items" == o) {
				var a = "<ul class='list_box'></ul>",
					d = "";
				if (i.module.totalCount > 0) {
					i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "false"));
					for (var s = 0; s < i.module.itemList.length; s++) d += "<li class='kroot' data-itemId='" + i.module.itemList[s].itemId + "' linkd='" + i.module.itemList[s].itemLink + "'><div class='link-img'><img src='" + i.module.itemList[s].picUrl + "_100x100xz.jpg'/></div><div class='link_title'>" + i.module.itemList[s].title + "</div><div class='link_price'>￥" + i.module.itemList[s].salePrice + "</div><a class='gmlink set'>购买链接</a><a class='Add_cart set'>加购链接</a></li>"
				} else d += "<li class='no_data'><span>当前条件下没有查询到数据</span></li>", t.root.find(".mNext").addClass("no_more");
				n.append($(a).append(d))
			}
			if ("category" == o) {
				var a = "<ul class='list_box'></ul>",
					d = "";
				i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=category]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=category]").attr("mnext", "false"));
				for (var s = 0; s < i.module.catLinkList.length; s++) d += "<li class='glinkli' linkd='" + i.module.catLinkList[s].catLink + "'><div class='link_title'>" + i.module.catLinkList[s].catName + "</div><a class='set'>选择链接</a></li>";
				n.append($(a).append(d))
			}
			// if ("coupon" == o) {
			// 	var a = "<ul class='list_box'></ul>",
			// 		d = "";
			// 	i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=coupon]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=coupon]").attr("mnext", "false"));
			// 	for (var s = 0; s < i.module.couponList.length; s++) d += "<li class='glinkli' linkd='https:" + i.module.couponList[s].couponUrl + "'><div class='link_title'>" + i.module.couponList[s].name + "</div><div class='Exp'><span>" + i.module.couponList[s].amount + "元</span><span>" + i.module.couponList[s].thresholdDesc + "</span></div><a class='set'>选择链接</a></li>";
			// 	n.append($(a).append(d))
			// }

			if ("coupon" == o) {
				var a = "<ul class='list_box'></ul>",
					d = "";
				i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=coupon]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=coupon]").attr("mnext", "false"));
				for (var s = 0; s < i.module.couponList.length; s++) d += "<li class='glinkli' linkd='https:" + i.module.couponList[s].couponUrl + "'><div class='link_title'>" + i.module.couponList[s].name + "</div><div class='Exp'><span>" + i.module.couponList[s].amount + "元</span><span>" + i.module.couponList[s].thresholdDesc + "</span></div><a class='set'>新窗口领取</a>" + "<a class='set_getcoupon'>直接领取(推荐)</a></li>";
				n.append($(a).append(d))
			}
		
			if ("page" == o) {
				var a = "<ul class='list_box'></ul>",
					d = "",
					r = i.module.currentPage || 1,
					c = i.module.totalPage || 1;
				r < c ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=page]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=page]").attr("mnext", "false"));
				for (var s = 0; s < i.module.content.length; s++) d += "<li class='glinkli' linkd='" + i.module.content[s].url + "'><div class='link_title'>" + i.module.content[s].title + "</div><a class='set'>选择链接</a></li>";
				n.append($(a).append(d))
			}
			if ("activity" == o) {
				var a = "<ul class='list_box'></ul>",
					d = "",
					r = i.module.currentPage || 1,
					c = i.module.totalPage || 1;
				r < c ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=activity]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=activity]").attr("mnext", "false"));
				for (var s = 0; s < i.module.pageList.length; s++) d += "<li class='glinkli' linkd='" + i.module.pageList[s].link + "'><div class='link_title'>" + i.module.pageList[s].title + "</div><a class='set'>选择链接</a></li>";
				n.append($(a).append(d))
			}
			1 == t.page && t.root.find(".mPrev").addClass("no_more"), t.root.find(".glinkli").unbind("click"), t.root.find(".glinkli").bind("click", function() {
				var e = $(this).attr("linkd");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			}),t.root.find(".set_getcoupon").unbind("click"), t.root.find(".set_getcoupon").bind("click", function(e) {
				var t = "coupon|" + $(this).parents().attr("linkd");
				e.stopPropagation(), $(".tbapp_exchange").attr("data-wxk", t), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find(".gmlink").unbind("click"), t.root.find(".gmlink").bind("click", function() {
				var e = $(this).parents(".kroot").attr("linkd");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find(".Add_cart").unbind("click"), t.root.find(".Add_cart").bind("click", function() {
				var e = "add|" + $(this).parents(".kroot").attr("data-itemid");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			}), t.root.find(".Add_wangwang").unbind("click"), t.root.find(".Add_wangwang").bind("click", function() {
				var e = "wang|" + $(this).parents(".kroot").attr("data-itemid");
				$(".tbapp_exchange").attr("data-wxk", e), $(".tbapp_exchange").find(".wxk_get").click()
			})			
		}(e), t.root.find(".mPrev").unbind("click"), t.root.find(".mPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				!(t.page > 1) || t.page--;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					n = {
						question: "_open_tb_page_",
						token: {
							type: "wxk",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var a = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						s = t.root.find(".search_items").find("input[name=itemname]").val();
					a && (n.token.price1 = a), d && (n.token.price2 = d), s && (n.token.kwd = s)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				n.token.currentPage = t.page, i(n), 1 == t.page && t.root.find(".mNext").removeClass("no_more")
			}
		}), t.root.find(".mNext").unbind("click"), t.root.find(".mNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				t.page++;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					n = {
						question: "_open_tb_page_",
						token: {
							type: "wxk",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var a = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						s = t.root.find(".search_items").find("input[name=itemname]").val();
					a && (n.token.price1 = a), d && (n.token.price2 = d), s && (n.token.kwd = s)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				i(n), t.root.find(".mPrev").removeClass("no_more")
			}
		}), t.root.find("#Items_Search_wx").unbind("click"), t.root.find("#Items_Search_wx").bind("click", function() {
			var e = t.postd.items,
				o = t.root.find(".search_items").find("input[name=startPrice]").val(),
				n = t.root.find(".search_items").find("input[name=endPrice]").val(),
				a = t.root.find(".search_items").find("input[name=itemname]").val(),
				d = {
					question: "_open_tb_page_",
					token: {
						type: "wxk",
						dtype: "items",
						Do: "list",
						url: e,
						pageSize: t.pageSize,
						price1: o,
						price2: n,
						kwd: a
					}
				};
			t.page = 1, i(d)
		}), $(".tbapp_exchange").attr("data-tuinit", !0))
	};
	var d = {
		click: null,
		page: 1,
		pageSize: 20,
		shop: "",
		checked_item: [],
		checked_ids: [],
		postd: {
			items: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8",
			items_Imp: "https://wangpu.taobao.com/shopdecorate/ajax/tool/getItemLinkList.do?_input_charset=utf-8"
		}
	};
	d.root = $(".tbapps .WXItems"), d.init = function() {
		var e = $(".tbapp_exchange").attr("data-items-checked");
		if (e) {
			var t = JSON.parse(e),
				i = [],
				o = [];
			t.length && $.each(t, function(e, t) {
				t.itemId && (i.push(t), o.push(t.itemId))
			}), i.length ? (d.checked_item = i, d.checked_ids = o) : (d.checked_item = [], d.checked_ids = [])
		}
		d.get({
			token: {}
		}), d.root.find(".nav[get_data=items]").click()
	}, d.get = function(o) {
		var n = this,
			a = o.token.Do;
		n.root.find(".nav").unbind("click"), n.root.find(".nav").bind("click", function() {
			$(this).addClass("linkselected").siblings().removeClass("linkselected"), n.root.find(".mPrev").addClass("no_more"), n.page = 1;
			var e = $(this).attr("get_data"),
				t = n.postd[e];
			if (n.root.find(".modpanel[showd=" + e + "]").show().siblings().hide(), "items" == e) {
				var o = n.root.find(".modpanel[showd=items]");
				(o.find("input[name=itemname]").val() || o.find("input[name=startPrice]").val() || o.find("input[name=endPrice]").val()) && (n.root.find(".modpanel[showd=items]").find("input").val(""), o.find(".list_box").remove()), i({
					question: "_open_tb_page_",
					token: {
						type: "wxitem",
						dtype: e,
						Do: "list",
						url: t,
						pageSize: n.pageSize
					}
				})
			}
			if ("items_Imp" == e) {
				var a = n.root.find(".cjarea-container"),
					d = a.find(".id_empty"),
					s = a.find(".id_query");
				n.root.find(".modpanel[showd=items]").find(".list_box").remove(), n.root.find(".mPrev").addClass("no_more"), n.root.find(".mNext").addClass("no_more"), a.find(".input-area").css("height", a[0].offsetHeight - 110), d.unbind("click"), s.unbind("click"), d.bind("click", function() {
					a.find(".input-area").val("")
				}), s.bind("click", function() {
					var o = a.find(".input-area").val().replace(/(^\s*)|(\s*$)/g, ""),
						n = 1;
					if (!o) return !1;
					if (o) {
						var d = o.split(/[(\r\n)\r\n]+/);
						for (let e = 0; e < d.length; e++) {
							const t = d[e];
							if (isNaN(t)) return alert("宝贝ID，亲输入的不是数字，请确定后再查询"), !1
						}
						n = d.length, o = o.replace(/[(\r\n)\r\n]+/g, ",")
					}
					i({
						question: "_open_tb_page_",
						token: {
							type: "wxitem",
							dtype: e,
							Do: "idImp_list",
							url: t,
							itemIds: o,
							pageSize: n
						}
					})
				})
			}
		}), "list" == a &&
		function(o) {
			var n = o.token.url,
				a = o.token.price1 || null,
				d = o.token.price2 || null,
				s = o.token.kwd || null,
				r = {
					currentPage: o.token.currentPage || 1,
					pageSize: o.token.pageSize,
					_tb_token_: o.token._tb_token_ || $.cookie("_tb_token_")
				};
			a && (r.price1 = a), d && (r.price2 = d), s && (r.kwd = s), t(n, r, function(t) {
				if (t) if (-1 != t) {
					var a = {
						question: "_tb_data_",
						data: t,
						token: {
							type: "wxitem",
							dtype: o.token.dtype || "",
							Do: "list"
						}
					};
					i(a)
				} else console.info("数据返回异常");
				else e({
					type: "get",
					url: n,
					data: r,
					callback: function(e) {
						var t = {
							question: "_tb_data_",
							data: e,
							token: {
								type: "wxitem",
								dtype: o.token.dtype || "",
								Do: "list"
							}
						};
						i(t)
					}
				})
			})
		}(o), "idImp_list" == a &&
		function(o) {
			var n = o.token.url,
				a = {
					itemIds: o.token.itemIds || 0,
					pageSize: o.token.pageSize,
					_tb_token_: o.token._tb_token_ || $.cookie("_tb_token_")
				};
			t(n, a, function(t) {
				if (t) if (-1 != t) {
					var d = {
						question: "_tb_data_",
						data: t,
						token: {
							type: "wxitem",
							dtype: o.token.dtype || "",
							Do: "idImp_list"
						}
					};
					i(d)
				} else console.info("数据返回异常");
				else e({
					type: "get",
					url: n,
					data: a,
					callback: function(e) {
						var t = {
							question: "_tb_data_",
							data: e,
							token: {
								type: "wxitem",
								dtype: o.token.dtype || "",
								Do: "idImp_list"
							}
						};
						i(t)
					}
				})
			})
		}(o)
	}, d.set = function(e) {
		var t = this,
			o = e.token.dtype,
			n = e.token.Do;

		function a() {
			var e = t.root.find(".modpanel[showd=" + o + "]");
			e.find(".all_icon").unbind("click"), e.find(".all_icon").bind("click", function() {
				$(this).find(".icon").hasClass("icon_checked") ? ($(this).find(".icon").removeClass("icon_checked"), t.root.find(".tb_item").removeClass("checked"), t.root.find(".tb_item").find(".icon").removeClass("icon_checked")) : ($(this).find(".icon").addClass("icon_checked"), t.root.find(".tb_item").addClass("checked"), t.root.find(".tb_item").find(".icon").addClass("icon_checked"))
			}), e.find(".tb_item").unbind("click"), e.find(".tb_item").bind("click", function() {
				$(this).find(".icon").hasClass("icon_checked") ? ($(this).removeClass("checked"), $(this).find(".icon").removeClass("icon_checked")) : ($(this).find(".icon").addClass("icon_checked"), $(this).addClass("checked"))
			}), t.root.find(".setItems").unbind("click"), t.root.find(".setItems").bind("click", function() {
				var i = [],
					o = e.find(".checked");
				o.length && $.each(o, function(e, t) {
					try {
						var o = JSON.parse($(t).attr("data-item"));
						o && i.push(o)
					} catch (t) {
						alert("err-tbapp-item-001")
					}
				}), i.length ? ($(".tbapp_exchange").attr("data-items", JSON.stringify(i)), $(".tbapp_exchange").find(".wxitem_get").click()) : t.root.find(".cjclose").click()
			})
		}
		function d(e, i) {
			var o, n, a = "",
				d = !1;
			return i ? (o = "checked", n = "icon_checked") : (o = "", n = ""), e && e.length && $.each(e, function(e, s) {
				i || (d = -1 != t.checked_ids.indexOf(s.itemId)), "id_query" == i && (-1 != t.checked_ids.indexOf(s.itemId) ? (d = !1, o = "checked", n = "icon_checked") : (o = "", n = "", d = !1)), d || (a += ["<li class='tb_item " + o + "' data-item='" + JSON.stringify(s) + "'>", "<i class='icon " + n + "'></i>", "<div class='link-img'><img src='" + s.picUrl + "_100x100xz.jpg'/></div>", "<div class='link_title'>" + s.title + "</div>", "<div class='link_price'>￥" + s.salePrice + "</div>", "</li>"].join(""))
			}), a
		}
		function s() {
			var e = [],
				i = [],
				o = t.root.find(".checked");
			o.length && $.each(o, function(t, o) {
				try {
					var n = JSON.parse($(o).attr("data-item"));
					n && (e.push(n), i.push(n.itemId))
				} catch (o) {
					alert("err-tbapp-ckitem-001")
				}
			}), e.length ? (t.checked_item = e, t.checked_ids = i) : (t.checked_item = [], t.checked_ids = [])
		}
		"list" == n && (!
		function(e) {
			var i = e.data ? JSON.parse(e.data) : {},
				n = t.root.find(".modpanel[showd=" + o + "]");
			if (n.find($(".err").remove()), n.show().siblings().hide(), n.find(".list_box").remove(), "items" == o) {
				var s = "";
				i.module.totalCount > 0 ? (i.module.currentPage < i.module.totalPage ? (t.root.find(".mNext").removeClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "true")) : (t.root.find(".mNext").addClass("no_more"), t.root.find(".modpanel[showd=items]").attr("mnext", "false")), s = d(i.module.itemList)) : (s += "<li class='no_data'><span>当前条件下没有查询到数据！<em>您可能没有<a target='_blank' href='https://sucai.wangpu.taobao.com'>登陆淘宝</a>，或没有更多宝贝了！</em></span></li>", t.root.find(".mNext").addClass("no_more")), n.append($("<ul class='list_box'></ul>").prepend(d(t.checked_item, !0)).append(s)), n.find(".tb_item").length, n.find(".checked").length
			}
			1 == t.page && t.root.find(".mPrev").addClass("no_more"), a()
		}(e), t.root.find(".mPrev").unbind("click"), t.root.find(".mPrev").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				s(), t.click = $(this), !(t.page > 1) || t.page--;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					n = {
						question: "_open_tb_page_",
						token: {
							type: "wxitem",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var a = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						r = t.root.find(".search_items").find("input[name=itemname]").val();
					a && (n.token.price1 = a), d && (n.token.price2 = d), r && (n.token.kwd = r)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				n.token.currentPage = t.page, i(n), 1 == t.page && t.root.find(".mNext").removeClass("no_more")
			}
		}), t.root.find(".mNext").unbind("click"), t.root.find(".mNext").bind("click", function() {
			if (!$(this).hasClass("no_more")) {
				s(), t.click = $(this), t.page++;
				var e = t.root.find(".linkselected").attr("get_data"),
					o = t.postd[e],
					n = {
						question: "_open_tb_page_",
						token: {
							type: "wxitem",
							dtype: e,
							Do: "list",
							url: o,
							pageSize: t.pageSize,
							currentPage: t.page
						}
					};
				if ("items" == e) {
					var a = t.root.find(".search_items").find("input[name=startPrice]").val(),
						d = t.root.find(".search_items").find("input[name=endPrice]").val(),
						r = t.root.find(".search_items").find("input[name=itemname]").val();
					a && (n.token.price1 = a), d && (n.token.price2 = d), r && (n.token.kwd = r)
				} else t.root.find(".modpanel[showd=" + e + "]").empty();
				i(n), t.root.find(".mPrev").removeClass("no_more")
			}
		}), t.root.find("#Items_Search_wx").unbind("click"), t.root.find("#Items_Search_wx").bind("click", function() {
			s();
			var e = t.postd.items,
				o = t.root.find(".search_items").find("input[name=startPrice]").val(),
				n = t.root.find(".search_items").find("input[name=endPrice]").val(),
				a = t.root.find(".search_items").find("input[name=itemname]").val(),
				d = {
					question: "_open_tb_page_",
					token: {
						type: "wxitem",
						dtype: "items",
						Do: "list",
						url: e,
						pageSize: t.pageSize,
						price1: o,
						price2: n,
						kwd: a
					}
				};
			t.page = 1, i(d)
		}), $(".tbapp_exchange").attr("data-tuinit", !0)), "idImp_list" == n &&
		function(e) {
			var i = e.data ? JSON.parse(e.data) : {},
				n = t.root.find(".modpanel[showd=" + o + "]").find(".right"),
				s = "";
			n.empty(), i.module.totalCount > 0 ? s = d(i.module.itemList, "id_query") : s += "<li class='no_data'><span>当前条件下没有查询到数据,或服务异常</span></li>";
			n.append(s), a()
		}(e)
	};
	var s = {
		api: "https://stream-upload.taobao.com/api/upload.api?appkey=tu&watermark=false&autoCompress=false&_input_charset=utf-8",
		tutree: "//stream.taobao.com/api/get_folders.api?parentFolderId=&appkey=tu&sort=0",
		addtree: "https://tadget.taobao.com/redaction/redaction/json.json?cmd=json_add_dir&_input_charset=utf-8&dir_id=0",
		folderId: 0,
		folderName: "沃姆助手切图(勿删)"
	};
	s.root = $(".tbapps"), s.init = function() {
		var e = $(".tbapp_exchange").attr("data-uptu-checked"),
			t = $(".tbapp_exchange").attr("data-uptu-fileName"),
			o = $(".tbapp_exchange").attr("data-uptu-pos");
		e && i("add_folderId" == e ? {
			question: "_open_tb_page_",
			token: {
				type: "up_tu",
				Do: "add_folderId",
				tu: e
			}
		} : {
			question: "_open_tb_page_",
			token: {
				type: "up_tu",
				Do: "up",
				_uptu_folderId_: $.cookie("_uptu_folderId_"),
				tu: e,
				fileName: t,
				pos: o
			}
		})
	}, s.get = function(t) {
		var o = this,
			n = t.token.tu;
		if ("add_folderId" == t.token.Do) e({
			type: "get",
			url: o.tutree,
			callback: function(t) {
				try {
					var t = JSON.parse(t),
						n = 0;
					if ($.each(t.object.childrens, function(e, t) {
						if (t.folderName == o.folderName) return n = t.folderId, !1
					}), n) {
						o.folderId = n, $.cookie("_uptu_folderId_", o.folderId);
						var a = {
							question: "_tb_data_",
							data: o.folderId,
							token: {
								type: "up_tu",
								Do: "add_folderId"
							}
						};
						i(a)
					} else e({
						type: "get",
						url: o.addtree,
						data: {
							name: o.folderName,
							_tb_token_: $.cookie("_tb_token_")
						},
						callback: function(e) {
							try {
								o.folderId = JSON.parse(e).jsonData.id, $.cookie("_uptu_folderId_", o.folderId);
								var t = {
									question: "_tb_data_",
									data: o.folderId,
									token: {
										type: "up_tu",
										Do: "add_folderId"
									}
								};
								i(t)
							} catch (e) {}
						}
					})
				} catch (e) {}
			}
		});
		else if (n) {
			var a = t.token._uptu_folderId_ || $.cookie("_uptu_folderId_") || 0,
				d = t.token.fileName || "未命名",
				s = t.token.pos;
			!
			function(e, t) {
				try {
					var i = function(e) {
							for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], o = new ArrayBuffer(t.length), n = new Uint8Array(o), a = 0; a < t.length; a++) n[a] = t.charCodeAt(a);
							return new Blob([o], {
								type: i
							})
						}(e.data),
						o = new XMLHttpRequest,
						n = new FormData;
					n.append("file", i, e.fileName), o.onreadystatechange = function() {
						4 == o.readyState && 200 == o.status && (o.response ? t && t(o.response) : (t && t('{"retry":true}'), window.open("https://stream-upload.taobao.com", "_self")))
					}, o.open("post", e.api, !0), o.send(n)
				} catch (e) {}
			}({
				api: this.api + "&folderId=" + a,
				fileName: d,
				data: n
			}, function(e) {
				i({
					question: "_tb_data_",
					data: e,
					token: {
						type: "up_tu",
						Do: "up_tu_success",
						pos: s
					}
				})
			})
		}
	}, s.set = function(e) {
		var t = e.data,
			i = e.token.Do,
			o = e.token.pos;
		if ("add_folderId" == i && ($.cookie("_uptu_folderId_", t), $(".tbapp_exchange").attr("data-uptu-result", t), $(".tbapp_exchange").find(".up_tu_get").click()), "up_tu_success" == i) {
			if ('{"retry":true}' != t)(t = JSON.parse(t)).object.pos = o, t = JSON.stringify(t);
			$(".tbapp_exchange").attr("data-uptu-result", t), $(".tbapp_exchange").find(".up_tu_get").click()
		}
	}, $(".tbapp_exchange .tu").click(o.init), $(".tbapp_exchange .video").click(n.init), $(".tbapp_exchange .wxk").click(a.init), $(".tbapp_exchange .wxitem").click(d.init), $(".tbapp_exchange .up_tu").click(s.init)
}();