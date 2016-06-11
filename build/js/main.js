(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
class Animations {

				constructor() {

								this.init();
				}

				init() {
								this.navlistItem = document.getElementsByClassName("navlist-item-link");
								console.log('height: ' + window.innerHeight);
								window.addEventListener('scroll', evt => this.scrollAction(evt));
				}

				scrollAction(evt) {
								switch (true) {
												case window.scrollY <= window.innerHeight:
																TweenMax.to(this.navlistItem, 0.2, { color: "white", ease: Circ.easeInOut });
																break;
												case window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight * 2:
																TweenMax.to(this.navlistItem, 0.2, { color: "#FF7E27", ease: Circ.easeInOut });
																break;
												case window.scrollY >= window.innerHeight * 2 && window.scrollY < window.innerHeight * 3:
																TweenMax.to(this.navlistItem, 0.2, { color: "#9145DB", ease: Circ.easeInOut });
																break;
												case window.scrollY >= window.innerHeight * 3 && window.scrollY < window.innerHeight * 4:
																TweenMax.to(this.navlistItem, 0.2, { color: "#77F2DA", ease: Circ.easeInOut });
																break;
												case window.scrollY >= window.innerHeight * 4 && window.scrollY < window.innerHeight * 5:
																TweenMax.to(this.navlistItem, 0.2, { color: "#FF0B45", ease: Circ.easeInOut });
																break;
												case window.scrollY >= window.innerHeight * 5 && window.scrollY < window.innerHeight * 6:
																TweenMax.to(this.navlistItem, 0.2, { color: "#4F4F4F", ease: Circ.easeInOut });
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
