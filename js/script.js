var win      = $(window),
    fxel     = $('nav'),
    eloffset = fxel.offset().top;

win.scroll(function() {
    if (eloffset < win.scrollTop()) {
        fxel.addClass("fixed");
    } else {
        fxel.removeClass("fixed");
    }
});

$( window ).ready(function(){
  $('#animate').addClass('animated bounceIn');
});
