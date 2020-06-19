import { React, ReactDOM, openSdk } from '@alife/icbu-mod-lib'
import './index.scss'

const TitleDom = (p) => {
  if (p.titletype === 'text') {
    return (
      <div className='title-box'
        style={{
          backgroundImage: 'url(' + p.titletextbg + ')'
        }}
      >
        <div className='big-title'
          style={{
            color: p.bigtitlefontcolor,
            webkitTextStroke: p.bigtitletextstrokecolor + ' 3px',
          }}
        >
          {p.bigtitle.split('\n').map((item) =>
            <div>{item}</div>
          )}
        </div>
        {p.vicetitle &&
          <div className='vice-title'
            style={{
              color: p.vicetitlefontcolor,
              //backgroundColor:p.vicetitlebgcolor,
              backgroundImage: GradientBGC(p.vicetitlebgcolor, null, 'to right'),
              border: p.vicetitlebordercolor + ' 1px solid',
            }}
          >
            <div className='text'>
              {p.vicetitle}
            </div>
          </div>
        }
        {p.titlebtnshow &&
          <a className='title-btn'
            style={{
              backgroundImage: `url(${p.titlebtn})`
            }}
            href={p.titlebtnhref || undefined}
            target='_blank'
          ></a>
        }
        {p.titledesc &&
          <div className='title-desc'
            style={{
              color: p.titledesctextcolor,
            }}
          >
            {p.titledesc.split('\n').map((item) =>
              <div className='text-line'>
                {item}
              </div>
            )}
          </div>
        }
      </div>
    )
  } else if (p.titletype === 'pic') {
    return (
      <a className='title-box'
        style={{ backgroundImage: 'url(' + p.titlepic + ')' }}
        href={p.titlebtnhref || undefined}
        target='_blank'
      ></a>
    )
  } else {
    if (p.titletype)
      eval(`console.log('标题组件：','titletype既不是text也不是pic')`)
    return null
  }
}

//商品价格与最小订单
const Price = (p) => {
  const NoPrice = (
    <a href={p.url}
      target="_blank"
    >
      Get Latest Price
    </a>
  )
  return (
    <span style={p.style}>
      {p.ifshowfirst ?
        (p.first ? p.first : NoPrice) :
        (p.second ? p.second : NoPrice)
      }
    </span>
  )
}

