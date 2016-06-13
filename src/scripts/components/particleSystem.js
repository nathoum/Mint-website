import THREE from 'three'
import Particle from './particle'

export default class ParticleSystem extends THREE.Group {
  constructor() {
    super()

    this.particlesInstances = []
    this.particlesName = [
      'triangle',
      'circle',
      'square',
      'arc',
      'snake'
    ]

    for( let i = 0; i < this.particlesName.length; i++ ) {
      const particle = new Particle( this.particlesName[i] )
      this.add( particle )
      this.particlesInstances.push( particle )
    }
  }

  update( targetPosition ) {
    this.particlesInstances.forEach( ( particle ) => {
      particle.update( targetPosition )
    } )
  }
}
