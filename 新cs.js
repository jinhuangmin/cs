旧
RadioGroup  
新
RadioButtonGroup

export default class Editor extends DesignEditor {
  static info = {
    type: 'extension-cnzoom-goodsswiper03-3',
    name: '商品分组A3',
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
