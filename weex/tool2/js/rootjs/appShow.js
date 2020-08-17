/**
 * 根据传入组件数据的 appType 返回对应的 dom
 */

define(function () {
    /**
     * 参数说明
     * 生成DOM结构的js函数
     * data-group='true',组:子元素可移动设置wdraggable-ui-children
     * appovhi,overflow: hidden
     * data-sync='true',元素同步最外层，需要设置同步的子元素 position-sync='1'
     */
    var appfun = {}
  
    // 编辑文字 apwx_jwz
    appfun.apwx_jwz = function (appJson) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
      var return_Dom = $(
        [
          "<div class='appovhi'>",
          "<a href='" +
            appJson.config.href +
            "' style='color:" +
            appJson.config.color +
            "' target='_blank' onclick='return false'>",
          '<pre>' + appJson.config.text + '</pre>',
          '</a>',
          '</div>',
        ].join('')
      )
      /**
       * 参数数据
       */
      var txtcss = {
        'background-color': config.bgColor,
        'font-size': config.fontSize + 'px',
        'font-weight': config.fontWeight,
        'border-width': config.borderWidth + 'px',
        'border-color': config.borderColor,
        'border-radius': config.borderRadius + 'px',
        'text-decoration': config.textDecoration,
        padding: '0 ' + (config.paddingLR || 0) + 'px',
        'border-style': 'solid',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
        'box-sizing': 'border-box',
      }
      if (config.lineHeight) {
        txtcss['line-height'] = config.lineHeight + 'px'
      }
      return_Dom = return_Dom.css(txtcss)
      if (config.bgImg && config.bgImg != 'none') {
        return_Dom = return_Dom.css({
          'background-image': 'url(' + config.bgImg + ')',
        })
      }
      if (config.align == 'center') {
        return_Dom = return_Dom.css({
          display: 'flex',
          'justify-content': config.align,
          'align-items': config.align,
        })
      } else {
        return_Dom = return_Dom.css({
          'text-align': config.align,
        })
      }
      /**
       * 基本数据
       */
      return_Dom = return_Dom.attr('appname', appJson.appName || '文字')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    // 图片 apwx_jtw
    appfun.apwx_jtup = function (appJson) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
  
      var return_Dom = $(
        [
          "<div class='appovhi' style='display:flex;justify-content:center;align-items:center;'>",
          "<a href='" + appJson.config.href + "' target='_blank' onclick='return false'>",
          "<img width='100%' src='" + appJson.config.pSrc + "' />",
          '</a>',
          '</div>',
        ].join('')
      )
  
      return_Dom = return_Dom.attr('appname', appJson.appName || '图片')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
        'border-radius': config.borderRadius + 'px',
      })
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    // 视频 apwx_jsp
    appfun.apwx_jsp = function (appJson) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
  
      var return_Dom = $(
        [
          '<div data-group="true" class="appovhi">',
          '<video style="width:100%;height:100%;">',
          '<source src="" type="video/mp4">',
          '</video>',
          '</div>',
        ].join('')
      )
  
      config.videoControls &&
        (return_Dom = return_Dom.find('video').attr('controls', config.videoControls).parents('.appovhi'))
      config.autoPlay && (return_Dom = return_Dom.find('video').attr('autoplay', config.autoPlay).parents('.appovhi'))
      config.videoPoster && (return_Dom = return_Dom.find('video').attr('poster', config.videoPoster).parents('.appovhi'))
      config.videoLoop && (return_Dom = return_Dom.find('video').attr('loop', config.videoLoop).parents('.appovhi'))
      config.videoMuted && (return_Dom = return_Dom.find('video').attr('muted', config.videoMuted).parents('.appovhi'))
      return_Dom = return_Dom.find('source').attr('src', config.videoSrc).parents('.appovhi')
  
      return_Dom = return_Dom.attr('appname', appJson.appName || '视频')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     * TODO 倒计时 apwx_jdjs
     * child_data 四个倒计时数字
     * config.customContent_1-3 三种状态下的自定义内容
     */
    appfun.apwx_jdjs = function (appJson) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
  
      var child_data = appJson.child_data
      var childType = ['d', 'h', 'm', 's']
  
      var return_Dom = $(
        [
          '<div data-group="true" class="appovhi">',
          '<span class="d wdraggable-ui-children" disabled-resizable="true" data-child-type="d" style="position: absolute; transform: rotate(' +
            (config.rotate_d || 0) +
            'deg);">00</span>',
          '<span class="h wdraggable-ui-children" disabled-resizable="true" data-child-type="h" style="position: absolute; transform: rotate(' +
            (config.rotate_h || 0) +
            'deg);">00</span>',
          '<span class="m wdraggable-ui-children" disabled-resizable="true" data-child-type="m" style="position: absolute; transform: rotate(' +
            (config.rotate_m || 0) +
            'deg);">00</span>',
          '<span class="s wdraggable-ui-children" disabled-resizable="true" data-child-type="s" style="position: absolute; transform: rotate(' +
            (config.rotate_s || 0) +
            'deg);">00</span>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
      } //更新元素
  
      /**
       * 设置子元素(倒计时数字)样式
       * 更新自定义区内容时不执行
       */
      if (!appJson.dom) {
        for (const data of child_data) {
          if (childType.includes(data.type)) {
            return_Dom = return_Dom
              .children('.' + data.type)
              .css({
                left: data.left + 'px',
                top: data.top + 'px',
                visibility: data.visibility,
                'text-align': 'center',
                'border-style': 'solid',
                'border-width': '0',
              })
              .parent()
            data.style &&
              (return_Dom = return_Dom
                .children('.' + data.type)
                .css(data.style)
                .parent())
          }
        }
      }
  
      /**
       * 倒计时未开始, 进行时, 已结束 三种状态下的自定义内容
       */
      for (let index = 1; index <= 3; index++) {
        const customContent = config['customContent_' + index]
        if (customContent) {
          var child_page = $(
            "<div class='child_page child_page_" +
              index +
              "' style='background-repeat: no-repeat;background-position: center top;'></div>"
          )
          child_page = child_page.css({
            width: customContent.width + 'px',
            height: customContent.height + 'px',
            'background-color': customContent.bgColor,
          })
          customContent.bgImg
            ? (child_page = child_page.css('background-image', 'url(' + customContent.bgImg + ')'))
            : (child_page = child_page.css('background-image', 'none'))
          return_Dom = return_Dom.css({
            display: '',
            'justify-content': '',
            'align-items': '',
          })
          for (let index = 0; index < customContent.app.length; index++) {
            var appdata = customContent.app[index]
            var child_app = appfun[appdata.appType](appdata)
            child_page = child_page.append(child_app)
          }
          index == 1 || (child_page = child_page.css('display', 'none'))
          return_Dom = return_Dom.prepend(child_page)
        }
      }
  
      return_Dom = return_Dom.attr('appname', appJson.appName || '倒计时')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      return_Dom = return_Dom.css('background-color', config.bgColor)
      config.bgImg && (return_Dom = return_Dom.css('background-image', 'url(' + config.bgImg + ')'))
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     *  轮播
     *  apwx_jnbo
     */
    appfun.apwx_jnbo = function (appJson, callback) {
      var prev_next = appJson.config.prev_next
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      var bo = ''
      var span = ''
      var span_1 = ''
      var span_2 = ''
      var _style1
      var _style2
      var _stylename = 'height'
      var _styleblock = 'display:block'
      var _PagPos = config.PagPos
      var _locking = _PagPos > 0 ? 'waria-locking="true"' : ''
      var _pagflexPadding = ''
      var _calc = ''
      var _lt = ''
      var _bgColor = 'background:' + config.bgColor + ';'
      try {
        /**
         * 偏移
         */
        var _partial = config.PagStyle_obj[config.PagStyle].style.partial
        if (_PagPos == 0) {
          var _flexDirection = config.PagPos_obj[_PagPos].flexDirection
          if (_flexDirection == 'column') {
            //垂直
            _pagflexPadding = 'padding: ' + _partial + 'px 0px 0px 0px;'
            if (_partial < 0) {
              _pagflexPadding = 'margin: ' + _partial + 'px 0px 0px 0px;'
            } //处理一下负数
          } else {
            _pagflexPadding = 'padding: 0px 0px 0px ' + _partial + 'px;'
            if (_partial < 0) {
              _pagflexPadding = 'margin: 0px 0px 0px ' + _partial + 'px;'
            } //处理一下负数
          }
        }
        if (_PagPos == 1 || _PagPos == 2) {
          _pagflexPadding = 'padding: ' + _partial + 'px 0px 0px 0px;'
          if (_partial < 0) {
            _pagflexPadding = 'margin: ' + _partial + 'px 0px 0px 0px;'
          } //处理一下负数
          _calc = 'width: calc(100% - ' + config.PagPos_obj[_PagPos].width + 'px);'
          if (_PagPos == 1) {
            _lt = 'left: ' + config.PagPos_obj[_PagPos].width + 'px;'
          }
        } else if (_PagPos == 3 || _PagPos == 4) {
          _pagflexPadding = 'padding: 0px 0px 0px ' + _partial + 'px;'
          if (_partial < 0) {
            _pagflexPadding = 'margin: 0px 0px 0px ' + _partial + 'px;'
          } //处理一下负数
          _calc = 'height: calc(100% - ' + config.PagPos_obj[_PagPos].height + 'px);'
          if (_PagPos == 3) {
            _lt = 'top: ' + config.PagPos_obj[_PagPos].height + 'px;'
          }
        }
      } catch (error) {}
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
      var return_Dom = $(
        [
          '<div data-group="true" class="appovhi apwx_jnbo" data-group="true">',
          '<div class="bo_edit_temp" style="' + _bgColor + _calc + _lt + '"></div>',
          '<div class="bo_showsPagination wdraggable-ui-children" waria-locking-size="true" ' +
            _locking +
            ' data-child-type="pagination"></div>',
          prev_next &&
            '<span class="bo_prev wdraggable-ui-children" disabled-resizable="true" data-child-type-extend="prev"><img src="' +
              prev_next.prev_pSrc +
              '" /></span><span class="bo_next wdraggable-ui-children" disabled-resizable="true" data-child-type-extend="next"><img src="' +
              prev_next.next_pSrc +
              '" /></span>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
        callback && callback()
      } //更新元素
      return_Dom = return_Dom.attr('appname', appJson.appName || '轮播')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      /**
       * 设置子元素的样式
       */
      var child_data = appJson.child_data
      var child_fun = {
        pagination: function (data) {
          return_Dom = return_Dom
            .children('.bo_showsPagination')
            .css({
              width: data.width + 'px',
              height: data.height + 'px',
              top: data.top + 'px',
              left: data.left + 'px',
              visibility: data.visibility,
            })
            .parents('.appovhi')
        },
        prev: function (data) {
          return_Dom = return_Dom
            .children('.bo_prev')
            .css({
              width: data.width + 'px',
              height: data.height + 'px',
              top: data.top + 'px',
              left: data.left + 'px',
              visibility: data.visibility,
            })
            .parents('.appovhi')
        },
        next: function (data) {
          return_Dom = return_Dom
            .children('.bo_next')
            .css({
              width: data.width + 'px',
              height: data.height + 'px',
              top: data.top + 'px',
              left: data.left + 'px',
              visibility: data.visibility,
            })
            .parents('.appovhi')
        },
      }
      if (child_data) {
        $.each(child_data, function (a, e) {
          var type = e.type || e.type_extend
          if (type) {
            child_fun[type](e)
          }
        })
      }
      $.each(config.slider, function (a, e) {
        var img = e.img
        var href = e.href
        var customContent = e.customContent
        var child_app
        var appdata
        var css0 = ''
        var _style0
        /**
         * 获取自定义内容区里的内容结构
         */
        if (customContent) {
          var child_page = $(
            "<div class='child_page' data-key='" +
              a +
              "' style='background-repeat: no-repeat;background-position: center top;'></div>"
          )
          child_page = child_page.css({
            width: customContent.width + 'px',
            height: customContent.height + 'px',
            'background-color': customContent.bgColor,
          })
          customContent.bgImg
            ? (child_page = child_page.css('background-image', 'url(' + customContent.bgImg + ')'))
            : (child_page = child_page.css('background-image', 'none'))
          return_Dom = return_Dom.css({ display: '', 'justify-content': '', 'align-items': '' })
          for (let index = 0; index < customContent.app.length; index++) {
            var appdata = customContent.app[index]
            var child_app = appfun[appdata.appType](appdata)
            child_page = child_page.append(child_app)
          }
          bo +=
            '<div class="boSlider" data-key="' +
            a +
            '" href="' +
            href +
            '" style="visibility:hidden;' +
            _calc +
            _lt +
            '"><img class="boSlider_img" src="' +
            img +
            '" style="display:none;"/>' +
            child_page[0].outerHTML +
            '</div>'
        } else {
          bo +=
            '<a class="boSlider" data-key="' +
            a +
            '" href="' +
            href +
            '" onclick="return false" style="visibility:hidden;' +
            _calc +
            _lt +
            '"><img src="' +
            img +
            '" /></a>'
        }
        if (a == 0) {
          try {
            _style0 = config.PagStyle_obj[0].style
            css0 = 'width:' + _style0.fontSize + 'px;height:' + _style0.fontSize + 'px;'
            _style0.margin && (css0 += 'margin:' + _style0.margin + 'px;')
          } catch (error) {}
          return_Dom.children('.bo_edit_temp').empty()
          return_Dom = return_Dom.children('.bo_edit_temp').append($(bo).html()).parents('.appovhi')
          span += '<span class="select" style="' + css0 + ' background:' + config.page_color_select + '"></span>'
        } else {
          try {
            _style0 = config.PagStyle_obj[0].style
            css0 =
              'width:' + _style0.fontSize + 'px;height:' + _style0.fontSize + 'px;background:' + _style0.bgColor + ';'
            _style0.margin && (css0 += 'margin:' + _style0.margin + 'px;')
          } catch (error) {}
          span += '<span class="d" style="' + css0 + '"></span>'
        }
        /**
         * 处理一下触点位置不同的一些变化
         */
        try {
          var _PagPos = config.PagPos
          _style1 = config.PagStyle_obj[1].style
          _style2 = config.PagStyle_obj[2].style
          if (_PagPos == 0 || _PagPos == 3 || _PagPos == 4) {
            _stylename = 'width'
            _styleblock = ''
          }
          if (a == 0) {
            span_1 +=
              '<span class="select" style="width:' +
              _style1.width +
              'px;height:' +
              _style1.height +
              'px;margin-left:' +
              _style1.left +
              'px;border-radius:' +
              _style1.borderRadius +
              'px;margin-top:' +
              _style1.top +
              'px;color:' +
              _style1.select_color +
              ';background-color:' +
              _style1.select_bgColor +
              ';font-size:' +
              _style1.fontSize +
              'px;">' +
              config.PagStyle_obj[1].content[a] +
              '</span>'
            span_2 +=
              '<span class="select" style="width:' +
              _style2.width +
              'px;height:' +
              _style2.height +
              'px;margin-left:' +
              _style2.left +
              'px;margin-top:' +
              _style2.top +
              'px;' +
              _styleblock +
              '"><img src="' +
              config.PagStyle_obj[2].content[a].select +
              '" /></span>'
          } else {
            span_1 +=
              '<span style="width:' +
              _style1.width +
              'px;height:' +
              _style1.height +
              'px;margin-left:' +
              _style1.left +
              'px;border-radius:' +
              _style1.borderRadius +
              'px;margin-top:' +
              _style1.top +
              'px;color:' +
              _style1.color +
              ';background-color:' +
              _style1.bgColor +
              ';font-size:' +
              _style1.fontSize +
              'px;">' +
              config.PagStyle_obj[1].content[a] +
              '</span>'
            span_2 +=
              '<span style="width:' +
              _style2.width +
              'px;height:' +
              _style2.height +
              'px;margin-left:' +
              _style2.left +
              'px;margin-top:' +
              _style2.top +
              'px;' +
              _styleblock +
              '"><img src="' +
              config.PagStyle_obj[2].content[a].default +
              '" /></span>'
          }
        } catch (error) {}
      })
      return_Dom.children('.boSlider').remove()
      bo && (return_Dom = return_Dom.prepend(bo))
      if (!return_Dom.children('.bo_showsPagination').children().length) {
        var exp_css = ''
        _PagPos == 0 &&
          config.PagPos_obj[0].flexDirection == 'column' &&
          (exp_css = 'height:6000px;flex-direction:column;display:flex;')
        span &&
          (return_Dom = return_Dom
            .children('.bo_showsPagination')
            .append($("<div class='pag-type-0'>" + span + '</div>'))
            .parents('.appovhi'))
        span_1 &&
          (return_Dom = return_Dom
            .children('.bo_showsPagination')
            .append(
              $(
                "<div class='pag-type-1' style='width:100%;height:100%;background-color:" +
                  _style1.pag_bgColor +
                  '; ' +
                  (_style1.pagSrc && 'background-image:url(' + _style1.pagSrc + ')') +
                  "'><div class='pagflex' style='" +
                  _stylename +
                  ':6000px;' +
                  exp_css +
                  '' +
                  _pagflexPadding +
                  "'>" +
                  span_1 +
                  '</div></div>'
              )
            )
            .parents('.appovhi'))
        span_1 &&
          (return_Dom = return_Dom
            .children('.bo_showsPagination')
            .append(
              $(
                "<div class='pag-type-2' style='width:100%;height:100%;background-color:" +
                  _style2.pag_bgColor +
                  '; ' +
                  (_style2.pagSrc && 'background-image:url(' + _style2.pagSrc + ')') +
                  "'><div class='pagflex' style='" +
                  _stylename +
                  ':6000px;' +
                  exp_css +
                  '' +
                  _pagflexPadding +
                  "'>" +
                  span_2 +
                  '</div></div>'
              )
            )
            .parents('.appovhi'))
      }
      return_Dom
        .children('.bo_showsPagination')
        .children('.pag-type-' + config.PagStyle)
        .show()
        .siblings()
        .hide()
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     *  多图滑动
     *  apwx_jnbo
     */
    appfun.apwx_jdtuhd = function (appJson, callback) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var pos_1 = pos[1]
      var config = appJson.config
      var customContent = config.customContent
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
      var return_Dom = $(
        [
          '<div data-group="true" class="appovhi app_jdtuhd" data-group="true">',
          '<div class="box"></div>',
          '<div class="box_pagination wdraggable-ui-children" data-child-type="pagination"></div>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
        callback && callback()
      } //更新元素
      return_Dom = return_Dom.attr('appname', appJson.appName || '多图滑动')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      /**
       * 设置子元素的样式
       */
      var child_data = appJson.child_data
      var child_fun = {
        pagination: function (data) {
          return_Dom = return_Dom
            .children('.box_pagination')
            .css({
              width: data.width + 'px',
              height: data.height + 'px',
              top: data.top + 'px',
              left: data.left + 'px',
              visibility: data.visibility,
            })
            .parents('.appovhi')
        },
      }
      if (child_data) {
        $.each(child_data, function (a, e) {
          var type = e.type || e.type_extend
          if (type) {
            child_fun[type](e)
          }
        })
      }
      var bo = ''
      var span = ''
      var TotalW = 0
      var transform_ = appJson.transform
        ? 'translate3d(-' + appJson.transform + 'px, 0px, 0px)'
        : 'translate3d(0px, 0px, 0px)'
      //总宽度判定
      if (config.show == 1) {
        config.slider.map((a, e) => {
          bo +=
            '<a class="dtu" data-key="' +
            e +
            '" href="' +
            a.href +
            '" onclick="return false" style="margin-right:' +
            appJson.config.slider_right +
            'px;transform:' +
            transform_ +
            '"><img src="' +
            a.img +
            '" /></a>'
          TotalW += a.img_width
        })
      } else {
        TotalW = customContent.width || 750
      }
      return_Dom.children('.box').empty()
      bo && (return_Dom = return_Dom.children('.box').append(bo).parents('.appovhi'))
      /**
       * 自定义内容
       */
      if (customContent) {
        var child_page = $(
          "<div class='child_page' style='background-repeat: no-repeat;background-position: center top; max-width:100%; overflow: hidden;'></div>"
        )
        child_page = child_page.css({
          width: customContent.width + 'px',
          height: '100%',
          display: 'flex',
          position: 'relative',
          'background-color': customContent.bgColor,
        })
        customContent.bgImg
          ? (child_page = child_page.css('background-image', 'url(' + customContent.bgImg + ')'))
          : (child_page = child_page.css('background-image', 'none'))
        return_Dom = return_Dom.css({
          display: '',
          'justify-content': '',
          'align-items': '',
        })
        for (let index = 0; index < customContent.app.length; index++) {
          var appdata = customContent.app[index]
          var child_app = appfun[appdata.appType](appdata)
          child_page = child_page.append(child_app)
        }
        return_Dom.children('.child_page').remove()
        return_Dom = return_Dom.prepend(child_page)
      }
      config.show == 2
        ? (return_Dom.children('.box').hide(), return_Dom.children('.child_page').show())
        : (return_Dom.children('.box').show().css('display', 'flex'), return_Dom.children('.child_page').hide())
      /**
       * 设置分页
       * 圆点和长条
       */
      if (config.PagStyle == 0 || config.PagStyle == 1 || config.PagStyle == 2) {
        var css_ =
          'width:' +
          config.page_width +
          'px; height:' +
          config.page_height +
          'px; border-radius:' +
          config.page_radius +
          'px; margin:0 ' +
          config.page_margin +
          'px;'
        for (let index = 0; index < Math.ceil(TotalW / pos[0]); index++) {
          if (index == 0) {
            span +=
              '<span class="select" style="' +
              css_ +
              ' width:' +
              config.page_width_select +
              'px; background:' +
              config.page_color_select +
              '"></span>'
          } else {
            span += '<span class="d" style="' + css_ + ' background:' + config.page_color + '"></span>'
          }
        }
      }
      //数字
      if (config.PagStyle == 3) {
        span =
          '<span class="select" style="color:' +
          config.page_wz_color +
          '; font-size:' +
          config.page_wz_size +
          'px; margin:0 ' +
          config.page_margin +
          'px;">1</span>' +
          '<span class="d" style="color:' +
          config.page_wz_color +
          '; font-size:' +
          config.page_wz_size +
          'px; margin:0 ' +
          config.page_margin +
          'px;">/</span>' +
          '<span class="d total" style="color:' +
          config.page_wz_color_select +
          '; font-size:' +
          config.page_wz_size +
          'px; margin:0 ' +
          config.page_margin +
          'px;">' +
          Math.ceil(TotalW / pos[0]) +
          '</span>'
      }
      return_Dom.children('.box_pagination').empty()
      span && (return_Dom = return_Dom.children('.box_pagination').append(span).parents('.appovhi'))
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     *  循环动画
     *  apwx_jxdh
     */
    appfun.apwx_jxdh = function (appJson) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      var customContent = config.customContent
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
  
      var return_Dom = $(
        [
          "<div class='appovhi' style='display:flex;justify-content:center;align-items:center;'>",
          "<a class='pic_href' href='" + appJson.config.pSrc_href + "' target='_blank' onclick='return false'>",
          "<img class='pic' width='100%' src='" + appJson.config.pSrc + "' />",
          '</a>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
      } //更新元素
      return_Dom = return_Dom.attr('appname', appJson.appName || '循环动画')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
  
      /**
       * 获取自定义内容区里的内容结构
       */
      if (customContent) {
        var child_page = $(
          "<div class='child_page' style='background-repeat: no-repeat;background-position: center top;'></div>"
        )
        child_page = child_page.css({
          width: customContent.width + 'px',
          height: customContent.height + 'px',
          'background-color': customContent.bgColor,
        })
        customContent.bgImg
          ? (child_page = child_page.css('background-image', 'url(' + customContent.bgImg + ')'))
          : (child_page = child_page.css('background-image', 'none'))
        if (config.show == 2) {
          return_Dom = return_Dom.css({
            display: '',
            'justify-content': '',
            'align-items': '',
          })
        } else {
          return_Dom = return_Dom.css({
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
          })
        }
        for (let index = 0; index < customContent.app.length; index++) {
          var appdata = customContent.app[index]
          var child_app = appfun[appdata.appType](appdata)
          child_page = child_page.append(child_app)
        }
        return_Dom = return_Dom.append(child_page)
        if (config.show == 2) {
          return_Dom = return_Dom.children('.pic_href').css('display', 'none').parents('.appovhi')
        } else {
          return_Dom = return_Dom.children('.child_page').css('display', 'none').parents('.appovhi')
        }
        return_Dom = return_Dom.css({ width: customContent.width + 'px', height: customContent.height + 'px' })
      }
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     *  动图切换
     *  apwx_jtgif
     */
    appfun.apwx_jtgif = function (appJson, callback) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      var customContent = config.customContent
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
      var return_Dom = $(
        [
          '<div data-group="true" class="appovhi apwx_jtgif" data-group="true">',
          '<a class="box"  href="' + config.href + '" onclick="return false"></a>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
        callback && callback()
      } //更新元素
      return_Dom = return_Dom.attr('appname', appJson.appName || '动图切换')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
        'background-color': config.bgColor,
      })
  
      var bo = ''
      config.slider.map((a, e) => {
        var hide = e == 0 ? 'display:block;' : 'display:none;'
        bo +=
          '<span class="dtu" data-key="' +
          e +
          '" style="position:absolute;top:0;left:0;' +
          hide +
          '"><img src="' +
          a.img +
          '" /></span>'
      })
  
      return_Dom.children('.box').empty()
      bo && (return_Dom = return_Dom.children('.box').append(bo).parents('.appovhi'))
  
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     *  开场动画
     *  apwx_jkcdh
     */
    appfun.apwx_jkcdh = function (appJson) {
      appJson.appName || (appJson.appName = '开场动画')
      return appfun.apwx_jxdh(appJson)
    }
  
    /*
     *  滚动图片
     *  apwx_jgdpic
     */
    appfun.apwx_jgdpic = function (appJson, callback) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
      var return_Dom = $(
        [
          '<div data-group="true" class="appovhi app_jdtuhd" data-group="true">',
          '<div class="box" style="flex-direction:column;"></div>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
        callback && callback()
      } //更新元素
      return_Dom = return_Dom.attr('appname', appJson.appName || '滚动图片')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      config.translate_type == 1
        ? (return_Dom = return_Dom.children('.box').css('flex-direction', 'row').parents('.appovhi'))
        : (return_Dom = return_Dom.children('.box').css('flex-direction', 'column').parents('.appovhi'))
      /**
       * 设置子元素的样式
       */
      var bo = ''
      var transform_ = 'translate3d(0px, 0px, 0px)'
      //方向
      if (config.translate_type == 1 && appJson.transform) {
        transform_ = 'translate3d(-' + appJson.transform + 'px, 0px, 0px)'
      } else if (config.translate_type == 2 && appJson.transform) {
        transform_ = 'translate3d(0px, -' + appJson.transform + 'px, 0px)'
      }
      //总宽度判定
      if (config.show == 1) {
        config.slider.map((a, e) => {
          bo +=
            '<a class="dtu" data-key="' +
            e +
            '" href="' +
            a.href +
            '" onclick="return false" style="transition-duration: 0.2s;margin-right:' +
            appJson.config.slider_right +
            'px;margin-bottom:' +
            appJson.config.slider_bottom +
            'px;transform:' +
            transform_ +
            '"><img src="' +
            a.img +
            '" /></a>'
        })
      }
      return_Dom.children('.box').empty()
      bo && (return_Dom = return_Dom.children('.box').append(bo).parents('.appovhi'))
      appJson.seeing == -1 && return_Dom.hide()
      return return_Dom
    }
  
    /**
     *  滚动公告
     *  apwx_jgdtw
     */
    appfun.apwx_jgdtw = function (appJson) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      var customContent = config.customContent
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
      var return_Dom = $(
        [
          "<div class='appovhi' style='display:flex;justify-content:center;align-items:center;'>",
          "<a class='pic_href _pic_ children-extend' data-child-type='pic' href='" +
            appJson.config.pSrc_href +
            "' target='_blank' onclick='return false'>",
          "<img class='pic' width='100%' src='" + appJson.config.pSrc + "' />",
          '</a>',
          "<a class='pic_href _text_ children-extend' data-child-type='text' href='" +
            appJson.config.pSrc_href +
            "' target='_blank' onclick='return false' style='font-size:" +
            config.text_size +
            'px;color:' +
            config.text_color +
            "'>",
          '<pre>' + appJson.config.text + '</pre>',
          '</a>',
          '</div>',
        ].join('')
      )
      if (appJson.dom) {
        return_Dom = appJson.dom
      } //更新元素
      return_Dom = return_Dom.attr('appname', appJson.appName || '滚动公告')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      /**
       * 参数数据
       */
      var txtcss = {
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
        'background-image': config.box.bgImg,
        'background-color': config.box.bgColor,
        'border-width': config.box.borderWidth + 'px',
        'border-color': config.box.borderColor,
        'border-radius': config.box.borderRadius + 'px',
        padding: '0 0 0 ' + (config.box.paddingLR || 0) + 'px',
        'border-style': 'solid',
        'background-repeat': 'no-repeat',
        'background-position': 'center center',
        'box-sizing': 'border-box',
      }
      return_Dom = return_Dom.css(txtcss)
  
      /**
       * 获取自定义内容区里的内容结构
       */
      if (customContent) {
        var child_page = $(
          "<div class='child_page children-extend' data-child-type='child_page' style='background-repeat: no-repeat;background-position: center top;'></div>"
        )
        child_page = child_page.css({
          width: customContent.width + 'px',
          height: customContent.height + 'px',
          'background-color': customContent.bgColor,
        })
        customContent.bgImg
          ? (child_page = child_page.css('background-image', 'url(' + customContent.bgImg + ')'))
          : (child_page = child_page.css('background-image', 'none'))
        if (config.show == 2) {
          return_Dom = return_Dom.css({
            display: '',
            'justify-content': '',
            'align-items': '',
          })
        } else {
          return_Dom = return_Dom.css({
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
          })
        }
        for (let index = 0; index < customContent.app.length; index++) {
          var appdata = customContent.app[index]
          var child_app = appfun[appdata.appType](appdata)
          child_page = child_page.append(child_app)
        }
        return_Dom = return_Dom.append(child_page)
        // return_Dom = return_Dom.css({width:customContent.width+"px",height:customContent.height+"px"});  同步子元素尺寸
      }
      if (config.show == 1) {
        return_Dom = return_Dom.children('._text_').css('display', 'none').parents('.appovhi')
        return_Dom.children('.child_page').length &&
          (return_Dom = return_Dom.children('.child_page').css('display', 'none').parents('.appovhi'))
      }
      if (config.show == 2) {
        return_Dom = return_Dom.children('.pic_href').css('display', 'none').parents('.appovhi')
      }
      if (config.show == 3) {
        return_Dom = return_Dom.children('._pic_').css('display', 'none').parents('.appovhi')
        return_Dom.children('.child_page').length &&
          (return_Dom = return_Dom.children('.child_page').css('display', 'none').parents('.appovhi'))
        return_Dom = return_Dom.css('justify-content', config.align)
      }
  
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    /**
     *  宝贝列表
     *  apwx_jbblb
     */
    appfun.apwx_jbblb = function (appJson, callback) {
      var pos = appJson.pos ? appJson.pos.split('|') : [750, 400, 0, 0]
      var config = appJson.config
      var child_data = appJson.child_data
      var maxHeight = 0
      appJson.scrollTop && (pos[2] = appJson.scrollTop)
  
      /**
       * 基本结构
       */
      var return_Dom = $(
        [
          "<div class='appovhi appItems' data-group='true' data-sync='true'>",
          "<div class='itemUpData' style='display:none;'></div>",
          '</div>',
        ].join('')
      )
  
      if (appJson.dom) {
        return_Dom = appJson.dom
        return_Dom = return_Dom.children('.itemUpData').click(_updata).parents('.appovhi')
      } else {
        return_Dom = return_Dom.children('.itemUpData').click(_updata).parents('.appovhi')
        _updata()
      }
  
      /**
       * 展示或更新宝贝数据
       */
      function _updata() {
        //本地皮肤信息
        try {
          var config2 = return_Dom.attr('data-config') ? JSON.parse(return_Dom.attr('data-config')) : config
          var child_data2 = return_Dom.attr('data-child_data')
            ? JSON.parse(return_Dom.attr('data-child_data'))
            : child_data
          var item_box = config2.item_box
          var items = config2.items
          var itemdiv = ''
          child_data2 && (child_data = child_data2)
          config2 && (config = config2)
          if (items) {
            return_Dom.children('.item').remove()
            $.each(items, function (a, e) {
              var nh = Math.floor(a / parseInt(item_box.list))
              var nl = a - nh * parseInt(item_box.list)
              var box_width = parseInt(item_box.width)
              var box_height = parseInt(item_box.height)
              var box_bottom = parseInt(item_box.bottom) * nh + box_height * nh //计算每一个itemdiv和基本位置
              var box_right = parseInt(item_box.right) * nl + box_width * nl //计算每一个itemdiv和基本位置
              itemdiv += [
                "<div class='item' data-key='" +
                  a +
                  "' data-group='true' style='width:" +
                  box_width +
                  'px;height:' +
                  box_height +
                  'px; left:' +
                  box_right +
                  'px;top:' +
                  box_bottom +
                  'px;background-color:' +
                  item_box.bgColor +
                  "'>",
                "<span class='exp_allimg3 wdraggable-ui-children' disabled-resizable='true' position-sync='j1' data-child-type='exp_allimg3'><img src='" +
                  config.exp_allimg3 +
                  "' /></span>",
                "<span class='exp_alltxt3 wdraggable-ui-children' position-sync='j2' data-child-type='exp_alltxt3'><pre>" +
                  config.exp_alltxt3 +
                  '</pre></span>',
                "<a class='picUrl wdraggable-ui-children' href='" +
                  e.itemLink +
                  "' onclick='return false' waria-disabled='true' position-sync='j3' data-child-type='picUrl'><img src='" +
                  e.picUrl +
                  "' style='max-width:100%; max-height:100%;'></a>",
                "<span class='exp_allimg wdraggable-ui-children' disabled-resizable='true' position-sync='j4' data-child-type='exp_allimg'><img src='" +
                  config.exp_allimg +
                  "' /></span>",
                "<span class='tagpSrc wdraggable-ui-children' disabled-resizable='true' position-sync='j5' data-child-type='tagpSrc'><img src='" +
                  e.tagpSrc +
                  "' /></span>",
                "<span class='subpSrc1 wdraggable-ui-children' disabled-resizable='true' position-sync='j6' data-child-type='subpSrc1'><img src='" +
                  e.subpSrc1 +
                  "' /></span>",
                "<a href='" +
                  e.itemLink +
                  "' class='buypSrc wdraggable-ui-children' disabled-resizable='true' onclick='return false' position-sync='j7' data-child-type='buypSrc'><img src='" +
                  config.buypSrc +
                  "' /></a>",
                "<a href='" +
                  e.addhref +
                  "' class='addbuypSrc wdraggable-ui-children' disabled-resizable='true' onclick='return false' position-sync='j8' data-child-type='addbuypSrc'><img src='" +
                  config.addbuypSrc +
                  "' /></a>",
                "<span class='title wdraggable-ui-children' position-sync='j9' data-child-type='title'><pre>" +
                  e.title +
                  '</pre></span>',
                "<span class='subtitle wdraggable-ui-children' position-sync='j10' data-child-type='subtitle'><pre>" +
                  e.subtitle +
                  '</pre></span>',
                "<span class='salePrice wdraggable-ui-children' disabled-resizable='true' position-sync='j11' data-child-type='salePrice'><pre>" +
                  e.salePrice +
                  '</pre></span>',
                "<span class='reservePrice wdraggable-ui-children' disabled-resizable='true' position-sync='j12' data-child-type='reservePrice'><pre>" +
                  e.reservePrice +
                  '</pre></span>',
                "<span class='sale30 wdraggable-ui-children' disabled-resizable='true' position-sync='j13' data-child-type='sale30'><pre>" +
                  e.sale30 +
                  '</pre></span>',
                "<span class='reservePrice_ltxt wdraggable-ui-children' disabled-resizable='true' position-sync='j14' data-child-type='reservePrice_ltxt'><pre>" +
                  config.reservePrice_ltxt +
                  '</pre></span>',
                "<span class='prece_ltxt wdraggable-ui-children' disabled-resizable='true' position-sync='j15' data-child-type='prece_ltxt'><pre>" +
                  config.prece_ltxt +
                  '</pre></span>',
                "<span class='sale30_ltxt wdraggable-ui-children' disabled-resizable='true' position-sync='j16' data-child-type='sale30_ltxt'><pre>" +
                  config.sale30_ltxt +
                  '</pre></span>',
                "<span class='sale30_rtxt wdraggable-ui-children' disabled-resizable='true' position-sync='j17' data-child-type='sale30_rtxt'><pre>" +
                  config.sale30_rtxt +
                  '</pre></span>',
                "<span class='subtitle2 wdraggable-ui-children' position-sync='j18' data-child-type='subtitle2'><pre>" +
                  e.subtitle2 +
                  '</pre></span>',
                "<span class='exp_alltxt wdraggable-ui-children' position-sync='j19' data-child-type='exp_alltxt'><pre>" +
                  config.exp_alltxt +
                  '</pre></span>',
                '</div>',
              ].join('')
              maxHeight = box_bottom + box_height
            })
            /**
             * 设置元素位置样式
             */
            itemdiv = $(itemdiv)
            for (const key in child_data) {
              if (child_data.hasOwnProperty(key)) {
                const data = child_data[key]
                if (
                  data.type == 'title' ||
                  data.type == 'subtitle' ||
                  data.type == 'subtitle2' ||
                  data.type == 'exp_alltxt' ||
                  data.type == 'exp_alltxt3' ||
                  data.type == 'picUrl'
                ) {
                  itemdiv = itemdiv
                    .children('.' + data.type)
                    .css({
                      width: data.width + 'px',
                      height: data.height + 'px',
                      left: data.left + 'px',
                      top: data.top + 'px',
                      'border-style': 'solid',
                      'border-width': '0',
                      visibility: data.visibility,
                      position: 'absolute',
                    })
                    .parent()
                  if (data.type == 'picUrl') {
                    itemdiv = itemdiv
                      .children('.' + data.type)
                      .css({
                        'border-radius': config.picUrlRadius + 'px',
                      })
                      .parent()
                  }
                } else {
                  itemdiv = itemdiv
                    .children('.' + data.type)
                    .css({
                      left: data.left + 'px',
                      top: data.top + 'px',
                      'border-style': 'solid',
                      'border-width': '0',
                      visibility: data.visibility,
                      position: 'absolute',
                    })
                    .parent()
                  //宝贝特殊数据处理
                  if (data.type == 'tagpSrc') {
                    itemdiv = itemdiv
                      .children('.' + data.type)
                      .attr('data-' + data.type, '{"W":' + data.width + ',"H":' + data.height + '}')
                      .parent()
                  }
                }
                data.style &&
                  (itemdiv = itemdiv
                    .children('.' + data.type)
                    .css(data.style)
                    .parent()) //字体样式等
              }
            }
            return_Dom = return_Dom.append(itemdiv)
          }
          if (callback) {
            maxHeight && (return_Dom = return_Dom.css({ height: maxHeight + 'px' }))
            callback()
          }
        } catch (error) {
          layer.msg('err-item-005', { icon: 2, time: 3000 })
        }
      }
  
      /**
       * 基本数据
       */
      //本地皮肤预设的一些信息
      if (appJson.myskin != null) {
        return_Dom = return_Dom.attr('data-myskin', appJson.myskin)
      }
      if (appJson.desc) {
        return_Dom = return_Dom.attr('data-desc', appJson.desc)
      }
      if (appJson.portrait_pic) {
        return_Dom = return_Dom.attr('data-portrait_pic', appJson.portrait_pic)
      }
      //基本信息
      return_Dom = return_Dom.attr('appname', appJson.appName || '宝贝列表')
      return_Dom = return_Dom.attr('appID', config.appID)
      return_Dom = return_Dom.attr('data-appType', appJson.appType)
      return_Dom = return_Dom.attr('data-config', JSON.stringify(config))
      child_data && (return_Dom = return_Dom.attr('data-child_data', JSON.stringify(child_data)))
      return_Dom = return_Dom.css({
        width: pos[0] + 'px',
        height: pos[1] + 'px',
        top: pos[2] + 'px',
        left: pos[3] + 'px',
      })
      maxHeight && (return_Dom = return_Dom.css({ height: maxHeight + 'px' }))
      appJson.seeing == -1 && return_Dom.hide()
  
      return return_Dom
    }
  
    return {
      // appData: object
      d: function (appData, callback) {
        try {
          var app = appfun[appData.appType](appData, callback)
          if (app) {
            app.find('.child_page').find('.wdraggable-ui-children').removeClass('wdraggable-ui-children')
            return app
          } else {
            return 'no-app'
          }
        } catch (e) {
          return 'no-app'
        }
      },
    }
  })
  