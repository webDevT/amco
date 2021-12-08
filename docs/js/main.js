$(function(){

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