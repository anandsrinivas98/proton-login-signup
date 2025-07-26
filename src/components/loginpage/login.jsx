import user from "../../assets/person.png";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import cartoon from "../../assets/cartoon.png";
import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaLinkedin} from "react-icons/fa";
import './signups.css';

function Register() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="main-container">
      {/* Left panel */}
      <div className="left-panel">
        <h2>Welcome! to proton!</h2>
        <p>
          All in one Platform to manage your educational structure
          Proton is an intelligent tool that binds and connects management, parents and students.
        </p>
        </div>
        
        <img src={cartoon} alt="student cartoon" className="cartoon-img" />

      {/* Right login/signup form */}
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={user} alt="USER NAME NOT FOUND" />
              <input type="text" placeholder="Username" />
            </div>
          )}
          <div className="input">
            <img src={email} alt="not found" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password} alt="PASSWORD" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {action === "Sign Up" ? null : (
          <div className="forget-password">
            Forget Password? <span>click here!!</span>
          </div>
        )}
        {action === "Login" ? null : (
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I accepted all <a>terms & conditions.</a></label>
          </div>
        )}

        <div className="divider">OR</div>
        <div className="social-login">
          <div className="google"><FaGoogle className='icon' /></div>
          <div className="facebook"><FaFacebook className='icon' /></div>
          <div className='linked-in'><FaLinkedin className='icon' /></div>
        </div>

        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
        </div>
      </div>
      </div>
  );
}

export default Register;
