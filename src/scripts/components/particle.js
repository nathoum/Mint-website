import THREE from 'three'

export default class Particle extends THREE.Sprite {
  constructor( geometry ) {

    const loader = new THREE.TextureLoader()
    const particleMap = loader.load( 'images/particles/' + geometry + '.png' )
    const particleMaterial = new THREE.SpriteMaterial( {map: particleMap, transparent: true} )
    super( particleMaterial )

    this.randomize()
  }

  randomize() {
    this.timeToLive = this.maxTimeToLive = Math.random() * ( 200 - 100 ) + 100
    this.timeToLiveVelocity = Math.random() * ( 10 - 5 ) + 5
  }

  update( targetPosition ) {
    this.timeToLive -= this.timeToLiveVelocity

    const scale = this.timeToLive / this.maxTimeToLive
    if( scale >= 0 ) {
      this.scale.x = this.scale.y = scale
    }

    this.material.rotation += this.timeToLiveVelocity / 100

    if( this.timeToLive < 0 ) {
      this.timeToLive = this.maxTimeToLive
      this.randomize()
      this.position.set( targetPosition.x + Math.random() * 4 - 2, targetPosition.y + Math.random() * 4 - 2, targetPosition.z + Math.random() * 4 - 5 )
    }
  }
}
