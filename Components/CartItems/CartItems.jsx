import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="formatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            <div className="itemsformat formatmain">
                <img className='producticon' src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='itemsquantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='itemremove' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="itemdown">
        <div className="itemtotal">
            <h1>Cart Totals</h1>
            <div>
                <div className="itemtotalitem">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="itemtotalitem">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                    <hr />
                    <div className="itemtotalitem">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="promocode">
                <p>If you have promo code , Enter it here</p>
                <div className="promobox">
                    <input type="text"  placeholder='promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
