import { React, ReactDOM, openSdk, Button, Slider } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auto: true
    }
  }
  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    const fetch = openSdk.fetch('icbu.data.common.minisite', { bizId: gdc.bizId, productIds: [], strategyName: 'manuallySelect' });
  }
  render() {
    const { moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? 1 : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }
    var demo = [{ "img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01vzEkyf1dQqJyQmAKE_!!800803731.jpg", "tit": "PRODUCT VIDEO", "ms": "Our product refer to construction,road construction,ports,and petroleum pipeline and other mechanical equipments" },
    { "img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01vzEkyf1dQqJyQmAKE_!!800803731.jpg", "tit": "PRODUCT VIDEO", "ms": "Our product refer to construction,road construction,ports,and petroleum pipeline and other mechanical equipments" },
    { "img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01vzEkyf1dQqJyQmAKE_!!800803731.jpg", "tit": "PRODUCT VIDEO", "ms": "Our product refer to construction,road construction,ports,and petroleum pipeline and other mechanical equipments" },
    { "img": "https://img.alicdn.com/imgextra/i3/800803731/O1CN01vzEkyf1dQqJyQmAKE_!!800803731.jpg", "tit": "PRODUCT VIDEO", "ms": "Our product refer to construction,road construction,ports,and petroleum pipeline and other mechanical equipments" }];
    var infos = mds.moduleData.infos ? mds.moduleData.infos : demo;
    var list_info = [];
    for (var i = 0; i < infos.length; i++) {
      list_info.push(<li>
        <div className="video">
          <video src="https://cloud.video.alibaba.com/play/u/2153292369/p/1/e/6/t/1/d/hd/50106144336.mp4" controls="" loop="" autoplay="" muted="" poster="https://s.alicdn.com/@sc01/kf/H964a35af96bd40a087740b628c976fdap.jpg"></video>
        </div>
        <a className="info" target={target} href={infos[i].url}>
          <div className="jt"></div>
          <img className="image" src={infos[i].img ? infos[i].img : demo[i % 4].img} />
          <div className="detail">
            <p className="title">{infos[i].tit ? infos[i].tit : demo[i % 4].tit}</p>
            <p className="ms">{infos[i].ms ? infos[i].ms : demo[i % 4].ms}</p>
            <div className="btn trans05s">VIEW MORE</div>
          </div>
        </a>
      </li>);
    }
    return (<div className='wm1920' style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : '') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg ? mds.moduleData.mk_bg : '#F5F5F5', paddingTop: paddingTop, paddingBottom: paddingBottom }}>
      {mds.moduleData.btitle && <div className='tit_box'>
        <div className='title' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle}</div>
        <div className='title_icon'><img src={mds.moduleData.title_icon ? mds.moduleData.title_icon : 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01hjoxGF1dQqJLSQEon_!!800803731.png'} /></div>
      </div>}
      <ul className="mk-bd proVideo">{list_info}</ul>
    </div>
    );
  }
};

export default IntlIcbuSmodDemo;     