class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      h: false
    }
  }
  render() {
    const p = this.props
    const h = this.state.h
    const { pStyle, pShow } = p
    const idx = p.item.idx_original
    let idx_style = p.itemLength < p.showNumSES + 1 ? p.idx + 1 : p.idx // 因为有轮播效果时首尾元素是因效果而存在，是不显示的；而无需轮播效果时，从首个元素开始就显示。所以有pIdx控制用第n个的样式
    if (p.itemLength <= 2)//数量少时居中
      idx_style++
    const { productImage, productUrl, productSubject, minOrderQuantity, fobPriceWithoutUnit, minOrderType, fobUnit, } = p.item

    let layoutData = {
      colundefined: [
        {
          pic: {
            width: 396,
            height: 396,
          },
          info: {
            show: true,
          }
        },
      ]
    }

    //这个区域选择元素用哪一套样式
    const layoutDataIdx = (idx % (layoutData['col' + p.rowcnt].length))
    const layoutDataType =/*idx===0?'firstLayout':*/'col' + p.rowcnt
    layoutData = layoutData[layoutDataType][layoutDataIdx]
    const canHide = {//控制元素是否可以隐藏
      idx: true,
      subject: true,
      price: true,
      subjectother: true,
      priceother: true,
    }

    //----------------  以下到return前都是封装的dom节点  ----------------
    //标题
    const subjectDom = (pShow.subjectshow || !canHide.subject) &&
      <a className="product-name"
        href={productUrl}
        target="_blank"
        style={{
          color: idx % 2 === 0 ? pStyle.subjectcolor : pStyle.subjectcoloreven || pStyle.subjectcolor,
          backgroundColor: pStyle.subjectbgcolor
        }}
      >
        {productSubject}
      </a>
    //有单位的价格
    const priceWithUnitDom = fobPriceWithoutUnit &&
      [
        fobPriceWithoutUnit,
        fobUnit &&
        <span className='unit'
          style={{
            color: pStyle.fobpriceunitcolor
          }}
        > /{fobUnit}</span>,
      ]
    //价格
    const priceDom = (pShow.fobpriceshow || (!canHide.price)) &&
      <div className={'fob-price'}
        style={{
          backgroundColor: pStyle.fobpricebgcolor,
          color: h ? pStyle.fobpricecolorhover || pStyle.fobpricecolor : pStyle.fobpricecolor, //idx%2===0?pStyle.fobpricecolor:pStyle.fobpricecoloreven||pStyle.fobpricecolor,
          backgroundImage: `url(${pStyle.fobpricebg})`,
        }}
      >
        {pShow.productpriceicoshow &&
          <i className='price-ico'
            style={{
              backgroundImage: `url(${pStyle.productpriceico})`,
              backgroundColor: pStyle.fobpricecolor,
            }}
          ></i>
        }
        {(pShow.fobpriceshow || (canHide.price)) ?
          <span>
            {pShow.pricepreshow && 'FOB: '}
            <Price ifshowfirst={pShow.fobpriceunitshow}
              first={priceWithUnitDom}
              second={fobPriceWithoutUnit}
              url={productUrl}
            />
          </span>
          :
          <Price ifshowfirst={false}
            second={false}
            url={productUrl}
          />
        }
      </div>
    //最小订单
    const minOrderDom = pShow.minordershow &&
      <div className='min-order'
        style={{
          color: h ? pStyle.minordercolorhover || pStyle.minordercolor : pStyle.minordercolor,//idx % 2 === 0 ? pStyle.minordercolor : pStyle.minordercoloreven || pStyle.minordercolor,
          border: pStyle.minorderbordercolor + ' 0px dashed',

        }}
      >
        <span className='num'
          style={{ backgroundColor: pStyle.minorderbgcolor }}
        >
          <Price ifshowfirst={false}
            second={minOrderQuantity}
            url={productUrl}
          />
        </span>
        {pShow.minorderunitshow && minOrderQuantity && minOrderType &&
          <span className='unit'>{minOrderType}</span>
        }
        <span className='suffix'
          style={{
            color: pStyle.minordersuffixcolor,
          }}
        > (min.order)</span>
      </div>
    //按钮
    const productBtnDom = pShow.productbtnshow &&
      <a className={'product-btn '}
        href={productUrl}
        target="_blank"
        style={{
          backgroundImage: `url('${idx % 2 === 0 ? pStyle.productbtn : pStyle.productbtneven || pStyle.productbtn}')`,
        }}
      ></a>
    //私有节点（节点中各内容可以单独设置）
    //（单产品中）第一个私有节点（如果需要更多私有节点就仿照第一个自己加）
    const privateDomShow_0 = PropInArr(pStyle.privatedom, idx, 'show_0', true)
    const privateDom_0 = privateDomShow_0 &&
      <div className='private-dom no0'
        style={{
          backgroundImage: `url(${PropInArr(pStyle.privatedom, idx, 'bg_0', pStyle.privatedom_def[idx % pStyle.privatedom_def.length].bg_0)})`,
          color: pStyle.privatedomtextcolor_0,
          borderBottom: `${pStyle.privatedombordercolor_0} 1px solid`,
        }}
      >
        <div>
          {PropInArr(pStyle.privatedom, idx, 'text_0', 'Best Item.' +
            (/*idx+1*/idx < 9 ? '0' + (idx + 1) : idx + 1)
          )}
        </div>
      </div>
    //描述段落
    const productDescDom = pShow.productdescshow &&
      <div className='product-desc'
        style={{
          color: pStyle.productdesctextcolor,
        }}
      >
        {p.productdesc}
      </div>
    //信息栏里的装饰
    const productInfoDecorateDom = pShow.productinfodecorateshow &&
      <div className='productinfo-decorate'
        style={{ backgroundImage: `url(${idx % 2 === 0 ? pStyle.productinfodecorate : pStyle.productinfodecorateeven || pStyle.productinfodecorate})` }}
      ></div>
    //信息栏外的装饰
    const productDecorateDom = pShow.productdecorateshow &&
      <div className='product-decorate'
        style={{
          backgroundImage: `url(${
            idx % 2 === 0 ? pStyle.productdecorate : pStyle.productdecorateeven || pStyle.productdecorate
            })`
        }}
      ></div>
    //产品分割线
    const productLineDom = pShow.productlineshow && pShow.subjectshow && pShow.minordershow &&
      <div className='product-line'
        style={{
          backgroundColor: pStyle.productlinebgcolor,
        }}
      ></div>

    return (
      <div className={
        'product no' + idx_style +
        ' colnum-' + p.rowcnt +
        (layoutDataType === 'firstLayout' ? ' first-layout' : '')
      }
        style={{
          marginBottom: p.item.lastRow && 0,
          ...layoutData,
          backgroundImage: pStyle.itembg && `url('${idx % 2 === 0 ? pStyle.itembg || pStyle.itembgeven : pStyle.itembgeven/*h ? pStyle.itembghover || pStyle.itembg : pStyle.itembg*/}')`,

          border: pStyle.itembordercolor + ' 1px solid',
        }}
        //不需要jsx动效只需要注释掉下面两行
        onMouseEnter={() => this.setState({ h: true })}
        onMouseLeave={() => this.setState({ h: false })}
      >
        <div
          className="item-wrap"
          style={{ backgroundColor: pStyle.itembgcor }}
        >
          <a className='pic-positionwrap'
            href={productUrl}
            target="_blank"
            style={{
              border: pStyle.picbordercolor && `${h ? pStyle.picbordercolorhover || pStyle.picbordercolor : pStyle.picbordercolor} 0px solid`,
            }}
          >
            <div className='pic-wrap'//把这层当作图片操作
              style={{
                width: layoutData.pic.width,
                height: layoutData.pic.height,
              }}
            >
              <img className='pic'
                src={productImage.url[PicSize(layoutData.pic.width, layoutData.pic.height)]}
              />
            </div>
            <div className="maskq">
              <span>TOP</span>
              <span>
                {PropInArr(pStyle.privatedom, idx, 'text_0', '' +
                  (/*idx+1*/idx < 9 ? '0' + (idx + 1) : idx + 1)
                )}</span>
            </div>
          </a>
          {layoutData.info.show && (privateDomShow_0 || pShow.fobpriceshow || pShow.subjectshow || pShow.minordershow) &&
            <div className="product-info  clear"
              style={{
                backgroundColor: idx % 2 === 0 ? pStyle.msgbgcolor : pStyle.msgbgcoloreven || pStyle.msgbgcolor,
                ...layoutData.info,
                backgroundImage: pStyle.msgbg && ('url(' + pStyle.msgbg + ')'),
                borderTop: pStyle.itembordercolor + ' 1px solid',
              }}
            >
              {subjectDom}
              {priceDom}
              {minOrderDom}
            </div>
          }
          {(idx_style < 1 || idx_style > p.showNumSES) && p.itemLength > p.showNumSES && <div className='mask'></div>}
        </div>
        {pStyle.picmask &&
          <div className='pic-mask'
            style={{
              backgroundImage: `url(${pStyle.picmask})`,
            }}
          ></div>
        }
      </div>
    )
  }
}

