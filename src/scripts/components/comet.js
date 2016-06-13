import THREE from 'three'
import utils from '../vendors/utils'

export default class Comet extends THREE.Object3D {
  constructor( color, radius ) {
    super()

    this.radius = radius
    this.headRadius = this.radius / 25

    const cometMaterial = new THREE.MeshBasicMaterial( {color: color} )

    const headGeometry = new THREE.SphereGeometry( this.headRadius, 15, 15 )
    this.headMesh = new THREE.Mesh( headGeometry, cometMaterial )
    this.add( this.headMesh )

    const tailHeight = 10
    this.rings = 4
    this.verticesPerRings = 15

    const tailGeometry = new THREE.CylinderGeometry( this.headRadius, 0.1, tailHeight, this.verticesPerRings, this.rings, true )
    this.tailMesh = new THREE.Mesh( tailGeometry, cometMaterial )
    this.add( this.tailMesh )

    this.oldPositions = []
    for( let i = 0; i < this.rings; i++ ) {
      this.oldPositions.push( new THREE.Vector3() )
    }

    this.originalPositions = []
    this.tailMesh.geometry.vertices.map( ( vertex ) => {
      this.originalPositions.push( this.clone( vertex ) )
    } )

    this.oldPositionsLength = this.oldPositions.length

    this.counter = Math.random() * 3000
  }

  updateColor( color ) {
    const rgbColor = utils.hexToRGB( color )
    TweenMax.to( this.headMesh.material.color, 0.3, {
      r: rgbColor[0] / 255, g: rgbColor[1] / 255, b: rgbColor[2] / 255
    } )
  }

  update() {
    // Sinus between 0.2 and 1.0
    const ease = 0.4 * Math.sin( this.counter / 100 ) + 0.6
    const angle = Math.PI * ( this.counter ) / 180
    this.headMesh.position.x = Math.cos( angle ) * -this.radius
    this.headMesh.position.y = Math.sin( angle ) * -this.radius
    this.counter += 10 * ease

    // Remove the last value of the array
    const newPosition = this.clone( this.headMesh.position )
    this.oldPositions.pop()
    this.oldPositions.unshift( newPosition )

    this.tailMesh.geometry.verticesNeedUpdate = true

    let j = 0
    let geoIndex = 0
    const distance = new THREE.Vector3()
    const circleVertices = this.verticesPerRings + 5

    for( let i = 0; i < this.oldPositionsLength; i++ ) {
      distance.subVectors( this.oldPositions[0], this.oldPositions[i] )

      for( j = 0; j < circleVertices; j++ ) {
        geoIndex = i * circleVertices + j
        // this.tailMesh.position.x = this.headMesh.position.x
        // this.tailMesh.position.y = this.headMesh.position.y
        // this.tailMesh.position.z = this.headMesh.position.z
        // this.tailMesh.geometry.vertices[geoIndex].x = this.originalPositions[geoIndex].x - distance.x
        // this.tailMesh.geometry.vertices[geoIndex].y = this.originalPositions[geoIndex].x - distance.y
        // this.tailMesh.geometry.vertices[geoIndex].z = this.originalPositions[geoIndex].z - distance.z
      }
    }
  }

  clone( object ) {
    return JSON.parse( JSON.stringify( object ) )
  }
}
