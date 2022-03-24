import React from "react";
import cursoelImg from '../../assets/10.jpg'
import cursoelSecImg from '../../assets/20.jpg'
import "./Testmonial.css"

const Testmonial = ()=>{
    return(
        <div className="testmoial">
            <div className="container">
                <h1 className="text-center">Testmonial</h1>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={cursoelImg} class="d-block " alt="..."/>
      <div class="carousel-caption d-md-block">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad numquam dolorem neque ratione? Aliquam nesciunt, distinctio tempora ad asperiores minima maxime soluta sint numquam minus quaerat quae, cum, iure corporis!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={cursoelSecImg} class="d-block" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad numquam dolorem neque ratione? Aliquam nesciunt, distinctio tempora ad asperiores minima maxime soluta sint numquam minus quaerat quae, cum, iure corporis!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={cursoelSecImg} class="d-block" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad numquam dolorem neque ratione? Aliquam nesciunt, distinctio tempora ad asperiores minima maxime soluta sint numquam minus quaerat quae, cum, iure corporis!</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <i class="fas fa-angle-left"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <i class="fas fa-angle-right"></i>
    <span class="visually-hidden">Next</span>
  </button>
            </div>
            </div>
      
        </div>
    )
}

export default Testmonial;