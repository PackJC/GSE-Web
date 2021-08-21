import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 0 ? item.quantity = 1 : item.quantity -= 1
            }
            if(item.quantity === 0 ){
                  removeProduct(item._id)
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)


    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>


    return (
        <div className="cartList">
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                    <img src={product.images.url} alt=""/>
                        <div className="box-detail">
                            <h2>{product.title}</h2>
                            <h3 className="price">$ {(product.price * product.quantity).toFixed(2)}</h3>
                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                                <p className="cartDesc">{product.description}</p>
                            </div>
                        </div>
                    </div>



                ))
            }
            <p className="cartTotal">Total (Pre-Tax) ${total.toFixed(2)}</p>
            <div className="detail cart ">
                <PaypalButton
                total={total}
                tranSuccess={tranSuccess} />
            </div>
        </div>
    )
}

export default Cart
