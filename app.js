//create function that will check whether browswer supports geolocation (if statement)


//create variable that will be filled with the coordinates
var geo = {};

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(success, error);
}
else  {
  alert('Geolocation is not supported');
};

function error(){
  alert("Could not find your location for some odd reason");
}

//function for when location is found
function success(position){
  Geo.lat = position.coords.latitude;
  Geo.lng = position.coords.longitude;
}

var key = "AIzaSyB8NBwsve-lYsecoaJoiJPFmwud6bUBp2Y";
var Weather = "http://api.wunderground.com/api/" + cbb433e2a5f8b678 +"/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";

$.ajax({
  url : Weather,
  dataType: "jsonp",
  success : function(data){
    // get all the information
  }
});

var location = data['location']['city'];
var temp = data['current_observation']['temp_f'];
var img = data['current_observation']['icon_url'];
var desc = data['current_observation']['weather'];
var wind = data['current_observation']['wind_string'];


$('#location').html(location);
$('#temp').html(temp);
$('#desc').html(desc);
$('#ind').html(wind);
$('#img').attr('src', img);
