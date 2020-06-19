import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
	import './index.scss';
  
  
  const TitleDom = (p) => {
    if (true) {
      return (<div style={{fontSize:48,color:'#ff0000'}}>{JSON.stringify(p)}</div>);
    }
  }
	class IntlIcbuSmodDemo extends React.Component {
	
	  constructor(props) {
	    super(props);
	    this.state = {
	      hasData: false
	    }
	  }
	
	  componentWillMount() {
	    const moduleData = this.props.moduleData;
	    const { mds, gdc }  = moduleData;
	    //如果是从API上取数据
	    const fetch = openSdk.fetch('icbu.data.common.minisite', {bizId:gdc.bizId,productIds:[60738071807,60736303506],strategyName:'manuallySelect'});
	    fetch.then((data)=>{
	    })
	
	  }
	
	  render() {
	    const {hasData, moduleTitle} = this.state;
	    const {mds} = this.props.moduleData;
	    return (
	      <div className={'module-demo'}>
	        <div className={'big-title'}>模块{JSON.stringify(mds)}</div>
          <TitleDom title={mds.moduleData.title}/>
	      </div>
	    );
	  }
	};
	
	export default IntlIcbuSmodDemo;
	