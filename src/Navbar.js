import React from "react";
import "./Navbar.css";
import piano from './piano.png'
import { Link } from "react-router-dom";
export default function Navbar() {
  const style = {
    backgroundColor: "rgb(206, 62, 86)",
    height: "8vh"
  };
  const style1={
    marginLeft:"2vw",
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={style}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <p className="my-2 name">Piano Stimulator</p>
              </li><li>
              <img src={piano} className="pianopicture"></img></li>
              <li className="nav-item mx-3 home">
                <Link className="nav-a active navbarmistake" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-a navbarmistake" to="/Notes">
                  Notes
                </Link>
              </li>
              <li style={style1}>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example "
                >
                  <Link to="/login">
                  <button type="button" class="btn btn-success">
                    Login
                  </button></Link>
                  <Link to="/Signup">
                  <button type="button" class="btn btn-warning">
                    SignUp
                  </button></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
