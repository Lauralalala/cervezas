const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
module.exports = {
  todas: cervezas,
  primera: cervezas[0],
  alazar: uniqueRandomArray(cervezas)
}
