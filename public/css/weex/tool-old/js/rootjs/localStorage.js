define(["jquery"], function(e) {
	var t = {
		callback: null,
		storageKey: 0,
		storagePrveKey: 0,
		storageName: "_sjdz_weex_",
		storageCanvas: "#SJDZ_APP",
		prev: ".histRecord .prev",
		next: ".histRecord .next",
		start: function(t) {
			var r = this,
				a = this.check();
			return t && (this.callback = t), e(this.prev).unbind("click"), e(this.prev).bind("click", function() {
				if (!e(this).hasClass("_records")) return !1;
				r.storagePrveKey--, r.storagePrveKey < 0 && (r.storagePrveKey = 0), r.storagePrveKey >= 0 ? (r.get(r.storagePrveKey), e(r.next).addClass("_records")) : e(this).removeClass("_records"), r.storagePrveKey || e(this).removeClass("_records")
			}), e(this.next).unbind("click"), e(this.next).bind("click", function() {
				if (!e(this).hasClass("_records")) return !1;
				r.storagePrveKey++, r.storagePrveKey > r.storageKey && (r.storagePrveKey = r.storageKey), r.storagePrveKey <= r.storageKey ? (r.get(r.storagePrveKey), e(r.prev).addClass("_records")) : e(this).removeClass("_records"), r.storagePrveKey >= r.storageKey && e(this).removeClass("_records")
			}), a
		},
		check: function() {
			try {
				if ("undefined" == typeof Storage) return -1;
				for (;;) {
					if (!localStorage.getItem(this.storageName + this.storageKey)) return this.storageKey > 0 ? (this.storagePrveKey = this.storageKey - 1, e(this.prev).addClass("_records")) : e(this.prev).removeClass("_records"), this.storageKey;
					this.storageKey++, this.check()
				}
			} catch (e) {
				return -1
			}
		},
		set: function() {
			var t = e(".weexApp .box-inner"),
				r = e(".weexApp .app-box");
			r.attr("data-canvas-wh", t[0].offsetWidth + "|" + t[0].offsetHeight), r.attr("data-canvas-bgcolor", t.css("background-color")), r.attr("data-canvas-bgimg", t.css("background-image")), r.attr("data-canvas-bgImgSize", t.attr("data-bgImgSize"));
			var a = this.check(),
				s = (e(".weexApp .hot-box")[0].outerHTML + e(".weexApp .app-box")[0].outerHTML).replace(/ wdraggable-ui-selected/g, "").replace(/ ui-temp-hover/g, ""),
				o = s.replace(/ data-i="\d"/g, "");
			if (-1 != a) {
				if (a > 0) try {
					if (o == localStorage.getItem(this.storageName + (a - 1)).replace(/ data-i="\d"/g, "")) return a
				} catch (e) {}
				try {
					localStorage.setItem(this.storageName + this.storageKey, s), this.storagePrveKey = this.storageKey
				} catch (e) {
					var i = Math.floor(this.storagePrveKey / 3);
					this.get(0, i, !0)
				}
				return a
			}
			layer.msg("浏览器不支持-localStorage", {
				icon: 2,
				time: 3e3
			})
		},
		get: function(t, r, a) {
			a = a || !1;
			var s = [];
			if (r = r || 0) {
				var o = this.check() - 1;
				for (let e = 0; e < r; e++) {
					if (!(i = localStorage.getItem(this.storageName + (o - e)))) {
						r = e;
						break
					}
					s[e] = i
				}
				this.allRemove();
				for (let e = 0; e < s.length; e++) {
					const t = s[s.length - e - 1];
					localStorage.setItem(this.storageName + e, t)
				}
				this.storagePrveKey = r - 1, this.storageKey = r - 1, e(this.prev).addClass("_records"), t = r - 1
			}
			if (t >= 0 && !a) {
				try {
					var i;
					if (i = localStorage.getItem(this.storageName + t)) {
						e(this.storageCanvas).children(".hot-box").remove(), e(this.storageCanvas).children(".app-box").remove(), e(this.storageCanvas).prepend(i);
						var c = e(".weexApp .box-inner"),
							g = e(".weexApp .app-box"),
							h = g.attr("data-canvas-wh");
						if (h) {
							var n = g.attr("data-canvas-bgcolor"),
								l = g.attr("data-canvas-bgimg"),
								v = g.attr("data-canvas-bgImgSize");
							c.css({
								width: h.split("|")[0] + "px",
								height: h.split("|")[1] + "px",
								"background-color": n,
								"background-image": l
							}), v && c.attr("data-bgImgSize", v), e(".weexApp .opBg").css({
								top: h.split("|")[1] + "px"
							})
						}
						this.callback && this.callback()
					}
				} catch (e) {
					return -1
				}
				return t
			}
		},
		allRemove: function() {
			var t = this.check();
			if (t && -1 != t) {
				for (; --t >= 0;) localStorage.removeItem(this.storageName + t);
				this.storageKey = 0, this.storagePrveKey = 0, e(this.prev).removeClass("_records"), e(this.next).removeClass("_records")
			}
		}
	};
	return t
});