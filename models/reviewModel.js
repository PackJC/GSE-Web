const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  rating: {
    type: Number,
    required: true
  },
  user: {
    type: String,
    required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)
