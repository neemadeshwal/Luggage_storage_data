import React, { useEffect } from "react";
import register_icon from "../src/Components/assets/logo.png"
import { useGlobalContext } from "../src/context";
import { Link,useNavigate } from "react-router-dom";


export default function Register(){
  const navigate=useNavigate()
  const {passHideToggle,type,icon,handleInputChange,registerData}=useGlobalContext()

  
  const getRegisterUserArray=JSON.parse(localStorage.getItem("User-registerData"))|| []
function handleRegisterSubmit(e){
  e.preventDefault()
  if(registerData.registerPass===registerData.registerConfirmPass){
    getRegisterUserArray.push(registerData)
    console.log("created register data")
    console.log(getRegisterUserArray)
    localStorage.setItem("User-registerData",JSON.stringify(getRegisterUserArray))
    alert("account successfullly created")
    navigate("/login")
    // setTimeout(()=>navigate("/login"),3000)
  }
  else{
    displayMsgs()
    
    //   const showMsg=document.querySelector(".msg")
    // showMsg.textContent="Password donot match.Please try again"
    // showMsg.classList.add(`alert-failed`)'

    // setTimeout(()=>{
    //   showMsg.textContent=""
    //   showMsg.classList.remove(`alert-failed`)
    // },1000)
    //  displayMsg("Password donot match.Please try again","failed")
    }
    console.log("password doesnt match")
  }
  console.log(registerData)
 



    return(
    
        <div id="register-form">
 _add_functionality
          <div className="msg">
            
          </div>
             <div className='logo'>
                    <img className='logo-img' src={register_icon} alt=""></img>
                </div>
    <h2>Register</h2>
    <form  method="post" onSubmit={handleRegisterSubmit}>
      <input
      className="fields"
       type="text"
        name="name" 
        placeholder="Enter your name" required
        onChange={handleInputChange}
        value={registerData.name}/>
      <input 
      className="fields"
      type="tel"
      name="registerNum"
      placeholder="Enter 10 Digit Mobile Number"
      onChange={handleInputChange}
      value={registerData.registerNum}
      pattern="[0-9]{10}"
      title="please enter your  10 digit number"
     
      required/>
      <div className="password-container">
      <input 
      type={type}
       name="registerPass" 
       placeholder="Password" 
       onChange={handleInputChange}
       value={registerData.registerPass}
       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
       title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
       required/>
      <span>
          <img onClick={passHideToggle} className="eye-img" src={icon} alt="" />
        </span>
        </div>
       <div className="password-container">
      <input
       type={type} 
       name="registerConfirmPass" 
       placeholder="Confirm Password"
       onChange={handleInputChange}
       value={registerData.registerConfirmPass}
       pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
       required/>
      <span>
          <img onClick={passHideToggle} className="eye-img" src={icon} alt="" />
        </span>
        </div>

            <div className='logo'>
                    <img className='logo-img' src={register_icon} alt=""></img>
                </div>
    <h2>Register</h2>
    <form id="form" action="#" method="post">
      <input type="number" name="Mobile Number" placeholder="Enter 10 Digit Mobile Number" required/>
      <input type="password" name="password" placeholder="Password" required/>
      <input type="password" name="confirmPassword" placeholder="Confirm Password" required/>
 master
      <button type="submit" id="register-btn">Sign Up</button>
    </form>
    <p className='member' >Already a member?  <span><Link to="/login" id="login-link">Login here</Link></span> </p>
    
  </div>
    )
}