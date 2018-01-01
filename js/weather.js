 
function loadWeather(location, woeid) {
    $.simpleWeather({
       location: location,
        woeid: woeid,
        unit: 'c',
        success: function (weather) {
        city=weather.city;
        temp = weather.temp+'&deg;';
        wcode = '<img class= "weathericon" src="images/weathericons/'+ weather.code+'.svg">'; 
        wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed+'</p>';
        humidiy = weather.humidity + '%';
            
        $(".location").text(city);
        $(".temperature").html(temp);
        $(".climate_bg").html(wcode);
        $(".windspeed").html(wind);
        $(".humidity").text(humidiy);
    },
                    error: function (error) {
        $(".error").html('<p>' + error + '</p>');
    }
    });
}
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
} else {loadWeather("Kolkata,IN", ""); }
    
    $document.ready(function () {
    setInterval(getWeather, 10000);
});
  