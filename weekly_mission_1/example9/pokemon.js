class Pokemon {
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }
  
    // método para que el pokemón salude
    sayHello (message) {
      console.log(`Mi pokemón ${this.name} te saluda!!!`)
    }
  
    // método para que el pokemón diga Hey
    sayMessage (message) {
      console.log(`Mi pokemón ${this.name} dice: ${message}`)
    }
  }
  
  // Esta clase se exporta en este módulo
  module.exports = Pokemon