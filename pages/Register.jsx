import register_icon from "../src/Components/assets/logo.png";
import { useGlobalContext } from "../src/context";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const {
    passHideToggle,
    type,
    icon,
    handleInputChange,
    registerData,
  } = useGlobalContext();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    // Your registration logic here
  }

  return (
    <div id="register-form">
      <div className="msg"></div>
      <div className="logo">
        <img className="logo-img" src={register_icon} alt="" />
      </div>
      <h2>Register</h2>
      <form method="post" onSubmit={handleRegisterSubmit}>
      <div className="password-container">
      <input
          className="fields"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          onChange={handleInputChange}
          value={registerData.name}
        />
      </div>
        <div className="password-container">
        <input
          className="fields"
          type="tel"
          name="registerNum"
          placeholder="Enter 10 Digit Mobile Number"
          onChange={handleInputChange}
          value={registerData.registerNum}
          pattern="[0-9]{10}"
          title="please enter your  10 digit number"
          required
        />
        </div>
        <div className="password-container">
          <input
            type={type}
            name="registerPass"
            placeholder="Password"
            onChange={handleInputChange}
            value={registerData.registerPass}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <span>
            <img
              onClick={passHideToggle}
              className="eye-img-icon"
              src={icon}
              alt=""
            />
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
            required
          />
          <span>
            <img
              onClick={passHideToggle}
              className="eye-img-icon"
              src={icon}
              alt=""
            />
          </span>
        </div>

        <button type="submit" className="register-btn">
          Sign Up
        </button>
      </form>
      <p className="member">
        Already a member?{" "}
        <span>
          <Link to="/login" id="login-link">
            Login here
          </Link>
        </span>{" "}
      </p>
    </div>
  );
}
