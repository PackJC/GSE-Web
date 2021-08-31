import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'

function checkStock(stock){
  if(stock < 100 && stock > 0){
    return   <span style={{ color: "red" }}>Only {stock} left!</span>
  }
  if(stock < 1){
    return   <span style={{ color: "red" }}>Out of stock!</span>
  }
  else{
    return
  }
}



function DetailProduct() {

    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;
    if(detailProduct.stock < 1) return (

      <>
      <div className="detail detail1">
              <img src={detailProduct.images.url} alt="" />
          <div className="box-detail">
              <div className="row">
              <h2>{detailProduct.title}</h2>
              </div>
              <span>${detailProduct.price}</span>
              <br/>
              <span>{checkStock(detailProduct.stock)}</span>
              <br/>
              <p>{detailProduct.content}</p>
              <br/>
              <p>{detailProduct.description}</p>
              <br/>
              <button type="button" disabled className="cartButtonDisabled">
                  OUT OF STOCK
              </button>
              <br/>
              <div className="row">

              <Link to="/coa" className="cartButton">
                  View Certificate Of Analysis
              </Link>
              </div>
          </div>
      </div>

      <div>
          <h2>Related Products</h2>
          <div className="products">
              {
                  products.map(product => {
                      return product.category === detailProduct.category && product._id !== detailProduct._id
                          ? <ProductItem key={product._id} product={product} /> : null
                  })
              }
          </div>
      </div>
      <div>

      </div>
        </>

    );
    return (
        <>
            <div className="detail detail1">
                    <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                    <h2>{detailProduct.title}</h2>
                    </div>
                    <span>${detailProduct.price}</span>
                    <br/>
                    <span>{checkStock(detailProduct.stock)}</span>
                    <br/>
                    <p>{detailProduct.description}</p>
                    <br/>
                    <p>{detailProduct.content}</p>
                    <br/>
                    <div className="row">
                    <Link to="/cart" className="cartButton"
                    onClick={() => addCart(detailProduct)}>
                        Add to cart
                    </Link>
                    </div>

                    <br/>
                    <div className="row">

                    <Link to="/coa" className="cartButton">
                        View Certificate Of Analysis
                    </Link>
                    </div>

                    <br/>


                    {
                      <div>

                    </div>
}
                </div>
            </div>

            <div>
                <h2>Related Products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category && product._id !== detailProduct._id
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default DetailProduct
