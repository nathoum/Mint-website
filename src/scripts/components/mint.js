import THREE from 'three'
import Sphere from './sphere'
import Electron from './electron'
import EventDispatcher from '../core/eventDispatcher'

export default class Mint extends THREE.Group {
  constructor( color, radius ) {
    super()

    this.loop = true

    this.colors = {
      'cyan': {
        'mintBodyColor': 0x59D2BA,
        'mintKink1Color': 0x67E4CC,
        'mintKink2Color': 0x7CF1DA,
        'electronsColor': 0x7CF1DA,
        'curvesColor': 0xFEE15F
      },
      'red': {
        'mintBodyColor': 0xEF2966,
        'mintKink1Color': 0xF77A9E,
        'mintKink2Color': 0xF4527C,
        'electronsColor': 0xF4527C,
        'curvesColor': 0x7CF1DA
      },
      'purple': {
        'mintBodyColor': 0xB249FB,
        'mintKink1Color': 0xD08CF4,
        'mintKink2Color': 0xBF69F9,
        'electronsColor': 0xBF69F9,
        'curvesColor': 0xFEE15F
      },
      'yellow': {
        'mintBodyColor': 0xFED330,
        'mintKink1Color': 0xFEEC60,
        'mintKink2Color': 0xFEE15F,
        'electronsColor': 0xFEE15F,
        'curvesColor': 0x7CF1DA
      },
      'orange': {
        'mintBodyColor': 0xFC6721,
        'mintKink1Color': 0xFA9557,
        'mintKink2Color': 0xFD7E36,
        'electronsColor': 0xFD7E36,
        'curvesColor': 0xFEE15F
      }
    }

    this.color = color
    this.originalColor = color

    this.mintBody = new Sphere( true, this.colors[this.color].mintBodyColor, radius )
    this.add( this.mintBody )

    this.mintKink1 = new Sphere( false, this.colors[this.color].mintKink1Color, radius )
    this.add( this.mintKink1 )

    this.mintKink2 = new Sphere( false, this.colors[this.color].mintKink2Color, radius )
    this.add( this.mintKink2 )

    this.electrons = []
    for( let i = 0; i < 3; i++ ) {
      const electron = new Electron( this.colors[this.color].electronsColor, this.colors[this.color].curvesColor, radius )
      this.electrons.push( electron )
      this.add( electron )
    }

    EventDispatcher.subscribe( 'buildMintWithParams', ( data ) => {
      this.loop = false
    } )

    // Debug
    this.position.z = -60

    setInterval( () => {
      this.updateColor()
    }, 2000 )
  }

  changeColor( color ) {
    this.mintBody.updateColor( this.colors[color].mintBodyColor )
    this.mintKink2.updateColor( this.colors[color].mintKink2Color )
    this.mintKink1.updateColor( this.colors[color].mintKink1Color )

    this.electrons.forEach( ( electron ) => {
      electron.comet.updateColor( this.colors[color].electronsColor )
      if( electron.curve ) {
        electron.curve.updateColor( this.colors[color].curvesColor )
      }
    } )
  }

  updateColor() {
    if( this.loop ) {
      const newColorsObject = Object.assign( {}, this.colors )
      delete newColorsObject[this.color]
      const colorIndex = Math.floor( Math.random() * Object.keys( newColorsObject ).length )
      const nextColor = Object.keys( newColorsObject )[colorIndex]
      this.color = nextColor

      this.changeColor( this.color )
    }
  }

  update() {
    this.mintBody.update()
    this.mintKink1.update()
    this.mintKink2.update()
    this.electrons.forEach( ( electron ) => {
      electron.update()
    } )
  }
}
