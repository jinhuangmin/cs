import { React, ReactDOM, openSdk, Button, VideoPlayer, Slider } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false
    }
  }

  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    const fetch = openSdk.fetch('icbu.data.common.minisite', { bizId: gdc.bizId, productIds: [], strategyName: 'manuallySelect' });
  }
  stop() {
    this.refs.current.stop();
  }
  start() {
    this.refs.current.start();
  }
  render() {
    const { hasData, moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? 1 : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }

    const videoinfo = mds.moduleData.videoinfo || {}
    const videoId = videoinfo.videoId || 79271064;
    const poster = mds.moduleData.poster ? mds.moduleData.poster : "https://img.alicdn.com/imgextra/i2/800803731/O1CN01LcvQsC1dQqJnGp42B_!!800803731.jpg";
    var video_dis = mds.moduleData.video_dis == null || mds.moduleData.video_dis == '1' ? '1' : '2';

    var display_mode = mds.moduleData.display_mode == null || mds.moduleData.display_mode == '1' ? '1' : '2';
    var demo = [{ "img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01A9XfTx1dQqF8rAkR5_!!800803731.jpg", 'tit': 'OUR WAREHOUSE' },
    { "img": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01efoX691dQqF9vYqVH_!!800803731.jpg", 'tit': 'OUR EQUIPMENT' },
    { "img": "https://img.alicdn.com/imgextra/i1/800803731/O1CN01UbqfPQ1dQqF8x5zE4_!!800803731.jpg", 'tit': 'OUR FACTORY' }];
    var imgs = mds.moduleData.imgs ? mds.moduleData.imgs : demo;
    var bottom_imgs = [];
    for (var i = 0; i < imgs.length; i++) {
      bottom_imgs.push(<div className='list' style={{ marginTop: display_mode == 2 ? 0 : (i < 3 ? 0 : 20) }}>
        <div className='img'>
          <a target={target} href={imgs[i].url}>
            <img src={imgs[i].img ? imgs[i].img : demo[i % 3].img} />
          </a>
        </div>
      </div>);
    }
    var gd_height = imgs.length != 0 ? imgs.length * 275 : 825;
    var itemLists = [];
    for (var i = 0; i < 3; i++) {
      if (i == 0) {
        var box_x = gd_height;
      } else if (i == 1) {
        var box_x = 0;
      } else if (i == 2) { 
        var box_x = (-gd_height);
      }
      itemLists.push(<div className={'box box' + i} style={{ width: gd_height, top: box_x }}>{bottom_imgs}</div>);
    }
    return (
      <div className='wm1920' style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : 'https://img.alicdn.com/imgextra/i2/800803731/O1CN01rbuUAD1dQqJjAi0MQ_!!800803731.jpg') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        <div className='mk_box cf'>
          <div className='mk_bd cf' >
            {video_dis == '1' && <div className="video"><VideoPlayer videoId={videoId} muted={mds.moduleData.muted ? false : true} autoplay={mds.moduleData.autoplay ? true : false} controls={mds.moduleData.controls ? true : false} width='100%' height='100%' poster={poster} /></div>}
            {video_dis == '2' && <div className="video"><img src={poster} /></div>}
            <div className='intro' style={{ width: 710 }}>
              <div className='title' style={{ color: mds.moduleData.tit_c }}>{mds.moduleData.title ? mds.moduleData.title : 'About Company '}</div>
              <div className='line' style={{ background: mds.moduleData.tit_linec }}></div>
              <div className='text' style={{ color: (mds.moduleData.info_c) }}><pre>{mds.moduleData.tex ? mds.moduleData.tex : 'Company was established in 2005,a leading brand of furniture and home product based in Japan’s Rakuten.Armonia have invested in manufacturing plants,huge warehouse,strong QC team and wellequipped furniture photography studio. ts annual turnover across the world is about $1.2 billion.\n\nCompany was established in 2005,a leading brand of furniture and home product based in Japan’s Rakuten.Armonia have invested in manufacturing plants,huge warehouse,strong QC team and wellequipped furniture photography studio. ts annual turnover across the world is about $1.2 billion.'}</pre></div>
            </div>
          </div>
          {mds.moduleData.display_mode != '3' && <div className='company_box'>
            {display_mode == 1 && <div className={'infos'}>{bottom_imgs}</div>}
            {display_mode == 2 && <marquee className={'infos cf'} direction="up" ref='current' onMouseLeave={this.start.bind(this)} onMouseEnter={this.stop.bind(this)}>{itemLists}</marquee>}
          </div>}
        </div>

      </div>
    );
  }
};

export default IntlIcbuSmodDemo;      
