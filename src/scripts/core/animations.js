 class Animations { 

    constructor() {

        this.init()

    }

    init() {
    	this.navlistItem = document.getElementsByClassName("navlist-item-link")
    	console.log('height: '+ window.innerHeight)
    	window.addEventListener('scroll', evt => this.scrollAction(evt))

    	this.animationOnScroll()
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
		    case (window.scrollY >= window.innerHeight * 5 && window.scrollY < window.innerHeight * 6):
		        TweenMax.to( this.navlistItem, 0.2, { color: "#4F4F4F", ease: Circ.easeInOut } )
		        break;

		    default:
		        console.log("else");
		        break;


		}
	}

	animationOnScroll() {


	    this.controller = new ScrollMagic.Controller({
		  globalSceneOptions: {
		      triggerHook: "onEnter"
		  }
		});


	    //H1 animation
		this.titleElements = document.getElementsByClassName("h1-anim");
		for ( let i = 0; i < this.titleElements.length; i++ ) { 
		   this.tween = TweenMax.fromTo(this.titleElements[i], 0.5, {css:{opacity: "0", marginLeft: "-50px"}}, {css:{opacity: "1", marginLeft: "0"}});
		   new ScrollMagic.Scene({
			  triggerElement: this.titleElements[i],
			  triggerHook: "onEnter",
			  offset: 100
			})
			.setTween(this.tween)
			.addTo(this.controller);
		}

		//Background image animation
		this.backgroundImg = document.getElementsByClassName("backgroundImg-anim");
		for ( let i = 0; i < this.backgroundImg.length; i++ ) { 
		   //this.tween = TweenMax.fromTo(this.backgroundImg[i], 0.5, {css:{"background-position": "0% 100%"}}, {css:{"background-position": "50% 100%"}});

		   this.tween = TweenMax.fromTo(this.backgroundImg[i], 0.5, {css:{"left": "-50px"}}, {css:{"left": "0px"}});

		   new ScrollMagic.Scene({
			  triggerElement: this.backgroundImg[i],
			  triggerHook: "onEnter",
			  offset: 200
			})
			.setTween(this.tween)
			.addTo(this.controller);
		}


	}

}


module.exports = new Animations()
