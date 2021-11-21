const api = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=97056bb6fa6ed2a7443beb549d25c156&units=imperial";

fetch(api)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    const noon = jsObject.list.filter( x => x.dt_txt.includes('18:00:00'));
    console.log(noon);

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let day = 0;
    noon.forEach(forecast => {
        
        let thedate = new Date(forecast.dt_txt)
        document.querySelector(`#dayofweek${day+1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#forecast${day+1}`).innerHTML = `${forecast.main.temp}&#176;F`;
        
        /*Image for weather forecast */

        let imagesrc = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`; 
        const desc = forecast.weather[0].description;
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        day++;
        
   
});
    });

/*
Another method for the arrray 
    const noon = jsObject.list.filter( x => x.dt_txt.includes('18:00:00'));
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (let day=0; day<=4; day++) {
        let date = new Date(noon[day].dt_txt);
        document.querySelector(`#dayofweek${day+1}`).textContent = weekdays[date.getDay()];
        document.querySelector(`#forecast${day+1}`).innerHTML = `${noon[day].main.temp}&#176;F`;

        Image for weather forecast 

        const imagesrc = `http://openweathermap.org/img/wn/${noon[day].weather[0].icon}@2x.png`; 
        const desc = noon[day].weather[0].description;
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        };*/

