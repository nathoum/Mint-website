import THREE from 'three'
import Mint from '../components/mint'
import Electron from '../components/electron'
import EventDispatcher from '../core/eventDispatcher'

export default class MainScene extends THREE.Scene {
  constructor() {
    super()

    this.initialized = false

    const colors = [
      'cyan',
      'red',
      'purple',
      'yellow',
      'orange'
    ]

    const colorIndex = Math.floor( Math.random() * colors.length )
    const chosenColor = colors[colorIndex]
    this.init( chosenColor )

    EventDispatcher.subscribe( 'buildMintWithParams', ( data ) => {
      if( !this.initialized ) {
        this.init( data.color )
      } else {
        this.mint.changeColor( data.color )
      }
    } )
  }

  init( color ) {
    this.initialized = true

    console.log( 'Build Mint with ' + color + ' color ' )
    this.mint = new Mint( color, 20 )
    this.add( this.mint )
  }

  update() {
    if( this.mint ) {
      this.mint.update()
    }
  }
}
