import React from "react";
import "./choose.css";
import handtrack from "./handtrack.jpg";
import keyboard from "./keyboard.jpg";
import { Link } from "react-router-dom";

export default function Choose() {
  const choose = {
    backgroundColor: "rgb(177, 127, 177)",
    position:"relative",
    bottom:"2vh"
  };
  const chooseheading = {
    fontFamily: '"Source Code Pro", monospace',
    fontOpticalSizing: "auto",
    margin:"25%",
    color:"white"
  };
  return (
    <div style={choose}>
      <h1>
        <b>
          <i style={chooseheading}>CHOOSE THE STYLE OF PLAYING PIANO </i>
        </b>
      </h1>

      <div className="choosemaindiv">
        <Link to="/PianoKeyboad">
        <button className="choosebutton1">
          <h2>USING KEYBOARD KEYS</h2>
          <p>
            <u>
              Play piano with the help of keyboard keys in this middle and upper
              layer of qwerty keyboard work as piano keys
              <br />
              -Easy to play
              <br />
              -More control over piano
              <br />
              -More acuurate
            </u>
          </p>
          <img src={keyboard} />
        </button>
        </Link>
        <Link to="/Piano2">
        <button className="choosebutton2">
          <h2>USING HAND GESTURES</h2>
          <p>
            <u>
              Play piano with the help of gand movements in this with help of
              webcam handmovements is detected then according to that piano has
              been played.
              <br />
              -Interesting and interactive way
              <br />
              -Use of machine learning and webcam
              <br />
            </u>
          </p>
          <img src={handtrack} height={350} />
        </button>
        </Link>
      </div>
    </div>
  );
}
