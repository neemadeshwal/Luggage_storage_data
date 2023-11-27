import { useState } from 'react';
import eyeon from './Assets/eye.png';
import eyeoff from './Assets/hidden.png';
import profile from './Assets/png-transparent-computer-icons-user-login-swiggy-blue-text-computer-removebg-preview.png';

export default function Login() {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeoff);

  const handleToggle = () => {
    setType((prevState) => (prevState === 'text' ? 'password' : 'text'));

    
    setIcon((prevIcon) => (prevIcon === eyeoff ? eyeon : eyeoff));
  };

  return (
    <div className="container">
      <div className="logo">
        <img className="logo-img" src={profile} alt="" />
      </div>
      <h2 className="heading">Sign In</h2>
      <form action="/login" method="POST">
        <input
          className="fields"
          type="tel"
          placeholder="Enter your Phone"
          pattern="[0-9]{10}"
          required
        />
        <input
          className="fields"
          type={type}
          placeholder="Enter your password"
          required
        />
        <span>
          <img onClick={handleToggle} className="eye-img" src={icon} alt="" />
        </span>
        <button className="btn" type="submit">
          Sign In
        </button>
      </form>
      <div className="lower">
        <div className="left">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
      </div>
      <div className="footer">
        <p>
          Not a Member? <a href="#">Create an Account</a>
        </p>
      </div>
    </div>
  );
}
