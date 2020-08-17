(function(){
	function b(t,s){
		this.t = t;
		if(s.cut == 0){
			this.cut = 0;
		}else{
			this.cut = jQuery(s.cut);
		}
		if(s.hei == 0){
			this.hei = 0;
		}else{
			this.hei = jQuery(s.hei);
		}
		if(s.wid == 0){
			this.wid = 0;
		}else{
			this.wid = jQuery(s.wid);
		}
		if(s.x_cut == 0){
			this.x_cut = 0;
		}else{
			this.x_cut = jQuery(s.x_cut);
		}
		if(s.clear == 0){
			this.clear = 0;
		}else{
			this.clear = jQuery(s.clear);
		}
		this.int(this);
	};
	b.prototype={
		int:function(t){
			t.top = t.t.offset().top;
			t.left = t.t.offset().left;
			t.width = t.t.outerWidth();
			t.height = t.t.outerHeight();
			t.t.children(".canvas_root").remove();
			t.ad = document.createElement('div');
			t.ad.setAttribute("class", "canvas_root");
			t.t.append(t.ad);
			t.po = t.t.css("position");
			if(t.po != "relative" && t.po != "absolute" && t.po != "fixed" ){
				t.t.css("position","relative");
			}
			t.add = jQuery(t.ad);
			t.add.css({position:'absolute',top:'0px',left:'0px',width:t.width+'px',height:t.height+'px'});
			t.add.on("selectstart",function(){
				return false;
			});
			t.add.append("<canvas></canvas>");
			t.c = t.add.find("canvas");
			t.c.attr("width",t.width);
			t.c.attr("height",t.height);
			t.ctx = t.c[0].getContext('2d');
			t.ctx.fillStyle = 'rgba(0,0,0,0.5)';
			t.ctx.fillRect(0,0,t.width,t.height);
			t.a = [];
			t.f = null;
			t.i = -1;
			t.l = 0;
			t.ah = [];
			t.aw = [];
			// t.start(t);
			// t.change(t);
			// t.rect_move(t);
			// t.size(t);
			// t.lock(t);
			// t.cancel(t);
			// t.rect_delete(t);
			t.cutting(t);
		},
		start:function(t){
			t.c.mousedown(function(e){
				e.stopPropagation();
				t.ld = false;
				t.x = e.pageX;
				t.y = e.pageY;
				for(var i=0;i<t.l;i++){
					if(Math.abs(t.x - t.left - t.a[i][0]) < 5){
						t.x = t.a[i][0] + t.left;
						break;
					}else if(Math.abs(t.x - t.left - t.a[i][0] - t.a[i][2]) < 5){
						t.x = t.a[i][0] + t.a[i][2] + t.left;
						break;
					}
				}
				for(var i=0;i<t.l;i++){
					if(Math.abs(t.y - t.a[i][1] - t.top) < 5){
						t.y = t.a[i][1] + t.top;
						break;
					}else if(Math.abs(t.y - t.a[i][1] - t.a[i][3] - t.top) < 5){
						t.y = t.a[i][1] + t.a[i][3] + t.top;
						break;
					}
				}
				if(t.x - t.left < 5){
					t.x = t.left;
				}else if(t.x - t.left + 5 > t.width){
					t.x = t.left + t.width;
				}
				if(t.y - t.top < 5){
					t.y = t.top;
				}else if(t.y - t.top + 5 > t.height){
					t.y = t.top + t.height;
				}
				t.mt = true;
				t.add.find(".bg_add_span").hide();
				t.add.find(".bg_add_p").hide();
				t.add.find(".bg_add_lock").hide();
				jQuery(document).on('mousemove',function(e){
					if(t.ld){
						jQuery(document).off('mousemove');
						return false;
					}
					t.x2 = e.pageX;
					t.y2 = e.pageY;
					t.mouse_move(t);
					t.w2 = t.x2-t.x;
					t.h2 = t.y2-t.y;
					if(t.mt){
						t.mt = false;
						t.ad2 = document.createElement('div');
						t.add.append(t.ad2);
						t.f = jQuery(t.ad2);
						t.f.addClass("bg_add");
						t.i++;
						t.i2 = t.i;
						t.f.attr("bg_add",t.i);
						t.f.css({border:"1px solid #fff","box-sizing":"border-box",cursor:"move","text-align":"center",opacity:'0.5','z-index':1,'font-size':0,'line-height':0,'box-shadow':'0 0 8px #fff'});
						t.f.append("<span class='bg_add_span bg_add_span01' style='top:-6px;left:-6px;cursor:nw-resize;'>&nbsp;</span><span class='bg_add_span bg_add_span02' style='top:-6px;right:-6px;cursor:ne-resize;'>&nbsp;</span><span class='bg_add_span bg_add_span03' style='bottom:-6px;left:-6px;cursor:ne-resize;'>&nbsp;</span><span class='bg_add_span bg_add_span04' style='bottom:-6px;right:-6px;cursor:nw-resize;'>&nbsp;</span>");
						t.f.append("<span class='bg_add_span bg_add_span05' style='top:-6px;left:50%;cursor:n-resize; margin:0 0 0 -5.5px;'>&nbsp;</span><span class='bg_add_span bg_add_span06' style='top:50%;left:-6px;cursor:e-resize; margin:-5.5px 0 0'>&nbsp;</span><span class='bg_add_span bg_add_span07' style='top:50%;right:-6px;cursor:e-resize; margin:-5.5px 0 0'>&nbsp;</span><span class='bg_add_span bg_add_span08' style='bottom:-6px;left:50%;cursor:n-resize; margin:0 0 0 -5.5px;'>&nbsp;</span>");
						t.f.find('span').css({position:'absolute',width:'11px',height:'11px',display:'block',background:'#fff','border-radius':'50%','z-index':'5'});
						t.f.append("<p class='bg_add_p' style='line-height: 26px; position: absolute; z-index: 4; color: rgb(0, 0, 0); width: 100px; font-size: 12px; top: 0%; left:100%; border:1px solid #fff; background:#fff; text-align: center;'><span style='display:inline-block; background:#fff;'><input class='bg_add_width bg_add_size' style='padding:0 5px; width:30px; line-height:28px; border:none; outline:none; text-align:right; cursor:auto; display:inline-block;' value='0' />X<input class='bg_add_height bg_add_size' style='padding:0 5px; width:30px; line-height:28px; text-align:left; border:none; outline:none; cursor:auto; display:inline-block;' value='0' /></span></p>");
						t.f.append("<a class='bg_add_lock' style='display:block; position:absolute; width:20px; height:20px; top:-20px; left:5px; background:#fff;' href='javascript:;'><img src='img/lock_off.png' style='width:100%' /></a>");
						if(t.w2>=0){
							if(t.h2>=0){
								t.f.css({"position":"absolute",left:t.x-t.left+'px',top:t.y-t.top+'px',width:t.w2+'px',height:t.h2+'px','min-width':'1px','min-height':'1px'});
								t.a.push([t.x-t.left,t.y-t.top,1,1]);
							}else{
								t.f.css({"position":"absolute",left:t.x-t.left+'px',top:t.y2-t.top+'px',width:t.w2+'px',height:t.h2+'px','min-width':'1px','min-height':'1px'});
								t.a.push([t.x-t.left,t.y2-t.top,1,1]);
							}
						}else{
							if(t.h2>=0){
								t.f.css({"position":"absolute",left:t.x2-t.left+'px',top:t.y-t.top+'px',width:t.w2+'px',height:t.h2+'px','min-width':'1px','min-height':'1px'});
								t.a.push([t.x2-t.left,t.y-t.top,1,1]);
							}else{
								t.f.css({"position":"absolute",left:t.x2-t.left+'px',top:t.y2-t.top+'px',width:t.w2+'px',height:t.h2+'px','min-width':'1px','min-height':'1px'});
								t.a.push([t.x2-t.left,t.y2-t.top,1,1]);
							}
						}
					}
					t.direction(t);
				});
				jQuery(document).on('mouseup',function(){

					console.info("x");

					if(t.f == null){
						t.ld = true;
						return false;
					}
					if(t.f.width() < 10 && t.f.height() < 10){
						t.a[t.f.attr("bg_add")] = 0;
						t.f.remove();
						t.f = null;
						t.canvas_move(t);
					}
					jQuery(document).off('mousemove');
					jQuery(document).off('mouseup');

					

				});
			});
		},
		change:function(t){
			jQuery(t.t).on('mousedown','.bg_add_span',function(e){
				e.stopPropagation();
				if(jQuery(this).parent().parent().parent()[0] != t.t[0] || jQuery(this).parents(".bg_add").hasClass("bg_is_lock")){
					return false;
				}
				t.f = jQuery(this).parent();
				t.i2 = t.f.attr("bg_add");
				t.xb = true;
				t.yb = true;
				if(jQuery(this).hasClass("bg_add_span01")){
					t.x = jQuery(this).siblings(".bg_add_span04").offset().left+6;
					t.y = jQuery(this).siblings(".bg_add_span04").offset().top+6;
				}else if(jQuery(this).hasClass("bg_add_span02")){
					t.x = jQuery(this).siblings(".bg_add_span03").offset().left+5;
					t.y = jQuery(this).siblings(".bg_add_span03").offset().top+6;
				}else if(jQuery(this).hasClass("bg_add_span03")){
					t.x = jQuery(this).siblings(".bg_add_span02").offset().left+6;
					t.y = jQuery(this).siblings(".bg_add_span02").offset().top+5;
				}else if(jQuery(this).hasClass("bg_add_span04")){
					t.x = jQuery(this).siblings(".bg_add_span01").offset().left+5;
					t.y = jQuery(this).siblings(".bg_add_span01").offset().top+5;
				}else if(jQuery(this).hasClass("bg_add_span05")){
					t.x = jQuery(this).siblings(".bg_add_span03").offset().left+5;
					t.y = jQuery(this).siblings(".bg_add_span03").offset().top+5;
					t.x2 = jQuery(this).siblings(".bg_add_span02").offset().left+5;
					t.xb = false;
				}else if(jQuery(this).hasClass("bg_add_span08")){
					t.x = jQuery(this).siblings(".bg_add_span01").offset().left+5;
					t.y = jQuery(this).siblings(".bg_add_span01").offset().top+5;
					t.x2 = jQuery(this).siblings(".bg_add_span02").offset().left+5;
					t.xb = false;
				}else if(jQuery(this).hasClass("bg_add_span06")){
					t.x = jQuery(this).siblings(".bg_add_span02").offset().left+5;
					t.y = jQuery(this).siblings(".bg_add_span02").offset().top+5;
					t.y2 = jQuery(this).siblings(".bg_add_span03").offset().top+5;
					t.yb = false;
				}else if(jQuery(this).hasClass("bg_add_span07")){
					t.x = jQuery(this).siblings(".bg_add_span01").offset().left+5;
					t.y = jQuery(this).siblings(".bg_add_span01").offset().top+5;
					t.y2 = jQuery(this).siblings(".bg_add_span03").offset().top+5;
					t.yb = false;
				}
				jQuery(document).on('mousemove',function(e){
					if(t.xb){
						t.x2 = e.pageX;
					}
					if(t.yb){
						t.y2 = e.pageY;
					}
					t.mouse_move(t);
					t.w2 = t.x2-t.x;
					t.h2 = t.y2-t.y;
					t.direction(t);
				});
				jQuery(document).on('mouseup',function(){

					console.info("9")

					jQuery(document).off('mousemove');
					jQuery(document).off('mouseup');
				});
			});
		},
		size:function(t){
			jQuery(t.t).on('mousedown','.bg_add_size',function(e){
				e.stopPropagation();
			});
			jQuery(t.t).on('blur','.bg_add_size',function(){
				t.ib = jQuery(this).parents('.bg_add').attr("bg_add");
				if(jQuery(this).parents(".bg_add").hasClass("bg_is_lock")){
					jQuery(this).parent().children('.bg_add_width').val(t.a[t.ib][2]);
					jQuery(this).parent().children('.bg_add_height').val(t.a[t.ib][3]);
					return false;
				}
				jQuery(this).parent().children('.bg_add_width').val(parseInt(jQuery(this).parent().children('.bg_add_width').val()));
				t.zw = parseInt(jQuery(this).parent().children('.bg_add_width').val());
				jQuery(this).parent().children('.bg_add_height').val(parseInt(jQuery(this).parent().children('.bg_add_height').val()));
				t.zy = parseInt(jQuery(this).parent().children('.bg_add_height').val());
				if(t.zw+t.a[t.ib][0] > t.width){
					t.zw = t.width - t.a[t.ib][0];
				}else if(t.zw<10){
					t.zw = 10;
				}
				if(t.zy+t.a[t.ib][1] > t.height){
					t.zy = t.height - t.a[t.ib][1];
				}else if(t.zy<10){
					t.zy = 10;
				}
				jQuery(this).parent().children('.bg_add_width').val(t.zw);
				jQuery(this).parent().children('.bg_add_height').val(t.zy);
				jQuery(this).parents('.bg_add').css({width:t.zw+'px',height:t.zy+'px'});
				t.a[t.ib][2] = t.zw;
				t.a[t.ib][3] = t.zy;
				t.canvas_move(t);
			});
		},
		lock:function(t){
			jQuery(t.t).on('mousedown','.bg_add_lock',function(e){
				e.stopPropagation();
			});
			jQuery(t.t).on('click','.bg_add_lock',function(e){
				e.stopPropagation();
				jQuery(this).parents('.bg_add').toggleClass("bg_is_lock");
				jQuery(this).toggleClass("bg_icon_lock");
				if(jQuery(this).children('img').attr('src')=='img/lock_off.png'){
					jQuery(this).children('img').attr('src','img/lock_on.png');
				}else{
					jQuery(this).children('img').attr('src','img/lock_off.png');
				}
			});
		},
		rect_move:function(t){
			jQuery(t.t).on('mousedown','.bg_add',function(e){


				console.info("33")

				e.stopPropagation();
				t.r_left = parseInt(jQuery(this).css("left"));
				t.r_top = parseInt(jQuery(this).css("top"));
				t.r_0 = t.r_left;
				t.r_1 = t.r_top;
				t.r_width = jQuery(this).outerWidth();
				t.r_height = jQuery(this).outerHeight();
				t.r_x = e.pageX;
				t.r_y = e.pageY;
				t.rect = jQuery(this);
				t.f = jQuery(this);
				t.index = t.rect.attr("bg_add");
				t.add.find(".bg_add_span").hide();
				t.f.find(".bg_add_span").show();
				t.add.find(".bg_add_p").hide();
				t.f.find(".bg_add_p").show();
				t.add.find(".bg_add_lock").hide();
				t.f.find(".bg_add_lock").show();
				t.f.css("z-index","2");
				t.f.siblings().css("z-index","1");
				if(jQuery(this).hasClass("bg_is_lock")){
					return false;
				}
				//t.i = t.index;
				jQuery(document).on('mousemove',function(e){
					t.r_x2 = e.pageX;
					t.r_y2 = e.pageY;
					t.r_left2 = t.r_left + t.r_x2 - t.r_x;
					t.r_top2 = t.r_top + t.r_y2 - t.r_y;
					if(t.r_left2 < 0){
						t.r_left2 = 0;
					}else if(t.r_left2 > t.width - t.r_width){
						t.r_left2 = t.width - t.r_width;
					}
					if(t.r_top2 < 0){
						t.r_top2 = 0;
					}else if(t.r_top2 > t.height - t.r_height){
						t.r_top2 = t.height - t.r_height;
					}
					t.r_2 = t.r_left2;
					t.r_3 = t.r_top2;
					t.f.css({'border-top-color':'#fff','border-bottom-color':'#fff','border-left-color':'#fff','border-right-color':'#fff'});

					for(var i=0;i<t.l;i++){
						if(t.index == i){
							continue;
						}
						if(Math.abs(t.r_left2 - t.a[i][0]) < 5){
							t.r_left2 = t.a[i][0];
						}else if(Math.abs(t.r_left2 + t.r_width - t.a[i][0]) < 5){
							t.r_left2 = t.a[i][0] - t.r_width;
						}else if(Math.abs(t.r_left2 - t.a[i][0] - t.a[i][2]) < 5){
							t.r_left2 = t.a[i][0] + t.a[i][2];
						}else if(Math.abs(t.r_left2 + t.r_width - t.a[i][0] - t.a[i][2]) < 5){
							t.r_left2 = t.a[i][0] + t.a[i][2] - t.r_width;
						}
						if(Math.abs(t.r_top2 - t.a[i][1]) < 5){
							t.r_top2 = t.a[i][1];
						}else if(Math.abs(t.r_top2 + t.r_height - t.a[i][1]) < 5){
							t.r_top2 = t.a[i][1] - t.r_height;
						}else if(Math.abs(t.r_top2 - t.a[i][1] - t.a[i][3]) < 5){
							t.r_top2 = t.a[i][1] + t.a[i][3];
						}else if(Math.abs(t.r_top2 + t.r_height - t.a[i][1] - t.a[i][3]) < 5){
							t.r_top2 = t.a[i][1] + t.a[i][3] - t.r_height;
						}
					}
					if(t.r_left2 <= 5){
						t.r_left2 = 0;
					}else if(t.r_left2 + t.r_width > t.width - 5){
						t.r_left2 = t.width - t.r_width;
					}
					if(t.r_top2 <= 5){
						t.r_top2 = 0;
					}else if(t.r_top2 + t.r_height > t.height - 5){
						t.r_top2 = t.height - t.r_height;
					}
					t.rect.css({left:t.r_left2+'px',top:t.r_top2+'px'});
					t.a[t.index][0] = t.r_left2;
					t.a[t.index][1] = t.r_top2;
					t.canvas_move(t);
				});
				jQuery(document).on('mouseup',function(){
					jQuery(document).off('mousemove');
					jQuery(document).off('mouseup');
				});
			});
		},
		mouse_move:function(t){
			for(var i=0;i<t.l;i++){
				if(t.i2 == i){
					continue;
				}
				if(Math.abs(t.x2 - t.left - t.a[i][0]) < 5){
					t.x2 = t.a[i][0] + t.left;
					break;
				}else if(Math.abs(t.x2 - t.left - t.a[i][0] - t.a[i][2]) < 5){
					t.x2 = t.a[i][0] + t.a[i][2] + t.left;
					break;
				}
			}
			for(var i=0;i<t.l;i++){
				if(t.i2 == i){
					continue;
				}
				if(Math.abs(t.y2 - t.a[i][1] - t.top) < 5){
					t.y2 = t.a[i][1] + t.top;
					break;
				}else if(Math.abs(t.y2 - t.a[i][1] - t.a[i][3] - t.top) < 5){
					t.y2 = t.a[i][1] + t.a[i][3] + t.top;
					break;
				}
			}
			if(t.x2<=t.left+5){
				t.x2 = t.left;
			}else if(t.x2>t.left+t.width-5){
				t.x2 = t.left+t.width;
			}
			if(t.y2<=t.top+5){
				t.y2 = t.top;
			}else if(t.y2>t.top+t.height-5){
				t.y2 = t.top+t.height;
			}
		},
		direction:function(t){
			t.l = t.a.length;
			t.f.css({width:Math.abs(t.w2)+'px',height:Math.abs(t.h2)+'px'});
			if(t.w2<0){
				t.f.css({left:t.x2-t.left+'px'});
				t.a[t.i2][0] = t.x2-t.left;
			}else{
				t.f.css({left:t.x-t.left+'px'});
				t.a[t.i2][0] = t.x-t.left;
			}
			if(t.h2<0){
				t.f.css({top:t.y2-t.top+'px'});
				t.a[t.i2][1] = t.y2-t.top;
			}else{
				t.f.css({top:t.y-t.top+'px'});
				t.a[t.i2][1] = t.y-t.top;
			}
			if(Math.abs(t.w2)<1){
				t.a[t.i2][2] = 1;
			}else{
				t.a[t.i2][2] = Math.abs(t.w2);
			}
			if(Math.abs(t.h2)<1){
				t.a[t.i2][3] = 1;
			}else{
				t.a[t.i2][3] = Math.abs(t.h2);
			}
			t.f.find('.bg_add_width').val(t.a[t.i2][2]);
			t.f.find('.bg_add_height').val(t.a[t.i2][3]);
			t.canvas_move(t);
		},
		canvas_move:function(t){
			t.ctx.clearRect(0,0,t.width,t.height);
			t.ctx.fillRect(0,0,t.width,t.height);
			t.t[0].bg_a = [];
			t.l = t.a.length;
			for(var i = 0;i<t.l;i++){
				if(t.a[i] != 0){
					t.t[0].bg_a.push(t.a[i]);
					t.ctx.clearRect(t.a[i][0],t.a[i][1],t.a[i][2],t.a[i][3]);
				}
			}
		},
		rect_delete:function(t){
			jQuery(document).keydown(function(key){
				if(t.f != null){
					if(t.f.hasClass("bg_is_lock")){
						return false;
					}
					if(!t.f.find(".bg_add_width").is(":focus") && !t.f.find(".bg_add_height").is(":focus")){
						if(key.keyCode == 8 || key.keyCode == 46){
							t.a[t.f.attr("bg_add")] = 0;
							t.f.remove();
							t.f = null;
							t.canvas_move(t);
						}else if(key.keyCode == 37){
							t.ii = t.f.attr("bg_add");
							if(t.a[t.ii][0] > 0){
								t.a[t.ii][0] = t.a[t.ii][0] - 1;
								t.f.css("left",parseInt(t.f.css("left"))-1+'px');
								t.canvas_move(t);
							}
						}else if(key.keyCode == 38){
							t.ii = t.f.attr("bg_add");
							if(t.a[t.ii][1] > 0){
								t.a[t.ii][1] = t.a[t.ii][1] - 1;
								t.f.css("top",parseInt(t.f.css("top"))-1+'px');
								t.canvas_move(t);
							}
						}else if(key.keyCode == 39){
							t.ii = t.f.attr("bg_add");
							if(t.a[t.ii][0] + t.a[t.ii][2] < t.width){
								t.a[t.ii][0] = t.a[t.ii][0] + 1;
								t.f.css("left",parseInt(t.f.css("left"))+1+'px');
								t.canvas_move(t);
							}
						}else if(key.keyCode == 40){
							t.ii = t.f.attr("bg_add");
							if(t.a[t.ii][1] + t.a[t.ii][3] < t.height){
								t.a[t.ii][1] = t.a[t.ii][1] + 1;
								t.f.css("top",parseInt(t.f.css("top"))+1+'px');
								t.canvas_move(t);
							}
						}
						return false;
					}else if(key.keyCode == 13){
						t.fw = t.f.find('.bg_add_width');
						t.fh = t.f.find('.bg_add_height');
						t.fw.val(parseInt(t.fw.val()));
						t.zw = parseInt(t.fw.val());
						t.fh.val(parseInt(t.fh.val()));
						t.zy = parseInt(t.fh.val());
						t.ib = t.f.attr("bg_add");
						to_change_size();
					}else if(key.keyCode == 38 || key.keyCode == 40){
						t.fw = t.f.find('.bg_add_width');
						t.fh = t.f.find('.bg_add_height');
						if(key.keyCode == 38){
							t.kc = 1;
						}else{
							t.kc = -1;
						}
						if(t.f.find(".bg_add_width").is(":focus")){
							t.fw.val(parseInt(t.fw.val())+t.kc);
							t.fh.val(parseInt(t.fh.val()));
						}else{
							t.fw.val(parseInt(t.fw.val()));
							t.fh.val(parseInt(t.fh.val())+t.kc);
						}
						t.zw = parseInt(t.fw.val());
						t.zy = parseInt(t.fh.val());
						t.ib = t.f.attr("bg_add");
						to_change_size();
					}
				}
			});
			function to_change_size(){
				if(t.zw+t.a[t.ib][0] > t.width){
					t.zw = t.width - t.a[t.ib][0];
				}else if(t.zw<10){
					t.zw = 10;
				}
				if(t.zy+t.a[t.ib][1] > t.height){
					t.zy = t.height - t.a[t.ib][1];
				}else if(t.zy<10){
					t.zy = 10;
				}
				t.fw.val(t.zw);
				t.fh.val(t.zy);
				t.f.css({width:t.zw+'px',height:t.zy+'px'});
				t.a[t.ib][2] = t.zw;
				t.a[t.ib][3] = t.zy;
				t.canvas_move(t);
			}
		},
		cancel:function(t){
			jQuery(document).on('mousedown',function(e){
				if(!jQuery(e.target).hasClass(".bg_add") && !jQuery(e.target).hasClass(".bg_add_span")){
					t.f = null;
					t.add.find(".bg_add_span").hide();
					t.add.find(".bg_add_p").hide();
					t.add.find(".bg_add_lock").hide();
				}
			});
		},
		cutting:function(t){
			if(t.cut != 0){
				t.ct = parseInt(t.cut.val()) || 0;
				t.cut.click(function(){
					if(jQuery(this).val() != t.ct){
						t.ct = parseInt(jQuery(this).val());
						t.average_cut(t);
					}
				});
				t.cut.keyup(function(){
					if(t.cut.is(":focus") && t.cut.val() != t.ct){
						t.ct = parseInt(t.cut.val());
						t.average_cut(t);
					}
				});
			}
			if(t.hei != 0){
				t.ht = parseInt(t.hei.val()) || 0;
				t.hei.click(function(){
					if(jQuery(this).val() != t.ht && jQuery(this).val() >= 10){
						t.ht = parseInt(jQuery(this).val());
						t.height_cut(t);
					}
				});
				t.hei.keyup(function(){
					if(t.hei.is(":focus") && t.hei.val() != t.ht && t.hei.val() >= 10){
						t.ht = parseInt(t.hei.val());
						t.height_cut(t);
					}
				});
			}
			if(t.x_cut != 0){
				t.ct2 = parseInt(t.x_cut.val()) || 0;
				t.x_cut.click(function(){
					if(jQuery(this).val() != t.ct2){
						t.ct2 = parseInt(jQuery(this).val());
						t.average_cut2(t);
					}
				});
				t.x_cut.keyup(function(){
					if(t.x_cut.is(":focus") && t.x_cut.val() != t.ct2){
						t.ct2 = parseInt(t.x_cut.val());
						t.average_cut2(t);
					}
				});
			}
			if(t.wid != 0){
				t.ht2 = parseInt(t.wid.val()) || 0;
				t.wid.click(function(){
					if(jQuery(this).val() != t.ht2 && jQuery(this).val() >= 10){
						t.ht2 = parseInt(jQuery(this).val());
						t.height_cut2(t);
					}
				});
				t.wid.keyup(function(){
					if(t.wid.is(":focus") && t.wid.val() != t.ht2 && t.wid.val() >= 10){
						t.ht2 = parseInt(t.wid.val());
						t.height_cut2(t);
					}
				});
			}
			if(t.clear != 0){
				t.clear.click(function(){
					t.ht = 0;
					t.ht2 = 0;
					t.ct = 0;
					t.ct2 = 0;
					t.i = -1;
					t.i2 = 0;
					t.hei.val(0);
					t.cut.val(0);
					t.x_cut.val(0);
					t.wid.val(0);
					t.a = [];
					t.ah = [];
					t.aw = [];
					t.add.find(".bg_add").remove();
					t.canvas_move(t);
				});
			}
		},
		average_cut:function(t){
			if(t.ct > 1000){
				alert("别闹，写那么多，电脑会爆");
				return false;
			}
			t.hei.val(0);
			t.ht = 0;
			t.i = -1;
			t.i2 = 0;
			t.add.find(".bg_add").remove();
			t.a = [];
			t.ah = [];
			t.yu = t.height%t.ct;
			t.ge = Math.floor(t.height/t.ct);
			for(var i = 0;i<t.ct;i++){
				t.i++;
				if(i<t.yu){
					t.ah.push([i*(t.ge+1),t.ge+1]);
				}else{
					t.ah.push([i*t.ge+t.yu,t.ge]);
				}
			}
			t.cutting_all(t);
		},
		average_cut2:function(t){
			if(t.ct2 > 1000){
				alert("别闹，写那么多，电脑会爆");
				return false;
			}
			t.wid.val(0);
			t.ht2 = 0;
			t.i = -1;
			t.i2 = 0;
			t.add.find(".bg_add").remove();
			t.a = [];
			t.aw = [];
			t.yu = t.width%t.ct2;
			t.ge = Math.floor(t.width/t.ct2);
			for(var i = 0;i<t.ct2;i++){
				t.i++;
				if(i<t.yu){
					t.aw.push([i*(t.ge+1),t.ge+1]);
				}else{
					t.aw.push([i*t.ge+t.yu,t.ge]);
				}
			}
			t.cutting_all(t);
		},
		height_cut:function(t){
			t.cut.val(0);
			t.ct = 0;
			t.i = -1;
			t.i2 = 0;
			t.add.find(".bg_add").remove();
			t.a = [];
			t.ah = [];
			t.num = Math.ceil(t.height/t.ht);
			t.yu = t.height%t.ht;
			for(var i=0;i<t.num;i++){
				t.i++;
				if(i == t.num-1 && t.yu != 0){
					t.ah.push([i*t.ht,t.yu]);
				}else{
					t.ah.push([i*t.ht,t.ht]);
				}
			}
			t.cutting_all(t);
		},
		height_cut2:function(t){
			t.x_cut.val(0);
			t.ct2 = 0;
			t.i = -1;
			t.i2 = 0;
			t.add.find(".bg_add").remove();
			t.a = [];
			t.aw = [];
			t.num = Math.ceil(t.width/t.ht2);
			t.yu = t.width%t.ht2;
			for(var i=0;i<t.num;i++){
				t.i++;
				if(i == t.num-1 && t.yu != 0){
					t.aw.push([i*t.ht2,t.yu]);
				}else{
					t.aw.push([i*t.ht2,t.ht2]);
				}
			}
			t.cutting_all(t);
		},
		cutting_all:function(t){
			t.awl = t.aw.length;
			t.ahl = t.ah.length;
			if(t.awl == 0){
				t.aw.push([0,t.width]);
				t.awl++;
			}
			if(t.ahl == 0){
				t.ah.push([0,t.height]);
				t.ahl++;
			}
			for(var i=0;i<t.ahl;i++){
				for(var j=0;j<t.awl;j++){
					t.a.push([t.aw[j][0],t.ah[i][0],t.aw[j][1],t.ah[i][1]]);
					t.rect_add(t,(j+(i*t.awl)),t.aw[j][0],t.ah[i][0],t.aw[j][1],t.ah[i][1]);
				}
			}
			t.canvas_move(t);
		},
		rect_add:function(t,b_i,b_l,b_y,b_w,b_h){
			t.add.append('<div class="bg_add" bg_add="'+b_i+'" style="border:1px solid #fff; box-sizing:border-box; box-shadow:0 0 8px #fff; cursor:move; text-align:center; opacity:0.5; font-size:0px; line-height:0; position:absolute; left:'+b_l+'px; top:'+b_y+'px; width:'+b_w+'px; height:'+b_h+'px; min-width:1px; min-height:1px;"><span class="bg_add_span bg_add_span01" style="top:-6px; left:-6px; cursor:nw-resize; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span02" style="top:-6px; right:-6px; cursor:ne-resize; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span03" style="bottom:-6px; left:-6px; cursor:ne-resize; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span04" style="bottom:-6px; right:-6px; cursor:nw-resize; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span05" style="top:-6px; left:50%; cursor:n-resize; margin:0 0 0 -5.5px; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span06" style="top:50%; left:-6px; cursor:e-resize; margin:-5.5px 0 0; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span07" style="top:50%; right:-6px; cursor:e-resize; margin:-5.5px 0 0; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><span class="bg_add_span bg_add_span08" style="bottom:-6px; left:50%; cursor:n-resize; margin:0 0 0 -5.5px; position:absolute; width:11px; height:11px; display:none; background:#3089dc; border-radius:50%;">&nbsp;</span><p class="bg_add_p" style="line-height: 26px; position: absolute; z-index: 4; color: rgb(0, 0, 0); width: 100px; font-size: 12px; top: 0%; left:100%; border:1px solid #fff; background:#fff; text-align: center; display: none;"><span style="display:inline-block; background:#fff;"><input class="bg_add_width bg_add_size" style="padding:0 5px; width:30px; line-height:28px; border:none; outline:none; text-align:right; cursor:auto; display:inline-block;" value="'+b_w+'">X<input class="bg_add_height bg_add_size" style="padding:0 5px; width:30px; line-height:28px; text-align:left; border:none; outline:none; cursor:auto; display:inline-block;" value="'+b_h+'"></span></p><a class="bg_add_lock" style="display:none; position:absolute; width:20px; height:20px; top:-20px; left:5px; background:#fff;" href="javascript:;"><img src="img/lock_off.png" style="width:100%"></a></div>');
		}
	};
	var y = {
		cut:0,
		hei:0,
		x_cut:0,
		wid:0,
		clear:0
	}
	jQuery.fn.bg_region=function(bg){
		jQuery.extend(y,bg);
		jQuery(this).each(function() {
			new b(jQuery(this),y);
		});
	}	
})(jQuery);