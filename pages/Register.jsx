import React from "react";
import register_icon from "../src/Components/assets/logo.png"

export default function Register(){
    return(
    
        <div id="register-form">
             <div className='logo'>
                    <img className='logo-img' src={register_icon} alt=""></img>
                </div>
    <h2>Register</h2>
    <form action="#" method="post">
      <input type="number" name="Mobile Number" placeholder="Enter 10 Digit Mobile Number" required/>
      <input type="password" name="password" placeholder="Password" required/>
      <input type="password" name="confirmPassword" placeholder="Confirm Password" required/>
      <button type="submit" id="register-btn">Sign Up</button>
    </form>
    <p className='member' >Already a member?  <span><a href="#" id="login-link">Login here</a></span> </p>
    
  </div>
    )
}