var win      = $(window),
    fxel     = $('nav'),
    eloffset = fxel.offset().top;

win.scroll(function() {
    if (eloffset < win.scrollTop()) {
        fxel.addClass("fixed");
    } else {
        fxel.removeClass("fixed");
    }

    var visible = $( '#animate' ).visible();
    if (visible == false)  {
      $( '.img' ).addClass( 'img-show' );
    } else {
      $( '.img' ).removeClass( 'img-show' );
    }
});

$(function(){ //DOM Ready

  $(" .gridster ul ").gridster({
      widget_margins: [0, 0],
      widget_base_dimensions: [240, 240],
      max_cols: 3,
      max_rows:3
  });

});


function startFlow(){
  $(" .section-banner ").addClass("flow");
  setTimeout(function(){endlessFlow();},40000);
}

function endlessFlow(){
  $(" .section-banner ").removeClass("flow");
  setTimeout(function(){startFlow();},40000);
}

function removeOverlay() {
  $( '.video-overlay' ).remove();
}

$( ".overlay" ).hover(function() {
  $( this ).toggleClass("overlay-show");
})


$( window ).ready(function(){

  $( '.section-news' ).scrollTop()
  startFlow();

  // $('#animate').addClass('animated bounceIn');

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
