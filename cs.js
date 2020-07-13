class Module extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: []
		}
	}
	componentWillMount() {
		const { gdc, mds } = this.props;
		const mdc = mds.moduleData;
		// gdc.bizId   测试数据ID:200042360(用于模块调试阶段获取测试账号店铺信息); 
		const data = openSdk.get('aliexpress.api.findProduct', { bizId: gdc.bizId });
		this.setState({
			result: data.success ? data.result : []
		})
	}
	// 跳转埋点
	openUrl(url) {
		const params = { url: url };
		this.props.pageUtils.goTargetUrl(params);
	}

  render() {
    const { gdc, mds } = this.props;
    const mdc = mds.moduleData;
    const rthis = this;
    let yhq_link = 'https://m.ru.aliexpress.com/coupon/list.html?sellerId=' + gdc.bizId
    let mk_bg = mdc.mk_bg || '#f6f6f6';
    let yhq_bg = mdc.yhq_bg || '#3961f8';
    let yhq_c = mdc.yhq_c || '#ffffff';
    let yhq_btn = (mdc.yhq_btn && mdc.yhq_btn.url) || 'https://ae01.alicdn.com/kf/H9ae659f71f0745f2b740d653749c93f2k.png';
    let paddingTop = Number.parseInt(mdc.paddingTop || '20');
    let paddingBottom = Number.parseInt(mdc.paddingBottom || '20');
    var demo = [
      { "value": "3", "tj": "Orders over $100" },
      { "value": "5", "tj": "Orders over $350" },
      { "value": "10", "tj": "Orders over $500" },
      { "value": "20", "tj": "Orders over $800" }];
    var infos = mdc.infos ? mdc.infos : demo;
    var yhq = [];
    for (let i = 0; i < infos.length; i++) {
      yhq.push(<View onClick={function () { rthis.openUrl(infos[i].url ? infos[i].url : yhq_link) }} style={[styles.yhq_box, { marginTop:20, marginLeft: 20, backgroundColor: yhq_bg }]}>
        <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: 500, maxWidth: 50, height: 60, lineHeight: 20, color: yhq_c }}>{mdc.prefix ? mdc.prefix : '$'}</Text>
        <Text numberOfLines={1} style={{ fontSize: 80, fontWeight: 700, maxWidth: 110, height: 70, lineHeight: 70, marginRight: 10, color: yhq_c }}>{infos[i].value ? infos[i].value : demo[i % 4].value}</Text>
        <View>
          <Text numberOfLines={1} style={[styles.yhq_tj, { width: 200, fontSize: 18, height: 20, lineHeight: 20, color: yhq_c }]} data-local={`${mdc.widgetId}_infos[${i}].tj`}>{infos[i].tj ? infos[i].tj : demo[i % 4].tj}</Text>
          <Image style={{ width: 160, height: 35, marginTop: 10 }} source={{ uri: yhq_btn }} />
        </View>
      </View>
      )
    }
    return (
      <View style={[styles.center750, { paddingTop: paddingTop, paddingBottom: paddingBottom, backgroundColor: mk_bg }]}>
        <View style={styles.wmbox}>{yhq}</View>
      </View>
    );
  }
};