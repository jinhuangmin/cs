最早按钮未更换
<template>
  <div :style="componentStyle" class="component" ref="swiperBox">
    <div :style="mainStyle" class="main">
      <div class="slide-nav-wrapper">
        <ul :style="navBoxStyle" class="slide-nav">
          <li
            :class="['nav-item item-type'+componentData.title_style]"
            :key="index"
            :style="[activeId === index ? actStyle : defStyle,(componentData.title_style==1 || componentData.title_style==3) ? titleRadius1 : (componentData.title_style==2 ? (index==0 ? titleRadius2 : (index==componentData.tabs.length-1?titleRadius3:'')) : '')]"
            v-for="(item, index) in componentData.tabs"
            v-on:click="handleClick(index)"
          >
            {{item.name}}
            <span :style="activeId === index ? actStyle4 : defStyle4" v-if="componentData.title_style==4"></span>
          </li>
        </ul>
      </div>
      <van-swipe :autoplay="false" :duration="400" :initial-swipe="0" :loop="true" :show-indicators="false" :style="swiperBoxStyle" @change="handleSwiperChange" class="swiper-box" ref="swipe">
        <van-swipe-item :key="i + tab.name" class="swiper-item_link" v-for="(tab, i) in componentData.tabs">
          <div class="swipe-item">
            <ul class="itemBox">
              <li :key="index + '' + item.id" :style="listStyle" v-for="(item, index) in (tab.goods && tab.goods.length != 0 ? tab.goods : getMockGoods(4))">
                <a :href="item.url" :style="itemStyle" class="item">
                  <div :style="imgBoxStyle" class="imgBox">
                    <div :style="[imgStyle,{'background-image': `url('${item.imageUrl}')`,'background-size':componentData.goods_pic_fill || 'cover'}]" class="img"></div>
                  </div>
                  <div :style="infoStyle" class="goods-info">
                    <div :style="titleStyle" class="title" v-if="showHas('title')">{{item.title}}</div>
                    <div :style="descStyle" class="desc" v-if="showHas('desc')">{{item.subTitle}}</div>
                    <div class="priceBox" v-if="showHas('price')">
                      <div :style="priceStyle" class="price">
                        <span>{{componentData.price_qz || "￥"}}</span>
                        <em>{{ goodsPrice(item.price, 0) }}</em>
                        <i v-if="componentData.price_xsd == 1">.{{ goodsPrice(item.price, 1) }}</i>
                        <del :style="originStyle" class="origin" v-if="showHas('origin') && item.origin">¥{{item.origin}}</del>
                      </div>
                      <div :style="btnStyle" class="btn" v-if="showHas('btn') && componentData.info_align==1">
                        <div class="icon" v-html="iconBtn()" v-if="componentData.btn_icon!=99"></div>
                        <span v-if="componentData.btn_text">{{componentData.btn_text}}</span>
                      </div>
                    </div>
                    <div :style="btnStyle" class="btn btn2" v-if="showHas('btn') && componentData.info_align==2">
                      <div class="icon" v-html="iconBtn()" v-if="componentData.btn_icon!=99"></div>
                      <span v-if="componentData.btn_text">{{componentData.btn_text}}</span>
                    </div>
                    <div :style="saleStyle" class="sale" v-if="showHas('sale') && item.totalSoldNum">
                      已售
                      <span :style="saleNumStyle">{{item.totalSoldNum | formdateNumToWan}}</span>件
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import assign from 'lodash/assign'
import { Swipe, SwipeItem } from 'vant'
import { MOCK_GOODS_LIST } from '../extension-cnzoom-testcomponent/mixin-js/mock'

