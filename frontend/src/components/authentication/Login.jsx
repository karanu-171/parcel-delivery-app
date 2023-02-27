import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./auth.css"
import profile from "../../images/profile-icon.png";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    

  const loginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Login">
      <div className="main">
        <div>
          <div className="image">
            <div className="cont-image">
              <img src={profile} alt="profile" className="prof-pic" />
            </div>
          </div>
          <div>
            <h3>Login Page</h3>
            <form onSubmit={loginSubmit}>
              <div className="first-input">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="form-control"
                />
              </div>
              <div className="second-input">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="form-control"
                />
              </div>
              <div className="login-button">
                <Button type="submit" variant="primary">
                  Login
                </Button>
              </div>

              <div className="mt-3">
                <Link to="/register" className="text-decoration-none text-black">
                  Don't have an Account? Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
