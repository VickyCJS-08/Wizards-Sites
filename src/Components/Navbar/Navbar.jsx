import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/Shoping.jpeg'
import cart_icon from '../Assets/cart_icon.png'
import nav_img from '../Assets/NavBar.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar =()=>{

const [menu,setMenu]=useState("shop");

const {getTotalCartItem}=useContext(ShopContext);

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img className="nav-logo-img" src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div >
                <img className="welcome" src={nav_img} alt="" />
            </div> 
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
                <li  onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}  to='/mens'>Men</Link> {menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}  to='/womens'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("wands")}}><Link style={{textDecoration:'none'}}  to='/wands'>Wands</Link>{menu==="wands"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("upcoming")}}><Link style={{textDecoration:'none'}}  to='/upcoming'>UpComing</Link>{menu==="upcoming"?<hr />:<></>}</li>
            </ul>
           
            <div className="nav-login-cart">
             <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img className="cart" src={cart_icon} alt="" /></Link>
                <div className="count">{getTotalCartItem()}</div>
            </div>
        </div>
    )
}
export default Navbar