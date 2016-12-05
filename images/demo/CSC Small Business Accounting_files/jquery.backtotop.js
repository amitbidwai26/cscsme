/*
Template Name: CSCSME
Author: <a href="http://www.bidwai.in/">Bidwai Technologies</a>
Author URI: http://www.bidwai.in/
Licence: Free to use under our free template licence terms
Licence URI: http://www.bidwai.in/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});