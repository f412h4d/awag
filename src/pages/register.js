import React, { useState } from "react";
import styled from "styled-components";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginInfo, setLoginInfo] = useState({});
  const [signupInfo, setSignupInfo] = useState({});
  const signup = () => {
    setSignupInfo({
      userName,
      password,
      repeatPassword,
      email,
    });
  };
  const signin = () => {
    setLoginInfo({
      userName,
      password,
    });
  };
  return (
    <>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign In"
                  onClick={signin}
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  class="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign Up"
                  onClick={signup}
                />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
