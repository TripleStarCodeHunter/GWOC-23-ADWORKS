import React from "react";
import "./reg-form.css";

const Register = () => {
  return (
    <div className="Registmain gradient">
      <div className="containerR">
        <div className="titleR">Registration</div>
        <div className="contentR">
          <form action="#">
            <div className="user-detailsR">
              <div className="input-boxR">
                <span className="detailsR">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div className="input-boxR">
                <span className="detailsR">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                ></input>
              </div>
            </div>
            <div className="gender-detailsR">
              <input type="radio" name="gender" id="dot-1"></input>
              <input type="radio" name="gender" id="dot-2"></input>
              <input type="radio" name="gender" id="dot-3"></input>
              <span className="gender-title">Gender</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="buttonR">
              <input type="submit" value="Register"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
