const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  review_id:{
      type: String,
      unique: true,
      trim: true,
      required: true
  },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rate: {
        type: int,
        required: true
    },
    desc: {
        type: String,
        default: 0
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reviews', reviewSchema)
