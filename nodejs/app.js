// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name =require('./4-names')
const sayHi = require("./5-utils")
const data = require("./6-alternative-flavors")

require('./7-mind-grenade')

console.log(data)

sayHi('susan')
sayHi(name.john)
sayHi(name.akshat)