/* SHOWANDHIDE */
var HOWDOICOMPUTER = function() {

    $('#back').fadeOut(2500);
    $('#front').fadeIn(2500, function() {
        $('#front').fadeOut(3500);
        $('#invitation').fadeIn(3500);
    });

}

$(document).ready(function() {
    var isdummy = false,
        timeout;

    /* HIDDNG FOR LULZ */
    $('#front, #invitation').hide();

    /* Click for smarty ponts */
    $('body').on('click', function() {

        if (!isdummy) {
            HOWDOICOMPUTER();
        }

    });

    /* Timeout for DUMMIES */
    timeout = setTimeout(function() {
        if (!isdummy) {
            HOWDOICOMPUTER();
        }
    }, 7000);

});
