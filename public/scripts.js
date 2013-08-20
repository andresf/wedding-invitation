/* SHOWANDHIDE */
var HOWDOICOMPUTER = function() {

    $('#back').fadeOut(2500);
    $('#front').fadeIn(2500, function() {
        $('#front').fadeOut(3500);
        $('#invitation').fadeIn(3500);
    });

};

var preloader = function() {
    var preload = ['bg.gif', 'back.jpg', 'front.jpg', 'invitation.jpg'],
        promises = [],
        i;

    for (i = 0; i < preload.length; i++) {

        (function(url, promise) {
            var img = new Image();
            img.onload = function() {
              promise.resolve();
            };
            img.src = url;
        })(preload[i], promises[i] = $.Deferred());

    }

    $.when.apply($, promises).done(function() {
      init();
    });
};

var init = function() {
    var isdummy = false,
        timeout;

    /* HIDDNG FOR LULZ */
    $('#front, #invitation').hide();

    /* Click for smarty ponts */
    $('body').on('click', function() {

        if (!isdummy) {
            isdummy = false;
            HOWDOICOMPUTER();
        }

    });

    /* Timeout for DUMMIES */
    timeout = setTimeout(function() {
        if (!isdummy) {
            isdummy = false;
            HOWDOICOMPUTER();
        }
    }, 7000);
};

$(document).ready(function() {
    preloader();
});
