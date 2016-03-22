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

// $(function(){ //DOM Ready
//
//   $(" .gridster ul ").gridster({
//       widget_margins: [0, 0],
//       widget_base_dimensions: [240, 240],
//       max_cols: 3,
//       max_rows:3,
//       // ashletCount = 1,
//       //  tempRow = 1,
//       // if ($(window).width() <= 768)
//       //     {
//       //         tempData.col = 1;
//       //         tempRow = tempData.sizey;
//       //         tempData.row = dashletCount;
//       //         dashletCount += tempRow;
//       //     }
//   }).data('gridster').disable();
//
// });

$( window ).ready(function(){

  $( '.section-news' ).scrollTop()
  fadeOutLoader();
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


//functions

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

function fadeOutLoader(){
  $( '.loader' ).delay(2000).fadeOut(700);
}

$( '.main-nav-btn' ).click(function() {
  $( '.nav-mobile-sildeout' ).toggleClass( 'nav-mobile-sildeout-in' );
});
