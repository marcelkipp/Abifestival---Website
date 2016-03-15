(function () {
            var v_src = '<source src="src/video/background.mp4" type="video/mp4"/>';
            var MOBILE_SITE = '/mobile/index.html', // site to redirect to
                NO_REDIRECT = 'noredirect'; // cookie to prevent redirect

            if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
                if ( document.cookie.indexOf(NO_REDIRECT) === -1 ) {
                  $( document ).ready(function(){
                    $( '.video-overlay' ).remove();
                  });
                }
            } else {
              $( 'video' ).append(v_src);
            }
        })();
