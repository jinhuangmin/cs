import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
import './index.scss';
//4455
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
    const { hasData, moduleTitle } = this.state;
    const { mds } = this.props.moduleData;
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }

    var demo = [{ 'img': 'https://img.alicdn.com/imgextra/i4/800803731/O1CN01cbUAfe1dQqDsUCzUC_!!800803731.jpg' },
    { 'img': 'https://img.alicdn.com/imgextra/i4/800803731/O1CN01jUmion1dQqDuEwhPs_!!800803731.jpg' },
    { 'img': 'https://img.alicdn.com/imgextra/i3/800803731/O1CN01Qkf7Xt1dQqDuy3bdq_!!800803731.jpg' },
    { 'img': 'https://img.alicdn.com/imgextra/i2/800803731/O1CN01dabLLO1dQqDnKUcMF_!!800803731.jpg' },
    { 'img': 'https://img.alicdn.com/imgextra/i4/800803731/O1CN017Fv51z1dQqDw3YuhM_!!800803731.jpg' }];

    var zbabylist = [];
    var infos = mds.moduleData.infos ? mds.moduleData.infos : demo;
    for (var i = 0; i < infos.length; i++) {
      zbabylist.push(<div className={'img_box pic-style-' + mds.moduleData.animat} >
        <a target={target} href={infos[i].url ? infos[i].url : ''}></a>
        <img src={infos[i].img ? infos[i].img : demo[i % 5].img} />
        <span></span>
      </div>);
    }
    return (
      <div className={'wm1920'} style={{ backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        {mds.moduleData.btitle && <div className='b_title' style={{ background: 'url("' + (mds.moduleData.mk_titBg ? mds.moduleData.mk_titBg : 'https://img.alicdn.com/imgextra/i1/800803731/O1CN01HCUCGl1dQqDv9pd4t_!!800803731.png') + '") center top no-repeat', color: (mds.moduleData.mk_titc), fontFamily: (mds.moduleData.mk_titf) }}>{mds.moduleData.btitle}</div>}

        <div className={'info_box cf'}>
          <div className={'fl_box cf'} >{zbabylist}</div>
        </div>
      </div>
    );
  }
};

export default IntlIcbuSmodDemo;
