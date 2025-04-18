import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    console.log(all_product);
    console.log(cartItems);

    return (
        <div className="cartItem">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if ((cartItems?.[e.id] ?? 0) > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="remove" src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitem-total">
                    <h1>Cart Totel</h1>
                    <div>
                        <div className="cartitems-totel-item">
                            <p>Subtatal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-totel-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div className="cartitems-totel-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PRODUCT TO CHEAKOUT</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
