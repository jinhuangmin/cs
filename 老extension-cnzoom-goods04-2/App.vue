<template>
    <div :style="componentStyle" class="component">
        <div :style="mainStyle" class="main">
            <ul class="itemBox">
                <li :key="index" v-for="(item, index) in (goods && goods.length != 0 ? goods : getMockGoods(5))">
                    <a :href="item.url" :style="itemStyle" class="item">
                        <div :style="imgBoxStyle" class="img-box">
                            <div class="imgBox">
                                <div :style="[imgStyle,{'background-size':componentData.goods_pic_fill || 'cover'}]" class="img" v-lazy:background-image="item.imageUrl"></div>
                            </div>
                        </div>
                        <div class="goods-info">
                            <div class="info">
                                <div :style="titleStyle" class="title">{{item.title}}</div>
                                <div :style="descStyle" class="desc" v-if="showHas('desc') && (item.subTitle || item.sub_title)">{{item.subTitle}}</div>
                                <div class="tag" v-if="showHas('tag') && componentData['tag'+index]">
                                    <span :style="tagStyle">{{componentData['tag'+index]}}</span>
                                </div>
                                <div class="price-box">
                                    <div :style="priceStyle" class="price">
                                        <span>{{componentData.price_qz || "￥"}}</span>
                                        <strong>{{ goodsPrice(componentData.price_type==2&&componentData['price'+index]?componentData['price'+index]: item.price, 0,componentData.price_type) }}</strong>
                                        <em v-if="componentData.price_xsd == 1">.{{ goodsPrice(componentData.price_type==2&&componentData['price'+index]?componentData['price'+index]: item.price, 1,componentData.price_type)}}</em>
                                    </div>
                                    <del :style="originStyle" class="origin" v-if="showHas('origin') && item.origin">¥{{item.origin}}</del>
                                    <div :style="btnStyle" class="btn" v-if="showHas('btn')">
                                        <van-icon :name="iconName" class="btn-icon" v-if="componentData.btn_icon!=99" />
                                        <span :style="btnTxtStyle" class="btn-text" v-if="componentData.btn_text">{{componentData.btn_text}}</span>
                                    </div>
                                </div>
                                <div :style="saleStyle" class="sale" v-if="showHas('sale')">已售{{item.totalSoldNum | formdateNumToWan}}件</div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
import { goods, goods_icon } from '../extension-cnzoom-testcomponent/mixin-js'

Vue.use(Lazyload)

