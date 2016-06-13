import THREE from 'three'
import Comet from './comet'
import Curve from './curve'

export default class Electron extends THREE.Group {
  constructor( colorComet, colorCurve, radius ) {
    super()

    this.radius = radius + 3

    this.comet = new Comet( colorComet, this.radius )
    this.add( this.comet )

    this.curve = new Curve( Math.PI / 2, this.radius, colorCurve )
    this.curve.rotation.x = Math.random() * Math.PI * 2
    this.curve.rotation.y = Math.random() * Math.PI * 2
    this.curve.rotation.z = Math.random() * Math.PI * 2
    this.add( this.curve )

    this.resetting = false
    this.timeBeforeResetting = 0
    this.randomize()
  }

  randomize() {
    this.resetting = true

    if( this.resetting ) {
      setTimeout( () => {
        this.comet.rotation.x = Math.random() * Math.PI * 2
        this.comet.rotation.y = Math.random() * Math.PI * 2
        this.comet.rotation.z = Math.random() * Math.PI * 2

        this.timeToLive = this.maxTimeToLive = Math.random() * ( 1000 - 800 ) + 800
        this.timeToLiveVelocity = Math.random() * ( 8 - 5 ) + 5

        this.resetting = false
        this.timeBeforeResetting = Math.random() * ( 3000 - 1000 ) + 1000
      }, this.timeBeforeResetting )
    }
  }

  update() {
    this.timeToLive -= this.timeToLiveVelocity

    const scale = this.timeToLive / this.maxTimeToLive
    if( scale >= 0 ) {
      this.comet.headMesh.scale.x = this.comet.headMesh.scale.y = this.comet.headMesh.scale.z = scale
      this.comet.tailMesh.scale.x = this.comet.tailMesh.scale.y = this.comet.tailMesh.scale.z = scale
    }

    if( this.timeToLive < 0 && !this.resetting ) {
      this.randomize()
    }

    this.comet.update()
    if( this.curve ) {
      this.curve.update()
    }
  }
}
