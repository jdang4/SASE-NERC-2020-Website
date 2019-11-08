
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}
/*
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
*/

modal.onclick = function() {
    modal.style.display = "none";
}

