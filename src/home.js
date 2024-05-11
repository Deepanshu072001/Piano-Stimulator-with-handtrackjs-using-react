import React from "react";
import "./home.css";
import tj from "./tj.jpg";
import picture3 from "./picture3.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  const bs = {
    width: "15vw",
    height: "15vh",
  };
  const card = {
    width: "18rem",
  };
  return (
    <div className="homemaindiv">
      <h1 className="mx-3">
        <i className="homeheading">
          <u id="text1">PIANO</u>
        </i>
      </h1>
      <div className="homefirstdiv">
        <p className="homep">
          A piano is a musical instrument that produces sounds by striking
          strings with hammers. It is a versatile and widely played instrument
          in both classical and popular music genres. The piano's unique
          characteristic is its ability to produce a wide range of tones, from
          soft and delicate to powerful and resonant, making it suitable for
          solo performance, accompaniment, and ensemble playing. Here are some
          key features and components of a piano:
          <br />
          <b>1. Keyboard :</b> The piano keyboard consists of black and white
          keys that represent the notes of the musical scale. The keys are
          divided into groups of 12, repeating across the entire span of the
          instrument. The standard piano has 88 keys, with 52 white keys and 36
          black keys.
          <br />
          <b>2. Strings :</b> Inside the piano, there are strings stretched
          across a wooden soundboard. When a key is pressed, a corresponding
          hammer strikes the string, causing it to vibrate and produce sound.
          The strings are of different lengths and thicknesses to produce
          various pitches.
          <br />
          <b>3. Pedals : Most pianos have three pedals:</b>
          - Sustain Pedal (Damper Pedal) : This is the rightmost pedal. When
          pressed, it sustains the sound even after the keys are released. -
          Soft Pedal (Una Corda) : This is the leftmost pedal. It shifts the
          entire action of the piano slightly to the right, making the hammers
          strike fewer strings, resulting in a softer sound. - Sostenuto Pedal :
          This middle pedal sustains only the notes that are being held down
          when the pedal is pressed, allowing other notes to be played without
          sustaining.
          <br />
          <b>4. Types of Pianos :</b>
          - Grand Piano : Known for its iconic shape, grand pianos have a
          horizontal frame and strings that extend away from the keyboard. They
          offer a rich, full sound and are often used in concerts and
          prestigious performances. - Upright Piano : Also called vertical
          pianos, these have a compact, vertical frame. The strings run
          vertically, and the hammers move horizontally. Upright pianos are more
          space-efficient and are popular choices for homes, schools, and
          studios.
          <br />
          <b>5. History:</b> The piano was invented around the early 18th
          century by Bartolomeo Cristofori, an Italian instrument maker. It
          evolved from earlier keyboard instruments like the harpsichord and
          clavichord. Over the centuries, the piano underwent many improvements
          in its design, leading to the instruments we see today. Playing the
          piano involves a combination of techniques, including using both hands
          to play melodies and harmonies simultaneously, using dynamics (varying
          the volume), and utilizing the pedals to create different effects. It
          is a versatile instrument that can be found in virtually all types of
          music, from classical compositions by Mozart and Beethoven to
          contemporary songs in jazz, pop, and rock.
        </p>
        <div class="card w-50 card1" style={card}>
          <img
            src={tj}
            class="card-img-top"
            alt="..."
            height="350"
            width="500"
          />
          <div class="card-body">
            <p class="card-text homeline">
              "The piano ain't got no wrong notes." - Thelonious Monk
              <br />
              "Life is like a piano. What you get out of it depends on how you
              play it." - Tom Lehrer
              <br />
              "I believe in using the entire piano as a single instrument
              capable of expressing every possible musical idea." - Oscar
              Peterson
              <br />
              "The piano is a monster that screams when you touch its teeth." -
              Andres Segovia
            </p>
          </div>
        </div>
      </div>
      <h1 className="mx-3">
        <i className="homeheading1">
          <u id="text2">PIANO STIMULATOR</u>
        </i>
      </h1>
      <div className="homeseconddiv">
        <div class="card w-50 card2" style={card}>
          <img
            src={picture3}
            class="card-img-top"
            alt="..."
            height="350"
            width="500"
          />
          <div class="card-body ">
            <p class="card-text homeline">
              “Life is like a piano. What you get out of it depends on how you
              play it.”
              <br />
              “The important thing is to feel your music, really feel it and
              believe it.”
            </p>
          </div>
        </div>
        <p className="homep1">
          A "Piano Stimulator" is a software-based simulation of a piano that
          allows users to play and interact with a piano-like interface on their
          computer, tablet, or smartphone. It typically features a graphical
          representation of piano keys that users can click or tap to produce
          sounds, mimicking the experience of playing a real piano. Virtual
          pianos can vary in complexity, offering different piano sounds,
          recording capabilities, playback options, and even educational tools
          for learning to play the piano. They are popular for practice,
          composition, entertainment, and learning purposes, providing a
          convenient and portable way to enjoy the piano without needing a
          physical instrument.
          <br />
          A "piano simulator" on a website usually refers to an interactive
          online application that allows users to play a virtual piano using
          their computer keyboard, mouse, or touchscreen. These online piano
          simulators can vary in features and complexity, but they generally
          offer a basic piano keyboard interface that allows users to play
          notes, chords, and melodies.
          <br />
          Practice and Learning: Beginners: For those who are new to playing the
          piano, a simulator provides a risk-free environment to explore the
          instrument. It allows beginners to get familiar with the layout of the
          piano keys, learn basic finger placement, and practice playing simple
          melodies. Intermediate and Advanced Players: More experienced players
          can use piano simulators to practice scales, arpeggios, chords, and
          complex pieces. The ability to adjust tempo, record, and listen back
          to performances can be valuable for refining technique and working on
          challenging passages. Convenience and Accessibility: A piano simulator
          provides a portable and easily accessible option for practicing piano
          without needing a physical instrument. This is particularly useful for
          musicians on the go or those who don't have access to a piano or
          keyboard at all times.
        </p>
      </div>
      <Link to="/Choose">
        <button type="button " class="btn btn-success homebutton" style={bs}>
          <b>PLAY PIANO</b>
        </button>
      </Link>
      <div className="home3">
        <h2>BASICS-</h2>
        <p>
          Learning to play the piano involves understanding the instrument's
          basic elements and principles. A piano has 88 keys, consisting of
          white and black keys that represent musical notes. The white keys
          correspond to the seven letters of the musical alphabet (A, B, C, D,
          E, F, G), while the black keys represent sharps and flats, which are
          the notes in between. Each key produces a unique sound when pressed,
          creating melodies, chords, and harmonies. The piano's layout is
          divided into groups of 12 keys, with repeating patterns of seven white
          keys and five black keys. The keys are organized into octaves, with
          each octave containing eight white keys and five black keys. Learning
          proper hand position, posture, and finger placement is crucial for
          playing with ease and fluidity. Basic music theory, such as
          understanding rhythms, time signatures, and note durations, helps in
          reading sheet music and playing songs accurately. As beginners
          progress, they learn scales, arpeggios, and simple songs to develop
          finger strength, dexterity, and coordination. Regular practice is key
          to mastering the piano, gradually building skills and confidence to
          tackle more complex pieces and techniques. Through patience,
          dedication, and a passion for music, aspiring pianists embark on a
          rewarding journey of musical expression and creativity.
        </p>
        <h2>LERANING-FROM- THIS- WEBSITE-</h2>
        <p>
          Learning from a virtual piano offers a dynamic and accessible pathway
          into the world of music. Through a virtual piano, learners can explore
          the instrument's layout, notes, and melodies without the need for a
          physical piano. This digital tool provides an interactive experience,
          allowing users to press keys on the screen with their mouse, computer
          keyboard, or touchscreen. Beginners benefit from the visual
          representation of the piano keys, helping them grasp the fundamentals
          of note names, scales, and chords. Interactive features such as
          recording capabilities enable students to track their progress, listen
          back to their playing, and identify areas for improvement. Virtual
          pianos often offer tutorials, lessons, and guided exercises that cater
          to various skill levels, making it ideal for self-paced learning. For
          those interested in specific genres or styles, virtual pianos often
          include a variety of instrument sounds, allowing users to experiment
          with classical piano, jazz, pop, and more. As users advance, they can
          delve into learning songs, practicing techniques, and even composing
          their music. Overall, learning from a virtual piano opens doors to
          musical exploration, creativity, and growth, offering an engaging and
          flexible platform for aspiring pianists of all ages and abilities.
        </p>
      </div>
    </div>
  );
}
