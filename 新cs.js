import { React, ReactDOM, openSdk, Button, Slider } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      result: [],
      auto: true
    }
  }

  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    //如果是从API上取数据
    const fetch = openSdk.fetch('icbu.data.product.list', { bizId: gdc.bizId, strategyName: mds.strategyName, countNumber: mds.countNumber, products: mds.products });
    fetch.then((data) => {
      this.setState({
        hasData: true,
        result: data.success ? data.result : []
      })
    })
  }
  autoplay = (a) => {
    this.setState({
      auto: a
    })
  }
  render() {
    const { mds } = this.props.moduleData;
    const { auto } = this.state;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var scroll_num = mds.moduleData.scroll_num ? Number.parseInt(mds.moduleData.scroll_num) : 1;
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }
    var slider_num;
    if (mds.moduleData.mk_w == 1920) {
      slider_num = 6;
    } else if (mds.moduleData.mk_w == 1200) {
      slider_num = 5;
    } else {
      slider_num = 6;
    }

    var gd_zdy = mds.moduleData.gd_zdy ? mds.moduleData.gd_zdy : [{ "img": "", "url": "" }];

    var itemList = [];
    if (this.state.result.length != 0) {
      {
        this.state.result.map((item, index) => (
          itemList.push(<a target={target} href={item.productUrl} className={'item'} onMouseEnter={this.autoplay.bind(null, false)} onMouseLeave={this.autoplay.bind(null, true)}>
            <div className={'big'} style={{ background: mds.moduleData.gd_bg }}>
              <div className='item_bd' >
                <div className='img'><img src={gd_zdy[index] && gd_zdy[index].img ? gd_zdy[index].img : item.productImage.url.x350} /></div>
              </div>
              <div className={'item_title'} style={{ color: mds.moduleData.gd_titc, height: (mds.moduleData.btn_dis == null || mds.moduleData.btn_dis) ? 20 : 40 }}>{gd_zdy[index] && gd_zdy[index].title ? gd_zdy[index].title : item.productSubject}</div>
              <div className='item_price' style={{ color: mds.moduleData.ct_bg }}>{item.fobPriceWithoutUnit}</div>
              {(mds.moduleData.btn_dis == null || mds.moduleData.btn_dis) && <div className='item_btn' style={{ background: mds.moduleData.ct_bg, color: mds.moduleData.gd_btnColor }}>{mds.moduleData.gd_btnText ? mds.moduleData.gd_btnText : 'Inquire Now'}</div>}
            </div>
          </a>
          )
        ))
      }
    } else {
      for (var i = 0; i < 6; i++) {
        itemList.push(<a className={'item'} onMouseEnter={this.autoplay.bind(null, false)} onMouseLeave={this.autoplay.bind(null, true)}>
          <div className={'big'} style={{ background: mds.moduleData.gd_bg }}>
            <div className='item_bd'>
              <div className='img'><img src={'https://img.alicdn.com/imgextra/i4/800803731/O1CN01Ihf4EI1dQqKfLVHSn_!!800803731.jpg'} /></div>
            </div> 
            <div className={'item_title'} style={{ color: mds.moduleData.gd_titc, height: (mds.moduleData.btn_dis == null || mds.moduleData.btn_dis) ? 20 : 40 }}>Edit Display Product Name Price</div>
            <div className='item_price' style={{ color: mds.moduleData.ct_bg }}>US $ 6.0 -9.0</div>
            {(mds.moduleData.btn_dis == null || mds.moduleData.btn_dis) && <div className='item_btn' style={{ background: mds.moduleData.ct_bg, color: mds.moduleData.gd_btnColor }}>{mds.moduleData.gd_btnText ? mds.moduleData.gd_btnText : 'Inquire Now'}</div>}
          </div>
        </a>
        )
      }
    }

    return (
      <div className={'wm1920'} style={{ backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        <div className={'mk_bd cf mk_bd' + mds.moduleData.mk_w} style={{ background: mds.moduleData.ct_bg }}>
          <div className={'mk_w cf mk_w' + mds.moduleData.mk_w}>
            <div className='tit_box'>
              <div className='title_icon'><img src={mds.moduleData.title_icon ? mds.moduleData.title_icon : 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01GToSLC1dQqFwsHSCk_!!800803731.png'} /></div>
              <div className='stitle' style={{ color: mds.moduleData.mk_titc2, fontFamily: mds.moduleData.mk_titf }}>{mds.moduleData.stitle ? mds.moduleData.stitle : 'Product Showcase'}</div>
              <div className='btitle' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf }}>{mds.moduleData.btitle ? mds.moduleData.btitle : 'Super Deal!'}</div>
            </div>
            <Slider slidesToShow={slider_num} slidesToScroll={scroll_num} autoplaySpeed='5000' autoplay={itemList.length > slider_num ? auto : false} dots='true' className={'item_box cf '}>{itemList}</Slider>
          </div>
        </div>
      </div>
    );
  }
};

export default IntlIcbuSmodDemo; 