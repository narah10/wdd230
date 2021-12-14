const info = 'json/directory.json';

fetch(info)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const business = jsonObject['directory'];

    const town1 = document.querySelector('.data1')
    const townData1 = business.filter(i => i.name == "Alki Dental");
    townData1.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town1.appendChild(p);
        town1.appendChild(p2);
        town1.appendChild(p3);
      });

    const town2 = document.querySelector('.data2')
    const townData2 = business.filter(i => i.name == "Movement Mortgage");
    townData2.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town2.appendChild(p);
        town2.appendChild(p2);
        town2.appendChild(p3);
      });

    const town3 = document.querySelector('.data3')
    const townData3 = business.filter(i => i.name == "West Seattle Garden Tour");
    townData3.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town3.appendChild(p);
        town3.appendChild(p2);
        town3.appendChild(p3);
      });

    const town4 = document.querySelector('.data4')
    const townData4 = business.filter(i => i.name == "The Grove West Seattle Inn");
    townData4.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town4.appendChild(p);
        town4.appendChild(p2);
        town4.appendChild(p3);
      });
    
    const town5 = document.querySelector('.data5')
    const townData5 = business.filter(i => i.name == "City Sweats");
    townData5.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town5.appendChild(p);
        town5.appendChild(p2);
        town5.appendChild(p3);
      });

    const town6 = document.querySelector('.data6')
    const townData6 = business.filter(i => i.name == "Glow Medispa");
    townData6.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town6.appendChild(p);
        town6.appendChild(p2);
        town6.appendChild(p3);
      });

    const town7 = document.querySelector('.data7')
    const townData7 = business.filter(i => i.name == "Basson Bakery");
    townData7.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town7.appendChild(p);
        town7.appendChild(p2);
        town7.appendChild(p3);
      });

    const town8 = document.querySelector('.data8')
    const townData8 = business.filter(i => i.name == "Green City Kitchens");
    townData8.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town8.appendChild(p);
        town8.appendChild(p2);
        town8.appendChild(p3);
      });
    
    const town9 = document.querySelector('.data9')
    const townData9 = business.filter(i => i.name == "Husky Deli");
    townData9.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town9.appendChild(p);
        town9.appendChild(p2);
        town9.appendChild(p3);
      });

    const town10 = document.querySelector('.data10')
    const townData10 = business.filter(i => i.name == "Pagliacci Pizza");
    townData10.forEach (businessData => {
        let p = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        /*Concat data into*/
        p.textContent = `${businessData.name}`;
        p2.textContent = `${businessData.address}`;
        p3.textContent = `${businessData.phone}`;

        town10.appendChild(p);
        town10.appendChild(p2);
        town10.appendChild(p3);
      });
    });

/*List Grid Layout */
window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("list-layout").addEventListener("click", function(){
      document.getElementById("layout").classList.remove("grid");
    });
    document.getElementById("grid-layout").addEventListener("click", function(){
      document.getElementById("layout").classList.add("grid");
    });
  });