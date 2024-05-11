import React, { useEffect } from "react";
import "./piano.css";
import * as Tone from "tone";
import AudioKeys from "audiokeys";

export default function Piano() {
  const a = new Tone.Synth().toDestination();
  const keyboard = new AudioKeys();
  keyboard.down((key) => {
    a.triggerAttackRelease(key.frequency, "8n");
    console.log(key)
  });
  useEffect(() => {
    let keys = document.getElementsByClassName("keys");
    document.addEventListener("keydown", (e) => {
      if (e.code === "KeyA") {
        keys[0].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyS") {
        keys[1].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyD") {
        keys[2].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyF") {
        keys[3].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyG") {
        keys[4].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyH") {
        keys[5].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyJ") {
        keys[6].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyK") {
        keys[7].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyL") {
        keys[8].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "Semicolon") {
        keys[9].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "Quote") {
        keys[10].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyW") {
        keys[11].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyE") {
        keys[12].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyT") {
        keys[13].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyY") {
        keys[14].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyU") {
        keys[15].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyO") {
        keys[16].style.background = "rgb(240, 242, 114)";
      }
      if (e.code === "KeyP") {
        keys[17].style.background = "rgb(240, 242, 114)";
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.code === "KeyA") {
        keys[0].style.background = "white";
      }
      if (e.code === "KeyS") {
        keys[1].style.background = "white";
      }
      if (e.code === "KeyD") {
        keys[2].style.background = "white";
      }
      if (e.code === "KeyF") {
        keys[3].style.background = "white";
      }
      if (e.code === "KeyG") {
        keys[4].style.background = "white";
      }
      if (e.code === "KeyH") {
        keys[5].style.background = "white";
      }
      if (e.code === "KeyJ") {
        keys[6].style.background = "white";
      }
      if (e.code === "KeyK") {
        keys[7].style.background = "white";
      }
      if (e.code === "KeyL") {
        keys[8].style.background = "white";
      }
      if (e.code === "Semicolon") {
        keys[9].style.background = "white";
      }
      if (e.code === "Quote") {
        keys[10].style.background = "white";
      }
      if (e.code === "KeyW") {
        keys[11].style.background = "black";
      }
      if (e.code === "KeyE") {
        keys[12].style.background = "black";
      }
      if (e.code === "KeyT") {
        keys[13].style.background = "black";
      }
      if (e.code === "KeyY") {
        keys[14].style.background = "black";
      }
      if (e.code === "KeyU") {
        keys[15].style.background = "black";
      }
      if (e.code === "KeyO") {
        keys[16].style.background = "black";
      }
      if (e.code === "KeyP") {
        keys[17].style.background = "black";
      }
    });
  }, []);
  return (
    <div className="main">
      <p className="Name">
        <i>PIANO</i>
      </p>
      <button className="white first keys" id="one"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <button className="white keys"></button>
      <hr />
      <button className="black firstb keys"></button>
      <button className="black keys"></button>
      <button className="black n keys"></button>
      <button className="black keys"></button>
      <button className="black keys"></button>
      <button className="black m keys"></button>
      <button className="black keys"></button>
      <p className="text textA">A</p>
      <p className="text">S</p>
      <p className="text">D</p>
      <p className="text">F</p>
      <p className="text">G</p>
      <p className="text">H</p>
      <p className="text">J</p>
      <p className="text">K</p>
      <p className="text">L</p>
      <p className="text">:</p>
      <p className="text">"</p>
      <p className="textb">W</p>
      <p className="textb">E</p>
      <p className="textb t">T</p>
      <p className="textb">Y</p>
      <p className="textb">U</p>
      <p className="textb t">O</p>
      <p className="textb">P</p>
    </div>
  );
}
