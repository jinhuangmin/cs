/*
 * smartMenu.js 智能上下文菜单插件
 * http://www.zhangxinxu.com/
 * https://www.zhangxinxu.com/wordpress/2011/05/jquery-smartmenu%e5%8f%b3%e9%94%ae%e8%87%aa%e5%ae%9a%e4%b9%89%e4%b8%8a%e4%b8%8b%e6%96%87%e8%8f%9c%e5%8d%95%e6%8f%92%e4%bb%b6/
 *
 * Copyright 2011, zhangxinxu
 *
 * 2011-05-26 v1.0	编写
 * 2011-06-03 v1.1	修复func中this失准问题
 * 2011-10-10 v1.2  修复脚本放在<head>标签中层无法隐藏的问题
 * 2011-10-30 v1.3  修复IE6~7下二级菜单移到第二项隐藏的问题
 */

;(function ($) {
  var D = $(document).data('func', {})
  $.smartMenu = $.noop
  $.fn.smartMenu = function (data, options) {
    var B = $('body'),
      defaults = {
        name: '',
        offsetX: 2,
        offsetY: 2,
        textLimit: 6,
        beforeShow: $.noop,
        afterShow: $.noop,
      }
    var params = $.extend(defaults, options || {})

    var htmlCreateMenu = function (datum) {
        var dataMenu = datum || data
        var nameMenu = datum ? Math.random().toString() : params.name
        var htmlMenu = ''
        var htmlCorner = ''
        var clKey = 'smart_menu_'
        if ($.isArray(dataMenu) && dataMenu.length) {
          htmlMenu = '<div id="smartMenu_' + nameMenu + '" class="' + clKey + 'box">' + '<div class="' + clKey + 'body">' + '<ul class="' + clKey + 'ul">'

          $.each(dataMenu, function (i, arr) {
            if (i) {
              htmlMenu = htmlMenu + '<li class="' + clKey + 'li_separate">&nbsp;</li>'
            }
            if ($.isArray(arr)) {
              $.each(arr, function (j, obj) {
                var text = obj.text
                var _class = obj.class || ''
                var htmlMenuLi = ''
                var strTitle = ''
                var rand = Math.random().toString().replace('.', '')
                if (text) {
                  if (text.length > params.textLimit) {
                    text = text.slice(0, params.textLimit) + '…'
                    strTitle = ' title="' + obj.text + '"'
                  }
                  if ($.isArray(obj.data) && obj.data.length) {
                    htmlMenuLi =
                      '<li class="' +
                      clKey +
                      'li ' +
                      _class +
                      '" data-hover="true">' +
                      htmlCreateMenu(obj.data) +
                      '<i>' +
                      obj.icon +
                      '</i><a class="' +
                      clKey +
                      'a"' +
                      strTitle +
                      ' data-key="' +
                      rand +
                      '"><i class="' +
                      clKey +
                      'triangle"></i>' +
                      text +
                      '</a>' +
                      '</li>'
                  } else {
                    htmlMenuLi = '<li class="' + clKey + 'li ' + _class + '">' + '<i>' + obj.icon + '</i><a class="' + clKey + 'a"' + strTitle + ' data-key="' + rand + '">' + text + '</a>' + '</li>'
                  }

                  htmlMenu += htmlMenuLi

                  var objFunc = D.data('func')
                  objFunc[rand] = obj.func
                  D.data('func', objFunc)
                }
              })
            }
          })

          htmlMenu = htmlMenu + '</ul>' + '</div>' + '</div>'
        }
        return htmlMenu
      },
      funSmartMenu = function () {
        var idKey = '#smartMenu_',
          clKey = 'smart_menu_',
          jqueryMenu = $(idKey + params.name)
        if (!jqueryMenu.length) {
          $('body').append(htmlCreateMenu())
          //事件
          $(idKey + params.name)
            .find('li')
            .bind('click', function () {
              var key = $(this).children('a').attr('data-key'),
                callback = D.data('func')[key]
              if ($.isFunction(callback)) {
                callback.call(D.data('trigger'))
              }
              $.smartMenu.hide()
              return false
            })
          $(idKey + params.name + ' li').each(function () {
            var isHover = $(this).attr('data-hover'),
              clHover = clKey + 'li_hover'

            $(this).hover(function () {
              var jqueryHover = $(this).siblings('.' + clHover)
              jqueryHover
                .removeClass(clHover)
                .children('.' + clKey + 'box')
                .hide()
              jqueryHover.children('.' + clKey + 'a').removeClass(clKey + 'a_hover')

              if (isHover) {
                $(this)
                  .addClass(clHover)
                  .children('.' + clKey + 'box')
                  .show()
                $(this)
                  .children('.' + clKey + 'a')
                  .addClass(clKey + 'a_hover')
              }
            })
          })
          return $(idKey + params.name)
        }
        return jqueryMenu
      }

    $(this).each(function () {
      this.oncontextmenu = function (e) {
        //回调
        if ($.isFunction(params.beforeShow)) {
          params.beforeShow.call(this)
        }
        e = e || window.event
        //阻止冒泡
        e.cancelBubble = true
        if (e.stopPropagation) {
          e.stopPropagation()
        }
        //隐藏当前上下文菜单，确保页面上一次只有一个上下文菜单
        $.smartMenu.hide()
        var st = D.scrollTop()
        var jqueryMenu = funSmartMenu()
        if (jqueryMenu) {
          jqueryMenu.css({
            display: 'block',
            left: e.clientX + params.offsetX,
            top: e.clientY + st + params.offsetY,
          })
          D.data('target', jqueryMenu)
          D.data('trigger', this)
          //回调
          if ($.isFunction(params.afterShow)) {
            params.afterShow.call(this)
          }
          if ($.isFunction(params.start)) {
            params.start.call(this)
          }

          return false
        }
      }
    })
    if (!B.data('bind')) {
      B.bind('click', $.smartMenu.remove).data('bind', true)
    }
  }
  $.extend($.smartMenu, {
    hide: function () {
      var target = D.data('target')
      if (target && target.css('display') === 'block') {
        target.hide()
      }
    },
    remove: function () {
      var target = D.data('target')
      if (target) {
        target.remove()
      }
    },
  })
})(jQuery)
