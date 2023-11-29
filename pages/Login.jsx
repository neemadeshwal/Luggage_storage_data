import { useState,useEffect } from 'react';
import { useGlobalContext } from '../src/context';
import { Link,useNavigate } from 'react-router-dom';
import profile from './Assets/png-transparent-computer-icons-user-login-swiggy-blue-text-computer-removebg-preview.png';

export default function Login() {
  const {passHideToggle,
    type,
    icon,
    handleInputChange,
    loginData,
  loginChecked,
   handleLoginChecked}=useGlobalContext()
   const navigate=useNavigate()

 let  isLoggedIn=true


const[userExist,setUserExist]=useState(false)
//    function userAuthentication(){
//     const loginInfo=JSON.parse(localStorage.getItem("User-LoginData"))
//       console.log(loginInfo)
//     const registerdAccounts=JSON.parse(localStorage.getItem("User-registerData"))  
//      const findAccount=registerdAccounts.filter((account)=>
      

//       account.registerNum==loginData.loginPhno && account.registerPass==loginData.loginPassword)
            
      
      
//       // account.registerNum==loginData.loginPhno && account.registerPass==loginData.loginPassword})
//     console.log(findAccount)
//      if(findAccount){
//       setUserExist(true)
//       console.log("yes account exist")
//      }
//      else{
//       setUserExist(false)
//      }
//      if(loginInfo && userExist){
//         navigate("/")
//       }
//       else{
//         console.log("no user found")
//         return;
//       }
//    }
 
//   useEffect(()=>{
//     userAuthentication()
// },[])

   function handleLoginSubmit(e){
 
    e.preventDefault()
    console.log(loginData.loginPhno)
   if(loginData.loginPhno &&  loginData.loginPassword){
    console.log(loginChecked,isLoggedIn)
    console.log("got data")
    if(loginChecked&&isLoggedIn){
     localStorage.setItem("User-LoginData",JSON.stringify(loginData))
      console.log("saved to local storage")
       navigate("/")
    }
   }
   else {
    console.log("Please provide credentials")

   }
   console.log(loginData)
  
  }
  return (
    <div className="login-container">
      <div className="logo">
        <img className="logo-img" src={profile} alt="" />
      </div>
      <h2 className="heading">Sign In</h2>
      <form onSubmit={handleLoginSubmit} action="/login" className='login-form' method="POST">
        <div className='input-container'>
        <input
          className="fields"
          type="tel"
          name="loginPhno"
          placeholder="Enter your Phone"
          onChange={handleInputChange}
          value={loginData.loginPhno}
          // pattern="[0-9]{10}"
          required
        />
        </div>
        <div className='input-container'>
        <input
          className="fields"
          type={type}
          name="loginPassword"
          placeholder="Enter your password"
          onChange={handleInputChange}
          value={loginData.loginPassword}
          required
        />
        <span>
          <img onClick={passHideToggle} className="eye-img-icon" src={icon} alt="" />
        </span>
        </div>
        <button className="login-btn" type="submit">
          Sign In
        </button>
      </form>
      <div className="lower">
        <div className="left">
          <input type="checkbox" onChange={handleLoginChecked} value={loginChecked} />
          <p>Remember me</p>
        </div>
        <p>
          <Link  className="forget-pass" to="/forgetpass">Forgot Password?</Link>
        </p>
      </div>
      <div className="footer">
        <p>
          Not a Member? <Link className='register-link' to="/register">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}
