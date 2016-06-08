(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class Animations {

				constructor() {

								this.init();
				}

				init() {
								console.log('height: ' + window.innerHeight);
								window.addEventListener('scroll', evt => this.scrollAction(evt));
				}

				scrollAction(evt) {
								//document.getElementsByClassName("header")[i].className = "header"

								//console.log("val: " + window.scrollY)

								/*if(window.scrollY >= window.innerHeight) {
        	console.log("bigger!")
        }*/

								//var x = this.dealer;
								switch (true) {
												case window.scrollY < window.innerHeight:
																console.log("section 1");
																//document.getElementsByClassName("header")[i].className = ".header .header--whiteTint"
																document.querySelector(".header").className = "header header--whiteTint";
																break;
												case window.scrollY > window.innerHeight && window.scrollY < window.innerHeight * 2:
																console.log("section 2");
																document.querySelector(".header").className = "header header--yellowTint";
																//document.querySelector(".header").classList.add("header--yellowTint")
																break;
												case window.scrollY > window.innerHeight * 2 && window.scrollY < window.innerHeight * 3:
																console.log("section 3");
																document.querySelector(".header").className = "header header--purpleTint";
																//document.querySelector(".header").classList.add("header--purpleTint")
																break;
												case window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 4:
																console.log("section 4");
																document.querySelector(".header").className = "header header--turquoiseTint";
																//document.querySelector(".header").classList.add("header--turquoiseTint")
																break;
												default:
																console.log("else");
																break;

								}
				}

}

module.exports = new Animations();

},{}],2:[function(require,module,exports){
const animations = require("core/animations");

console.log("mint");

},{"core/animations":1}]},{},[2]);
