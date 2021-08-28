import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    if(product.stock < 1){
      return (
          <div className="row_btn">
              {
                  isAdmin ?
                  <>
                      <Link id="btn_del" to="#!"
                      onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                          Delete
                      </Link>
                      <Link id="btn_view" to={`/edit_product/${product._id}`}>
                          Edit
                      </Link>
                  </>
                  :
                  <>
                  <button type="button" disabled className="cartButtonDisabled">
                      OUT OF STOCK
                  </button>
                  </>
              }

          </div>
      )
    }
    else{
      return (
          <div className="row_btn">
              {
                  isAdmin ?
                  <>
                      <Link id="btn_del" to="#!"
                      onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                          Delete
                      </Link>
                      <Link id="btn_view" to={`/edit_product/${product._id}`}>
                          Edit
                      </Link>
                  </>
                  :
                  <>
                      <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                          Add To Cart
                      </Link>
                  </>
              }

          </div>
      )
  }
}
export default BtnRender
