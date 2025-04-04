import React from "react";
import './Breackcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';


const Breackcrum =(props)=>{
    const {product} =props;

 
    return(
        <div className="breackcrum">
           HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category}<img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}
export default Breackcrum