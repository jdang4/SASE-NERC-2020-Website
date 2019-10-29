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

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 900);
    return false;
});


