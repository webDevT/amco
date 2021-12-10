$(function(){
 if($(window).width() > 992) {
$('.product-card').click(function(){
	$('.product-card').removeClass('active');
	$(this).toggleClass('active');
})
}
 if($(window).width() < 992) {
$('.product-card').click(function(){
	$(this).toggleClass('active');
})
}
$('.menu-btn').click(function(){
	$('.menu').toggleClass('active');
	$(this).toggleClass('active');
	$('.sub-menu').removeClass('active');
	$('.sub-sub-menu').removeClass('active');
})
 if($(window).width() > 768) {
$('.sub-menu-item .menu-link--sub').click(function(){
	event.preventDefault();
	$(this).parent().find('.sub-menu').addClass('active');
})
}
 if($(window).width() > 768) {
$('.sub-sub-menu-item .menu-link--sub-sub').click(function(){
	event.preventDefault();
	$('.sub-sub-menu').removeClass('active');
	$(this).parent().find('.sub-sub-menu').addClass('active');
})
}
 if($(window).width() < 768) {
$('.sub-menu-item .menu-link--sub').click(function(){
	event.preventDefault();
	$(this).parent().find('.sub-menu').toggleClass('active');
})
 }

 if($(window).width() < 768) {
$('.sub-sub-menu-item .menu-link--sub-sub').click(function(){
	event.preventDefault();
	$(this).parent().find('.sub-sub-menu').toggleClass('active');
})
}



});

$('.slider').slick({
  slidesToShow: 2.4,
  prevArrow: $('.prev-slide'),
  nextArrow: $('.next-slide'),
  infinite: false,
  responsive: [
   {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  },
  ]

});
