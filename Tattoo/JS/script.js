var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';
document.head.appendChild(script);

$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
})
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(49.83917 ,24.02972), zoom: 10
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
var myLatLng = {lat: 49.83917, lng: 24.02972};
    var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}
$(window).on('load', function (){
  var divisionObject = ('#NamePage') // Tag in HTML
  var classApply     = ('.wow jackInTheBox') 
  $(divisionObject).addClass(classApply)
}
$(window).on('load', function() {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
/*
$(window).scroll(function() {
    var divisionObject = ('.object') // Tag in HTML
    var classApply     = ('apply') // Class to apply
    var scroll         = $(window).scrollTop()
    var calcHeight     = $(window).height() - 200 // Change px here
    var totalDistance  = $(divisionObject).offset().top - calcHeight

    if(scroll >= totalDistance)
        
    
    // Remove this 2 lines, if you want apply this Animation once time
    else 
        $(divisionObject).removeClass(classApply)
    // & Remove this
});
*/