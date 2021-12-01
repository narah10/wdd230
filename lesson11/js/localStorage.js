/* Using Local Storage */
const lastVisited = document.querySelector("#lastvisit");
const millisecondsToDays = 8640000;
const lastVisit = localStorage.getItem('lastvisit') || Date.now();
const numberOfDays = Math.round((lastVisit - Date.now()) / millisecondsToDays);

if (lastVisit === 0 || lastVisit === Date.now()) {
    lastVisited.textContent = "This is your first visit";
} else {
        lastVisited.textContent = numberOfDays;
}
localStorage.setItem("lastvisit", Date.now());
