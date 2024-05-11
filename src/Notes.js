import React from 'react'
import './Notes.css'
import Happy from './Happy.jpg'
import Twinkle from './Twinkle .jpg'
import Jingle from "./Jingle.jpg"
import Ed1 from './Ed1.jpg'
import Ed2 from './Ed2.jpg'
import Ed3 from './Ed3.jpg'
import Justin1 from './Justin1.jpg'
import Justin2 from './Justin2.jpg'
import Justin3 from './Justin3.jpg'
import Alan1 from './Alan1.jpg'
import Alan2 from './Alan2.jpg'
import Alan3 from './Alan3.jpg'




export default function Notes() {
  return (
    <div className='notesmain'>
    <h1 className='notesh1'> NOTES TO PRACTICE</h1>
    <h2 className='notesh2'>Some basic piano notes</h2>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Happy} class="d-block ni" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Twinkle} class="d-block ni" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Jingle} class="d-block ni" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<h2 className='notesh2'>Music notes of Ed Shaeeran</h2>
    <div id="carouselExample1" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Ed1} class="d-block ni2" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Ed2} class="d-block ni2" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Ed3} class="d-block ni2" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample1" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<h2 className='notesh2'>Music notes of Justin Bieber</h2>
    <div id="carouselExample2" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Justin1} class="d-block ni3" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Justin2} class="d-block ni1" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Justin3} class="d-block ni3" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<h2 className='notesh2'>Music notes of Alan Walker</h2>
    <div id="carouselExample3" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Alan1} class="d-block ni" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Alan2} class="d-block ni" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Alan3} class="d-block ni" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br/>
<br/>


    </div>
  )
}
