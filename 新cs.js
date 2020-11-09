import { React, ReactDOM, openSdk, Button, Slider } from '@alife/icbu-mod-lib';
import './index.scss';

function wmCode(a) { if (/diyModule/.test(a)) { a = JSON.parse(a); var d = []; a = a.wm; for (var b in a) if (a[b]) { var c = a[b].t; var e = a[b].a; if (b < a.length - 2) c = React.createElement(c, e, null), d.push(c); else if (b == a.length - 2) return React.createElement(c, e, d) } } };

class IntlIcbuSmodDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      result: [],
      curr: '0',
      auto: true,
      close: false
    }
  }


  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    const fetch = openSdk.fetch('icbu.data.product.list', { bizId: gdc.bizId, strategyName: mds.strategyName, countNumber: mds.countNumber, products: mds.products });
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
  autoplay = (a) => {
    this.setState({
      auto: a
    })
  }

  render() {
    const { hasData, moduleTitle } = this.state;
    const { mds, gdc } = this.props.moduleData;
    const { auto } = this.state;
    var banner_w = mds.moduleData.width ? Number.parseInt(mds.moduleData.width <= 20 ? 1920 : mds.moduleData.width) : 1920;
    var banner_h = mds.moduleData.height ? Number.parseInt(mds.moduleData.height <= 20 ? 800 : mds.moduleData.height) : 800;
    /*轮播图*/
    var demo_img = 'https://img.alicdn.com/imgextra/i3/800803731/O1CN01ap5yUV1dQqLZlApsZ_!!800803731.jpg';
    /*右侧悬浮产品图*/
    var demoImg = ['https://img.alicdn.com/imgextra/i1/800803731/O1CN01W1wSch1dQqLV39L1O_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i4/800803731/O1CN01x6cRsa1dQqLW8EaFl_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i2/800803731/O1CN01rcgE4m1dQqLW8CuKQ_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i4/800803731/O1CN01rtBXrQ1dQqLZlAhR5_!!800803731.jpg'];

    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var xf_gdNum = Number.parseInt(mds.moduleData.xf_gdNum);
    var xf_right = mds.moduleData.xf_right ? Number.parseInt(mds.moduleData.xf_right) : '';
    var xf_top = mds.moduleData.xf_top ? Number.parseInt(mds.moduleData.xf_top) : '';
    var dnum, speed;
    banner_w > 1200 ? dnum = 16 : dnum = 10;
    var imgw = banner_w / dnum;
    var imgnum = Math.ceil(banner_h / imgw) * dnum;
    var zbabylist = [];
    var ml = (1920 - banner_w) / 2;
    var random = mds.moduleData.animat;
    mds.moduleData.animat == '1000' ? speed = 500 : speed = 0;

    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }

    var jtImgs = [{ "prev": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01sm8LfF1dQqLuZy78w_!!800803731.png", "next": "https://img.alicdn.com/imgextra/i4/800803731/O1CN018jRfTg1dQqM221P7Y_!!800803731.png" },
    { "prev": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01xLrRdV1dQqLyBI3DT_!!800803731.png", "next": "https://img.alicdn.com/imgextra/i3/800803731/O1CN018NJfjF1dQqM18ygwN_!!800803731.png" },
    { "prev": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01uoYhmL1dQqLpv0UtF_!!800803731.png", "next": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01BnCNTg1dQqLvhnwq0_!!800803731.png" },
    { "prev": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01TMxRZe1dQqLvhoouB_!!800803731.png", "next": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01xwLjRH1dQqM0phYf0_!!800803731.png" },
    { "prev": "https://img.alicdn.com/imgextra/i4/800803731/O1CN019BhXv51dQqM190yHO_!!800803731.png", "next": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01e7mJH41dQqLxv4eZ9_!!800803731.png" }
    ];

    var jt_style = mds.moduleData.jt_style ? mds.moduleData.jt_style : '0';
    var prevArrow = <div><img style={{ left: (banner_w / 2 - 600) }} src={mds.moduleData.jt_imgL ? mds.moduleData.jt_imgL : jtImgs[jt_style].prev} /></div>;
    var nextArrow = <div><img style={{ right: (banner_w / 2 - 600) }} src={mds.moduleData.jt_imgR ? mds.moduleData.jt_imgR : jtImgs[jt_style].next} /></div>;
    var banners = mds.moduleData.banners ? mds.moduleData.banners : [{ "image": demo_img, "add": "" }];
    for (var j = 0; j < banners.length; j++) {
      if (random == '100') { random = Number.parseInt(Math.random() * 11 + 1); }
      var imgitem = [];
      for (var i = 0; i < imgnum; i++) {
        imgitem.push(<div className='imgbox' style={{ width: imgw, height: imgw }}><div style={{ backgroundImage: 'url(' + (banners[j].image ? banners[j].image : demo_img) + ')', backgroundPosition: '-' + imgw * (i % dnum) + 'px -' + imgw * (Number.parseInt(i / dnum)) + 'px' }} className={'img_item tx' + ((Number.parseInt(i / dnum) + i) % 2)}></div></div>);
      }
      zbabylist.push(<div className={j == this.state.curr ? 'product_box show' : 'product_box hide'}>
        <a target={target} href={banners[j].add} className={'cf wm_animat animat_box' + (random)} onMouseEnter={this.autoplay.bind(null, false)} onMouseLeave={this.autoplay.bind(null, true)}>{imgitem}</a>
      </div>);
    }

    var nav_style = mds.moduleData.nav_style;
    var nav_width = [20, 30, 22, 22, 22];
    var navlist = [];
    if (nav_style < 2) {
      var style_def = { background: mds.moduleData.nav_defc };
      var style_act = { background: mds.moduleData.nav_actc };
    } else if (nav_style == 2 || nav_style == 3) {
      var style_def = { borderColor: mds.moduleData.nav_defc };
      var style_act = { borderColor: mds.moduleData.nav_actc };
    } else {
      var style_def = { borderBottomColor: mds.moduleData.nav_defc };
      var style_act = { borderBottomColor: mds.moduleData.nav_actc };
    }

    for (var i = 0; i < banners.length; i++) {
      navlist.push(<li className={'list ' + (i == this.state.curr ? 'active' : '')} onMouseEnter={this.handleClick.bind(null, i)}>
        <div className='def' style={style_def}></div>
        <div className='act' style={style_act}></div>
      </li>);
    }



    var itemList = [];
    if (this.state.result.length != 0) {
      {
        this.state.result.map((item, index) => (
          itemList.push(<a target={target} href={item.productUrl} className='list'>
            <div className='img'><img src={item.productImage.url.x350} /></div>
            <div className='price' style={{ color: mds.moduleData.xf_pricec }}>{item.fobPriceWithoutUnit}</div>
          </a>
          )
        ))
      }
    } else {
      for (var i = 0; i < 4; i++) {
        itemList.push(<a className='list'>
          <div className='img'><img src={demoImg[i]} /></div>
          <div className='price'>US $90.0-168.0</div>
        </a>
        )
      }
    }

    var xf_html = mds.moduleData.xf_html ? mds.moduleData.xf_html : '1';

    return (<div className='wm1920 slider' style={{ backgroundColor: mds.moduleData.mk_bg }}>
      <div className='mk_bd' style={{ height: banner_h, marginTop: paddingTop, marginBottom: paddingBottom }}>

        {mds.moduleData.dots && banners.length > 1 && <ul className={'nav nay_type' + nav_style} style={{ left: (960 - nav_width[nav_style] * banners.length / 2) }}>{navlist}</ul>}

        <Slider className='slider_box' style={{ width: banner_w, height: banner_h }} arrows={mds.moduleData.arrows ? true : false} speed={speed} autoplay={mds.moduleData.autoplay ? auto : false} autoplaySpeed={mds.moduleData.autoplaySpeed} nextArrow={nextArrow} prevArrow={prevArrow} dots={false} slickGoTo={this.state.curr} afterChange={(currentIndex) => this.setState({ curr: currentIndex })} >
          {banners.map((item, index) => <a href={item.add} key={index} onMouseEnter={this.autoplay.bind(null, false)} onMouseLeave={this.autoplay.bind(null, true)} className="slider-img-wrapper" target={target} >{mds.moduleData.animat == '1000' && <img className='slider_img' src={item.image ? item.image : demo_img} />}</a>)}
        </Slider>
        {mds.moduleData.animat != '1000' && <div className='banner_box' style={{ width: banner_w, height: banner_h, marginLeft: ml }}>{zbabylist}</div>}
      </div>

      {mds.moduleData.xf_dis != '2' && <div className='hbxf' style={{ right: xf_right, top: xf_top }}>
        <div className='close' onClick={() => this.setState({ close: !this.state.close })} style={{ borderColor: mds.moduleData.xf_bk }}>{this.state.close ? '+' : '×'}</div>
        {mds.moduleData.xf_html && !this.state.close && wmCode(mds.moduleData.xf_html)}
        {xf_html == "1" && <div className={this.state.close ? 'items hide' : 'items show'} style={{ backgroundColor: mds.moduleData.xf_bg, borderColor: mds.moduleData.xf_bk }}>
          <Slider className='itembox' autoplay={true} autoplaySpeed={3000} dots={false} slideDirection={'vertical'} slidesToShow={3} arrows={false} style={{ height: (xf_gdNum * 180) }}>{itemList}</Slider>
          <a target={target} href={mds.moduleData.xf_btnUrl}><img className='requests' src={mds.moduleData.xf_btn ? mds.moduleData.xf_btn : 'https://img.alicdn.com/imgextra/i4/800803731/TB24Yk0n67nBKNjSZLeXXbxCFXa_!!800803731.png'} /></a>
        </div>}
      </div>}
    </div>
    );
  }
};

export default IntlIcbuSmodDemo;   
