import THREE from 'three'
import ParticleSystem from './particleSystem'
import utils from '../vendors/utils'

export default class Curve extends THREE.Object3D {
  constructor( length, radius, color ) {
    super()

    this.radius = radius

    const curve = new THREE.EllipseCurve( 0, 0, radius, radius, 0, length, false, 0 )
    const curvePath = new THREE.CurvePath()
    curvePath.add( curve )
    const curveGeometry = curvePath.createPointsGeometry( 50 )
    curveGeometry.computeLineDistances()
    const curveMaterial = new THREE.LineBasicMaterial( {color: color, linewidth: 3} )
    this.curveMesh = new THREE.Line( curveGeometry, curveMaterial )
    this.add( this.curveMesh )

    this.headPosition = new THREE.Object3D

    this.particleSystem = new ParticleSystem()
    this.add( this.particleSystem )

    this.counter = Math.random() * 3000
  }

  updateColor( color ) {
    const rgbColor = utils.hexToRGB( color )
    TweenMax.to( this.curveMesh.material.color, 0.3, {
      r: rgbColor[0] / 255, g: rgbColor[1] / 255, b: rgbColor[2] / 255
    } )
  }

  update() {
    const ease = 0.4 * Math.sin( this.counter / 100 ) + 0.6
    const angle = Math.PI * ( this.counter ) / 180

    this.curveMesh.rotation.z = angle + Math.PI * 90 / 180

    this.headPosition.position.x = Math.cos( angle ) * -this.radius
    this.headPosition.position.y = Math.sin( angle ) * -this.radius

    this.counter += 10 * ease

    this.particleSystem.update( this.headPosition.position )
  }
}
