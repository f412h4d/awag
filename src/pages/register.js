import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { AnimatedIconMemo } from '../components/Animated-Icon';
import girlLogin from '../images/girl-login.json';
import registerAnimation from '../images/user-registration.json';
import styles from './register.module.css';

const Register = () => {
  const [slideup, setSlideup] = useState(false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginInfo, setLoginInfo] = useState({});
  const [signupInfo, setSignupInfo] = useState({});

  const signup = () => {
    setSignupInfo({
      userName,
      password,
      email,
    });

    // todo remove when api call added
    console.log(signupInfo);
  };

  const signin = () => {
    setLoginInfo({
      userName,
      password,
    });

    // todo remove when api call added
    console.log(loginInfo);
  };

  const toggleSlide = () => {
    setSlideup(() => !slideup);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-structor']}>
        <div
          className={
            slideup ? `${styles['signup']} ${styles['slide-up']}` : styles['signup']
          }
        >
          <h2 className={styles['form-title']} onClick={toggleSlide}>
            <span>or</span>Sign up
          </h2>

          <div className={styles['form-holder']}>
            <input
              type='text'
              className={styles['input']}
              placeholder='Name'
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type='email'
              className={styles['input']}
              placeholder='Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type='password'
              className={styles['input']}
              placeholder='Password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className={styles['submit-btn']} onClick={signup}>
            Sign up
          </button>
        </div>

        <div
          className={
            slideup ? styles['login'] : `${styles['login']} ${styles['slide-up']}`
          }
        >
          <div className={styles['center']}>
            <h2 className={styles['form-title']} onClick={toggleSlide}>
              <span>or</span>Log in
            </h2>

            <div className={styles['form-holder']}>
              <input
                type='email'
                className={styles['input']}
                placeholder='Email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type='password'
                className={styles['input']}
                placeholder='Password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button className={styles['submit-btn']} onClick={signin}>
              Log in
            </button>
          </div>
        </div>
      </div>

      {slideup && (
        <motion.div animate={slideup ? 'open' : 'closed'} variants={variants}>
          <AnimatedIconMemo
            loop={true}
            iconWidth={'750px'}
            iconHeight={'750px'}
            animationData={registerAnimation}
          ></AnimatedIconMemo>
        </motion.div>
      )}

      {!slideup && (
        <motion.div animate={slideup ? 'closed' : 'open'} variants={variants}>
          <AnimatedIconMemo
            loop={true}
            iconWidth={'750px'}
            iconHeight={'750px'}
            animationData={girlLogin}
          ></AnimatedIconMemo>
        </motion.div>
      )}
    </div>
  );
};

export default Register;
