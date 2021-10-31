const hambutton = document.querySelector(".hamburger");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*Footer copyright date */
document.querySelector("#copyright").textContent = new Date().getFullYear();


/*Footer current date */
var date = new Date(Date.now());

var options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.querySelector("#date").textContent = date.toLocaleDateString('en-UK', options);

/* banner */
if (date.getDay() === 5) {
    document.getElementById("banner").style.display = "block";
} else{
    document.getElementById("banner").style.display = "none"; 
}

/*lazy loading */
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px 50px 0px'
};

function loadImages(image) {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => { 
        image.removeAttribute('data-src');
      };
}

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
      });
    } else {
      imagesToLoad.forEach((img) => {
        loadImages(img);
      });
    }

/* Using Local Storage */
const lastVisited = document.querySelector("#lastvisit");
const millisecondsToDays = 8640000;
const lastVisit = localStorage.getItem("lastvisit") || date;
const numberOfDays = Math.round((lastVisit - date) / millisecondsToDays);

if (lastVisit == 0 || lastVisit == NaN ) {
    lastVisited.textContent = "This is your first visit";
} else {
        lastVisited.textContent = numberOfDays;
}


