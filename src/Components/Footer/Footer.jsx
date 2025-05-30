import React from "react";
import './Footer.css'
import footer_logo from '../Assets/Shoping.jpeg'
import instagran_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer =()=>{
    return(
        <div className="footer">
         <div className="footer-logo">
            <img className="shop" src={footer_logo} alt="" />
            <p>SHOPPER</p>
         </div>
         <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
         </ul>
         <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img className="social" src={instagran_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img className="social" src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img className="social" src={whatsapp_icon} alt="" />
            </div>
         </div>
         <div  className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 -All Right Reserved</p>
         </div>
        </div>
    )
}
export default Footer