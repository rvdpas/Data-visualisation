// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
function valueChanged(){
    if($('.vis1').is(":checked"))   
        $(".gebied-vis1").show();
    else
        $(".gebied-vis1").hide();
    if($('.alle').is(":checked"))   
        $(".gebied-vis1").show();
    else
        $(".gebied-vis1").hide();
}

// $(document).ready( function() {
// $('.kaart').hover(
//     function() {
//         $(this).animate({ 'zoom': 1.2 }, 400);
//     },
//     function() {
//         $(this).animate({ 'zoom': 1 }, 400);
//     });
// });

$( ".kaart" ).click(function() {
    function() {
        $(this).animate({ 'zoom': 1.2 }, 400);
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 400);
    };
});

// $(document).ready( function() {
// $('.kaart').hover(
//     function() {
//         $(this).animate({ 'zoom': 1.2 }, 400);
//     },
//     function() {
//         $(this).animate({ 'zoom': 1 }, 400);
//     });
// });

// var enlarged = false;

// $('.kaart').click(function () {
//     $(this).stop(true, false).animate({
//         width: enlarged ? 1000 : 2000,
//         height: enlarged ? 1000 : 2000,
//         left: 0,
//         top: 0
//     }, 600);

//     enlarged = !enlarged;
// });

// var enlarged = false;

// $('.kaart').click(function () {
//     $(this).stop(true, false).animate({
//         width: enlarged ? 800 : 1600,
//         height: enlarged ? 800 : 1600,
//         right: 0,
//         top: 10
//     }, 800);

//     enlarged = !enlarged;
// });

// var enlarged = false;

// $('.kaart').click(function () {
//     $(this).stop(true, false).animate({
//         width: enlarged ? 1000 : 2000,
//         height: enlarged ? 1000 : 2000,
//         top: 0,
//         left: 10
//     }, 200);

//     enlarged = !enlarged;
// });
