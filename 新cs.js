import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
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
    const fetch = openSdk.fetch('icbu.data.common.multilang.minisite', { bizId: gdc.bizId, productIds: [], strategyName: 'manuallySelect' });
  }

  render() {
    const { hasData, moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    var { url0, url1, url2, url3, url4, url5 } = mds.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parsInt(mds.moduleData.paddingBottom) : '';
    var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? 1 : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }
    var mk_w = mds.moduleData.mk_w ? mds.moduleData.mk_w : 1440;

    var imgInfo = ['https://img.alicdn.com/imgextra/i1/800803731/O1CN01PNUAOj1dQqGwJ9LLv_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i1/800803731/O1CN01CnwysF1dQqGwIsxz8_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i3/800803731/O1CN01ACz4Kq1dQqGzJ4oQ8_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i2/800803731/O1CN01cbauxe1dQqGuNqG5h_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i2/800803731/O1CN01xCWhfq1dQqGwJBgp3_!!800803731.jpg',
      'https://img.alicdn.com/imgextra/i3/800803731/O1CN01CPAsNy1dQqGuNrCGo_!!800803731.jpg'];


    var imgitem = [];
    for (var i = 0; i < 6; i++) {
      imgitem.push(<div className={'item item' + eval(i) + ' fl pic-style-' + mds.moduleData.animat}>
        <a target={target} href={eval('url' + i)}>
          <img className="trans03s" src={eval('mds.moduleData.img1440_' + i) ? eval('mds.moduleData.img1440_' + i) : imgInfo[i]} />
          <span></span>
        </a>
      </div>
      );
    }

    return (
      <div className={'wm1920 wmitem_show cf'} style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : '') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg ? mds.moduleData.mds.moduleData.mk_bg : '#ffffff', paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        {mds.moduleData.btitle && <div className='btitle' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle}</div>}
        {mds.moduleData.btitle && <div className='stitle' style={{ color: mds.moduleData.mk_titc2 }}>{mds.moduleData.stitle ? mds.moduleData.stitle : 'welcome to our shop'}</div>}

        <div className={'fl_box cf'}>
          {imgitem}
        </div>
      </div>
    );
  }
};

export default IntlIcbuSmodDemo;  