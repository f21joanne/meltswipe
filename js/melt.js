$(function(){
	/* Hamburger Menu */
	$(".hamburger").on("click",function(){
		$(".mobile_menu").addClass("open");
		$(".mega_menu_wrapper li").addClass("t_blue");
	});
	
	$(".btn_close").on("click",function(){
		$(".mobile_menu, .mega_sub").removeClass("open");
		$(".mega_menu_wrapper li").removeClass("t_blue");
	});

	/* Change Submenu Position */
	$('.mega_menu').each(function () {
	    $(this).click(function () {
	        $(this).find('.mega_sub').toggleClass('open');
	    });
	});

	$('.m_video').on('click touchstart', function(){
		window.open('https://www.youtube.com/watch?v=z1GQlqG4oVs', '_blank')
	});

	$('.spring').on('click touchstart', function(){
		window.open('http://www.forever21.com/Product/Category.aspx?br=F21&category=promo-branded-melt', '_blank')
	});

	$('.play_video').on('click', function(){
		$('.video_popup').addClass('show');
		var videoURL = $('#i_video').prop('src');
		videoURL += "&autoplay=1";
		$('#i_video').prop('src', videoURL);
	});

	$('.icon_close').on('click', function(){
		$('.video_popup').removeClass('show');
		var videoURL = $('#i_video').prop('src');
		videoURL = videoURL.replace("&autoplay=1", "");
		$('#i_video').prop('src', '');
		$('#i_video').prop('src', videoURL);
	});
})
