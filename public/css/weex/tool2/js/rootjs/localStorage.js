// 历史记录逻辑

define(["jquery"], function ($) {
  return {
    callback: null,
    storageKey: 0,
    storagePrveKey: 0,
    storageName: "_cnzoom_weex_",
    storageCanvas: "#SJDZ_APP",
    prev: ".histRecord .prev",
    next: ".histRecord .next",
    start(t) {
      let r = this,
        a = this.check();
      t && (this.callback = t);

      $(this.prev).unbind("click");
      $(this.prev).bind("click", function () {
        if (!$(this).hasClass("_records")) return !1;
        r.storagePrveKey--,
          r.storagePrveKey < 0 && (r.storagePrveKey = 0),
          r.storagePrveKey >= 0
            ? (r.get(r.storagePrveKey), $(r.next).addClass("_records"))
            : $(this).removeClass("_records"),
          r.storagePrveKey || $(this).removeClass("_records");
      });

      $(this.next).unbind("click");
      $(this.next).bind("click", function () {
        if (!$(this).hasClass("_records")) return !1;
        r.storagePrveKey++,
          r.storagePrveKey > r.storageKey && (r.storagePrveKey = r.storageKey),
          r.storagePrveKey <= r.storageKey
            ? (r.get(r.storagePrveKey), $(r.prev).addClass("_records"))
            : $(this).removeClass("_records"),
          r.storagePrveKey >= r.storageKey && $(this).removeClass("_records");
      });

      return a;
    },
    check() {
      try {
        if (typeof Storage === "undefined") {
          return -1;
        }
        for (;;) {
          if (!localStorage.getItem(this.storageName + this.storageKey)) {
            if (this.storageKey > 0) {
              this.storagePrveKey = this.storageKey - 1;
              $(this.prev).addClass("_records");
            } else {
              $(this.prev).removeClass("_records");
            }
            return this.storageKey;
          } else {
            this.storageKey++;
            this.check();
          }
        }
      } catch {
        return -1;
      }
    },
    // 获取预览面板的数据,保存为一个步骤
    set() {
      let t = $(".weexApp .box-inner"),
        r = $(".weexApp .app-box");
      r.attr("data-canvas-wh", t[0].offsetWidth + "|" + t[0].offsetHeight),
        r.attr("data-canvas-bgcolor", t.css("background-color")),
        r.attr("data-canvas-bgimg", t.css("background-image")),
        r.attr("data-canvas-bgImgSize", t.attr("data-bgImgSize"));
      let a = this.check(),
        s = (
          $(".weexApp .hot-box")[0].outerHTML +
          $(".weexApp .app-box")[0].outerHTML
        )
          .replace(/ wdraggable-ui-selected/g, "")
          .replace(/ ui-temp-hover/g, ""),
        o = s.replace(/ data-i="\d"/g, "");
      if (-1 != a) {
        if (a > 0)
          try {
            if (
              o ==
              localStorage
                .getItem(this.storageName + (a - 1))
                .replace(/ data-i="\d"/g, "")
            )
              return a;
          } catch (e) {}
        try {
          localStorage.setItem(this.storageName + this.storageKey, s),
            (this.storagePrveKey = this.storageKey);
        } catch (e) {
          var i = Math.floor(this.storagePrveKey / 3);
          this.get(0, i, !0);
        }
        return a;
      }
      layer.msg("浏览器不支持-localStorage", {
        icon: 2,
        time: 3e3,
      });
    },
    get(t, r, a) {
      a = a || !1;
      let s = [];
      if ((r = r || 0)) {
        let o = this.check() - 1;
        for (let e = 0; e < r; e++) {
          if (!(i = localStorage.getItem(this.storageName + (o - e)))) {
            r = e;
            break;
          }
          s[e] = i;
        }
        this.allRemove();
        for (let e = 0; e < s.length; e++) {
          const t = s[s.length - e - 1];
          localStorage.setItem(this.storageName + e, t);
        }
        (this.storagePrveKey = r - 1),
          (this.storageKey = r - 1),
          $(this.prev).addClass("_records"),
          (t = r - 1);
      }
      if (t >= 0 && !a) {
        try {
          var i;
          if ((i = localStorage.getItem(this.storageName + t))) {
            $(this.storageCanvas).children(".hot-box").remove(),
              $(this.storageCanvas).children(".app-box").remove(),
              $(this.storageCanvas).prepend(i);
            var c = $(".weexApp .box-inner"),
              g = $(".weexApp .app-box"),
              h = g.attr("data-canvas-wh");
            if (h) {
              var n = g.attr("data-canvas-bgcolor"),
                l = g.attr("data-canvas-bgimg"),
                v = g.attr("data-canvas-bgImgSize");
              c.css({
                width: h.split("|")[0] + "px",
                height: h.split("|")[1] + "px",
                "background-color": n,
                "background-image": l,
              }),
                v && c.attr("data-bgImgSize", v),
                $(".weexApp .opBg").css({
                  top: h.split("|")[1] + "px",
                });
            }
            this.callback && this.callback();
          }
        } catch (e) {
          return -1;
        }
        return t;
      }
    },
    allRemove() {
      var t = this.check();
      if (t && -1 != t) {
        for (; --t >= 0; ) localStorage.removeItem(this.storageName + t);
        (this.storageKey = 0),
          (this.storagePrveKey = 0),
          $(this.prev).removeClass("_records"),
          $(this.next).removeClass("_records");
      }
    },
  };
});
