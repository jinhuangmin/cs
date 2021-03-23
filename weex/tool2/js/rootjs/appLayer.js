// 组件图层编辑面板,在每次拖动排序后记录历史步骤

define(["jquery.drop", "_localstorage_"], function (jqueryDrop, historyStore) {
  let $layer = $(".weexApp .app-layer"), // 图层操作面板
    $btn = $layer.find(".app-layer-hd"); // 图层操作面板开关图标
  let options = {
    start: function (app, cb, ui) {
      const p = this;
      this.app = app;
      this.ui = ui;
      this.callback = cb;
      this.setTips();
      this.setPanel();
      $btn.unbind("click");
      $btn.bind("click", function () {
        if ($(this).hasClass("close")) {
          p.setPanel();
          p.open();
        } else {
          p.close();
        }
      });
    },
    // 按钮绑定鼠标事件 移入显示提示内容
    setTips: function () {
      $layer.find(".tips[data-title]").unbind("mouseenter mouseleave");
      $layer.find(".tips[data-title]").bind({
        mouseenter: function () {
          layer.tips($(this).attr("data-title"), $(this), {
            tips: 2,
            time: 1000,
          });
        },
        mouseleave: function () {
          layer.closeAll();
        },
      });
    },
    setPanel: function () {
      let ui = this.ui && this.ui.ui,
        appList = $(".weexApp .app-box").children().toArray().reverse(),
        dom = "";
      appList.map((app) => {
        let appname = $(app).attr("appname"),
          appid = $(app).attr("appid"),
          eye = $(app).is(":visible") ? "&#xe72f;" : "&#xe659;",
          eyeClass = $(app).is(":visible") ? "" : "hide",
          lock = $(app).attr("waria-locking") ? "app-locking" : "";
        dom += `
        <li class="p-li ${lock}" data-appid=${appid}>
          <i class="so-icon ${eyeClass}"> ${eye} </i>
          <div class="item">
            <span class="n"> ${appname} </span>
            <span class="operate"> <i class="up-edit">&#xe62c;</i> <i class="locking">&#xe6a0;</i> <i class="remove">&#xe6a8;</i> </span>
          </div>
        </li>`;
      });
      if (!dom) {
        $layer
          .find(".app-layer-list")
          .empty()
          .append(
            "<div style='font-size: 12px;text-align: center;line-height: 80px;color: #999;}'>提示：暂无图层内容，请添加模块！</div>"
          );
        return;
      }
      $layer.find(".app-layer-list").empty().append(dom);

      // 当该组件有预设皮肤时
      if (ui && ui.length) {
        ui.map((a) => {
          const t = $(a).attr("appid");
          $layer
            .find(".app-layer-list")
            .children(".p-li[data-appid=" + t + "]")
            .addClass("layer-temp-ck");
        });
      }
      // 类目拖拽排序
      $layer
        .find(".app-layer-list")
        .sortable(
          { placeholder: "ui-state", axis: "y", opacity: 0.8, delay: 10 },
          { start: function (a, i) {} },
          {
            stop: function (a, e) {
              let n;
              const p = [e.item.index(), e.item.attr("data-appid")];
              if (e.item.prev().length) {
                n = e.item.prev().attr("data-appid");
                $(".weexApp .app-box")
                  .children(".wdraggable-ui[appid=" + n + "]")
                  .before(
                    $(".weexApp .app-box").children(
                      ".wdraggable-ui[appid=" + p[1] + "]"
                    )
                  );
              }
              if (e.item.next().length) {
                n = e.item.next().attr("data-appid");
                $(".weexApp .app-box")
                  .children(".wdraggable-ui[appid=" + n + "]")
                  .after(
                    $(".weexApp .app-box").children(
                      ".wdraggable-ui[appid=" + p[1] + "]"
                    )
                  );
              }
              historyStore.set();
            },
          }
        )
        .children()
        .hover(
          function (a) {
            $(this).addClass("layer-temp-hover"),
              $(".weexApp .app-box")
                .find(
                  ".wdraggable-ui[appid=" + $(this).attr("data-appid") + "]"
                )
                .addClass("ui-temp-hover");
          },
          function (a) {
            $(".weexApp .app-box")
              .find(".wdraggable-ui")
              .removeClass("ui-temp-hover"),
              $(this).removeClass("layer-temp-hover");
          }
        )
        .mousedown(function (a) {
          $(this), (a = a || event);
          var i = $(".weexApp .app-box").children(
            ".wdraggable-ui[appid=" + $(this).attr("data-appid") + "]"
          );
          i.mouseenter(), i.mousedown();
        });
      // 眼睛图标点击事件
      $layer
        .find(".app-layer-list")
        .children()
        .find(".so-icon")
        .mousedown(function (a) {
          a = a || event;
          var i = $(".weexApp .app-box").children(
            ".wdraggable-ui[appid=" +
              $(this).parents(".p-li").attr("data-appid") +
              "]"
          );
          a.stopPropagation(),
            $(this).hasClass("hide")
              ? ($(this).removeClass("hide"),
                $(this).html("&#xe72f;"),
                i.show())
              : ($(this).addClass("hide"), $(this).html("&#xe659;"), i.hide());
        });

      // 组件名
      $layer
        .find(".item")
        .find(".n")
        .dblclick(function () {
          $(".app-layer-list .up-name-input").remove();
          const a = $(".weexApp .app-box").children(
              ".wdraggable-ui[appid=" +
                $(this).parents(".p-li").attr("data-appid") +
                "]"
            ),
            i = $(this).text();
          $(this)
            .parents(".p-li")
            .find(".item")
            .append(
              '<div class="up-name-input"><input class="upn" type="text" /></div>'
            ),
            $(this).parents(".p-li").find(".upn").focus().val(i),
            $layer
              .find(".app-layer-list")
              .find(".upn")
              .blur(function () {
                var i = $(this).val();
                $(this).parents(".p-li").find(".n").text(i),
                  a.attr("appname", i),
                  $(".app-layer-list .up-name-input").remove();
              });
        });
      // 右侧操作
      $layer
        .find(".app-layer-list")
        .children()
        .find(".operate")
        .children()
        .mousedown(function (a) {
          (a = a || event).stopPropagation();
        });
      $layer
        .find(".app-layer-list")
        .children()
        .find(".operate")
        .children()
        .click(function (a) {
          a = a || event;
          const p = $(".weexApp .app-box").children(
            ".wdraggable-ui[appid=" +
              $(this).parents(".p-li").attr("data-appid") +
              "]"
          );
          if (
            (a.stopPropagation(),
            $(this).hasClass("locking") &&
              (p.attr("waria-locking")
                ? (p.removeAttr("waria-locking"),
                  $(this).parents(".p-li").removeClass("app-locking"),
                  layer.msg("取消锁定", { time: 800 }))
                : (p.attr("waria-locking", !0),
                  $(this).parents(".p-li").addClass("app-locking"),
                  layer.msg("锁定模块", { time: 800 })),
              $layer.attr("data", "not-close"),
              $(".weexApp .box-wrap").mousedown(),
              p.mouseenter(),
              p.removeClass("ui-temp-hover"),
              setTimeout(() => {
                $layer.removeAttr("data");
              }, 10)),
            $(this).hasClass("up-edit"))
          ) {
            $(".app-layer-list .up-name-input").remove();
            var n = $(this).parents(".p-li").find(".n").text();
            $(this)
              .parents(".p-li")
              .find(".item")
              .append(
                '<div class="up-name-input"><input class="upn" type="text" /></div>'
              ),
              $(this).parents(".p-li").find(".upn").focus().val(n),
              $layer
                .find(".app-layer-list")
                .find(".upn")
                .blur(function () {
                  var a = $(this).val();
                  $(this).parents(".p-li").find(".n").text(a),
                    p.attr("appname", a),
                    $(".app-layer-list .up-name-input").remove();
                });
          }
          $(this).hasClass("remove") &&
            ($(this).parents(".p-li").remove(),
            p.remove(),
            $(".jedit-SHOW").remove(),
            historyStore.set());
        });
    },
    // 打开面板
    open: function () {
      $btn.removeClass("close");
      $btn.attr("data-title", "关闭图层");
      $layer.find(".app-layer-bd").animate({ left: "0" }, 200);
      $layer.find(".hd-i").html("&#xe63f;");
    },
    // 关闭面板
    close: function () {
      if ($layer.attr("data") === "not-close") {
        return;
      }
      $btn.addClass("close");
      $btn.attr("data-title", "编辑图层");
      $layer.find(".app-layer-bd").animate({ left: "300px" }, 200);
      $layer.find(".app-layer-list").empty();
      $layer.find(".hd-i").html("&#xe68a;");
    },
  };
  return function (app, cb, ui) {
    try {
      app === "close" ? options.close() : options.start(app, cb, ui);
    } catch (a) {
      console.info(a);
    }
  };
});
