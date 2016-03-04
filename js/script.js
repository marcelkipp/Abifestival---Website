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

$(function(){ //DOM Ready

  $(" .gridster ul ").gridster({
      widget_margins: [5, 5],
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

$( ".overlay" ).hover(function() {
  $( this ).toggleClass("overlay-show");
})


$( window ).ready(function(){

  startFlow();
  // $('#animate').addClass('animated bounceIn');

});