export default {
  name: 'extension-cnzoom-goodsswiper03-2',

  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
  },

  props: {
    componentIndex: Number,
    componentData: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      activeId: 0,
      goods: [],
    }
  },

  computed: {
    // navBoxStyle: function() {
    //   return {
    //       "margin-left": this.activeId > 3 ? (this.activeId - 3) * -90 + "px" : 0
    //   };
    // }
    navBoxStyle: function() {
      let num = this.componentData.tabs.length
      let width = this.componentData.title_width
      return {
        'justify-content': width * num > 100 ? 'left' : 'center',
      }
    },
    titleRadius1: function() {
      return {
        'border-radius': `${this.componentData.title_radius}px`,
      }
    },
    titleRadius2: function() {
      return {
        'border-radius': `${this.componentData.title_height}px 0 0 ${this.componentData.title_height}px`,
      }
    },
    titleRadius3: function() {
      return {
        'border-radius': `0 ${this.componentData.title_height}px ${this.componentData.title_height}px 0`,
      }
    },
    defStyle: function() {
      let title_style = this.componentData.title_style
      let width = this.componentData.title_width
      let height = this.componentData.title_height
      let margin = this.componentData.title_margin
      let title_border_width = this.componentData.title_border_width
      let title_border_color_def = this.componentData.title_border_color_def
      let background_def = this.componentData.background_def
      let color_def = this.componentData.color_def
      let title_size = this.componentData.title_size
      let title_weight = this.componentData.title_weight
      let _style = {
        flex: `0 0 ${width}%`,
        margin: `0 ${margin / 2}px`,
        'font-size': `${title_size}px`,
        color: color_def,
        'font-weight': title_weight,
      }
      if (title_style == 1 || title_style == 2) {
        _style = assign({}, _style, {
          height: `${height}px`,
          'line-height': `${height}px`,
          'background-color': background_def,
        })
      } else if (title_style == 3) {
        _style = assign({}, _style, {
          height: `${height - title_border_width * 2}px`,
          'line-height': `${height - title_border_width * 2}px`,
          border: `${title_border_width}px solid ${title_border_color_def}`,
        })
      } else if (title_style == 4) {
        _style = assign({}, _style, {
          height: `${height}px`,
          'line-height': `${height - title_border_width}px`,
        })
      }
      return _style
    },
    actStyle: function() {
      let title_style = this.componentData.title_style
      let width = this.componentData.title_width
      let height = this.componentData.title_height
      let margin = this.componentData.title_margin
      let title_border_width = this.componentData.title_border_width
      let title_border_color_act = this.componentData.title_border_color_act
      let background_act = this.componentData.background_act
      let color_act = this.componentData.color_act
      let title_size = this.componentData.title_size
      let title_weight = this.componentData.title_weight
      let _style = {
        flex: `0 0 ${width}%`,
        margin: `0 ${margin / 2}px`,
        'font-size': `${title_size}px`,
        color: color_act,
        'font-weight': title_weight,
      }
      if (title_style == 1 || title_style == 2) {
        _style = assign({}, _style, {
          height: `${height}px`,
          'line-height': `${height}px`,
          'background-color': background_act,
        })
      } else if (title_style == 3) {
        _style = assign({}, _style, {
          height: `${height - title_border_width * 2}px`,
          'line-height': `${height - title_border_width * 2}px`,
          border: `${title_border_width}px solid ${title_border_color_act}`,
        })
      } else if (title_style == 4) {
        _style = assign({}, _style, {
          height: `${height}px`,
          'line-height': `${height - title_border_width}px`,
        })
      }
      return _style
    },
    defStyle4: function() {
      let title_border_width = this.componentData.title_border_width
      let title_border_color_def = this.componentData.title_border_color_def
      let _style = {
        height: `${title_border_width}px`,
        'background-color': title_border_color_def,
      }
      return _style
    },
    actStyle4: function() {
      let title_border_width = this.componentData.title_border_width
      let title_border_color_act = this.componentData.title_border_color_act
      let _style = {
        height: `${title_border_width}px`,
        'background-color': title_border_color_act,
      }
      return _style
    },

    componentStyle: function() {
      let _style = {
        padding: `${this.componentData.padding_top}px ${this.componentData.padding_horiziontal}px ${this.componentData.padding_bottom}px`,
        'background-color': this.componentData.background_color,
      }
      return _style
    },
    mainStyle: function() {
      let _style = {
        padding: `${this.componentData.main_padding_top}px ${this.componentData.main_padding_horiziontal}px ${this.componentData.main_padding_bottom}px`,
        'background-image': `url(${this.componentData.background_image && this.componentData.background_image != '' && this.componentData.background_image[0].image_url})`,
        'background-color': this.componentData.main_background_color,
        'border-radius': `${this.componentData.main_radius_top}px ${this.componentData.main_radius_top}px ${this.componentData.main_radius_bottom}px ${this.componentData.main_radius_bottom}px`,
      }
      return _style
    },
    swiperBoxStyle: function() {
      let _style = {
        width: `${this.swiperWidth - this.componentData.padding_horiziontal * 2 - this.componentData.main_padding_horiziontal * 2}px`,
      }
      return _style
    },
    listStyle: function() {
      let _style = {
        width: `${100 / this.componentData.col_num}%`,
      }
      return _style
    },
    itemStyle: function() {
      let _style = {
        margin: `0 ${this.componentData.goods_gap / 2}px ${this.componentData.goods_gap}px`,
        padding: this.componentData.goods_padding + 'px',
        'background-color': this.componentData.goods_background_color,
        border: `${this.componentData.goods_border_width}px solid ${this.componentData.goods_border_color}`,
        'border-radius': this.componentData.goods_radius + 'px',
      }
      return _style
    },
    imgBoxStyle: function() {
      let _style = {
        'padding-top': this.componentData.goods_pic_scale + '%',
      }
      return _style
    },
    imgStyle: function() {
      let _style = {
        'border-radius': `${this.componentData.goods_radius}px ${this.componentData.goods_radius}px ${this.componentData.goods_background_color ? 0 : this.componentData.goods_radius}px ${
          this.componentData.goods_background_color ? 0 : this.componentData.goods_radius
        }px`,
      }
      return _style
    },
    infoStyle: function() {
      let _style = {
        'padding-bottom': 10 - this.componentData.goods_padding + 'px',
        'text-align': this.componentData.info_align == undefined || this.componentData.info_align == 2 ? 'center' : 'left',
      }
      return _style
    },
    titleStyle: function() {
      let _style = {
        height: `${this.componentData.title_lines * 18}px`,
        '-webkit-line-clamp': this.componentData.title_lines,
        'font-size': `${this.componentData.title_font_size}px`,
        'font-weight': `${this.componentData.title_font_weight}`,
        color: `${this.componentData.title_color}`,
      }
      return _style
    },
    descStyle: function() {
      return {
        'font-size': `${this.componentData.desc_font_size}px`,
        'font-weight': `${this.componentData.desc_font_weight}`,
        color: `${this.componentData.desc_color}`,
      }
    },
    priceStyle: function() {
      return {
        'font-size': `${this.componentData.price_font_size}px`,
        'font-weight': `${this.componentData.price_font_weight}`,
        color: `${this.componentData.price_color}`,
      }
    },
    originStyle: function() {
      return {
        color: `${this.componentData.origin_color}`,
      }
    },
    btnStyle: function() {
      let background_type = this.componentData.btn_background_type
      return {
        'border-radius': `${this.componentData.btn_radius}px`,
        'background-image': `linear-gradient(to ${background_type == 1 ? 'bottom' : background_type == 2 ? 'right' : 'bottom right'}, ${this.componentData.btn_linear_start}, ${this.componentData.btn_linear_end})`,
        color: `${this.componentData.btn_color}`,
        'padding-left': `${this.componentData.btn_text && this.componentData.btn_icon != 99 ? 5 : this.componentData.btn_text ? 10 : 0}px`,
        'padding-right': `${this.componentData.btn_text && this.componentData.btn_icon != 99 ? 10 : this.componentData.btn_text ? 10 : 0}px`,
      }
    },
    saleStyle: function() {
      return {
        'font-weight': `${this.componentData.sale_font_weight}`,
        color: `${this.componentData.sale_color}`,
      }
    },
    saleNumStyle: function() {
      return {
        color: `${this.componentData.sale_color2}`,
      }
    },
  },

  mounted: function() {
    this.$nextTick(function() {
      this.swiperWidth = this.$refs.swiperBox.offsetWidth
    })
  },

  methods: {
    getMockGoods(sum) {
      return MOCK_GOODS_LIST(sum)
    },
    handleSwiperChange(index) {
      this.activeId = index
    },
    handleClick(index) {
      this.$refs.swipe.swipeTo(index)
    },
    showHas(name) {
      let value = this.componentData.show_list
      var idIndex = value && value.indexOf(name)
      if (idIndex >= 0) {
        return true
      }
    },
    goodsPrice(value, index) {
      let valueStr = String(value) //字符串化
      let yuan = valueStr.indexOf('.') != -1 ? valueStr.split('.')[0] : value % 100 == 0 ? value / 100 : String(value / 100).split('.')[0]
      let fen = valueStr.indexOf('.') != -1 ? valueStr.split('.')[1] : value % 100 == 0 ? '00' : String(value / 100).split('.')[1]
      if (index == 0) {
        return yuan
      }
      if (index == 1) {
        return fen
      }
    },
    iconBtn() {
      let btn_icon = this.componentData.btn_icon || 1
      let _color = (this.componentData.btn_color || '#ffffff').split('#')[1]
      let icon = ''
      if (btn_icon == 1) {
        icon =
          '<svg class="svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="80%" height="80%"><path d="M293.236 328.145l107.055 309.528-23.273-16.291H828.51c13.964 0 23.273 11.636 23.273 23.273 0 13.963-11.637 23.272-23.273 23.272H379.345c-9.309 0-18.618-6.982-23.272-16.29L188.509 172.217l23.273 16.291h-48.873c-13.964 0-23.273-11.636-23.273-23.273 0-13.963 11.637-23.272 23.273-23.272h48.873c9.309 0 18.618 6.981 23.273 16.29L279.273 281.6H861.09c16.29 0 25.6 13.964 23.273 27.927L847.127 495.71c-2.327 9.31-11.636 18.618-20.945 18.618l-353.746 39.564c-13.963 2.327-25.6-6.982-25.6-20.946-2.327-13.963 6.982-25.6 20.946-25.6l337.454-39.563s16.291-79.127 30.255-139.637H293.236zM432.873 768c18.618 0 34.909 16.29 34.909 34.91s-16.291 34.908-34.91 34.908-34.908-16.29-34.908-34.909c0-20.945 16.29-34.909 34.909-34.909m0-46.545c-44.218 0-81.455 37.236-81.455 81.454s37.237 81.455 81.455 81.455 81.454-37.237 81.454-81.455-34.909-81.454-81.454-81.454zM770.327 768c18.618 0 34.91 16.29 34.91 34.91s-16.292 34.908-34.91 34.908-34.909-16.29-34.909-34.909c0-20.945 16.291-34.909 34.91-34.909m0-46.545c-44.219 0-81.455 37.236-81.455 81.454s37.236 81.455 81.454 81.455 81.455-37.237 81.455-81.455c-2.327-44.218-37.237-81.454-81.455-81.454z" fill="#' +
          _color +
          '"/></svg>'
      } else if (btn_icon == 2) {
        icon =
          '<svg class="svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M258.875 469.813h506.25a42.188 42.188 0 0 1 0 84.375h-506.25a42.188 42.188 0 0 1 0-84.375z" fill="#' +
          _color +
          '"/><path d="M554.188 258.875v506.25a42.188 42.188 0 0 1-84.375 0v-506.25a42.188 42.188 0 0 1 84.375 0z" fill="#' +
          _color +
          '"/></svg>'
      } else if (btn_icon == 3) {
        icon =
          '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M407.064 684.72q12.384 0 23.464 4.563t19.553 12.71 13.036 19.227 4.562 23.464-4.562 23.464-13.036 19.228-19.553 13.035-23.464 4.889q-13.036 0-23.79-4.889t-19.227-13.035-13.036-19.228-4.562-23.464 4.562-23.464 13.036-19.227 19.227-12.71 23.79-4.562zm271.14 1.304q12.383 0 23.789 4.563t19.553 12.71 13.036 19.227 4.888 23.464-4.888 23.464-13.036 19.227-19.553 13.036-23.79 4.888-23.464-4.888-19.227-13.036-13.036-19.227-4.888-23.464 4.888-23.464 13.036-19.228 19.227-12.71 23.464-4.562zm109.498-370.209q18.25 0 28.352 4.889t14.339 12.057 3.91 15.317-2.28 14.013-8.148 24.116-14.013 40.084-15.317 43.344-11.406 33.892q-8.473 26.071-21.508 36.174t-31.938 10.102H387.511l9.776 58.66h328.496q31.285 0 31.285 26.723 0 13.035-6.192 22.486t-24.441 9.45H384.904q-13.036 0-21.835-5.865t-14.665-15.317-9.45-20.53-5.54-20.858q-.653-3.91-3.586-18.901t-7.17-37.477-9.45-50.187-10.428-55.727q-12.384-65.83-28.027-146.65H225.87q-9.777 0-16.294-4.888T198.82 278.99t-5.866-14.665-1.63-14.34q0-13.035 8.8-21.508t23.79-8.473H289.744q13.036 0 20.857 3.91t12.384 9.777 6.517 12.384 3.26 11.08q1.303 5.214 2.606 14.665t2.608 19.228q1.955 11.732 3.91 24.767h445.816z" fill="#' +
          _color +
          '"/></svg>'
      } else if (btn_icon == 4) {
        icon =
          '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M648.533 353.28c22.187 22.187 56.32 22.187 78.507 0 22.187-22.187 22.187-56.32 0-78.507-22.187-22.186-56.32-22.186-78.507 0-22.186 20.48-22.186 56.32 0 78.507zm54.614-54.613c8.533 8.533 8.533 22.186 0 30.72s-22.187 8.533-30.72 0-8.534-22.187 0-30.72 22.186-8.534 30.72 0zM573.44 597.333c6.827 6.827 18.773 6.827 23.893 0 6.827-6.826 6.827-18.773 0-23.893L535.893 512l121.174 11.947c10.24 0 17.066-6.827 17.066-17.067s-6.826-17.067-17.066-17.067l-121.174-11.946-10.24-121.174c0-10.24-6.826-17.066-17.066-17.066s-17.067 6.826-17.067 17.066l11.947 121.174-61.44-61.44c-6.827-6.827-18.774-6.827-23.894 0s-6.826 18.773 0 23.893l66.56 66.56-47.786 47.787-66.56-66.56c-6.827-6.827-18.774-6.827-23.894 0-6.826 6.826-6.826 18.773 0 23.893l66.56 66.56-47.786 47.787c-6.827 6.826-6.827 18.773 0 23.893s18.773 6.827 23.893 0l47.787-47.787 66.56 66.56c6.826 6.827 18.773 6.827 23.893 0 6.827-6.826 5.12-17.066-1.707-22.186l-68.266-66.56 47.786-47.787 68.267 64.853z" fill="#' +
          _color +
          '"/><path d="M814.08 501.76c3.413-3.413 5.12-6.827 5.12-11.947V204.8c0-5.12 0-10.24-3.413-13.653-3.414-3.414-10.24-3.414-13.654-3.414H517.12c-3.413 0-6.827 1.707-10.24 3.414l-1.707 1.706-349.866 351.574c-6.827 6.826-6.827 18.773 0 23.893l283.306 283.307c6.827 6.826 18.774 6.826 23.894 0L814.08 501.76zM460.8 805.547c-5.12 5.12-13.653 5.12-18.773 0l-240.64-240.64c-5.12-5.12-5.12-13.654 0-18.774l319.146-319.146c3.414-3.414 6.827-3.414 10.24-3.414h240.64c3.414 0 6.827 1.707 10.24 3.414 3.414 3.413 3.414 6.826 3.414 10.24v240.64c0 3.413-1.707 6.826-3.414 10.24L460.8 805.547z" fill="#' +
          _color +
          '"/></svg>'
      } else if (btn_icon == 5) {
        icon =
          '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="80%" height="80%"><path d="M595.823 290.5c-27.154 42.945-63.256 83.619-107.784 121.48h216.537c-42.5-34.558-78.923-75.229-108.753-121.48z" fill="#' +
          _color +
          '"/><path d="M511.98 25.889c-267.721 0-486.091 218.393-486.091 486.131 0 267.699 218.37 486.091 486.091 486.091 267.739 0 486.131-218.393 486.131-486.091 0-267.738-218.392-486.131-486.131-486.131zm281.81 379.888c-11.977 14.52-22.063 27.356-29.979 38.15l-5.018 6.843-7.126-4.606a539.631 539.631 0 0 1-27.753-19.19c-2.859 49.285-6.1 90.752-9.639 123.315l-.018.152c-3.205 25.426-12.252 44.955-26.891 58.048-14.674 13.124-34.945 19.778-60.252 19.778-31.963 0-57.838-.373-76.907-1.108l-7.217-.278-1.291-7.104c-2.16-11.882-5.292-27.352-9.307-45.98l-2.576-11.955 12.18 1.095c28.207 2.534 54.621 3.819 78.509 3.819 20.46 0 30.792-8.457 33.486-27.416 2.566-21.533 4.59-44.94 6.028-69.701H517.695v179.923c0 27.297 13.022 39.47 42.224 39.47h110.71c33.992 0 40.432-17.291 42.317-30.297l.066-.392c4.331-22.741 7.814-46.762 10.354-71.394l1.192-11.57 10.9 4.059c15.533 5.783 30.001 10.729 43.001 14.699l7.547 2.305-1.299 7.783c-4.795 28.751-10.024 55.084-15.544 78.267-5.056 21.837-15.341 38.604-30.555 49.782-15.01 11.027-34.916 16.619-59.167 16.619H548.903c-61.019 0-93.272-31.11-93.272-89.968V437.917a768.91 768.91 0 0 1-17.733 12.982l-6.542 4.648 4.351-1.088-.645 12.162c-.357 6.734-.538 21.398-.538 43.587v6.911l-6.677 1.784c-5.09 1.359-24.209 6.262-59.97 15.374v151.635c0 45.354-22.448 69.987-64.917 71.236-12.92.368-29.87.555-50.387.555h-8.101l-.85-8.056c-1.438-13.636-3.802-28.542-7.027-44.306l-2.396-11.71 11.916.934c18.431 1.443 33.206 2.176 43.912 2.176l.187.002c.28.006.56.009.835.009 10.135 0 16.417-3.011 16.417-18V549.697a9358.298 9358.298 0 0 0-63.752 15.518l-10.238 2.525-5.425-64.326 7.993-1.499c5.406-1.014 29.422-6.546 71.423-16.454v-117.17h-72.154v-54.904h72.154V208.736h60.412v104.651h66.646v54.904h-66.646v102.574c16.953-3.87 35.74-8.381 56.014-13.45l6.57-1.643-5.042-6.896c-6.79-9.284-16.242-20.731-28.094-34.023l-6.979-7.826 8.793-5.711c76.833-49.906 134.511-113.195 171.431-188.109l2.476-5.021h65.513l-5.375 12.544a619.07 619.07 0 0 1-4.761 10.829c41.972 71.456 96.674 125.455 162.649 160.546l9.727 5.173-7.011 8.499z" fill="#' +
          _color +
          '"/></svg>'
      } else if (btn_icon == 6) {
        icon =
          '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="70%" height="50%"><path d="M640.03 510.336L87.71 1010.432a55.04 55.04 0 0 1-72.703-.384 44.16 44.16 0 0 1 .256-66.304l478.464-433.152L15.39 80.512a44.16 44.16 0 0 1-.512-66.56A53.76 53.76 0 0 1 51.103 0c13.568 0 26.752 4.736 36.48 13.44L640.03 510.336z" fill="#' +
          _color +
          '"/><path d="M1152.03 510.336l-552.32 500.096a55.04 55.04 0 0 1-72.703-.384 44.16 44.16 0 0 1 .256-66.304l478.464-433.152L527.39 80.512a44.16 44.16 0 0 1-.512-66.56A53.76 53.76 0 0 1 563.103 0c13.568 0 26.752 4.736 36.48 13.44l552.448 496.896z" fill="#' +
          _color +
          '"/></svg>'
      } else if (btn_icon == 7) {
        icon =
          '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="70%" height="70%"><path d="M939.072 434.496c-19.328-31.104-52.8-50.496-87.168-51.52l-213.056-1.024a387.327 387.327 0 0 0 21.376-127.04c0-21.504-1.856-43.52-5.952-67.264l-3.968-17.152c-11.328-49.152-54.464-83.584-105.024-83.584-59.456 0-107.84 48.384-107.84 107.904 0 3.456.128 6.848.448 9.664-2.944 105.536-129.984 214.464-173.184 214.464h-.064l-158.272.064c-20.672 0-37.504 16.896-37.504 37.568l-.384 442.88c0 20.992 18.176 36.288 40.96 36.928l137.216-.256 5.248.96 4.608-.64 522.24.192c18.368-1.28 36.096-6.976 51.456-16.768 16.64-10.688 30.08-25.728 36.16-38.976l6.4-10.624c35.968-85.632 79.872-347.968 81.664-359.04l.704-10.624c1.792-23.552-3.776-46.4-16.064-66.112zm-806.208 48.832l85.376-.128v389.312l-85.696.256.32-389.44zM815.744 841.6l-4.032 6.4c-3.648 7.36-9.216 13.568-16 17.92-6.208 3.968-13.568 6.336-19.136 6.72l-494.336-.192v-392.64c84.416-16.448 216-145.472 219.584-278.464l-.384-6.528c0-24.192 19.648-43.904 43.84-43.904 20.544 0 38.08 13.952 42.688 33.984l3.584 15.232c3.136 18.368 4.672 36.736 4.672 54.656 0 36.352-6.08 72.256-18.112 106.624l-29.44 84.416 291.456.064 6.912.704c15.488.576 29.568 8.704 37.696 21.76 5.056 8.128 7.36 17.6 6.592 32.384-.448 2.56-44.48 265.92-75.584 340.864z" fill="#' +
          _color +
          '"/></svg>'
      }
      return icon
    },
  },

  filters: {
    formdateNumToWan(num) {
      return num < 9999 ? num : (num / 10000).toFixed(2) + '万'
    },
  },
}
</script>

