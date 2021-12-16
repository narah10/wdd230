const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=47.6062&lon=-122.3321&appid=97056bb6fa6ed2a7443beb549d25c156&units=imperial";


fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
document.getElementById('temp').textContent = jsObject.current.temp.toFixed(0);
document.getElementById('current').textContent = jsObject.current.weather[0].description;
document.getElementById('humidity').textContent = jsObject.current.humidity;

});