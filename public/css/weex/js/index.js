 
  $(document).ready(function() {  
    var iconNum=$(".banBox").children(".icon").length;
    function iconShow() {
      for($i=0;$i<iconNum;$i++){
        $time= parseInt(Math.random() * 5 + 2);
        $(".banBox").children(".icon").eq($i).css({"transition":+$time+"s","transform":"scale(1)","opacity":"1"}); 
      }
    }
    function iconHide() {
      $(".banBox").children(".icon").css({"transition":"0s","transform":"scale(0)","opacity":"0"}); 
    }
    iconShow();

    document.body.onscroll = function () {
      var pageNum=$(".main_box>div").length;
      var pageTop=new Array();
      for($i=0;$i<pageNum;$i++){
        pageTop[$i]=$(".main_box>div").eq($i).offset().top;
      }
      var top = document.documentElement.scrollTop;
      if(top<=500){
        iconShow();
      }else{
        iconHide();
      }
      if (top >= 300){
        $("#contact").fadeIn(500);
      }else{
        $("#contact").fadeOut(50);
      }

      for(var i=0;i<pageNum;i++){
        if(top>=pageTop[i]-500){
          $(".nave li").eq(i).addClass('select').siblings().removeClass('select');
        }
      }

      if(top>=150){
        $(".show-right .nave").addClass('nave-fixed');
      }else{
        $(".show-right .nave").removeClass('nave-fixed');
      }
    }

  });
