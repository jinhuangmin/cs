var killErrors = function (r) {
  return true
}
window.onerror = null
window.onerror = killErrors
require.config({
  urlArgs: 'v=' + new Date().getTime(),
  paths: {
    layer: 'layer/layer',
    _ready: 'rootjs/_ready',
    index: 'rootjs/index',
    jquery: 'rootjs/jquery',
    taoAPP: 'rootjs/taoAPP',
    appShow: 'rootjs/appShow',
    appEdit: 'rootjs/appEdit',
    appLayer: 'rootjs/appLayer',
    Sortable: 'rootjs/Sortable',
    laydate: 'laydate/laydate',
    _localstorage_: 'rootjs/localStorage',
    'jquery.wdragUI': 'rootjs/wdragUI',
    'jquery.imgCut': 'rootjs/bg_region',
    'jquery.ui': 'rootjs/jquery-ui.min',
    'jquery.drop': 'rootjs/drop-ui',
    'jquery.cooike': 'rootjs/cooike',
    'jquery.spectrum': 'takecolor/spectrum',
    'jquery.smartMenu': 'smartMenu/smartMenu',
    'jquery.getImages': 'tao_power/getImages',
  },
  shim: {
    'jquery.wdragUI': ['jquery'],
    'jquery.ui': ['jquery'],
    'jquery.drop': ['jquery'],
    'jquery.cooike': ['jquery'],
    'jquery.spectrum': ['jquery'],
    'jquery.smartMenu': ['jquery'],
    'jquery.imgCut': ['jquery'],
    'jquery.getImages': ['jquery'],
  },
})
require(['index'], function (r) {
  // r 为index.js的返回值， 此处为undefined
  // console.info('main: ', r)
})
