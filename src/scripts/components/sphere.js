import THREE from 'three'
import utils from '../vendors/utils'
const glslify = require( 'glslify' )

export default class Sphere extends THREE.Mesh {
  constructor( body, color, radius ) {
    const rgbColor = utils.hexToRGB( color )
    const sphereGeometry = new THREE.SphereGeometry( radius, 50, 50 )
    const sphereMaterial = new THREE.ShaderMaterial( {
      vertexShader: glslify( './shaders/sphere_vs.glsl' ),
      fragmentShader: glslify( './shaders/sphere_fs.glsl' ),
      uniforms: {
        time: {
          type: 'f',
          value: 0.0
        },
        opacity: {
          type: 'f',
          value: 1.0
        },
        coef: {
          type: 'f',
          value: 1.0
        },
        color1: {
          type: 'v3',
          value: new THREE.Vector3( rgbColor[0] / 255, rgbColor[1] / 255, rgbColor[2] / 255 )
        },
        color2: {
          type: 'v3',
          value: new THREE.Vector3( rgbColor[0] / 255, rgbColor[1] / 255, rgbColor[2] / 255 )
        }
      },
      transparent: true
    } )

    super( sphereGeometry, sphereMaterial )

    this.body = body
    this.start = Date.now()
    this.counter = 0

    if( !body ) {
      this.scale.x = this.scale.y = this.scale.z = 0.97
      this.material.uniforms.coef.value = 2.0
    }

    if( this.body ) {
      this.frequency = 0.00025
    } else {
      this.frequency = Math.random() * ( 0.00055 - 0.00025 ) + 0.00025
    }
  }

  updateColor( color ) {
    const rgbColor = utils.hexToRGB( color )
    TweenMax.to( this.material.uniforms.color1.value, 0.3, {
      x: rgbColor[0] / 255, y: rgbColor[1] / 255, z: rgbColor[2] / 255
    } )
  }

  update() {
    this.material.uniforms.time.value = this.frequency * ( Date.now() - this.start )
    this.counter++;
  }
}
