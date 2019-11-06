var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var style = window.getComputedStyle(body).getPropertyValue("background-image");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getBackgroundcolors(){
	let styleLocal = style;
	var start1 = styleLocal.search("rgb");
	var 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);