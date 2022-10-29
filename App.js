/*$(document).ready(function() {

    var initialScroll = 0;

    $(this).scroll(function() {
        var lastPosition = $(this).scrollTop();

        if (lastPosition < initialScroll) {
            $('html, body').animate({
                scrollTop: $(".first").position().top
            }, 'slow', function(){
                $('html, body').stop(true);
            });
        }else{
            $('html, body').animate({
                scrollTop: $(".second").position().top
            }, 'slow', function(){
                $('html, body').stop(true);
            });
        }

        initialScroll = lastPosition;
    });
});*/