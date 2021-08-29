const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  id:{
      type: Number,
      unique: true,
      trim: true,
      required: true
  },
    product_id: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    rate: {
        type: Number,
        required: true
    },
    desc: {
        type: String
          }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reviews', reviewSchema)
