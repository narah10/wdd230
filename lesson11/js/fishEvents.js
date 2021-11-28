const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const towns = jsonObject['towns'];

    /*Preston's data*/
    const preston = document.querySelector('.fish-event')
    const prestonData = towns.filter(i => i.name == "Fish Haven");
    prestonData.forEach (townData => {
      let p = document.createElement('p');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      /*Concat data into*/
      p.textContent = `${townData.events[0]}`;
      p1.textContent = `${townData.events[1]}`;
      p2.textContent = `${townData.events[2]}`;
      p3.textContent = `${townData.events[3]}`;
      preston.appendChild(p);
      preston.appendChild(p1);
      preston.appendChild(p2);
      preston.appendChild(p3);
    });

  });
