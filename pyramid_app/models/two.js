const mongoose = require('mongoose')

const threeScehma = new mongoose.Schema({
  name:{ type: String},
  dateNumber: {type: String},
  whoseBoy: {type: String},
  howWouldYouRate:{type: Number},
  pyramid:{type:Number},
})


const ThreeSeed = mongoose.model('Three', threeScehma)

module.exports = ThreeSeed


