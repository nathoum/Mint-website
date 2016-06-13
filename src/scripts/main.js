import Engine from './core/engine'
import animations from "core/animations"

const container = document.getElementById( 'canvas' )
const engine = new Engine( container.clientWidth, container.clientHeight, container )

window.addEventListener( 'resize', () => {
  engine.resize( container.clientWidth, container.clientHeight )
}, false )

console.log("mint")
