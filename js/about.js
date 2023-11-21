/*Acys bamif about.js 06.10.2022*/

var readyBar = '',
	readyAch = '';

var barObj = [
	{
		val:90,
		ind:0
	},{
		val:90,
		ind:0
	},{
		val:70,
		ind:0
	},{
		val:80,
		ind:0
	},{
		val:70,
		ind:0
	},{
		val:80,
		ind:0
	},{
		val:90,
		ind:0
	},{
		val:90,
		ind:0
	},{
		val:40,
		ind:0
	}
];

var achObj = [
	{
		val:50,
		ind:0
	},{
		val:20,
		ind:0
	},{
		val:30,
		ind:0
	}
];
	
function resetBars() {
	for(i = 0; i < 8; i++) {
		barObj[i].ind = 0;
	}
}

function resetAchs() {
	for(i = 0; i < 3; i++) {
		achObj[i].ind = 0;
	}
}

function barCount() {
	clearInterval(readyBar)
	readyBar = setInterval(bars, 100);
}

function achCount() {
	clearInterval(readyAch)
	readyAch = setInterval(achs, 100);
}

function bars() {
	for(i = 0; i < 8; i++) {
		if(barObj[i].ind < barObj[i].val) {
			barObj[i].ind += Math.round(barObj[i].val/10);
			document.getElementsByClassName('Bp')[i].getElementsByTagName('span')[0].style.width = barObj[i].ind + '%';
		}
		else {
			clearInterval(readyBar)
		}
	}
}

function achs() {
	for(i = 0; i < 3; i++) {
		if(achObj[i].ind < achObj[i].val) {
			achObj[i].ind += Math.round(achObj[i].val/10);
			document.getElementById('achiev').getElementsByTagName('span')[i].innerHTML = achObj[i].ind + '+';
		}
		else {
			clearInterval(readyAch)
		}
	}
}

(function () {
	"use strict";
	
// define variables
	var mySkill = document.querySelector(".skill");
	var myAchiev = document.querySelector("#achiev div:first-of-type");
	
// check if an element is in viewport
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
	
//call back function
	function callbackFunc() {
		if (isElementInViewport(mySkill))
			barCount();
		else if (isElementInViewport(mySkill) == false)
			resetBars()
		
		if (isElementInViewport(myAchiev))
			achCount();
		else if (isElementInViewport(myAchiev) == false)
			resetAchs()
	}
	
// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();
