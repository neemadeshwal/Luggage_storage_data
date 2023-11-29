import React from "react";

export default function Forget_pass(){
    return(
        <div className="forgetpass-container">
      <h2>Forgot your Password?</h2>
      <form>
        <div className="form-group">
          <p className="Mobile">Please Enter the Mobile Number</p>
          <input type="Number" id="Number" placeholder="10 Digit Mobile Number" required />
        </div>
        <button type="submit" className="forgetpass-btn">Request Password Reset</button>
      </form>
      <a className="signin" href="#">Back to Sign in</a>
    </div>
    )
}