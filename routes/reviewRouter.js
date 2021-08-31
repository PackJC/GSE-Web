const router = require('express').Router()
const categoryCtrl = require('../controllers/reviewCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/review')
    .get(categoryCtrl.getReviews)
    .post(auth, authAdmin, reviewCtrl.createReview)

router.route('/review/:id')
    .delete(auth, authAdmin, reviewCtrl.deleteReview)
    .put(auth, authAdmin, reviewCtrl.updateReview)


module.exports = router
