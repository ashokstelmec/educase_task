import React, { useState } from "react";
import FormInput from "./FormInput";
import Icons from "./Icons";

const Form = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
    <div className="content">
      <div className="header-content">
        <img src="./Image/logo512.png" alt="logo" className="react-logo" />
        <p className="header-text">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
      </div>

      <div className="button-element">
        <button type="button"
          className = { login ? 'btn active' : 'btn'} 
          onClick={() => setLogin(true)}
        >
          Login
        </button>
        <button type="button" 
          className = { !login ? 'btn active' : 'btn'}  
          onClick={() => setLogin(false)}
        >
          Signup
        </button>
      </div>

      <form className="form-center">
        <FormInput type="email" placeholder="Email Address" />
        <FormInput type="password" placeholder="Password" />
        {!login && (
        <div>
          <FormInput type="password" placeholder="Confirm Password" />  
          <FormInput type="number" placeholder="Mobile Number" />
        </div>
        )}
        <button type="button" className="login-button">
          {login ? "LOGIN" : "SIGNUP"}
        </button>
        {login && <p className="form-password">Forgot Password?</p>}
        <p className="loginWith">
          {login ? "or login with" : "or signup with"}
        </p>
      </form>

      <Icons />
    </div>
    </>
  );
};

export default Form;