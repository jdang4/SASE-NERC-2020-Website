
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

$(document).ready(function(){
    $("SplashLogo").fadeIn(5000);
});

/*
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 'slow');
    return false;
});
*/

$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});
 

$("a").removeClass("waves-effect waves-light");

//get window height minus 50 pixels for the headers height
var height = $(window).height() - 50;

$(".main").height(height);

window.onresize = function(event) {
var height = $(window).height() - 50;

$(".main").height(height);
};
