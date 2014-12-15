$(function(){
    $('#homeSlider').liquidSlider({
        dynamicArrows: false,
        autoHeight: false,
        mobileNavigation: false,
        swipe: true,
        preloader: false,
        slideEaseFunction: "easeInQuad",
        slideEaseDuration: 1500,
        autoSlideInterval: 6500
    });
});

// cache container
var $container = $('#isotope-container');
// initialize isotope
$container.imagesLoaded(function() {
  $container.isotope({
    // options...
  });
});

// filter items when filter link is clicked
$('#filters a').click(function(){
  $('li.filter-option').removeClass('active');
  $(this).parent('li').addClass('active');
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

$('#makingthegrade').mouseenter(function() {
    $('#makingthegradeOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#makingthegrade').mouseleave(function() {
    $('#makingthegradeOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#overwaterunderfire').mouseenter(function() {
    $('#overwaterunderfireOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#overwaterunderfire').mouseleave(function() {
    $('#overwaterunderfireOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#highCountry').mouseenter(function() {
    $('#highCountryOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#highCountry').mouseleave(function() {
    $('#highCountryOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#portraits').mouseenter(function() {
    $('#portraitsOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#portraits').mouseleave(function() {
    $('#portraitsOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#collegeyig').mouseenter(function() {
    $('#collegeyigOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#collegeyig').mouseleave(function() {
    $('#collegeyigOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#sports').mouseenter(function() {
    $('#sportsOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#sports').mouseleave(function() {
    $('#sportsOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#nctracs').mouseenter(function() {
    $('#nctracsOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#nctracs').mouseleave(function() {
    $('#nctracsOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#what-now').mouseenter(function() {
    $('#whatNowOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#what-now').mouseleave(function() {
    $('#whatNowOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#csdw').mouseenter(function() {
    $('#csdwOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#csdw').mouseleave(function() {
    $('#csdwOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#flyig').mouseenter(function() {
    $('#flyigOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#flyig').mouseleave(function() {
    $('#flyigOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#portCity').mouseenter(function() {
    $('#portCityOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#portCity').mouseleave(function() {
    $('#portCityOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#alyssa').mouseenter(function() {
    $('#alyssaOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#alyssa').mouseleave(function() {
    $('#alyssaOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#mdyag').mouseenter(function() {
    $('#mdyagOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#mdyag').mouseleave(function() {
    $('#mdyagOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#beyondVarsity').mouseenter(function() {
    $('#beyondVarsityOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#beyondVarsity').mouseleave(function() {
    $('#beyondVarsityOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#homeless').mouseenter(function() {
    $('#homelessOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#homeless').mouseleave(function() {
    $('#homelessOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#eightSeconds').mouseenter(function() {
    $('#eightSecondsOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#eightSeconds').mouseleave(function() {
    $('#eightSecondsOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#waterWorld').mouseenter(function() {
    $('#waterWorldOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#waterWorld').mouseleave(function() {
    $('#waterWorldOverlay').animate({opacity: "0"}, 250, "linear");
});

$('#storySingles').mouseenter(function() {
    $('#storySinglesOverlay').animate({opacity: "0.85"}, 250, "linear");
});
$('#storySingles').mouseleave(function() {
    $('#storySinglesOverlay').animate({opacity: "0"}, 250, "linear");
});