class BasicComponent extends React.Component {
  constructor(props) {
    super(props)
    const mds_used = this.props.moduleData.mds.moduleData
    this.state = {
      idxSES: 0,//就是idx为1的SE轮播元素的sliderKey值
      showNumSES: 3,//SE轮播显示元素数量

      pageBtnH_l: false,
      pageBtnH_r: false,
    }
  }
  //SingleElements轮播中给翻页函数调用的  根据新的sliderIdxAct修改sliderArr的函数
  PageBtnSES(num) {
    const sES_old = this.state.sES
    const sESAllItem = this.state.sESAllItem
    let sES_new = []
    let idxSES_new = NumLessThan(this.state.idxSES + num, sESAllItem.length - 1)

    //计算
    for (let i = 0; i < sES_old.length; i++) {
      sES_new[i] = sESAllItem[NumLessThan(i + idxSES_new - 1, sESAllItem.length - 1)]
    }

    this.setState({
      sES: sES_new,
      idxSES: idxSES_new,
    })
  }
  componentWillMount() {
    const { mds, gdc } = this.props.moduleData
    const mds_used = mds.moduleData
    let sES_original = []
    for (let i = 1; i <= (mds_used.productCnt || 7); i++) {
      sES_original[i - 1] = {
        "productImage": {
          "exist": true,
          "url": {
            "x120": "https://img.alicdn.com/imgextra/i3/3377521498/TB2dq_5n29TBuNjy0FcXXbeiFXa_!!3377521498.jpg",
            "x220": "https://img.alicdn.com/imgextra/i3/3377521498/TB2MwbEn3mTBuNjy1XbXXaMrVXa_!!3377521498.jpg",
            "x350": "https://img.alicdn.com/imgextra/i2/3377521498/TB22G1OeiMnBKNjSZFzXXc_qVXa_!!3377521498.jpg",
            "x640": "https://img.alicdn.com/imgextra/i3/3377521498/TB27OmFeiMnBKNjSZFCXXX0KFXa_!!3377521498.jpg",
            "original"/*750宽高*/: "https://img.alicdn.com/imgextra/i4/3377521498/TB2OFPVjOOYBuNjSsD4XXbSkFXa_!!3377521498.jpg",
            "x960": "https://img.alicdn.com/imgextra/i3/3377521498/TB2j330r1uSBuNjSsziXXbq8pXa_!!3377521498.jpg",
          }
        },
        "fobPrice": "US $0.0 - 0.0 / Acres",
        "productId": "0",
        "fobPriceWithoutUnit": "US $0.0 - 0.0",
        "minOrderQuantity": "0",
        "productUrl": undefined,
        "minOrderType": "Acres",
        "productSubject": "Product subject is not set. Product subject is not set. Product subject is not set.",
        "moq": "100 Acres",
        "fobUnit": "Acres"
      }
    }
    const fetch = openSdk.fetch('icbu.data.product.list', { bizId: gdc.bizId, strategyName: mds.selecttype, countNumber: mds.productCnt, products: mds.productids })
    fetch.then((data) => {
      if (data.success) {
        sES_original = data.result
      }
    })
    //自动模式自定义产品图（补丁）
    if (mds_used.selecttype === 'manuallySelect' && mds_used.amprouductpicarray) {
      for (let i = 0; i < sES_original.length && i < mds_used.amprouductpicarray.length; i++) {
        const prouductPic = sES_original[i].productImage.url
        const privateProuductPic = mds_used.amprouductpicarray[i]
        if (privateProuductPic !== '')
          for (let attr in prouductPic)
            prouductPic[attr] = privateProuductPic
      }
    }

    const sESLen_original = sES_original.length
    const showNumSES = this.state.showNumSES
    let sESAllItem = [...sES_original]
    const slideWhenFewer = false//控制数量少时是否倍增至轮播数量

    if (sESLen_original <= showNumSES + 2) { // SE轮播传入数组长度≤ “显示元素数量”+2 时进行倍增（不倍增的话通过原数组提取的sliderKey会重复，+2个不加的话倒播有问题）
      const multiplier = slideWhenFewer || sESLen_original > showNumSES ?
        Math.ceil((showNumSES + 3) / sESLen_original)
        : 1
      for (let i = 0; i < multiplier * sESLen_original; i++) {
        sESAllItem[i] = {
          ...sESAllItem[i % sESLen_original],
          sliderKey: i,
          idx_original: i % sESLen_original,
        }
      }
    } else { // SE轮播传入数组长度> “显示元素数量”+2 时加上sliderKey
      for (let i = 0; i < sESLen_original; i++) {
        sESAllItem[i] = {
          ...sESAllItem[i],
          sliderKey: i,
          idx_original: i % sESLen_original,
        }
      }
    }
    //根据装有产品的数组生成轮播所用数组
    let sES = []
    if (sESAllItem.length > showNumSES) {
      for (let i = 0; i < showNumSES + 2; i++) {
        if (i === 0)
          sES[0] = { ...sESAllItem[sESAllItem.length - 1] } // 这里sES_original.length不能改成sESLen_original，因为sES_original有可能在上个条件语句进行了倍增
        else if (i < sESAllItem.length)
          sES[i] = sESAllItem[i - 1]
      }
    } else {
      sES = [...sESAllItem]
    }
    this.setState({ sES, sESAllItem, sES_original })
  }
  render() {
    const mds_used = this.props.moduleData.mds.moduleData
    const pStyle = {
      //产品背景色+边框色
      subjectbgcolor: mds_used.subjectbgcolor,
      subjectbgcolorhover: mds_used.subjectbgcolorhover,
      minorderbgcolor: mds_used.minorderbgcolor,
      minorderbordercolor: mds_used.minorderbordercolor || '#fff',
      fobpricebgcolor: mds_used.fobpricebgcolor,
      productlinebgcolor: mds_used.productlinebgcolor,
      productmultiplelinebgcolor: mds_used.productmultiplelinebgcolor,
      privatedombgcolor_0: mds_used.privatedombgcolor_0,
      privatedombgcolorhover_0: mds_used.privatedombgcolorhover_0,
      privatedombordercolor_0: mds_used.privatedombordercolor_0,
      msgbgcolor: mds_used.msgbgcolor,
      msgbgcoloreven: mds_used.msgbgcoloreven,
      itembgcolor: mds_used.itembgcolor,
      itembordercolor: mds_used.itembordercolor,
      picbordercolor: mds_used.picbordercolor,
      picbordercolorhover: mds_used.picbordercolorhover,
      //产品文字颜色
      subjectcolor: mds_used.subjectcolor || '#fff',
      subjectbgcolor: mds_used.subjectbgcolor || '#A10446',
      itembgcor: mds_used.itembgcor || '#c80758',
      subjectcoloreven: mds_used.subjectcoloreven,
      subjectcolorother: mds_used.subjectcolorother,
      subjectcolorhover: mds_used.subjectcolorhover,
      fobpricecolor: mds_used.fobpricecolor || '#fff',
      fobpricecoloreven: mds_used.fobpricecoloreven,
      fobpricecolorother: mds_used.fobpricecolorother,
      fobpricecolorhover: mds_used.fobpricecolorhover,
      fobpriceunitcolor: mds_used.fobpriceunitcolor,
      minordercolor: mds_used.minordercolor || '#fff',
      minordercoloreven: mds_used.minordercoloreven,
      minordercolorother: mds_used.minordercolorother,
      minordercolorhover: mds_used.minordercolorhover,
      minordersuffixcolor: mds_used.minordersuffixcolor,
      productdesctextcolor: mds_used.productdesctextcolor,
      privatedomtextcolor_0: mds_used.privatedomtextcolor_0 || '#fff',
      //产品用的图片
      picmask: mds_used.picmask || 'https://img.alicdn.com/imgextra/i3/2032829039/O1CN01QQ0ZK42GdudzCFSyR_!!2032829039.png',
      productpriceico: mds_used.productpriceico,
      fobpricebg: mds_used.fobpricebg,
      minorderbg: mds_used.minorderbg,
      productbtn: mds_used.productbtn || 'https://img.alicdn.com/imgextra/i3/3377521498/O1CN011Mw7lXU8N7HsXZt_!!3377521498.png',
      productbtneven: mds_used.productbtneven || 'https://img.alicdn.com/imgextra/i4/3377521498/O1CN011Mw7lW6cDKJrvoU_!!3377521498.png',
      productbtnhover: mds_used.productbtnhover,
      productdecorate: mds_used.productdecorate,
      productdecorateeven: mds_used.productdecorateeven,
      productinfodecorate: mds_used.productinfodecorate || 'https://img.alicdn.com/imgextra/i1/3377521498/O1CN011Mw7lXU7IfYcviV_!!3377521498.png',
      productinfodecorateeven: mds_used.productinfodecorateeven || 'https://img.alicdn.com/imgextra/i3/3377521498/O1CN011Mw7lXU8htJDdSO_!!3377521498.png',
      msgbg: mds_used.msgbg,
      itembg: mds_used.itembg,
      itembghover: mds_used.itembghover,
      itembgeven: mds_used.itembgeven,
      //非直接样式内容
      productidxprefix: mds_used.productidxprefix,
      productpictype: mds_used.productpictype,
      privatedom: mds_used.privatedom || [],
      privatedom_def: [
        {
          bg_0: 'https://img.alicdn.com/imgextra/i1/3377521498/O1CN011Mw7m9y64Ltcexs_!!3377521498.png', text_0: '',
        },
      ],
    }
    const pShow = {
      //产品的显隐
      productidxshow: mds_used.productidxshow,
      subjectshow: mds_used.subjectshow,
      subjectshowother: mds_used.subjectshowother,
      minordershow: mds_used.minordershow,
      minorderunitshow: mds_used.minorderunitshow,
      fobpriceshow: mds_used.fobpriceshow,
      fobpriceunitshow: mds_used.fobpriceunitshow,
      pricepreshow: mds_used.pricepreshow,
      productpriceicoshow: mds_used.productpriceicoshow,
      productdescshow: mds_used.productdescshow,
      productbtnshow: mds_used.productbtnshow,
      productlineshow: mds_used.productlineshow,
      productsingleimgshow: mds_used.productsingleimgshow,
      productdecorateshow: mds_used.productdecorateshow,
      productinfodecorateshow: mds_used.productinfodecorateshow,
    }
    //当“私有节点”表单组件的长度为1时，将这一个子项的内容应用于所有“私有节点”（不使用私有节点试需要将下面注释掉）
    if (pStyle.privatedom.length === 1) {
      for (let i = 0; i < this.state.sES_original.length; i++) {
        pStyle.privatedom[i] = pStyle.privatedom[0]
      }
    }
    return (
      <div className="productlist-mod">
        <div className='ms-full' style={{
          paddingBottom: mds_used.modmaring,
          backgroundImage: `url(${mds_used.modbg}),${GradientBGC(mds_used.modbgcolor, null, 'to right')}`,
        }}>
          <div className={'mod-bd'} style={{
            //paddingTop:mds_used.titletype === 'none'&&22,
            backgroundImage: mds_used.bdbg && `url(${mds_used.bdbg})`,
            backgroundColor: mds_used.bdbgcolor,
          }}>
            {mds_used.titletype !== 'none' &&
              <TitleDom
                titletype={mds_used.titletype}
                bigtitle={mds_used.bigtitle || 'HOT RECOMMENDED'}
                // vicetitle={mds_used.vicetitle }
                // titledesc={mds_used.titledesc}
                bigtitlefontcolor={mds_used.bigtitlefontcolor || '#20b559'}
                // vicetitlefontcolor={mds_used.vicetitlefontcolor }
                // titledesctextcolor={mds_used.titledesctextcolor }
                /*titlebtnshow={mds_used.titlebtnshow}
                titlebtnhref={mds_used.titlebtnhref}
                titlebtn={mds_used.titlebtn ||
                ''}*/
                titletextbg={mds_used.titletextbg ||
                  'https://img.alicdn.com/imgextra/i4/3377521498/O1CN011Mw7lY3Kn4jgkZA_!!3377521498.png'}
                titlepic={mds_used.titlepic ||
                  'https://img.alicdn.com/imgextra/i4/3377521498/O1CN011Mw7lXU8htSl8OT_!!3377521498.png'}
              />
            }
            <div className={'product-wrap ms-center clear'}
            >
              {this.state.sES.map((item, idx) =>
                <Product
                  key={item.sliderKey}
                  itemLength={this.state.sES.length}
                  showNumSES={this.state.showNumSES}
                  rowcnt={mds_used.rowcnt}
                  {...{ item, idx, pStyle, pShow }}
                />
              )}
              {this.state.sESAllItem.length > this.state.showNumSES &&
                [
                  <div className='left-arrow-wrap'
                    onClick={() => this.PageBtnSES(-1)}
                    onMouseEnter={() => this.setState({ pageBtnH_l: true })}
                    onMouseLeave={() => this.setState({ pageBtnH_l: false })}
                  >
                    <i className='arrow'
                      style={{
                        backgroundImage: `url(${this.state.pageBtnH_l ?
                          mds_used.pagebtnhover || 'https://img.alicdn.com/imgextra/i3/3377521498/O1CN011Mw7mAaWARJngUn_!!3377521498.png'
                          :
                          mds_used.pagebtn || 'https://img.alicdn.com/imgextra/i4/3377521498/O1CN011Mw7mAImpifd0gi_!!3377521498.png'
                          })`
                      }}
                    ></i>
                  </div>,
                  <div className='right-arrow-wrap'
                    onClick={() => this.PageBtnSES(1)}
                    onMouseEnter={() => this.setState({ pageBtnH_r: true })}
                    onMouseLeave={() => this.setState({ pageBtnH_r: false })}
                  >
                    <i className='arrow'
                      style={{
                        backgroundImage: `url(${this.state.pageBtnH_r ?
                          mds_used.pagebtnhover || 'https://img.alicdn.com/imgextra/i3/3377521498/O1CN011Mw7mAaWARJngUn_!!3377521498.png'
                          :
                          mds_used.pagebtn || 'https://img.alicdn.com/imgextra/i4/3377521498/O1CN011Mw7mAImpifd0gi_!!3377521498.png'
                          })`
                      }}
                    ></i>
                  </div>
                ]
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicComponent

//----------------  静态函数  ----------------

//渐变背景色。传入参数为：以“,”分割的颜色、以“,”分割的位置、方向（角度或'to'加上下左右）
const GradientBGC = (color, position, direction) => {
  if (!color)
    return `linear-gradient(transparent,transparent)`//为了能在background-image里使用，就算传入单色值也处理成两个相同渐变色
  const color_arr = color.split(',')
  if (color_arr.length === 1)
    return `linear-gradient(${color},${color})`
  let position_arr = []
  if (position)
    position_arr = position.split(',')
  let gradient_arr = []
  color_arr.map((item, idx) =>
    gradient_arr[idx] = `${color_arr[idx]}${position_arr[idx] ? ' ' + position_arr[idx] : ''}`
  )
  let gradient = ''
  for (let i = 0; i < gradient_arr.length; i++) {
    gradient += gradient_arr[i] + (i !== gradient_arr.length - 1 ? ',' : '')
  }
  return `linear-gradient(${direction ? direction + ',' : ''}${gradient})`
}

//对index有可能超过length的对象数组 取属性值
const PropInArr = (arr, index, prop, defProp) => {
  if (arr)
    return arr[index] && arr[index][prop] !== '' && arr[index][prop] !== undefined ?//前面加个arr[index]确保不会读取到超出长度的数组元素的属性，不然会阻断程序。 之所以后面要判断是否全等undefined和全等空字符串，是因为表单里有可能用checkbox
      arr[index][prop]
      :
      defProp
  return defProp
}

//计算出应选产品图的尺寸
const PicSize = (width, height) => {
  const maxLength = width > height ? width : height
  switch (true) {
    case maxLength <= 120:
      return 'x120'
    case 120 < maxLength && maxLength <= 220:
      return 'x220'
    case 220 < maxLength && maxLength <= 350:
      return 'x350'
    case 350 < maxLength && maxLength <= 640:
      return 'x640'
    case 640 < maxLength && maxLength <= 750:
      return 'original'
    default:
      return 'x960'
  }
}

//输入16进制的颜色值和透明度，返回rgba格式的颜色值
const Color16ToRgba = (color16, opacity) => {
  const color16_eachCharacter = color16.toString().split('').splice(1, 6)
  let color16_eachColor = []

  const Output = () => {
    return `rgba(${
      Number.parseInt(color16_eachColor[0], 16)
      },${
      Number.parseInt(color16_eachColor[1], 16)
      },${
      Number.parseInt(color16_eachColor[2], 16)
      },${opacity})`
  }

  switch (color16_eachCharacter.length) {
    case 3:
      for (let i = 0; i < 3; i++) {
        color16_eachColor[i] = color16_eachCharacter[i] + color16_eachCharacter[i]
      }
      return Output()
    case 6:
      for (let i = 0; i < 3; i++) {
        color16_eachColor[i] = color16_eachCharacter[i * 2] + color16_eachCharacter[i * 2 + 1]
      }
      return Output()
    default:
      eval("console.error('请输入16进制的颜色值与0到1间的透明度')")
  }
}

//给出区间，让num在其中循环（2个实参时：num<0时返回addMax+num+1，num>addMax时返回num-addMax-1。3个实参时：num<0时返回smallToNum+num+1，num>addMax时返回num-addMax-1）
const NumLessThan = (num, addMax, smallToNum) => {
  if (num < 0) {
    return smallToNum || addMax + num + 1
  } else if (num > addMax) {
    return num - addMax - 1
  }
  return num
}