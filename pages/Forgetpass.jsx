import {Link} from "react-router-dom"
export default function Forget_pass(){
    return(
        <div className="forgetpass-container">
      <h2>Forgot your Password?</h2>
      <form className="forget-pass-form">
      
          <p className="Mobile">Please Enter the Mobile Number</p>
          <input type="Number" id="Number" placeholder="10 Digit Mobile Number" required />
        <button type="submit" className="forget-pass-btn">Request Password Reset</button>
      </form>
      <Link className="login-link" to="/login">Back to Sign in</Link>
      </div>
    )
}