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



  $(".gridster ul").gridster({
      widget_margins: [5, 5],
      widget_base_dimensions: [240, 240],
      max_cols: 3,
      max_rows:3
  });

});

$( window ).ready(function(){

  //$('#animate').addClass('animated bounceIn');

});
