import React from "react";
import "./PianoKeyBoard.css";
import Piano from "./Piano.js";
import PianoInstruct from "./PianoInstruct.jpg";
import Card from "./Card.jpg"

export default function PianoKeyboad() {
  const pianokeyboardmain = {
    backgroundColor: "pink",
    overflowX: "hidden",
    position: "relative",
    bottom: "2vh",
  };
  const card={
    width: "36.5rem"
  }
  return (
    <div style={pianokeyboardmain}>
      <h1 className="pianokeyboardheading">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        PLAY PIANO{" "}
        <div class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
      <Piano />
      <div className="pianokeyboarddiv">
        <img src={PianoInstruct} height={300} />
        <div class="card" style={card}>
          <img src={Card} class="card-img-top" alt="..." height={150} />
          <div class="card-body">
            
            <p class="card-text">
              Related website to learn piano 
            </p>
            <a href="http://www.piano-tutorials.com/" class="btn btn-primary" target="_blank">
              Website Link
            </a>
          </div>
        </div>

        <table class="table table1">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Keys</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>A</td>
              <td>C</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>S</td>
              <td>D</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>F</td>
              <td>D</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>G</td>
              <td>G</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>H</td>
              <td>A</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>J</td>
              <td>B</td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>K</td>
              <td>c</td>
            </tr>
          </tbody>
        </table>
        <table class="table table1">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Keys</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">10</th>
              <td>L</td>
              <td>d</td>
            </tr>
            <tr>
              <th scope="row">11</th>
              <td>:</td>
              <td>e</td>
            </tr>
            <tr>
              <th scope="row">12</th>
              <td>"</td>
              <td>f</td>
            </tr>
            <tr>
              <th scope="row">13</th>
              <td>W</td>
              <td>C#</td>
            </tr>
            <tr>
              <th scope="row">14</th>
              <td>E</td>
              <td>D#</td>
            </tr>
            <tr>
              <th scope="row">15</th>
              <td>T</td>
              <td>F#</td>
            </tr>
            <tr>
              <th scope="row">16</th>
              <td>Y</td>
              <td>G#</td>
            </tr>
            <tr>
              <th scope="row">17</th>
              <td>U</td>
              <td>A#</td>
            </tr>
            <tr>
              <th scope="row">18</th>
              <td>O</td>
              <td>c#</td>
            </tr>
            <tr>
              <th scope="row">19</th>
              <td>P</td>
              <td>d#</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
