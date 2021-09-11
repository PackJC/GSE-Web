import {useState, useEffect} from 'react'
import axios from 'axios'

function ReviewsAPI() {
    const [reviews, setReviews] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getReviews = async () =>{
            const res = await axios.get('/api/review')
            console.log(res.data)
            setReviews(res.data)
        }

        getReviews()
    },[callback])
    return {
        reviews: [reviews, setReviews],
        callback: [callback, setCallback]
    }
}

export default ReviewsAPI
