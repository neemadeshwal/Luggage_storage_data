import { useState, useEffect } from 'react';
import { useGlobalContext } from '../src/context';
import { Link, useNavigate } from 'react-router-dom';
import profile from './Assets/png-transparent-computer-icons-user-login-swiggy-blue-text-computer-removebg-preview.png';

export default function Login() {
  const {
    passHideToggle,
    type,
    icon,
    handleInputChange,
    loginData,
    loginChecked,
    handleLoginChecked
  } = useGlobalContext();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginData.loginPhno && loginData.loginPassword) {
      if (loginChecked && isLoggedIn) {
        // Perform user authentication here, e.g., check against stored data
        const registerdAccounts = JSON.parse(localStorage.getItem("User-registerData")) || [];
        const findAccount = registerdAccounts.find((account) =>
          account.registerNum === loginData.loginPhno && account.registerPass === loginData.loginPassword
        );

        if (findAccount) {
          localStorage.setItem("User-LoginData", JSON.stringify(loginData));
          navigate("/");
        } else {
          console.log("No user found");
        }
      }
    } else {
      console.log("Please provide credentials");
    }
  };

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
          <input type="checkbox" onChange={handleLoginChecked} checked={loginChecked} />
          <p>Remember me</p>
        </div>
        <p>
          <Link className="forget-pass" to="/forgetpass">Forgot Password?</Link>
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
