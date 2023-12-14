/*Acys bamif script.js 14.01.2023*/

var slideIndex = -1,
	curSlide = document.getElementsByClassName('services'),
	start = '';

// create the portfolio modal content
function openModal(xx) {

	document.getElementById("modal").innerHTML ='<div><img src="'+ myProjects[xx].img +'"alt="'+ myProjects[xx].head +'">'+
	'<div>'+
	'<h3>'+ myProjects[xx].head +'</h3>'+
	'<h5>'+ myProjects[xx].tag +'</h5><hr>'+
	'<p>'+ myProjects[xx].info +'</p>'+
	'<a href="'+ myProjects[xx].link +'">CHECK IT OUT</a>'+
	'<button class="closeButton" onclick="hideModal()">×</button></		div></div>';
	
	modal.style.display = "block";
}

//hide the portfolio modal
function hideModal() {
	modal.style.display = "none"
}

//portfolio modal content array
var myProjects = [
	
	{
		img:'images/ipaw.jpg',
		head:'Paw.com',
		tag:'WEB DESIGN / DEVELOPMENT',
		link:'https://paw.com',
		info:'Paw.com is an online pet supplies store that offers a wide range of products for cats, dogs and other small animals, fully designed with shopify .'
	},{
		img:'images/imemotiles.jpg',
		head:'Memotiles',
		tag:'HTML5 / DOM GAME',
		link:'images/memotiles.jpg',
		info:'A memory game with <b>count-down timer</b> and ability to switch between <b>strict</b> and <b>normal</b> mode and also packed with difficulty level for every age <b>(junior, senior and master)</b>.<br><small>for piracy reason there is no online preview for this game but you can view detailed screen shot here:</small>'
	},{
		img:'images/iclock.jpg',
		head:'3&nbsp;in&nbsp;1&nbsp;clock',
		tag:'WEB APP',
		link:'https://codepen.io/Acys/pen/ExeymOW',
		info:'Time is a very important thing in life, thats the reason for using a perfect 3 in 1 Clock app with <br><b>~Time and Date, <br>~Countdown timer</b> and <br><b>~stop watch</b> with <b>pause, continue</b> and <b>Reset</b> control.'
	},{
		img:'images/idiscerndecor.jpg',
		head:'Discerndecor',
		tag:'WEB DESIGN / DEVELOPMENT',
		link:'https://discerndecor.com',
		info:'Discerndecor is an online interior decorators and supplies store that offers a wide range of products from room lighting to furnitures and kitchen supplies, fully designed with WordPress Woocomerce.'
	},{
		img:'images/ifastmath.jpg',
		head:'Fast math',
		tag:'HTML5 / DOM GAME',
		link:'images/fastmath.jpg',
		info:'A basic arithmetic game with <b>count-down timer</b> that value UX giving players chance to switch between modes<b> (keys, quiz and input)</b>, and also packed with difficulty level for every age<b> (junior, senior and master)</b>.<br><small>for piracy reason there is no online preview for this game but you can view detailed screen shot here:</small>'
	},{
		img:'images/irandomgen.jpg',
		head:'Number & Password generator',
		tag:'WEB APP',
		link:'https://codepen.io/Acys/pen/qBMNjdo',
		info:'finding a random digit or new password is what this app is all about, with options for <b>number of outcomes, min and max value</b> to choose from and option to <b>include numbers</b> and(or) <b>symbols</b> while generating password.'
	},{
		img:'images/itsecure.jpg',
		head:'TSecure',
		tag:'WEB DESIGN / DEVELOPMENT',
		link:'https://acys-bamif.github.io/tsecure',
		info:'A blue themed bootstrap4 website template about cloud services and cyber security, showing their services and contact form to get in touch.'
	},{
		img:'images/ifixson.jpg',
		head:'Fixson',
		tag:'WEB DESIGN / DEVELOPMENT',
		link:'https://acys-bamif.github.io/fixson',
		info:'A blue themed bootstrap4 website template about Building repair and maintenance services, showing their services, testimonials, contact info and form to get in touch.'
	},{
		img:'images/iabdecorators.jpg',
		head:'AB Decorators',
		tag:'WEB DESIGN / DEVELOPMENT',
		link:'https://acys-bamif.github.io/abdecorators',
		info:'A 3 pages website template about interior designers designed with flexible box layout (flexbox). showing their services, some of their projects, staffs and contact form with address to get in touch.'
	}
];

(function () {
	"use strict";
	
// define variables
	var h2s = document.querySelectorAll(".sub-head");
	
// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
//initialize the default look with js so that it does not affect the look when script is disabled
	for (var i = 0; i < h2s.length; i++) {
		h2s[i].classList.add("animate-h2");
	}
		
//call back function codes
	function callbackFunc() {
		for (var i = 0; i < h2s.length; i++) {
			if (isElementInViewport(h2s[i])) {
				h2s[i].classList.add("h2-inview");
			}
			else {
				h2s[i].classList.remove("h2-inview");
			}
		}
	}
	
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();

(function () {
	"use strict";
	
// define variables
	var h2s = document.querySelectorAll(".qualities-div div h3");
	
// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
//initialize the default look with js so that it does not affect the look when script is disabled
	for (var i = 0; i < h2s.length; i++) {
		h2s[i].parentElement.parentElement.classList.add("animate-s-card");
	}
		
//call back function codes
	function callbackFunc() {
		for (var i = 0; i < h2s.length; i++) {
			if (isElementInViewport(h2s[i])) {
				h2s[i].parentElement.parentElement.classList.add("s-card-inview");
			}
			else {
				h2s[i].parentElement.parentElement.classList.remove("s-card-inview");
			}
		}
	}
	
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();
