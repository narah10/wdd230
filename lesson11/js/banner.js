/*Footer current date */
var date = new Date(Date.now());
/* banner */
if (date.getDay() === 5) {
    document.getElementById("banner").style.display = "block";
} else{
    document.getElementById("banner").style.display= "none"; 
};

