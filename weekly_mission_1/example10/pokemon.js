/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Pokemon {
    constructor (name) {
      this.name = name
    }

    // método para que el pokemón salude
    sayHello (message) {
        console.log(`Mi pokemón ${this.name} te saluda!!!`)
      }
    
      // método para que el pokemón diga Hey
      sayMessage (message) {
        console.log(`Mi pokemón ${this.name} dice: ${message}`)
      }
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
    }
  }