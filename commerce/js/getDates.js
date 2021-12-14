const hambutton = document.querySelector(".hamburger");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*Footer copyright date */
document.querySelector("#copyright").textContent = new Date().getFullYear();


/*Footer current date */
document.querySelector("#copyright").textContent = new Date().getFullYear();
document.querySelector("#updated").textContent = document.lastModified;
