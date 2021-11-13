const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];

    /*Preston's data*/
    const preston = document.querySelector('.preston')
    const prestonData = towns.filter(i => i.name == "Preston");
    prestonData.forEach (townData => {
      let data = document.createElement('section');
      let h3 = document.createElement('h3');
      let motto = document.createElement('p')
      let p = document.createElement('p')
      let p2 = document.createElement('p')
      let p3 = document.createElement('p')
      /*Concat data into*/
      h3.textContent = `${townData.name}`;
      motto.textContent = `${townData.motto}`;
      p.textContent = `Year Founded: ${townData.yearFounded}`;
      p2.textContent = `Population: ${townData.currentPopulation}`;
      p3.textContent = `Annual Rain Fall: ${townData.averageRainfall}`;

      data.appendChild(h3);
      data.appendChild(motto);
      data.appendChild(p);
      data.appendChild(p2);
      data.appendChild(p3);
      preston.append(data);
    });

  /*Fish Haven data*/
    const fish = document.querySelector('.fish')
    const fishData = towns.filter(i => i.name == "Fish Haven");
    fishData.forEach (townData => {
      let data = document.createElement('section');
      let h3 = document.createElement('h3');
      let motto = document.createElement('p')
      let p = document.createElement('p')
      let p2 = document.createElement('p')
      let p3 = document.createElement('p')
      /*Concat data into*/
      h3.textContent = `${townData.name}`;
      motto.textContent = `${townData.motto}`;
      p.textContent = `Year Founded: ${townData.yearFounded}`;
      p2.textContent = `Population: ${townData.currentPopulation}`;
      p3.textContent = `Annual Rain Fall: ${townData.averageRainfall}`;

      data.appendChild(h3);
      data.appendChild(motto);
      data.appendChild(p);
      data.appendChild(p2);
      data.appendChild(p3);
      fish.append(data);
    });

    /*Soda Springs data*/
    const soda = document.querySelector('.soda')
    const sodaData = towns.filter(i => i.name == "Soda Springs");
    sodaData.forEach (townData => {
      let data = document.createElement('section');
      let h3 = document.createElement('h3');
      let motto = document.createElement('p')
      let p = document.createElement('p')
      let p2 = document.createElement('p')
      let p3 = document.createElement('p')
      
      /*Concat data into*/
      h3.textContent = `${townData.name}`;
      motto.textContent = `${townData.motto}`;
      p.textContent = `Year Founded: ${townData.yearFounded}`;
      p2.textContent = `Population: ${townData.currentPopulation}`;
      p3.textContent = `Annual Rain Fall: ${townData.averageRainfall}`;
      

      data.appendChild(h3);
      data.appendChild(motto);
      data.appendChild(p);
      data.appendChild(p2);
      data.appendChild(p3);
      
      soda.append(data);
    });



  });
    /*
    for (let i = 0; i < towns.length; i++ ) {
        let data = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')

        h2.textContent = `${towns[i].name}`;
        p.textContent = `Year Founded: ${towns[i].yearFounded}`;
        p2.textContent = `Population: ${towns[i].currentPopulation}`;
        p3.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;

        data.appendChild(h2);
        data.appendChild(p);
        data.appendChild(p2);
        data.appendChild(p3);

        document.querySelector('div.data').appendChild(data);  */

