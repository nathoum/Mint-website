 class Animations { 

    constructor() {

        this.init()

    }

    init() {
    	this.navlistItem = document.getElementsByClassName("navlist-item-link")
    	console.log('height: '+ window.innerHeight)
    	window.addEventListener('scroll', evt => this.scrollAction(evt))
    }

    scrollAction(evt) {
		switch (true) {
		    case (window.scrollY <= window.innerHeight):
		       TweenMax.to( this.navlistItem, 0.2, { color: "white", ease: Circ.easeInOut } )
		        break;
		    case (window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight * 2):
		        TweenMax.to( this.navlistItem, 0.2, { color: "#FF7E27", ease: Circ.easeInOut } )
		        break;
		    case (window.scrollY >= window.innerHeight * 2 && window.scrollY < window.innerHeight * 3):
		        TweenMax.to( this.navlistItem, 0.2, { color: "#9145DB", ease: Circ.easeInOut } )
		        break;
		    case (window.scrollY >= window.innerHeight * 3 && window.scrollY < window.innerHeight * 4):
		        TweenMax.to( this.navlistItem, 0.2, { color: "#77F2DA", ease: Circ.easeInOut } )
		        break;
		    case (window.scrollY >= window.innerHeight * 4 && window.scrollY < window.innerHeight * 5):
		        TweenMax.to( this.navlistItem, 0.2, { color: "#FF0B45", ease: Circ.easeInOut } )
		        break;
		    default:
		        console.log("else");
		        break;


		}
	}

}


module.exports = new Animations()
