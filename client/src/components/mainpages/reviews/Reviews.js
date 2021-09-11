import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../GlobalState'



import axios from 'axios'

function Reviews() {
    const state = useContext(GlobalState)
    const [reviews] = state.reviewsAPI.reviews

    const [review, setReview] = useState('')
    const [token] = state.token
    const [callback, setCallback] = state.reviewsAPI.callback
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')

    const handleChangeInput = e =>{
      const {name, value} = e.target
      setReview({...review, [name]:value})
    }

    const createReview = async e =>{
        e.preventDefault()
        try {
            if(onEdit){
              console.log(review);
                const res = await axios.put(`/api/review/${id}`, {...review}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/review', {...review}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg + "Line 26")
            }
            setOnEdit(false)
            setReview('')
            setCallback(!callback)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const editReview = async (id, name, rating) =>{
        setID(id)
        //needs to be renamed setName
        setReview(name, rating)
        setOnEdit(true)
    }

    const deleteReview = async id =>{
        try {
            const res = await axios.delete(`/api/review/${id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="reviews">

        <form onSubmit={createReview}>

                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" required
                value={review.name} onChange={handleChangeInput} />

                <label htmlFor="rating">rating</label>
                <input type="Number" name="rating" id="rating" required
                value={review.rating} onChange={handleChangeInput} />


            <button type="submit">{onEdit? "Update" : "Create"}</button>
        </form>

            <div className="col">
                {
                    reviews.map(review => (
                        <div className="row" key={review._id}>
                        <p>{review.name}</p>
                        <p>{review.rating}</p>

                            <div className="editButtons">
                                <button onClick={() => editReview(review._id, review.name, review.rating)}>Edit</button>
                                <button onClick={() => deleteReview(review._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews
