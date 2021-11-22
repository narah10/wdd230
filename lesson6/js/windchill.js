let windchill = parseFloat(document.querySelector("#wind-value").textContent);
let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);

if (temp <= 50 && speed > 3) {
    let f = (35.74 + (0.6215 * temp) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * temp * (Math.pow(speed, 0.16)))).toFixed(0);
    document.querySelector("#wind-value").innerHTML = `${f}&#176;F`;
} else{
    document.querySelector("#wind-value").innerHTML = "N/A";
}
