import React from "react";
import './CSS/LoginSignup.css'

const  LoginSignup=()=>{
    return(
        <div className="loginsingup"> 
              <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="text"  placeholder="Email Address"/>
                    <input type="password" name="" id="" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account?<span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agee to the terms of use & privacy.</p>
                </div>
              </div>
              <hr />
        </div>
    )
}
export default LoginSignup