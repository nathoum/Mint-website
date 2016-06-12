const Mediator = require( 'mediator-js' ).Mediator

class EventDispatcher extends Mediator {
  constructor() {
    super()
  }
}

window.mediator = new EventDispatcher()
module.exports = window.mediator
