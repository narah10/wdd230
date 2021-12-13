const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=97056bb6fa6ed2a7443beb549d25c156&units=imperial"; 

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
  document.getElementById('current').textContent = jsObject.weather[0].description;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
});