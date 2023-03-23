import React from "react";

function Icons() {
  return (
    <div className="icons">
      <div className="social-media-icons">
        <div className="logos">
          <img src="./Image/google.svg" alt="google-icon" />
        </div>
        <div className="logos">
          <img src="./Image/facebook.svg" alt="facebook-icon" />
        </div>
        <div className="logos">
          <img src="./Image/twiter.svg" alt="twitter-icon" />
        </div>
      </div>
      <div>
        <p className="an-account">
          Don't have an Account? <span>Create new now!</span>
        </p>
        <p className="form-Text">
          By signing up, you are agree with our
          <span className="terms"> Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
}

export default Icons;
