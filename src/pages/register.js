import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
  const [slideup, setSlideup] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginInfo, setLoginInfo] = useState({});
  const [signupInfo, setSignupInfo] = useState({});
  const signup = () => {
    setSignupInfo({
      userName,
      password,
      email,
    });
  };
  const signin = () => {
    setLoginInfo({
      userName,
      password,
    });
  };
  const toggleSlide = () => {
    setSlideup(!slideup);
  };
  return (
    <div className="form-container">
      <div className="form-structor">
        <div className={slideup ? "signup slide-up" : "signup"}>
          <h2 className="form-title" onClick={toggleSlide}>
            <span>or</span>Sign up
          </h2>
          <div className="form-holder">
            <input
              type="text"
              className="input"
              placeholder="Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="email"
              className="input"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="submit-btn" onClick={signup}>
            Sign up
          </button>
        </div>
        <div className={slideup ? "login" : "login slide-up"}>
          <div className="center">
            <h2 className="form-title" onClick={toggleSlide}>
              <span>or</span>Log in
            </h2>
            <div className="form-holder">
              <input
                type="email"
                className="input"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="submit-btn" onClick={signin}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
