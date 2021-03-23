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

  render() {
    const { mds } = this.props.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var mk_tits = Number.parseInt(mds.moduleData.mk_tits || '');
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? 1 : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';

    const videoinfo = mds.moduleData.videoinfo || {}
    const videoId = videoinfo.videoId || 79271064;
    const poster = mds.moduleData.poster ? mds.moduleData.poster : "https://img.alicdn.com/imgextra/i4/800803731/O1CN015oCC5n1dQqKilxrdD_!!800803731.jpg";
    var video_dis = mds.moduleData.video_dis == null || mds.moduleData.video_dis == '1' ? '1' : '2';
    var demo = [{ "tit": "400,000", "ms": "Pieces monthly output" },
    { "tit": "3 Days", "ms": "For garment samples" },
    { "tit": "4 Weeks", "ms": "For bulk production" },
    { "tit": "1000Sqm", "ms": "Factory area is 1000 square meters" }];
    var imgs = mds.moduleData.imgs ? mds.moduleData.imgs : demo;
    var right_imgs = [];
    for (var i = 0; i < imgs.length; i++) {
      right_imgs.push(<div className='list' style={{ marginTop: i < 1 ? 0 : 25, backgroundColor: mds.moduleData.ct_bg, borderColor: mds.moduleData.ct_bc }}>
        <div className='tit' style={{ color: mds.moduleData.ct_titc }}>{imgs[i].tit || demo[i % 4].tit}</div>
        <div className='ms' style={{ color: mds.moduleData.ct_msc }}>{imgs[i].ms || demo[i % 4].ms}</div>
      </div>);
    }

    return (
      <div className='wm1920' style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : '') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>

        <div className='mk_box cf' >
          <div className='company_box'>
            {mds.moduleData.btitle && <div className='tit_box'>
              <div className='title' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle || 'Hot Selling'}</div>
              <div className='s_title' style={{ color: mds.moduleData.mk_titc2 }}>{mds.moduleData.stitle || 'with more than 10 years of factory production experience, professional design and quality inspection department, with its own brand. Can meet the needs of different customers.'}</div>
            </div>}
            <div className={'infos cf'} >{right_imgs}</div>
          </div>
          <div className='mk_bd cf' >
            {video_dis == '1' && <div className="video"><VideoPlayer videoId={videoId} muted={mds.moduleData.muted ? false : true} autoplay={mds.moduleData.autoplay ? true : false} controls={mds.moduleData.controls ? true : false} width='100%' height='100%' poster={poster} /></div>}
            {video_dis == '2' && <div className="video"><img src={poster} /></div>}
          </div>

        </div>

      </div>
    );
  }
};

export default IntlIcbuSmodDemo;      
