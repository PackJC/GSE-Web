const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Number,
        required: true
    },
    date: {
        type: String
          }
}, {
    timestamps: true
})

module.exports = mongoose.model('Reviews', reviewSchema)
