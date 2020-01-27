var css = document.querySelector("h3"); //select h3
var color1 = document.querySelector(".color1"); //select the colors
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//make the code cleaner

function setGradient () {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
}

color1.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient);


//Revisit, gradient not working in console
