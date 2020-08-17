$(function () {
  var t = $("body").attr("data-code"),
    e = [];
  t &&
    ((t = t.replace(/\$\@\$/g, "'")),
    $("#previewCode").append(t),
    $("#previewCode")
      .find(".appovhi")
      .attr("data-am-scrollspy", "{animation:'fade'}"),
    $("body").removeAttr("data-code"),
    $("body").append(
      '<script src="js/amazeui/js/zepto.min.js?1.1.4"></script><script src="js/amazeui/js/amazeui.js"></script><script src="js/amazeui/js/app.js"></script>'
    ));
  var a = $("#previewCode");
  function i(t, e, a) {
    try {
      var i,
        n = "moule_" + t;
      $(a).addClass(n);
      var s = a.offsetWidth,
        r = a.offsetHeight,
        p = $(a).prev(),
        l = $(a).parent(),
        o =
          "translate(" +
          -e.translate_Xpx +
          "px," +
          -e.translate_Ypx +
          "px) scale(1,1)",
        c = "translate(0px,0px) " + e.transform_scale,
        d = e._scale_exp_;
      if (
        (d &&
          (1 == d._scale_exp_ &&
            ((o =
              "translate(" +
              (-s / 2 - e.translate_Xpx) +
              "px, " +
              -e.translate_Ypx +
              "px) " +
              d.scale_1),
            (c = "translate(0px, 0px) " + d.scale_2)),
          2 == d._scale_exp_ &&
            ((o =
              "translate(" +
              (s / 2 - e.translate_Xpx) +
              "px, " +
              -e.translate_Ypx +
              "px) " +
              d.scale_1),
            (c = "translate(0px, 0px) " + d.scale_2)),
          3 == d._scale_exp_ &&
            ((o =
              "translate(" +
              -e.translate_Xpx +
              "px, " +
              r / 2 +
              "px) " +
              d.scale_1),
            (c = "translate(0px, 0px) " + d.scale_2)),
          4 == d._scale_exp_ &&
            ((o =
              "translate(" +
              -e.translate_Xpx +
              "px, " +
              -r / 2 +
              "px) " +
              d.scale_1),
            (c = "translate(0px, 0px) " + d.scale_2)),
          5 == d._scale_exp_ &&
            ((o =
              "translate(" +
              -e.translate_Xpx +
              "px," +
              -e.translate_Ypx +
              "px) " +
              d.scale_1),
            (c = "translate(0px,0px) " + d.scale_2))),
        (i =
          "<style class='moule_apwx_jkcdh'>." +
          n +
          "{animation:" +
          n +
          " " +
          e.duration / 1e3 +
          "s " +
          e.timingFunction +
          " " +
          e.delay / 1e3 +
          "s;animation-fill-mode: forwards;}@keyframes " +
          n +
          " {from { opacity:" +
          e.opacity.split("|")[0] +
          "; transform:" +
          o +
          " " +
          e.transform_rotate +
          "; }to { opacity:" +
          e.opacity.split("|")[1] +
          "; transform:" +
          c +
          " rotate(0deg); }}</style>"),
        $(a).append(i),
        $(a).css("opacity", e.opacity.split("|")[0]),
        $(a)
          .children(".moule_apwx_jkcdh")
          .click(function () {
            p.length ? ($(a).remove(), p.after($(a))) : l.prepend($(a));
          }),
        1 == e.translate_type)
      ) {
        !(function t(e) {
          e.on("inview:scrollspy:amui", function () {
            p.length
              ? ($(a).remove(), p.after($(a)), t($(a)))
              : l.prepend($(a));
          }).on("outview:scrollspy:amui", function () {});
        })($(a));
      }
    } catch (t) {}
  }
  $(".hot-box .appLink").empty(),
    $(".hot-box .appLink").css("cursor", "pointer"),
    $.each(a.find(".appovhi[data-apptype=apwx_jwz]"), function (t, e) {
      try {
        var a = JSON.parse($(e).attr("data-config").replace(/'/g, '"')).text;
        $(e).children().children("pre").html(a);
      } catch (t) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jnbo]"), function (t, a) {
      try {
        var i = "moule_" + $(a).attr("appid"),
          n = JSON.parse($(a).attr("data-config").replace(/'/g, '"'));
        $(a).addClass(i),
          (function (t, a) {
            var i = "",
              n = t.children(".bo_edit_temp").attr("style"),
              s = t.children(".bo_edit_temp")[0].offsetWidth,
              r = t.children(".bo_edit_temp")[0].offsetHeight,
              p = t
                .children(".bo_showsPagination")
                .find(".pag-type-" + a.PagStyle)
                .find(".select")
                .attr("style"),
              l =
                t
                  .children(".bo_showsPagination")
                  .find(".pag-type-" + a.PagStyle)
                  .find(".select")
                  .siblings()
                  .attr("style") || "background: rgba(255, 255, 255, 0.5);";
            t.css("background", a.bgColor),
              t.children(".bo_edit_temp").remove(),
              $.each(t.children(".boSlider"), function (t, e) {
                (i +=
                  "<div class='li' style='float:left;position:relative;width:" +
                  s +
                  "px;height:" +
                  r +
                  "px;overflow:hidden;display: flex;justify-content: center;align-items: center;'>" +
                  $(e).html() +
                  "</div>"),
                  $(e).remove();
              }),
              t.prepend(
                "<div class='pr-viewport' style='position:relative;overflow:hidden;" +
                  n +
                  "'><div class='pr-slides' style='width:1200%;transition-duration: 0.5s;'>" +
                  i +
                  "</div></div>"
              ),
              t
                .children(".bo_showsPagination")
                .find("span")
                .click(function () {
                  var e = $(this).parent().children().index($(this)),
                    i = t
                      .children(".pr-viewport")
                      .children(".pr-slides")
                      .children()
                      .eq(e);
                  if (i.children(".child_page").length) {
                    var n = i.children(".child_page")[0].outerHTML;
                    i.children(".child_page").remove(),
                      setTimeout(() => {
                        i.append(n);
                      }, 100);
                  }
                  if (
                    (t
                      .children(".pr-viewport")
                      .children(".pr-slides")
                      .css(
                        "transform",
                        "translate3d(" + -e * s + "px, 0px, 0px)"
                      ),
                    $(this).addClass("select").siblings().removeClass("select"),
                    $(this).attr("style", p).siblings().attr("style", l),
                    2 == a.PagStyle)
                  ) {
                    var r = a.PagStyle_obj[2].content,
                      o = t
                        .children(".bo_showsPagination")
                        .children(".pag-type-" + a.PagStyle)
                        .find("span");
                    $.each(o, function (t, a) {
                      t == e
                        ? $(a).children("img").attr("src", r[t].select)
                        : $(a).children("img").attr("src", r[t].default);
                    });
                  }
                }),
              t.children(".bo_prev").click(function () {
                var e = t.find(".pag-type-" + a.PagStyle).find("span"),
                  i = t
                    .find(".pag-type-" + a.PagStyle)
                    .find(".select")
                    .prev(),
                  n = e[e.length - 1];
                e.length > 1 && (i.length ? i.click() : $(n).click());
              }),
              t.children(".bo_next").click(function () {
                var e = t.find(".pag-type-" + a.PagStyle).find("span"),
                  i = t
                    .find(".pag-type-" + a.PagStyle)
                    .find(".select")
                    .next(),
                  n = e[0];
                e.length > 1 && (i.length ? i.click() : $(n).click());
              }),
              "true" == a.autoPlay &&
                (function (t, a, i) {
                  e[t.attr("appid")] = setInterval(() => {
                    var e = t.find(".pag-type-" + a.PagStyle).find("span"),
                      i = t
                        .find(".pag-type-" + a.PagStyle)
                        .find(".select")
                        .next(),
                      n = e[0];
                    e.length > 1 && (i.length ? i.click() : $(n).click());
                  }, a.autoPlayInterval);
                })(t, a);
          })($(a), n);
      } catch (t) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jdtuhd]"), function (t, e) {
      try {
        var a = "moule_" + $(e).attr("appid"),
          i = JSON.parse($(e).attr("data-config").replace(/'/g, '"'));
        $(e).addClass(a),
          (function (t, e) {
            var a = 0,
              i = "",
              n = t[0].offsetWidth;
            t.find(".dtu").css("transform", ""),
              1 == e.show
                ? ($.each(e.slider, function (t, i) {
                    a += i.img_width + parseInt(e.slider_right);
                  }),
                  (i = t.children(".box").html()),
                  t.children(".box").empty())
                : (e.customContent && (a = e.customContent.width),
                  (i = t.children(".child_page").html()),
                  t.children(".child_page").empty());
            var s =
              "<div class='huadong' style='height:100%;width:" +
              a +
              "px;display: flex;'>" +
              i +
              "<div style='width:" +
              a +
              "px;height:100%;position: absolute; cursor:pointer;'></div></div>";
            1 == e.show
              ? t.children(".box").append(s)
              : t.children(".child_page").append(s);
            !(function (t, i) {
              t.unbind("mousedown"),
                t.bind({
                  mousedown: function (s) {
                    var s = s || event,
                      r = s.clientX,
                      p =
                        (s.clientY,
                        parseInt(t.css("transform").split(",")[4] || 0)),
                      l = 0,
                      o = 0;
                    (document.onmousemove = function (a) {
                      var a = a || event,
                        s = a.clientX,
                        o = (a.clientY, p + (s - r)),
                        c = Math.ceil(-o / n),
                        d = i.children().index(i.children(".select"));
                      if (
                        (t.css({
                          transform: "translate3d(" + o + "px, 0px, 0px)",
                          "transition-duration": "0s",
                        }),
                        c < 0 && (c = 0),
                        e.PagStyle < 3 && t.attr("data-key") != c)
                      ) {
                        var h,
                          f = i.children().toArray();
                        (h = f[c]),
                          (f[c] = f[d]),
                          (f[d] = h),
                          i.html(f),
                          t.attr("data-key", c);
                      }
                      3 == e.PagStyle && i.children(".select").html(c + 1),
                        (l = a.clientX);
                    }),
                      (document.onmouseup = function (e) {
                        (o = l),
                          setTimeout(() => {
                            var i = e.clientX,
                              s = l - o,
                              p = parseInt(
                                t.css("transform").split(",")[4] || 0
                              ),
                              c = 5 * Math.abs(Math.ceil(1e4 / s));
                            t.css({
                              transform:
                                "translate3d(" + (p + 6 * s) + "px, 0px, 0px)",
                              "transition-duration": c + "ms",
                            }),
                              (document.onmousemove = null),
                              (document.onmouseup = null),
                              setTimeout(() => {
                                var e = parseInt(
                                  t.css("transform").split(",")[4] || 0
                                );
                                r > i
                                  ? Math.abs(e) > a - n &&
                                    t.css({
                                      transform:
                                        "translate3d(" +
                                        -(a - n) +
                                        "px, 0px, 0px)",
                                      "transition-duration": "0.5s",
                                    })
                                  : e > 0 &&
                                    t.css({
                                      transform: "translate3d(0px, 0px, 0px)",
                                      "transition-duration": "0.5s",
                                    });
                              }, c / 2);
                          }, 30);
                      });
                  },
                });
            })(t.find(".huadong"), t.children(".box_pagination"));
          })($(e), i);
      } catch (t) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jdjs]"), function (t, a) {
      try {
        var i = "moule_" + $(a).attr("appid"),
          n = JSON.parse($(a).attr("data-config").replace(/'/g, '"'));
        $(a).addClass(i),
          $(a).children(".child_page_1").show().siblings(".child_page").hide(),
          (function (t, a) {
            var i = a.startTime,
              n = a.endTime;
            function s(t) {
              return t >= 0 && t < 10 ? "0" + t : "" + t;
            }
            function r() {
              var a = new Date(),
                r = a.getTime(),
                p = new Date(i);
              if (
                r > p.getTime() &&
                ((p = new Date(n)),
                t
                  .children(".child_page_2")
                  .show()
                  .siblings(".child_page")
                  .hide(),
                r > p.getTime())
              )
                return (
                  clearInterval(e[t.attr("appid")]),
                  t
                    .children(".child_page_3")
                    .show()
                    .siblings(".child_page")
                    .hide(),
                  t.children(".d").text("00"),
                  t.children(".h").text("00"),
                  t.children(".m").text("00"),
                  t.children(".s").text("00"),
                  !1
                );
              var l = p.getTime(),
                o = Math.floor((l - r) / 1e3),
                c = Math.floor(o / 86400);
              o %= 86400;
              var d = Math.floor(o / 3600);
              o %= 3600;
              var h = Math.floor(o / 60);
              (o %= 60),
                t.children(".d").text(s(c)),
                t.children(".h").text(s(d)),
                t.children(".m").text(s(h)),
                t.children(".s").text(s(o));
            }
            r(), (e[t.attr("appid")] = setInterval(r, 1e3));
          })($(a), n);
      } catch (t) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jxdh]"), function (t, e) {
      try {
        var a,
          i = "moule_" + $(e).attr("appid"),
          n = JSON.parse($(e).attr("data-config").replace(/'/g, '"')),
          s = "translate(0,0) scale(1,1)",
          r =
            "translate(" +
            n.translate_Xpx +
            "px," +
            n.translate_Ypx +
            "px) " +
            n.transform_scale,
          p = n.transform_scale;
        p &&
          (1 == p._scale_exp_ &&
            ((s =
              "translate(" +
              (-box_w / 2 - n.translate_Xpx) +
              "px, " +
              -n.translate_Ypx +
              "px) " +
              p.scale_1),
            (r = "translate(0px, 0px) " + p.scale_2)),
          2 == p._scale_exp_ &&
            ((s =
              "translate(" +
              (box_w / 2 - n.translate_Xpx) +
              "px, " +
              -n.translate_Ypx +
              "px) " +
              p.scale_1),
            (r = "translate(0px, 0px) " + p.scale_2)),
          3 == p._scale_exp_ &&
            ((s =
              "translate(" +
              -n.translate_Xpx +
              "px, " +
              box_h / 2 +
              "px) " +
              p.scale_1),
            (r = "translate(0px, 0px) " + p.scale_2)),
          4 == p._scale_exp_ &&
            ((s =
              "translate(" +
              -n.translate_Xpx +
              "px, " +
              -box_h / 2 +
              "px) " +
              p.scale_1),
            (r = "translate(0px, 0px) " + p.scale_2)),
          5 == p._scale_exp_ &&
            ((s =
              "translate(" +
              -n.translate_Xpx +
              "px," +
              -n.translate_Ypx +
              "px) " +
              p.scale_1),
            (r = "translate(0px,0px) " + p.scale_2))),
          $(e).addClass(i),
          $(".wdraggable-ui").css("cursor", ""),
          (a =
            1 == n.translate_type
              ? "<style>." +
                i +
                "{animation:" +
                i +
                " " +
                n.duration / 500 +
                "s infinite " +
                n.timingFunction +
                " " +
                n.delay / 1e3 +
                "s;}@keyframes " +
                i +
                " {0% { opacity:" +
                n.opacity.split("|")[0] +
                "; transform:" +
                s +
                " rotate(0deg); }50% { opacity:" +
                n.opacity.split("|")[1] +
                "; transform:" +
                r +
                " " +
                n.transform_rotate +
                "; }100% { opacity:" +
                n.opacity.split("|")[0] +
                "; transform:" +
                s +
                " rotate(0deg); }}</style>"
              : "<style>." +
                i +
                "{animation:" +
                i +
                " " +
                n.duration / 1e3 +
                "s infinite " +
                n.timingFunction +
                " " +
                n.delay / 1e3 +
                "s;}@keyframes " +
                i +
                " {0% { opacity:" +
                n.opacity.split("|")[0] +
                "; transform:" +
                s +
                " rotate(0deg); }100% { opacity:" +
                n.opacity.split("|")[1] +
                "; transform: " +
                r +
                " " +
                n.transform_rotate +
                "; }}</style>"),
          $(e).append(a);
      } catch (t) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jtgif]"), function (t, e) {
      try {
        var a = "moule_" + $(e).attr("appid"),
          i = JSON.parse($(e).attr("data-config").replace(/'/g, '"'));
        $(e).addClass(a),
          $(".wdraggable-ui").css("cursor", ""),
          $(e)
            .children(".box")
            .append($(e).children(".box").children()[0].outerHTML);
        var n = $(e).children(".box").children().toArray();
        n.reverse(),
          $(e).children(".box").empty(),
          $(e).children(".box").append(n),
          $(e)
            .children(".box")
            .children()
            .eq(i.slider.length)
            .show()
            .siblings()
            .hide(),
          $.each($(e).children(".box").children(), function (t, e) {
            $(e).addClass(a + "_" + t);
          });
        var s = i.delay,
          r = i.duration,
          p = ($(e).children(".box").html(), i.slider.length + 1),
          l = i.opacity;
        setInterval(() => {
          --p <= 0 && (p = i.slider.length),
            "0|0" == l && (i.opacity = "1|0"),
            "0|1" == l && (i.opacity = "1|1"),
            0 == r
              ? $("." + a + "_" + p).hide()
              : (function (t, a, i) {
                  var n =
                    "<style class='moule_apwx_jtgif a" +
                    t +
                    "'>." +
                    t +
                    "{animation:" +
                    t +
                    " " +
                    a.duration / 1e3 +
                    "s " +
                    a.timingFunction +
                    " 0s;animation-fill-mode: forwards;}@keyframes " +
                    t +
                    " {from { opacity:" +
                    a.opacity.split("|")[0] +
                    "; transform:translate(0px, 0px) scale(1,1) rotate(0deg); }to { opacity:" +
                    a.opacity.split("|")[1] +
                    "; transform:translate(" +
                    a.translate_Xpx +
                    "px, " +
                    a.translate_Ypx +
                    "px) " +
                    a.transform_scale +
                    " " +
                    a.transform_rotate +
                    "; }}</style>";
                  $(e).append(n);
                })(a + "_" + p, {
                  opacity: i.opacity,
                  duration: r,
                  timingFunction: i.timingFunction,
                  translate_Xpx: i.translate_Xpx,
                  translate_Ypx: i.translate_Ypx,
                  transform_rotate: i.transform_rotate,
                  transform_scale: i.transform_scale,
                }),
            "0|1" == l || "0|0" == l
              ? ($("." + a + "_" + (p - 1)).fadeIn(600),
                $("." + a + "_" + (p - 1)).show())
              : $("." + a + "_" + (p - 1)).show(),
            p <= 1 &&
              setTimeout(() => {
                $(e).children(".moule_apwx_jtgif").remove();
              }, r);
        }, s);
      } catch (t) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jkcdh]"), function (t, e) {
      i(
        $(e).attr("appid"),
        JSON.parse($(e).attr("data-config").replace(/'/g, '"')),
        e
      );
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jkctc]"), function (t, e) {
      var a = $(e).attr("appid"),
        n = JSON.parse($(e).attr("data-config").replace(/'/g, '"')),
        s = n.outTime,
        r = $(e).children(".popup")[0];
      $(e).children(".popup_end").hide(),
        $(e).children(".popup").css("visibility", "visible");
      var p = setInterval(() => {
        s--,
          $(e).children(".time").text(s),
          s < 1 &&
            ($(e).children(".popup_end").children().length
              ? ($(e).children(".popup_end").css("visibility", "visible"),
                $(e).children(".popup_end").show().siblings().hide())
              : $(e).fadeOut(),
            clearInterval(p)),
          $(e)
            .children(".close")
            .click(function () {
              clearInterval(p), $(e).fadeOut();
            });
      }, 1e3);
      i(a, n, r), $(e).children(".close").css("cursor", "pointer");
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jgdpic]"), function (t, e) {
      console.info("aaaaaaaaaaa");

      try {
        let mouleCls = "moule_" + $(e).attr("appid");
        let config = JSON.parse($(e).attr("data-config").replace(/'/g, '"'));
        let translate_type = config.translate_type;
        let show_num = config.translate_type;
        let mr = config.slider_right;
        let mb = config.slider_bottom;
        let box = config.slider;
        let slider = $(e).children(".box");
        let opacity = config.opacity.split("|");
        let duration = parseInt(config.duration);
        let delay = parseInt(config.delay);
        if (slider.length && duration + delay > 10) {
          let n = 0;
          let gon = config.show_num ? parseInt(config.show_num) : 2;
          let go_w = 0; //要移动的量
          let go_h = 0; ////要移动的量
          let new_slider = "";
          slider
            .append(slider.html())
            .children()
            .css({ "transition-duration": "", transform: "" });
          $(e).children().children().addClass(mouleCls);
          new_slider = slider.html();
          setInterval(() => {
            let w = box[n] ? box[n].img_width : box[0].img_width;
            let h = box[n] ? box[n].img_height : box[0].img_height;
            if (translate_type == 1) {
              go_w += w + mr;
            }
            if (translate_type == 2) {
              go_h += h + mb;
            }
            slider.children().removeClass(mouleCls + "_default");
            slider
              .children()
              .eq(gon + 1)
              .addClass(mouleCls + "_default");
            if (config.outdong) {
              slider
                .children()
                .eq(gon - 1)
                .addClass(mouleCls + "_default");
            }
            start({
              x: go_w,
              y: go_h,
              scale: config.transform_scale.split("|")[0],
              rotate: config.transform_rotate.split("|")[1],
              opacity: opacity[0],
              timingFunction: config.timingFunction,
              duration: duration / 1000,
            });
            n++;
            gon++;
            if (n >= box.length) {
              go_w = 0;
              go_h = 0;
              n = 0;
              gon = config.show_num ? parseInt(config.show_num) : 2;
              setTimeout(() => {
                slider.empty();
                $(e).children(".moule_apwx_jgdpic").remove();
                slider.append(new_slider);
              }, duration);
            }
          }, duration + delay);
        }
        function start(opt) {
          $(e).children(".moule_apwx_jgdpic").remove();
          style =
            "<style class='moule_apwx_jgdpic'>." +
            mouleCls +
            "{" +
            "opacity:1; transition-duration: " +
            opt.duration +
            "s; transform: translate(" +
            -opt.x +
            "px, " +
            -opt.y +
            "px) scale(1,1) rotate(0deg); transition-timing-function: " +
            opt.timingFunction +
            ";" +
            "}" +
            "." +
            mouleCls +
            "_default{" +
            "opacity:" +
            opt.opacity +
            "; transition-duration: " +
            opt.duration +
            "s; transform: translate(" +
            -opt.x +
            "px, " +
            -opt.y +
            "px) scale(" +
            opt.scale +
            "," +
            opt.scale +
            ") rotate(" +
            opt.rotate +
            "deg);" +
            "}" +
            "</style>";
          $(e).append(style);
        }
      } catch (error) {}
    }),
    $.each(a.find(".appovhi[data-apptype=apwx_jgdtw]"), function (t, e) {
      try {
        var a,
          i = "moule_" + $(e).attr("appid"),
          n = JSON.parse($(e).attr("data-config").replace(/'/g, '"')),
          s = n.roll_fx,
          r = n.wufeng,
          p = parseInt(n.box.paddingLR) || 0,
          l = 0,
          o = 0,
          c = e.offsetWidth || 0,
          d = e.offsetHeight || 0,
          h = 0,
          f = 0,
          x = null;
        if (
          ($.each($(e).children(), function (t, e) {
            e.offsetWidth > h && ((h = e.offsetWidth), (x = $(e))),
              e.offsetHeight > f && ((f = e.offsetHeight), (x = $(e)));
          }),
          h > c &&
            0 == parseInt(n.translate_Ypx) &&
            ((n.translate_Xpx = parseInt(n.translate_Xpx) + p),
            1 == s && (n.translate_Xpx = -(h + p)),
            2 == s && (n.translate_Xpx = h + p)),
          f > d &&
            0 == parseInt(n.translate_Xpx) &&
            (3 == s && (n.translate_Ypx = -f), 4 == s && (n.translate_Ypx = f)),
          2 == r &&
            (1 == s &&
              ($(e).css("justify-content", "flex-start"),
              (l = e.offsetWidth + p),
              (n.translate_Xpx = -h - p)),
            2 == s &&
              ($(e).css("justify-content", "flex-end"),
              (l = -(e.offsetWidth < h ? h : e.offsetWidth)),
              (n.translate_Xpx = (h < e.offsetWidth ? h : e.offsetWidth) + p)),
            3 == s && ((o = e.offsetHeight), (n.translate_Ypx = -f - o)),
            4 == s &&
              ((o = -(e.offsetHeight < f ? f : e.offsetHeight)),
              (n.translate_Ypx = e.offsetHeight))),
          1 == r)
        ) {
          var _ = x[0].offsetWidth,
            m = x[0].offsetHeight;
          _ < c && (_ = c),
            m < d && (m = d),
            x.css({
              display: "block",
              width: _ + "px",
              height: m + "px",
              overflow: "visible",
            }),
            x.children("img").length && x.children("img").removeAttr("width");
          var g = x[0].outerHTML;
          1 == s &&
            ($(e).css("justify-content", "flex-start"),
            x
              .empty()
              .append(g)
              .append($(g).css({ position: "relative" })),
            x.css({ width: 2 * _ + "px", display: "flex" })),
            2 == s &&
              ($(e).css("justify-content", "flex-start"),
              x
                .empty()
                .append(g)
                .append(
                  $(g).css({ position: "relative", left: -2 * _ + "px" })
                ),
              x.css({ width: 2 * _ + "px", display: "flex" })),
            3 == s &&
              ($(e).css("align-items", "flex-start"),
              x
                .empty()
                .append(g)
                .append($(g).css({ position: "relative" })),
              x.css({ height: 2 * _ + "px" })),
            4 == s &&
              ($(e).css("align-items", "flex-start"),
              x
                .empty()
                .append(g)
                .append($(g).css({ position: "relative", top: -2 * m + "px" })),
              x.css({ height: 2 * _ + "px" }));
        }
        $(e).children().addClass(i),
          $(".wdraggable-ui").css("cursor", ""),
          (a =
            1 == n.translate_type
              ? "<style>." +
                i +
                "{animation:" +
                i +
                " " +
                n.duration / 500 +
                "s infinite " +
                n.timingFunction +
                " " +
                n.delay / 1e3 +
                "s;}@keyframes " +
                i +
                " {0% { opacity:" +
                n.opacity.split("|")[0] +
                "; transform:translate(" +
                l +
                "px," +
                o +
                "px) scale(1,1) rotate(0deg); }50% { opacity:" +
                n.opacity.split("|")[1] +
                "; transform:translate(" +
                n.translate_Xpx +
                "px," +
                n.translate_Ypx +
                "px) " +
                n.transform_scale +
                " " +
                n.transform_rotate +
                "; }100% { opacity:" +
                n.opacity.split("|")[0] +
                "; transform:translate(" +
                l +
                "px," +
                o +
                "px) scale(1,1) rotate(0deg); }}</style>"
              : "<style>." +
                i +
                "{animation:" +
                i +
                " " +
                n.duration / 1e3 +
                "s infinite " +
                n.timingFunction +
                " " +
                n.delay / 1e3 +
                "s;}@keyframes " +
                i +
                " {0% { opacity:" +
                n.opacity.split("|")[0] +
                "; transform:translate(" +
                l +
                "px," +
                o +
                "px) scale(1,1) rotate(0deg); }100% { opacity:" +
                n.opacity.split("|")[1] +
                "; transform:translate(" +
                n.translate_Xpx +
                "px," +
                n.translate_Ypx +
                "px) " +
                n.transform_scale +
                " " +
                n.transform_rotate +
                "; }}</style>"),
          $(e).append(a);
      } catch (t) {}
    }),
    $.each(a.find("div[bg-image]"), function (t, e) {
      var a = $(this).attr("bg-image");
      a && ($(e).css("background-image", a), $(this).removeAttr("bg-image"));
    });
  var n = $(".box-inner").attr("bg-image");
  n &&
    ($(".box-inner").css("background-image", n),
    $(".box-inner").removeAttr("bg-image")),
    $("#previewCode").find("a").removeAttr("onclick"),
    $.each($(".hot-box"), function (t, e) {
      $(e).parent().children(".app-box").append($(e).html());
      $(e).remove();
    });
});
