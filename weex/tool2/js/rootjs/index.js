define([
  "jquery",
  "_ready",
  "layer",
  "appLayer",
  "_localstorage_",
  "appShow",
  "appEdit",
  "jquery.wdragUI",
  "jquery.ui",
  "jquery.smartMenu",
  "jquery.cooike",
  "jquery.getImages",
], function (
  $,
  _ready,
  layer,
  appLayer,
  _localstorage_,
  _APPSHOW,
  _APPEDIT,
  wdragUI,
  ui,
  smartMenu,
  cooike,
  _GETIMAGES,
  modules
) {
  var modules = modules || {},
    AppRoot = ".weexApp",
    appStyles = ".appStyles", // 组件多样式选择面板
    pageBox = ".weexApp .pageBox",
    AppboxWrap = ".weexApp .box-wrap",
    app = ".weexApp .applistbox .app",
    canvas = ".weexApp .canvas .app-box",
    Apphots = ".weexApp .canvas .hot-box",
    getAppUrl = "./php/appData.php",
    optionUI = {
      borderparent: $("#SJDZ_APP"),
      bordername: "app",
    },
    skin_updata = ".skin-up-save",
    _SIGNAL_ = ".weexApp #adialog-signal",
    _global_timeout_ = null;

  // 接收服务器返回的预设样式,进行处理
  // styleList: object[]
  const showAppStyleList = (styleList) => {
    let element = "";
    for (let index = 0; index < styleList.length; index++) {
      const styleItem = styleList[index];
      element += `
        <span
          class="app-skin"
          data-type="${styleItem.type}"
          data-skin="${index}"
          data-json='${styleItem.data}'
        >
          <a>添加模块</a>
          <img src="${styleItem.pic}">
        </span>`;
    }

    $(appStyles).find(".bd").empty().append(element);
    $(appStyles).find(".heiBg").fadeIn();
    $(appStyles).find(".skin").show();
    $(appStyles).find(".skin").animate({
      top: "15%",
      bottom: "15%",
      opacity: 1,
    });
    $(appStyles)
      .find(".app-skin")
      .click(function () {
        var t = $(this).parents(".appStyles").attr("data-type"),
          e = $(this).attr("data-type"),
          a = $(this).attr("data-json"),
          i = $(".weexApp .applistbox").find(".app[data-type=" + e + "]");
        if (t) {
          $(".setskinup-app").attr("data-json", a).click(),
            $(this).parents(".appStyles").removeAttr("data-type");
        } else {
          i.attr("data-json", a).click(), i.removeAttr("data-json");
        }
        $(appStyles).find(".heiBg").click();
      });

    $(appStyles).find(".heiBg").unbind("click");
    $(appStyles)
      .find(".heiBg")
      .bind("click", function () {
        $(this).fadeOut(),
          $(this)
            .siblings()
            .animate(
              {
                top: "14%",
                bottom: "16%",
                opacity: 0,
              },
              function () {
                $(this).hide();
              }
            );
      });

    $(appStyles).find(".close").unbind("click");
    $(appStyles)
      .find(".close")
      .bind("click", function () {
        $(appStyles).find(".heiBg").click();
      });
  };

  // 检查,重写appId,确保无重复
  const checkAppId = (data) => {
    const UID_LIST = [];
    const transformId = (config) => {
      // 根页面
      if (config.app && config.app.length) {
        $.each(config.app, function (a, appItem) {
          if (appItem.config) {
            transformId(appItem.config);
          }
        });
      }
      // app
      // 检查数组中有无此id,没有则push至数组,有则重设id
      if (config.appID) {
        if (!UID_LIST.includes(config.appID + "")) {
          UID_LIST.push(config.appID + "");
        } else {
          config.appID = new Date().getTime() + "_" + UID_LIST.length;
          UID_LIST.push(config.appID + "");
        }
      }

      //普通自定义
      if (config.customContent) {
        transformId(config.customContent);
      }
      //倒计时1
      if (config.customContent_1) {
        transformId(config.customContent_1);
      }
      //倒计时2
      if (config.customContent_2) {
        transformId(config.customContent_2);
      }
      //倒计时3
      if (config.customContent_3) {
        transformId(config.customContent_2);
      }
      //轮播
      if (config.slider && config.slider.length) {
        $.each(config.slider, function (a, e) {
          if (e.customContent) {
            transformId(e.customContent);
          }
        });
      }
    };
    return transformId(data);
  }

  function _getElementLeft_(t) {
    for (var e = t.offsetLeft, a = t.offsetParent; null !== a; )
      (e += a.offsetLeft), (a = a.offsetParent);
    return e;
  }
  return (
    layer.closeAll(),
    (modules.exports = (function (t) {
      var e = {};

      function a(i) {
        var o = (e[i] = {
          exports: {},
          id: i,
          loaded: !1,
        });
        return (
          t[i].call(o.exports, o, o.exports, a), (o.loaded = !0), o.exports
        );
      }
      return (a.m = t), (a.c = e), a(0);
    })([
      // a(0)
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        try {
          a(2),
            a(3),
            a(4),
            a(5),
            a(6),
            a(8),
            a(19),
            a(11),
            a(14),
            a(18),
            a(20),
            _APPEDIT();
          var i = optionUI;
          (i.hide = true),
            $(AppboxWrap).mousedown(function (t) {
              var e = e || event;
              t.stopPropagation(),
                $(canvas).children().wdragUI(i),
                _APPEDIT(),
                a(1);
            }),
            $(AppRoot).mousemove(function (t) {
              var t = t || event;
              $(t.target).parents(".canvas").length ||
                ("mousemove" == t.type &&
                  $(skin_updata).is(":visible") &&
                  "on" != $(skin_updata).attr("data-show") &&
                  $(skin_updata).hide());
            }),
            $(pageBox).mousedown(function () {
              $(AppboxWrap).mousedown();
            });
        } catch (t) {
          console.info("index-err");
        }
        // 绘制组件 _APPSHOW.d(json,callback) 传入json返回$dom,复杂组件有callback
        // t: data-json object 组件数据
        // isFixed: 左侧菜单面板中,单个组件li元素的data-addindex值,
        //   true时组件是在固定位置添加到画布上,不随画布滚动而变化
        function addApp(appData, isFixed) {
          const id = new Date().getTime();
          let resul;
          appData.config.appID = id;
          appData.scrollTop = $(pageBox).scrollTop();
          isFixed && (appData.scrollTop = "");

          // 由组件默认数据生成$dom
          resul = _APPSHOW.d(appData, function () {
            a(1);
          });

          if (typeof resul === "string") {
            layer.msg("组件不存在");
            return;
          }

          let $app = $(canvas).append(resul);
          $(AppRoot).find("#appDrawHots").hasClass("select") &&
            $(AppRoot).find("#appDrawHots").click();

          // 使组件可拖拽, 变形, 添加 wdraggable-ui class
          a(1);

          $app.find(".wdraggable-ui[appID=" + id + "]").mouseenter();
          $app.find(".wdraggable-ui[appID=" + id + "]").mousedown();
          document.onmouseup();
        }

        // 左侧组件面板点击事件
        $(app).click(function () {
          const type = $(this).data().type;
          const key = $(this).data().key;
          const jsonData = $(this).attr("data-json");
          const addIndex = parseInt($(this).attr("data-addindex"));

          // dom data-json 上有数据,则以此数据渲染
          // data-json 的数据来源可能是:
          // 1. html 文件中定义
          // 2. 从组件预设样式面板选择后生成
          if (jsonData) {
            try {
              addApp(JSON.parse(jsonData), addIndex);
            } catch (err) {
              layer.msg("组件样式数据错误");
            }
            return;
          }

          // data-json 没有数据,则从服务器获取组件数据
          layer.load(2);
          $.post(
            getAppUrl,
            {
              type,
              key,
            },
            function (data, e) {
              layer.closeAll();
              const styleList = JSON.parse(data);
              styleList.length
                ? showAppStyleList(styleList)
                : addApp(styleList);
            }
          );
        });
      },
      // a(1) 使组件可拖拽, 变形
      function (t, e, a) {
        "use strict";
        let i = optionUI;
        let o = $(".weexApp .moveLine_l");
        let n = $(".weexApp .moveLine_c");
        let s = $(".weexApp .moveLine_r");
        $(canvas).children().wdragUI(i);
        $(Apphots)
          .children()
          .wdragUI(i, {
            stop: function () {
              (e.default = this),
                _APPEDIT(this, function () {
                  a(1);
                }),
                o.hide(),
                s.hide(),
                n.show(),
                a(17),
                _localstorage_.set();
            },
            mouse: function () {
              (e.default = this), a(15);
            },
            dblclick: function () {
              (e.default = this), a(7);
            },
            drag: function () {
              let e = this.this[0],
                a = $("#adialog-box .uiSize"),
                i = _getElementLeft_(e);
              e &&
                (a.find("input[data-type=left]").val(e.offsetLeft),
                a.find("input[data-type=top]").val(e.offsetTop),
                n.hide(),
                o.show().css("left", i),
                o.find("em").text(e.offsetLeft),
                s.show().css("left", i + e.offsetWidth),
                s.find("em").text(e.offsetLeft + e.offsetWidth));
            },
            resizable: function () {
              let e = this.this[0],
                a = $("#adialog-box .uiSize");
              e &&
                (a.find("input[data-type=width]").val(e.offsetWidth),
                a.find("input[data-type=height]").val(e.offsetHeight),
                a.find("input[data-type=left]").val(e.offsetLeft),
                a.find("input[data-type=top]").val(e.offsetTop)),
                $(_SIGNAL_).attr("ck-type", "resizable").click();
            },
            keyup: function () {
              let e = $(AppboxWrap).find(".wdraggable-ui-selected")[0],
                a = $("#adialog-box .uiSize");
              e &&
                (a.find("input[data-type=left]").val(e.offsetLeft),
                a.find("input[data-type=top]").val(e.offsetTop));
            },
            copy: function () {
              (e.default = this), a(9), a(10);
            },
            remove: function () {
              let e, i, o, n, s;
              (i = $((e = this).ui[0]).attr("data-apptype")
                ? $(e.ui[0])
                : $(e.ui[0]).parents(".appovhi")),
                (o = i.attr("data-apptype")),
                (n = i.attr("data-config")
                  ? JSON.parse(i.attr("data-config"))
                  : {}),
                (s = [
                  "buypSrc",
                  "addbuypSrc",
                  "exp_allimg",
                  "exp_allimg3",
                  "title",
                  "subtitle",
                  "salePrice",
                  "reservePrice",
                  "sale30",
                  "reservePrice_ltxt",
                  "prece_ltxt",
                  "sale30_ltxt",
                  "sale30_rtxt",
                  "subtitle2",
                  "exp_alltxt",
                  "exp_alltxt3",
                ]),
                $.each(e.ui, function (t, e) {
                  if ("apwx_jbblb" == o) {
                    let a = $(e).attr("data-child-type"),
                      p = $(e).parents(".item").attr("data-key");
                    -1 != s.indexOf(a)
                      ? i.find("." + a).css("visibility", "hidden")
                      : p &&
                        a &&
                        ((n.items[p][a] = ""),
                        $(e).children("img").attr("src", "")),
                      $(e).mouseenter(),
                      $(".jedit-border").hide();
                  }
                }),
                i.attr("data-config", JSON.stringify(n)),
                appLayer(null, function () {
                  a(1);
                }),
                _localstorage_.set();
            },
          });
        a(10);
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = $(AppRoot).find(".box-inner"),
          o = $(AppRoot).find(".uiExpoperat").find(".cnt").children();
        $(o).unbind("mouseenter mouseleave");
        $(o).bind({
          mouseenter: function (t) {
            layer.tips($(this).attr("data-title"), $(this), {
              tips: 3,
              time: 3e3,
            });
          },
          mouseleave: function (t) {
            layer.closeAll();
          },
        });
        $(AppRoot).find("#appAdd-panel").draggable({
          handle: "#appAdd-panel-t",
        });
        try {
          $(AppRoot).find(".opBg").css({
            top: i.height(),
          });
          $(AppRoot)
            .find(".opBg")
            .draggable({
              axis: "y",
              drag: function () {
                i.css({
                  height: $(this)[0].offsetTop,
                });
              },
              stop: function () {
                $(this).css({
                  top: i[0].offsetHeight,
                });
              },
            });
        } catch (t) {}
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = $(AppRoot).find(".ruler").find(".l"),
          o = $(AppRoot).find(".ruler").find(".c"),
          n = $(AppRoot).find(".ruler").find(".r"),
          s = $(AppRoot).find(".canvas"),
          p = s[0].offsetWidth,
          r = _getElementLeft_(s[0]),
          c = document.body.clientWidth - p - r;
        i.css({
          width: r,
        }),
          o.css({
            width: p,
            left: r,
          }),
          n.css({
            width: c,
            left: r + p,
            "background-position-x": -p,
          });
      },
      // a(4)
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = {},
          o = [],
          n = $(".codePanel"),
          exportCode = $(AppRoot).find(".Export_code"),
          p = $(AppRoot).find(".Import_code"), // 导入
          r = $(".appSignal .getChildData"),
          previewCode = $(AppRoot).find(".Preview_code");

        function d(t, e) {
          e = e || null;
          var a = [];
          $.each(t, function (t, i) {
            var o = $(i).attr("data-child-type"),
              n = {
                width: i.offsetWidth,
                height: i.offsetHeight,
                left: i.offsetLeft,
                top: i.offsetTop,
                type: o,
                visibility: $(i).css("visibility"),
                style: {},
              };
            if (
              ($(i).attr("data-child-type-extend") &&
                (n.type_extend = $(i).attr("data-child-type-extend")),
              "apwx_jbblb" == e || "apwx_jdjs" == e)
            ) {
              if ($(i).attr("data-tagpsrc") && "tagpSrc" == o) {
                var s = $(i).attr("data-tagpsrc")
                  ? JSON.parse($(i).attr("data-tagpsrc"))
                  : {};
                s.W && (n.width = s.W), s.H && (n.height = s.H);
              }
              var p = $(i).css("background-image"),
                r = parseInt($(i).css("border-width")),
                c = parseInt($(i).css("border-radius")),
                d = $(i).css("line-height"),
                l = $(i).css("font-size");
              ("title" != o &&
                "subtitle" != o &&
                "exp_alltxt" != o &&
                "subtitle2" != o &&
                "exp_alltxt3" != o) ||
                ("normal" == d && (d = parseInt(l) + 6 + "px")),
                (p =
                  "none" == p
                    ? ""
                    : p
                        .replace(/url?\(/, "")
                        .replace(/\)/, "")
                        .replace(/"/, "")
                        .replace(/"/, "")),
                (n.style["font-size"] = $(i).css("font-size")),
                (n.style.color = $(i).css("color")),
                (n.style["font-weight"] = $(i).css("font-weight")),
                (n.style["text-decoration"] = $(i).css("text-decoration")),
                (n.style["text-align"] = $(i).css("text-align")),
                (n.style["background-color"] = $(i).css("background-color")),
                (n.style["background-image"] = p),
                (n.style["line-height"] = d),
                r &&
                  ((n.style["border-width"] = r),
                  (n.style["border-style"] = $(i).css("border-style")),
                  (n.style["border-color"] = $(i).css("border-color"))),
                c && (n.style["border-radius"] = c);
            }
            a.push(n);
          });
          return a;
        }
        // 预览 将画布内容拷贝至临时存储元素,对组件设置数据进行处理,最后将处理后的htmlpost至预览页面,然后清空临时存储元素
        previewCode.click(function () {
          // preview in iframe start
          const previewInSameWindow = function (data) {
            let previewFrameWrapper = document.querySelector(
              "#previewFrameWrapper"
            );
            previewFrameWrapper.style.display = "block";
            let iframe = window.frames["preview"];
            // from 表单触发 POST 请求
            let form = iframe.document.createElement("form");
            form.method = "post";
            form.target = "_self";
            form.action = "./preview.php";
            let input = document.createElement("input");
            input.setAttribute("name", "code");
            input.setAttribute("value", data);
            form.appendChild(input);
            iframe.document.body.appendChild(form);
            form.submit();
          };
          let closeIframe = document.querySelector(".close-iframe");
          const handleIframClose = function () {
            document.querySelector("#previewFrameWrapper").style.display =
              "none";
            closeIframe.removeEventListener("click", handleIframClose);
          };
          closeIframe.addEventListener("click", handleIframClose);

          layer.load(2);
          $(".previewCode_temp")
            .empty()
            .append($(AppRoot).find(".box-inner")[0].outerHTML);
          $.each($(".previewCode_temp").find(".appovhi"), function (t, e) {
            var a = $(e).attr("data-config");
            if (a) {
              var i = a.replace(/"/g, "$@$"),
                o = $(e).css("background-image").replace(/"/g, "");
              $(e).attr("data-config", i),
                "none" != o &&
                  ($(e).attr("bg-image", o), $(e).css("background-image", "")),
                $.each($(e).find(".bo_showsPagination").children(), function (
                  t,
                  e
                ) {
                  var a = $(e).css("background-image").replace(/"/g, "");
                  "none" != a &&
                    ($(e).attr("bg-image", a),
                    $(e).css("background-image", ""));
                }),
                $.each($(e).find(".child_page"), function (t, e) {
                  var a = $(e).css("background-image").replace(/"/g, "");
                  "none" != a &&
                    ($(e).attr("bg-image", a),
                    $(e).css("background-image", ""));
                });
            }
          });
          var t = $(".previewCode_temp")
            .children(".box-inner")
            .css("background-image")
            .replace(/"/g, "");
          "none" != t &&
            ($(".previewCode_temp").children(".box-inner").attr("bg-image", t),
            $(".previewCode_temp")
              .children(".box-inner")
              .css("background-image", "")),
            (function (t, e) {
              // preview in same window
              // console.log(previewCode.attr("open-page"));
              if (previewCode.attr("open-page") === "iframe") {
                previewInSameWindow(e);
                return;
              }
              var a = previewCode.attr("open-page") ? "_self" : "_blank",
                i = document.createElement("form");
              (i.method = "post"), (i.target = a), (i.action = t);
              var o = document.createElement("input");
              o.setAttribute("name", "code"),
                o.setAttribute("value", e),
                i.appendChild(o),
                document.body.appendChild(i),
                i.submit(),
                document.body.removeChild(i);
            })("./preview.php", $(".previewCode_temp").html()),
            layer.closeAll(),
            $(".previewCode_temp").empty();
        });

        // 导出
        exportCode.click(function () {
          let a = $(this).attr("data-codehide") || null;
          let rootPage = $(AppRoot).find(".box-inner");

          let pageBgImage =
            rootPage.css("background-image") === "none"
              ? ""
              : rootPage
                  .css("background-image")
                  .replace(/url?\(/, "")
                  .replace(/\)/, "")
                  .replace(/"/, "")
                  .replace(/"/, "");

          let pageBgSize = rootPage.attr("data-bgImgSize")
            ? JSON.parse(rootPage.attr("data-bgImgSize"))
            : "";

          let code = {
            width: rootPage.width(),
            height: rootPage.height(),
            bgImg: pageBgImage,
            bgImgSize: pageBgSize,
            bgColor: rootPage.css("background-color"),
            app: [],
          };

          // app
          let appList = $(canvas).children();
          $.each(appList, function (t, e) {
            var a = !1;
            $(e).is(":visible") || ($(e).show(), (a = !0));
            var o = [],
              n = $(e).children(".wdraggable-ui-children"),
              s = $(e).children(".children-extend"),
              p = $(e).attr("data-apptype"),
              r = {
                appName: $(e).attr("appname"),
                appType: $(e).attr("data-apptype"),
                config: JSON.parse($(e).attr("data-config")),
                pos:
                  e.offsetWidth +
                  "|" +
                  e.offsetHeight +
                  "|" +
                  e.offsetTop +
                  "|" +
                  e.offsetLeft,
              };
            $(e).attr("waria-locking") && (r.locking = 1),
              "apwx_jbblb" == p &&
                (n = $(e)
                  .children(".item")
                  .eq(0)
                  .find(".wdraggable-ui-children")),
              n.length && ((o = d(n, p)), (r.child_data = o)),
              s.length && ((o = d(s, p)), (r.child_extend = o)),
              a && ((r.seeing = -1), $(e).hide()),
              (code.app[t] = r);
          });

          // hotarea
          let linkList = $(Apphots).children();
          let isHotareaShow = false;
          let hotareaList = [];
          if (!$(Apphots).is(":visible")) {
            $(Apphots).show();
            isHotareaShow = true;
          }
          $.each(linkList, function (t, item) {
            hotareaList.push({
              w: item.offsetWidth,
              h: item.offsetHeight,
              l: item.offsetLeft,
              t: item.offsetTop,
              k: $(item).attr("href") || "",
              appID: $(item).attr("appid") || 0,
            });
          });
          code.appLinks = hotareaList;
          isHotareaShow && $(Apphots).hide();

          // transform id to uid
          checkAppId(code);

          // 代码生成过程不做修改,只在导出时改动
          const export_code = {
            version: "1.0",
            producer: "power by womu",
            code: code,
          };

          // 自定义页面
          a === "save" &&
            n.find("#ePcodeText").val(JSON.stringify(export_code));

          // 根页面
          if (!a) {
            n.find("#ePcodeText").val(JSON.stringify(export_code));
            n.find(".heiBg").fadeIn();
            n.find(".Export").show();
            n.find(".Export").animate({
              "margin-top": "-280px",
              opacity: 1,
            });
          }

          e.default = code;
        });

        r.click(function () {
          var t,
            e = $(this).attr("data-id"),
            a = $(this).attr("data-rtype");
          e &&
            a &&
            ("apwx_jbblb" == a &&
              ((t = d(
                $(canvas)
                  .children(".wdraggable-ui[appid=" + e + "]")
                  .children(".item")
                  .eq(0)
                  .find(".wdraggable-ui-children"),
                a
              )),
              $(canvas)
                .children(".wdraggable-ui[appid=" + e + "]")
                .attr("data-child_data", JSON.stringify(t))),
            "apwx_jdtuhd" == a &&
              ((t = d(
                $(canvas)
                  .children(".wdraggable-ui[appid=" + e + "]")
                  .children(".wdraggable-ui-children"),
                a
              )),
              $(canvas)
                .children(".wdraggable-ui[appid=" + e + "]")
                .attr("data-child_data", JSON.stringify(t))));
        });
        // 导入
        p.click(function () {
          n.find("#ePdaoruCode").val(""),
            n.find(".heiBg").fadeIn(),
            n.find(".Import").show(),
            n.find(".Import").animate({
              "margin-top": "-280px",
              opacity: 1,
            });
        });
        // 复制按钮
        n.find(".copy").click(function () {
          n.find("#ePcodeText").select();
          try {
            document.execCommand("Copy"),
              layer.msg("复制成功，感谢支持!", {
                icon: 1,
                time: 1500,
              });
          } catch (t) {
            alert("此浏览不支持此功能，请手动复制吧！");
          }
        });
        // 确定导入 按钮
        n.find(".impcode").click(function () {
          let t = n.find("#ePdaoruCode").val();
          if (t)
            try {
              t = JSON.parse(t);
              // 对导入的代码进行处理 见变量export_code
              if (t.version === "1.0") {
                t = t.code;
              }
              $(canvas).empty();
              $(Apphots).empty();
              var e = t.app,
                i = $(AppRoot).find(".box-inner"),
                o = t.bgImgSize ? JSON.stringify(t.bgImgSize) : "";
              i.css({
                width: t.width,
                height: t.height,
                "background-color": t.bgColor,
              }),
                t.bgImg
                  ? i.css("background-image", "url(" + t.bgImg + ")")
                  : i.css("background-image", "none"),
                i.attr("data-bgImgSize", o),
                $.each(e, function (t, e) {
                  var i = _APPSHOW.d(e, function () {
                    a(1);
                  });
                  "object" == typeof i
                    ? $(canvas).append(i)
                    : layer.msg(i, {
                        icon: 2,
                        time: 3e3,
                      });
                });
              $.each(t.appLinks, function (t, e) {
                let i = e.appID || Math.round(1e10 * Math.random());
                if (e.w > 0 && e.h > 0) {
                  var a = $(
                    "<a class='appLink appovhi' data-apptype='apwx_jrq' data-group='false' target='_blank' style='display:block;' onclick='return false'></a>"
                  )
                    .css({
                      width: e.w + "px",
                      height: e.h + "px",
                      top: e.t + "px",
                      left: e.l + "px",
                    })
                    .attr("href", e.k)
                    .attr("appid", i);
                  e.k && a.append("<i>&#xe658;</i>"), $(Apphots).append(a);
                }
              }),
                $(Apphots).children().length &&
                  ($(AppRoot).find("#appDrawHots").hasClass("select") ||
                    $(AppRoot).find("#appDrawHots").click()),
                a(2),
                a(1),
                $(AppboxWrap).mousedown(),
                _localstorage_.set();
            } catch (t) {
              layer.msg("非JSON代码,或有误!", {
                icon: 2,
                time: 3e3,
              });
            }
          n.find(".heiBg").click();
        });
        // 全屏遮罩,点击关闭遮罩与弹出框
        n.find(".heiBg").click(function () {
          $(this).fadeOut(),
            $(this)
              .siblings()
              .animate(
                {
                  "margin-top": "-300px",
                  opacity: 0,
                },
                function () {
                  $(this).hide();
                }
              );
        });
        // 关闭弹出框X
        n.find(".close").click(function () {
          n.find(".heiBg").click();
        });
        // 取消按钮
        n.find(".close2").click(function () {
          n.find(".heiBg").click();
        });
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        }),
          $(AppRoot).find("#appDrawHots").unbind(),
          $(AppRoot)
            .find("#appDrawHots")
            .bind("click", function () {
              var t = $(this);
              t.hasClass("select")
                ? (t.removeClass("select"), $(Apphots).hide())
                : (layer.tips("在画布中绘制热区！", $(this), {
                    tips: 2,
                    time: 1500,
                  }),
                  t.addClass("select"),
                  $(Apphots).show()),
                $(AppboxWrap).mousedown();
            });
      },
      function (t, e, a) {
        function i(t) {
          var e = $(canvas).children(),
            a = t.offsetX,
            i = t.offsetY;
          for (let t = 0; t < e.length; t++) {
            const o = e[e.length - t - 1];
            if (
              a > o.offsetLeft &&
              a < o.offsetLeft + o.offsetWidth &&
              i > o.offsetTop &&
              i < o.offsetTop + o.offsetHeight
            ) {
              $(AppRoot).find("#appDrawHots").hasClass("select") &&
                $(AppRoot).find("#appDrawHots").click(),
                $(o).mouseenter(),
                $(o).mousedown(),
                document.onmouseup();
              break;
            }
          }
        }
        $(Apphots).unbind("mousedown mouseenter mouseleave dblclick"),
          $(Apphots).bind({
            mousedown: function (t) {
              layer.closeAll();
              for (
                var e,
                  o = new Date().getTime(),
                  n = $(this),
                  s = (t = t || event).clientX,
                  p = t.clientY,
                  r = $(AppRoot).find(".box-inner"),
                  c = parseInt(s - r.offset().left),
                  d = parseInt(p - r.offset().top),
                  l = 0;
                ;
                l++
              )
                if (!$(Apphots).children(".hlk-" + l).length) {
                  e = "hlk-" + l;
                  break;
                }
              return (
                n.append(
                  $(
                    "<a class='appLink appovhi' data-apptype='apwx_jrq' data-group='false' target='_blank' style='display:block;' onclick='return false'></a>"
                  )
                    .addClass(e)
                    .attr("appid", o)
                    .css({
                      top: d + "px",
                      left: c + "px",
                    })
                ),
                t.stopPropagation(),
                (document.onmousemove = function (t) {
                  var a = (t = t || event).clientX,
                    i = t.clientY,
                    o = a - s,
                    n = i - p,
                    r = $("." + e),
                    l = d,
                    f = c;
                  n < 0 && (l = d + n),
                    o < 0 && (f = c + o),
                    r.css({
                      width: Math.abs(o),
                      height: Math.abs(n),
                      top: l,
                      left: f,
                    });
                }),
                (document.onmouseup = function (t) {
                  t = t || event;
                  var o = $("." + e);
                  o.width() < 20 || o.height() < 20
                    ? (o.remove(), $(Apphots).children().length || i(t))
                    : _localstorage_.set(),
                    a(1),
                    (document.onmousemove = null),
                    (document.onmouseup = null);
                }),
                !1
              );
            },
            dblclick: function (t) {
              i((t = t || event));
            },
          });
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        }),
          $(".app-layer .app-layer-hd").hasClass("close") ||
            $(".app-layer .app-layer-hd").click();
        var i,
          o = a.c[1].exports.default.this,
          n = o.attr("data-apptype");
        if (
          (n ||
            (o.parents(".appovhi").length &&
              ((n = o.parents(".appovhi").attr("data-apptype")),
              (i = o.parents(".appovhi")))),
          "apwx_jautoqt" == n && $("#adialog-box .updataImgcut").click(),
          "apwx_jwz" == n)
        ) {
          var s = o.attr("data-config")
            ? JSON.parse(o.attr("data-config"))
            : {};
          c(o, function (t) {
            (s.text = t), o.attr("data-config", JSON.stringify(s));
          });
        }
        "apwx_jgdtw" == n &&
          3 ==
            (s = o.attr("data-config") ? JSON.parse(o.attr("data-config")) : {})
              .show &&
          c(o, function (t) {
            (s.text = t), o.attr("data-config", JSON.stringify(s));
          });
        if ("apwx_jbblb" == n)
          try {
            var p = o.attr("data-child-type"),
              r =
                ((s = i.attr("data-config")
                  ? JSON.parse(i.attr("data-config"))
                  : {}),
                o.parents(".item").attr("data-key"));
            ("title" != p &&
              "subtitle" != p &&
              "salePrice" != p &&
              "reservePrice" != p &&
              "sale30" != p &&
              "subtitle2" != p) ||
              c(o, function (t) {
                (s.items[r][p] = t), i.attr("data-config", JSON.stringify(s));
              }),
              ("prece_ltxt" != p &&
                "reservePrice_ltxt" != p &&
                "sale30_ltxt" != p &&
                "sale30_rtxt" != p &&
                "exp_alltxt" != p &&
                "exp_alltxt3" != p) ||
                c(o, function (t) {
                  (s[p] = t),
                    i.attr("data-config", JSON.stringify(s)),
                    i
                      .find("." + p)
                      .find("pre")
                      .text(t);
                });
          } catch (t) {}
        function c(t, e) {
          var a,
            i = t.html();
          (a = t.children().children("pre").length
            ? t.children().children("pre").text()
            : t.find("pre").text()),
            t.attr("waria-texteditor", !0).css("cursor", "auto"),
            t.find(".text-textarea").length ||
              (t.find("pre").remove(),
              t.children("a").remove(),
              t.append(
                $("<textarea class='text-textarea' style=''></textarea>").text(
                  a
                )
              ),
              t.find(".text-textarea").focus(),
              t.find(".text-textarea").blur(function () {
                var t = $(this).val();
                $(this)
                  .parent()
                  .append(
                    $(i).children("pre").length
                      ? $(i).children("pre").text(t).parent()
                      : $(i).text(t)
                  ),
                  $(this)
                    .parents(".wdraggable-ui")
                    .removeAttr("waria-texteditor")
                    .css("cursor", ""),
                  $(this).remove(),
                  e && e(t),
                  _localstorage_.set();
              }));
        }
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i,
          o,
          n,
          s = $(AppRoot).find(".Export_code"),
          p = $(".child_open_start"),
          r = $("#top .top_df"),
          c = $("#top .top_child"),
          d = $("#top .childSave_code"), // 自定义页面的确定按钮
          l = $("#top .child_close");

        function f(t) {
          var e = $(".codePanel .impcode"),
            i = $(".codePanel #ePdaoruCode"),
            o =
              (p.attr("data-val"),
              p.attr("data-appparent")
                ? JSON.parse(p.attr("data-appparent"))
                : []);
          t &&
            (s.attr("data-codehide", !0),
            s.click(),
            (n = a.c[4].exports.default));
          try {
            var d = o.length - 1,
              l = o[d].id,
              f = o[d].c,
              u = o[d].val,
              h = o[d].scrollTop;

            console.log(f);
            t &&
              $.each(f.app, function (t, e) {
                if (e.config.appID == l) {
                  if (u.indexOf("|") > 0) {
                    var a = u.split("|");
                    f.app[t].config[a[0]][a[1]][a[2]] = n;
                  } else f.app[t].config[u] = n;
                  return !1;
                }
              }),
              i.val(JSON.stringify(f)),
              e.click(),
              $(AppRoot).find("#appDrawHots").hasClass("select") &&
                $(AppRoot).find("#appDrawHots").click(),
              $(canvas)
                .children("div[appid=" + l + "]")
                .mousedown(),
              document.onmouseup(),
              o.splice(d, 1),
              o.length
                ? p.attr("data-appparent", JSON.stringify(o))
                : (p.removeAttr("data-appparent"),
                  p.removeAttr("data-textarea"),
                  p.removeAttr("data-wh"),
                  s.removeAttr("data-codehide"),
                  r.show(),
                  c.hide()),
              $(pageBox).scrollTop(h);
          } catch (err) {
            console.log(err);
            layer.msg("err-004", {
              icon: 2,
              time: 3e3,
            });
          }
        }
        p.click(function () {
          var t = p.attr("data-appid") || null,
            e = p.attr("data-val") || null,
            n = p.attr("data-textarea") || null,
            d = p.attr("data-wh") || null,
            l = $(".codePanel .impcode"),
            f = $(".codePanel #ePdaoruCode");
          if (
            (p.attr("data-appchlid") ? JSON.parse(p.attr("data-appchlid")) : {},
            (i = p.attr("data-appparent")
              ? JSON.parse(p.attr("data-appparent"))
              : []),
            s.attr("data-codehide", !0),
            s.click(),
            (o = {
              id: t,
              val: e,
              c: a.c[4].exports.default,
              scrollTop: $(pageBox).scrollTop(),
            }),
            i.push(o),
            p.attr("data-appparent", JSON.stringify(i)),
            $(".wdragUiKzroot").empty(),
            $(canvas).empty(),
            $(Apphots).empty(),
            r.hide(),
            c.show(),
            n)
          ) {
            if (n && d)
              try {
                (n = JSON.parse(n)),
                  "auto" != (d = JSON.parse(d)).child &&
                    ((n.width = d.w), (n.height = d.h)),
                  (n = JSON.stringify(n));
              } catch (t) {}
            f.val(n), l.click(), $(pageBox).scrollTop(0);
          } else if (d) {
            var u = $(AppRoot).find(".box-inner");
            (d = JSON.parse(d)),
              u.css({
                width: d.w + "px",
                height: d.h + "px",
              }),
              $(AppRoot).find(".opBg").css({
                top: u.height(),
              });
          }
        }),
          d.click(function () {
            _localstorage_.allRemove(), _localstorage_.set(), f(!0);
          }),
          l.click(function () {
            _localstorage_.allRemove(), _localstorage_.set(), f(!1);
          });
      },
      function (t, e, a) {
        var i = a.c[1].exports.default.this;
        if (i) {
          var o = i.attr("data-config")
              ? JSON.parse(i.attr("data-config"))
              : {},
            n = new Date().getTime(),
            s = 0;
          i.attr("appid", n);
          o.appID = n;
          (function t(e) {
            try {
              s++,
                e.appID && (e.appID = new Date().getTime() + "_" + s),
                e.app &&
                  e.app.length &&
                  $.each(e.app, function (e, a) {
                    a.config && t(a.config);
                  }),
                e.customContent && t(e.customContent),
                e.customContent_1 && t(e.customContent_1),
                e.customContent_2 && t(e.customContent_2),
                e.customContent_3 && t(e.customContent_2),
                e.slider &&
                  e.slider.length &&
                  $.each(e.slider, function (e, a) {
                    a.customContent && t(a.customContent);
                  });
            } catch (t) {
              console.info(t);
            }
          })(o);
          i.attr("data-config", JSON.stringify(o));
        } else
          layer.msg("err-app-null", {
            icon: 2,
            time: 3e3,
          });
      },
      // a(10) 自定义右键菜单
      function (t, e, a) {
        // 菜单项配置
        const data = [
          [
            {
              text: "锁定",
              icon: "&#xe6a1;",
              class: "_locking",
              func: function () {
                var t = $(this);
                "锁定" == $(".smart_menu_box").find("._locking a").text()
                  ? t.attr("waria-locking", !0)
                  : t.removeAttr("waria-locking"),
                  $(AppboxWrap).mousedown(),
                  t.mouseenter(),
                  _localstorage_.set();
              },
            },
            {
              text: "复制",
              icon: "&#xe6e6;",
              func: function () {
                var t = $(this),
                  e = 0,
                  i = t.clone(!"cloneEventHandler");
                if (t.attr("waria-locking")) {
                  layer.msg("锁定元素无法复制！", {
                    time: 1e3,
                  });
                  return false;
                }

                for (; $(".wdraggable-ui[data-i=" + e + "]").length; ) e++;
                t.before(i.attr("data-i", e)),
                  a(9),
                  a(10),
                  layer.msg("复制成功！", {
                    time: 1e3,
                  }),
                  _localstorage_.set();
              },
            },
          ],
          [
            {
              text: "移至顶层",
              icon: "&#xe617;",
              func: function () {
                var t = $(this),
                  e = t.parent();
                e.children(".wdraggable-ui:last").index() != t.index() &&
                  e.children(".wdraggable-ui:last").after(t),
                  _localstorage_.set();
              },
            },
            {
              text: "上移一层",
              icon: "&#xe61e;",
              func: function () {
                var t = $(this);
                t.next().after(t), _localstorage_.set();
              },
            },
            {
              text: "下移一层",
              icon: "&#xe61f;",
              func: function () {
                var t = $(this);
                t.prev().before(t), _localstorage_.set();
              },
            },
            {
              text: "移至底层",
              icon: "&#xe61c;",
              func: function () {
                var t = $(this);
                t.parent().children(".wdraggable-ui:first").before(t),
                  _localstorage_.set();
              },
            },
          ],
          [
            {
              text: "隐藏",
              icon: "&#xe6aa;",
              func: function () {
                $(this).hide(),
                  $(".jedit-border").hide(),
                  layer.msg("隐藏成功，可在右侧图层面板中打开"),
                  appLayer(null, function () {
                    a(1);
                  }),
                  _localstorage_.set();
              },
            },
            {
              text: "删除",
              icon: "&#xe6a8;",
              func: function () {
                var t = $(this);
                if (t.attr("waria-locking"))
                  return (
                    layer.msg("锁定元素无法删除！", {
                      time: 1e3,
                    }),
                    !1
                  );
                t.remove(),
                  $(".jedit-border").hide(),
                  appLayer(null, function () {
                    a(1);
                  }),
                  _localstorage_.set();
              },
            },
          ],
        ];
        // 点击菜单后的回调函数
        function callback() {
          var t = $(this),
            e = t.find(".wdraggable-ui-selected").attr("data-i"),
            a = $(".smart_menu_box");
          t.attr("waria-locking")
            ? a.find("._locking a").text("解除锁定")
            : a.find("._locking a").text("锁定"),
            e &&
              ($(".jedit-box-" + e)
                .removeClass("jedit-SHOW")
                .hide(),
              t.mouseenter());
        }

        $(canvas).children().smartMenu(data, {
          name: "_apps",
          start: callback,
        });
        $(Apphots).children().smartMenu(data, {
          name: "_hots",
          start: callback,
        });
      },
      function (t, e, a) {
        var i = $("body").attr("data-code"),
          o = $("body").attr("data-colde-preview"),
          n = _localstorage_.start(function () {
            a(1),
              a(6),
              $(Apphots).is(":visible")
                ? $("#appDrawHots").addClass("select")
                : $("#appDrawHots").removeClass("select");
          });
        i || o
          ? (i &&
              ($(".codePanel #ePdaoruCode").val(i),
              $(".codePanel .impcode").click()),
            o &&
              ($(".codePanel #ePdaoruCode").val(o),
              $(".codePanel .impcode").click(),
              $(AppRoot)
                .find(".Preview_code")
                .attr("open-page", "_self")
                .click()),
            layer.closeAll())
          : setTimeout(() => {
              $("body").attr("data-code")
                ? $(canvas).children().length &&
                  ($(
                    $(canvas).children()[$(canvas).children().length - 1]
                  ).mousedown(),
                  document.onmouseup())
                : n > 1
                ? layer.open({
                    type: 5,
                    title: "提示",
                    area: ["300px", "180px"],
                    content:
                      '<div style="padding: 20px 30px;">亲，系统检测到你之前有编辑的内容，要继续上次编辑吗？</div>',
                    maxmin: !0,
                    btn: ["确定", "取消"],
                    yes: function () {
                      if (
                        (layer.closeAll(),
                        _localstorage_.get(n - 1, 3),
                        $(Apphots).children().length)
                      ) {
                        $("#appDrawHots").hasClass("select") ||
                          $("#appDrawHots").click();
                        try {
                          $(
                            $(Apphots).children()[
                              $(Apphots).children().length - 1
                            ]
                          ).mousedown(),
                            document.onmouseup();
                        } catch (t) {}
                      } else
                        try {
                          $(
                            $(canvas).children()[
                              $(canvas).children().length - 1
                            ]
                          ).mousedown(),
                            document.onmouseup();
                        } catch (t) {}
                      a(21);
                    },
                    btn2: function () {
                      layer.closeAll(),
                        _localstorage_.allRemove(),
                        _localstorage_.removeKey("_localstorage_etab_"),
                        _localstorage_.set();
                    },
                  })
                : (_localstorage_.set(),
                  $(".histRecord i").removeClass("_records"));
            }, 100),
          a(12);
      },
      function (t, e, a) {
        $("body").bind({
          keydown: function (t) {
            (t = t || event).keyCode;
          },
          keyup: function (t) {
            var e = (t = t || event).keyCode,
              a = $(".pageTop .top_child"),
              i = $(".pageTop .top_df");
            if (
              (t.ctrlKey &&
                90 == e &&
                (a.is(":visible")
                  ? a.find(".prev").click()
                  : i.find(".prev").click(),
                appLayer(null)),
              t.ctrlKey &&
                89 == e &&
                (a.is(":visible")
                  ? a.find(".next").click()
                  : i.find(".next").click(),
                appLayer(null)),
              t.ctrlKey &&
                65 == e &&
                !$(canvas).children("div[waria-texteditor=true]").length)
            ) {
              t.preventDefault();
              var o,
                n = $(Apphots).is(":visible")
                  ? $(Apphots).children()
                  : $(canvas).children();
              $.each(n, function (t, e) {
                $(e).is(":visible") &&
                  ($(e).mouseenter(),
                  (o = $(e)),
                  $(".jedit-box-" + $(e).attr("data-i")).addClass(
                    "jedit-ctrl"
                  ));
              }),
                o && (o.mousedown(), document.onmouseup());
            }
          },
        });
      },
      // a(13) 选择预设皮肤面板
      function (t, e, a) {
        console.log("showAppStyleList");
      },
      function (t, e, a) {
        var i = $(".weexApp .moveLine_c"),
          o = _getElementLeft_($(AppRoot).find(".canvas")[0]);
        window.onmousemove = function (t) {
          var e = (t = t || event).x;
          i.css("left", e), i.find("em").text(e - o);
        };
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = $(skin_updata),
          o = a.c[1].exports.default,
          n = o.this,
          s = n.attr("data-apptype");

        function p() {
          var t = $(AppRoot).find(".box-inner"),
            e = n[0].offsetTop + t[0].offsetTop,
            a = n[0].offsetLeft + t[0].offsetLeft - 19;
          i.css({
            top: e + "px",
            left: a + "px",
          });
        }
        s &&
          ((e.default = o),
          a(16),
          "apwx_jbblb" == s
            ? ("mouseenter" == o.type &&
                (i.attr("data-show", !0), i.is(":visible") || (p(), i.show())),
              "mouseleave" == o.type &&
                (i.attr("data-show", ""),
                _global_timeout_ && clearTimeout(_global_timeout_),
                (_global_timeout_ = setTimeout(function () {
                  i.attr("data-show") ||
                    "on" == i.attr("data-show") ||
                    i.hide();
                }, 200))),
              "mousedown" == o.type &&
                (i.attr("data-show", "down"), i.is(":visible") && i.hide()),
              "mouseup" == o.type &&
                ("down" != i.attr("data-show") ||
                  i.is(":visible") ||
                  (p(), i.show()),
                i.attr("data-show", "")))
            : i.is(":visible") && i.hide());
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = $(skin_updata),
          o = i.find(".skin-show"),
          n = i.find(".skin-save"),
          s = i.find(".setskinup-app"),
          p = a.c[15].exports.default.this,
          r = p.attr("data-apptype");
        i.unbind("mouseenter mouseleave"),
          i.bind({
            mouseenter: function () {
              $(this).attr("data-show", "on");
            },
            mouseleave: function () {
              $(this).attr("data-show", "");
            },
          }),
          o.unbind("click"),
          n.unbind("click"),
          s.unbind("click"),
          o.bind("click", function () {
            $(".appStyles").attr("data-type", "setup"),
              $(".weexApp .applistbox")
                .find(".app[data-type=" + r + "]")
                .click();
          }),
          n.bind("click", function () {
            layer.msg("添加我的预设皮肤，正在制作中");
          }),
          s.bind("click", function () {
            var t = $(this).attr("data-json")
                ? JSON.parse($(this).attr("data-json"))
                : null,
              e = p.attr("data-config")
                ? JSON.parse(p.attr("data-config"))
                : null;
            if (t && e) {
              if (
                "apwx_jbblb" == r &&
                ((t.config.items = e.items),
                (t.config.appID = e.appID),
                !$._data(p.children(".itemUpData")[0], "events"))
              ) {
                t = {
                  dom: p,
                  appType: "apwx_jbblb",
                  config: t.config,
                  child_data: t.child_data,
                  pos:
                    p[0].offsetWidth +
                    "|" +
                    p[0].offsetHeight +
                    "|" +
                    p[0].offsetTop +
                    "|" +
                    p[0].offsetLeft,
                };
                _APPSHOW.d(t, function () {
                  a(1);
                });
              }
              p.attr("data-child_data", JSON.stringify(t.child_data)),
                p.attr("data-config", JSON.stringify(t.config)),
                p.children(".itemUpData").click(),
                _localstorage_.set();
            }
          });
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = a.c[1].exports.default.this;
        if ($(".top_child").is(":visible")) {
          var o = $(".child_open_start").attr("data-textarea");
          o &&
            o.indexOf(i.attr("appid")) > 0 &&
            i.attr("appid", new Date().getTime());
        }
        if (i.length) {
          var n = i.attr("appid"),
            s = new Date().getTime();
          $(".wdraggable-ui[" + n + "]").length > 1 &&
            !$(".wdraggable-ui[" + s + "]").length &&
            i.attr("appid", s);
        }
      },
      // a(18)
      function (t, e, a) {
        "use strict";
        var i;
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var o = $.cookie("u_login"),
          n = $.cookie("nick"),
          s = $.cookie("u_logoUrl");
        if ($("body").attr("data-log") === "err_zi") {
          layer.open({
            type: 5,
            title: "提醒",
            area: ["320px", "200px"],
            content:
              '<div style="padding: 20px 30px;">您登陆的子帐号没有管理应用的权限，请亲先用主帐号登陆，再去子帐号中心增加子帐号权限，再关闭浏览器重新登陆！</div>',
            maxmin: !0,
            btn: ["子权限设置介绍", "立即设置"],
            yes: function () {
              window.open(
                "https://open.taobao.com/doc.htm?spm=a219a.7386797.0.0.36bf669agdkKze&source=search&docId=101141&docType=1"
              );
            },
            btn2: function () {
              window.open(
                "https://zizhanghao.taobao.com/subaccount/employee/department_list_last.htm"
              );
            },
          });
        }
        if (1 == o) {
          function p() {
            s = $.cookie("u_logoUrl");
            var t = "cj" == $.cookie("taoapp_open") ? "cj" : "tao";
            (i = [
              '<div class="login_weex login_ye">',
              '<div class="user"><em class="p"><img src="' +
                s +
                '" /></em><em>你好，' +
                n +
                "</em><i>&#xe6b0;</i></div>",
              '<div class="user_opt">',
              '<div><p>获取淘宝数据：</p><span class="tap cj ' +
                ("cj" == t && "select") +
                '">插件获取<i>&#xe77c;</i></span><span class="tap ' +
                ("tao" == t && "select") +
                '">淘授权获取<i>&#xe77c;</i></span></div>',
              '<div class="sign_out_weex">退出登陆</div>',
              "</div>",
              "</div>",
            ].join("")),
              $(".topLeft .login_ye").remove(),
              $(".topLeft").append(i),
              $(".login_ye .user_opt .cj").hover(
                function (t) {
                  (t = t || event).stopPropagation(),
                    layer.tips("数据会更全，双击下载插件", this, {
                      tips: [4],
                      time: 1e4,
                    });
                },
                function () {
                  layer.closeAll();
                }
              ),
              $(".login_ye .user_opt .cj").dblclick(function () {
                window.open("../pages/download.html");
              });
          }
          p();
          c();
        } else r();

        function r() {
          $(".topLeft").children(".login_weex").remove(),
            $(".topLeft").append(
              '<span class="login_weex login_no"><em>|</em><em></em><em class="sign_log_weex">登陆</em></span>'
            ),
            $(".sign_log_weex").click(function () {
              _GETIMAGES.login_tb();
            });
        }
        function c() {
          $(".sign_out_weex").click(function () {
            _GETIMAGES.out(function (t, e) {
              r(), $.cookie("u_login", 0);
            });
          }),
            $(".login_ye .tap").click(function () {
              var t = $(this).hasClass("cj") ? "cj" : "tao",
                e = new Date();
              e.setTime(e.getTime() + 2270592e5),
                $.cookie("taoapp_open", t, {
                  expires: e,
                }),
                $(this).addClass("select").siblings().removeClass("select");
            });
        }
      },
      function (module, exports, __app_require__) {
        "use strict";
        Object.defineProperty(exports, "__sjdzModule", {
          value: !0,
        });
        var shop_code = $(AppRoot).find(".Export_code");
        // console.log('index.js 0')
        window.parent.postMessage(
          {
            type: "dashi51.com",
            operat: "open",
            content: "",
          },
          "*"
        ),
          window.addEventListener(
            "message",
            function (e) {
              // console.log('index.js 1', e)
              var data = e.data;
              data &&
                data.type &&
                "dashi51.com" == data.type &&
                (data.globalData &&
                  $("body").attr(
                    "wx-globalData",
                    JSON.stringify(data.globalData)
                  ),
                "code" == data.operat &&
                  ($("body").addClass("parent-wangpu-open"),
                  $("body").attr("data-code", data.code),
                  shop_code.attr("data-codehide", "save"),
                  _localstorage_.allRemove(),
                  __app_require__(11),
                  __app_require__(21),
                  $.post("./cjjs/index.php", function (t, s) {
                    var js = t;
                    window.parent.postMessage(
                      {
                        type: "dashi51.com",
                        operat: "js",
                        content: js,
                      },
                      "*"
                    ),
                      $(".tbapp_exchange").attr("data-dashi51-token") ||
                        eval(t);
                  })));
            },
            !1
          ),
          $(".close_weex").click(function () {
            window.parent.postMessage(
              {
                type: "dashi51.com",
                operat: "close",
              },
              "*"
            );
          }),
          $(".Export_code_shop").click(function () {
            shop_code.click(),
              window.parent.postMessage(
                {
                  type: "dashi51.com",
                  operat: "save",
                  content: $("#ePcodeText").val(),
                },
                "*"
              );
          });
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        }),
          $(".public-layer").click(function () {
            var t = $(this).attr("data-type");
            "closeAll" == t && layer.closeAll();
            "load(2)" == t && layer.load(2);
            "msg" == t &&
              layer.msg($(this).attr("tip"), {
                icon: 16,
                time: 3e3,
                shade: 0.2,
              });
          });
      },
      function (t, e, a) {
        "use strict";
        Object.defineProperty(e, "__sjdzModule", {
          value: !0,
        });
        var i = "_localstorage_etab_",
          o = _localstorage_.getKey(i),
          n = $(canvas).html();
        try {
          var s = [];
          o = JSON.parse(o);
          for (const t in o) n.indexOf(t) > 0 && (s[t] = o[t]);
          (s = Object.assign({}, s)),
            _localstorage_.setKey(i, JSON.stringify(s));
        } catch (t) {}
      },
    ]))
  );
});
