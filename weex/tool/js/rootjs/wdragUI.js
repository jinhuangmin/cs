$.fn.wdragUI = function(e, t) {
	"use strict";
	var i = {
		ui: "",
		ui_OS: [],
		ui_ES: [],
		ui_XYS: [],
		ui_clone: [],
		ui_width: 6,
		ui_ctrl: !1,
		ui_darg: !0,
		borderparent: e.borderparent || !1,
		bordername: e.bordername || "0"
	},
		s = $(this);

	function a(e) {
		$(".wdraggable-ui").removeClass("uiOnlyi-temp"), e.addClass("uiOnlyi-temp");
		var t = e.attr("data-i"),
			i = $(".wdraggable-ui[data-i=" + t + "]"),
			s = 0;
		if (!t) return e.attr("data-i", o()), !1;
		if (!(i.length > 1)) return e.removeClass("uiOnlyi-temp"), !1;

		function o() {
			for (var e = 0; $(".wdraggable-ui[data-i=" + e + "]").length;) e++;
			return e
		}
		s = o(), $.each(i, function(t, i) {
			if (!$(i).hasClass("uiOnlyi-temp")) return $(i).attr("data-i", s), a(e), !1
		})
	}
	function o(t) {
		if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
		var a = s.parents("div[data-ui=wdragUI]").length > 0 ? s.parents("div[data-ui=wdragUI]") : $("body"),
			o = '<div class="jedit-border"><div class="jui-shandler jui-shandler-n" data-resizable="n"></div><div class="jui-shandler jui-shandler-e" data-resizable="e"></div><div class="jui-shandler jui-shandler-s" data-resizable="s"></div><div class="jui-shandler jui-shandler-w" data-resizable="w"></div><div class="jui-shandler jui-shandler-bl" data-resizable="bl"></div><div class="jui-shandler jui-shandler-br" data-resizable="br"></div><div class="jui-shandler jui-shandler-tl" data-resizable="tl"></div><div class="jui-shandler jui-shandler-tr" data-resizable="tr"></div></div>',
			n = $(t),
			r = n.attr("data-i"),
			d = "jedit-box-" + r,
			l = a.find("." + d),
			c = a.find(".wdragUi-shands_" + i.bordername);
		c.length || (i.borderparent ? i.borderparent.append("<div class='wdragUiKzroot wdragUi-shands_" + i.bordername + "'></div>") : n.parent().after("<div class='wdragUiKzroot wdragUi-shands_" + i.bordername + "'></div>"), c = a.find(".wdragUi-shands_" + i.bordername)), l.length > 0 ? (u(n, l), l.show()) : (o = u(n, $(o), !0), (o = $(o).addClass(d)).attr("data-i", r), c.append(o))
	}
	function u(t, s, a) {
		if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
		a = a || !1;
		var o = t[0].offsetWidth,
			u = t[0].offsetHeight,
			n = d(t, "left"),
			r = d(t, "top");

		function d(e, t) {
			var i = parseInt(e.css(t)),
				s = e.parent();
			return "absolute" == s.css("position") && (i += d(s, t)), i
		}
		return s.css("transform", t.css("transform")), s.css({
			top: r,
			left: n
		}), s.children(".jui-shandler-n").css({
			width: o,
			height: i.ui_width + "px",
			top: -i.ui_width + "px",
			left: 0
		}), s.children(".jui-shandler-e").css({
			width: i.ui_width + "px",
			height: u,
			top: 0,
			left: parseInt(o) + "px"
		}), s.children(".jui-shandler-s").css({
			width: o,
			height: i.ui_width + "px",
			top: parseInt(u) + "px",
			left: 0
		}), s.children(".jui-shandler-w").css({
			width: i.ui_width + "px",
			height: u,
			top: 0,
			left: -i.ui_width + "px"
		}), s.children(".jui-shandler-bl").css({
			top: parseInt(u) - 7 + "px",
			left: "-4px"
		}), s.children(".jui-shandler-br").css({
			top: parseInt(u) - 7 + "px",
			left: parseInt(o) - 6 + "px"
		}), s.children(".jui-shandler-tl").css({
			top: "-3px",
			left: "-4px"
		}), s.children(".jui-shandler-tr").css({
			top: "-3px",
			left: parseInt(o) - 6 + "px"
		}), a ? s : void 0
	}
	function n() {
		if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
		var t = $(".jedit-SHOW");
		i.ui_OS = [], i.ui_ES = [], i.ui_XYS = [], i.ui_clone = [], $.each(t, function(e, t) {
			var s = $(".wdraggable-ui[data-i=" + $(t).data().i + "]")[0];
			i.ui_OS.push(s), i.ui_ES.push($(t)), i.ui_XYS.push({
				W: s.offsetWidth,
				H: s.offsetHeight,
				L: s.offsetLeft,
				T: s.offsetTop,
				MAX_T: s.offsetHeight + s.offsetTop - 20,
				MAX_L: s.offsetWidth + s.offsetLeft - 20
			}), i.ui_clone[e] = !0
		})
	}
	function r() {
		var e;
		return window.pageYOffset ? e = window.pageYOffset : document.compatMode && "BackCompat" != document.compatMode ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop), e
	}!
	function() {
		try {
			s.addClass("wdraggable-ui");
			var d = $(".wdraggable-ui");
			$.each(d, function(e, t) {
				$(t).data().group && $(t).find(".wdraggable-ui-children").addClass("wdraggable-ui")
			}), $(".wdraggable-ui").removeClass("wdraggable-ui-selected"), i.ui = $(".wdraggable-ui"), function() {
				var d, l;
				if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
				i.ui.unbind("mousedown mouseenter mouseleave mouseup dblclick"), i.ui.bind({
					dblclick: function(e) {
						var e = e || event;
						e.stopPropagation(), t && $.isFunction(t.dblclick) && t.dblclick.call({
							this: $(this)
						})
					},
					mouseenter: function(e) {
						var s;
						if ($(this).attr("waria-disabled")) {
							var u = $(this).parents(".wdraggable-ui");
							if (!u.length || u.attr("waria-disabled")) return !1;
							s = u[0]
						} else s = this;
						var n = $(s).attr("waria-locking");
						$(s).data().group;
						a($(s)), i.ui = $(".wdraggable-ui"), o(s);
						var e = e || event,
							r = $(s).attr("data-i"),
							d = $(".jedit-box-" + r);
						!d.hasClass("jedit-SHOW") && (d.addClass("jedit-hover"), n ? (d.addClass("jedit-locking"), $(s).css("cursor", "auto")) : d.removeClass("jedit-locking")), t && $.isFunction(t.mouse) && t.mouse.call({
							ui: i.ui_OS,
							uiXY: i.ui_XYS,
							this: $(this),
							type: "mouseenter"
						})
					},
					mouseleave: function(e) {
						if ($(this).attr("waria-disabled")) return !1;
						var e = e || event,
							s = $(this).attr("data-i"),
							a = $(".jedit-box-" + s);
						!a.hasClass("jedit-ctrl") && !a.hasClass("jedit-SHOW") && (a.hide(), a.removeClass("jedit-hover")), t && $.isFunction(t.mouse) && t.mouse.call({
							ui: i.ui_OS,
							uiXY: i.ui_XYS,
							this: $(this),
							type: "mouseleave"
						})
					},
					mousedown: function(o) {
						var c = $(".wdraggable-ui[waria-texteditor=true]");
						if (d = $(this).attr("waria-locking"), (l = $(this).attr("waria-texteditor")) && $(this).addClass("waria-texteditor-temp"), $(".wdraggable-ui").removeClass("uiOnlyi-temp"), $.each(c, function(e, t) {
							$(t).hasClass("waria-texteditor-temp") ? $(t).removeClass("waria-texteditor-temp") : $(t).removeAttr("waria-texteditor").find(".text-textarea").blur()
						}), t && $.isFunction(t.mouse) && t.mouse.call({
							ui: i.ui_OS,
							uiXY: i.ui_XYS,
							this: $(this),
							type: "mousedown"
						}), !$(this).attr("waria-disabled")) {
							var f, h = $(this),
								p = h.data().group,
								_ = (h.attr("position-sync"), this.offsetLeft),
								g = this.offsetTop,
								b = h.attr("disabled-resizable") || null,
								S = $(this).attr("data-i"),
								m = $(".jedit-box-" + S),
								v = !1,
								o = o || event,
								x = o.clientX,
								X = o.clientY,
								w = [];
							if (o.stopPropagation(), p) {
								var j = $(this).find(".wdraggable-ui");
								j.removeClass("wdraggable-ui-selected"), $.each(j, function(e, t) {
									(O = $(t).attr("data-i")) && $(".jedit-box-" + O).removeClass("jedit-SHOW").removeClass("jedit-ctrl").hide(), !0
								})
							} else {
								var Y = $(this).hasClass("wdraggable-ui-children");
								if (Y) {
									var y = $(this).parents(".wdraggable-ui[data-group=true]"),
										O = 0;
									y && (O = y.attr("data-i"), y.removeClass("wdraggable-ui-selected"), $(".jedit-box-" + O).removeClass("jedit-SHOW").removeClass("jedit-ctrl").hide())
								}
							}
							if (m.removeClass("jedit-hover"), m.addClass("jedit-SHOW"), b ? m.addClass("jedit-disabledResizable") : m.removeClass("jedit-disabledResizable"), o.ctrlKey && (m.hasClass("jedit-ctrl") ? m.removeClass("jedit-ctrl jedit-SHOW").hide() : $(".jedit-SHOW").addClass("jedit-ctrl")), m.siblings(".jedit-border").hide().removeClass("jedit-SHOW"), $(".jedit-ctrl").show().addClass("jedit-SHOW"), $(".wdraggable-ui").removeClass("wdraggable-ui-selected"), h.addClass("wdraggable-ui-selected"), a(h), n(), $.each(i.ui_OS, function(e, t) {
								w[e] = {
									width: t.offsetWidth,
									height: t.offsetHeight,
									top: t.offsetTop,
									left: t.offsetLeft
								}
							}), document.onmousemove = function(s) {
								if (d) return !1;
								if (!l) {
									var s = s || event,
										o = s.clientX,
										n = s.clientY;
									v || (Math.abs(o - x) > 2 || Math.abs(n - X) > 2) && (v = !0), $.each(i.ui_OS, function(e, r) {
										if (s.altKey && 0 != i.ui_clone[e] && !$(r).hasClass("wdraggable-ui-children")) {
											var d = $(r).clone(!0).attr("data-i", i.ui.length);
											a($(r)), $(r).before(d), i.ui.push(d[0]), i.ui_clone[e] = !1, t && $.isFunction(t.copy) && t.copy.call({
												ui: i.ui_OS,
												uiXY: i.ui_XYS,
												this: $(r)
											})
										}
										var l = x - i.ui_XYS[e].L,
											c = X - i.ui_XYS[e].T,
											h = Math.abs(o - l - i.ui_XYS[e].L),
											p = Math.abs(n - c - i.ui_XYS[e].T);
										s.shiftKey ? (f || (f = h > p ? "x" : "y"), "x" == f ? $(r).css({
											top: i.ui_XYS[e].T + "px",
											left: o - l + "px"
										}) : $(r).css({
											top: n - c + "px",
											left: i.ui_XYS[e].L + "px"
										})) : ($(r).css({
											top: n - c + "px",
											left: o - l + "px"
										}), f && (f = !1)), u($(r), i.ui_ES[e])
									}), function(t) {
										if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
										i.ui_OS;
										var s = !1,
											a = parseInt(t.css("left")),
											o = parseInt(t.css("top")),
											n = [],
											d = t.siblings(".wdraggable-ui");
										if (d[d.length] = t.parent()[0], d.length += 1, d.each(function() {
											var e = Number($(this).css("left").split("px")[0]),
												i = Number($(this).css("top").split("px")[0]),
												u = Number($(this).css("left").split("px")[0]) + $(this).outerWidth(),
												r = Number($(this).css("top").split("px")[0]) + $(this).outerHeight(),
												d = a + t.outerWidth(),
												l = o + t.outerHeight();
											a - e <= 2 && a - e >= -2 ? (t.css({
												left: e
											}), s = !0, $.inArray("left") && (n[n.length] = "left")) : a - u <= 2 && a - u >= -2 ? (t.css({
												left: u
											}), s = !0, $.inArray("left") && (n[n.length] = "left")) : d - e <= 2 && d - e >= -2 ? (t.css({
												left: e - t.outerWidth()
											}), s = !0, $.inArray("right") && (n[n.length] = "right")) : d - u <= 2 && d - u >= -2 && (t.css({
												left: u - t.outerWidth()
											}), s = !0, $.inArray("right") && (n[n.length] = "right")), o - i <= 2 && o - i >= -2 ? (t.css({
												top: i
											}), s = !0, $.inArray("top") && (n[n.length] = "top")) : o - r <= 2 && o - r >= -2 ? (t.css({
												top: r
											}), s = !0, $.inArray("top") && (n[n.length] = "top")) : l - i <= 2 && l - i >= -2 ? (t.css({
												top: i - t.outerHeight()
											}), s = !0, $.inArray("bottom") && (n[n.length] = "bottom")) : l - r <= 2 && l - r >= -2 && (t.css({
												top: r - t.outerHeight()
											}), s = !0, $.inArray("bottom") && (n[n.length] = "bottom"))
										}), s) {
											if ($(".auxiliaryLine").length) {
												if ($(".auxiliaryLine").hide(), n.length) for (var l = 0; l < n.length; l++) $("#fix_" + n[l]).show();
												$("#fix_top").css("top", t.offset().top - r()), $("#fix_bottom").css("top", t.offset().top - 1 + t.outerHeight() - r()), $("#fix_left").css("left", t.offset().left), $("#fix_right").css("left", t.offset().left - 1 + t.outerWidth()), u(t, $(".jedit-box-" + t.attr("data-i")))
											}
										} else $(".auxiliaryLine").hide()
									}(h), t && $.isFunction(t.drag) && t.drag.call({
										ui: i.ui_OS,
										uiXY: i.ui_XYS,
										this: h
									})
								}
							}, document.onmouseup = function(a) {
								var o, r = h.parents(".wdraggable-ui[data-sync=true]"),
									l = [],
									c = $(i.ui_OS),
									a = a || event,
									f = h[0].offsetLeft - _,
									p = h[0].offsetTop - g,
									b = {};
								$.each(c, function(e, t) {
									$(t).css({
										top: w[e].top + p + "px",
										left: w[e].left + f + "px"
									})
								}), r.length && (c.addClass("this_Temp"), $.each(c, function(e, t) {
									let i = $(t).attr("position-sync");
									f = t.offsetLeft - w[e].left, p = t.offsetTop - w[e].top, i && (-1 == l.indexOf(i) && (o = r.find(".wdraggable-ui[position-sync=" + i + "]")).length && $.each(o, function(e, t) {
										$(t).hasClass("this_Temp") || $(t).css({
											top: t.offsetTop + p + "px",
											left: t.offsetLeft + f + "px"
										})
									}), l.push(i))
								}), b.x = f, b.y = p, b.ui = o, c.removeClass("this_Temp")), document._UI_FLAG_ || a.ctrlKey ? $(".jedit-SHOW").addClass("jedit-ctrl") : v || ($(".jedit-border").removeClass("jedit-ctrl"), m.siblings(".jedit-SHOW").removeClass("jedit-SHOW").hide()), v = !1, n(), function(a) {
									if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
									$(".jui-shandler").unbind("mousedown"), $(".jui-shandler").bind({
										mousedown: function(e) {
											if (d || $(this).hasClass("disabledResizable")) return !1;
											$(".jedit-SHOW");
											var o, r, l, c, f = $(this).data().resizable,
												h = $(this).css("cursor"),
												e = e || event,
												p = e.clientX,
												_ = e.clientY,
												g = 20,
												b = (a[0].offsetTop, a[0].offsetLeft, a.attr("position-sync"), []);
											$.each(i.ui_OS, function(e, t) {
												b.push({
													width: t.offsetWidth,
													height: t.offsetHeight,
													top: t.offsetTop,
													left: t.offsetLeft
												})
											}), e.stopPropagation(), e.preventDefault(), $("body").css({
												cursor: h
											}), s.parent().css({
												cursor: h
											}), document.onmousemove = function(e) {
												var e = e || event,
													s = e.clientX,
													n = e.clientY,
													d = s - p,
													h = n - _;
												switch (f) {
												case "n":
													$.each(i.ui_OS, function(e, t) {
														r = i.ui_XYS[e].H - h < 20 ? 20 : i.ui_XYS[e].H - h, l = i.ui_XYS[e].T + h < i.ui_XYS[e].MAX_T ? i.ui_XYS[e].T + h : i.ui_XYS[e].MAX_T, $(t).css({
															height: r + "px",
															top: l + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "e":
													$.each(i.ui_OS, function(e, t) {
														o = i.ui_XYS[e].W + d < g ? g : i.ui_XYS[e].W + d, $(t).css({
															width: o + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "s":
													$.each(i.ui_OS, function(e, t) {
														r = i.ui_XYS[e].H + h < 20 ? 20 : i.ui_XYS[e].H + h, $(t).css({
															height: r + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "w":
													$.each(i.ui_OS, function(e, t) {
														o = i.ui_XYS[e].W - d < g ? g : i.ui_XYS[e].W - d, c = i.ui_XYS[e].L + d < i.ui_XYS[e].MAX_L ? i.ui_XYS[e].L + d : i.ui_XYS[e].MAX_L, $(t).css({
															width: o + "px",
															left: c + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "bl":
													$.each(i.ui_OS, function(e, t) {
														o = b(h, i.ui_XYS[e].H, i.ui_XYS[e].W, e, "+", "-"), r = i.ui_XYS[e].H + h < 20 ? 20 : i.ui_XYS[e].H + h, c = i.ui_XYS[e].L + (i.ui_XYS[e].W - o) < i.ui_XYS[e].MAX_L ? i.ui_XYS[e].L + (i.ui_XYS[e].W - o) : i.ui_XYS[e].MAX_L, $(t).css({
															width: o + "px",
															height: r + "px",
															left: c + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "br":
													$.each(i.ui_OS, function(e, t) {
														o = b(h, i.ui_XYS[e].H, i.ui_XYS[e].W, e, "+", "+"), r = i.ui_XYS[e].H + h < 20 ? 20 : i.ui_XYS[e].H + h, $(t).css({
															width: o + "px",
															height: r + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "tl":
													$.each(i.ui_OS, function(e, t) {
														o = b(h, i.ui_XYS[e].H, i.ui_XYS[e].W, e, "-", "-"), r = i.ui_XYS[e].H - h < 20 ? 20 : i.ui_XYS[e].H - h, l = i.ui_XYS[e].T + h < i.ui_XYS[e].MAX_T ? i.ui_XYS[e].T + h : i.ui_XYS[e].MAX_T, c = i.ui_XYS[e].L + (i.ui_XYS[e].W - o) < i.ui_XYS[e].MAX_L ? i.ui_XYS[e].L + (i.ui_XYS[e].W - o) : i.ui_XYS[e].MAX_L, $(t).css({
															width: o + "px",
															height: r + "px",
															left: c + "px",
															top: l + "px"
														}), u($(t), i.ui_ES[e])
													});
													break;
												case "tr":
													$.each(i.ui_OS, function(e, t) {
														o = b(h, i.ui_XYS[e].H, i.ui_XYS[e].W, e, "-", "+"), r = i.ui_XYS[e].H - h < 20 ? 20 : i.ui_XYS[e].H - h, l = i.ui_XYS[e].T + h < i.ui_XYS[e].MAX_T ? i.ui_XYS[e].T + h : i.ui_XYS[e].MAX_T, $(t).css({
															width: o + "px",
															height: r + "px",
															top: l + "px"
														}), u($(t), i.ui_ES[e])
													})
												}
												function b(t, s, a, o, u, n) {
													var r = 0,
														l = 0;
													return t = parseFloat(t), s = parseFloat(s), e.shiftKey ? (r = s <= 0 ? 0 : (r = t / s, r = Number(r.toFixed(3)), r = Math.round(r * a)), "+" == u && (l = i.ui_XYS[o].W + r < g ? g : i.ui_XYS[o].W + r), "-" == u && (l = i.ui_XYS[o].W - r < g ? g : i.ui_XYS[o].W - r)) : ("+" == n && (l = i.ui_XYS[o].W + d < g ? g : i.ui_XYS[o].W + d), "-" == n && (l = i.ui_XYS[o].W - d < g ? g : i.ui_XYS[o].W - d)), l
												}
												t && $.isFunction(t.resizable) && t.resizable.call({
													ui: i.ui_OS,
													uiXY: i.ui_XYS,
													this: a
												})
											}, document.onmouseup = function() {
												var e, t, o, u, r, d = a.parents(".wdraggable-ui[data-sync=true]"),
													l = [],
													c = $(i.ui_OS),
													f = {};
												d.length && (c.addClass("this_Temp"), $.each(c, function(i, s) {
													let a = $(s).attr("position-sync");
													t = s.offsetLeft - b[i].left, o = s.offsetTop - b[i].top, u = s.offsetWidth - b[i].width, r = s.offsetHeight - b[i].height, a && (-1 == l.indexOf(a) && (e = d.find(".wdraggable-ui[position-sync=" + a + "]")).length && $.each(e, function(e, i) {
														$(i).hasClass("this_Temp") || $(i).css({
															width: i.offsetWidth + u + "px",
															height: i.offsetHeight + r + "px",
															top: i.offsetTop + o + "px",
															left: i.offsetLeft + t + "px"
														})
													}), l.push(a))
												}), f.x = t, f.y = o, f.ui = e, c.removeClass("this_Temp")), n(), $("body").css({
													cursor: "auto"
												}), s.parent().css({
													cursor: "auto"
												}), $(".auxiliaryLine").hide(), document.onmousemove = null, document.onmouseup = null
											}
										}
									})
								}(h), t && $.isFunction(t.stop) && t.stop.call({
									ui: i.ui_OS,
									uiXY: i.ui_XYS,
									this: h,
									sync: b
								}), $(".auxiliaryLine").hide(), document.onmousemove = null, document.onmouseup = null
							}, "true" != l) return !1
						}
					},
					mouseup: function() {
						t && $.isFunction(t.mouse) && t.mouse.call({
							ui: i.ui_OS,
							uiXY: i.ui_XYS,
							this: $(this),
							type: "mouseup"
						})
					}
				}), $(document).unbind("keydown keyup"), $(document).bind({
					keydown: function(e) {
						var e = e || event,
							s = e.keyCode,
							o = $(".jedit-SHOW"),
							n = [];
						$(i.ui_OS).attr("waria-locking-size");
						if ($.each(i.ui_OS, function(e, t) {
							var i = $(t).attr("position-sync"); - 1 == n.indexOf(i) && n.push(i)
						}), e.ctrlKey && 67 == s && (d || (document._UI_CTRL_C_ = !0)), e.ctrlKey && 86 == s && document._UI_CTRL_C_ && i.ui_OS.length && !l) {
							var r = !1;
							$.each(i.ui_OS, function(e, s) {
								if (!$(s).hasClass("wdraggable-ui-children")) {
									var o = $(s).clone(!0).attr("data-i", i.ui.length);
									a($(s)), $(s).before(o), i.ui.push(o[0]), t && $.isFunction(t.copy) && t.copy.call({
										ui: i.ui_OS,
										uiXY: i.ui_XYS,
										this: $(s)
									}), r = !0
								}
								u($(s), i.ui_ES[e])
							});
							try {
								r && layer.msg("复制成功,请移动模块")
							} catch (e) {}
						}
						function c(e, t, s) {
							var a, o, u = $(i.ui_OS),
								r = e.attr("position-sync"),
								d = e.parents(".wdraggable-ui[data-sync=true]");
							d.length && n.length && (u.addClass("this_Temp"), -1 != (o = n.indexOf(r)) && ((a = d.find(".wdraggable-ui[position-sync=" + r + "]")).length && $.each(a, function(e, i) {
								$(i).hasClass("this_Temp") || ("-" == s ? $(i).css(t, ("top" == t ? i.offsetTop - 1 : i.offsetLeft - 1) + "px") : $(i).css(t, ("top" == t ? i.offsetTop + 1 : i.offsetLeft + 1) + "px"))
							}), n.splice(o, 1)), u.removeClass("this_Temp"))
						}
						o.length && !l && (38 != s || d || (e.preventDefault(), $.each(i.ui_OS, function(e, t) {
							$(t).css({
								top: t.offsetTop - 1 + "px"
							}), u($(t), i.ui_ES[e]), c($(t), "top", "-")
						})), 39 != s || d || (e.preventDefault(), $.each(i.ui_OS, function(e, t) {
							$(t).css({
								left: t.offsetLeft + 1 + "px"
							}), u($(t), i.ui_ES[e]), c($(t), "left", "+")
						})), 40 != s || d || (e.preventDefault(), $.each(i.ui_OS, function(e, t) {
							$(t).css({
								top: t.offsetTop + 1 + "px"
							}), u($(t), i.ui_ES[e]), c($(t), "top", "+")
						})), 37 != s || d || (e.preventDefault(), $.each(i.ui_OS, function(e, t) {
							$(t).css({
								left: t.offsetLeft - 1 + "px"
							}), u($(t), i.ui_ES[e]), c($(t), "left", "-")
						})), e.altKey && "move" == $(".wdraggable-ui").css("cursor") && $(".wdraggable-ui").css("cursor", "copy")), t && $.isFunction(t.keydown) && t.keydown.call({
							e: e,
							ui: i.ui_OS,
							uiXY: i.ui_XYS
						})
					},
					keyup: function(e) {
						var e = e || event,
							s = e.keyCode,
							a = $(".jedit-SHOW");
						t && $.isFunction(t.keyup) && t.keyup.call({
							e: e,
							ui: i.ui_OS,
							uiXY: i.ui_XYS
						}), a.length && (46 == s && (e.preventDefault(), $.each(i.ui_OS, function(s, a) {
							var o = !0;
							$(a).hasClass("wdraggable-ui-children") ? o = !1 : ($(a).remove(), $(".jedit-SHOW").remove(), $(".jedit-border").hide()), t && $.isFunction(t.remove) && t.remove.call({
								e: e,
								ui: i.ui_OS,
								uiXY: i.ui_XYS,
								remove: o,
								index: s,
								total: i.ui_OS.length
							})
						})), 18 == s && $(".wdraggable-ui").css("cursor", "move"))
					}
				})
			}(), function() {
				if (!e._sjdz_token_ || 13 != e._sjdz_token_.search(".sjdz.")) return !1;
				var t = $('<div class="auxiliaryLine" id="fix_top"></div>'),
					i = $('<div class="auxiliaryLine" id="fix_bottom"></div>'),
					s = $('<div class="auxiliaryLine" id="fix_left"></div>'),
					a = $('<div class="auxiliaryLine" id="fix_right"></div>');
				$("#uicss").length || $("head").append(['<style id="uicss">.auxiliaryLine{ position:fixed;background-color:#fb02f4;z-index:999999992;display:none; } #fix_top, #fix_bottom{height:1px;width:100%;left:0;} #fix_left, #fix_right{ width:1px;height:100%;top:0; } ', "</style>"].join(""));
				$("#fix_top").length || $("body").append(t);
				$("#fix_bottom").length || $("body").append(i);
				$("#fix_left").length || $("body").append(s);
				$("#fix_right").length || $("body").append(a)
			}(), (l = s.parents("div[data-boxselect=open]")).off(), l.on("mousedown", function(e) {
				$(this);
				var e = e || event,
					t = e.clientX,
					s = e.clientY,
					u = l,
					r = parseInt(t - u.offset().left + l.scrollLeft()),
					d = parseInt(s - u.offset().top + l.scrollTop()),
					c = $('<div class="boxselect-open-temp" style="border:1px dashed blue;background:#5a72f8;filter:alpha(opacity:20);opacity:0.2;position:absolute;z-index:100;"></div>'),
					f = l.find(".suptb-hotLinks").is(":visible") ? l.find("a.wdraggable-ui") : l.find("div.wdraggable-ui"),
					h = [],
					p = {};
				l.append(c), $.each(f, function(e, t) {
					$(t).hasClass("wdraggable-ui-children") || h.push({
						t: t.offsetTop,
						l: t.offsetLeft,
						b: t.offsetTop + t.offsetHeight,
						r: t.offsetLeft + t.offsetWidth,
						d: t
					})
				}), document.onmousemove = function(e) {
					var e = e || event,
						i = e.clientX,
						a = e.clientY,
						o = i - t,
						u = a - s,
						n = $(".boxselect-open-temp"),
						l = d,
						c = r;
					u < 0 && (l = d + u), o < 0 && (c = r + o), p = {
						width: Math.abs(o),
						height: Math.abs(u),
						top: l,
						left: c
					}, n.css(p)
				}, document.onmouseup = function(e) {
					var t, s, u;
					$(".boxselect-open-temp").remove(), i.ui = $(".wdraggable-ui"), h.length && $.each(h, function(e, i) {
						i.b > p.top && p.top + p.height > i.t && (i.l > p.left && i.l < p.left + p.width || i.l < p.left && i.r > p.left) ? (o(i.d), t = $(i.d).attr("data-i"), s = $(".jedit-box-" + t), u = $(i.d), s.addClass("jedit-SHOW jedit-ctrl"), s.removeClass("jedit-hover"), a($(i.d))) : (t = $(i.d).attr("data-i"), (s = $(".jedit-box-" + t)).removeClass("jedit-SHOW jedit-ctrl"))
					}), u && (n(), u.mouseenter(), u.mousedown(), document._UI_FLAG_ = !0, document.onmouseup(), document._UI_FLAG_ = !1), document.onmousemove = null, document.onmouseup = null
				}
			}), e && (e.hide ? ($(".jedit-border").removeClass("jedit-SHOW").removeClass("jedit-ctrl").hide(), n()) : e.disabled ? (s.attr("waria-disabled", !0), $(".jedit-border").removeClass("jedit-SHOW").removeClass("jedit-ctrl").hide(), s.css({
				cursor: "auto"
			})) : (s.attr("waria-disabled", ""), s.css({
				cursor: "move"
			})))
		} catch (e) {
			console.info(e)
		}
		var l
	}()
};