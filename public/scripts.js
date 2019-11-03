
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

/*
$( '.navbar-nav a' ).on( 'click', function () {
	$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
*/

$(document).ready(function () {
    $("SplashLogo").fadeIn(5000);
});

$(document).ready(function () {
    var offset = -50;
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + offset
            }, 1000);
        }
    });
});


$("a").removeClass("waves-effect waves-light");

