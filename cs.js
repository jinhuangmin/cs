
import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      result: [],
      curr: '0'
    }
  }

  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    //如果是从API上取数据
    const fetch = openSdk.fetch('icbu.data.product.grouplist', { bizId: gdc.bizId, strategyName: 'groupProductSelect', selectGroupProducts: mds.items });
    fetch.then((data) => {
      this.setState({
        hasData: true,
        result: data.success ? data.result : []
      })
    })
  }
  handleClick = (i) => {
    this.setState({
      curr: i
    })
  }
  render() {
    const { hasData, moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }
    var ullist = [];
    var babylist = [];
    var list_num = this.state.result.length ? this.state.result.length : (mds.moduleData.items ? mds.moduleData.items.length : 4);



    var demo_tit = [{ "title": "CATEGORY NAME" }, { "title": "CATEGORY NAME" }, { "title": "CATEGORY NAME" }, { "title": "CATEGORY NAME" }];
    var lmtitles = mds.moduleData.lmtitles ? mds.moduleData.lmtitles : demo_tit;
    for (var i = 0; i < list_num; i++) {
      ullist.push(<li onMouseEnter={this.handleClick.bind(null, i)}>
        <div className={i == this.state.curr ? 'show active' : 'hide active'} style={{ background: mds.moduleData.fl_actbg, borderColor: mds.moduleData.fl_actbc, color: mds.moduleData.fl_actc }}>{lmtitles[i] && lmtitles[i].title ? lmtitles[i].title : demo_tit[i % 4].title}</div>
        <div className={i == this.state.curr ? 'hide default' : 'show default'} style={{ background: mds.moduleData.fl_devbg, borderColor: mds.moduleData.fl_devbc, color: mds.moduleData.fl_devc }}>{lmtitles[i] && lmtitles[i].title ? lmtitles[i].title : demo_tit[i % 4].title}</div>
      </li>);
    }

    /*默认产品按钮图片*/
    var gd_def_btn = 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01rImB7E1dQqKHkns3F_!!800803731.png';
    /*默认产品切换按钮图片,没有时填默认图片*/
    var gd_act_btn = 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01rImB7E1dQqKHkns3F_!!800803731.png';
    /*默认背景图片，没有时让值等于''*/
    var mk_bgImg = '';
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? '1' : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
    var demoList = [];
    for (var i = 0; i < 6; i++) {
      demoList.push(<a className='item_box' style={{ background: mds.moduleData.gd_bg, borderColor: mds.moduleData.gd_bk, marginTop: i < 2 ? 0 : 20 }}>
        <div className='item_bg'><img src={'https://img.alicdn.com/imgextra/i1/800803731/O1CN01Aijp5k1dQqKGlHYR5_!!800803731.jpg'} /></div>
        <div className='item_info'>
          <div className='item_price' style={{ color: mds.moduleData.gd_pricec }}>US $ 6.0 -9.0 <span>/ Piece</span></div>
          <div className={'min_order'} style={{ color: mds.moduleData.gd_orderc }}>100 Pieces<span> (Min.Order) </span></div>
          <div className='item_btn'>
            <img className='def_btn' src={mds.moduleData.gd_def_btn ? mds.moduleData.gd_def_btn : gd_def_btn} />
            <img className='act_btn' src={mds.moduleData.gd_act_btn ? mds.moduleData.gd_act_btn : gd_act_btn} />
          </div>
        </div>
      </a>
      )
    }

    if (this.state.result[0]) {
      for (var i = 0; i < list_num; i++) {
        var gd_zdy = eval('mds.moduleData.gd_zdy' + i) ? eval('mds.moduleData.gd_zdy' + i) : [{ "img": "", "title": "" }];
        babylist.push(<div className={'product_box cf'}><div className='main'>
          {this.state.result[i].products.map((item, index) => (
            <a target={target} href={item.productUrl} className='item_box' style={{ background: mds.moduleData.gd_bg, borderColor: mds.moduleData.gd_bk, marginTop: index < 2 ? 0 : 20 }}>
              <div className='item_bg'><img src={gd_zdy[index] && gd_zdy[index].img ? gd_zdy[index].img : item.productImage.url.x350} /></div>
              <div className='item_info'>
                <div className='item_price' style={{ color: mds.moduleData.gd_pricec }}>{item.fobPriceWithoutUnit}<span> {item.fobUnit ? ('/' + item.fobUnit) : ''}</span></div>
                <div className={'min_order'} style={{ color: mds.moduleData.gd_orderc }}>{item.moq}<span> (Min.Order) </span></div>
                <div className='item_btn' >
                  <img className='def_btn' src={mds.moduleData.gd_def_btn ? mds.moduleData.gd_def_btn : gd_def_btn} />
                  <img className='act_btn' src={mds.moduleData.gd_act_btn ? mds.moduleData.gd_act_btn : gd_act_btn} />
                </div>
              </div>
            </a>
          ))}
        </div></div>);
      }
    } else {
      for (var i = 0; i < list_num; i++) {
        babylist.push(<div className={'product_box cf'}><div className='main'>{demoList}</div></div>);
      }
    }

    return (
      <div className={'wm1920'} style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : mk_bgImg) : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        {mds.moduleData.btitle && <div className='tit_box'>
          <div className='title' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle}</div>
          <div className='title_icon'><img src={mds.moduleData.title_icon ? mds.moduleData.title_icon : 'https://img.alicdn.com/imgextra/i2/800803731/O1CN01mYm90I1dQqKEmOFpO_!!800803731.png'} /></div>
        </div>}
        <div className={'wm_item'} >
          <a target={target} href={mds.moduleData.l_url} className='l_banner'>
            <img src={mds.moduleData.l_banner ? mds.moduleData.l_banner : 'https://img.alicdn.com/imgextra/i2/800803731/O1CN016YcPkb1dQqK7GaJ5j_!!800803731.jpg'} />
          </a>
          <div className='tab_box'>
            <ul className='listul cf'>{ullist}</ul>
            <div className='tab_item cf' style={{ width: 780 * list_num, 'transform': 'translateX(' + 780 * -this.state.curr + 'px)' }}>{babylist}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default IntlIcbuSmodDemo;  
