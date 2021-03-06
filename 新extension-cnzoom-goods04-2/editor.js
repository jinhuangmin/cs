/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Tabs, Slider, ColorPicker, Checkbox, CheckboxGroup, Radio, Input, BlockHeader, Button } from 'zent';
const RadioGroup = Radio.Group;
const TabPanel = Tabs.TabPanel;
const RadioButtonGroup = RadioButton.Group;
import { DesignEditor } from '../../common/editor-base';
import GoodsSelector from '../../common/new-goods-selector';
import { ControlGroup, Divider, RadioButton } from 'editor-common';
import './style/index.scss';
import { MyComponentTitle, MyImg2TxtLinkSelector } from '../extension-cnzoom-testcomponent/common';

export default class Editor extends DesignEditor {
  componentWillMount() {
    this.setState({
      activeId: 1,
    });
  }

  render() {
    const { value, globalConfig, showError, validation, settings, onChange, linkMenuItems, uploadConfig } = this.props;
    const Lists = [];
    if (value.goods) {
      for (let i = 0; i < value.goods.length; i++) {
        Lists.push(
          <div key={i}>
            <ControlGroup bgColored label={'商品' + (i + 1) + '标签'} showError={showError} error={validation['tag' + i]}>
              <Input className="cnzoom-input" name={'tag' + i} value={value['tag' + i]} onChange={this.onInputChange} onBlur={this.onInputBlur} />
            </ControlGroup>
          </div>
        );
      }
    }

    return (
      <div>
        <MyComponentTitle info={Editor.info} />
        <Tabs stretch activeId={this.state.activeId} onChange={this.onTabChange}>
          <TabPanel tab="商品设置" id={1}>
            <BlockHeader className="required_title" bgColored title="请点击添加选择商品" />
            <ControlGroup required block>
              <GoodsSelector onCustomInputChange={this.onCustomInputChange} value={value} globalConfig={globalConfig} showError={showError} validation={validation} />
            </ControlGroup>
            <BlockHeader bgColored title="参数设置" />
            <ControlGroup label="商品样式" block showError={showError} error={validation.item_type}>
              <RadioButtonGroup block onChange={this.onMyInputChange} value={value.item_type}>
                <RadioButton name="item_type" value="0">
                  无边白底
                  </RadioButton>
                <RadioButton name="item_type" value="1">
                  卡片投影
                  </RadioButton>
                <RadioButton name="item_type" value="2">
                  描边白底
                  </RadioButton>
                <RadioButton name="item_type" value="3">
                  无边透明
                  </RadioButton>
              </RadioButtonGroup>
            </ControlGroup>
            <Divider />
            <ControlGroup label="图片百分比" showError={showError} error={validation.goods_pic_percent}>
              <Slider className="cnzoom-slider" name="goods_pic_percent" max={70} min={0} step={1} value={value.goods_pic_percent} onChange={this.onCustomInputChange('goods_pic_percent')} />
            </ControlGroup>
            <ControlGroup label="商品竖向间距" showError={showError} error={validation.goods_gap}>
              <Slider className="cnzoom-slider" name="goods_gap" max={40} min={0} step={1} value={value.goods_gap} onChange={this.onCustomInputChange('goods_gap')} />
            </ControlGroup>
            <ControlGroup label="商品内部边距" showError={showError} error={validation.goods_padding}>
              <Slider className="cnzoom-slider" name="goods_padding" max={10} min={0} step={1} value={value.goods_padding} onChange={this.onCustomInputChange('goods_padding')} />
            </ControlGroup>
            <ControlGroup label="商品圆角半径" showError={showError} error={validation.goods_radius}>
              <Slider className="cnzoom-slider" name="goods_radius" max={20} min={0} step={1} value={value.goods_radius} onChange={this.onCustomInputChange('goods_radius')} />
            </ControlGroup>
            <ControlGroup label="图片填充" value={value.goods_pic_fill == 'cover' ? '填充' : '周边留白'} showError={showError} error={validation.goods_pic_fill}>
              <RadioButtonGroup onChange={this.onInputChange} value={value.goods_pic_fill}>
                <RadioButton name="goods_pic_fill" value="cover" tip="填充" icon="img-cover" />
                <RadioButton name="goods_pic_fill" value="contain" tip="周边留白" icon="img-contain" />
              </RadioButtonGroup>
            </ControlGroup>
            <Divider />
            <ControlGroup label="商品标题" value={value.show_tit ? '显示' : '不显示'} showError={showError} error={validation.show_tit}>
              <Checkbox name="show_tit" checked={value.show_tit} onChange={this.onInputChange} />
            </ControlGroup>
            {value.show_tit && (
              <>
                <ControlGroup bgColored label="商品标题行数" showError={showError} error={validation.title_lines}>
                  <RadioButtonGroup onChange={this.onInputChange} value={value.title_lines}>
                    <RadioButton name="title_lines" value="1">
                      一行
                  </RadioButton>
                    <RadioButton name="title_lines" value="2">
                      两行
                  </RadioButton>
                  </RadioButtonGroup>
                </ControlGroup>
                <ControlGroup bgColored label="商品标题粗细" value={value.font_weight == '400' ? '常规体' : '加粗体'} showError={showError} error={validation.title_font_weight}>
                  <RadioButtonGroup onChange={this.onInputChange} value={value.title_font_weight}>
                    <RadioButton name="title_font_weight" value="400" tip="常规体" icon="font-regular" />
                    <RadioButton name="title_font_weight" value="700" tip="加粗体" icon="font-bold" />
                  </RadioButtonGroup>
                </ControlGroup>
              </>
            )}

            <ControlGroup label="商品卖点" value={value.show_desc ? '显示' : '不显示'} showError={showError} error={validation.show_desc}>
              <Checkbox name="show_desc" checked={value.show_desc} onChange={this.onInputChange} />
            </ControlGroup>
            <ControlGroup label="商品标签" value={value.show_tag ? '显示' : '不显示'} showError={showError} error={validation.show_tag}>
              <Checkbox name="show_tag" checked={value.show_tag} onChange={this.onInputChange} />
            </ControlGroup>
            {value.show_tag && (
              <>
                {Lists}
              </>
            )}
            <ControlGroup label="商品价格" value={value.show_price ? '显示' : '不显示'} showError={showError} error={validation.show_price}>
              <Checkbox name="show_price" checked={value.show_price} onChange={this.onInputChange} />
            </ControlGroup>
            {value.show_price && (
              <>
                <ControlGroup bgColored label="商品价格前缀" showError={showError} error={validation.price_qz}>
                  <Input className="cnzoom-input" name="price_qz" value={value.price_qz} onChange={this.onInputChange} onBlur={this.onInputBlur} />
                </ControlGroup>
                <ControlGroup bgColored label="商品价格小数" showError={showError} error={validation.price_xsd}>
                  <RadioButtonGroup onChange={this.onInputChange} value={value.price_xsd}>
                    <RadioButton name="price_xsd" value="1">
                      显示
                  </RadioButton>
                    <RadioButton name="price_xsd" value="0">
                      不显示
                  </RadioButton>
                  </RadioButtonGroup>
                </ControlGroup>
              </>
            )}
            <ControlGroup label="商品原价" value={value.show_origin ? '显示' : '不显示'} showError={showError} error={validation.show_origin}>
              <Checkbox name="show_origin" checked={value.show_origin} onChange={this.onInputChange} />
            </ControlGroup>
            <ControlGroup label="商品销量" value={value.show_sale ? '显示' : '不显示'} showError={showError} error={validation.show_sale}>
              <Checkbox name="show_sale" checked={value.show_sale} onChange={this.onInputChange} />
            </ControlGroup>
            <ControlGroup label="商品按钮" value={value.show_btn ? '显示' : '不显示'} showError={showError} error={validation.show_btn}>
              <Checkbox name="show_btn" checked={value.show_btn} onChange={this.onInputChange} />
            </ControlGroup>
            {value.show_btn && (
              <>
                <ControlGroup bgColored block label="按钮图标样式" showError={showError} error={validation.btn_icon}>
                  <RadioGroup onChange={this.onInputChange} value={value.btn_icon}>
                    <Radio name="btn_icon" value="1">
                      样式1
                      </Radio>
                    <Radio name="btn_icon" value="2">
                      样式2
                      </Radio>
                    <Radio name="btn_icon" value="3">
                      样式3
                      </Radio>
                    <Radio name="btn_icon" value="4">
                      样式4
                      </Radio>
                    <Radio name="btn_icon" value="5">
                      样式5
                      </Radio>
                    <Radio name="btn_icon" value="6">
                      样式6
                      </Radio>
                    <Radio name="btn_icon" value="7">
                      样式7
                      </Radio>
                    <Radio name="btn_icon" value="8">
                      样式8
                      </Radio>
                    <Radio name="btn_icon" value="9">
                      样式9
                      </Radio>
                    <Radio name="btn_icon" value="10">
                      样式10
                      </Radio>
                    <Radio name="btn_icon" value="11">
                      样式11
                      </Radio>
                    <Radio name="btn_icon" value="12">
                      样式12
                      </Radio>
                    <Radio name="btn_icon" value="13">
                      样式13
                      </Radio>
                    <Radio name="btn_icon" value="99">
                      不显示
                      </Radio>
                  </RadioGroup>
                </ControlGroup>
                <ControlGroup bgColored label="按钮文字内容" showError={showError} error={validation.btn_text}>
                  <Input className="cnzoom-input" name="btn_text" value={value.btn_text} onChange={this.onInputChange} onBlur={this.onInputBlur} />
                </ControlGroup>
                <ControlGroup bgColored label="按钮圆角半径" showError={showError} error={validation.btn_radius}>
                  <Slider className="cnzoom-slider" name="btn_radius" max={15} min={0} step={1} value={value.btn_radius} onChange={this.onCustomInputChange('btn_radius')} />
                </ControlGroup>
                <ControlGroup bgColored label="按钮背景方向" showError={showError} error={validation.btn_background_type}>
                  <RadioButtonGroup onChange={this.onInputChange} value={value.btn_background_type}>
                    <RadioButton name="btn_background_type" value="2">左右</RadioButton>
                    <RadioButton name="btn_background_type" value="1">上下</RadioButton>
                    <RadioButton name="btn_background_type" value="3">斜向</RadioButton>
                  </RadioButtonGroup>
                </ControlGroup>
              </>
            )}



          </TabPanel>

          <TabPanel tab="扩展设置" id={2}>
            <BlockHeader bgColored title="商品颜色设置" />
            {value.item_type == 2 && (
              <>
                <ControlGroup label="商品边框颜色" value={value.goods_border_color && value.goods_border_color.toUpperCase()} showError={showError} error={validation.goods_border_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('goods_border_color')}>重置</span>
                  </Button>
                  <ColorPicker name="goods_border_color" color={value.goods_border_color} onChange={this.onCustomInputChange('goods_border_color')} />
                </ControlGroup>
              </>
            )}
            {value.item_type != 3 && (
              <>
                <ControlGroup label="商品背景颜色" value={value.goods_background_color && value.goods_background_color.toUpperCase()} showError={showError} error={validation.goods_background_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('goods_background_color')}>重置</span>
                  </Button>
                  <ColorPicker name="goods_background_color" color={value.goods_background_color} onChange={this.onCustomInputChange('goods_background_color')} />
                </ControlGroup>
              </>
            )}
            {(value.show_tit || value.show_tit == undefined) && (
              <>
                <ControlGroup label="商品标题颜色" value={value.title_color && value.title_color.toUpperCase()} showError={showError} error={validation.title_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('title_color')}>重置</span>
                  </Button>
                  <ColorPicker name="title_color" color={value.title_color} onChange={this.onCustomInputChange('title_color')} />
                </ControlGroup>
              </>
            )}
            {(value.show_desc || value.show_desc == undefined) && (
              <>
                <ControlGroup label="卖点文字颜色" value={value.desc_color && value.desc_color.toUpperCase()} showError={showError} error={validation.desc_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('desc_color')}>重置</span>
                  </Button>
                  <ColorPicker name="desc_color" color={value.desc_color} onChange={this.onCustomInputChange('desc_color')} />
                </ControlGroup>
              </>
            )}
            {(value.show_tag || value.show_tag == undefined) && (
              <>
                <ControlGroup label="标签背景颜色" value={value.tag_background && value.tag_background.toUpperCase()} showError={showError} error={validation.tag_background}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('tag_background')}>重置</span>
                  </Button>
                  <ColorPicker name="tag_background" color={value.tag_background} onChange={this.onCustomInputChange('tag_background')} />
                </ControlGroup>
                <ControlGroup label="标签文字颜色" value={value.tag_color && value.tag_color.toUpperCase()} showError={showError} error={validation.tag_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('tag_color')}>重置</span>
                  </Button>
                  <ColorPicker name="tag_color" color={value.tag_color} onChange={this.onCustomInputChange('tag_color')} />
                </ControlGroup>
              </>
            )}


            {(value.show_price || value.show_price == undefined) && (
              <>
                <ControlGroup label="商品价格颜色" value={value.price_color && value.price_color.toUpperCase()} showError={showError} error={validation.price_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('price_color')}>重置</span>
                  </Button>
                  <ColorPicker name="price_color" color={value.price_color} onChange={this.onCustomInputChange('price_color')} />
                </ControlGroup>
              </>
            )}
            {(value.show_origin || value.show_origin == undefined) && (
              <>
                <ControlGroup label="商品原价颜色" value={value.origin_color && value.origin_color.toUpperCase()} showError={showError} error={validation.origin_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('origin_color')}>重置</span>
                  </Button>
                  <ColorPicker name="origin_color" color={value.origin_color} onChange={this.onCustomInputChange('origin_color')} />
                </ControlGroup>
              </>
            )}
            {(value.show_sale || value.show_sale == undefined) && (
              <>
                <ControlGroup label="商品销量颜色" value={value.sale_color && value.sale_color.toUpperCase()} showError={showError} error={validation.sale_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('sale_color')}>重置</span>
                  </Button>
                  <ColorPicker name="sale_color" color={value.sale_color} onChange={this.onCustomInputChange('sale_color')} />
                </ControlGroup>
              </>
            )}
            {(value.show_btn || value.show_btn == undefined) && (
              <>
                <ControlGroup label="按钮背景颜色" showError={showError}>
                  <ColorPicker showAlpha name="btn_linear_start" color={value.btn_linear_start} onChange={this.onCustomInputChange('btn_linear_start')} />
                  <span className="cnzoom-color-line">-</span>
                  <ColorPicker showAlpha name="btn_linear_end" color={value.btn_linear_end} onChange={this.onCustomInputChange('btn_linear_end')} />
                </ControlGroup>
                <ControlGroup label="按钮文字颜色" value={value.btn_color && value.btn_color.toUpperCase()} showError={showError} error={validation.btn_color}>
                  <Button bordered={false} type="primary" outline>
                    <span onClick={() => this.resetValue('btn_color')}>重置</span>
                  </Button>
                  <ColorPicker name="btn_color" color={value.btn_color} onChange={this.onCustomInputChange('btn_color')} />
                </ControlGroup>
              </>
            )}


            <BlockHeader bgColored title="模块样式设置" />
            <ControlGroup label="模块顶部间距" showError={showError} error={validation.padding_top}>
              <Slider className="cnzoom-slider" name="padding_top" max={40} min={0} step={1} value={value.padding_top} onChange={this.onCustomInputChange('padding_top')} />
            </ControlGroup>
            <ControlGroup label="模块底部间距" showError={showError} error={validation.padding_bottom}>
              <Slider className="cnzoom-slider" name="padding_bottom" max={40} min={0} step={1} value={value.padding_bottom} onChange={this.onCustomInputChange('padding_bottom')} />
            </ControlGroup>
            <ControlGroup label="模块左右边距" showError={showError} error={validation.padding_horiziontal}>
              <Slider className="cnzoom-slider" name="padding_horiziontal" max={40} min={0} step={1} value={value.padding_horiziontal} onChange={this.onCustomInputChange('padding_horiziontal')} />
            </ControlGroup>
            <ControlGroup label="模块背景颜色" value={value.background_color && value.background_color.toUpperCase()} showError={showError} error={validation.background_color}>
              <Button bordered={false} type="primary" outline>
                <span onClick={() => this.resetValue('background_color')}>重置</span>
              </Button>
              <ColorPicker name="background_color" color={value.background_color} onChange={this.onCustomInputChange('background_color')} />
            </ControlGroup>
            <ControlGroup label="模块背景图片，宽750，高度不限" block showError={showError} error={validation.bg_image}>
              <MyImg2TxtLinkSelector
                customName="bg_image"
                value={value}
                minNum={0}
                maxNum={1}
                addText="添加图片"
                showTitle={false}
                showDesc={false}
                showLink={false}
                globalConfig={globalConfig}
                showError={showError}
                validation={validation}
                settings={settings}
                uploadConfig={uploadConfig}
                linkMenuItems={linkMenuItems}
                onCustomInputChange={this.onCustomInputChange}
                onChange={onChange}
              />
            </ControlGroup>

            <BlockHeader bgColored title="内容区样式设置" />
            <ControlGroup label="内容区内部边距" showError={showError} error={validation.main_padding_horiziontal}>
              <Slider className="cnzoom-slider" name="main_padding_horiziontal" max={40} min={0} step={1} value={value.main_padding_horiziontal} onChange={this.onCustomInputChange('main_padding_horiziontal')} />
            </ControlGroup>
            <ControlGroup label="内容区上部圆角" showError={showError} error={validation.main_radius_top}>
              <Slider className="cnzoom-slider" name="main_radius_top" max={50} min={0} step={1} value={value.main_radius_top} onChange={this.onCustomInputChange('main_radius_top')} />
            </ControlGroup>
            <ControlGroup label="内容区下部圆角" showError={showError} error={validation.main_radius_bottom}>
              <Slider className="cnzoom-slider" name="main_radius_bottom" max={50} min={0} step={1} value={value.main_radius_bottom} onChange={this.onCustomInputChange('main_radius_bottom')} />
            </ControlGroup>
            <ControlGroup label="内容区背景颜色" value={value.main_background_color && value.main_background_color.toUpperCase()} showError={showError} error={validation.main_background_color}>
              <Button bordered={false} type="primary" outline>
                <span onClick={() => this.resetValue('main_background_color')}>重置</span>
              </Button>
              <ColorPicker name="main_background_color" color={value.main_background_color} onChange={this.onCustomInputChange('main_background_color')} />
            </ControlGroup>

          </TabPanel>
        </Tabs >
      </div >
    );
  }

  // 模块信息
  static info = {
    type: 'extension-cnzoom-goods04-2',
    name: '单列商品B2',
    description: '个性的排行榜，爆品一目了解，更丰富的商品内容展示。',
    icon: 'https://img.yzcdn.cn/public_files/2019/02/12/a6806f6ff8c220aa7a57eb89d253e126.png',
    maxNum: 20,
    usedNum: 0,
    status: '',
  };

  static getInitialValue() {
    return {
      type: 'extension-cnzoom-goods04-2',
      item_type: '0',
      goods_pic_percent: 40,
      goods_pic_fill: 'cover',
      goods_gap: 10,
      goods_padding: 0,
      goods_radius: 8,
      show_tit: true,
      show_desc: false,
      show_tag: true,
      show_price: true,
      show_origin: true,
      show_btn: true,
      show_sale: false,
      tag0: '下单立减5元',
      tag1: '下单立减5元',
      tag2: '下单立减5元',
      tag3: '下单立减5元',
      tag4: '下单立减5元',
      price_qz: '￥',
      btn_icon: '1',
      btn_text: '立即抢购',
      btn_radius: '15',

      goods_border_color: '#eeeeee',
      goods_background_color: '#ffffff',
      title_lines: '2',
      title_font_weight: '700',
      title_color: '#222222',
      desc_color: '#999999',
      tag_background: '#fff1f6',
      tag_color: '#ff4045',

      price_xsd: '1',
      price_color: '#ff4045',
      origin_color: '#999999',
      sale_color: '#999999',
      btn_background_type: '2',
      btn_linear_start: '#fc4e08',
      btn_linear_end: '#ec4338',
      btn_color: '#ffffff',

      padding_top: 10,
      padding_bottom: 10,
      padding_horiziontal: 10,
      background_color: '',

      main_padding_horiziontal: 0,
      main_background_color: '',
      main_radius_top: 0,
      main_radius_bottom: 0,
    };
  }

  onTabChange = id => {
    this.setState({
      activeId: id,
    });
  };
  resetValue = name => {
    const initValue = Editor.getInitialValue()[name];
    if (initValue === undefined) {
      throw new Error(name + '未设置默认值');
    }

    const { value } = this.props;
    if (initValue === value[name]) {
      return;
    }

    this.onCustomInputChange(name)(initValue);
  };

  onMyInputChange = evt => {
    const { target } = evt;
    const { value } = target;
    const { value: propsValue, onChange } = this.props;

    if (value === propsValue.item_type) {
      return;
    }

    const map = {
      0: 0,
      1: 5,
      2: 5,
      3: 0,
    };

    onChange({
      item_type: value,
      goods_padding: map[value] || 0,
    });
    this.setMetaProperty('item_type', 'dirty');
    this.setMetaProperty('goods_padding', 'dirty');
  };

  showHas(name, value) {
    const idIndex = value && value.indexOf(name);
    if (idIndex >= 0) {
      return true;
    }
  }
  static validate(value, prevValue, changedProps) {
    const changeValue = changedProps[0];
    return new Promise(resolve => {
      const errors = {};
      if (changeValue) {
        // 单个数据更改时的校验
        switch (changeValue) {
          case 'goods':
            if (value[changeValue].length === 0) {
              errors[changeValue] = '商品数量不能为零';
            }
        }
      } else {
        // 表单提交时的校验
        if (!value.goods || value.goods.length === 0) {
          errors['goods'] = '请添加商品';
        }
      }
      resolve(errors);
    });
  }
}
