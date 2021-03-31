import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div>
      <div className="bg-img">
        <div className="content">
          <header>Login Form</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user" />
              <input type="text" required placeholder="First name" />
            </div>

            <div className="field space">
              <div className="field">
                <span className="fa fa-user" />
                <input type="text" required placeholder="Last name" />
              </div>
            </div>

            <div className="field space">
              <div className="field">
                <span className="fa fa-user" />
                <input type="text" required placeholder="Email" />
              </div>
            </div>

            <div className="field space">
              <span className="fa fa-lock" />
              <input
                type="password"
                className="pass-key"
                required
                placeholder="Password"
              />
              <span className="show">SHOW</span>
            </div>
            <div className="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="field">
              <input type="submit" defaultValue="LOGIN" />
            </div>
          </form>
          <div className="login">Or login with</div>
          <div className="links">
            <div className="facebook">
              <i className="fab fa-facebook-f">
                <span>Facebook</span>
              </i>
            </div>
            <div className="gmail">
              <i className="fa fa-google">
                <span>Email</span>
              </i>
            </div>
          </div>
          <div className="signup">Thunks</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
