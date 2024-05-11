import React, { useEffect } from "react";
import "./Piano2.css";
import * as Tone from "tone";
import * as handTrack from "handtrackjs";

export default function Piano2() {
  const piano2video = {
    display: "none",
  };
  useEffect(() => {
    let flag = false;
    function start() {
      const a = new Tone.Synth().toDestination();
      const video = document.getElementById("video");
      const canvas = document.getElementById("canvas");
      let context = canvas.getContext("2d");
      let model;
      const options = {
        flipHorizontal: true,
        maxNumBoxes: 3,
        iouThreshold: 0.5,
        scoreThreshold: 0.5,
      };
      handTrack.load(options).then(function (modelData) {
        model = modelData;
        if (!model) {
          console.error("Model not loaded");
        }
        handTrack.startVideo(video).then(function (status) {
          if (status) {
            console.log(status);
            button.innerText = "Stop";
            startDetection();
          } else {
            console.log("failed");
          }
        });
      });
      let first = 0;
      let last = 0;
      function startDetection() {
        model.detect(video).then((predictions) => {
          predictions.forEach((predictions) => {
            let [x, y] = predictions.bbox;
            if (x > -10 && x < -2 && y > 200 && predictions.label === "point") {
              first = 1;
            } else if (
              x > 0.2 &&
              x < 45 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 2;
            } else if (
              x > 45 &&
              x < 100 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 3;
            } else if (
              x > 100 &&
              x < 160 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 4;
            } else if (
              x > 160 &&
              x < 230 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 5;
            } else if (
              x > 230 &&
              x < 292 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 6;
            } else if (
              x > 292 &&
              x < 345 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 7;
            } else if (
              x > 345 &&
              x < 410 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 8;
            } else if (
              x > 410 &&
              x < 465 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 9;
            } else if (
              x > 465 &&
              x < 540 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 10;
            } else if (
              x > 540 &&
              x < 600 &&
              y > 200 &&
              predictions.label === "point"
            ) {
              first = 11;
            } else if (
              x > -10 &&
              x < 20 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 12;
            } else if (
              x > 25 &&
              x < 85 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 13;
            } else if (
              x > 135 &&
              x < 200 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 14;
            } else if (
              x > 203 &&
              x < 265 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 15;
            } else if (
              x > 268 &&
              x < 328 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 16;
            } else if (
              x > 378 &&
              x < 438 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 17;
            } else if (
              x > 441 &&
              x < 501 &&
              y < 200 &&
              predictions.label === "point"
            ) {
              first = 18;
            }

            if (predictions.label === "point") {
              if (first === last) console.log("change position");
              else if (x > -10 && x < -2 && y > 200) {
                a.triggerAttackRelease(261.6255653005986, "8n");
              } else if (x > 0.2 && x < 45 && y > 200) {
                a.triggerAttackRelease(293.6647679174076, "8n");
              } else if (x > 45 && x < 100 && y > 200) {
                a.triggerAttackRelease(329.6275569128699, "8n");
              } else if (x > 100 && x < 160 && y > 200) {
                a.triggerAttackRelease(349.2282314330039, "8n");
              } else if (x > 160 && x < 230 && y > 200) {
                a.triggerAttackRelease(391.99543598174927, "8n");
              } else if (x > 230 && x < 292 && y > 200) {
                a.triggerAttackRelease(440, "8n");
              } else if (x > 292 && x < 345 && y > 200) {
                a.triggerAttackRelease(493.8833012561241, "8n");
              } else if (x > 345 && x < 410 && y > 200) {
                a.triggerAttackRelease(523.2511306011972, "8n");
              } else if (x > 410 && x < 465 && y > 200) {
                a.triggerAttackRelease(587.3295358348151, "8n");
              } else if (x > 465 && x < 540 && y > 200) {
                a.triggerAttackRelease(659.2551138257398, "8n");
              } else if (x > 540 && x < 600 && y > 200) {
                a.triggerAttackRelease(698.4564628660078, "8n");
              } else if (x > -10 && x < 20 && y < 200) {
                a.triggerAttackRelease(277.1826309768721, "8n");
              } else if (x > 25 && x < 85 && y < 200) {
                a.triggerAttackRelease(311.12698372208087, "8n");
              } else if (x > 135 && x < 200 && y < 200) {
                a.triggerAttackRelease(369.99442271163446, "8n");
              } else if (x > 203 && x < 265 && y < 200) {
                a.triggerAttackRelease(415.3046975799451, "8n");
              } else if (x > 268 && x < 328 && y < 200) {
                a.triggerAttackRelease(466.1637615180899, "8n");
              } else if (x > 378 && x < 438 && y < 200) {
                a.triggerAttackRelease(554.3652619537442, "8n");
              } else if (x > 441 && x < 501 && y < 200) {
                a.triggerAttackRelease(622.2539674441618, "8n");
              }
              last = first;
            }
          });
          model.renderPredictions(predictions, canvas, context, video);
        });
        requestAnimationFrame(startDetection);
      }
    }
    let button = document.getElementById("piano2button");
    button.addEventListener("click", function () {
      if (flag === true) {
        handTrack.stopVideo();
        button.innerText = "Start";
        flag = false;
      } else if (flag === false) {
        button.innerText="Loading...";
        start();
        flag = true;
      }
    });
  }, []);
  return (
    <div id="piano2maindiv">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Check!!!</strong> Always stop the video before leaving the page
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div id="piano2keydiv">
        <video id="video" style={piano2video}></video>
        <canvas id="canvas"></canvas>
        <div class="piano2divwhite">
          <div class="piano2white "></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
          <div class="piano2white"></div>
        </div>
        <div class="piano2divblack">
          <div class="piano2black firstblackpiano2"></div>
          <div class="piano2black"></div>
          <div class="piano2black piano2another"></div>
          <div class="piano2black"></div>
          <div class="piano2black"></div>
          <div class="piano2black piano2another"></div>
          <div class="piano2black"></div>
        </div>
        <button id="piano2button">Start</button>
      </div>
      <div id="piano2pointdiv">
        <h1 id="piano2pointh1">Instructions</h1>
        <ul id="oiano2pointul">
          <li>Use of Single finger(Label:point)</li>
          <li>Match the center point of the box with the keys</li>
          <li>If you open or closed your hand the sound will not play</li>
        </ul>
      </div>
    </div>
  );
}
