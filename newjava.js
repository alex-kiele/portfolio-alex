$(document).ready(function(){ 
	$(".scroll").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.navbar-default a').removeClass('selected');
		$(this).addClass('selected');
    	});
});

/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


/* -- Pop up box -- */

let popup = document.getElementById("popup");

function openPopup() {
	popup.classList.add("open-popup");
}

function closePopup(){
	popup.classList.remove("open-popup");
}

/* turn light */

function turnlight() {
	var lightson = document.getElementById("turnon");
	if (turnon.style.display === "none") {
	turnon.style.display = "block";

	document.getElementById("toggleImage").src = "turnon.png"
	} 
	
	else {
	turnon.style.display = "none";
	document.getElementById("toggleImage").src = "turnoff.png"

	}
}

/* Day */

var today = new Date();
var day = today.getDay();
var daylist = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];


var todayHTML = document.getElementById("todayHTML");


todayHTML.innerHTML = "Happy " + daylist[day] + "!";

