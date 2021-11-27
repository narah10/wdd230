const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];

    /*Preston's data*/
    const preston = document.querySelector('.event')
    const prestonData = towns.filter(i => i.name == "Preston");
    prestonData.forEach (townData => {
      let p = document.createElement('p');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      /*Concat data into*/
      p.textContent = `${townData.events[0]}`;
      p1.textContent = `${townData.events[1]}`;
      p2.textContent = `${townData.events[2]}`;
      preston.appendChild(p);
      preston.appendChild(p1);
      preston.appendChild(p2);
    });

//   /*Fish Haven data*/
//     const fish = document.querySelector('.fish')
//     const fishData = towns.filter(i => i.name == "Fish Haven");
//     fishData.forEach (townData => {
//       let data = document.createElement('section');
//       let h3 = document.createElement('h3');
//       let motto = document.createElement('q')
//       let p = document.createElement('p')
//       let p2 = document.createElement('p')
//       let p3 = document.createElement('p')
//       /*Concat data into*/
//       h3.textContent = `${townData.name}`;
//       motto.textContent = `${townData.motto}`;
//       p.textContent = `Year Founded: ${townData.yearFounded}`;
//       p2.textContent = `Population: ${townData.currentPopulation}`;
//       p3.textContent = `Annual Rain Fall: ${townData.averageRainfall}`;

//       data.appendChild(h3);
//       data.appendChild(motto);
//       data.appendChild(p);
//       data.appendChild(p2);
//       data.appendChild(p3);
//       fish.append(data);
//     });

//     /*Soda Springs data*/
//     const soda = document.querySelector('.soda')
//     const sodaData = towns.filter(i => i.name == "Soda Springs");
//     sodaData.forEach (townData => {
//       let data = document.createElement('section');
//       let h3 = document.createElement('h3');
//       let motto = document.createElement('q')
//       let p = document.createElement('p')
//       let p2 = document.createElement('p')
//       let p3 = document.createElement('p')
      
//       /*Concat data into*/
//       h3.textContent = `${townData.name}`;
//       motto.textContent = `${townData.motto}`;
//       p.textContent = `Year Founded: ${townData.yearFounded}`;
//       p2.textContent = `Population: ${townData.currentPopulation}`;
//       p3.textContent = `Annual Rain Fall: ${townData.averageRainfall}`;

//       data.appendChild(h3);
//       data.appendChild(motto);
//       data.appendChild(p);
//       data.appendChild(p2);
//       data.appendChild(p3);
      
//       soda.append(data);
//     });



  });
