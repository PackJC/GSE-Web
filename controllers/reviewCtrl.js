const Review = require('../models/reviewModel')
const Products = require('../models/productModel')

const reviewCtrl = {
    getReviews: async(req, res) =>{
        try {
            const reviews = await Review.find()
            res.json(reviews)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createReview: async (req, res) =>{
        try {
            // if user have role = 1 ---> admin
            // only admin can create , delete and update category
            const {name, rating} = req.body;
            //how I will assign review to user
            let user1 = req.user.id;
            user = user1;
            const newReview = new Review({name, rating, user})

            await newReview.save()

            res.json({msg: "Created a new Review"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteReview: async(req, res) =>{
        try {

            await Review.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Review"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateReview: async(req, res) =>{
        try {
            const {name, rating} = req.body;
            await Review.findOneAndUpdate({_id: req.params.id}, {name, rating, user})

            res.json({msg: "Updated a Review"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = reviewCtrl
