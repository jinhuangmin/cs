
$(document).ready(function() {
  var iconNum = $(".banBox").children(".icon").length;
  function iconShow() {
    for ($i = 0; $i < iconNum; $i++) {
      $time = parseInt(Math.random() * 5 + 2);
      $(".banBox").children(".icon").eq($i).css({ "transition": +$time + "s", "transform": "scale(1)", "opacity": "1" });
    }
  }
  function iconHide() {
    $(".banBox").children(".icon").css({ "transition": "0s", "transform": "scale(0)", "opacity": "0" });
  }
  iconShow();

  document.body.onscroll = function() {
    var pageNum = $(".main_box>div").length;
    var pageTop = new Array();
    for ($i = 0; $i < pageNum; $i++) {
      pageTop[$i] = $(".main_box>div").eq($i).offset().top;
    }
    var top = document.documentElement.scrollTop;
    if (top <= 500) {
      iconShow();
    } else {
      iconHide();
    }
    if (top >= 300) {
      $("#contact").fadeIn(500);
    } else {
      $("#contact").fadeOut(50);
    }

    for (var i = 0; i < pageNum; i++) {
      if (top >= pageTop[i] - 500) {
        $(".nave li").eq(i).addClass('select').siblings().removeClass('select');
      }
    }

    if (top >= 150) {
      $(".show-right .nave").addClass('nave-fixed');
    } else {
      $(".show-right .nave").removeClass('nave-fixed');
    }
    if (top > 0) {
      $(".weex-header").addClass('weex-header2');
    } else {
      $(".weex-header").removeClass('weex-header2');
    }
  }

  var bus_num=24;//商家数量
  var gd_width=Math.ceil(bus_num/3)*221;
  var gd_height=408;
  var itemLists = '';
  for (var i = 0; i < 3; i++) {
    if (i == 0) {
      var box_x = gd_width;
    } else if (i == 1) {
      var box_x = 0;
    } else if (i == 2) {
      var box_x = (-gd_width);
    }
    itemLists =itemLists+`<div class="marquee_box" style="right: ${box_x}px;top:-${gd_height*i}px">
    <a href="javascript:;" target="_blank" class="client-icon client-icon1"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon2"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon3"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon4"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon5"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon6"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon7"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon8"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon9"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon10"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon11"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon12"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon13"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon14"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon15"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon16"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon17"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon18"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon19"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon20"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon21"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon22"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon23"></a>
    <a href="javascript:;" target="_blank" class="client-icon client-icon24"></a>
    </div>`;
  }
  $(".inter_grid").html(itemLists);
});
