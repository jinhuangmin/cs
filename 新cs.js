import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
import './index.scss';

class IntlIcbuSmodDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      curr: '0'
    }
  }

  componentWillMount() {
    const moduleData = this.props.moduleData;
    const { mds, gdc } = moduleData;
    //如果是从API上取数据
    const fetch = openSdk.fetch('icbu.data.common.minisite', { bizId: gdc.bizId, productIds: [60738071807, 60736303506], strategyName: 'manuallySelect' });
    fetch.then((data) => {
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
    var mk_tits = mds.moduleData.mk_tits ? Number.parseInt(mds.moduleData.mk_tits) : '';
    var paddingTop = mds.moduleData.paddingTop ? Number.parseInt(mds.moduleData.paddingTop) : '';
    var paddingBottom = mds.moduleData.paddingBottom ? Number.parseInt(mds.moduleData.paddingBottom) : '';
    if (mds.moduleData.target === true) {
      var target = "_blank";
    } else {
      var target = "_self";
    }
    /* 模块背景图片设置*/
    var mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? '1' : '2';
    var mk_bgXg = mds.moduleData.mk_bgXg == null || mds.moduleData.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';

    var demo = [{ "img": "https://img.alicdn.com/imgextra/i4/800803731/O1CN015Rd7Kz1dQqJrgYiAt_!!800803731.jpg" },
    { "img": "https://img.alicdn.com/imgextra/i4/800803731/O1CN01DN1wb11dQqJzeBgi1_!!800803731.jpg" },
    { "img": "https://img.alicdn.com/imgextra/i2/800803731/O1CN01W5RPEY1dQqK4Uzv00_!!800803731.jpg" }];
    var item_info = mds.moduleData.item_info ? mds.moduleData.item_info : demo;
    return (
      <div className={'wm1920'} style={{ background: 'url("' + (mk_bgDis == '1' ? (mds.moduleData.mk_bgImg ? mds.moduleData.mk_bgImg : '') : '') + '") center top no-repeat ' + mk_bgXg, backgroundColor: mds.moduleData.mk_bg, paddingTop: paddingTop, paddingBottom: paddingBottom }}>
        {mds.moduleData.btitle && <div className='tit_box'>
          <div className='title' style={{ color: mds.moduleData.mk_titc, fontFamily: mds.moduleData.mk_titf, fontSize: mk_tits }}>{mds.moduleData.btitle}</div>
          <div className='title_icon'><img src={mds.moduleData.title_icon ? mds.moduleData.title_icon : 'https://img.alicdn.com/imgextra/i4/800803731/O1CN01mTeoxD1dQqJHxQumU_!!800803731.png'} /></div>
        </div>}

        <div className="mk-bd slide">
          <div className="panles">
            <div className="pic trans03s" style={{background: "url('https://sc01.alicdn.com/kf/HTB1H9F4B3KTBuNkSne1q6yJoXXak.jpg') no-repeat center center"}}></div>
            <div className="pic trans03s" style={{background: "url('https://sc01.alicdn.com/kf/HTB15Q.ZBIyYBuNkSnfoq6AWgVXa1.jpg') no-repeat center center"}}></div>
            <div className="pic trans03s" style={{background: "url('https://sc01.alicdn.com/kf/HTB1ck_Yc6fguuRjSspkq6xchpXaX.jpg') no-repeat center center"}}></div>
            <div className="pic trans03s" style={{background: "url('https://sc01.alicdn.com/kf/HTB1MmWxKh9YBuNjy0Ffq6xIsVXaI.jpg') no-repeat center center"}}></div>
            <div className="pic trans03s show" style={{background: "url('https://sc01.alicdn.com/kf/HTB1zF81pLImBKNjSZFlq6A43FXau.jpg') no-repeat center center"}}></div>
          </div>

          <div className="panle">
            <a target="_blank" className="item">
              <div className="info">
                <div className="line"></div>
                <p className="title">Fashion Modern</p>
                <div className="buy"><span className="zm">&gt;</span><span className="fm">&gt;</span></div>
              </div>
            </a>
            <a target="_blank" className="item">
              <div className="info">
                <div className="line"></div>
                <p className="title">Northern New</p>
                <div className="buy"><span className="zm">&gt;</span><span className="fm">&gt;</span></div>
              </div>
            </a>
            <a target="_blank" className="item">
              <div className="info">
                <div className="line"></div>
                <p className="title">Simple Fashion</p>
                <div className="buy"><span className="zm">&gt;</span><span className="fm">&gt;</span></div>
              </div>
            </a>
            <a target="_blank" className="item">
              <div className="info">
                <div className="line"></div>
                <p className="title">Extravagant</p>
                <div className="buy"><span className="zm">&gt;</span><span className="fm">&gt;</span></div>
              </div>
            </a>
            <a target="_blank" className="item hover">
              <div className="info">
                <div className="line"></div>
                <p className="title">Korean Pastoral</p>
                <div className="buy"><span className="zm">&gt;</span><span className="fm">&gt;</span></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default IntlIcbuSmodDemo;
