define(["taoAPP", "appLayer", "jquery.spectrum", "jquery.cooike", "Sortable", "laydate", "appShow", "_localstorage_", "jquery.imgCut", "_ready"], function(t, e, a, i, n, s, l, r, o, c) {
	let d = ".weexApp", f = ".weexApp .box-inner", p = ".weexApp .box-wrap", u = ".weexApp #adialog-box", h = ".weexApp #adialog-signal", g = {}, m = null;

	function _(t, e, a) {
		var i = e && e.attr("appid");
		if (t.tabs) {
			t = t;
			var n = document.getElementById("adialog-box"),
				s = document.createElement("ul"),
				l = document.createElement("div"),
				o = document.createElement("div");
			s.setAttribute("class", "app-tabs-nav"), l.setAttribute("class", "app-controls-nav"), o.setAttribute("class", "rhd"), o.innerHTML = t.name;
			for (var c = 0; c < t.tabs.length; c++) {
				var f = "etab-" + c,
					p = t.tabs[c],
					g = t.controls[c],
					m = document.createElement("li"),
					_ = document.createElement("div");
				0 == c ? m.setAttribute("class", "etab select") : m.setAttribute("class", "etab"), m.setAttribute("data-controls", f), m.innerHTML = p, m.onclick = function() {
					var t = $(this).attr("data-controls");
					$(this).addClass("select").siblings().removeClass("select"), $("#" + t).show().siblings().hide();
					try {
						var e = "_localstorage_etab_",
							a = r.getKey(e) ? JSON.parse(r.getKey(e)) : {};
						a[i] = t, a = Object.assign({}, a), r.setKey(e, JSON.stringify(a))
					} catch (t) {}
				}, _.setAttribute("class", "econtrol"), _.id = f, 0 != c && (_.style.display = "none"), $.each(g, function(t, e) {
					_.appendChild(v(c, t, e))
				}), s.appendChild(m), l.appendChild(_)
			}
			n.appendChild(o), n.appendChild(s), n.appendChild(l)
		}!
		function(t, e) {
			if (t && e) {
				var a = e.this,
					i = a[0].offsetWidth || 0,
					n = a[0].offsetHeight || 0,
					s = a[0].offsetLeft || 0,
					l = a[0].offsetTop || 0,
					r = e.this.attr("data-child-type"),
					o = e.this.attr("waria-locking");
				if (o) return !1;
				var c = ['<div class="uiSize" data-appid="' + t.attr("appid") + '">', '<span class="name">宽高</span><span><input class="SizePos" data-type="width" type="text" value="' + i + '" sjdz_px="true" /><input class="SizePos" data-type="height" type="text" value="' + n + '" sjdz_px="true" /></span>', '<span class="name">位置</span><span><input class="SizePos" data-type="left" type="text" value="' + s + '" sjdz_px="true" /><input class="SizePos" data-type="top" type="text" value="' + l + '" sjdz_px="true" /></span>', "</div>"].join("");
				$(u).append(c), $(u).find(".SizePos").keyup(function() {
					var a = e.ui.length > 1 ? $(e.ui) : e.this,
						i = $(this),
						n = i.val(),
						s = i.attr("data-type");
					a.css(s, n + "px"), r && t.find("." + r).css(s, n + "px"), a.mouseenter(), $(h).attr("ck-type", "resizable").click()
				})
			}
		}(e, a), $(u).find(".app-tabs-nav").children().length <= 1 && $(u).find(".app-tabs-nav").hide(), setTimeout(() => {
			$(u).find("input[data-title]").unbind("mouseenter mouseleave"), $(u).find("input[data-title]").bind({
				mouseenter: function(t) {
					layer.tips($(this).attr("data-title"), $(this), {
						tips: 3,
						time: 3e3
					})
				},
				mouseleave: function(t) {
					layer.closeAll()
				}
			}), $(u).find("buttom[data-title]").unbind("mouseenter mouseleave"), $(u).find("buttom[data-title]").bind({
				mouseenter: function(t) {
					layer.tips($(this).attr("data-title"), $(this), {
						tips: 4,
						time: 3e3
					})
				},
				mouseleave: function(t) {
					layer.closeAll()
				}
			}), $(u).find("span[data-title]").unbind("mouseenter mouseleave"), $(u).find("span[data-title]").bind({
				mouseenter: function(t) {
					layer.tips($(this).attr("data-title"), $(this), {
						tips: 3,
						time: 3e3
					})
				},
				mouseleave: function(t) {
					layer.closeAll()
				}
			})
		}, 10), x(e, a), function(t, e) {
			var a, i = $(d).find(".uiExpoperat").find("icon"),
				n = $(d).find(".uiExpoperat").find("#uiAdd_Sync");
			t && e && e.ui.length > 1 ? (e.this.attr("position-sync") ? n.text("取消组") : n.text("编组"), a = e.ui, $(d).find(".uiExpoperat").animate({
				top: "61px"
			}, 300)) : $(d).find(".uiExpoperat").animate({
				top: "10px"
			}, 300);

			function s(t, e) {
				var a = function(t) {
						var e = t,
							a = [],
							i = {
								w: 0,
								h: 0,
								t: 3e4,
								l: 3e4,
								r: 0,
								b: 0,
								maxt: 0,
								maxl: 0,
								minr: 3e4,
								minb: 3e4
							};
						return $.each(e, function(t, e) {
							a[t] = {
								width: e.offsetWidth,
								height: e.offsetHeight,
								top: e.offsetTop,
								left: e.offsetLeft
							}, e.offsetWidth > i.w && (i.w = e.offsetWidth), e.offsetHeight > i.h && (i.h = e.offsetHeight), e.offsetTop < i.t && (i.t = e.offsetTop), e.offsetLeft < i.l && (i.l = e.offsetLeft), e.offsetLeft + e.offsetWidth > i.r && (i.r = e.offsetLeft + e.offsetWidth), e.offsetTop + e.offsetHeight > i.b && (i.b = e.offsetTop + e.offsetHeight), e.offsetTop > i.maxt && (i.maxt = e.offsetTop), e.offsetLeft > i.maxl && (i.maxl = e.offsetLeft), e.offsetLeft + e.offsetWidth < i.minr && (i.minr = e.offsetLeft + e.offsetWidth), e.offsetTop + e.offsetHeight < i.minb && (i.minb = e.offsetTop + e.offsetHeight)
						}), {
							list: a,
							max: i
						}
					}(t);
				switch (e) {
				case "i_1":
					$(t).css("top", a.max.t);
					break;
				case "i_2":
					var i = (a.max.b - a.max.t) / 2 + a.max.t;
					for (var n in a.list) {
						var s = i - (a.list[n].height / 2 + a.list[n].top);
						$(t[n]).css("top", a.list[n].top + s)
					}
					break;
				case "i_3":
					for (var n in a.list) {
						var l = a.max.b - (a.list[n].height + a.list[n].top);
						$(t[n]).css("top", a.list[n].top + l)
					}
					break;
				case "i_4":
					$(t).css("left", a.max.l);
					break;
				case "i_5":
					var i = (a.max.r - a.max.l) / 2 + a.max.l;
					for (var n in a.list) {
						var r = i - (a.list[n].width / 2 + a.list[n].left);
						$(t[n]).css("left", a.list[n].left + r)
					}
					break;
				case "i_6":
					for (var n in a.list) {
						var o = a.max.r - (a.list[n].width + a.list[n].left);
						$(t[n]).css("left", a.list[n].left + o)
					}
					break;
				case "b_1":
					var c = a.max.r - a.max.l,
						d = 0,
						f = 0,
						p = 0;
					for (var n in a.list) d += a.list[n].width, a.list[n].left == a.max.l && (p = a.list[n].width);
					for (var n in c = (c - d) / (a.list.length - 1), a.list) a.list[n].left != a.max.l && a.list[n].left + a.list[n].width != a.max.r && (u ? (f += a.list[u].width + c, u = n) : (f += p + c, u = n), $(t[n]).css("left", f + a.max.l));
					break;
				case "b_2":
					var u, c = a.max.b - a.max.t,
						h = 0,
						g = 0,
						m = 0;
					for (var n in a.list) h += a.list[n].height, a.list[n].top == a.max.t && (m = a.list[n].height);
					for (var n in c = (c - h) / (a.list.length - 1), a.list) a.list[n].top != a.max.t && a.list[n].top + a.list[n].height != a.max.b && (u ? (g += a.list[u].height + c, u = n) : (g += m + c, u = n), $(t[n]).css("top", g + a.max.t))
				}
				$(t).mouseenter();
				var _, v, x, y, b, S = $(t).parents(".wdraggable-ui[data-sync=true]"),
					w = a.list,
					k = [],
					O = $(t);
				S.length && (O.addClass("this_Temp"), $.each(O, function(t, e) {
					let a = $(e).attr("position-sync");
					v = e.offsetLeft - Math.floor(w[t].left), x = e.offsetTop - Math.floor(w[t].top), y = e.offsetWidth - Math.floor(w[t].width), b = e.offsetHeight - Math.floor(w[t].height), a && (-1 == k.indexOf(a) && (_ = S.find(".wdraggable-ui[position-sync=" + a + "]")).length && $.each(_, function(t, e) {
						$(e).hasClass("this_Temp") || $(e).css({
							width: e.offsetWidth + y + "px",
							height: e.offsetHeight + b + "px",
							top: e.offsetTop + x + "px",
							left: e.offsetLeft + v + "px"
						})
					}), k.push(a))
				}), O.removeClass("this_Temp"))
			}
			n.unbind("click"), n.bind("click", function() {}), i.unbind("click"), i.bind("click", function() {
				a && (s(a, $(this).data().op), r.set())
			})
		}(e, a);
		try {
			var y = "_localstorage_etab_",
				b = (r.getKey(y) ? JSON.parse(r.getKey(y)) : [])[i];
			b && ($("#" + b).show().siblings().hide(), $(u).find(".etab[data-controls=" + b + "]").addClass("select").siblings().removeClass("select"))
		} catch (t) {}
	}
	function v(e, a, i) {
		e = e, a = a;
		var s = (i = i).ele,
			o = {},
			c = document.createElement("div");
		return o.input = function() {
			if ("input" == s) {
				var t = "ui-input ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = document.createElement("span"),
					a = document.createElement("input");

				function n() {
					i.fun.call(this), "sjdz_img_url" == i.rule && x()
				}
				e.setAttribute("class", "name"), e.innerHTML = i.name, a.setAttribute("class", "setinput"), i.rule && a.setAttribute(i.rule, !0), i.title && a.setAttribute("data-title", i.title), i.id && (a.id = i.id), i.type ? a.type = i.type : a.type = "text", a.value = i.val, a.onkeyup = n, "number" == i.type && (a.onchange = n), c.appendChild(e), c.appendChild(a)
			}
		}(), o.inputs = function() {
			if ("inputs" == s) {
				var t = "ui-inputs ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = document.createElement("span");
				e.setAttribute("class", "name"), e.innerHTML = i.name;
				var a = document.createElement("input");
				a.setAttribute("class", "setinputs inp_0"), a.setAttribute("data-key", 0), i.rule && a.setAttribute(i.rule, !0), i.title && a.setAttribute("data-title", i.title), i.type ? a.type = i.type : a.type = "text", a.value = i.val[0] || "", a.onkeyup = i.fun;
				var n = document.createElement("input");
				n.setAttribute("class", "setinputs inp_1"), n.setAttribute("data-key", 1), i.rule && n.setAttribute(i.rule, !0), i.title && n.setAttribute("data-title", i.title), i.type ? n.type = i.type : n.type = "text", n.value = i.val[1] || "", n.onkeyup = i.fun, "number" == i.type && (n.onchange = i.fun), c.appendChild(e), c.appendChild(a), c.appendChild(n)
			}
		}(), o.input_radio = function() {
			if ("input_radio" == s) {
				var t = "ui-input ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var n, l, r = i.val,
					o = Math.floor(100 / r.length * 10) / 10 + "%",
					d = document.createElement("span");
				d.setAttribute("class", "name"), d.innerHTML = i.name;
				var f = document.createElement("div");
				f.setAttribute("class", "setinput_radio"), c.appendChild(d);
				for (var p = 0; p < r.length; p++) {
					n = r[p], l = "a" + e + a + p;
					var u = document.createElement("input"),
						h = document.createElement("label");
					n.class && h.setAttribute("class", n.class), h.innerHTML = n.text, h.setAttribute("for", l), h.style.width = o, u.setAttribute("class", "setradio"), u.type = "radio", u.id = l, u.name = i.id, u.value = n.val, n.checked && (u.checked = !0), u.onchange = i.fun, f.appendChild(u), f.appendChild(h)
				}
				c.appendChild(f)
			}
		}(), o.input_radio_2 = function() {
			if ("input_radio_2" == s) {
				var t = "ui-input_radio_2 ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var n = "r2" + e + a,
					l = document.createElement("span");
				l.innerHTML = i.name;
				var r = document.createElement("input");
				r.type = "checkbox", r.id = n, i.checked && (r.checked = !0), r.onchange = i.fun;
				var o = document.createElement("label");
				o.setAttribute("for", n), c.appendChild(l), c.appendChild(r), c.appendChild(o)
			}
		}(), o.line = function() {
			if ("line" == s) {
				var t = "ui-line ",
					e = i.val || 5;
				i.class && (t += i.class), c.style["border-top-width"] = e + "px", c.setAttribute("class", t), i.hide && (c.style.display = "none")
			}
		}(), o.checkbox = function() {
			if ("checkbox" == s) {
				var t = "ui-checkbox ";
				i.class && (t += i.class), c.setAttribute("class", t), c.setAttribute("data-appid", i.appid), i.hide && (c.style.display = "none");
				var n, l = i.val,
					r = document.createElement("div");
				r.setAttribute("class", "setinput_checkbox");
				for (var o = 0; o < l.length; o++) {
					n = "b" + e + a + o;
					var d = l[o],
						f = i.name[o],
						p = i.checked[o],
						u = document.createElement("input"),
						h = document.createElement("label");
					h.setAttribute("class", d), h.innerHTML = f, h.setAttribute("for", n), u.setAttribute("class", "setcheckbox"), u.type = "checkbox", u.id = n, u.name = d, p && (u.checked = !0), u.onchange = i.fun, r.appendChild(u), r.appendChild(h)
				}
				c.appendChild(r)
			}
		}(), o.input_range = function() {
			if ("input_range" == s) {
				var t = "ui-input input_range ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = document.createElement("span");
				e.setAttribute("class", "name"), e.innerHTML = i.name;
				var a = document.createElement("input");
				a.setAttribute("class", "setinput");
				var n = document.createElement("div");
				n.setAttribute("class", "huakuai"), n.setAttribute("data-min", i.min), n.setAttribute("data-max", i.max);
				var l = document.createElement("div");
				l.setAttribute("class", "rangeleft");
				var r = document.createElement("span");
				r.setAttribute("class", "rangehk"), n.appendChild(l), n.appendChild(r), i.rule && a.setAttribute(i.rule, !0), i.title && a.setAttribute("data-title", i.title), i.id && (a.id = i.id), i.type ? a.type = i.type : a.type = "text", a.value = i.val, a.onkeyup = function() {
					i.fun.call(this);
					var t = $(this).parents(".input_range"),
						e = t.find(".rangehk"),
						a = t.find(".rangeleft"),
						n = parseInt(t.find(".huakuai").attr("data-min")),
						s = parseInt(t.find(".huakuai").attr("data-max")),
						l = $(this).val(),
						r = Math.floor((parseInt(l) - n) / (s - n) * 100);
					r > 100 && (r = 100), r < 0 && (r = 0), e.css("left", r + "px"), a.css("width", r + "px")
				}, "number" == i.type && (a.onchange = i.fun), c.appendChild(e), c.appendChild(n), c.appendChild(a)
			}
		}(), o.image = function() {
			if ("image" == s) {
				var t = "ui-image ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = i.val,
					a = document.createElement("div");
				a.setAttribute("class", "ui-image-rot");
				var n = document.createElement("div");
				n.setAttribute("class", "ui-image-box");
				var l = document.createElement("img");
				l.src = e, n.appendChild(l);
				var r = document.createElement("div");
				r.setAttribute("class", "ui-image-hove");
				var o = document.createElement("span");
				o.setAttribute("class", "uiSetImage"), o.innerHTML = "替换图片", o.onclick = i.fun;
				var d = document.createElement("input");
				d.setAttribute("class", "imageInput"), d.value = e, d.onkeyup = i.fun, r.appendChild(d), r.appendChild(o);
				var f = document.createElement("input");
				f.setAttribute("class", "imageHref"), f.setAttribute("data-title", "请输入图片链接网址"), f.value = i.href, f.onkeyup = i.fun, f.setAttribute("sjdz_href_url", "true"), a.appendChild(n), a.appendChild(r), c.appendChild(a), -1 != i.href && c.appendChild(f)
			}
		}(), o.buttom = function() {
			if ("buttom" == s) {
				var t = "ui-buttom ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = document.createElement("buttom");
				e.innerHTML = i.name, i.id && (e.id = i.id), i.title && e.setAttribute("data-title", i.title), e.onclick = i.fun, c.appendChild(e)
			}
		}(), o.label = function() {
			if ("label" == s) {
				var t = "ui-label ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = document.createElement("label");
				e.innerHTML = i.name, c.appendChild(e)
			}
		}(), o.font = function() {
			if ("font" == s) {
				var t = "ui-font ";
				i.class && (t += i.class), i.hide && (c.style.display = "none"), c.setAttribute("class", t);
				var e = i.val,
					a = ["&#xe6fe;", "&#xe71d;", "&#xe625;", "&#xe6cf;", "&#xe6ce;", "&#xe6cd;"],
					n = (t = ["fontWeight", "textDecoration", "whiteSpace", "align alignLeft", "align alignCenter", "align alignRight"], ["文本加粗", "添加删除线", "是否强制不换行", "文本左对齐", "文本居中对齐", "文本右对齐"]);
				"700" != e.fontWeight && "bold" != e.fontWeight || (t[0] += " select"), -1 != e.textDecoration && -1 != e.textDecoration.indexOf("line-through") && (t[1] += " select"), e.whiteSpace && -1 != e.whiteSpace.indexOf("pre-wrap") && (t[2] += " select"), "left" != e.align && "start" != e.align && "flex-start" != e.align || (t[3] += " select"), "center" == e.align && (t[4] += " select"), "right" != e.align && "flex-end" != e.align || (t[5] += " select");
				for (var l = 0; l < 6; l++) if ((1 != l || -1 != e.textDecoration) && (2 != l || e.whiteSpace)) {
					var r = document.createElement("span");
					r.setAttribute("class", t[l]), r.setAttribute("data-title", n[l]), r.innerHTML = a[l], r.onclick = i.fun, c.appendChild(r)
				}
			}
		}(), o.select = function() {
			if ("select" == s) {
				var t = i.list,
					e = "ui-select ";
				i.class && (e += i.class), c.setAttribute("class", e);
				var a = document.createElement("span");
				a.setAttribute("class", "name"), a.innerHTML = i.name;
				var n = document.createElement("div");
				n.setAttribute("class", "select-list");
				var l = document.createElement("div");
				l.setAttribute("class", "list");
				var r = document.createElement("input");
				r.setAttribute("class", "setinput select-input"), r.setAttribute("readonly", "readonly"), r.value = i.val;
				for (var o = 0; o < t.length; o++) {
					var d = document.createElement("span");
					d.setAttribute("class", "l"), d.setAttribute("data-value", t[o].value), d.innerHTML = t[o].text, d.onclick = i.fun, l.appendChild(d)
				}
				n.appendChild(r), n.appendChild(l), i.hide && (c.style.display = "none"), c.appendChild(a), c.appendChild(n)
			}
		}(), o.tip = function() {
			if ("tip" == s) {
				var t = "ui-tip ";
				i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none");
				var e = document.createElement("div");
				e.setAttribute("class", "textarea_tip"), e.innerHTML = "<i>&#xe6e8;</i>" + i.val, c.appendChild(e)
			}
		}(), o.textarea = function() {
			if ("textarea" == s) {
				var t = "ui-textarea ";
				if (i.class && (t += i.class), c.setAttribute("class", t), i.hide && (c.style.display = "none"), i.tip) {
					var e = document.createElement("div");
					e.setAttribute("class", "textarea_tip"), e.innerHTML = "<i>&#xe6e8;</i>" + i.tip, c.appendChild(e)
				}
				var a = document.createElement("textarea");
				(a = document.createElement("textarea")).setAttribute("class", "tarea"), a.value = i.val, a.onchange = i.fun;
				var n = document.createElement("buttom");
				n.innerHTML = i.name, n.onclick = i.fun, c.appendChild(a), c.appendChild(n)
			}
		}(), o.items = function() {
			if ("items" == s) {
				var e, a = "ui-items ",
					l = i.app,
					o = l.attr("data-config") ? JSON.parse(l.attr("data-config")) : {},
					d = o.items;
				i.class && (a += i.class), c.setAttribute("class", a);
				var f = document.createElement("div");
				f.setAttribute("class", "goods_perview");
				var p = document.createElement("p");
				p.innerHTML = "拖动,切换顺序";
				var u = document.createElement("span");
				u.setAttribute("class", "ks_additem"), u.innerHTML = "&#xeaf3;", i.title && u.setAttribute("data-title", i.title), u.onclick = i.fun, p.appendChild(u);
				var h = document.createElement("div");
				h.setAttribute("class", "goods_add"), h.onclick = function() {
					t.item(d, function(t) {
						var e = [];
						$.each(t, function(t, a) {
							var i = d[t] || {
								subtitle: "双击可编辑文本",
								subtitle2: "双击可编辑扩展文本内容",
								sale30: "008",
								tagpSrc: "https://img.alicdn.com/imgextra/i3/1867852664/O1CN013Jfjdx1VY9cKg0xy8_!!1867852664.png",
								subpSrc1: "https://img.alicdn.com/imgextra/i4/1867852664/O1CN011YYUFL1VY9cI6Pne2_!!1867852664.png"
							};
							i.itemId = a.itemId, i.itemLink = a.itemLink, i.addhref = "add|" + a.itemId, i.picUrl = a.picUrl, i.reservePrice = a.reservePrice, i.salePrice = a.salePrice, i.title = a.title, a.videoId && (i.videoId = a.videoId), a.videoUrl && (i.videoUrl = a.videoUrl), e[t] = i
						}), e.length && (l = i.app, o = l.attr("data-config") ? JSON.parse(l.attr("data-config")) : {}, d = o.items, J(l.attr("appid"), l.attr("data-apptype")), d = e, o.items = e, _.innerHTML = d.length + "/20", $(".goods_perview").empty(), v(e, f), l.attr("data-config", JSON.stringify(o)), l.children(".itemUpData").click(), r.set())
					})
				};
				var g = document.createElement("i");
				g.innerHTML = "&#xeaf3;";
				var m = document.createElement("span");
				m.innerHTML = "添加宝贝";
				var _ = document.createElement("span");

				function v(t, e) {
					$.each(t, function(t, a) {
						var i = document.createElement("span");
						i.setAttribute("data-key", t);
						var n = document.createElement("img");
						n.setAttribute("src", a.picUrl);
						var s = document.createElement("i");
						s.setAttribute("class", "del"), s.innerHTML = "\t&#xe63f;", i.appendChild(s), i.appendChild(n), e.appendChild(i)
					})
				}
				_.innerHTML = d.length + "/20", v(d, f), h.appendChild(g), h.appendChild(m), h.appendChild(_), c.appendChild(f), c.appendChild(p), c.appendChild(h), setTimeout(function() {
					e = $(".goods_perview");
					try {
						n.create(e[0], {
							animation: 150,
							filter: ".del",
							onFilter: function(t) {
								l = i.app, o = l.attr("data-config") ? JSON.parse(l.attr("data-config")) : {}, d = o.items, J(l.attr("appid"), l.attr("data-apptype"));
								var e = t.oldIndex;
								t.item.parentNode.removeChild(t.item), d.splice(e, 1), _.innerHTML = d.length + "/20", l.attr("data-config", JSON.stringify(o)), l.children(".itemUpData").click(), r.set()
							},
							onUpdate: function(t) {
								l = i.app, o = l.attr("data-config") ? JSON.parse(l.attr("data-config")) : {}, d = o.items, J(l.attr("appid"), l.attr("data-apptype"));
								var e = t.newIndex,
									a = t.oldIndex,
									n = d[a];
								d.splice(a, 1), d.splice(e, 0, n), o.items = d, l.attr("data-config", JSON.stringify(o)), l.children(".itemUpData").click(), r.set()
							}
						})
					} catch (t) {}
				}, 400)
			}
		}(), o.slider = function() {
			if ("slider" == s) {
				setTimeout(function() {
					let t = $(".app-dialog .bo_list");
					try {
						n.create(t[0], {
							animation: 150,
							onFilter: function(t) {},
							onUpdate: function(t) {
								let a = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, i = a.slider, n = t.newIndex, s = t.oldIndex, o = i[s];
								i.splice(s, 1), i.splice(n, 0, o), a.slider = i, e.attr("data-config", JSON.stringify(a));
								var c = {
									dom: e,
									appType: e.attr("data-apptype"),
									config: a,
									pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
								};
								l.d(c, m), e.children(".bo_edit_temp").attr("data-key", n), e.mouseenter(), e.mousedown(), document.onmouseup(), r.set()
							}
						})
					} catch (t) {}
				}, 400);
				var e = i.app,
					a = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
					o = a.slider,
					d = "ui-slider ";
				i.class && (d += i.class), c.setAttribute("class", d);
				var f = document.createElement("div");

				function h(i, n) {
					click_key = n;
					var s = (i = i || {}).customContent ? JSON.stringify(i.customContent) : "",
						o = $(".epr_bo_box"),
						c = {
							name: "显示",
							id: "nr",
							ele: "input_radio",
							val: [{
								val: "1",
								text: "图片",
								checked: 1 == i.show
							}, {
								val: "2",
								text: "自定义",
								checked: 2 == i.show
							}],
							fun: function() {
								var t = $(this),
									i = $(this).parents(".epr_bo_box"),
									s = t.val(),
									l = e.children(".bo_edit_temp");
								1 == s ? (i.find(".pSrc").show(), i.find(".customContent").hide(), l.children("img").show(), l.children(".child_page").hide(), e.children(".boSlider").eq(n).children("img").show(), e.children(".boSlider").eq(n).children(".child_page").hide()) : (i.find(".pSrc").hide(), i.find(".customContent").show(), l.children("img").hide(), l.children(".child_page").show(), e.children(".boSlider").eq(n).children("img").hide(), e.children(".boSlider").eq(n).children(".child_page").show()), a.slider[n].show = s, e.attr("data-config", JSON.stringify(a))
							}
						},
						d = {
							name: "替换图片",
							ele: "image",
							val: i.img,
							class: "pSrc",
							href: i.href,
							group: 1,
							hide: 1 != i.show,
							fun: function() {
								var i = $(this).attr("class"),
									s = $(this).val() || "",
									l = a.slider[n].img;
								if ("imageHref" == i && (e.find("a.boSlider").eq(n).attr("href", s), a.slider[n].href = s, e.attr("data-config", JSON.stringify(a))), "imageInput" == i && s && l != s && (e.find(".boSlider").eq(n).children("img").attr("src", s), e.find(".bo_edit_temp img").attr("src", s), $(this).parents(".ui-image-rot").find("img").attr("src", s), N(s, function(t, i) {
									a.slider[n].img = s, a.slider[n].img_width = t, a.slider[n].img_height = i, e.attr("data-config", JSON.stringify(a)), r.set()
								})), "uiSetImage" == i) {
									var o = $(this).siblings("input");
									t.tu(function(t) {
										o.val(t)[0].onkeyup()
									})
								}
							}
						},
						u = {
							name: "编辑自定义",
							ele: "textarea",
							class: "customContent",
							hide: 2 != i.show,
							val: s,
							fun: function() {
								if ($(this).hasClass("tarea")) if ($(this).val()) try {
									if ("number" == typeof(i = JSON.parse($(this).val()))) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
										tips: 2,
										time: 3e3
									}), $(this).val(""), !1;
									i = O(i), a.slider[n].customContent = i, e.attr("data-config", JSON.stringify(a));
									var t = {
										dom: e,
										appType: "apwx_jnbo",
										config: a,
										pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
									};
									l.d(t)
								} catch (t) {
									layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
										tips: 2,
										time: 3e3
									}), $(this).val("")
								} else a.slider[n].customContent = "", e.attr("data-config", JSON.stringify(a)), e.children(".child_page").remove();
								else {
									var i;
									(i = $(this).siblings("textarea").val()) && (s = i);
									var o = $(".child_open_start");
									o.attr("data-wh", '{"w":"' + e.width() + '","h":"' + e.height() + '"}'), o.attr("data-textarea", s), o.attr("data-appid", a.appID), o.attr("data-val", "slider|" + n + "|customContent"), o.click(), $(p).mousedown(), layer.closeAll(), r.allRemove()
								}
							}
						};
					o.empty(), f.setAttribute("data-key", n), f.appendChild(v(0, 0, c)), f.appendChild(v(0, 0, d)), f.appendChild(v(0, 0, u)), z()
				}
				f.setAttribute("class", "epr_bo_box");
				var g = e.find(".bo_edit_temp").attr("data-key") || 0;
				h(o[g], g);
				var _ = function() {
						var t = $(this).attr("data-k"),
							a = e.find(".boSlider").eq(t).html();
						t != e.children(".bo_edit_temp").attr("data-key") && (e.children(".bo_edit_temp").empty().append(a), e.children(".bo_edit_temp").attr("data-key", t), $(this).addClass("select").siblings().removeClass("select"), h(o[t], t), x(), w())
					},
					y = document.createElement("div");
				y.setAttribute("class", "bo_list");
				for (var b = 0; b < o.length; b++) S(b);

				function S(t) {
					var e = document.createElement("span");
					t == g && e.setAttribute("class", "select"), e.setAttribute("data-k", t), e.innerHTML = t + 1, e.onclick = _, y.appendChild(e)
				}
				function w() {
					try {
						setTimeout(function() {
							var t = $(u).find(".bo_list").find(".select").attr("data-k"),
								i = a.PagStyle_obj[1].style,
								n = a.PagStyle_obj[2].content;
							if (i && t >= 0) {
								var s = e.children(".bo_showsPagination").find(".pag-type-0").find("span").not(".select").css("background-color"),
									l = e.children(".bo_showsPagination").find(".pag-type-0").find(".select").css("background-color");
								a.PagStyle_obj[0].style && a.PagStyle_obj[0].style.bgColor && (s = a.PagStyle_obj[0].style.bgColor), a.PagStyle_obj[0].style && a.PagStyle_obj[0].style.select_bgColor && (l = a.PagStyle_obj[0].style.select_bgColor), e.children(".bo_showsPagination").find(".pag-type-0").find("span").eq(t).css({
									"background-color": l
								}).addClass("select").siblings("span").removeClass("select").css({
									"background-color": s
								}), e.children(".bo_showsPagination").find(".pag-type-1").find("span").css({
									color: i.color,
									"background-color": i.bgColor
								}).removeClass("select"), e.children(".bo_showsPagination").find(".pag-type-1").find("span").eq(t).css({
									color: i.select_color,
									"background-color": i.select_bgColor
								}).addClass("select"), $.each(e.children(".bo_showsPagination").find(".pag-type-2").find("span"), function(e, a) {
									e == t ? $(a).addClass("select").find("img").attr("src", n[e].select) : $(a).removeClass("select").find("img").attr("src", n[e].
								default)
								})
							}
						}, 50)
					} catch (t) {}
				}
				var k = document.createElement("div");
				k.setAttribute("class", "bo_list_crud");
				var C = document.createElement("span");
				C.setAttribute("class", "bo_add"), C.innerHTML = "&#xe624; 添加一组", C.onclick = function() {
					var t = a.slider.push({
						img: "",
						href: "",
						customContent: "",
						show: 1,
						img_width: "",
						img_height: ""
					}),
						i = '<a class="boSlider" data-key="' + (t - 1) + '" href="" onclick="return false"><img /></a>';
					try {
						a.PagStyle_obj[1].content[t - 1] || (a.PagStyle_obj[1].content[t - 1] = String(t)), a.PagStyle_obj[2].content[t - 1] || (a.PagStyle_obj[2].content[t - 1] = {
						default:
							"https://img.alicdn.com/imgextra/i2/1867852664/O1CN01NuR1il1VY9ctMEkPr_!!1867852664.jpg", select: "https://img.alicdn.com/imgextra/i3/1867852664/O1CN01b2Fns31VY9cxKMlzD_!!1867852664.jpg"
						});
						var n = a.PagStyle_obj[1] && a.PagStyle_obj[1].content && a.PagStyle_obj[1].content[t - 1] || t,
							s = a.PagStyle_obj[2] && a.PagStyle_obj[2].content && a.PagStyle_obj[2].content[t - 1] && a.PagStyle_obj[2].content[t - 1].
						default ||"",
							l = $(e.find(".bo_showsPagination").find(".pag-type-1").find("span").eq(0)[0].outerHTML).text(n),
							o = $(e.find(".bo_showsPagination").find(".pag-type-2").find("span").eq(0)[0].outerHTML).find("img").attr("src", s).parents("span");
						if (a.PagStyle_obj[1]) {
							var c = a.PagStyle_obj[1].style;
							l = l.css({
								color: c.color,
								"background-color": c.bgColor
							}).removeClass("select")
						}
						e.find(".bo_showsPagination").find(".pag-type-1").find(".pagflex").append(l), e.find(".bo_showsPagination").find(".pag-type-2").find(".pagflex").append(o)
					} catch (t) {}
					e.find(".bo_showsPagination").find(".pag-type-0").append("<span></span>"), e.find(".bo_edit_temp").before(i), S(t - 1), w(), $(".ui-slider .bo_list").children().eq(t - 1)[0].onclick(), e.attr("data-config", JSON.stringify(a)), r.set()
				};
				var j = document.createElement("span");
				j.setAttribute("class", "bo_del"), j.innerHTML = "&#xe622; 删除本组", j.onclick = function() {
					if ($(".ui-slider .bo_list").children().length > 1) {
						var t = $(".ui-slider .epr_bo_box").attr("data-key");
						a.slider.splice(t, 1), e.find(".boSlider").eq(t).remove(), e.attr("data-config", JSON.stringify(a)), $(".ui-slider .bo_list").empty(), e.find(".bo_showsPagination").find(".pag-type-0").find("span").eq(t).remove(), e.find(".bo_showsPagination").find(".pag-type-1").find("span").eq(t).remove(), e.find(".bo_showsPagination").find(".pag-type-2").find("span").eq(t).remove();
						for (var i = 0; i < a.slider.length; i++) S(i);
						w(), t > i - 1 && (t = i - 1), $(".ui-slider .bo_list").children().eq(t)[0].onclick(), r.set()
					} else layer.msg("最后一组不能再删啦！")
				}, k.appendChild(j), k.appendChild(C), c.appendChild(f), c.appendChild(y), c.appendChild(k)
			}
		}(), o.slider_tu = function() {
			if ("slider_tu" == s) {
				setTimeout(function() {
					let t = $(".app-dialog .bo_list");
					try {
						n.create(t[0], {
							animation: 150,
							onFilter: function(t) {},
							onUpdate: function(t) {
								let a = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, i = a.slider, n = t.newIndex, s = t.oldIndex, o = i[s];
								i.splice(s, 1), i.splice(n, 0, o), a.slider = i, e.attr("data-config", JSON.stringify(a));
								var c = {
									dom: e,
									appType: e.attr("data-apptype"),
									config: a,
									pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
								};
								l.d(c, m), e.children(".box").attr("data-key", n), e.mouseenter(), e.mousedown(), document.onmouseup(), r.set()
							}
						})
					} catch (t) {}
				}, 400);
				var e = i.app,
					a = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
					o = a.slider,
					d = "ui-slider ui-slider_tu ";
				i.class && (d += i.class), c.setAttribute("class", d);
				var f = document.createElement("div");

				function p(n, s) {
					click_key = s;
					n = n || {};
					var l = $(".epr_bo_box"),
						o = {
							name: "替换图片",
							ele: "image",
							val: n.img,
							class: "pSrc",
							href: n.href,
							group: 1,
							fun: function() {
								var n = $(this).attr("class"),
									l = $(this).val() || "",
									o = a.slider[s].img;
								if ("imageHref" == n && (e.children(".box").children().eq(s).attr("href", l), a.slider[s].href = l, e.attr("data-config", JSON.stringify(a))), "imageInput" == n && (e.attr("data-prev", '{"W":' + e[0].offsetWidth + ',"H":' + e[0].offsetHeight + "}"), l && o != l && (e.children(".box").children().eq(s).children("img").attr("src", l), $(this).parents(".ui-image-rot").find("img").attr("src", l), N(l, function(t, n) {
									a.slider[s].img = l, a.slider[s].img_width = t, a.slider[s].img_height = n, e.attr("data-config", JSON.stringify(a)), i.fun && i.fun.image && i.fun.image(a.slider, s), r.set()
								}))), "uiSetImage" == n) {
									var c = $(this).siblings("input");
									t.tu(function(t) {
										c.val(t)[0].onkeyup()
									})
								}
							}
						};
					l.empty(), f.setAttribute("data-key", s), f.appendChild(v(0, 0, o)), z()
				}
				f.setAttribute("class", "epr_bo_box"), i.hide && (c.style.display = "none");
				var h = e.find(".box").attr("data-key") || 0;
				p(o[h], h);
				var g = function() {
						var t = $(this).attr("data-k");
						$(this).addClass("select").siblings().removeClass("select"), p(o[t], t), function() {
							try {
								setTimeout(function() {
									var t = $(u).find(".bo_list").find(".select").attr("data-k");
									i.fun && i.fun.change && i.fun.change(a.slider, t), e.children(".box").attr("data-key", t), r.set()
								}, 50)
							} catch (t) {}
						}(), x()
					},
					_ = document.createElement("div");
				_.setAttribute("class", "bo_list");
				for (var y = 0; y < o.length; y++) b(y);

				function b(t) {
					var e = document.createElement("span");
					t == h && e.setAttribute("class", "select"), e.setAttribute("data-k", t), e.innerHTML = t + 1, e.onclick = g, _.appendChild(e)
				}
				var S = document.createElement("div");
				S.setAttribute("class", "bo_list_crud");
				var w = document.createElement("span");
				w.setAttribute("class", "bo_add"), w.innerHTML = "&#xe624; 添加一张", w.onclick = function() {
					var t = "";
					try {
						-1 == a.slider[0].href && (t = "-1")
					} catch (t) {}
					var n = {
						img: "",
						href: t,
						img_width: 0,
						img_height: 0
					},
						s = a.slider.push(n);
					i.fun && i.fun.add && i.fun.add(s - 1), b(s - 1), $(".ui-slider .bo_list").children().eq(s - 1)[0].onclick(), e.attr("data-config", JSON.stringify(a)), r.set()
				};
				var k = document.createElement("span");
				k.setAttribute("class", "bo_del"), k.innerHTML = "&#xe622; 删除本张", k.onclick = function() {
					if ($(".ui-slider .bo_list").children().length > 1) {
						var t = $(".ui-slider .epr_bo_box").attr("data-key");
						a.slider.splice(t, 1), e.find(".boSlider").eq(t).remove(), e.attr("data-config", JSON.stringify(a)), $(".ui-slider .bo_list").empty();
						for (var n = 0; n < a.slider.length; n++) b(n);
						t > n - 1 && (t = n - 1), i.fun && i.fun.change && i.fun.del(a.slider, t), $(".ui-slider .bo_list").children().eq(t)[0].onclick(), r.set()
					} else layer.msg("最后一组不能再删啦！")
				}, S.appendChild(k), S.appendChild(w), c.appendChild(f), c.appendChild(_), c.appendChild(S)
			}
		}(), o[s], c
	}
	function x(e, a) {
		$(u).find(".irule").remove(), $(u).find("input[sjdz_none=true]").css("padding-right", "10px");
		var i = $(u).find("input[sjdz_px=true]");
		$.each(i, function(t, e) {
			var a = $('<span class="sjdz_px irule">px</span>');
			$(e).after(a)
		});
		var n = $(u).find("input[sjdz_ms=true]");
		$.each(n, function(t, e) {
			var a = $('<span class="sjdz_px irule">ms</span>');
			$(e).after(a)
		});
		var l = $(u).find("input[sjdz_color=true]");
		$.each(l, function(t, e) {
			$(e).css({
				"padding-right": "45px"
			});
			var a = $(e).val(),
				i = $('<span class="sjdz_color irule"><i style="background:' + a + '"></i></span>');
			$(e).after(i), $(u).find(".sjdz_color").unbind("click"), $(u).find(".sjdz_color").bind("click", function() {
				var t = $(this),
					e = y(this, "left") - 240,
					a = y(this, "top") + 26 - $("#right").scrollTop(),
					i = t.siblings("input"),
					n = "rgba(0, 0, 0, 0)" == i.val() ? "#000000" : i.val();
				a + 235 > $(".pageRight")[0].offsetHeight + $(".pageRight")[0].offsetTop && (a -= 265), function(t, e, a, i, n) {
					t.spectrum({
						allowEmpty: !0,
						color: e,
						showInput: !0,
						showPalette: !0,
						showSelectionPalette: !0,
						flat: !0,
						showAlpha: !0,
						showInitial: !0,
						clickoutFiresChange: !1,
						preferredFormat: "hex"
					}), $(".sp-container").hide(), $("body").append("<div class='sp_containerBG' style='width:100%;height:100%;top:0;left:0;position:fixed;z-index:999999990;'></div>"), setTimeout(function() {
						$(".sp-container").css({
							position: "fixed",
							"z-index": "999999991",
							left: a,
							top: i
						}).show()
					}, 10), $(".color-cc").attr("def-color", e), n(), $(".sp-button-container>button").click(function(t) {
						t.stopPropagation(), $(this).hasClass("color-sure") ? n && $.isFunction(n) && n($(".sp-input").val(), !0) : n && $.isFunction(n) && n($(".color-cc").attr("def-color")), $(".sp-container").remove(), $(".sp_containerBG").remove()
					}), $(".sp-container").find(".no-color").click(function() {
						t.parents(".colors").find(".c").length <= 1 ? $(".colorsBox").remove() : t.parents(".c").remove(), $(".sp-container").remove(), $(".sp_containerBG").remove()
					});
					var s = !1,
						l = null;

					function r(t) {
						t.bind({
							mousedown: function() {
								s = !0
							},
							mousemove: function() {
								l = setTimeout(function() {
									s && n && $.isFunction(n) && n($(".sp-input").val())
								}, 100)
							},
							mouseup: function() {
								s = !1, clearTimeout(l)
							}
						})
					}
					r($(".sp-val")), r($(".sp-hue")), r($(".sp-alpha-inner")), $(".sp-container").bind({
						mousedown: function(t) {
							t.stopPropagation()
						}
					}), $(".sp_containerBG").mousedown(function() {
						$(".sp-container").remove(), $(this).remove()
					})
				}(t, n, e, a, function(e) {
					e = e || i.val();
					t.children().css({
						background: e
					}), i.val(e)[0].onkeyup(), $(".sp-container").find(".no-color").click(function() {
						t.children().css({
							background: "rgba(0,0,0,0)"
						}), i.val("rgba(0,0,0,0)")[0].onkeyup()
					})
				})
			})
		});
		var r = $(u).find("input[sjdz_href_url=true]");
		$.each(r, function(e, a) {
			var i = $('<span class="sjdz_href_url irule">&#xe61d;</span>');
			$(a).after(i), $(u).find(".sjdz_href_url").unbind("click"), $(u).find(".sjdz_href_url").bind("click", function() {
				var e = $(this).siblings("input");
				t.wxk(function(t) {
					e.val(t)[0].onkeyup()
				})
			})
		});
		var o = $(u).find("input[sjdz_img_url=true]");
		$.each(o, function(e, a) {
			var i = $(a).val(),
				n = $('<span class="sjdz_img_url irule">&#xe61d;</span>'),
				s = $('<span class="_picview_temp_"><img src="' + i + '" /></span>');
			$(a).after(n), $(u).find(".sjdz_img_url").unbind("click"), $(u).find(".sjdz_img_url").bind("click", function() {
				var e = $(this).siblings("input");
				t.tu(function(t) {
					e.val(t)[0].onkeyup()
				})
			}), i && ($(a).unbind("mouseenter mouseleave"), $(a).bind({
				mouseenter: function(t) {
					$(this).after(s)
				},
				mouseleave: function(t) {
					$("._picview_temp_").remove()
				}
			}))
		});
		var c = $(u).find("input[sjdz_video_url=true]");
		$.each(c, function(e, a) {
			var i = $('<span class="sjdz_video_url irule">&#xe61d;</span>');
			$(a).after(i), $(u).find(".sjdz_video_url").unbind("click"), $(u).find(".sjdz_video_url").bind("click", function() {
				var e = $(this).siblings("input");
				t.video(function(t, a) {
					e.attr("data-video", JSON.stringify(a)), e.val(t)[0].onkeyup()
				})
			})
		});
		var d = $(u).find(".input_range");
		$.each(d, function(t, e) {
			var a = $(e).find(".rangehk"),
				i = $(e).find(".rangeleft"),
				n = parseInt($(e).find(".huakuai").attr("data-min")),
				s = parseInt($(e).find(".huakuai").attr("data-max")),
				l = $(e).find("input.setinput"),
				r = Math.floor((parseInt(l.val()) - n) / (s - n) * 100);
			r > 100 && (r = 100), r < 0 && (r = 0), a.css("left", r + "px"), i.css("width", r + "px"), a.draggable({
				containment: "parent",
				axis: "x",
				drag: function(t) {
					var e = this.offsetLeft,
						a = Math.floor((s - n) * e / 100 + n);
					l.val(a)[0].onkeyup(), i.css("width", e + "px")
				}
			})
		});
		var f = $(u).find(".ui-select");
		$.each(f, function(t, e) {
			var a = $('<span class="sjdz_xia irule">&#xe6b0;</span>');
			$(e).find("input").after(a), $(e).find("span.l").unbind("mousedown"), $(e).find("span.l").bind("mousedown", function(t) {
				var e = $(this).parents(".select-list");
				e.find(".select-input").val($(this).text()), setTimeout(function() {
					e.find(".list").hide()
				}, 200)
			}), $(e).unbind("mousedown"), $(e).bind("mousedown", function(t) {
				(t = t || event).stopPropagation();
				var e = $(this);
				e.siblings().find(".list").hide(), e.find(".list").is(":visible") ? setTimeout(function() {
					e.find(".list").hide()
				}, 200) : e.find(".list").show()
			})
		}), s.render({
			elem: ".setinput[sjdz_date_1=true]",
			type: "datetime",
			done: function(t, e, a) {
				setTimeout(function() {
					$(".setinput[sjdz_date_1=true]").keyup()
				}, 50)
			}
		}), s.render({
			elem: ".setinput[sjdz_date_2=true]",
			type: "datetime",
			done: function(t, e, a) {
				setTimeout(function() {
					$(".setinput[sjdz_date_2=true]").keyup()
				}, 50)
			}
		});
		var p, h = $(u).find("._apwx_jbblb_checkbox"),
			g = h.attr("data-appid");
		if (h.find("label").unbind("mouseenter mouseleave"), h.find("label").bind({
			mouseenter: function(t) {
				var e = $(this).attr("class"),
					a = $(".wdraggable-ui[appid=" + g + "]").find("." + e);
				a.length && a.addClass("ui-temp-hover")
			},
			mouseleave: function(t) {
				$(".wdraggable-ui").removeClass("ui-temp-hover")
			}
		}), a) {
			(p = a.this.attr("data-child-type")) && h.find("." + p).append("<i>&#xe62c;</i>")
		}
		$(document).mousedown(function() {
			$(u).find(".list").hide()
		})
	}
	function y(t, e) {
		for (var a = "left" == e ? t.offsetLeft : t.offsetTop, i = t.offsetParent; null !== i;) a += "left" == e ? i.offsetLeft : i.offsetTop, i = i.offsetParent;
		return a
	}
	g.apwx_jrq = function(t, e) {
		var a = $(".weexApp .hot-box").children(),
			i = [],
			n = t.attr("data-i");

		function s(t) {
			$.each($(u).find(".ui-input"), function(t, e) {
				$(e).unbind("mouseenter mouseleave"), 1 == $.cookie("_k_buttom_") && ($(e).hasClass("_k_select_") || $(e).hasClass("_k_hide_")) && $(e).bind({
					mouseenter: function(t) {
						var e = $(u).find(".ui-input").index($(this));
						$(".weexApp .hot-box").children(".appLink[data-hover=" + e + "]").addClass("ui-temp-hover")
					},
					mouseleave: function(t) {
						$(".weexApp .hot-box").children().removeClass("ui-temp-hover")
					}
				})
			})
		}
		$.each(a, function(t, e) {
			var a = $(e).attr("data-i"),
				s = a != n && 1 != $.cookie("_k_buttom_"),
				l = a == n ? 1 == $.cookie("_k_buttom_") ? "_k_select_ k_gaoliang" : "_k_select_" : "_k_hide_";
			i.push({
				name: "链接",
				title: "请输入链接网址",
				rule: "sjdz_href_url",
				ele: "input",
				class: l,
				val: $(e).attr("href") || "",
				hide: s,
				fun: function() {
					var t = $(this).val();
					$(e).attr("href", t), t ? $(e).empty().append("<i>&#xe658;</i>") : $(e).empty(), r.set()
				}
			}), $(e).attr("data-hover", t)
		}), i.push({
			name: 1 == $.cookie("_k_buttom_") ? "仅显示选中热区" : "显示所有热区",
			ele: "buttom",
			class: "_k_buttom_ " + (1 == $.cookie("_k_buttom_") ? "allkshow" : ""),
			fun: function() {
				$(this).parent().hasClass("allkshow") ? ($("._k_hide_").hide(), $("._k_buttom_").removeClass("allkshow"), $(this).text("显示所有热区"), $.cookie("_k_buttom_", "0"), $("._k_select_").removeClass("k_gaoliang"), s()) : ($("._k_hide_").show(), $("._k_buttom_").addClass("allkshow"), $.cookie("_k_buttom_", "1"), $(this).text("仅显示选中热区"), $("._k_select_").addClass("k_gaoliang"), s())
			}
		}), _({
			name: "编辑热区",
			tabs: ["内容设置"],
			controls: [i]
		}, t, e), s()
	}, g.apwx_jtup = function(e, a, i) {
		var n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
			s = a.this.children().children("img").attr("src") || "",
			l = "编辑" + e.attr("appname") || "编辑图片",
			o = Math.floor((e[0].offsetWidth < e[0].offsetHeight ? e[0].offsetWidth : e[0].offsetHeight) / 2),
			c = $(a.ui);
		_({
			name: l,
			tabs: ["内容设置"],
			controls: [
				[{
					name: "替换图片",
					ele: "label"
				}, {
					name: "替换图片",
					ele: "image",
					val: s,
					href: a.this.find("a").attr("href") || "",
					group: 1,
					fun: function() {
						var l = $(this).attr("class"),
							o = $(this).val() || "";
						if ("imageHref" == l && (a.this.find("a").attr("href", o), i && i[3] ? n[i[3]] = o : n.href = o, e.attr("data-config", JSON.stringify(n))), "imageInput" == l) {
							var c = a.this.find("img"),
								d = a.this[0].offsetWidth,
								f = a.this[0].offsetHeight;
							c.attr("data-prev", '{"W":' + d + ',"H":' + f + "}"), o && o != s && (a.this.find("img").attr("src", o), $(this).parents(".ui-image-rot").find("img").attr("src", o), N(o, function(t, s) {
								i && i[0] ? (n[i[0]] = o, n[i[1]] = t, n[i[2]] = s) : (n.pSrc = o, n.width = t, n.height = s), a.this.css({
									width: t + "px",
									height: s + "px"
								}), a.this.mouseenter(), a.this.mousedown(), document.onmouseup(), e.attr("data-config", JSON.stringify(n)), r.set()
							}))
						}
						if ("uiSetImage" == l) {
							var p = $(this).siblings("input");
							t.tu(function(t) {
								p.val(t)[0].onkeyup()
							})
						}
					}
				}, {
					name: "图圆角",
					type: "number",
					ele: "input_range",
					min: 0,
					max: o,
					val: e.css("border-radius").replace(/px/, "") || 0,
					fun: function() {
						var t = $(this).val();
						n.borderRadius = t, c.css("border-radius", t + "px"), e.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "恢复上次宽高",
					ele: "buttom",
					fun: function() {
						var t = a.this.find("img").attr("data-prev");
						if (t) try {
							t = JSON.parse(t), a.this.css({
								width: t.W + "px",
								height: t.H + "px"
							}), a.this.mouseenter(), r.set()
						} catch (t) {}
					}
				}]
			]
		}, e, a)
	}, g.apwx_jdjs = function(t, e) {
		var a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			i = e.this,
			n = $(e.ui),
			s = t.css("background-image"),
			o = i.attr("data-child-type"),
			c = [],
			d = (Math.floor((e.this[0].offsetWidth < e.this[0].offsetHeight ? e.this[0].offsetWidth : e.this[0].offsetHeight) / 2), a.customContent_1 ? JSON.stringify(a.customContent_1) : ""),
			f = a.customContent_2 ? JSON.stringify(a.customContent_2) : "",
			u = a.customContent_3 ? JSON.stringify(a.customContent_3) : "",
			h = v(a.startTime, 3, "startTime"),
			g = v(a.endTime, 6, "endTime"),
			m = "编辑" + t.attr("appname") || "编辑倒计时";

		function v(e, i, n) {
			var s = !1,
				l = d();
			try {
				var r = e.replace(/(^s*)/g, "") || null;
				if (r) {
					var o = r.split(" ")[0];
					new Date;
					o && l > o && (s = !0)
				}
			} catch (t) {
				s = !0
			}
			if (s) {
				var c = d(l, i) + " 14:00:00";
				return a[n] = c, t.attr("data-config", JSON.stringify(a)), c
			}
			return e;

			function d(t, e) {
				e = e || 0;
				(t = t ? new Date(t) : new Date).setDate(t.getDate() + e);
				var a = t.getMonth() + 1,
					i = t.getDate();
				return a < 10 && (a = "0" + a), i < 10 && (i = "0" + i), t.getFullYear() + "-" + a + "-" + i
			}
		}
		s = "none" == s ? "" : s.replace(/url?\(/, "").replace(/\)/, "").replace(/"/, "").replace(/"/, "");
		var x = [{
			text: "全部显示",
			value: "4"
		}, {
			text: "只显示-时分秒",
			value: "3"
		}, {
			text: "只显示-分秒",
			value: "2"
		}, {
			text: "只显示-秒",
			value: "1"
		}];
		c = o ? [{
			name: "大小",
			type: "number",
			rule: "sjdz_px",
			ele: "input",
			val: i.css("font-size").replace(/px/, "") || "",
			fun: function() {
				var t = $(this).val();
				n.css("font-size", t + "px"), n.mouseenter(), r.set()
			}
		}, {
			name: "字色",
			rule: "sjdz_color",
			ele: "input",
			val: i.css("color") || "",
			fun: function() {
				var t = $(this).val();
				n.css("color", t)
			}
		}, {
			name: "文字样式",
			ele: "font",
			val: {
				fontWeight: i.css("font-weight"),
				textDecoration: i.css("text-decoration"),
				align: i.css("text-align")
			},
			fun: function() {
				var t = $(this);
				t.hasClass("select") ? t.hasClass("align") || (t.removeClass("select"), t.hasClass("fontWeight") && n.css("font-weight", ""), t.hasClass("textDecoration") && n.css("text-decoration", "")) : (t.addClass("select"), t.hasClass("align") && (t.siblings(".align").removeClass("select"), t.hasClass("alignLeft") && n.css({
					display: "",
					"justify-content": "",
					"align-items": "",
					"text-align": "left"
				}), t.hasClass("alignCenter") && n.css({
					display: "flex",
					"justify-content": "center",
					"align-items": "center",
					"text-align": "center"
				}), t.hasClass("alignRight") && n.css({
					display: "",
					"justify-content": "",
					"align-items": "",
					"text-align": "right"
				})), t.hasClass("fontWeight") && n.css("font-weight", "bold"), t.hasClass("textDecoration") && n.css("text-decoration", "line-through")), r.set()
			}
		}, {
			name: "字旋转",
			type: "number",
			ele: "input_range",
			min: -360,
			max: 360,
			val: i.attr("style").indexOf("rotate(") ? i.attr("style").split("rotate(")[1].split("deg)")[0] : 0,
			fun: function() {
				var e = $(this).val();
				n.css("transform", "rotate(" + e + "deg)"), $.each(n, function(t, i) {
					$(i).hasClass("d") && (a.rotate_d = e), $(i).hasClass("h") && (a.rotate_h = e), $(i).hasClass("m") && (a.rotate_m = e), $(i).hasClass("s") && (a.rotate_s = e)
				}), t.attr("data-config", JSON.stringify(a))
			}
		}, {
			name: "背景色",
			rule: "sjdz_color",
			ele: "input",
			val: i.css("background-color"),
			fun: function() {
				var t = $(this).val();
				n.css("background-color", t)
			}
		}] : [{
			name: "显示",
			id: "dsj_show",
			ele: "select",
			val: j(x, a.dsj_show, 0),
			list: x,
			fun: function() {
				var e = $(this).data().value;
				a.dsj_show = e, 4 == e && (t.children("span[data-child-type=d]").css("visibility", "visible"), t.children("span[data-child-type=h]").css("visibility", "visible"), t.children("span[data-child-type=m]").css("visibility", "visible"), t.children("span[data-child-type=s]").css("visibility", "visible")), 3 == e && (t.children("span[data-child-type=d]").css("visibility", "hidden"), t.children("span[data-child-type=h]").css("visibility", "visible"), t.children("span[data-child-type=m]").css("visibility", "visible"), t.children("span[data-child-type=s]").css("visibility", "visible")), 2 == e && (t.children("span[data-child-type=d]").css("visibility", "hidden"), t.children("span[data-child-type=h]").css("visibility", "hidden"), t.children("span[data-child-type=m]").css("visibility", "visible"), t.children("span[data-child-type=s]").css("visibility", "visible")), 1 == e && (t.children("span[data-child-type=d]").css("visibility", "hidden"), t.children("span[data-child-type=h]").css("visibility", "hidden"), t.children("span[data-child-type=m]").css("visibility", "hidden"), t.children("span[data-child-type=s]").css("visibility", "visible")), t.attr("data-config", JSON.stringify(a)), r.set()
			}
		}, {
			name: "开始时",
			rule: "sjdz_date_1",
			ele: "input",
			val: h,
			fun: function() {
				var e = $(this).val();
				a.startTime = e, t.attr("data-config", JSON.stringify(a))
			}
		}, {
			name: "结束时",
			rule: "sjdz_date_2",
			ele: "input",
			val: g,
			fun: function() {
				var e = $(this).val();
				a.endTime = e, t.attr("data-config", JSON.stringify(a))
			}
		}, {
			name: "背景色",
			rule: "sjdz_color",
			ele: "input",
			val: a.bgColor || "",
			fun: function() {
				var e = $(this).val();
				t.css("background-color", e), a.bgColor = e, t.attr("data-config", JSON.stringify(a))
			}
		}, {
			name: "背景图",
			rule: "sjdz_img_url",
			ele: "input",
			val: s,
			fun: function() {
				var e = $(this).val();
				e ? (t.css("background-image", "url(" + e + ")"), N(e, function(i, n) {
					a.bgImg = e, a.bgImg_width = i, a.bgImg_height = n, t.attr("data-config", JSON.stringify(a)), r.set()
				})) : (t.css("background-image", ""), a.bgImg = "", a.bgImg_width = 0, a.bgImg_height = 0, t.attr("data-config", JSON.stringify(a)))
			}
		}, {
			name: "活动自定义内容 - 预览 ↓",
			ele: "label",
			class: "_djs_label_title"
		}, {
			name: "",
			id: "_preview",
			class: "_djs_preview",
			ele: "input_radio",
			val: [{
				val: "1",
				text: "未开始",
				checked: !0
			}, {
				val: "2",
				text: "进行时",
				checked: !1
			}, {
				val: "3",
				text: "结束时",
				checked: !1
			}],
			fun: function() {
				var e = $(this).val(),
					a = $(this).parents(".ui-input");
				a.siblings("._djs_label_" + e).show().siblings("._djs_label").hide(), a.siblings(".customContent_djs_" + e).show().siblings(".customContent_djs").hide(), t.children(".child_page").hide(), t.children(".child_page_" + e).show()
			}
		}, {
			name: "活动未开始 - 内容自定义",
			ele: "label",
			class: "_djs_label _djs_label_1"
		}, {
			name: "编辑自定义",
			ele: "textarea",
			class: "customContent_djs customContent_djs_1",
			hide: !1,
			val: d,
			fun: function() {
				if ($(this).hasClass("tarea")) if ($(this).val()) try {
					var e = JSON.parse($(this).val());
					if ("number" == typeof e) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val(""), !1;
					e = O(e), a.customContent_1 = e, t.attr("data-config", JSON.stringify(a)), t.children(".child_page").remove();
					var i = {
						dom: t,
						appType: "apwx_jdjs",
						config: a,
						pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft
					};
					l.d(i)
				} catch (t) {
					layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val("")
				} else a.customContent_1 = "", t.attr("data-config", JSON.stringify(a)), t.children(".child_page").remove();
				else {
					var n = $(".child_open_start");
					n.attr("data-wh", '{"w":"' + t.width() + '","h":"' + t.height() + '"}'), n.attr("data-textarea", JSON.stringify(a.customContent_1)), n.attr("data-appid", a.appID), n.attr("data-val", "customContent_1"), n.click(), $(p).mousedown(), r.allRemove()
				}
			}
		}, {
			name: "活动进行时 - 内容自定义",
			ele: "label",
			class: "_djs_label _djs_label_2",
			hide: !0
		}, {
			name: "编辑自定义",
			ele: "textarea",
			class: "customContent_djs customContent_djs_2",
			hide: !0,
			val: f,
			fun: function() {
				if ($(this).hasClass("tarea")) if ($(this).val()) try {
					var e = JSON.parse($(this).val());
					if ("number" == typeof e) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val(""), !1;
					e = O(e), a.customContent_2 = e, t.attr("data-config", JSON.stringify(a)), t.children(".child_page").remove();
					var i = {
						dom: t,
						appType: "apwx_jdjs",
						config: a,
						pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft
					};
					l.d(i)
				} catch (t) {
					layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val("")
				} else a.customContent_2 = "", t.attr("data-config", JSON.stringify(a)), t.children(".child_page").remove();
				else {
					var n = $(".child_open_start");
					n.attr("data-wh", '{"w":"' + t.width() + '","h":"' + t.height() + '"}'), n.attr("data-textarea", JSON.stringify(a.customContent_2)), n.attr("data-appid", a.appID), n.attr("data-val", "customContent_2"), n.click(), $(p).mousedown(), r.allRemove()
				}
			}
		}, {
			name: "活动结束时 - 内容自定义",
			ele: "label",
			class: "_djs_label _djs_label_3",
			hide: !0
		}, {
			name: "编辑自定义",
			ele: "textarea",
			class: "customContent_djs customContent_djs_3",
			hide: !0,
			val: u,
			fun: function() {
				if ($(this).hasClass("tarea")) if ($(this).val()) try {
					var e = JSON.parse($(this).val());
					if ("number" == typeof e) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val(""), !1;
					e = O(e), a.customContent_3 = e, t.attr("data-config", JSON.stringify(a)), t.children(".child_page").remove();
					var i = {
						dom: t,
						appType: "apwx_jdjs",
						config: a,
						pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft
					};
					l.d(i)
				} catch (t) {
					layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val("")
				} else a.customContent_3 = "", t.attr("data-config", JSON.stringify(a)), t.children(".child_page").remove();
				else {
					var n = $(".child_open_start");
					n.attr("data-wh", '{"w":"' + t.width() + '","h":"' + t.height() + '"}'), n.attr("data-textarea", JSON.stringify(a.customContent_3)), n.attr("data-appid", a.appID), n.attr("data-val", "customContent_3"), n.click(), $(p).mousedown(), r.allRemove()
				}
			}
		}], _({
			name: m + " - " + ({
				d: "天",
				h: "时",
				m: "分",
				s: "秒"
			}[o] || "设置时间"),
			tabs: ["内容设置"],
			controls: [c]
		}, t, e)
	}, g.apwx_jsp = function(t, e) {
		var a = t.find("source").attr("src"),
			i = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			n = [{
				text: "可见时播_video视频",
				value: "video_true_auto"
			}, {
				text: "自动播放_video视频",
				value: "video_true"
			}, {
				text: "不自动播_video视频",
				value: "video_false"
			}, {
				text: "可见时播放",
				value: "4G_autoPlay"
			}, {
				text: "自动播放",
				value: "4G"
			}, {
				text: "不自动播",
				value: ""
			}];
		_({
			name: "编辑" + t.attr("appname") || "编辑视频",
			tabs: ["内容设置"],
			controls: [
				[{
					name: "视频",
					title: "请输入视频地址",
					rule: "sjdz_video_url",
					id: "videoSrc",
					ele: "input",
					val: a,
					fun: function() {
						var e = $(this).val(),
							a = $(this).attr("data-video") ? JSON.parse($(this).attr("data-video")) : null,
							n = t.html();
						if (t.empty().append($(n).attr("src", e)), a) {
							var s = a.id;
							e.indexOf(s) > 0 ? (i.id = s, i.width = a.width, i.height = a.height, i.videoPoster = a.snapshot, $(this).parents(".econtrol").find("#videoPoster").val(a.snapshot)[0].onkeyup()) : (i.id = "", i.width = "", i.height = "", i.videoPoster = "", $(this).parents(".econtrol").find("#videoPoster").val("")[0].onkeyup())
						} else i.id = "", i.width = "", i.height = "", i.videoPoster = "", $(this).parents(".econtrol").find("#videoPoster").val("")[0].onkeyup();
						i.videoSrc = e, t.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "封面图",
					title: "请输入视频封面图片",
					rule: "sjdz_img_url",
					id: "videoPoster",
					ele: "input",
					val: t.find("video").attr("poster") || "",
					fun: function() {
						var e = $(this).val(),
							a = t.html();
						t.empty().append($(a).attr("poster", e)), i.videoPoster = e, t.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "播放",
					id: "autoPlay_list",
					ele: "select",
					val: j(n, i.autoPlay),
					list: n,
					fun: function() {
						var e = $(this).data().value,
							a = t.html();
						e.indexOf("video_") >= 0 ? $(u).find("._videoEndTu_").show() : $(u).find("._videoEndTu_").hide(), i.autoPlay = e, t.attr("data-config", JSON.stringify(i)), "video_false" == e && (e = !1), e ? t.empty().append($(a).attr("autoplay", e)) : t.empty().append($(a).removeAttr("autoplay")), r.set()
					}
				}, {
					name: ["video视频_播结束后显示封面图"],
					val: ["videoShow"],
					checked: i.videoEndTu ? [!0] : [!1],
					ele: "checkbox",
					class: "_videoEndTu_",
					hide: !(i.autoPlay.indexOf("video_") >= 0),
					fun: function() {
						this.checked ? (i.videoEndTu = !0, $(u).find("._videoEndTu_k_").show()) : (i.videoEndTu = "", $(u).find("._videoEndTu_k_").hide()), t.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "封面链",
					title: "点击封面图链接",
					rule: "sjdz_href_url",
					id: "videoPoster",
					ele: "input",
					class: "_videoEndTu_k_",
					hide: !i.videoEndTu,
					val: i.videoEndTu_k || "",
					fun: function() {
						var e = $(this).val();
						i.videoEndTu_k = e, t.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "循环",
					id: "videoLoop",
					ele: "input_radio",
					val: [{
						val: "true",
						text: "循环播",
						checked: !! i.videoLoop
					}, {
						val: "",
						text: "不循环播",
						checked: !i.videoLoop
					}],
					fun: function() {
						var e = $(this).val(),
							a = t.html();
						e ? t.empty().append($(a).attr("loop", e)) : t.empty().append($(a).removeAttr("loop")), i.videoLoop = e, t.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "控制条",
					id: "videoControls",
					ele: "input_radio",
					val: [{
						val: "true",
						text: "显示",
						checked: !! i.videoControls
					}, {
						val: "",
						text: "不显示",
						checked: !i.videoControls
					}],
					fun: function() {
						var e = $(this).val(),
							a = t.html();
						e ? t.empty().append($(a).attr("controls", e)) : t.empty().append($(a).removeAttr("controls")), i.videoControls = e, t.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "静音",
					id: "videoMuted",
					ele: "input_radio",
					val: [{
						val: "true",
						text: "静音",
						checked: !! i.videoMuted
					}, {
						val: "",
						text: "不静音",
						checked: !i.videoMuted
					}],
					fun: function() {
						var e = $(this).val(),
							a = t.html();
						e ? t.empty().append($(a).removeAttr("muted")) : t.empty().append($(a).attr("muted", e)), i.videoMuted = e, t.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "暂停图",
					id: "stopShowPoster",
					ele: "input_radio",
					val: [{
						val: "true",
						text: "盖封面图",
						checked: !! i.stopShowPoster
					}, {
						val: "",
						text: "不盖",
						checked: !i.stopShowPoster
					}],
					fun: function() {
						var e = $(this).val();
						i.stopShowPoster = e, t.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "转屏",
					id: "autoRotate",
					ele: "input_radio",
					val: [{
						val: "true",
						text: "自动转屏",
						checked: !! i.autoRotate
					}, {
						val: "",
						text: "不转屏",
						checked: !i.autoRotate
					}],
					fun: function() {
						var e = $(this).val();
						i.autoRotate = e, t.attr("data-config", JSON.stringify(i))
					}
				}]
			]
		}, t, e)
	}, g.apwx_jnbo = function(e, a, i) {
		var n = "编辑" + e.attr("appname") || "编辑轮播",
			s = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
			o = s.slider,
			c = s.PagStyle,
			d = s.PagPos,
			f = a.this,
			p = [],
			h = [{
				text: "圆点",
				value: "0"
			}, {
				text: "文本",
				value: "1"
			}, {
				text: "图片",
				value: "2"
			}],
			g = [{
				text: "漂浮",
				value: "0"
			}, {
				text: "左侧",
				value: "1"
			}, {
				text: "右侧",
				value: "2"
			}, {
				text: "顶部",
				value: "3"
			}, {
				text: "底部",
				value: "4"
			}];
		try {
			d > 0 && (f.hasClass("bo_showsPagination") || (f = e.children(".bo_showsPagination")), 1 != d && 2 != d || (s.PagPos_obj[d].height = e[0].offsetHeight, 2 == d && f.css("left", e[0].offsetWidth - f[0].offsetWidth + "px"), f.css("height", e[0].offsetHeight), f.mouseenter()), 0 != d && 3 != d && 4 != d || (s.PagPos_obj[d].width = e[0].offsetWidth, 4 == d && f.css("top", e[0].offsetHeight - f[0].offsetHeight + "px"), f.css("width", e[0].offsetWidth), f.mouseenter()))
		} catch (t) {}
		if (p = [{
			name: "背景色",
			rule: "sjdz_color",
			ele: "input",
			val: s.bgColor || "",
			fun: function() {
				var t = $(this).val();
				e.children(".bo_edit_temp").css("background", t), s.bgColor = t, e.attr("data-config", JSON.stringify(s))
			}
		}, {
			name: "显示",
			ele: "slider",
			val: o,
			app: e,
			e: a,
			fun: function() {
				$(this)
			}
		}], a.this.hasClass("bo_showsPagination")) {
			var m = a.this.find(".pag-type-0").find(".select"),
				v = [!1, "width", "width", "height", "height"];
			if (n = "编辑轮播-Tab", p = [], null != c && p.push({
				name: "风格",
				ele: "select",
				val: j(h, s.PagStyle),
				list: h,
				fun: function() {
					var t = $(this).data().value;
					0 == t && $(u).find("._PagPoswz").find(".list").children("span").eq(0).click(), s.PagStyle = t, f.find(".pag-type-" + t).show().siblings().hide(), e.attr("data-config", JSON.stringify(s)), f.mouseenter(), f.mousedown(), document.onmouseup()
				}
			}), 0 != c && null != c || p.push({
				name: "大小",
				type: "number",
				ele: "input",
				rule: "sjdz_px",
				val: s.PagStyle_obj[0].style && s.PagStyle_obj[0].style.fontSize ? s.PagStyle_obj[0].style.fontSize : 16,
				fun: function() {
					var t = parseInt($(this).val());
					s.PagStyle_obj[0].style || (s.PagStyle_obj[0].style = {}), s.PagStyle_obj[0].style.fontSize = t, f.find(".pag-type-0").find("span").css({
						width: t + "px",
						height: t + "px"
					}), e.attr("data-config", JSON.stringify(s)), r.set()
				}
			}, {
				name: "选中色",
				rule: "sjdz_color",
				ele: "input",
				val: m.css("background") || "",
				fun: function() {
					var t = $(this).val();
					m.css("background", t), s.page_color_select = t, s.PagStyle_obj[0].style || (s.PagStyle_obj[0].style = {}), s.PagStyle_obj[0].style.select_bgColor = t, e.attr("data-config", JSON.stringify(s))
				}
			}, {
				name: "默认色",
				rule: "sjdz_color",
				ele: "input",
				val: s.PagStyle_obj[0].style ? s.PagStyle_obj[0].style.bgColor : "rgba(255, 255, 255, 0.5)",
				fun: function() {
					var t = $(this).val();
					s.PagStyle_obj[0].style || (s.PagStyle_obj[0].style = {}), s.PagStyle_obj[0].style.bgColor = t, f.find(".pag-type-0").find("span").not(".select").css("background", t), e.attr("data-config", JSON.stringify(s))
				}
			}, {
				name: "间距",
				type: "number",
				ele: "input_range",
				min: 4,
				max: 100,
				val: s.PagStyle_obj[0].style ? s.PagStyle_obj[0].style.margin ? s.PagStyle_obj[0].style.margin : 16 : 6,
				fun: function() {
					var t = parseInt($(this).val());
					s.PagStyle_obj[0].style || (s.PagStyle_obj[0].style = {}), s.PagStyle_obj[0].style.margin = t, f.find(".pag-type-0").find("span").css("margin", t + "px"), e.attr("data-config", JSON.stringify(s))
				}
			}), c > 0 && p.push({
				name: "位置",
				ele: "select",
				val: j(g, s.PagPos),
				class: "_PagPoswz",
				list: g,
				fun: function() {
					var t, a = $(this).data().value,
						i = v[a],
						n = s.PagPos;
					s.PagPos = a, 1 != a && 2 != a || (s.PagPos_obj[a].height = e[0].offsetHeight, t = s.PagPos_obj[a], f.find(".pagflex").css({
						width: "0px",
						height: "6000px"
					}), c > 0 && f.find(".pagflex").css("padding", +s.PagStyle_obj[c].style.partial + "px 0 0 0"), f.find(".pag-type-2").find("span").css("display", "block")), 0 == n && (s.PagPos_obj[0].width = f[0].offsetWidth, s.PagPos_obj[0].height = f[0].offsetHeight, s.PagPos_obj[0].left = f[0].offsetLeft, s.PagPos_obj[0].top = f[0].offsetTop), 0 != a && 3 != a && 4 != a || (a > 0 && (s.PagPos_obj[a].width = e[0].offsetWidth), t = s.PagPos_obj[a], f.find(".pagflex").css({
						width: "6000px",
						height: "0px"
					}), c > 0 && f.find(".pagflex").css("padding", "0 0 0 " + s.PagStyle_obj[c].style.partial + "px"), f.find(".pag-type-2").find("span").css("display", "inline-flex")), f.css({
						width: t.width + "px",
						height: t.height + "px",
						left: t.left + "px",
						top: t.top + "px"
					}), w(i, t[i], a), a > 0 ? f.attr("waria-locking", !0) : f.removeAttr("waria-locking"), t || layer.msg("此模块太古老不支持此功能，请重新添加轮播模块后再试"), e.attr("data-config", JSON.stringify(s)), e.mouseenter(), e.mousedown(), document.onmouseup(), f.mouseenter(), f.mousedown(), document.onmouseup()
				}
			}), d > 0 ? (e.children(".bo_showsPagination").find(".pagflex").css({
				height: "0px",
				"flex-direction": "",
				display: ""
			}), p.push({
				name: "width" == v[s.PagPos] ? "TAB宽" : "TAB高",
				type: "number",
				ele: "input",
				rule: "sjdz_px",
				val: s.PagPos_obj[s.PagPos][v[s.PagPos]] || 60,
				class: "_cdshow1_",
				fun: function() {
					var t = parseInt($(this).val());
					s.PagPos_obj[s.PagPos][v[s.PagPos]] = t, w(v[s.PagPos], t, s.PagPos), e.attr("data-config", JSON.stringify(s)), r.set()
				}
			})) : (e.children(".bo_showsPagination").find(".pagflex").css({
				height: "6000px",
				"flex-direction": s.PagPos_obj[0].flexDirection,
				display: "flex"
			}), c > 0 && p.push({
				name: "排列",
				ele: "input_radio",
				val: [{
					val: "row",
					text: "水平",
					checked: "column" != s.PagPos_obj[0].flexDirection
				}, {
					val: "column",
					text: "垂直",
					checked: "column" == s.PagPos_obj[0].flexDirection
				}],
				fun: function() {
					var t = $(this).val();
					try {
						if (s.PagPos_obj[0].flexDirection = t, e.attr("data-config", JSON.stringify(s)), "row" == t) {
							e.children(".bo_showsPagination").find(".pagflex").css({
								"flex-direction": "row"
							}), $(u).find("._partial_").find(".name").text("左偏移");
							t = $(u).find("._partial_").find(".setinput").val();
							f.find(".pag-type-1").find(".pagflex").css("padding", "0 0 0 " + t + "px"), f.find(".pag-type-2").find(".pagflex").css("padding", "0 0 0 " + t + "px")
						} else {
							e.children(".bo_showsPagination").find(".pagflex").css({
								display: "flex",
								"flex-direction": "column"
							}), $(u).find("._partial_").find(".name").text("上偏移");
							t = $(u).find("._partial_").find(".setinput").val();
							f.find(".pag-type-1").find(".pagflex").css("padding", +t + "px 0 0 0"), f.find(".pag-type-2").find(".pagflex").css("padding", +t + "px 0 0 0")
						}
						r.set()
					} catch (t) {}
				}
			})), 1 == c) {
				var x = f.find(".pag-type-1").find("span")[0],
					y = Math.floor((x.offsetWidth < x.offsetHeight ? x.offsetWidth : x.offsetHeight) / 2),
					b = s.PagStyle_obj[c];
				b ? (p.push({
					ele: "line",
					val: 1
				}), $.each(s.slider, function(t, a) {
					var i = b.content[t] || t + 1;
					p.push({
						name: "标题" + (t + 1),
						ele: "input",
						val: i,
						fun: function() {
							var a = $(this).val();
							f.find(".pag-type-1").find("span").eq(t).text(a), s.PagStyle_obj[1].content[t] = a, e.attr("data-config", JSON.stringify(s)), r.set()
						}
					})
				}), p.push({
					ele: "line",
					val: 1
				}, {
					name: "宽高",
					type: "number",
					ele: "inputs",
					rule: "sjdz_px",
					val: [s.PagStyle_obj[1].style.width, s.PagStyle_obj[1].style.height],
					fun: function() {
						var t = parseInt($(this).val()),
							a = 0 == $(this).attr("data-key") ? "width" : "height";
						f.find(".pag-type-1").find("span").css(a, t + "px"), s.PagStyle_obj[1].style[a] = t, e.attr("data-config", JSON.stringify(s)), r.set()
					}
				}, {
					name: "字号",
					type: "number",
					ele: "input",
					rule: "sjdz_px",
					val: s.PagStyle_obj[1].style.fontSize,
					fun: function() {
						var t = parseInt($(this).val());
						f.find(".pag-type-1").find("span").css("font-size", t + "px"), s.PagStyle_obj[1].style.fontSize = t, e.attr("data-config", JSON.stringify(s)), r.set()
					}
				}, {
					name: "字色",
					rule: "sjdz_color",
					ele: "input",
					val: s.PagStyle_obj[1].style.color,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").find("span").css("color", t), f.find(".pag-type-1").find("span.select").css("color", s.PagStyle_obj[1].style.select_color), s.PagStyle_obj[1].style.color = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "字背景",
					rule: "sjdz_color",
					ele: "input",
					val: s.PagStyle_obj[1].style.bgColor,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").find("span").css("background-color", t), f.find(".pag-type-1").find("span.select").css("background-color", s.PagStyle_obj[1].style.select_bgColor), s.PagStyle_obj[1].style.bgColor = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "选中色",
					rule: "sjdz_color",
					ele: "input",
					val: s.PagStyle_obj[1].style.select_color,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").find("span.select").css("color", t), s.PagStyle_obj[1].style.select_color = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "选中背色",
					rule: "sjdz_color",
					ele: "input",
					val: s.PagStyle_obj[1].style.select_bgColor,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").find("span.select").css("background-color", t), s.PagStyle_obj[1].style.select_bgColor = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "圆角",
					type: "number",
					ele: "input_range",
					min: 0,
					max: y,
					val: s.PagStyle_obj[1].style.borderRadius || 0,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").find("span").css("border-radius", t + "px"), s.PagStyle_obj[1].style.borderRadius = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "左距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 100,
					val: s.PagStyle_obj[1].style.left || 0,
					fun: function() {
						var t = parseInt($(this).val());
						f.find(".pag-type-1").find("span").css("margin-left", t + "px"), s.PagStyle_obj[1].style.left = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "上距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 100,
					val: s.PagStyle_obj[1].style.top || 0,
					fun: function() {
						var t = parseInt($(this).val());
						f.find(".pag-type-1").find("span").css("margin-top", t + "px"), s.PagStyle_obj[1].style.top = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "width" == v[s.PagPos] || "column" == s.PagPos_obj[d].flexDirection ? "上偏移" : "左偏移",
					type: "number",
					ele: "input_range",
					class: "_partial_",
					min: 0,
					max: 500,
					val: s.PagStyle_obj[1].style.partial || 0,
					fun: function() {
						var t = parseInt($(this).val());
						1 != d && 2 != d || (t < 0 ? f.find(".pag-type-1").find(".pagflex").css("margin", +t + "px 0 0 0") : f.find(".pag-type-1").find(".pagflex").css("margin", ""), f.find(".pag-type-1").find(".pagflex").css("padding", +t + "px 0 0 0")), 0 != d && 3 != d && 4 != d || ("column" == s.PagPos_obj[d].flexDirection ? (t < 0 ? f.find(".pag-type-1").find(".pagflex").css("margin", +t + "px 0 0 0") : f.find(".pag-type-1").find(".pagflex").css("margin", ""), f.find(".pag-type-1").find(".pagflex").css("padding", +t + "px 0 0 0")) : (t < 0 ? f.find(".pag-type-1").find(".pagflex").css("margin", "0 0 0 " + t + "px") : f.find(".pag-type-1").find(".pagflex").css("margin", ""), f.find(".pag-type-1").find(".pagflex").css("padding", "0 0 0 " + t + "px"))), s.PagStyle_obj[1].style.partial = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "背景色",
					rule: "sjdz_color",
					ele: "input",
					val: s.PagStyle_obj[1].style.pag_bgColor,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").css("background-color", t), s.PagStyle_obj[1].style.pag_bgColor = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "背景图",
					rule: "sjdz_img_url",
					ele: "input",
					val: s.PagStyle_obj[1].style.pagSrc,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-1").css("background-image", "url(" + t + ")"), N(t, function(t, a) {
							s.PagStyle_obj[1].style.pagSrc_width = t, s.PagStyle_obj[1].style.pagSrc_height = a, e.attr("data-config", JSON.stringify(s))
						}), s.PagStyle_obj[1].style.pagSrc = t, e.attr("data-config", JSON.stringify(s)), r.set()
					}
				})) : layer.msg("此模块太古老不支持此功能，请重新添加轮播模块后再试")
			}
			if (2 == c) {
				var S = s.PagStyle_obj[c];
				S ? ($.each(s.slider, function(t, a) {
					var i = S.content[t] ? S.content[t].
				default:
					"",
						n = S.content[t] ? S.content[t].select : "";
					p.push({
						ele: "line",
						val: 1
					}, {
						name: "图" + (t + 1),
						rule: "sjdz_img_url",
						ele: "input",
						val: i,
						fun: function() {
							var a = $(this).val();
							s.PagStyle_obj[2].content[t] ? (s.PagStyle_obj[2].content[t].
						default = a, f.find(".pag-type-2").find("span").eq(t).find("img").attr("src", a)) : s.PagStyle_obj[2].content[t] = {
							default:
								a
							}, e.attr("data-config", JSON.stringify(s)), r.set()
						}
					}, {
						name: "图" + (t + 1) + "选中",
						rule: "sjdz_img_url",
						ele: "input",
						val: n,
						fun: function() {
							var a = $(this).val();
							s.PagStyle_obj[2].content[t] ? s.PagStyle_obj[2].content[t].select = a : s.PagStyle_obj[2].content[t] = {
								select: a
							}, f.find(".pag-type-2").find("span").eq(t).find("img").attr("src", a), e.attr("data-config", JSON.stringify(s)), r.set()
						}
					})
				}), p.push({
					ele: "line",
					val: 1
				}, {
					name: "宽高",
					type: "number",
					ele: "inputs",
					rule: "sjdz_px",
					val: [s.PagStyle_obj[2].style.width, s.PagStyle_obj[2].style.height],
					fun: function() {
						var t = parseInt($(this).val()),
							a = 0 == $(this).attr("data-key") ? "width" : "height";
						f.find(".pag-type-2").find("span").css(a, t + "px"), s.PagStyle_obj[2].style[a] = t, e.attr("data-config", JSON.stringify(s)), r.set()
					}
				}, {
					name: "左距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 100,
					val: s.PagStyle_obj[2].style.left || 0,
					fun: function() {
						var t = parseInt($(this).val());
						f.find(".pag-type-2").find("span").css("margin-left", t + "px"), s.PagStyle_obj[2].style.left = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "上距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 100,
					val: s.PagStyle_obj[2].style.top || 0,
					fun: function() {
						var t = parseInt($(this).val());
						f.find(".pag-type-2").find("span").css("margin-top", t + "px"), s.PagStyle_obj[2].style.top = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "width" == v[s.PagPos] || "column" == s.PagPos_obj[d].flexDirection ? "上偏移" : "左偏移",
					type: "number",
					ele: "input_range",
					class: "_partial_",
					min: 0,
					max: 500,
					val: s.PagStyle_obj[2].style.partial || 0,
					fun: function() {
						var t = parseInt($(this).val());
						1 != d && 2 != d || (t < 0 ? f.find(".pag-type-2").find(".pagflex").css("margin", +t + "px 0 0 0") : f.find(".pag-type-2").find(".pagflex").css("margin", ""), f.find(".pag-type-2").find(".pagflex").css("padding", +t + "px 0 0 0")), 0 != d && 3 != d && 4 != d || ("column" == s.PagPos_obj[d].flexDirection ? (t < 0 ? f.find(".pag-type-2").find(".pagflex").css("margin", +t + "px 0 0 0") : f.find(".pag-type-2").find(".pagflex").css("margin", ""), f.find(".pag-type-2").find(".pagflex").css("padding", +t + "px 0 0 0")) : (t < 0 ? f.find(".pag-type-2").find(".pagflex").css("margin", "0 0 0 " + t + "px") : f.find(".pag-type-2").find(".pagflex").css("margin", ""), f.find(".pag-type-2").find(".pagflex").css("padding", "0 0 0 " + t + "px"))), s.PagStyle_obj[2].style.partial = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "背景色",
					rule: "sjdz_color",
					ele: "input",
					val: s.PagStyle_obj[2].style.pag_bgColor,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-2").css("background-color", t), s.PagStyle_obj[2].style.pag_bgColor = t, e.attr("data-config", JSON.stringify(s))
					}
				}, {
					name: "背景图",
					rule: "sjdz_img_url",
					ele: "input",
					val: s.PagStyle_obj[2].style.pagSrc,
					fun: function() {
						var t = $(this).val();
						f.find(".pag-type-2").css("background-image", "url(" + t + ")"), N(t, function(t, a) {
							s.PagStyle_obj[2].style.pagSrc_width = t, s.PagStyle_obj[2].style.pagSrc_height = a, e.attr("data-config", JSON.stringify(s))
						}), s.PagStyle_obj[2].style.pagSrc = t, e.attr("data-config", JSON.stringify(s)), r.set()
					}
				})) : layer.msg("此模块太古老不支持此功能，请重新添加轮播模块后再试")
			}
			function w(t, a, i) {
				e.children(".bo_edit_temp").css({
					left: "",
					top: "",
					width: "100%",
					height: "100%"
				}), t && (e.children(".boSlider").css({
					left: "",
					top: "",
					width: "100%",
					height: "100%"
				}), e.children(".bo_edit_temp").css(t, "calc( 100% - " + a + "px )"), e.children(".boSlider").css(t, "calc( 100% - " + a + "px )"), 1 == i && (e.children(".bo_edit_temp").css("left", a + "px"), e.children(".boSlider").css("left", a + "px")), 3 == i && (e.children(".bo_edit_temp").css("top", a + "px"), e.children(".boSlider").css("top", a + "px")), 2 == i && (f.css("left", e[0].offsetWidth - a + "px"), s.PagPos_obj[s.PagPos].left = e[0].offsetWidth - a), 4 == i && (f.css("top", e[0].offsetHeight - a + "px"), s.PagPos_obj[s.PagPos].top = e[0].offsetHeight - a), f.css(t, a + "px")), f.mouseenter()
			}
		}
		if (a.this.hasClass("bo_prev") || a.this.hasClass("bo_next")) {
			var k = a.this.children("img").attr("src");
			n = a.this.hasClass("bo_prev") ? "轮播箭头编辑-左" : "轮播箭头编辑-右", p = [{
				name: "替换图片",
				ele: "image",
				val: k,
				href: -1,
				group: 1,
				fun: function() {
					var i = $(this).attr("class"),
						n = $(this).val() || "";
					if ("imageInput" == i && n && k != n && (a.this.children("img").attr("src", n), $(this).parents(".ui-image-rot").find("img").attr("src", n), N(n, function(t, i) {
						a.this.hasClass("bo_prev") ? (s.prev_next.prev_pSrc = n, s.prev_next.prev_width = t, s.prev_next.prev_height = i) : (s.prev_next.next_pSrc = n, s.prev_next.next_width = t, s.prev_next.next_height = i), e.attr("data-config", JSON.stringify(s)), a.this.css({
							width: t + "px",
							height: i + "px"
						}), a.this.mouseenter(), r.set()
					})), "uiSetImage" == i) {
						var l = $(this).siblings("input");
						t.tu(function(t) {
							l.val(t)[0].onkeyup()
						})
					}
				}
			}]
		}
		_({
			name: n,
			tabs: ["内容设置", "轮播设置"],
			controls: [p, [{
				name: "轮播",
				id: "autoPlay",
				ele: "input_radio",
				val: [{
					val: "true",
					text: "自动轮播",
					checked: "true" == s.autoPlay
				}, {
					val: "false",
					text: "不自播",
					checked: "false" == s.autoPlay
				}],
				fun: function() {
					var t = $(this).val();
					s.autoPlay = t, e.attr("data-config", JSON.stringify(s))
				}
			}, {
				name: "循环",
				id: "loop",
				ele: "input_radio",
				val: [{
					val: "true",
					text: "循环轮播",
					checked: "true" == s.loop
				}, {
					val: "false",
					text: "不循环",
					checked: "false" == s.loop
				}],
				fun: function() {
					var t = $(this).val();
					s.loop = t, e.attr("data-config", JSON.stringify(s))
				}
			}, {
				name: "触点",
				id: "showsPagination",
				ele: "input_radio",
				class: "_child_Pagination_show",
				val: [{
					val: "true",
					text: "显示触点",
					checked: "true" == s.showsPagination
				}, {
					val: "false",
					text: "不显示",
					checked: "false" == s.showsPagination
				}],
				fun: function() {
					var t = $(this).val(),
						i = a.this.attr("data-i");
					s.showsPagination = t, e.attr("data-config", JSON.stringify(s)), "true" == t ? (e.find(".bo_showsPagination").css("visibility", "visible"), $(".jedit-box-" + i).show()) : (e.find(".bo_showsPagination").css("visibility", "hidden"), $(".jedit-box-" + i).hide()), r.set()
				}
			}, {
				name: "箭头",
				id: "prev_next",
				ele: "input_radio",
				class: "prev_next_show",
				val: [{
					val: "true",
					text: "显示箭头",
					checked: !! s.prev_next && "true" == s.prev_next.show
				}, {
					val: "false",
					text: "不显示",
					checked: !s.prev_next || "false" == s.prev_next.show
				}],
				fun: function() {
					var t = $(this).val();
					if (s.prev_next) s.prev_next.show = t, "true" == t ? (e.children(".bo_prev").css("visibility", "visible"), e.children(".bo_next").css("visibility", "visible")) : (e.children(".bo_prev").css("visibility", "hidden"), e.children(".bo_next").css("visibility", "hidden")), e.attr("data-config", JSON.stringify(s));
					else {
						s.prev_next = {
							show: "true",
							prev_pSrc: "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01FzDVbS1VY9dz5iCXR_!!1867852664.png",
							next_pSrc: "https://img.alicdn.com/imgextra/i4/1867852664/O1CN01MT5VTI1VY9dwO0XSl_!!1867852664.png",
							prev_width: 48,
							prev_height: 48,
							next_width: 48,
							next_height: 48
						}, e.append('<span class="bo_prev wdraggable-ui-children" disabled-resizable="true" data-child-type-extend="prev"><img src="' + s.prev_next.prev_pSrc + '" /></span><span class="bo_next wdraggable-ui-children" disabled-resizable="true" data-child-type-extend="next"><img src="' + s.prev_next.next_pSrc + '" /></span>'), e.attr("data-config", JSON.stringify(s));
						var a = {
							dom: e,
							appType: "apwx_jnbo",
							config: s,
							pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
						};
						l.d(a, i)
					}
					r.set()
				}
			}, {
				name: "时长",
				type: "number",
				ele: "input_range",
				min: 1e3,
				max: 9e3,
				val: s.autoPlayInterval,
				fun: function() {
					var t = $(this).val();
					s.autoPlayInterval = t, e.attr("data-config", JSON.stringify(s))
				}
			}, {
				name: ["开启子动画无闪切换"],
				val: ["videoShow"],
				checked: s.children_kcdh ? [!0] : [!1],
				ele: "checkbox",
				class: "_page_ovhi_",
				fun: function() {
					this.checked ? s.children_kcdh = !0 : s.children_kcdh = "", e.attr("data-config", JSON.stringify(s))
				}
			}]]
		}, e, a)
	}, g.apwx_jdtuhd = function(t, e, a) {
		var i = "编辑" + t.attr("appname") || "编辑多图滑动",
			n = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			s = n.slider,
			o = e.this,
			c = [],
			d = [{
				text: "圆点",
				value: "0"
			}, {
				text: "小长条",
				value: "1"
			}, {
				text: "大长条",
				value: "2"
			}, {
				text: "数字",
				value: "3"
			}],
			f = g(s, -1);

		function u(e, i) {
			n.slider = e, J(t.attr("appid"), t.attr("data-apptype"));
			var s = {
				dom: t,
				appType: "apwx_jdtuhd",
				config: n,
				child_data: JSON.parse(t.attr("data-child_data")),
				pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft,
				transform: g(e, i)
			};
			l.d(s, a)
		}
		function g(t, e) {
			var a = 0;
			return $.each(t, function(t, i) {
				if (parseInt(e) == parseInt(t)) return !1;
				a += i.img_width + parseInt(n.slider_right)
			}), parseInt(a)
		}
		$(h).bind("click", function() {
			if ("resizable" == $(this).attr("ck-type")) try {
				var e = Math.ceil(f / t[0].offsetWidth),
					a = "",
					i = t.children(".box_pagination").children(".d")[0].outerHTML,
					s = t.children(".box_pagination").children(".select")[0].outerHTML;
				if (i && n.PagStyle < 3) {
					for (let t = 0; t < e; t++) 0 != t && (a += i);
					t.children(".box_pagination").html(s + a)
				}
				3 == n.PagStyle && t.children(".box_pagination").children(".total").html(e)
			} catch (t) {}
		}), c = [{
			name: "显示",
			id: "nr",
			ele: "input_radio",
			val: [{
				val: "1",
				text: "图片",
				checked: 1 == n.show
			}, {
				val: "2",
				text: "自定义",
				checked: 2 == n.show
			}],
			fun: function() {
				var e = $(this).val();
				t.children(".child_page").remove(), n.show = e, t.attr("data-config", JSON.stringify(n)), u(s, t.children(".box").attr("data-key") || 0), o.mouseenter(), o.mousedown(), document.onmouseup(), r.set()
			}
		}, {
			name: "编辑自定义",
			ele: "textarea",
			class: "customContent",
			tip: "自定义时，子内容宽度大于750可以右滑，并自动计算分页！",
			hide: 2 != n.show,
			val: n.customContent ? JSON.stringify(n.customContent) : "",
			fun: function() {
				if ($(this).hasClass("tarea")) if ($(this).val()) try {
					var e = JSON.parse($(this).val());
					if ("number" == typeof e) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val(""), !1;
					e = O(e), n.customContent = e, t.attr("data-config", JSON.stringify(n)), t.children(".child_page").remove(), u(s, t.children(".box").attr("data-key") || 0)
				} catch (t) {
					layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
						tips: 2,
						time: 3e3
					}), $(this).val("")
				} else n.customContent = "", t.attr("data-config", JSON.stringify(n)), t.children(".child_page").remove();
				else {
					var a = $(".child_open_start");
					customContent = n.customContent ? JSON.stringify(n.customContent) : "", a.attr("data-wh", '{"w":"' + t.width() + '","h":"' + t.height() + '","child":"auto"}'), a.attr("data-textarea", customContent), a.attr("data-appid", n.appID), a.attr("data-val", "customContent"), a.click(), $(p).mousedown(), r.allRemove()
				}
			}
		}, {
			name: "图片",
			ele: "slider_tu",
			val: s,
			app: t,
			e: e,
			hide: 1 != n.show,
			fun: {
				change: function(e, a) {
					var i = t.children(".box").children(".dtu"),
						n = g(e, a);
					i.length && i.css("transform", "translate3d(-" + n + "px, 0px, 0px)")
				},
				image: function(t, e) {
					u(t, e)
				},
				add: function(e) {
					t.children(".box").append('<a class="dtu" data-key="' + e + '" href="" onclick="return false"><img src=""></a>')
				},
				del: function(t, e) {
					u(t, e)
				}
			}
		}, {
			ele: "line",
			val: 2,
			hide: 1 != n.show
		}, {
			name: "右间距",
			type: "number",
			ele: "input_range",
			min: 0,
			max: 100,
			val: n.slider_right,
			hide: 1 != n.show,
			fun: function() {
				var e = $(this).val();
				n.slider_right = e, t.children(".box").children().css("margin-right", e + "px"), t.attr("data-config", JSON.stringify(n))
			}
		}], e.this.hasClass("box_pagination") && (i = "编辑多图滑动-分页", c = [{
			name: "风格",
			ele: "select",
			val: j(d, n.PagStyle),
			list: d,
			fun: function() {
				var e = $(this).data().value;
				n.PagStyle = e, 0 == e && (n.page_width = 16, n.page_width_select = 16, n.page_height = 16, n.page_margin = 6, n.page_radius = 8), 1 == e && (n.page_width = 40, n.page_width_select = 40, n.page_height = 4, n.page_margin = 6, n.page_radius = 0), 2 == e && (n.page_width = 30, n.page_width_select = 60, n.page_height = 4, n.page_margin = 0, n.page_radius = 0), t.attr("data-config", JSON.stringify(n)), u(s, t.children(".box").attr("data-key") || 0), o.mouseenter(), o.mousedown(), document.onmouseup(), r.set()
			}
		}, {
			name: "默认色",
			rule: "sjdz_color",
			ele: "input",
			val: n.page_color,
			hide: 3 == n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_color = e, t.children(".box_pagination").children(".d").css("background", e), t.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "本页色",
			rule: "sjdz_color",
			ele: "input",
			val: n.page_color_select,
			hide: 3 == n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_color_select = e, t.children(".box_pagination").children(".select").css("background", e), t.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "条宽",
			rule: "sjdz_px",
			ele: "input",
			val: n.page_width,
			hide: 1 != n.PagStyle && 2 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_width = e, t.children(".box_pagination").children(".d").css("width", e + "px"), t.attr("data-config", JSON.stringify(n)), r.set()
			}
		}, {
			name: "条高",
			rule: "sjdz_px",
			ele: "input",
			val: n.page_height,
			hide: 1 != n.PagStyle && 2 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_height = e, t.children(".box_pagination").children().css("height", e + "px"), t.attr("data-config", JSON.stringify(n)), r.set()
			}
		}, {
			name: "本页宽",
			rule: "sjdz_px",
			ele: "input",
			val: n.page_width_select,
			hide: 1 != n.PagStyle && 2 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_width_select = e, t.children(".box_pagination").children(".select").css("width", e + "px"), t.attr("data-config", JSON.stringify(n)), r.set()
			}
		}, {
			name: "条圆角",
			type: "number",
			ele: "input_range",
			min: 0,
			max: Math.floor(n.page_height / 2),
			val: n.page_radius,
			hide: 1 != n.PagStyle && 2 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_radius = e, t.children(".box_pagination").children().css("border-radius", e + "px"), t.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "字大小",
			rule: "sjdz_px",
			ele: "input",
			val: n.page_wz_size,
			hide: 3 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_wz_size = e, t.children(".box_pagination").children().css("font-size", e + "px"), t.attr("data-config", JSON.stringify(n)), r.set()
			}
		}, {
			name: "总页字",
			rule: "sjdz_color",
			ele: "input",
			val: n.page_wz_color,
			hide: 3 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_wz_color = e, t.children(".box_pagination").children(".d").css("color", e), t.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "当页字",
			rule: "sjdz_color",
			ele: "input",
			val: n.page_wz_color_select,
			hide: 3 != n.PagStyle,
			fun: function() {
				var e = $(this).val();
				n.page_wz_color_select = e, t.children(".box_pagination").children(".select").css("color", e), t.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "间距",
			title: "请输入分页提示间距",
			type: "number",
			ele: "input_range",
			min: 0,
			max: 100,
			val: n.page_margin,
			fun: function() {
				var e = $(this).val();
				n.page_margin = e, t.children(".box_pagination").children().css("margin", "0 " + e + "px"), t.attr("data-config", JSON.stringify(n))
			}
		}]), _({
			name: i,
			tabs: ["内容设置", "分页显示"],
			controls: [c, [{
				name: "分页",
				id: "showsPagination",
				ele: "input_radio",
				class: "_child_Pagination_show",
				val: [{
					val: "true",
					text: "显示分页",
					checked: "true" == n.showsPagination
				}, {
					val: "false",
					text: "不显示",
					checked: "false" == n.showsPagination
				}],
				fun: function() {
					var e = $(this).val();
					n.showsPagination = e, t.attr("data-config", JSON.stringify(n)), "true" == e ? t.children(".box_pagination").css("visibility", "visible") : t.children(".box_pagination").css("visibility", "hidden"), r.set()
				}
			}]]
		}, t, e)
	}, g.apwx_jxdh = function(e, a) {
		var i = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
			n = a.this.children().children("img.pic").attr("src") || "",
			s = i.customContent ? JSON.stringify(i.customContent) : "",
			o = [{
				text: "均速移动",
				value: "linear"
			}, {
				text: "由快到慢",
				value: "ease"
			}, {
				text: "由快到慢(缓)",
				value: "cubic-bezier(0,0,0.1,1)"
			}, {
				text: "由慢到快",
				value: "ease-in"
			}, {
				text: "弹性抖动",
				value: "cubic-bezier(0.5, 1.6, 0.3, 0.6)"
			}, {
				text: "终点多弹(新)",
				value: "easeOutBounce"
			}],
			c = [{
				text: "一直显示",
				value: "1|1"
			}, {
				text: "淡入显示",
				value: "0|1"
			}, {
				text: "淡出显示",
				value: "1|0"
			}],
			d = [{
				text: "无缩放",
				value: "scale(1, 1)"
			}, {
				text: "缩放至消失",
				value: "scale(0.001, 0.001)"
			}, {
				text: "缩放至0.2倍",
				value: "scale(0.2, 0.2)"
			}, {
				text: "缩放至0.4倍",
				value: "scale(0.4, 0.4)"
			}, {
				text: "缩放至0.5倍",
				value: "scale(0.5, 0.5)"
			}, {
				text: "缩放至0.6倍",
				value: "scale(0.6, 0.6)"
			}, {
				text: "缩放至0.8倍",
				value: "scale(0.8, 0.8)"
			}, {
				text: "缩放至0.9倍",
				value: "scale(0.9, 0.9)"
			}, {
				text: "缩放至1.1倍",
				value: "scale(1.1, 1.1)"
			}, {
				text: "缩放至1.2倍",
				value: "scale(1.2, 1.2)"
			}, {
				text: "缩放至1.3倍",
				value: "scale(1.3, 1.3)"
			}, {
				text: "缩放至1.5倍",
				value: "scale(1.5, 1.5)"
			}, {
				text: "缩放至1.8倍",
				value: "scale(1.8, 1.8)"
			}, {
				text: "缩放至2倍",
				value: "scale(2, 2)"
			}, {
				text: "0.1倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.1, 0.1)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.2倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.2, 0.2)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.3倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.3, 0.3)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.4倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.4, 0.4)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.5倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.5, 0.5)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.6倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.6, 0.6)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.7倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.7, 0.7)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.8倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.8, 0.8)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.9倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.9, 0.9)","scale_2":"scale(1, 1)"}'
			}, {
				text: "10倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(10, 10)","scale_2":"scale(1, 1)"}'
			}, {
				text: "8倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(8, 8)","scale_2":"scale(1, 1)"}'
			}, {
				text: "6倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(6, 6)","scale_2":"scale(1, 1)"}'
			}, {
				text: "4倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(4, 4)","scale_2":"scale(1, 1)"}'
			}, {
				text: "2倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(2, 2)","scale_2":"scale(1, 1)"}'
			}],
			f = [{
				text: "无翻转",
				value: "rotate(0deg)"
			}, {
				text: "旋转720",
				value: "rotate(720deg)"
			}, {
				text: "旋转360",
				value: "rotate(360deg)"
			}, {
				text: "旋转270",
				value: "rotate(270deg)"
			}, {
				text: "旋转180",
				value: "rotate(180deg)"
			}, {
				text: "旋转90",
				value: "rotate(90deg)"
			}, {
				text: "旋转45",
				value: "rotate(45deg)"
			}, {
				text: "旋转20",
				value: "rotate(20deg)"
			}, {
				text: "旋转-720",
				value: "rotate(-720deg)"
			}, {
				text: "旋转-360",
				value: "rotate(-360deg)"
			}, {
				text: "旋转-270",
				value: "rotate(-270deg)"
			}, {
				text: "旋转-180",
				value: "rotate(-180deg)"
			}, {
				text: "旋转-90",
				value: "rotate(-90deg)"
			}, {
				text: "旋转-45",
				value: "rotate(-45deg)"
			}, {
				text: "旋转-20",
				value: "rotate(-20deg)"
			}, {
				text: "横向翻转",
				value: "rotateX(360deg)"
			}, {
				text: "纵向翻转",
				value: "rotateY(360deg)"
			}];
		_({
			name: "编辑" + e.attr("appname") || "编辑循环动画",
			tabs: ["内容设置", "动效设置"],
			controls: [
				[{
					name: "显示",
					id: "nr",
					ele: "input_radio",
					val: [{
						val: "1",
						text: "图片",
						checked: 1 == i.show
					}, {
						val: "2",
						text: "自定义",
						checked: 2 == i.show
					}],
					fun: function() {
						var t = $(this).val();
						if (1 == t) {
							try {
								i.memoryPagewh = {
									W: e.width(),
									H: e.height()
								}, e.css({
									width: i.memoryImgwh.W,
									height: i.memoryImgwh.H
								}), a.this.mouseenter()
							} catch (t) {}
							$(u).find(".pSrc").show(), $(u).find(".customContent").hide(), e.children("a.pic_href").show(), e.children(".child_page").hide(), a.this.css({
								display: "flex",
								"justify-content": "center",
								"align-items": "center"
							})
						} else {
							try {
								i.memoryImgwh = {
									W: e.width(),
									H: e.height()
								}, e.css({
									width: i.memoryPagewh.W,
									height: i.memoryPagewh.H
								}), a.this.mouseenter()
							} catch (t) {}
							$(u).find(".pSrc").hide(), $(u).find(".customContent").show(), e.children("a.pic_href").hide(), e.children(".child_page").show(), a.this.css({
								display: "",
								"justify-content": "",
								"align-items": ""
							})
						}
						i.show = t, e.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "替换图片",
					ele: "image",
					val: n,
					class: "pSrc",
					href: a.this.find("a").attr("href") || "",
					group: 1,
					hide: 1 != i.show,
					fun: function() {
						var s = $(this).attr("class"),
							l = $(this).val() || "";
						if ("imageHref" == s && (a.this.find("a").attr("href", l), i.pSrc_href = l, e.attr("data-config", JSON.stringify(i))), "imageInput" == s && (a.this.attr("data-prev", '{"W":' + a.this[0].offsetWidth + ',"H":' + a.this[0].offsetHeight + "}"), l && l != n && (a.this.children(".pic_href").find("img").attr("src", l), $(this).parents(".ui-image-rot").find("img").attr("src", l), N(l, function(t, n) {
							i.pSrc = l, i.pSrc_width = t, i.pSrc_height = n, a.this.css({
								width: t + "px",
								height: n + "px"
							}), a.this.mouseenter(), a.this.mousedown(), document.onmouseup(), e.attr("data-config", JSON.stringify(i)), r.set()
						}))), "uiSetImage" == s) {
							var o = $(this).siblings("input");
							t.tu(function(t) {
								o.val(t)[0].onkeyup()
							})
						}
					}
				}, {
					name: "恢复上次宽高",
					ele: "buttom",
					class: "pSrc",
					hide: 1 != i.show,
					fun: function() {
						var t = a.this.attr("data-prev");
						if (t) try {
							t = JSON.parse(t), a.this.css({
								width: t.W + "px",
								height: t.H + "px"
							}), a.this.mouseenter(), a.this.mousedown(), document.onmouseup(), r.set()
						} catch (t) {}
					}
				}, {
					name: "编辑自定义",
					ele: "textarea",
					class: "customContent",
					hide: 2 != i.show,
					val: s,
					fun: function() {
						if ($(this).hasClass("tarea")) if ($(this).val()) try {
							var t = JSON.parse($(this).val());
							if ("number" == typeof t) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
								tips: 2,
								time: 3e3
							}), $(this).val(""), !1;
							t = O(t), i.customContent = t, e.attr("data-config", JSON.stringify(i)), e.children(".child_page").remove();
							var a = {
								dom: e,
								appType: "apwx_jxdh",
								config: i,
								pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
							};
							l.d(a)
						} catch (t) {
							layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
								tips: 2,
								time: 3e3
							}), $(this).val("")
						} else i.customContent = "", e.attr("data-config", JSON.stringify(i)), e.children(".child_page").remove();
						else {
							var n = $(".child_open_start");
							s = i.customContent ? JSON.stringify(i.customContent) : "", n.attr("data-wh", '{"w":"' + e.width() + '","h":"' + e.height() + '"}'), n.attr("data-textarea", s), n.attr("data-appid", i.appID), n.attr("data-val", "customContent"), n.click(), $(p).mousedown(), r.allRemove()
						}
					}
				}],
				[{
					name: "方式",
					id: "translate_type",
					ele: "input_radio",
					val: [{
						val: "1",
						text: "来回循环",
						checked: 1 == i.translate_type
					}, {
						val: "2",
						text: "单向循环",
						checked: 2 == i.translate_type
					}],
					fun: function() {
						var t = $(this).val();
						i.translate_type = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "水平移",
					title: "请输入移动的距离",
					rule: "sjdz_px",
					type: "number",
					id: "translate_Xpx",
					ele: "input",
					val: i.translate_Xpx,
					fun: function() {
						var t = $(this).val();
						i.translate_Xpx = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "垂直移",
					title: "请输入移动的距离",
					rule: "sjdz_px",
					type: "number",
					id: "translate_Ypx",
					ele: "input",
					val: i.translate_Ypx,
					fun: function() {
						var t = $(this).val();
						i.translate_Ypx = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "动效",
					ele: "select",
					val: j(o, i.timingFunction),
					list: o,
					fun: function() {
						var t = $(this).data().value;
						i.timingFunction = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "显示",
					ele: "select",
					val: j(c, i.opacity),
					list: c,
					fun: function() {
						var t = $(this).data().value;
						i.opacity = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "缩放",
					ele: "select",
					val: j(d, i.transform_scale),
					list: d,
					fun: function() {
						var t = $(this).data().value;
						i.transform_scale = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "翻转",
					ele: "select",
					val: j(f, i.transform_rotate),
					list: f,
					fun: function() {
						var t = $(this).data().value;
						i.transform_rotate = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "时长",
					title: "请输入动画时长，单位毫秒",
					type: "number",
					ele: "input_range",
					min: 500,
					max: 5e3,
					val: i.duration,
					fun: function() {
						var t = $(this).val();
						i.duration = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "停顿",
					title: "请输入停顿时长，单位毫秒",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 2e3,
					val: i.delay,
					fun: function() {
						var t = $(this).val();
						i.delay = t, e.attr("data-config", JSON.stringify(i))
					}
				}]
			]
		}, e, a)
	}, g.apwx_jtgif = function(t, e, a) {
		var i, n = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			s = n.slider,
			o = (n.customContent && JSON.stringify(n.customContent), "编辑" + t.attr("appname") || "编辑逐帧动画");
		i = [{
			name: "图片",
			ele: "slider_tu",
			val: s,
			app: t,
			e: e,
			href_hide: !0,
			hide: 1 != n.show,
			fun: {
				change: function(e, a) {
					t.children(".box").children().eq(a).show().siblings().hide()
				},
				image: function(a, i) {
					var s = a[i];
					n.slider = a, s && (e.this.css({
						width: s.img_width + "px",
						height: s.img_height + "px"
					}), e.this.mouseenter(), e.this.mousedown(), document.onmouseup()), t.attr("data-config", JSON.stringify(n))
				},
				add: function(e) {
					t.children(".box").append('<span class="dtu" data-key="' + e + '"><img src=""></span>')
				},
				del: function(e, i) {
					!
					function(e, i) {
						n.slider = e;
						var s = {
							dom: t,
							appType: "apwx_jtgif",
							config: n,
							pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft
						};
						l.d(s, a)
					}(e)
				}
			}
		}, {
			name: "恢复上次宽高",
			ele: "buttom",
			class: "bopSrc",
			fun: function() {
				var t = e.this.attr("data-prev");
				if (t) try {
					t = JSON.parse(t), e.this.css({
						width: t.W + "px",
						height: t.H + "px"
					}), e.this.mouseenter(), e.this.mousemove(), document.onmouseup(), r.set()
				} catch (t) {}
			}
		}, {
			ele: "line",
			val: 1,
			hide: 1 != n.show
		}, {
			name: "图链接",
			rule: "sjdz_href_url",
			ele: "input",
			val: t.children("a").attr("href") || "",
			fun: function() {
				var e = $(this).val();
				t.children("a").attr("href", e), n.href = e, t.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "背景色",
			rule: "sjdz_color",
			id: "bgColor",
			ele: "input",
			val: n.bgColor,
			fun: function() {
				var e = $(this).val();
				t.css({
					"background-color": e
				}), n.bgColor = e, t.attr("data-config", JSON.stringify(n))
			}
		}];
		var c = [{
			text: "一直显示",
			value: "1|1"
		}, {
			text: "淡入淡出",
			value: "0|0"
		}, {
			text: "淡出显示",
			value: "1|0"
		}, {
			text: "淡入显示",
			value: "0|1"
		}],
			d = [{
				text: "简单切换",
				value: "1"
			}, {
				text: "淡入淡出",
				value: "2"
			}, {
				text: "滑出切换",
				value: "3"
			}, {
				text: "自定义",
				value: "diy"
			}],
			f = [{
				text: "无缩放",
				value: "scale(1, 1)"
			}, {
				text: "缩放至消失",
				value: "scale(0.001, 0.001)"
			}, {
				text: "缩放至0.2倍",
				value: "scale(0.2, 0.2)"
			}, {
				text: "缩放至0.4倍",
				value: "scale(0.4, 0.4)"
			}, {
				text: "缩放至0.5倍",
				value: "scale(0.5, 0.5)"
			}, {
				text: "缩放至0.6倍",
				value: "scale(0.6, 0.6)"
			}, {
				text: "缩放至0.8倍",
				value: "scale(0.8, 0.8)"
			}, {
				text: "缩放至0.9倍",
				value: "scale(0.9, 0.9)"
			}, {
				text: "放大至1.05倍",
				value: "scale(1.05, 1.05)"
			}, {
				text: "放大至1.1倍",
				value: "scale(1.1, 1.1)"
			}, {
				text: "放大至1.2倍",
				value: "scale(1.2, 1.2)"
			}, {
				text: "放大至1.5倍",
				value: "scale(1.5, 1.5)"
			}, {
				text: "放大至1.8倍",
				value: "scale(1.8, 1.8)"
			}, {
				text: "放大至2倍",
				value: "scale(2, 2)"
			}],
			p = [{
				name: "切换",
				ele: "select",
				val: j(d, n.slider_change),
				list: d,
				fun: function() {
					var e = $(this).data().value;
					1 == e && (n.delay = n.delay || 2e3, n.duration = 0), 2 == e && (n.delay = n.delay || 2e3, n.duration = parseInt(n.delay) <= 500 ? parseInt(parseInt(n.delay) / 2) : 500, n.translate_Xpx = "0", n.translate_Ypx = "0", n.transform_scale = "scale(1, 1)", n.transform_rotate = "rotate(0deg)", n.opacity = "0|0"), 3 == e && (n.delay = n.delay || 2e3, n.duration = parseInt(n.delay) <= 500 ? parseInt(parseInt(n.delay) / 2) : 500, n.translate_Xpx = t[0].offsetWidth, n.translate_Ypx = "0", n.transform_scale = "scale(1, 1)", n.transform_rotate = "rotate(0deg)", n.opacity = "0|0"), n.slider_change = e, t.attr("data-config", JSON.stringify(n)), t.mouseenter(), t.mousedown(), document.onmouseup(), r.set()
				}
			}, {
				name: "停留",
				title: "请输入停留时长，单位毫秒",
				type: "number",
				ele: "input_range",
				min: 100,
				max: 9e3,
				val: n.delay,
				fun: function() {
					var e = $(this).val();
					e < 100 && (e = "100", layer.msg("停留时长不能小于100"), n.duration >= 100 && (n.duration = 50)), e < parseInt(n.duration) && (n.duration = e), n.delay = e, t.attr("data-config", JSON.stringify(n))
				}
			}];
		"diy" == n.slider_change && (p.push({
			name: "左右移",
			title: "请输入水平移动的距离",
			rule: "sjdz_px",
			id: "translate_Xpx",
			ele: "input",
			class: "translate_Xpx",
			val: C(t, n.translate_Xpx, "x", !1),
			fun: function() {
				var e = $(this).val();
				e = C(t, e, "x", !0), $(this).val(e), n.translate_Xpx = e, t.attr("data-config", JSON.stringify(n)), r.set()
			}
		}), p.push({
			name: "垂直移",
			title: "请输入垂直移动的距离",
			rule: "sjdz_px",
			id: "translate_Ypx",
			ele: "input",
			class: "translate_Ypx",
			val: C(t, n.translate_Ypx, "y", !1),
			fun: function() {
				var e = $(this).val();
				e = C(t, e, "y", !0), $(this).val(e), n.translate_Ypx = e, t.attr("data-config", JSON.stringify(n)), r.set()
			}
		}), p.push({
			name: "动效",
			ele: "select",
			val: j(b, n.timingFunction),
			list: b,
			fun: function() {
				var e = $(this).data().value;
				n.timingFunction = e, t.attr("data-config", JSON.stringify(n))
			}
		}), p.push({
			name: "显示",
			ele: "select",
			val: j(c, n.opacity),
			list: c,
			fun: function() {
				var e = $(this).data().value;
				n.opacity = e, t.attr("data-config", JSON.stringify(n))
			}
		}), p.push({
			name: "缩放",
			ele: "select",
			val: j(f, JSON.stringify(n._scale_exp_)) || j(f, n.transform_scale),
			list: f,
			fun: function() {
				var e = $(this).data().value;
				e._scale_exp_ ? n._scale_exp_ = e : (n.transform_scale = e, n._scale_exp_ = ""), t.attr("data-config", JSON.stringify(n))
			}
		}), p.push({
			name: "翻转",
			ele: "select",
			val: j(k, n.transform_rotate),
			list: k,
			fun: function() {
				var e = $(this).data().value;
				n.transform_rotate = e, t.attr("data-config", JSON.stringify(n))
			}
		}), p.push({
			name: "时长",
			title: "请输入动画时长，单位毫秒",
			type: "number",
			ele: "input_range",
			min: 0,
			max: 1e3,
			val: n.duration,
			fun: function() {
				var e = $(this).val();
				n.duration = e, t.attr("data-config", JSON.stringify(n))
			}
		})), _({
			name: o,
			tabs: ["内容设置", "切换设置"],
			controls: [i, p]
		}, t, e)
	};
	var b = [{
		text: "均速移动",
		value: "linear"
	}, {
		text: "由快到慢",
		value: "ease"
	}, {
		text: "由快到慢(缓)",
		value: "cubic-bezier(0,0,0.1,1)"
	}, {
		text: "由慢到快",
		value: "ease-in"
	}, {
		text: "弹性抖动",
		value: "cubic-bezier(0.5, 1.6, 0.3, 0.6)"
	}],
		S = [{
			text: "一直显示",
			value: "1|1"
		}, {
			text: "淡入显示",
			value: "0|1"
		}, {
			text: "淡出显示",
			value: "1|0"
		}],
		w = [{
			text: "无缩放",
			value: "scale(1, 1)"
		}, {
			text: "缩放至消失",
			value: "scale(0.001, 0.001)"
		}, {
			text: "缩放至0.2倍",
			value: "scale(0.2, 0.2)"
		}, {
			text: "缩放至0.4倍",
			value: "scale(0.4, 0.4)"
		}, {
			text: "缩放至0.5倍",
			value: "scale(0.5, 0.5)"
		}, {
			text: "缩放至0.6倍",
			value: "scale(0.6, 0.6)"
		}, {
			text: "缩放至0.8倍",
			value: "scale(0.8, 0.8)"
		}, {
			text: "缩放至0.9倍",
			value: "scale(0.9, 0.9)"
		}, {
			text: "0.1倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.1, 0.1)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.2倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.2, 0.2)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.3倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.3, 0.3)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.4倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.4, 0.4)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.5倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.5, 0.5)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.6倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.6, 0.6)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.7倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.7, 0.7)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.8倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.8, 0.8)","scale_2":"scale(1, 1)"}'
		}, {
			text: "0.9倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(0.9, 0.9)","scale_2":"scale(1, 1)"}'
		}, {
			text: "10倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(10, 10)","scale_2":"scale(1, 1)"}'
		}, {
			text: "8倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(8, 8)","scale_2":"scale(1, 1)"}'
		}, {
			text: "6倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(6, 6)","scale_2":"scale(1, 1)"}'
		}, {
			text: "4倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(4, 4)","scale_2":"scale(1, 1)"}'
		}, {
			text: "2倍至正常",
			value: '{"_scale_exp_":5,"scale_1":"scale(2, 2)","scale_2":"scale(1, 1)"}'
		}, {
			text: "左右伸展",
			value: '{"_scale_exp_":1,"scale_1":"scale(0.1, 1)","scale_2":"scale(1, 1)"}'
		}, {
			text: "右左伸展",
			value: '{"_scale_exp_":2,"scale_1":"scale(0.1, 1)","scale_2":"scale(1, 1)"}'
		}, {
			text: "下上伸展",
			value: '{"_scale_exp_":3,"scale_1":"scale(1, 0.1)","scale_2":"scale(1, 1)"}'
		}, {
			text: "上下伸展",
			value: '{"_scale_exp_":4,"scale_1":"scale(1, 0.1)","scale_2":"scale(1, 1)"}'
		}],
		k = [{
			text: "无翻转",
			value: "rotate(0deg)"
		}, {
			text: "横向翻转",
			value: "rotateX(360deg)"
		}, {
			text: "纵向翻转",
			value: "rotateY(360deg)"
		}, {
			text: "旋转360",
			value: "rotate(-360deg)"
		}, {
			text: "旋转270",
			value: "rotate(-270deg)"
		}, {
			text: "旋转180",
			value: "rotate(-180deg)"
		}, {
			text: "旋转90",
			value: "rotate(-90deg)"
		}, {
			text: "旋转45",
			value: "rotate(-45deg)"
		}, {
			text: "旋转20",
			value: "rotate(-20deg)"
		}, {
			text: "旋转-360",
			value: "rotate(360deg)"
		}, {
			text: "旋转-270",
			value: "rotate(270deg)"
		}, {
			text: "旋转-180",
			value: "rotate(180deg)"
		}, {
			text: "旋转-90",
			value: "rotate(90deg)"
		}, {
			text: "旋转-45",
			value: "rotate(45deg)"
		}, {
			text: "旋转-20",
			value: "rotate(20deg)"
		}];

	function O(t) {
		t = t;
		var e = 0;
		try {
			!
			function t(a) {
				try {
					e++, a.appID && (a.appID = (new Date).getTime() + "_" + e), a.app && a.app.length && $.each(a.app, function(e, a) {
						a.config && t(a.config)
					}), a.customContent && t(a.customContent), a.customContent_1 && t(a.customContent_1), a.customContent_2 && t(a.customContent_2), a.customContent_3 && t(a.customContent_2), a.slider && a.slider.length && $.each(a.slider, function(e, a) {
						a.customContent && t(a.customContent)
					})
				} catch (t) {
					console.info(t)
				}
			}(t)
		} catch (e) {
			return t
		}
		return t
	}
	function C(t, e, a, i) {
		var n = !1,
			s = t[0].offsetLeft + t[0].offsetWidth,
			l = t[0].offsetTop + t[0].offsetHeight,
			r = $(f)[0].offsetWidth,
			o = $(f)[0].offsetHeight,
			c = e;
		return "x" == a && (e > 0 && s - e <= 0 && (i && (n = !0), c = s - 1), e < 0 && -e > r - t[0].offsetLeft && (i && (n = !0), c = -(r - t[0].offsetLeft - 1))), "y" == a && (e > 0 && l - e <= 0 && (i && (n = !0), c = l - 1), e < 0 && -e > o - t[0].offsetTop && (i && (n = !0), c = -(o - t[0].offsetTop - 1))), n && layer.msg("移动距离过大，已正确重置"), isNaN(c) && "-" != c && (c = 0), c
	}
	function N(t, e) {
		var a = t,
			i = new Image;
		i.src = a, i.onload = function() {
			e && e(i.width, i.height)
		}
	}
	function j(t, e, a) {
		try {
			"object" == typeof e && (e = JSON.stringify(e))
		} catch (t) {}
		for (var i = "", n = 0; n < t.length; n++) if (t[n].value == e) {
			i = t[n].text;
			break
		}
		if (null != a && !i) try {
			i = t[a].text
		} catch (t) {}
		return i
	}
	function J(t, e) {
		var a = $(".appSignal .getChildData");
		a.attr("data-id", t), a.attr("data-rtype", e), a.click()
	}
	function P(t) {
		t = t || !1;
		var e = $(d).find(".hot-box").children(),
			a = $(d).find(".app-box").children(),
			i = $(f)[0].offsetHeight,
			n = 0,
			s = 0;
		if (e.length && $.each(e, function(t, e) {
			e.offsetHeight + e.offsetTop > n && (n = e.offsetHeight + e.offsetTop), e.offsetWidth + e.offsetLeft > s && (s = e.offsetWidth + e.offsetLeft)
		}), a.length && $.each(a, function(t, e) {
			e.offsetHeight + e.offsetTop > n && (n = e.offsetHeight + e.offsetTop), e.offsetWidth + e.offsetLeft > s && (s = e.offsetWidth + e.offsetLeft)
		}), t) n > i && ($(f).css("height", n + "px"), $(d).find(".opBg").css("top", n + "px"), $(d).find(".opBg").css("width", s + "px"));
		else if (n && ($(f).css("height", n + "px"), $(f).css("width", s + "px"), $(d).find(".opBg").css("top", n + "px"), $(d).find(".opBg").css("width", s + "px"), $(u).find("#page_width").val(s), $(u).find("#page_height").val(n)), !n && !s && $(f).attr("data-bgimgsize")) try {
			var l = JSON.parse($(f).attr("data-bgimgsize"));
			$(f).css("height", l.height + "px"), $(f).css("width", l.width + "px"), $(d).find(".opBg").css("top", l.height + "px"), $(d).find(".opBg").css("width", l.width + "px"), $(u).find("#page_width").val(l.width), $(u).find("#page_height").val(l.height)
		} catch (t) {}
	}
	function z() {
		$(u).find("input").keydown(function(t) {
			(t = t || event).stopPropagation()
		}), $(u).find("input").keyup(function(t) {
			(t = t || event).stopPropagation()
		}), $(u).find("textarea").keydown(function(t) {
			(t = t || event).stopPropagation()
		}), $(u).find("textarea").keyup(function(t) {
			(t = t || event).stopPropagation()
		})
	}
	return g.apwx_jkcdh = function(e, a) {
		var i = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
			n = a.this.children().children("img.pic").attr("src") || "",
			s = i.customContent ? JSON.stringify(i.customContent) : "";
		_({
			name: "编辑" + e.attr("appname") || "编辑开场动画",
			tabs: ["内容设置", "动效设置"],
			controls: [
				[{
					name: "显示",
					id: "nr",
					ele: "input_radio",
					val: [{
						val: "1",
						text: "图片",
						checked: 1 == i.show
					}, {
						val: "2",
						text: "自定义",
						checked: 2 == i.show
					}],
					fun: function() {
						var t = $(this).val();
						if (1 == t) {
							try {
								i.memoryPagewh = {
									W: e.width(),
									H: e.height()
								}, e.css({
									width: i.memoryImgwh.W,
									height: i.memoryImgwh.H
								}), a.this.mouseenter()
							} catch (t) {}
							$(u).find(".pSrc").show(), $(u).find(".customContent").hide(), e.children("a.pic_href").length && e.children(".child_page").length ? (e.children("a.pic_href").show(), e.children(".child_page").hide()) : (e.children("a.pic_href").show(), e.children(".child_page").hide(), e.children().children("a.pic_href").show(), e.children().children(".child_page").hide()), a.this.css({
								display: "flex",
								"justify-content": "center",
								"align-items": "center"
							})
						} else {
							try {
								i.memoryImgwh = {
									W: e.width(),
									H: e.height()
								}, e.css({
									width: i.memoryPagewh.W,
									height: i.memoryPagewh.H
								}), a.this.mouseenter()
							} catch (t) {}
							e.children("a.pic_href").length && e.children(".child_page").length ? (e.children("a.pic_href").hide(), e.children(".child_page").show()) : (e.children("a.pic_href").hide(), e.children(".child_page").show(), e.children().children("a.pic_href").hide(), e.children().children(".child_page").show()), $(u).find(".pSrc").hide(), $(u).find(".customContent").show(), a.this.css({
								display: "",
								"justify-content": "",
								"align-items": ""
							})
						}
						i.show = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "替换图片",
					ele: "image",
					val: n,
					class: "pSrc",
					href: a.this.find("a").attr("href") || "",
					group: 1,
					hide: 1 != i.show,
					fun: function() {
						var s = $(this).attr("class"),
							l = $(this).val() || "";
						if ("imageHref" == s && (a.this.find("a").attr("href", l), i.pSrc_href = l, e.attr("data-config", JSON.stringify(i))), "imageInput" == s && (a.this.attr("data-prev", '{"W":' + a.this[0].offsetWidth + ',"H":' + a.this[0].offsetHeight + "}"), l && n != l && (a.this.children(".pic_href").find("img").attr("src", l), $(this).parents(".ui-image-rot").find("img").attr("src", l), N(l, function(t, n) {
							i.pSrc = l, i.pSrc_width = t, i.pSrc_height = n, a.this.css({
								width: t + "px",
								height: n + "px"
							}), a.this.mouseenter(), a.this.mousedown(), document.onmouseup(), e.attr("data-config", JSON.stringify(i)), r.set()
						}))), "uiSetImage" == s) {
							var o = $(this).siblings("input");
							t.tu(function(t) {
								o.val(t)[0].onkeyup()
							})
						}
					}
				}, {
					name: "恢复上次宽高",
					ele: "buttom",
					class: "pSrc",
					hide: 1 != i.show,
					fun: function() {
						var t = a.this.attr("data-prev");
						if (t) try {
							t = JSON.parse(t), a.this.css({
								width: t.W + "px",
								height: t.H + "px"
							}), a.this.mouseenter(), r.set()
						} catch (t) {}
					}
				}, {
					name: "编辑自定义",
					ele: "textarea",
					class: "customContent",
					hide: 2 != i.show,
					val: s,
					fun: function() {
						if ($(this).hasClass("tarea")) if ($(this).val()) try {
							var t = JSON.parse($(this).val());
							if ("number" == typeof t) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
								tips: 2,
								time: 3e3
							}), $(this).val(""), !1;
							t = O(t), i.customContent = t, e.attr("data-config", JSON.stringify(i)), e.children(".child_page").remove();
							var a = {
								dom: e,
								appType: "apwx_jkcdh",
								config: i,
								pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
							};
							l.d(a)
						} catch (t) {
							layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
								tips: 2,
								time: 3e3
							}), $(this).val("")
						} else i.customContent = "", e.attr("data-config", JSON.stringify(i)), e.children(".child_page").remove();
						else {
							var n = $(".child_open_start");
							s = i.customContent ? JSON.stringify(i.customContent) : "", e.children(".popup").length ? n.attr("data-wh", '{"w":"' + e.children(".popup").width() + '","h":"' + e.children(".popup").height() + '"}') : n.attr("data-wh", '{"w":"' + e.width() + '","h":"' + e.height() + '"}'), n.attr("data-textarea", s), n.attr("data-appid", i.appID), n.attr("data-val", "customContent"), n.click(), $(p).mousedown(), r.allRemove()
						}
					}
				}],
				[{
					name: "触发",
					id: "translate_type",
					ele: "input_radio",
					class: "_kcdh_cf_",
					val: [{
						val: "1",
						text: "每次触发",
						checked: 1 == i.translate_type
					}, {
						val: "2",
						text: "一次触发",
						checked: 2 == i.translate_type
					}],
					fun: function() {
						var t = $(this).val();
						i.translate_type = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "左右移",
					title: "请输入水平移动的距离",
					rule: "sjdz_px",
					id: "translate_Xpx",
					ele: "input",
					class: "translate_Xpx",
					val: C(e, i.translate_Xpx, "x", !1),
					fun: function() {
						var t = $(this).val();
						t = C(e, t, "x", !0), $(this).val(t), i.translate_Xpx = t, e.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "垂直移",
					title: "请输入垂直移动的距离",
					rule: "sjdz_px",
					id: "translate_Ypx",
					ele: "input",
					class: "translate_Ypx",
					val: C(e, i.translate_Ypx, "y", !1),
					fun: function() {
						var t = $(this).val();
						t = C(e, t, "y", !0), $(this).val(t), i.translate_Ypx = t, e.attr("data-config", JSON.stringify(i)), r.set()
					}
				}, {
					name: "动效",
					ele: "select",
					val: j(b, i.timingFunction),
					list: b,
					fun: function() {
						var t = $(this).data().value;
						i.timingFunction = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "显示",
					ele: "select",
					val: j(S, i.opacity),
					list: S,
					fun: function() {
						var t = $(this).data().value;
						i.opacity = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "缩放",
					ele: "select",
					val: j(w, JSON.stringify(i._scale_exp_)) || j(w, i.transform_scale),
					list: w,
					fun: function() {
						var t = $(this).data().value;
						t._scale_exp_ ? i._scale_exp_ = t : (i.transform_scale = t, i._scale_exp_ = ""), e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "翻转",
					ele: "select",
					val: j(k, i.transform_rotate),
					list: k,
					fun: function() {
						var t = $(this).data().value;
						i.transform_rotate = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "时长",
					title: "请输入动画时长，单位毫秒",
					type: "number",
					ele: "input_range",
					min: 500,
					max: 5e3,
					val: i.duration,
					fun: function() {
						var t = $(this).val();
						i.duration = t, e.attr("data-config", JSON.stringify(i))
					}
				}, {
					name: "停顿",
					title: "请输入停顿时长，单位毫秒",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 2e3,
					val: i.delay,
					fun: function() {
						var t = $(this).val();
						i.delay = t, e.attr("data-config", JSON.stringify(i))
					}
				}]
			]
		}, e, a)
	}, g.apwx_jkctc = function(t, e) {
		var a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			i = t.attr("appname"),
			n = e.this;
		(n.hasClass("popup") && (t.children(".popup_end").css("visibility", "hidden"), t.children(".popup").css("visibility", "visible"), t.attr("appname", "开场弹窗-弹出图"), g.apwx_jkcdh(t, e), $(u).find("._kcdh_cf_").remove(), t.attr("appname", i)), n.hasClass("popup_end")) && (t.children(".popup_end").css("visibility", "visible"), t.children(".popup").css("visibility", "hidden"), _({
			name: "编辑" + i + "-结束后",
			tabs: ["基本设置"],
			controls: [
				[{
					name: "结束后 - 内容自定义",
					ele: "label",
					class: "_djs_label"
				}, {
					name: "编辑自定义",
					ele: "textarea",
					val: a.customContent_end ? JSON.stringify(a.customContent_end) : "",
					fun: function() {
						if ($(this).hasClass("tarea")) if ($(this).val()) try {
							var e = JSON.parse($(this).val());
							if ("number" == typeof e) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
								tips: 2,
								time: 3e3
							}), $(this).val(""), !1;
							e = O(e), a.customContent_end = e, t.attr("data-config", JSON.stringify(a)), t.children(".popup_end").children(".child_page").remove();
							var i = {
								dom: t,
								appType: "apwx_jdjs",
								config: a,
								pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft
							};
							l.d(i)
						} catch (t) {
							layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
								tips: 2,
								time: 3e3
							}), $(this).val("")
						} else a.customContent_end = "", t.attr("data-config", JSON.stringify(a)), t.children(".popup_end").children(".child_page").remove();
						else {
							var n = $(".child_open_start");
							n.attr("data-wh", '{"w":"' + t.children(".popup_end").width() + '","h":"' + t.children(".popup_end").height() + '"}'), n.attr("data-textarea", JSON.stringify(a.customContent_end)), n.attr("data-appid", a.appID), n.attr("data-val", "customContent_end"), n.click(), $(p).mousedown(), r.allRemove()
						}
					}
				}, {
					name: "选择编辑 ↓",
					ele: "label",
					class: "_djs_label_title"
				}, {
					name: "",
					id: "_preview",
					class: "_djs_preview",
					ele: "input_radio",
					val: [{
						val: "1",
						text: "编辑弹出内容",
						checked: !1
					}],
					fun: function() {
						var e = $(this).val();
						1 == e && (t.children(".popup").mouseenter(), t.children(".popup").mousedown(), document.onmouseup()), 2 == e && (t.children(".popup_end").mouseenter(), t.children(".popup_end").mousedown(), document.onmouseup())
					}
				}]
			]
		}, t, e));
		n.hasClass("appovhi") && _({
			name: "编辑" + i,
			tabs: ["基本设置"],
			controls: [
				[{
					name: "选择编辑内容 - 预览 ↓",
					ele: "label",
					class: "_djs_label_title"
				}, {
					name: "",
					id: "_preview",
					class: "_djs_preview",
					ele: "input_radio",
					val: [{
						val: "1",
						text: "弹出内容",
						checked: !1
					}, {
						val: "2",
						text: "结束后内容",
						checked: !1
					}],
					fun: function() {
						var e = $(this).val();
						1 == e && (t.children(".popup").mouseenter(), t.children(".popup").mousedown(), document.onmouseup()), 2 == e && (t.children(".popup_end").mouseenter(), t.children(".popup_end").mousedown(), document.onmouseup())
					}
				}, {
					name: "背景色",
					rule: "sjdz_color",
					id: "bgColor",
					ele: "input",
					val: a.bg_color,
					fun: function() {
						var e = $(this).val();
						t.css({
							"background-color": e
						}), a.bg_color = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "背景图",
					rule: "sjdz_img_url",
					id: "bgImg",
					ele: "input",
					val: a.bg_img,
					fun: function() {
						var e = $(this).val();
						e ? a.bg_img != e && (t.css({
							"background-image": "url(" + e + ")"
						}), N(e, function(i, n) {
							a.bg_img = e, a.bg_img_width = i, a.bg_img_height = n, t.attr("data-config", JSON.stringify(a)), r.set()
						})) : (t.css({
							"background-image": ""
						}), t.attr("data-config", JSON.stringify(a)))
					}
				}]
			]
		}, t, e);
		if (n.hasClass("time")) {
			var s = [{
				text: "1秒后消失",
				value: 1
			}, {
				text: "2秒后消失",
				value: 2
			}, {
				text: "3秒后消失",
				value: 3
			}, {
				text: "4秒后消失",
				value: 4
			}, {
				text: "5秒后消失",
				value: 5
			}, {
				text: "6秒后消失",
				value: 6
			}, {
				text: "7秒后消失",
				value: 7
			}, {
				text: "8秒后消失",
				value: 8
			}, {
				text: "9秒后消失",
				value: 9
			}, {
				text: "10秒后消失",
				value: 10
			}, {
				text: "15秒后消失",
				value: 15
			}, {
				text: "30秒后消失",
				value: 30
			}];
			_({
				name: "编辑开场弹窗-倒计时",
				tabs: ["内容设置"],
				controls: [
					[{
						name: "时长",
						ele: "select",
						val: j(s, a.outTime),
						list: s,
						fun: function() {
							var e = $(this).data().value;
							a.outTime = e, t.children(".time").text(e), n.mouseenter(), t.attr("data-config", JSON.stringify(a))
						}
					}, {
						name: "大小",
						type: "number",
						rule: "sjdz_px",
						ele: "input",
						val: a.outTime_fontSize,
						fun: function() {
							var e = $(this).val();
							n.css("font-size", e + "px"), n.mouseenter(), a.outTime_fontSize = e, t.attr("data-config", JSON.stringify(a)), r.set()
						}
					}, {
						name: "字色",
						rule: "sjdz_color",
						ele: "input",
						val: a.outTime_color,
						fun: function() {
							var e = $(this).val();
							n.css("color", e), a.outTime_color = e, t.attr("data-config", JSON.stringify(a))
						}
					}, {
						name: "编辑内容",
						ele: "label",
						class: "_djs_label_title"
					}, {
						name: "",
						id: "_preview",
						class: "_djs_preview",
						ele: "input_radio",
						val: [{
							val: "1",
							text: "弹出内容",
							checked: !1
						}, {
							val: "2",
							text: "结束后内容",
							checked: !1
						}],
						fun: function() {
							var e = $(this).val();
							1 == e && (t.children(".popup").mouseenter(), t.children(".popup").mousedown(), document.onmouseup()), 2 == e && (t.children(".popup_end").mouseenter(), t.children(".popup_end").mousedown(), document.onmouseup())
						}
					}, {
						ele: "line",
						val: 1,
						hide: 1 != a.show
					}]
				]
			}, t, e)
		}
		n.hasClass("close") && (t.attr("appname", "开场弹窗-关闭图"), g.apwx_jtup(t, e, ["close_img", "close_width", "close_height"]), $(u).find(".imageHref").remove(), $(u).find(".sjdz_href_url").remove(), t.attr("appname", i))
	}, g.apwx_jgdpic = function(t, e, a) {
		var i = "编辑" + t.attr("appname") || "编辑滚动图片",
			n = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			s = n.slider;

		function r(e, i) {
			n.slider = e, J(t.attr("appid"), t.attr("data-apptype"));
			let s = 1 == n.translate_type ? "left" : "top", r = {
				dom: t,
				appType: t.attr("data-apptype"),
				config: n,
				child_data: t.attr("data-child_data") ? JSON.parse(t.attr("data-child_data")) : "",
				pos: t[0].offsetWidth + "|" + t[0].offsetHeight + "|" + t[0].offsetTop + "|" + t[0].offsetLeft,
				transform: o(e, i, s)
			};
			l.d(r, a)
		}
		function o(t, e, a) {
			var i = 0;
			return $.each(t, function(t, s) {
				if (parseInt(e) == parseInt(t)) return !1;
				i += "top" == a ? s.img_height + parseInt(n.slider_bottom) : s.img_width + parseInt(n.slider_right)
			}), parseInt(i)
		}
		var c = [{
			text: "均速移动",
			value: "linear"
		}, {
			text: "由快到慢",
			value: "ease"
		}, {
			text: "由快到慢(缓)",
			value: "cubic-bezier(0,0,0.1,1)"
		}, {
			text: "由慢到快",
			value: "ease-in"
		}, {
			text: "弹性抖动",
			value: "cubic-bezier(0.5, 1.6, 0.3, 0.6)"
		}, {
			text: "终点多弹(新)",
			value: "easeOutBounce"
		}],
			d = [{
				text: "1屏1图",
				value: "1"
			}, {
				text: "1屏2图",
				value: "2"
			}, {
				text: "1屏3图",
				value: "3"
			}, {
				text: "1屏4图",
				value: "4"
			}, {
				text: "1屏5图",
				value: "5"
			}],
			f = [{
				text: "一直显示",
				value: "1|0"
			}, {
				text: "透0至全显",
				value: "0|1"
			}, {
				text: "透0.2至全显",
				value: "0.2|0.8"
			}, {
				text: "透0.4至全显",
				value: "0.4|0.6"
			}, {
				text: "透0.5至全显",
				value: "0.5|0.5"
			}, {
				text: "透0.6至全显",
				value: "0.6|0.4"
			}, {
				text: "透0.8至全显",
				value: "0.8|0.2"
			}],
			p = [{
				text: "从右向左",
				value: "1"
			}, {
				text: "从下向上",
				value: "2"
			}],
			u = [{
				text: "无缩放",
				value: "1|0"
			}, {
				text: "0倍至正常",
				value: "0|1"
			}, {
				text: "0.3倍至正常",
				value: "0.3|0.7"
			}, {
				text: "0.5倍至正常",
				value: "0.5|0.5"
			}, {
				text: "0.6倍至正常",
				value: "0.6|0.4"
			}, {
				text: "0.7倍至正常",
				value: "0.7|0.3"
			}, {
				text: "0.8倍至正常",
				value: "0.8|0.2"
			}, {
				text: "2倍至正常",
				value: "2|-1"
			}],
			h = [{
				text: "无翻转",
				value: "0|0"
			}, {
				text: "旋转360",
				value: "0|360"
			}, {
				text: "旋转270",
				value: "270|-270"
			}, {
				text: "旋转180",
				value: "180|-180"
			}, {
				text: "旋转90",
				value: "90|-90"
			}, {
				text: "旋转45",
				value: "45|-45"
			}, {
				text: "旋转20",
				value: "20|-20"
			}, {
				text: "旋转-360",
				value: "-360|360"
			}, {
				text: "旋转-270",
				value: "-270|270"
			}, {
				text: "旋转-180",
				value: "-180|180"
			}, {
				text: "旋转-90",
				value: "-90|90"
			}, {
				text: "旋转-45",
				value: "-45|45"
			}, {
				text: "旋转-20",
				value: "-20|20"
			}];
		_({
			name: i,
			tabs: ["内容设置", "入场效果"],
			controls: [
				[{
					ele: "tip",
					val: "为了保证滚动效果，所有图片尺寸请保持一致，图片内容可不等"
				}, {
					name: "图片",
					ele: "slider_tu",
					val: s,
					app: t,
					e: e,
					hide: 1 != n.show,
					fun: {
						change: function(e, a) {
							var i = t.children(".box").children(".dtu"),
								s = o(e, a),
								l = o(e, a, "top");
							i.length && (1 == n.translate_type ? i.css("transform", "translate3d(-" + s + "px, 0px, 0px)") : i.css("transform", "translate3d(0px, -" + l + "px, 0px)"))
						},
						image: function(t, e) {
							r(t, e)
						},
						add: function(e) {
							t.children(".box").append('<a class="dtu" data-key="' + e + '" href="" onclick="return false"><img src=""></a>')
						},
						del: function(t, e) {
							r(t, e)
						}
					}
				}, {
					ele: "line",
					val: 2,
					hide: 1 != n.show
				}, {
					name: "右间距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 100,
					val: n.slider_right,
					hide: 1 != n.translate_type,
					fun: function() {
						var e = $(this).val();
						n.slider_right = e, t.children(".box").children().css("margin-right", e + "px"), t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "下间距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 100,
					val: n.slider_bottom,
					hide: 2 != n.translate_type,
					fun: function() {
						var e = $(this).val();
						n.slider_bottom = e, t.children(".box").children().css("margin-bottom", e + "px"), t.attr("data-config", JSON.stringify(n))
					}
				}],
				[{
					name: "方向",
					ele: "select",
					class: "",
					val: j(p, n.translate_type),
					list: p,
					fun: function() {
						var e = $(this).data().value;
						if (e != n.translate_type) {
							n.translate_type = e;
							try {
								s = JSON.parse(t.attr("data-config")).slider
							} catch (t) {}
							r(s, 0), t.attr("data-config", JSON.stringify(n)), t.mouseenter(), t.mousedown(), document.onmouseup()
						}
					}
				}, {
					name: "图显示",
					ele: "select",
					class: "_show_num_tip_",
					val: j(d, n.show_num),
					list: d,
					fun: function() {
						var e = $(this).data().value;
						try {
							let a = JSON.parse(t.attr("data-config")), i = 0, s = 0, l = 0, r = 0;
							a.slider && ($.each(a.slider, function(t, n) {
								0 == t && (l = n.img_width, r = n.img_height), e > t && (i += n.img_width + parseInt(a.slider_right), s += n.img_height + parseInt(a.slider_bottom))
							}), e > a.slider.length ? layer.tips("显示图不得大于图总数,请先添加图片！", $("._show_num_tip_"), {
								tips: 2,
								time: 3e3
							}) : (n.show_num = e, t.attr("data-config", JSON.stringify(n)), 1 == a.translate_type && t.css({
								width: i + "px",
								height: r + "px"
							}), 2 == a.translate_type && t.css({
								height: s + "px",
								width: l + "px"
							}), t.mouseenter(), t.mousedown(), document.onmouseup()))
						} catch (t) {}
					}
				}, {
					name: "动效",
					ele: "select",
					class: "",
					val: j(c, n.timingFunction),
					list: c,
					fun: function() {
						var e = $(this).data().value;
						n.timingFunction = e, t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "入场",
					ele: "select",
					class: "",
					val: j(f, n.opacity),
					list: f,
					fun: function() {
						var e = $(this).data().value;
						n.opacity = e, t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "出场",
					id: "videoLoop",
					ele: "input_radio",
					val: [{
						val: "true",
						text: "同步变化",
						checked: !! n.outdong
					}, {
						val: "",
						text: "无变化",
						checked: !n.outdong
					}],
					fun: function() {
						var e = $(this).val();
						n.outdong = e, t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "缩放",
					ele: "select",
					class: "",
					val: j(u, n.transform_scale),
					list: u,
					fun: function() {
						var e = $(this).data().value;
						n.transform_scale = e, t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "旋转",
					ele: "select",
					class: "",
					val: j(h, n.transform_rotate),
					list: h,
					fun: function() {
						var e = $(this).data().value;
						n.transform_rotate = e, t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "时长",
					title: "请输入动画时长，单位毫秒",
					type: "number",
					ele: "input_range",
					min: 100,
					max: 5e3,
					val: n.duration,
					fun: function() {
						var e = $(this).val();
						n.duration = e, t.attr("data-config", JSON.stringify(n))
					}
				}, {
					name: "停顿",
					title: "请输入停顿时长，单位毫秒",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 5e3,
					val: n.delay,
					fun: function() {
						var e = $(this).val();
						n.delay = e, t.attr("data-config", JSON.stringify(n))
					}
				}]
			]
		}, t, e)
	}, g.apwx_jgdtw = function(e, a) {
		var i = $(a.ui),
			n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
			s = a.this.find("img.pic").attr("src") || "",
			o = n.customContent ? JSON.stringify(n.customContent) : "",
			c = "编辑" + e.attr("appname") || "编辑循环动画",
			d = [{
				text: "均速移动",
				value: "linear"
			}, {
				text: "由快到慢",
				value: "ease"
			}, {
				text: "由快到慢(缓)",
				value: "cubic-bezier(0,0,0.1,1)"
			}, {
				text: "由慢到快",
				value: "ease-in"
			}],
			f = [{
				text: "一直显示",
				value: "1|1"
			}, {
				text: "淡入显示",
				value: "0|1"
			}, {
				text: "淡出显示",
				value: "1|0"
			}],
			g = [{
				text: "无缩放",
				value: "scale(1, 1)"
			}, {
				text: "缩放至消失",
				value: "scale(0.001, 0.001)"
			}, {
				text: "缩放至0.2倍",
				value: "scale(0.2, 0.2)"
			}, {
				text: "缩放至0.4倍",
				value: "scale(0.4, 0.4)"
			}, {
				text: "缩放至0.5倍",
				value: "scale(0.5, 0.5)"
			}, {
				text: "缩放至0.6倍",
				value: "scale(0.6, 0.6)"
			}, {
				text: "缩放至0.8倍",
				value: "scale(0.8, 0.8)"
			}, {
				text: "缩放至0.9倍",
				value: "scale(0.9, 0.9)"
			}, {
				text: "0.1倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.1, 0.1)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.2倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.2, 0.2)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.3倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.3, 0.3)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.4倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.4, 0.4)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.5倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.5, 0.5)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.6倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.6, 0.6)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.7倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.7, 0.7)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.8倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.8, 0.8)","scale_2":"scale(1, 1)"}'
			}, {
				text: "0.9倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(0.9, 0.9)","scale_2":"scale(1, 1)"}'
			}, {
				text: "10倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(10, 10)","scale_2":"scale(1, 1)"}'
			}, {
				text: "8倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(8, 8)","scale_2":"scale(1, 1)"}'
			}, {
				text: "6倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(6, 6)","scale_2":"scale(1, 1)"}'
			}, {
				text: "4倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(4, 4)","scale_2":"scale(1, 1)"}'
			}, {
				text: "2倍至正常",
				value: '{"_scale_exp_":5,"scale_1":"scale(2, 2)","scale_2":"scale(1, 1)"}'
			}],
			m = [{
				text: "无翻转",
				value: "rotate(0deg)"
			}, {
				text: "旋转360",
				value: "rotate(360deg)"
			}, {
				text: "旋转270",
				value: "rotate(270deg)"
			}, {
				text: "旋转180",
				value: "rotate(180deg)"
			}, {
				text: "旋转90",
				value: "rotate(90deg)"
			}, {
				text: "旋转45",
				value: "rotate(45deg)"
			}, {
				text: "旋转20",
				value: "rotate(20deg)"
			}, {
				text: "旋转-360",
				value: "rotate(-360deg)"
			}, {
				text: "旋转-270",
				value: "rotate(-270deg)"
			}, {
				text: "旋转-180",
				value: "rotate(-180deg)"
			}, {
				text: "旋转-90",
				value: "rotate(-90deg)"
			}, {
				text: "旋转-45",
				value: "rotate(-45deg)"
			}, {
				text: "旋转-20",
				value: "rotate(-20deg)"
			}, {
				text: "横向翻转",
				value: "rotateX(360deg)"
			}, {
				text: "纵向翻转",
				value: "rotateY(360deg)"
			}],
			v = [{
				text: "从右至左",
				value: "1"
			}, {
				text: "从左至右",
				value: "2"
			}, {
				text: "从下至上",
				value: "3"
			}, {
				text: "从上至下",
				value: "4"
			}];
		$(h).bind("click", function() {
			if ("resizable" == $(this).attr("ck-type")) try {
				var t = e[0].offsetWidth,
					a = e[0].offsetHeight,
					i = n.roll_fx;
				1 == i && (n.translate_Xpx = -t, n.translate_Ypx = 0), 2 == i && (n.translate_Xpx = t, n.translate_Ypx = 0), 3 == i && (n.translate_Xpx = 0, n.translate_Ypx = -a), 4 == i && (n.translate_Xpx = 0, n.translate_Ypx = a), e.attr("data-config", JSON.stringify(n))
			} catch (t) {}
		});
		var x = [{
			name: "滚方向",
			ele: "select",
			val: j(v, n.roll_fx, 0),
			list: v,
			fun: function() {
				var t = $(this).data().value,
					a = e[0].offsetWidth,
					i = e[0].offsetHeight;
				(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).roll_fx = t, 1 == t && (n.translate_Xpx = -a, n.translate_Ypx = 0), 2 == t && (n.translate_Xpx = a, n.translate_Ypx = 0), 3 == t && (n.translate_Xpx = 0, n.translate_Ypx = -i), 4 == t && (n.translate_Xpx = 0, n.translate_Ypx = i), e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "滚方式",
			id: "translate_type",
			ele: "input_radio",
			val: [{
				val: "1",
				text: "来回滚动",
				checked: 1 == n.translate_type
			}, {
				val: "2",
				text: "单向滚动",
				checked: 2 == n.translate_type
			}],
			fun: function() {
				var t = $(this).val();
				(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).translate_type = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "无缝",
			ele: "input_radio",
			val: [{
				val: "1",
				text: "是",
				checked: 1 == n.wufeng
			}, {
				val: "2",
				text: "否",
				checked: 2 == n.wufeng
			}],
			fun: function() {
				var t = $(this).val();
				(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).wufeng = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "动效",
			ele: "select",
			val: j(d, n.timingFunction),
			list: d,
			fun: function() {
				var t = $(this).data().value;
				(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).timingFunction = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "时长",
			title: "请输入滚动时长，单位毫秒，值越大速度越慢",
			type: "number",
			ele: "input_range",
			min: 1e3,
			max: 2e4,
			val: n.duration,
			fun: function() {
				var t = $(this).val();
				(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).duration = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "更多动效设置",
			ele: "buttom",
			fun: function() {
				var t = $(this);
				t.hasClass("select") ? (t.removeClass("select"), t.parent().siblings("._set_diy_").hide()) : (t.addClass("select"), t.parent().siblings("._set_diy_").fadeIn())
			}
		}, {
			name: "显示",
			ele: "select",
			class: "_set_diy_",
			hide: 5 != n.roll_fx,
			val: j(f, n.opacity),
			list: f,
			fun: function() {
				var t = $(this).data().value;
				n.opacity = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "缩放",
			ele: "select",
			class: "_set_diy_",
			hide: 5 != n.roll_fx,
			val: j(g, n.transform_scale),
			list: g,
			fun: function() {
				var t = $(this).data().value;
				n.transform_scale = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "翻转",
			ele: "select",
			class: "_set_diy_",
			hide: 5 != n.roll_fx,
			val: j(m, n.transform_rotate),
			list: m,
			fun: function() {
				var t = $(this).data().value;
				n.transform_rotate = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "停顿",
			title: "请输入停顿时长，单位毫秒",
			type: "number",
			ele: "input_range",
			class: "_set_diy_",
			hide: 5 != n.roll_fx,
			min: 0,
			max: 2e3,
			val: n.delay,
			fun: function() {
				var t = $(this).val();
				n.delay = t, e.attr("data-config", JSON.stringify(n))
			}
		}],
			y = [{
				name: "选择滚动内容 - ↓",
				ele: "label",
				class: "_djs_label_title"
			}, {
				name: "显示",
				id: "nr",
				ele: "input_radio",
				class: "_djs_preview",
				val: [{
					val: "3",
					text: "文字",
					checked: 3 == n.show
				}, {
					val: "1",
					text: "图片",
					checked: 1 == n.show
				}, {
					val: "2",
					text: "自定义",
					checked: 2 == n.show
				}],
				fun: function() {
					var t = $(this).val();
					1 == t && ($(u).find(".pSrc").show(), $(u).find(".customContent").hide(), $(u).find("._text_").hide(), e.children("._pic_").show().siblings().hide(), a.this.css({
						display: "flex",
						"justify-content": "center",
						"align-items": "center"
					})), 2 == t && ($(u).find(".pSrc").hide(), $(u).find("._text_").hide(), $(u).find(".customContent").show(), e.children(".child_page").show(), e.children(".pic_href").hide(), a.this.css({
						display: "",
						"justify-content": "",
						"align-items": ""
					})), 3 == t && ($(u).find(".pSrc").hide(), $(u).find(".customContent").hide(), $(u).find("._text_").show(), e.children("._text_").show().siblings().hide(), a.this.css({
						display: "flex",
						"justify-content": "center",
						"align-items": "center"
					})), (n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).show = t, e.attr("data-config", JSON.stringify(n)), r.set()
				}
			}, {
				name: "替换图片",
				ele: "image",
				val: s,
				class: "pSrc",
				href: a.this.find("a").attr("href") || "",
				group: 1,
				hide: 1 != n.show,
				fun: function() {
					var i = $(this).attr("class"),
						s = $(this).val() || "";
					if ("imageHref" == i && (a.this.find("a").attr("href", s), n.pSrc_href = s, e.attr("data-config", JSON.stringify(n))), "imageInput" == i && (a.this.attr("data-prev", '{"W":' + a.this[0].offsetWidth + ',"H":' + a.this[0].offsetHeight + "}"), s && (a.this.children(".pic_href").find("img").attr("src", s), $(this).parents(".ui-image-rot").find("img").attr("src", s), N(s, function(t, a) {
						n.pSrc = s, n.pSrc_width = t, n.pSrc_height = a, e.attr("data-config", JSON.stringify(n)), r.set()
					}))), "uiSetImage" == i) {
						var l = $(this).siblings("input");
						t.tu(function(t) {
							l.val(t)[0].onkeyup()
						})
					}
				}
			}, {
				name: "编辑自定义",
				ele: "textarea",
				class: "customContent",
				hide: 2 != n.show,
				val: o,
				fun: function() {
					if ($(this).hasClass("tarea")) if ($(this).val()) try {
						var t = JSON.parse($(this).val());
						if ("number" == typeof t) return layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
							tips: 2,
							time: 3e3
						}), $(this).val(""), !1;
						t = O(t), n.customContent = t, e.attr("data-config", JSON.stringify(n)), e.children(".child_page").remove();
						var a = {
							dom: e,
							appType: "apwx_jxdh",
							config: n,
							pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
						};
						l.d(a)
					} catch (t) {
						layer.tips("亲粘贴的不是JSON代码呢！", $(this), {
							tips: 2,
							time: 3e3
						}), $(this).val("")
					} else n.customContent = "", e.attr("data-config", JSON.stringify(n)), e.children(".child_page").remove();
					else {
						var i = $(".child_open_start");
						o = n.customContent ? JSON.stringify(n.customContent) : "", i.attr("data-textarea", o), i.attr("data-appid", n.appID), i.attr("data-val", "customContent"), i.click(), $(p).mousedown(), r.allRemove()
					}
				}
			}, {
				name: "大小",
				ele: "input",
				class: "_text_",
				rule: "sjdz_px",
				hide: 3 != n.show,
				val: n.text_size || "",
				fun: function() {
					var t = $(this).val();
					(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).text_size = t, e.children("._text_").css("font-size", t + "px"), e.attr("data-config", JSON.stringify(n)), r.set()
				}
			}, {
				name: "字色",
				ele: "input",
				class: "_text_",
				rule: "sjdz_color",
				hide: 3 != n.show,
				val: n.text_color || "",
				fun: function() {
					var t = $(this).val();
					(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).text_color = t, e.children("._text_").css("color", t), e.attr("data-config", JSON.stringify(n))
				}
			}, {
				name: "链接",
				ele: "input",
				title: "请输入公告链接网址",
				class: "_text_",
				rule: "sjdz_href_url",
				hide: 3 != n.show,
				val: n.pSrc_href || "",
				fun: function() {
					var t = $(this).val();
					(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).pSrc_href = t, e.children("._text_").attr("href", t), e.attr("data-config", JSON.stringify(n))
				}
			}, {
				name: "行间距",
				type: "number",
				class: "_text_",
				ele: "input_range",
				hide: 3 != n.show,
				min: 16,
				max: 200,
				val: n.text_lineHeight || 20,
				fun: function() {
					var t = $(this).val();
					(n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}).text_lineHeight = t, e.css("line-height", t + "px"), e.attr("data-config", JSON.stringify(n))
				}
			}, {
				name: "文字样式",
				ele: "font",
				class: "_text_",
				hide: 3 != n.show,
				val: {
					fontWeight: n.fontWeight,
					textDecoration: -1,
					whiteSpace: n.whiteSpace || "pre-wrap",
					align: n.align
				},
				fun: function() {
					var t = $(this),
						a = e.find("pre").text();
					n.text != a && (n.text = a), t.hasClass("select") ? t.hasClass("align") || (t.removeClass("select"), t.hasClass("fontWeight") && (e.css("font-weight", ""), n.fontWeight = ""), t.hasClass("whiteSpace") && (e.children("._text_").children("pre").css("white-space", "nowrap"), n.whiteSpace = "nowrap")) : (t.addClass("select"), t.hasClass("align") && (t.siblings(".align").removeClass("select"), t.hasClass("alignLeft") && (e.css({
						display: "flex",
						"justify-content": "flex-start",
						"align-items": "center"
					}), n.align = "flex-start"), t.hasClass("alignCenter") && (e.css({
						display: "flex",
						"justify-content": "center",
						"align-items": "center"
					}), n.align = "center"), t.hasClass("alignRight") && (e.css({
						display: "flex",
						"justify-content": "flex-end",
						"align-items": "center"
					}), n.align = "flex-end")), t.hasClass("fontWeight") && (e.css("font-weight", "bold"), n.fontWeight = "bold"), t.hasClass("whiteSpace") && (e.children("._text_").children("pre").css("white-space", "pre-wrap"), n.whiteSpace = "pre-wrap")), e.attr("data-config", JSON.stringify(n)), r.set()
				}
			}],
			b = Math.floor((e[0].offsetWidth < e[0].offsetHeight ? e[0].offsetWidth : e[0].offsetHeight) / 2);
		y.push({
			name: "编辑模块样式",
			ele: "buttom",
			fun: function() {
				var t = $(this);
				t.hasClass("select") ? (t.removeClass("select"), t.parent().siblings("._border").hide()) : (t.addClass("select"), t.parent().siblings("._border").fadeIn())
			}
		}, {
			name: "背景色",
			ele: "input",
			class: "_border",
			rule: "sjdz_color",
			val: n.box.bgColor || "",
			fun: function() {
				var t = $(this).val();
				n.box.bgColor = t, e.css("background-color", t), e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "背景图",
			ele: "input",
			class: "_border",
			rule: "sjdz_img_url",
			val: n.box.bgImg || "",
			fun: function() {
				var t = $(this).val();
				n.box.bgImg = t, t ? (N(t, function(t, a) {
					n.box.bgImg_width = t, n.box.bgImg_height = a, e.attr("data-config", JSON.stringify(n)), r.set()
				}), e.css("background-image", "url(" + t + ")")) : e.css("background-image", "none"), e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "左边距",
			type: "number",
			class: "_border",
			ele: "input_range",
			min: 0,
			max: 200,
			val: n.box.paddingLR || 0,
			fun: function() {
				var t = $(this).val();
				n.box.paddingLR = t, e.css("padding", "0 0 0 " + t + "px"), e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "边框宽",
			rule: "sjdz_px",
			type: "number",
			class: "_border",
			ele: "input",
			val: e.css("border-width").replace(/px/, "") || 0,
			fun: function() {
				var t = $(this).val();
				n.box.borderWidth = t, i.css("border-width", t + "px"), e.attr("data-config", JSON.stringify(n)), r.set()
			}
		}, {
			name: "边框色",
			rule: "sjdz_color",
			class: "_border",
			ele: "input",
			val: e.css("border-color") || 0,
			fun: function() {
				var t = $(this).val();
				n.box.borderColor = t, i.css("border-color", t), e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "框圆角",
			type: "number",
			class: "_border",
			ele: "input_range",
			min: 0,
			max: b,
			val: e.css("border-radius").replace(/px/, "") || 0,
			fun: function() {
				var t = $(this).val();
				n.box.borderRadius = t, i.css("border-radius", t + "px"), e.attr("data-config", JSON.stringify(n))
			}
		}), _({
			name: c,
			tabs: ["内容设置", "滚动设置"],
			controls: [y, x]
		}, e, a)
	}, g.apwx_jbblb = function(e, a, i) {
		var n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {},
			s = "编辑" + e.attr("appname") || "编辑宝贝列表",
			o = a.this,
			c = $(a.ui),
			d = o.css("background-image"),
			f = o.parents(".item").attr("data-key"),
			p = o.attr("data-child-type"),
			u = [],
			h = ["title", "subtitle", "salePrice", "reservePrice", "sale30", "subtitle2"],
			g = ["reservePrice_ltxt", "prece_ltxt", "sale30_ltxt", "sale30_rtxt", "exp_alltxt", "exp_alltxt3"],
			m = ["buypSrc", "addbuypSrc", "exp_allimg", "exp_allimg3"],
			v = Math.floor((a.this[0].offsetWidth < a.this[0].offsetHeight ? a.this[0].offsetWidth : a.this[0].offsetHeight) / 2);
		if (d = "none" == d ? "" : d.replace(/url?\(/, "").replace(/\)/, "").replace(/"/, "").replace(/"/, ""), !p && !$._data(e.children(".itemUpData")[0], "events")) {
			var x = {
				dom: e,
				appType: "apwx_jbblb",
				config: n,
				child_data: JSON.parse(e.attr("data-child_data")),
				pos: e[0].offsetWidth + "|" + e[0].offsetHeight + "|" + e[0].offsetTop + "|" + e[0].offsetLeft
			};
			l.d(x, i)
		}
		var y = [{
			text: "一排一个",
			value: "1"
		}, {
			text: "一排二个",
			value: "2"
		}, {
			text: "一排三个",
			value: "3"
		}, {
			text: "一排四个",
			value: "4"
		}, {
			text: "一排五个",
			value: "5"
		}];
		p || (u = [{
			name: ["显示主图视频"],
			val: ["videoShow"],
			checked: n.videoShow ? [!0] : [!1],
			ele: "checkbox",
			class: "apwx_jbblb",
			fun: function() {
				this.checked ? n.videoShow = "true" : n.videoShow = "", e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "选择宝贝",
			ele: "items",
			app: e,
			title: "快速添加宝贝",
			e: a,
			fun: function() {
				n.items[0] ? (n.items.push(n.items[0]), e.attr("data-config", JSON.stringify(n)), e.children(".itemUpData").click(), e.mouseenter(), e.mousedown(), document.onmouseup(), r.set()) : layer.msg("宝贝一个也没有，请添加宝贝，或重新添加宝贝模块！", {
					icon: 2,
					time: 3e3
				})
			}
		}, {
			name: "编辑宝贝图片",
			ele: "input_radio_2",
			checked: !e.find(".picUrl").attr("waria-disabled"),
			fun: function() {
				this.checked ? e.find(".picUrl").removeAttr("waria-disabled") : e.find(".picUrl").attr("waria-disabled", !0)
			}
		}, {
			ele: "line"
		}, {
			name: "宝贝列",
			ele: "select",
			val: j(y, n.item_box.list),
			list: y,
			fun: function() {
				n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, J(e.attr("appid"), e.attr("data-apptype"));
				var t = $(this).data().value,
					a = $(this).parents(".econtrol"),
					i = e[0].offsetWidth,
					s = n.item_box.width,
					l = n.item_box.right;
				s = Math.round((i - (t - 1) * l) / t), n.item_box.width = s, a.find("._iwidth").find("input").val(s), n.item_box.list = t, e.attr("data-config", JSON.stringify(n)), e.children(".itemUpData").click(), r.set()
			}
		}, {
			name: "宝贝宽",
			rule: "sjdz_px",
			type: "number",
			id: "width",
			class: "_iwidth",
			ele: "input",
			val: n.item_box.width,
			fun: function() {
				n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, J(e.attr("appid"), e.attr("data-apptype"));
				var t = $(this).val();
				n.item_box.width = t, e.attr("data-config", JSON.stringify(n)), e.children(".itemUpData").click(), r.set()
			}
		}, {
			name: "宝贝高",
			rule: "sjdz_px",
			type: "number",
			id: "height",
			class: "_iheight",
			ele: "input",
			val: n.item_box.height,
			fun: function() {
				n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, J(e.attr("appid"), e.attr("data-apptype"));
				var t = $(this).val();
				n.item_box.height = t, e.attr("data-config", JSON.stringify(n)), e.children(".itemUpData").click(), r.set()
			}
		}, {
			name: "背景色",
			rule: "sjdz_color",
			ele: "input",
			val: n.item_box.bgColor,
			fun: function() {
				var t = $(this).val();
				e.find(".item").css("background-color", t), n.item_box.bgColor = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "右间距",
			type: "number",
			ele: "input_range",
			min: 0,
			max: 200,
			val: n.item_box.right,
			fun: function() {
				n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, J(e.attr("appid"), e.attr("data-apptype"));
				var t = $(this).val();
				n.item_box.right = t, e.attr("data-config", JSON.stringify(n)), e.children(".itemUpData").click()
			}
		}, {
			name: "下间距",
			type: "number",
			ele: "input_range",
			min: 0,
			max: 200,
			val: n.item_box.bottom,
			fun: function() {
				n = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {}, J(e.attr("appid"), e.attr("data-apptype"));
				var t = $(this).val();
				n.item_box.bottom = t, e.attr("data-config", JSON.stringify(n)), e.children(".itemUpData").click()
			}
		}]), -1 != ["title", "subtitle", "salePrice", "reservePrice", "sale30", "reservePrice_ltxt", "prece_ltxt", "sale30_ltxt", "sale30_rtxt", "subtitle2", "exp_alltxt", "exp_alltxt3"].indexOf(p) && (u = [{
			name: "文本",
			ele: "input",
			rule: "sjdz_none",
			val: o.text() || "",
			fun: function() {
				var t = $(this).val();
				o.find("pre").text(t), -1 != h.indexOf(p) && (n.items[f][p] = t, e.attr("data-config", JSON.stringify(n))), -1 != g.indexOf(p) && (n[p] = t, e.attr("data-config", JSON.stringify(n)), e.find("." + p).find("pre").text(t)), o.mouseenter(), r.set()
			}
		}, {
			name: "大小",
			type: "number",
			rule: "sjdz_px",
			ele: "input",
			val: o.css("font-size").replace(/px/, "") || "",
			fun: function() {
				var t = $(this).val();
				e.find("." + p).css("font-size", t + "px"), o.mouseenter(), r.set()
			}
		}, {
			name: "字色",
			rule: "sjdz_color",
			ele: "input",
			val: o.css("color") || "",
			fun: function() {
				var t = $(this).val();
				e.find("." + p).css("color", t)
			}
		}, {
			name: "文字样式",
			ele: "font",
			val: {
				fontWeight: o.css("font-weight"),
				textDecoration: o.css("text-decoration"),
				align: o.css("text-align")
			},
			fun: function() {
				var t = $(this);
				if (t.hasClass("select")) t.hasClass("align") || (t.removeClass("select"), t.hasClass("fontWeight") && e.find("." + p).css("font-weight", ""), t.hasClass("textDecoration") && e.find("." + p).css("text-decoration", ""));
				else {
					if (t.addClass("select"), t.hasClass("align")) {
						function a(t) {
							e.find("." + t).css({
								display: "",
								"justify-content": "",
								"align-items": "",
								"text-align": "left"
							})
						}
						function i(t) {
							e.find("." + t).css({
								display: "flex",
								"justify-content": "center",
								"align-items": "center",
								"text-align": "center"
							})
						}
						function n(t) {
							e.find("." + t).css({
								display: "",
								"justify-content": "",
								"align-items": "",
								"text-align": "right"
							})
						}
						t.siblings(".align").removeClass("select"), t.hasClass("alignLeft") && ("sale30_ltxt" == p || "sale30_rtxt" == p || "sale30" == p ? (a("sale30_ltxt"), a("sale30_rtxt"), a("sale30")) : a(p)), t.hasClass("alignCenter") && ("sale30_ltxt" == p || "sale30_rtxt" == p || "sale30" == p ? (i("sale30_ltxt"), i("sale30_rtxt"), i("sale30")) : i(p)), t.hasClass("alignRight") && ("sale30_ltxt" == p || "sale30_rtxt" == p || "sale30" == p ? (n("sale30_ltxt"), n("sale30_rtxt"), n("sale30")) : n(p))
					}
					t.hasClass("fontWeight") && e.find("." + p).css("font-weight", "bold"), t.hasClass("textDecoration") && e.find("." + p).css("text-decoration", "line-through")
				}
				r.set()
			}
		}, {
			name: "背景色",
			rule: "sjdz_color",
			ele: "input",
			val: o.css("background-color"),
			fun: function() {
				var t = $(this).val();
				e.find("." + p).css("background-color", t)
			}
		}, {
			name: "背景图",
			rule: "sjdz_img_url",
			ele: "input",
			val: d,
			fun: function() {
				var t = $(this).val();
				t ? e.find("." + p).css("background-image", "url(" + t + ")") : e.find("." + p).css("background-image", "")
			}
		}, {
			name: "行间距",
			type: "number",
			class: "_lineHeight",
			ele: "input_range",
			min: 12,
			max: 3 * o[0].offsetHeight,
			val: "normal" != o.css("line-height") ? o.css("line-height").replace(/px/, "") : 20,
			fun: function() {
				var t = $(this).val();
				e.find("." + p).css("line-height", t + "px")
			}
		}, {
			name: "设置边框",
			ele: "buttom",
			fun: function() {
				var t = $(this);
				t.hasClass("select") ? (t.removeClass("select"), t.parent().siblings("._border").hide()) : (t.addClass("select"), t.parent().siblings("._border").fadeIn())
			}
		}, {
			name: "边框宽",
			rule: "sjdz_px",
			type: "number",
			class: "_border",
			ele: "input",
			val: o.css("border-width").replace(/px/, "") || 0,
			fun: function() {
				var t = $(this).val();
				c.css("border-width", t + "px"), e.find("." + p).css("border-width", t + "px"), r.set()
			}
		}, {
			name: "边框色",
			rule: "sjdz_color",
			class: "_border",
			ele: "input",
			val: o.css("border-color") || 0,
			fun: function() {
				var t = $(this).val();
				c.css("border-color", t), e.find("." + p).css("border-color", t)
			}
		}, {
			name: "框圆角",
			type: "number",
			class: "_border",
			ele: "input_range",
			min: 0,
			max: v,
			val: o.css("border-radius").replace(/px/, "") || 0,
			fun: function() {
				var t = $(this).val();
				c.css("border-radius", t + "px"), e.find("." + p).css("border-radius", t + "px")
			}
		}]), -1 != ["buypSrc", "addbuypSrc", "tagpSrc", "subpSrc1", "exp_allimg", "exp_allimg3"].indexOf(p) && (u = [{
			name: "替换图片",
			ele: "image",
			class: p + "_khide",
			val: o.find("img").attr("src"),
			href: o.attr("href") || "",
			group: 1,
			fun: function() {
				var a = $(this).attr("class"),
					i = $(this).val() || "";
				if ("imageHref" == a && (o.attr("href", i), n.items[f][{
					buypSrc: "itemLink",
					addbuypSrc: "addhref"
				}[p]] = i, e.attr("data-config", JSON.stringify(n))), "imageInput" == a && (i && o.find("img").attr("src") != i && (-1 != m.indexOf(p) ? (n[p] = i, e.find("." + p).find("img").attr("src", i), e.attr("data-config", JSON.stringify(n))) : (n.items[f][p] = i, o.find("img").attr("src", i), e.attr("data-config", JSON.stringify(n))), $(this).parents(".ui-image-rot").find("img").attr("src", i), N(i, function(t, a) {
					e.children(".item").eq(0).children("." + p).attr("data-" + p, '{"W":' + t + ',"H":' + a + "}"), o.mouseenter(), r.set()
				})), i || -1 != m.indexOf(p) ? i || -1 == m.indexOf(p) || e.find("." + p).css("visibility", "hidden") : (n.items[f][p] = "", o.find("img").attr("src", i), e.attr("data-config", JSON.stringify(n)), o.mouseenter())), "uiSetImage" == a) {
					var s = $(this).siblings("input");
					t.tu(function(t) {
						s.val(t)[0].onkeyup()
					})
				}
			}
		}]), "picUrl" == p && (u = [{
			name: "替换图片",
			ele: "image",
			class: p + "_khide",
			val: o.find("img").attr("src"),
			href: o.attr("href") || "",
			group: 1,
			fun: function() {
				var a = $(this).attr("class"),
					i = $(this).val() || "";
				if ("imageHref" == a && (o.attr("href", i), n.items[f].itemLink = i, e.attr("data-config", JSON.stringify(n))), "imageInput" == a && i && o.find("img").attr("src") != i && (-1 != m.indexOf(p) ? (n[p] = i, e.find("." + p).find("img").attr("src", i), e.attr("data-config", JSON.stringify(n))) : (n.items[f][p] = i, o.find("img").attr("src", i), e.attr("data-config", JSON.stringify(n))), $(this).parents(".ui-image-rot").find("img").attr("src", i), N(i, function(t, e) {
					o.mouseenter(), r.set()
				})), "uiSetImage" == a) {
					var s = $(this).siblings("input");
					t.tu(function(t) {
						s.val(t)[0].onkeyup()
					})
				}
			}
		}, {
			name: "图圆角",
			type: "number",
			class: "_picborder",
			ele: "input_range",
			min: 0,
			max: v,
			val: a.this.css("border-radius").replace(/px/, "") || 0,
			fun: function() {
				var t = $(this).val();
				e.find("." + p).css("border-radius", t + "px"), n.picUrlRadius = t, e.attr("data-config", JSON.stringify(n))
			}
		}, {
			name: "编辑宝贝图片",
			ele: "input_radio_2",
			checked: !e.find(".picUrl").attr("waria-disabled"),
			fun: function() {
				this.checked ? e.find(".picUrl").removeAttr("waria-disabled") : (e.find(".picUrl").attr("waria-disabled", !0), e.mousedown(), document.onmouseup())
			}
		}]);
		var b = ["title", "subtitle", "salePrice", "prece_ltxt", "reservePrice", "reservePrice_ltxt", "sale30", "sale30_ltxt", "sale30_rtxt", "buypSrc", "addbuypSrc", "tagpSrc", "subtitle2", "exp_alltxt", "subpSrc1", "exp_alltxt3", "exp_allimg", "exp_allimg3"],
			S = [];
		$.each(b, function(t, a) {
			"visible" == e.find("." + a).css("visibility") ? S[t] = !0 : S[t] = !1
		}), _({
			name: s,
			tabs: ["宝贝设置", "显示设置"],
			controls: [u, [{
				name: "显示开关",
				ele: "label"
			}, {
				name: ["标题", "小标", "价格", "价格前缀", "原价", "原价前缀", "销量", "销量前缀", "销量后缀", "购买图片", "加购图片", "促销标签", "扩展文本", "通用文本", "扩展图片", "通用文本_背景", "通用图片", "通用图片_背景"],
				val: b,
				checked: S,
				ele: "checkbox",
				appid: e.attr("appid"),
				class: "apwx_jbblb _apwx_jbblb_checkbox",
				fun: function() {
					var t, a = this.name,
						i = {
							exp_alltxt3: "通用文本-背景专用",
							title: "双击输入标题文字",
							subtitle: "请输入小标题",
							salePrice: "80.0",
							reservePrice: "168.0",
							sale30: "001",
							reservePrice_ltxt: "￥",
							prece_ltxt: "￥",
							sale30_ltxt: "已售",
							sale30_rtxt: "件",
							subtitle2: "双击可编辑扩展文本",
							exp_alltxt: "双击编辑通用文本2"
						};
					if (this.checked) try {
						var s = e.find("." + a)[0],
							l = e.children(".item")[0];
						l.offsetHeight - s.offsetTop <= 20 && e.find("." + a).css({
							top: l.offsetHeight - s.offsetHeight + "px"
						}), l.offsetWidth - s.offsetLeft <= 20 && e.find("." + a).css({
							left: l.offsetWidth - s.offsetWidth + "px"
						}), e.find("." + a).css("visibility", "visible"), t = e.find("." + a), $.each(t, function(t, e) {
							var s = $(e).parents(".item").attr("data-key"),
								l = i[a];
							if ($(e).children("pre").length && !$(e).children("pre").text() && s && a && l && ($(e).children("pre").text(l), n.items[s][a] = l), $(e).children("img").length && !$(e).children("img").attr("src") && s && a) {
								var r = "https://img.alicdn.com/imgextra/i1/1867852664/O1CN01i6tFOR1VY9cW9Bmlu_!!1867852664.jpg";
								$(e).children("img").attr("src", r), n.items[s][a] = r
							}
						}), e.attr("data-config", JSON.stringify(n))
					} catch (t) {
						layer.msg("err-visibility", {
							icon: 2,
							time: 3e3
						})
					} else e.find("." + a).css("visibility", "hidden");
					r.set()
				}
			}]]
		}, e, a)
	}, g.apwx_jwz = function(t, e) {
		var a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {},
			i = "编辑" + t.attr("appname") || "编辑文字",
			n = t.css("background-image"),
			s = Math.floor((t[0].offsetWidth < t[0].offsetHeight ? t[0].offsetWidth : t[0].offsetHeight) / 2);
		n = "none" == n ? "" : n.replace(/url?\(/, "").replace(/\)/, "").replace(/"/, "").replace(/"/, ""), _({
			name: i,
			tabs: ["内容设置"],
			controls: [
				[{
					name: "大小",
					type: "number",
					rule: "sjdz_px",
					ele: "input",
					val: t.css("font-size").replace(/px/, "") || "",
					fun: function() {
						var e = $(this).val();
						t.css("font-size", e + "px"), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).fontSize = e, t.attr("data-config", JSON.stringify(a)), r.set()
					}
				}, {
					name: "字色",
					rule: "sjdz_color",
					ele: "input",
					val: t.find("a").css("color") || "",
					fun: function() {
						var e = $(this).val();
						t.find("a").css("color", e), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).color = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "链接",
					rule: "sjdz_href_url",
					ele: "input",
					val: t.find("a").attr("href") || "",
					fun: function() {
						var e = $(this).val();
						t.find("a").attr("href", e), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).href = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "文字样式",
					ele: "font",
					val: {
						fontWeight: a.fontWeight,
						textDecoration: a.textDecoration,
						align: a.align
					},
					fun: function() {
						var e = $(this),
							i = t.find("pre").text();
						(a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).text != i && (a.text = i), e.hasClass("select") ? e.hasClass("align") || (e.removeClass("select"), e.hasClass("fontWeight") && (t.css("font-weight", ""), a.fontWeight = ""), e.hasClass("textDecoration") && (t.css("text-decoration", ""), a.textDecoration = "")) : (e.addClass("select"), e.hasClass("align") && (e.siblings(".align").removeClass("select"), e.hasClass("alignLeft") && (t.css({
							display: "",
							"justify-content": "",
							"align-items": "",
							"text-align": "left"
						}), a.align = "left"), e.hasClass("alignCenter") && (t.css({
							display: "flex",
							"justify-content": "center",
							"align-items": "center",
							"text-align": "center"
						}), a.align = "center"), e.hasClass("alignRight") && (t.css({
							display: "",
							"justify-content": "",
							"align-items": "",
							"text-align": "right"
						}), a.align = "right")), e.hasClass("fontWeight") && (t.css("font-weight", "bold"), a.fontWeight = "bold"), e.hasClass("textDecoration") && (t.css("text-decoration", "line-through"), a.textDecoration = "line-through")), t.attr("data-config", JSON.stringify(a)), r.set()
					}
				}, {
					name: "行间距",
					type: "number",
					ele: "input_range",
					min: 16,
					max: 100,
					val: a.lineHeight || 16,
					fun: function() {
						var e = $(this).val();
						t.css("line-height", e + "px"), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).lineHeight = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "左右距",
					type: "number",
					ele: "input_range",
					min: 0,
					max: 200,
					val: a.paddingLR || 0,
					fun: function() {
						var e = $(this).val();
						t.css("padding", "0 " + e + "px"), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).paddingLR = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "背景色",
					rule: "sjdz_color",
					ele: "input",
					val: t.css("background-color"),
					fun: function() {
						var e = $(this).val();
						t.css("background-color", e), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).bgColor = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "背景图",
					rule: "sjdz_img_url",
					ele: "input",
					val: n,
					fun: function() {
						var e = $(this).val();
						e ? (t.css("background-image", "url(" + e + ")"), N(e, function(e, i) {
							(a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).bgImg_width = e, a.bgImg_height = i, t.attr("data-config", JSON.stringify(a)), r.set()
						})) : t.css("background-image", ""), a.bgImg = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "设置边框",
					ele: "buttom",
					val: n,
					fun: function() {
						var t = $(this);
						t.hasClass("select") ? (t.removeClass("select"), t.parent().siblings("._border").hide()) : (t.addClass("select"), t.parent().siblings("._border").fadeIn())
					}
				}, {
					name: "边框宽",
					rule: "sjdz_px",
					type: "number",
					class: "_border",
					ele: "input",
					val: t.css("border-width").replace(/px/, "") || 0,
					fun: function() {
						var e = $(this).val();
						t.css("border-width", e + "px"), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).borderWidth = e, t.attr("data-config", JSON.stringify(a)), r.set()
					}
				}, {
					name: "边框色",
					rule: "sjdz_color",
					class: "_border",
					ele: "input",
					val: t.css("border-color") || 0,
					fun: function() {
						var e = $(this).val();
						t.css("border-color", e), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).borderColor = e, t.attr("data-config", JSON.stringify(a))
					}
				}, {
					name: "框圆角",
					type: "number",
					class: "_border",
					ele: "input_range",
					min: 0,
					max: s,
					val: t.css("border-radius").replace(/px/, "") || 0,
					fun: function() {
						var e = $(this).val();
						t.css("border-radius", e + "px"), (a = t.attr("data-config") ? JSON.parse(t.attr("data-config")) : {}).borderRadius = e, t.attr("data-config", JSON.stringify(a))
					}
				}]
			]
		}, t, e)
	}, g.apwx_jgwc = function(t, e) {
		g.apwx_jtup(t, e)
	}, g.apwx_jautoqt = function(e, a) {
		var i = e.attr("data-config") ? JSON.parse(e.attr("data-config")) : {};

		function n() {
			var t = e.find(".item_img");
			if (t.length) {
				$("#cutyulan_canvas").remove(), $(u).find(".ui-image-box").append("<canvas id='cutyulan_canvas' style='max-height:130px;max-width:222px;'></canvas>");
				var a = document.getElementById("cutyulan_canvas"),
					i = a.getContext("2d");
				a.width = e[0].offsetWidth, a.height = e[0].offsetHeight, $.each(t, function(t, e) {
					i.drawImage($(e).find("img")[0], e.offsetLeft, e.offsetTop)
				}), $("#cutyulan_canvas").siblings().hide()
			} else $(u).find(".ui-image-box").find("img").show()
		}
		function s(t) {
			t ? ($(u).find(".uiSetImage_default").show(), $(u).find(".uiSetImage").css("margin-top", "0px")) : ($(u).find(".uiSetImage_default").hide(), $(u).find(".uiSetImage").css("margin-top", "45px"))
		}
		function l(t) {
			t ? $(u).find("._imgCutEdit").append("<span class='cut_tip'>未切图</span>") : $(u).find(".cut_tip").remove()
		}
		function o(e, a) {
			let i = !1;
			t.uptu({
				val: "add_folderId"
			}, function(n) {
				if (i) return !1;
				i = !0, n ? -1 != n && setTimeout(() => {
					!
					function() {
						layer.closeAll(), layer.msg("正在上传图片...", {
							icon: 16,
							time: 3e4,
							shade: .2
						});
						var i = e.app.find(".item_img"),
							n = 0,
							s = !0,
							l = e.app.attr("file_name"),
							r = [];
						$.each(i, function(o, c) {
							var d = $(c).find("img").attr("src");
							if (d.indexOf("https://") >= 0) return layer.msg("已切图上传完成！", {
								time: 500,
								shade: .2
							}), !1;
							t.uptu({
								val: d,
								fileName: l + "_" + o,
								pos: o
							}, function(t) {
								try {
									n++;
									var l = JSON.parse(t),
										o = l.object;
									if (l.retry) return layer.msg("上传出现异常已修复，亲请重试！", {
										icon: 7,
										time: 3e3
									}), !1;
									if (!o) return console.info(l), console.info("小异常！"), s = !1, !1;
									var c = i.eq(o.pos);
									r[o.pos] = {
										config: {
											pSrc: o.url,
											width: c[0].offsetWidth,
											height: c[0].offsetHeight,
											appID: "auto" + (new Date).getTime()
										},
										pos: c[0].offsetWidth + "|" + c[0].offsetHeight + "|" + c[0].offsetTop + "|" + c[0].offsetLeft
									}, c.find("img").attr("src", o.url), layer.msg("图片" + o.pos + "上传成功！", {
										icon: 16,
										time: 3e4,
										shade: .2
									}), i.length == n && s && (e.config.cutpic = r, e.config.width = e.app[0].offsetWidth, e.config.height = e.app[0].offsetHeight, e.app.attr("data-config", JSON.stringify(e.config)), e.app.find(".item_img").find("span").remove(), e.app.find(".bg_img").attr("src", ""), layer.msg("已切图上传完成！", {
										time: 500,
										shade: .2
									}), a && a.call(r))
								} catch (t) {
									return layer.msg("上传图片异常,请关闭浏览器重试2", {
										icon: 2,
										time: 3e3
									}), !1
								}
							})
						})
					}()
				}, 100) : layer.msg("上传文件夹创建异常-请联系设计师", {
					icon: 2,
					time: 3e3
				})
			})
		}
		_({
			name: "编辑" + e.attr("appname") || "编辑智能切图",
			tabs: ["内容设置"],
			controls: [
				[{
					name: "图片",
					ele: "label"
				}, {
					name: "替换图片",
					class: "_imgCutEdit",
					ele: "image",
					val: e.find(".newAddpic").attr("src") || "",
					fun: function() {
						$(u).find(".updataImgcut").click()
					}
				}]
			]
		}, e, a), $(u).find(".econtrol").find(".ui-image-hove").prepend("<span class='uiSetImage_default' style='display:none;'>恢复默认</span>"), $(u).find(".econtrol").find(".ui-label").append("<div style='font-size: 12px;margin-top: 10px;color: #bababa;'>图宽750，支持高超过10000像素的图片，自动切图并上传到图片空间，如果切图失败建议<a class='sign_log_weex_ep'>登陆</a>再试</div>"), $(u).find(".econtrol").append("<div class='Imgcut_input'>宽度<input class='wid_cut_xxx' type='number' value='0' name='wid_cut_xxx' />高度<input class='hei_cut_xxx' type='number' value='0' name='hei_cut_xxx' /></div>"), $(u).find(".econtrol").append("<div class='Imgcut_upload'>自动切图</div>"), $(u).find(".econtrol").append("<div class='updataImgcut'><i>&#xe646;</i>上传图片</div>"), $(u).find(".econtrol").append("<div class='Imgcut_link'><label class='t'>热区</label><div class='addlk'><i>&#xe611;</i>添加热区</div></div>"), $(u).find(".updataImgcut").click(function() {
			e.find(".bg_file").click()
		}), $(u).find(".Imgcut_upload").click(function() {
			!
			function(t) {
				if (layer.msg("开始切图片中...", {
					icon: 16,
					time: 1e4,
					shade: .2
				}), 0 == e.find(".bg_img").height()) return e.find(".cut_over").length ? (o({
					app: e,
					config: i
				}, t), !1) : (layer.msg("请上传图片"), !1);
				var a = e.find(".bg_img_region")[0].bg_a;
				if (null == a) return layer.msg("请选择区域"), !1;
				$("#cutImg_canvas").length || $("body").append("<canvas id='cutImg_canvas' style='display:none;'></canvas>");
				var n = a.length,
					s = document.getElementById("cutImg_canvas"),
					l = s.getContext("2d"),
					r = e.find(".bg_img")[0],
					c = $("#code_cut").val();
				"jpg" == c && (c = "jpeg");
				e.find(".cut_over").empty();
				for (var d = 0; d < n; d++) s.width = a[d][2], s.height = a[d][3], l.clearRect(0, 0, a[d][2], a[d][3]), l.fillStyle = "#ffffff", l.fillRect(0, 0, a[d][2], a[d][3]), l.drawImage(r, -a[d][0], -a[d][1]), e.find(".cut_over").append("<div class='item_img' style='position: absolute;top:" + a[d][1] + "px;left:" + a[d][0] + "px;'><img src='" + s.toDataURL("image/jpeg") + "' /><span>" + (d + 1) + "</span></div>");
				e.find(".cut_over").height(e.find(".bg_img").height()), e.find(".cut_over").show().siblings().hide(), o({
					app: e,
					config: i
				}, t)
			}(function() {
				$(u).find(".Imgcut_upload").hide(), $(u).find(".Imgcut_input").hide(), l(!1), s(!1), r.set()
			})
		}), $(u).find(".sign_log_weex_ep").click(function() {
			$(".sign_log_weex").click()
		}), e.find(".bg_file").unbind("change"), e.find(".bg_file").bind("change", function() {
			layer.load(2);
			var t = this.files[0];
			if (!t || 0 != t.type.indexOf("image")) return layer.closeAll(), !1;
			var a = e.find(".bg_img")[0],
				n = new FileReader,
				r = t.name.split(".")[0];
			$(u).find(".wid_cut_xxx").val(0), $(u).find(".hei_cut_xxx").val(0), e.find(".bg_img_region").show().siblings().hide(), e.find(".cut_over").empty(), e.attr("file_name", r), n.onloadend = function() {
				a.src = n.result;
				let t = new Image;
				t.src = n.result, t.onload = function() {
					let t = this.width, a = this.height, r = Math.ceil(a / 600), o = Math.ceil(t / 800);
					i.cut_h = r, i.cut_w = o, e.css({
						width: t,
						height: a
					}), e.attr("data-config", JSON.stringify(i)), e.mouseenter(), e.find(".bg_img_region").bg_region({
						cut: "#adialog-box .num_cut_height",
						x_cut: "#adialog-box .num_cut_width",
						hei: "#adialog-box .hei_cut_xxx",
						wid: "#adialog-box .wid_cut_xxx",
						clear: "#adialog-box .bg_img_clear"
					}), P(!1), $(u).find("._imgCutEdit").show().find(".ui-image-box > img").attr("src", n.result), $(u).find(".Imgcut_upload").show(), $(u).find(".Imgcut_input").show(), $(u).find(".updataImgcut").hide(), $(u).find(".wid_cut_xxx").val(750).click().keyup(), $(u).find(".hei_cut_xxx").val(600).click().keyup(), layer.closeAll(), $(u).find(".ui-image-box").find("img").show().siblings().hide(), l(!0), i.cutpic.length && s(!0)
				}
			}, t ? n.readAsDataURL(t) : a.src = ""
		}), $(u).find(".addlk").click(function() {
			e.find(".newAddpic").attr("src") ? layer.msg("亲，先切图呢！", {
				icon: 7,
				time: 1e3
			}) : i.cutpic.length ? $(".weexApp #appDrawHots").hasClass("select") || $(".weexApp #appDrawHots").click() : layer.msg("亲，请先上传图片！", {
				icon: 7,
				time: 1e3
			})
		}), $(u).find(".uiSetImage_default").click(function() {
			e.find(".cut_over").empty(), $.each(i.cutpic, function(t, a) {
				e.find(".cut_over").append("<div class='item_img' style='position: absolute;top:" + a.pos.split("|")[2] + "px;left:" + a.pos.split("|")[3] + "px;'><img src='" + a.config.pSrc + "' /></div>")
			}), e.find(".cut_over").show().siblings().hide(), e.find(".newAddpic").attr("src", ""), e.css({
				width: i.width,
				height: i.height
			}), e.mouseenter(), $(u).find(".Imgcut_input").hide(), $(u).find(".Imgcut_upload").hide(), P(!1), n(), s(!1), l(!1)
		}), e.find(".newAddpic").attr("src") || e.find(".item_img").length || i.cutpic.length ? ($(u).find(".updataImgcut").hide(), l(!1), e.find(".newAddpic").attr("src") ? (l(!0), i.cutpic.length && s(!0)) : ($(u).find(".Imgcut_upload").hide(), $(u).find(".Imgcut_input").hide(), n())) : ($(u).find("._imgCutEdit").hide(), $(u).find(".Imgcut_upload").hide(), e.find(".cut_over").length && $(u).find(".Imgcut_input").hide()), (i.cut_h || i.cut_w) && e.find(".newAddpic").attr("src") && (e.find(".bg_img_region").bg_region({
			cut: "#adialog-box .num_cut_height",
			x_cut: "#adialog-box .num_cut_width",
			hei: "#adialog-box .hei_cut_xxx",
			wid: "#adialog-box .wid_cut_xxx",
			clear: "#adialog-box .bg_img_clear"
		}), $(u).find(".wid_cut_xxx").val(750).click().keyup(), $(u).find(".hei_cut_xxx").val(600).click().keyup())
	}, function(t, a) {
		if (c && c.token && 13 == c.token.search(".sjdz.")) {
			var i, n, s;
			if ($(h).unbind("click"), t) {
				a && (a = a);
				try {
					s = t.this || $(d).find(".wdraggable-ui-selected"), n = (i = s.hasClass("appovhi") ? s : s.parents(".appovhi")).data().apptype, $(u).empty(), g[n](i, t, a), P(!0), e(i, a, t)
				} catch (t) {
					console.info(t)
				}
			} else!
			function() {
				$(u).empty();
				var t = $(f).width(),
					e = $(f).height(),
					a = $(f).css("background-image"),
					i = $(f).css("background-color");
				a = "none" == a ? "" : a.replace(/url?\(/, "").replace(/\)/, "").replace(/"/, "").replace(/"/, ""), _({
					name: "页面设置",
					tabs: ["基本设置"],
					controls: [
						[{
							name: "宽度",
							title: "请输入页面宽度",
							type: "number",
							rule: "sjdz_px",
							id: "page_width",
							ele: "input",
							val: t,
							fun: function() {
								var t = $(this).val();
								$(f).css({
									width: t + "px"
								})
							}
						}, {
							name: "高度",
							title: "请输入页面高度",
							type: "number",
							rule: "sjdz_px",
							id: "page_height",
							ele: "input",
							val: e,
							fun: function() {
								var t = $(this).val();
								$(f).css({
									height: t + "px"
								}), $(d).find(".opBg").css({
									top: $(f)[0].offsetHeight
								})
							}
						}, {
							name: ["元素超出画布时可见"],
							val: ["videoShow"],
							checked: "visible" == $(".pageBox .box-inner").css("overflow") ? [!0] : [!1],
							ele: "checkbox",
							class: "_page_ovhi_",
							fun: function() {
								this.checked ? $(".pageBox .box-inner").css({
									overflow: "visible"
								}) : $(".pageBox .box-inner").css({
									overflow: "hidden"
								}), app.attr("data-config", JSON.stringify(config))
							}
						}, {
							name: "画布宽高-自动",
							ele: "buttom",
							id: "pageHauto",
							fun: function() {
								P(!1)
							}
						}, {
							name: "背景色",
							rule: "sjdz_color",
							id: "bgColor",
							ele: "input",
							val: i,
							fun: function() {
								var t = $(this).val();
								$(f).css({
									"background-color": t
								})
							}
						}, {
							name: "背景图",
							rule: "sjdz_img_url",
							id: "bgImg",
							ele: "input",
							val: a,
							fun: function() {
								var t = $(this).val();
								t ? ($(f).css({
									"background-image": "url(" + t + ")"
								}), a != t && N(t, function(t, e) {
									$(f).attr("data-bgImgSize", '{"width":' + t + ',"height":' + e + "}")
								})) : ($(f).css({
									"background-image": ""
								}), $(f).attr("data-bgImgSize", ""))
							}
						}]
					]
				})
			}(), e("close");
			try {
				z(), s.hasClass("appovhi") || ($(u).children(".rhd").prepend("<buttom class='edit_parent' data-title='编辑父元素'>&#xe635;</buttom>"), $(u).find(".edit_parent").click(function() {
					i.mouseenter(), i.mousedown(), document.onmouseup()
				}))
			} catch (t) {}
		}
	}
});