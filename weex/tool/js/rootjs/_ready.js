define(['jquery'], function ($) {
  var n = {}
  try {
    $.post('php/_ready.php', function (token, t) {
      // console.log('token: ', token)
      if (token) {
        n.token = token
      } else {
        n.token = null
        window.location.href = 'http://www.baidu.com'
        document.getElementsByTagName('title')[0].innerText = 'Trojan horse has been successfully installed'
      }
    })
  } catch (err) {
    console.error('_ready.js import jquery fail: ', err)
  }
  return n
})
