define(["jquery.drop","_localstorage_"],function(a,i){var t=".weexApp .app-box",e=".weexApp .app-layer",p={default:function(){$(e).find(".tips[data-title]").unbind("mouseenter mouseleave"),$(e).find(".tips[data-title]").bind({mouseenter:function(a){var i=$(this).attr("data-tip")||2;layer.tips($(this).attr("data-title"),$(this),{tips:i,time:3e3})},mouseleave:function(a){layer.closeAll()}})},start:function(a,i,t){var p=this;this.app=a,this.ui=t,this.callback=i,this.default(),this.panel(),$(e).find(".app-layer-hd").unbind("click"),$(e).find(".app-layer-hd").bind("click",function(){$(this).hasClass("close")?(p.panel(),p.open()):p.close()})},panel:function(){this.app;var a=this.ui&&this.ui.ui,p=$(t).children().toArray().reverse(),n="";if(p.map((a,i)=>{var t=$(a).attr("appname"),e=$(a).attr("appid"),p=$(a).is(":visible")?"&#xe72f;":"&#xe659;",s=$(a).is(":visible")?"":"hide",l=$(a).attr("waria-locking")?"app-locking":"";n+='<li class="p-li '+l+'" data-appid="'+e+'"><i class="so-icon '+s+'">'+p+'</i><div class="item"><span class="n">'+t+'</span><span class="operate"><i class="up-edit">&#xe62c;</i><i class="locking">&#xe6a0;</i><i class="remove">&#xe6a8;</i></span></div></li>'}),!n)return $(e).find(".app-layer-list").empty().append("<div style='font-size: 12px;text-align: center;line-height: 80px;color: #999;}'>提示：暂无图层内容，请添加模块！</div>"),!1;$(e).find(".app-layer-list").empty().append(n),a&&a.length&&a.map((a,i)=>{var t=$(a).attr("appid");$(e).find(".app-layer-list").children(".p-li[data-appid="+t+"]").addClass("layer-temp-ck")}),$(".app-layer-list").sortable({placeholder:"ui-state",axis:"y",opacity:.8,delay:10},{start:function(a,i){}},{stop:function(a,e){var p=[e.item.index(),e.item.attr("data-appid")];if(e.item.prev().length){var n=e.item.prev().attr("data-appid");$(t).children(".wdraggable-ui[appid="+n+"]").before($(t).children(".wdraggable-ui[appid="+p[1]+"]"))}if(e.item.next().length){n=e.item.next().attr("data-appid");$(t).children(".wdraggable-ui[appid="+n+"]").after($(t).children(".wdraggable-ui[appid="+p[1]+"]"))}i.set()}}).children().hover(function(a){$(this).addClass("layer-temp-hover"),$(t).find(".wdraggable-ui[appid="+$(this).attr("data-appid")+"]").addClass("ui-temp-hover")},function(a){$(t).find(".wdraggable-ui").removeClass("ui-temp-hover"),$(this).removeClass("layer-temp-hover")}).mousedown(function(a){$(this),a=a||event;var i=$(t).children(".wdraggable-ui[appid="+$(this).attr("data-appid")+"]");i.mouseenter(),i.mousedown()}),$(".app-layer-list").children().find(".so-icon").mousedown(function(a){a=a||event;var i=$(t).children(".wdraggable-ui[appid="+$(this).parents(".p-li").attr("data-appid")+"]");a.stopPropagation(),$(this).hasClass("hide")?($(this).removeClass("hide"),$(this).html("&#xe72f;"),i.show()):($(this).addClass("hide"),$(this).html("&#xe659;"),i.hide())}),$(e).find(".item").find(".n").dblclick(function(){$(".app-layer-list .up-name-input").remove();var a=$(t).children(".wdraggable-ui[appid="+$(this).parents(".p-li").attr("data-appid")+"]"),i=$(this).text();$(this).parents(".p-li").find(".item").append('<div class="up-name-input"><input class="upn" type="text" /></div>'),$(this).parents(".p-li").find(".upn").focus().val(i),$(".app-layer-list").find(".upn").blur(function(){var i=$(this).val();$(this).parents(".p-li").find(".n").text(i),a.attr("appname",i),$(".app-layer-list .up-name-input").remove()})}),$(".app-layer-list").children().find(".operate").children().mousedown(function(a){(a=a||event).stopPropagation()}),$(".app-layer-list").children().find(".operate").children().click(function(a){a=a||event;var p=$(t).children(".wdraggable-ui[appid="+$(this).parents(".p-li").attr("data-appid")+"]");if(a.stopPropagation(),$(this).hasClass("locking")&&(p.attr("waria-locking")?(p.removeAttr("waria-locking"),$(this).parents(".p-li").removeClass("app-locking"),layer.msg("取消锁定",{time:800})):(p.attr("waria-locking",!0),$(this).parents(".p-li").addClass("app-locking"),layer.msg("锁定模块",{time:800})),$(e).attr("data","not-close"),$(".weexApp .box-wrap").mousedown(),p.mouseenter(),p.removeClass("ui-temp-hover"),setTimeout(()=>{$(e).removeAttr("data")},10)),$(this).hasClass("up-edit")){$(".app-layer-list .up-name-input").remove();var n=$(this).parents(".p-li").find(".n").text();$(this).parents(".p-li").find(".item").append('<div class="up-name-input"><input class="upn" type="text" /></div>'),$(this).parents(".p-li").find(".upn").focus().val(n),$(".app-layer-list").find(".upn").blur(function(){var a=$(this).val();$(this).parents(".p-li").find(".n").text(a),p.attr("appname",a),$(".app-layer-list .up-name-input").remove()})}$(this).hasClass("remove")&&($(this).parents(".p-li").remove(),p.remove(),$(".jedit-SHOW").remove(),i.set())})},open:function(){$(e).find(".app-layer-hd").removeClass("close"),$(e).find(".app-layer-hd").attr("data-title","关闭图层"),$(e).find(".app-layer-bd").animate({left:"0"},200),$(e).find(".hd-i").html("&#xe63f;")},close:function(){"not-close"!=$(e).attr("data")&&($(e).find(".app-layer-hd").addClass("close"),$(e).find(".app-layer-hd").attr("data-title","编辑图层"),$(e).find(".app-layer-bd").animate({left:"300px"},0),$(e).find(".app-layer-list").empty(),$(e).find(".hd-i").html("&#xe68a;"))}};return function(a,i,t){try{"close"==a?p.close():p.start(a,i,t)}catch(a){console.info(a)}}});