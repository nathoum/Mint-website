import THREE from 'three'
import MainScene from '../scenes/mainScene'
import EventDispatcher from '../core/eventDispatcher'

export default class Engine {
  constructor( width, height, container ) {
    this.camera = new THREE.PerspectiveCamera( 50, width / height, 0.1, 1000 )
    this.camera.position.set( 0, 0, 0 )
    this.camera.lookAt( new THREE.Vector3( 0, 0, 0 ) )

    this.renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } )
    this.renderer.setPixelRatio( window.devicePixelRatio )
    this.renderer.setSize( width, height )
    this.renderer.setClearColor( 0xffffff, 0.0 )
    this.container = container
    this.container.appendChild( this.renderer.domElement )

    this.init()
  }

  init() {
    this.scene = new MainScene()
    this.animate()

    const colorSelectors = document.querySelectorAll( '.colorSelector' )

    for( var i = 0; i < colorSelectors.length; i++ ) {
      const color = colorSelectors[i].getAttribute( 'data-color' )
      colorSelectors[i].addEventListener( 'click', () => {
        EventDispatcher.publish( 'buildMintWithParams', {color: color} )
      }, false )
    }
  }

  animate() {
    this.render()
  }

  render() {
    requestAnimationFrame( this.animate.bind( this ) )

    this.scene.update()

    this.renderer.render( this.scene, this.camera )
  }

  resize( width = window.innerWidth, height = window.innerHeight ) {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize( width, height )
  }
}
