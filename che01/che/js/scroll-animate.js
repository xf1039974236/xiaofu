//动画js
function animateFun(o){
    var winsctop = $(window).scrollTop()|| window.scrollY,
        winh=$(window).height() || window.innerHeight,
        elemoffset = $(o.box).offset().top;
    cssname = o.cssname;
    if(winsctop+winh > elemoffset){
        $(o.elem).addClass(cssname);
    }
}

//二维码
var timefun =null;
function showewm(){
	$('.iosa-donws').show();
}
function hideewm(){
	timefun = setTimeout(function(){
		$('.iosa-donws').hide();
	},500);
}
$(window).load(function(){
	$('.topinner .topright .hoverdown , .iosa-donws').hover(function(){
		clearTimeout(timefun);
		timefun=null;
		showewm();
	},function(){
		hideewm();
	});
})

