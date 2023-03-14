const mongoose = require('mongoose')

const threeScehma = new mongoose.Schema({
  Name: { type: String, required: true},
  Date Number: { type: String, required: true},
  Whose Date: Boolean
  How Would You Rate:
})

const ThreeSeed = mongoose.model('Three', threeScehma)

module.exports = ThreeSeed