<style lang="scss" scoped>
// @import 'src/extension-cnzoom-testcomponent/mixin-scss/index';

.main {
  width: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center top;
  overflow: hidden;
}

.slide-nav-wrapper {
  margin: 0 auto;
  max-width: 540px;
  margin-bottom: 15px;
  overflow: hidden;
  .slide-nav {
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    &::-webkit-scrollbar {
      display: none;
      height: 0px;
    }
    .nav-item {
      width: 100%;
      height: 100%;
      overflow: hidden;
      text-align: center;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      position: relative;
      span {
        width: 50%;
        position: absolute;
        bottom: 0;
        left: 25%;
        display: block;
      }
    }
  }
}

.itemBox {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.item {
  display: block;
  overflow: hidden;
}

.imgBox {
  position: relative;
  max-height: 500px;
  overflow: hidden;
  .img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    background-color: #ffffff;
  }
}

.goods-info {
  padding: 5px 5px 10px;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-align: center;

  .title {
    margin-top: 5px;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .desc {
    margin-top: 5px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .priceBox {
    height: 24px;
    margin-top: 5px;
    overflow: hidden;
    display: flex;
    font-weight: 400;
    position: relative;
    .price {
      align-items: baseline;
      line-height: 26px;
      flex-grow: 1;
      span {
        font-size: 12px;
      }
      i {
        font-size: 14px;
      }
      .origin {
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }

  .btn {
    position: absolute;
    right: 0;
    top: 1px;
    min-width: 22px;
    height: 22px;
    .icon {
      width: 22px;
      height: 22px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      height: 22px;
      line-height: 22px;
      font-size: 12px;
    }
  }
  .btn2 {
    position: static;
    display: inline-block;
    margin: 2px auto 3px;
  }
  .sale {
    height: 20px;
    margin-top: 5px;
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
// public
import React from 'react';
import { Tabs, Slider, ColorPicker, Checkbox, CheckboxGroup, Radio, Input, Pop, BlockHeader, Button } from 'zent';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const TabPanel = Tabs.TabPanel;
// youzan
import { DesignEditor } from '../../common/editor-base';
import { ControlGroup } from 'editor-common';
// self
import './style/index.scss';
import { MyComponentTitle, MyImageSelector, MyGoodsList } from '../extension-cnzoom-testcomponent/common';
import { validateTabs } from '../extension-cnzoom-testcomponent/common/validate';

export default class Editor extends DesignEditor {
  static info = {
    type: 'extension-cnzoom-goodsswiper03-3',
    name: '商品分组Ａ3',
    description: '个性轮播展示，可自动切换，效果突出醒目。',
    icon: 'https://img.yzcdn.cn/public_files/2019/02/12/a6806f6ff8c220aa7a57eb89d253e126.png',
    maxNum: 20,
    usedNum: 0,
    status: '',
  };

  static getInitialValue() {
    return {
      type: 'extension-cnzoom-goodsswiper03-3',
      tabs: [
        { name: '商品分组一', goods: [] },
        { name: '商品分组二', goods: [] },
        { name: '商品分组三', goods: [] },
      ],
      title_style: '4',
      col_num: '3',
      goods_gap: 10,
      goods_padding: 0,
      goods_border_width: 0,
      goods_border_color: '#eeeeee',
      goods_background_color: '',
      goods_radius: 0,
      goods_pic_scale: '100',
      goods_pic_fill: 'cover',
      info_align: '2',
      show_list: ['price'],

      title_lines: '1',
      title_font_size: '14',
      title_font_weight: '700',
      title_color: '#333333',
      desc_font_size: '12',
      desc_font_weight: '400',
      desc_color: '#999999',
      price_font_size: '18',
      price_font_weight: '700',
      price_xsd: '1',
      price_qz: '￥',
      price_color: '#333333',
      origin_color: '#999999',
      btn_icon: '1',
      btn_text: '立即下单',
      btn_color: '#ffffff',
      btn_background_type: '3',
      btn_linear_start: '#fd8831',
      btn_linear_end: '#fc5008',
      btn_radius: '15',
      sale_font_weight: '400',
      sale_color: '#666666',
      sale_color2: '#000000',

      padding_top: 10,
      padding_bottom: 0,
      padding_horiziontal: 5,
      background_color: '',

      main_padding_top: 0,
      main_padding_bottom: 0,
      main_padding_horiziontal: 0,
      main_background_color: '',
      main_radius_top: 0,
      main_radius_bottom: 0,

      title_width: 25,
      title_height: 30,
      title_margin: 5,
      title_radius: 25,
      title_border_width: 2,
      title_border_color_def: '#eeeeee',
      background_def: '#eeeeee',
      color_def: '#333333',
      title_border_color_act: '#333333',
      background_act: '#333333',
      color_act: '#333333',
      title_size: '14',
      title_weight: '400',
    };
  }

  static validate(value, prevValue, changedProps) {
    const changeValue = changedProps[0];
    return new Promise(resolve => {
      let errors = {};
      if (changeValue) {
        // 单个数据更改时的校验
        switch (changeValue) {
          case 'tabs':
            errors = validateTabs(value, errors);
        }
      } else {
        // 表单提交时的校验
        errors = validateTabs(value, errors);
      }
      resolve(errors);
    });
  }

  componentWillMount() {
    this.setState({
      activeId: 1,
    });
  }

  render() {
    const { value, globalConfig, showError, validation, settings, onChange, linkMenuItems, uploadConfig } = this.props;
    return (
      <>
        <MyComponentTitle info={Editor.info} />
        <Tabs stretch activeId={this.state.activeId} onChange={this.onTabChange}>
          <TabPanel tab="商品设置" id={1}>
            <MyGoodsList maxListNum={6} listLabel="分组标题：" onCustomInputChange={this.onCustomInputChange} value={value} globalConfig={globalConfig} showError={showError} validation={validation} />

            <BlockHeader bgColored title="商品样式设置" />
            <ControlGroup label="分组标题样式" showError={showError} error={validation.title_style}>
              <RadioGroup onChange={this.onInputChange} value={value.title_style}>
                <RadioButton name="title_style" value="1">
                  样式1
                </RadioButton>
                <RadioButton name="title_style" value="2">
                  样式2
                </RadioButton>
                <RadioButton name="title_style" value="3">
                  样式3
                </RadioButton>
                <RadioButton name="title_style" value="4">
                  样式4
                </RadioButton>
              </RadioGroup>
            </ControlGroup>
            <ControlGroup label="商品每列数量" showError={showError} error={validation.col_num}>
              <RadioGroup onChange={this.onInputChange} value={value.col_num}>
                <RadioButton name="col_num" value="1">
                  1个
                </RadioButton>
                <RadioButton name="col_num" value="2">
                  2个
                </RadioButton>
                <RadioButton name="col_num" value="3">
                  3个
                </RadioButton>
                <RadioButton name="col_num" value="4">
                  4个
                </RadioButton>
              </RadioGroup>
            </ControlGroup>
            <ControlGroup label="商品横竖间距" showError={showError} error={validation.goods_gap}>
              <Slider className="cnzoom-slider" name="goods_gap" max={30} min={0} step={1} value={value.goods_gap} onChange={this.onCustomInputChange('goods_gap')} />
            </ControlGroup>
            <ControlGroup label="商品内部边距" showError={showError} error={validation.goods_padding}>
              <Slider className="cnzoom-slider" name="goods_padding" max={10} min={0} step={1} value={value.goods_padding} onChange={this.onCustomInputChange('goods_padding')} />
            </ControlGroup>
            <ControlGroup label="商品边框宽度" showError={showError} error={validation.goods_border_width}>
              <Slider className="cnzoom-slider" name="goods_border_width" max={5} min={0} step={1} value={value.goods_border_width} onChange={this.onCustomInputChange('goods_border_width')} />
            </ControlGroup>
            {value.goods_border_width != 0 && (
              <>
                <ControlGroup label="商品边框颜色" value={value.goods_border_color && value.goods_border_color.toUpperCase()} showError={showError} error={validation.goods_border_color}>
                  <ColorPicker name="goods_border_color" color={value.goods_border_color} onChange={this.onCustomInputChange('goods_border_color')} />
                </ControlGroup>
              </>
            )}
            <ControlGroup label="商品圆角半径" showError={showError} error={validation.goods_radius}>
              <Slider className="cnzoom-slider" name="goods_radius" max={20} min={0} step={1} value={value.goods_radius} onChange={this.onCustomInputChange('goods_radius')} />
            </ControlGroup>
            <ControlGroup label="商品背景颜色" value={value.goods_background_color && value.goods_background_color.toUpperCase()} showError={showError} error={validation.goods_background_color}>
              <Button bordered={false} type="primary" outline>
                <span onClick={this.resetColor.bind(this, 'goods_background_color', '')}>重置</span>
              </Button>
              <ColorPicker name="goods_background_color" color={value.goods_background_color} onChange={this.onCustomInputChange('goods_background_color')} />
            </ControlGroup>
            <ControlGroup label="商品图片比例" showError={showError} error={validation.goods_pic_scale}>
              <RadioGroup onChange={this.onInputChange} value={value.goods_pic_scale}>
                <RadioButton name="goods_pic_scale" value="66.6667">
                  3:2
                </RadioButton>
                <RadioButton name="goods_pic_scale" value="100">
                  1:1
                </RadioButton>
                <RadioButton name="goods_pic_scale" value="133.333">
                  3:4
                </RadioButton>
                <RadioButton name="goods_pic_scale" value="56.25">
                  16:9
                </RadioButton>
              </RadioGroup>
            </ControlGroup>
            <ControlGroup label="商品图片填充" showError={showError} error={validation.goods_pic_fill}>
              <RadioGroup onChange={this.onInputChange} value={value.goods_pic_fill}>
                <RadioButton name="goods_pic_fill" value="cover">
                  充满
                </RadioButton>
                <RadioButton name="goods_pic_fill" value="contain">
                  周边留白
                </RadioButton>
              </RadioGroup>
            </ControlGroup>
            <ControlGroup label="文字对齐方式" showError={showError} error={validation.info_align}>
              <RadioGroup onChange={this.onInputChange} value={value.info_align}>
                <RadioButton name="info_align" value="1">
                  居左
                </RadioButton>
                <RadioButton name="info_align" value="2">
                  居中
                </RadioButton>
              </RadioGroup>
            </ControlGroup>
            <ControlGroup label="选择商品显示内容" block showError={showError}>
              <CheckboxGroup name="show_list" value={value.show_list} onChange={this.onCustomInputChange('show_list')}>
                <Checkbox value="title">标题</Checkbox>
                <Checkbox value="desc">卖点</Checkbox>
                <Checkbox value="price">价格</Checkbox>
                <Checkbox value="origin">原价</Checkbox>
                <Checkbox value="btn">按钮</Checkbox>
                <Checkbox value="sale">销量</Checkbox>
              </CheckboxGroup>
            </ControlGroup>

            {this.showHas('title', value.show_list) && (
              <>
                <BlockHeader bgColored title="商品标题设置" />
                <ControlGroup label="商品标题行数" showError={showError} error={validation.title_lines}>
                  <RadioGroup onChange={this.onInputChange} value={value.title_lines}>
                    <RadioButton name="title_lines" value="1">
                      一行
                    </RadioButton>
                    <RadioButton name="title_lines" value="2">
                      两行
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品标题大小" showError={showError} error={validation.title_font_size}>
                  <RadioGroup onChange={this.onInputChange} value={value.title_font_size}>
                    <Pop trigger="hover" position="bottom-center" content="12px" className="cnzoom-radio-button__pop">
                      <RadioButton name="title_font_size" value="12">
                        小号
                      </RadioButton>
                    </Pop>
                    <Pop trigger="hover" position="bottom-center" content="14px" className="cnzoom-radio-button__pop">
                      <RadioButton name="title_font_size" value="14">
                        中号
                      </RadioButton>
                    </Pop>
                    <Pop trigger="hover" position="bottom-center" content="16px" className="cnzoom-radio-button__pop">
                      <RadioButton name="title_font_size" value="16">
                        大号
                      </RadioButton>
                    </Pop>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品标题粗细" showError={showError} error={validation.title_font_weight}>
                  <RadioGroup onChange={this.onInputChange} value={value.title_font_weight}>
                    <RadioButton name="title_font_weight" value="100">
                      细体
                    </RadioButton>
                    <RadioButton name="title_font_weight" value="400">
                      常规
                    </RadioButton>
                    <RadioButton name="title_font_weight" value="700">
                      加粗
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品标题颜色" value={value.title_color && value.title_color.toUpperCase()} showError={showError} error={validation.title_color}>
                  <ColorPicker name="title_color" color={value.title_color} onChange={this.onCustomInputChange('title_color')} />
                </ControlGroup>
              </>
            )}

            {this.showHas('desc', value.show_list) && (
              <>
                <BlockHeader bgColored title="商品卖点设置" />
                <ControlGroup label="商品卖点大小" showError={showError} error={validation.desc_font_size}>
                  <RadioGroup onChange={this.onInputChange} value={value.desc_font_size}>
                    <Pop trigger="hover" position="bottom-center" content="10px" className="cnzoom-radio-button__pop">
                      <RadioButton name="desc_font_size" value="10">
                        小号
                      </RadioButton>
                    </Pop>
                    <Pop trigger="hover" position="bottom-center" content="12px" className="cnzoom-radio-button__pop">
                      <RadioButton name="desc_font_size" value="12">
                        中号
                      </RadioButton>
                    </Pop>
                    <Pop trigger="hover" position="bottom-center" content="14px" className="cnzoom-radio-button__pop">
                      <RadioButton name="desc_font_size" value="14">
                        大号
                      </RadioButton>
                    </Pop>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品卖点粗细" showError={showError} error={validation.desc_font_weight}>
                  <RadioGroup onChange={this.onInputChange} value={value.desc_font_weight}>
                    <RadioButton name="desc_font_weight" value="100">
                      细体
                    </RadioButton>
                    <RadioButton name="desc_font_weight" value="400">
                      常规
                    </RadioButton>
                    <RadioButton name="desc_font_weight" value="700">
                      加粗
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品卖点颜色" value={value.desc_color && value.desc_color.toUpperCase()} showError={showError} error={validation.desc_color}>
                  <ColorPicker name="desc_color" color={value.desc_color} onChange={this.onCustomInputChange('desc_color')} />
                </ControlGroup>
              </>
            )}

            {this.showHas('price', value.show_list) && (
              <>
                <BlockHeader bgColored title="商品价格设置" />
                <ControlGroup label="商品价格大小" showError={showError} error={validation.price_font_size}>
                  <RadioGroup onChange={this.onInputChange} value={value.price_font_size}>
                    <Pop trigger="hover" position="bottom-center" content="14px" className="cnzoom-radio-button__pop">
                      <RadioButton name="price_font_size" value="14">
                        小号
                      </RadioButton>
                    </Pop>
                    <Pop trigger="hover" position="bottom-center" content="16px" className="cnzoom-radio-button__pop">
                      <RadioButton name="price_font_size" value="16">
                        中号
                      </RadioButton>
                    </Pop>
                    <Pop trigger="hover" position="bottom-center" content="18px" className="cnzoom-radio-button__pop">
                      <RadioButton name="price_font_size" value="18">
                        大号
                      </RadioButton>
                    </Pop>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品价格粗细" showError={showError} error={validation.price_font_weight}>
                  <RadioGroup onChange={this.onInputChange} value={value.price_font_weight}>
                    <RadioButton name="price_font_weight" value="100">
                      细体
                    </RadioButton>
                    <RadioButton name="price_font_weight" value="400">
                      常规
                    </RadioButton>
                    <RadioButton name="price_font_weight" value="700">
                      加粗
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品价格小数" showError={showError} error={validation.price_xsd}>
                  <RadioGroup onChange={this.onInputChange} value={value.price_xsd}>
                    <RadioButton name="price_xsd" value="1">
                      显示
                    </RadioButton>
                    <RadioButton name="price_xsd" value="0">
                      不显示
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品价格前缀" showError={showError} error={validation.price_qz}>
                  <Input className="cnzoom-input" name="price_qz" value={value.price_qz} onChange={this.onInputChange} onBlur={this.onInputBlur} />
                </ControlGroup>
                <ControlGroup label="商品价格颜色" value={value.price_color && value.price_color.toUpperCase()} showError={showError} error={validation.price_color}>
                  <ColorPicker name="price_color" color={value.price_color} onChange={this.onCustomInputChange('price_color')} />
                </ControlGroup>
                {this.showHas('origin', value.show_list) && (
                  <>
                    <ControlGroup label="商品原价颜色" value={value.origin_color && value.origin_color.toUpperCase()} showError={showError} error={validation.origin_color}>
                      <ColorPicker name="origin_color" color={value.origin_color} onChange={this.onCustomInputChange('origin_color')} />
                    </ControlGroup>
                  </>
                )}
              </>
            )}

            {this.showHas('btn', value.show_list) && (
              <>
                <BlockHeader bgColored title="购买按钮设置" />
                <ControlGroup block label="按钮图标类型" showError={showError} error={validation.btn_icon}>
                  <RadioGroup onChange={this.onInputChange} value={value.btn_icon}>
                    <Radio name="btn_icon" value="1">
                      图标1
                    </Radio>
                    <Radio name="btn_icon" value="2">
                      图标2
                    </Radio>
                    <Radio name="btn_icon" value="3">
                      图标3
                    </Radio>
                    <Radio name="btn_icon" value="4">
                      图标4
                    </Radio>
                    <Radio name="btn_icon" value="5">
                      图标5
                    </Radio>
                    <Radio name="btn_icon" value="6">
                      图标6
                    </Radio>
                    <Radio name="btn_icon" value="7">
                      图标7
                    </Radio>
                    <Radio name="btn_icon" value="99">
                      不显示
                    </Radio>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="按钮文字内容" showError={showError} error={validation.btn_text}>
                  <Input className="cnzoom-input" name="btn_text" value={value.btn_text} onChange={this.onInputChange} onBlur={this.onInputBlur} />
                </ControlGroup>
                <ControlGroup label="背景渐变方向" showError={showError} error={validation.btn_background_type}>
                  <RadioGroup onChange={this.onInputChange} value={value.btn_background_type}>
                    <RadioButton name="btn_background_type" value="1">
                      上下
                    </RadioButton>
                    <RadioButton name="btn_background_type" value="2">
                      左右
                    </RadioButton>
                    <RadioButton name="btn_background_type" value="3">
                      斜向
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="背景渐变颜色" showError={showError}>
                  <ColorPicker showAlpha name="btn_linear_start" color={value.btn_linear_start} onChange={this.onCustomInputChange('btn_linear_start')} />
                  <span className="cnzoom-color-line">-</span>
                  <ColorPicker showAlpha name="btn_linear_end" color={value.btn_linear_end} onChange={this.onCustomInputChange('btn_linear_end')} />
                </ControlGroup>
                <ControlGroup label="按钮文字颜色" value={value.btn_color && value.btn_color.toUpperCase()} showError={showError} error={validation.btn_color}>
                  <ColorPicker name="btn_color" color={value.btn_color} onChange={this.onCustomInputChange('btn_color')} />
                </ControlGroup>
                <ControlGroup label="按钮圆角半径" showError={showError} error={validation.btn_radius}>
                  <Slider className="cnzoom-slider" name="btn_radius" max={15} min={0} step={1} value={value.btn_radius} onChange={this.onCustomInputChange('btn_radius')} />
                </ControlGroup>
              </>
            )}

            {this.showHas('sale', value.show_list) && (
              <>
                <BlockHeader title="商品销量设置" />
                <ControlGroup label="商品销量粗细" showError={showError} error={validation.sale_font_weight}>
                  <RadioGroup onChange={this.onInputChange} value={value.sale_font_weight}>
                    <RadioButton name="sale_font_weight" value="100">
                      细体
                    </RadioButton>
                    <RadioButton name="sale_font_weight" value="400">
                      常规
                    </RadioButton>
                    <RadioButton name="sale_font_weight" value="700">
                      加粗
                    </RadioButton>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup label="商品销量颜色" value={value.sale_color && value.sale_color.toUpperCase()} showError={showError} error={validation.sale_color}>
                  <ColorPicker name="sale_color" color={value.sale_color} onChange={this.onCustomInputChange('sale_color')} />
                </ControlGroup>
                <ControlGroup label="销量数字颜色" value={value.sale_color2 && value.sale_color2.toUpperCase()} showError={showError} error={validation.sale_color2}>
                  <ColorPicker name="sale_color2" color={value.sale_color2} onChange={this.onCustomInputChange('sale_color2')} />
                </ControlGroup>
              </>
            )}
          </TabPanel>

          <TabPanel tab="模块样式" id={2}>
            <>
              <ControlGroup label="模块顶部间距" showError={showError} error={validation.padding_top}>
                <Slider className="cnzoom-slider" name="padding_top" max={30} min={0} step={1} value={value.padding_top} onChange={this.onCustomInputChange('padding_top')} />
              </ControlGroup>
              <ControlGroup label="模块底部间距" showError={showError} error={validation.padding_bottom}>
                <Slider className="cnzoom-slider" name="padding_bottom" max={30} min={0} step={1} value={value.padding_bottom} onChange={this.onCustomInputChange('padding_bottom')} />
              </ControlGroup>
              <ControlGroup label="模块左右边距" showError={showError} error={validation.padding_horiziontal}>
                <Slider className="cnzoom-slider" name="padding_horiziontal" max={30} min={0} step={1} value={value.padding_horiziontal} onChange={this.onCustomInputChange('padding_horiziontal')} />
              </ControlGroup>
              <ControlGroup label="模块背景颜色" value={value.background_color && value.background_color.toUpperCase()} showError={showError} error={validation.background_color}>
                <Button bordered={false} type="primary" outline>
                  <span onClick={this.resetColor.bind(this, 'background_color', '')}>重置</span>
                </Button>
                <ColorPicker name="background_color" color={value.background_color} onChange={this.onCustomInputChange('background_color')} />
              </ControlGroup>

              <BlockHeader title="分组标题设置" />
              <ControlGroup label="分组标题宽度" showError={showError} error={validation.title_width}>
                <Slider className="cnzoom-slider" name="title_width" max={50} min={10} step={1} value={value.title_width} onChange={this.onCustomInputChange('title_width')} />
              </ControlGroup>
              <ControlGroup label="分组标题高度" showError={showError} error={validation.title_height}>
                <Slider className="cnzoom-slider" name="title_height" max={50} min={20} step={1} value={value.title_height} onChange={this.onCustomInputChange('title_height')} />
              </ControlGroup>
              <ControlGroup label="分组标题间距" showError={showError} error={validation.title_margin}>
                <Slider className="cnzoom-slider" name="title_margin" max={30} min={0} step={1} value={value.title_margin} onChange={this.onCustomInputChange('title_margin')} />
              </ControlGroup>

              {(value.title_style == '1' || value.title_style == '3') && (
                <>
                  <ControlGroup label="标题圆角大小" showError={showError} error={validation.title_radius}>
                    <Slider className="cnzoom-slider" name="title_radius" max={25} min={0} step={1} value={value.title_radius} onChange={this.onCustomInputChange('title_radius')} />
                  </ControlGroup>
                </>
              )}
              {(value.title_style == '3' || value.title_style == '4') && (
                <>
                  <ControlGroup label="标题边框宽度" showError={showError} error={validation.title_border_width}>
                    <Slider className="cnzoom-slider" name="title_border_width" max={5} min={1} step={1} value={value.title_border_width} onChange={this.onCustomInputChange('title_border_width')} />
                  </ControlGroup>
                  <ControlGroup label="默认边框颜色" value={value.title_border_color_def && value.title_border_color_def.toUpperCase()} showError={showError} error={validation.title_border_color_def}>
                    <ColorPicker name="title_border_color_def" color={value.title_border_color_def} onChange={this.onCustomInputChange('title_border_color_def')} />
                  </ControlGroup>
                </>
              )}
              {(value.title_style == '1' || value.title_style == '2') && (
                <>
                  <ControlGroup label="默认背景颜色" value={value.background_def && value.background_def.toUpperCase()} showError={showError} error={validation.background_def}>
                    <ColorPicker name="background_def" color={value.background_def} onChange={this.onCustomInputChange('background_def')} />
                  </ControlGroup>
                </>
              )}
              <ControlGroup label="默认文字颜色" value={value.color_def && value.color_def.toUpperCase()} showError={showError} error={validation.color_def}>
                <ColorPicker name="color_def" color={value.color_def} onChange={this.onCustomInputChange('color_def')} />
              </ControlGroup>
              {(value.title_style == '3' || value.title_style == '4') && (
                <>
                  <ControlGroup label="选中边框颜色" value={value.title_border_color_act && value.title_border_color_act.toUpperCase()} showError={showError} error={validation.title_border_color_act}>
                    <ColorPicker name="title_border_color_act" color={value.title_border_color_act} onChange={this.onCustomInputChange('title_border_color_act')} />
                  </ControlGroup>
                </>
              )}
              {(value.title_style == '1' || value.title_style == '2') && (
                <>
                  <ControlGroup label="选中背景颜色" value={value.background_act && value.background_act.toUpperCase()} showError={showError} error={validation.background_act}>
                    <ColorPicker name="background_act" color={value.background_act} onChange={this.onCustomInputChange('background_act')} />
                  </ControlGroup>
                </>
              )}
              <ControlGroup label="选中文字颜色" value={value.color_act && value.color_act.toUpperCase()} showError={showError} error={validation.color_act}>
                <ColorPicker name="color_act" color={value.color_act} onChange={this.onCustomInputChange('color_act')} />
              </ControlGroup>
              <ControlGroup label="标题文字大小" showError={showError} error={validation.title_size}>
                <RadioGroup onChange={this.onInputChange} value={value.title_size}>
                  <Pop trigger="hover" position="bottom-center" content="12px" className="cnzoom-radio-button__pop">
                    <RadioButton name="title_size" value="12">
                      小号
                    </RadioButton>
                  </Pop>
                  <Pop trigger="hover" position="bottom-center" content="14px" className="cnzoom-radio-button__pop">
                    <RadioButton name="title_size" value="14">
                      中号
                    </RadioButton>
                  </Pop>
                  <Pop trigger="hover" position="bottom-center" content="16px" className="cnzoom-radio-button__pop">
                    <RadioButton name="title_size" value="16">
                      大号
                    </RadioButton>
                  </Pop>
                </RadioGroup>
              </ControlGroup>
              <ControlGroup label="标题文字粗细" showError={showError} error={validation.title_weight}>
                <RadioGroup onChange={this.onInputChange} value={value.title_weight}>
                  <RadioButton name="title_weight" value="100">
                    细体
                  </RadioButton>
                  <RadioButton name="title_weight" value="400">
                    常规
                  </RadioButton>
                  <RadioButton name="title_weight" value="700">
                    加粗
                  </RadioButton>
                </RadioGroup>
              </ControlGroup>

              <BlockHeader bgColored title="内容区样式设置:背景图片宽750，高度不限" />
              <MyImageSelector
                addText="添加"
                maxNum={1}
                customName="background_image"
                value={value}
                globalConfig={globalConfig}
                showError={showError}
                validation={validation}
                onCustomInputChange={this.onCustomInputChange}
                onChange={onChange}
                settings={settings}
                uploadConfig={uploadConfig}
                linkMenuItems={linkMenuItems}
              />
              <ControlGroup label="内容区顶部间距" showError={showError} error={validation.main_padding_top}>
                <Slider className="cnzoom-slider" name="main_padding_top" max={200} min={0} step={1} value={value.main_padding_top} onChange={this.onCustomInputChange('main_padding_top')} />
              </ControlGroup>
              <ControlGroup label="内容区底部间距" showError={showError} error={validation.main_padding_bottom}>
                <Slider className="cnzoom-slider" name="main_padding_bottom" max={100} min={0} step={1} value={value.main_padding_bottom} onChange={this.onCustomInputChange('main_padding_bottom')} />
              </ControlGroup>
              <ControlGroup label="内容区左右边距" showError={showError} error={validation.main_padding_horiziontal}>
                <Slider className="cnzoom-slider" name="main_padding_horiziontal" max={30} min={0} step={1} value={value.main_padding_horiziontal} onChange={this.onCustomInputChange('main_padding_horiziontal')} />
              </ControlGroup>
              <ControlGroup label="内容区背景颜色" value={value.main_background_color && value.main_background_color.toUpperCase()} showError={showError} error={validation.main_background_color}>
                <Button bordered={false} type="primary" outline>
                  <span onClick={this.resetColor.bind(this, 'main_background_color', '')}>重置</span>
                </Button>
                <ColorPicker name="main_background_color" color={value.main_background_color} onChange={this.onCustomInputChange('main_background_color')} />
              </ControlGroup>
              <ControlGroup label="内容区上部圆角" showError={showError} error={validation.main_radius_top}>
                <Slider className="cnzoom-slider" name="main_radius_top" max={30} min={0} step={1} value={value.main_radius_top} onChange={this.onCustomInputChange('main_radius_top')} />
              </ControlGroup>
              <ControlGroup label="内容区下部圆角" showError={showError} error={validation.main_radius_bottom}>
                <Slider className="cnzoom-slider" name="main_radius_bottom" max={30} min={0} step={1} value={value.main_radius_bottom} onChange={this.onCustomInputChange('main_radius_bottom')} />
              </ControlGroup>
            </>
          </TabPanel>
        </Tabs>
      </>
    );
  }

  onTabChange = id => {
    this.setState({
      activeId: id,
    });
  };
  resetColor(name, value) {
    const { onChange } = this.props;
    onChange({
      [name]: value,
    });
  }
  showHas(name, value) {
    const idIndex = value && value.indexOf(name);
    if (idIndex >= 0) {
      return true;
    }
  }
}