export default {
    name: 'extension-cnzoom-goods04-2',
    mixins: [goods, goods_icon],
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
            goods: [],
        }
    },
    watch: {
        'componentData.goods': {
            handler: function (newValue, oldValue) {
                const { getProcess } = window.youzanyunbridge
                getProcess('getGoodsList')('extension-cnzoom-goods04-2', this.componentIndex, 0, 40)
                    .then(res => {
                        this.goods = res.list || []
                    })
                    .catch(err => {
                        console.log('err', err)
                    })
            },
            immediate: true,
        },
    },
    computed: {
        componentStyle: function () {
            return {
                padding: `${this.componentData.padding_top}px ${this.componentData.padding_horiziontal}px ${this.componentData.padding_bottom}px`,
                'background-color': this.componentData.background_color,
            }
        },
        mainStyle: function () {
            let mainPaddingTop = this.componentData.main_padding_horiziontal - this.componentData.goods_gap / 2 > 0 ? this.componentData.main_padding_horiziontal - this.componentData.goods_gap / 2 : 0
            return {
                padding: `${mainPaddingTop}px ${this.componentData.main_padding_horiziontal}px`,
                'background-color': this.componentData.main_background_color,
                'border-radius': `${this.componentData.main_radius_top}px ${this.componentData.main_radius_top}px ${this.componentData.main_radius_bottom}px ${this.componentData.main_radius_bottom}px`,
            }
        },
        itemStyle: function () {
            return {
                margin: `${this.componentData.goods_gap / 2}px 0`,
                padding: this.componentData.goods_padding + 'px',
                'background-color': this.componentData.item_type == 3 ? '' : this.componentData.goods_background_color,
                border: `${this.componentData.item_type == 2 ? 1 : 0}px solid ${this.componentData.goods_border_color}`,
                'border-radius': this.componentData.goods_radius + 'px',
                'box-shadow': `${this.componentData.item_type == 1 ? '0 2px 8px rgba(93, 113, 127, 0.08)' : ''}`,
            }
        },
        imgBoxStyle: function () {
            return {
                width: this.componentData.goods_pic_size >= '120' ? this.componentData.goods_pic_size / 2.9 + '%' : this.componentData.goods_pic_size / 2.7 + '%',
            }
        },
        imgStyle: function () {
            return {
                'border-radius': `${this.componentData.goods_radius}px ${this.componentData.item_type == 3 ? this.componentData.goods_radius : 0}px ${this.componentData.item_type == 3 ? this.componentData.goods_radius : 0}px ${
                    this.componentData.goods_radius
                    }px`,
            }
        },
        titleStyle: function () {
            return {
                height: `${this.componentData.title_lines * 18}px`,
                '-webkit-line-clamp': this.componentData.title_lines,
                'font-weight': `${this.componentData.title_font_weight}`,
                color: `${this.componentData.title_color}`,
            }
        },
        descStyle: function () {
            return {
                color: `${this.componentData.desc_color}`,
            }
        },
        tagStyle: function () {
            return {
                padding: `0 ${this.componentData.tag_background == this.componentData.goods_background_color ? 0 : 6}px`,
                'background-color': `${this.componentData.tag_background}`,
                color: `${this.componentData.tag_color}`,
            }
        },
        priceStyle: function () {
            return {
                color: `${this.componentData.price_color}`,
            }
        },
        originStyle: function () {
            return {
                color: `${this.componentData.origin_color}`,
            }
        },
        saleStyle: function () {
            return {
                color: `${this.componentData.sale_color}`,
            }
        },
        btnStyle: function () {
            let background_type = this.componentData.btn_background_type
            return {
                'border-radius': `${this.componentData.btn_radius}px`,
                'background-image': `linear-gradient(to ${background_type == 1 ? 'bottom' : background_type == 2 ? 'right' : 'bottom right'}, ${this.componentData.btn_linear_start}, ${this.componentData.btn_linear_end})`,
                color: `${this.componentData.btn_color}`,
                padding: `0 ${this.componentData.btn_text ? 10 : 0}px`,
            }
        },
        btnTxtStyle: function () {
            return {
                'padding-left': `${this.componentData.btn_text && this.componentData.btn_icon != 99 ? 2 : 0}px`,
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import 'src/extension-cnzoom-testcomponent/mixin-scss/index';

.itemBox {
  width: 100%;
  li {
    width: 100%;
    float: left;
  }
}
.item {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.img-box {
  width: 50%;
  overflow: hidden;
  position: relative;
  .imgBox {
    position: relative;
    max-height: 500px;
    overflow: hidden;
    padding-top: 100%;
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
}
.goods-info {
  padding: 0 10px 0 15px;
  overflow: hidden;
  flex: 1;
}
.info {
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin-top: 10px;
  height: 18px;
  line-height: 18px;
  font-size: 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.desc {
  margin-top: 5px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  overflow: hidden;
}
.tag {
  margin-top: 7px;
  overflow: hidden;
  span {
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    padding: 0 6px;
    border-radius: 3px;
    display: inline-block;
  }
}
.price-box {
  width: 100%;
  margin-top: 15px;
  font-size: 12px;
  display: flex;
  align-items: baseline;
  overflow: hidden;
  .price {
    line-height: 24px;
    font-weight: 700;
    strong {
      font-size: 18px;
    }
    em {
      font-size: 14px;
    }
  }
  .origin {
    margin-left: 5px;
  }
  .btn {
    position: absolute;
    right: 0;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn-icon {
      font-size: 14px;
    }
    .btn-text {
      font-size: 12px;
    }
  }
}
.sale {
  font-size: 12px;
  margin-top: 5px;
}
</style>