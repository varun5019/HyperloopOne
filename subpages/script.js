var z;
function change(){
	if(document.getElementById("img").value == 1)
	{
		
		document.getElementById("button").href = "dubai-abudhabi.html";
	}
	if(document.getElementById("img").value == 2)
	{
		
		document.getElementById("button").href = "Mumbai - Pune.html";
	}
	if(document.getElementById("img").value == 3)
	{
		
		document.getElementById("button").href = "Los Angeles - Las Vegas.html";
	}
	if(document.getElementById("img").value == 4)
	{
		
		document.getElementById("button").href = "Boston - New York.html";
	}
	if(document.getElementById("img").value == 5)
	{
		
		document.getElementById("button").href = "Paris - Berlin.html";
	}
	if(document.getElementById("img").value == 6)
	{
		
		document.getElementById("button").href = "Delhi - Agra.html";
	}
	if(document.getElementById("img").value == 7)
	{
		
		document.getElementById("button").href = "Frankfurt - Helsinki.html";
	}
	if(document.getElementById("img").value == 8)
	{
		
		document.getElementById("button").href = "Washington DC - New York.html";
	}
	if(document.getElementById("img").value == 9)
	{
		
		document.getElementById("button").href = "Miami - Orlando.html";
	}
	if(document.getElementById("img").value == 10)
	{
		
		document.getElementById("button").href = "Beijing - Hong Kong.html";
	}

}	




function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();


jQuery(window).resize(function(){
     resizenow();
});
function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
};
resizenow();

jQuery("html").addClass('bonfire-html-onload');

jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});


var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

jQuery(window).load(function() {

    setTimeout(function(){
    jQuery(".bonfire-pageloader-icon").addClass('bonfire-pageloader-icon-hide');
    },500);

    setTimeout(function(){
        jQuery(document.body).unbind('touchmove');

        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-fade');

        jQuery("html").removeClass('bonfire-html-onload');
    },750);

    setTimeout(function(){

        jQuery("#bonfire-pageloader").addClass('bonfire-pageloader-hide');

    },1500);

});


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
