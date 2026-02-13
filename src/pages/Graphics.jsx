import { useState } from "react";
import "./Graphics.css";
import PageTitle from "../components/PageTitle";


export default function Graphics({openNav}) {
  return (
    <>
    
<div className="graphics-page">
    <header>
    <p id="menu-icon" onClick={openNav}>☰</p>
    <h1>MUNIZA SIDDIQUI</h1>
  </header>
      <main>
        <PageTitle title="GRAPHICS"/>

        <div className="gallery">
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/mamas-pizza.jpg" alt="Pizza Logo" />
            <h2 className="thumbnail-heading">MAMA'S NY STYLE PIZZA LOGO</h2>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/poetry-slam-1.jpg" alt="Poetry Slam Poster" />
            <h2 className="thumbnail-heading">POETRY SLAM POSTER</h2>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/video-snack.jpg" alt="Video Snack" />
            <h2 className="thumbnail-heading">VIDEO SNACK</h2>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/poetry-slam-2.jpg" alt="Poetry Slam Poster" />
            <h2 className="thumbnail-heading">POETRY SLAM POSTER</h2>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/paul-thek.jpg" alt="Paul Thek" />
            <h2 className="thumbnail-heading">PAUL THEK POSTER</h2>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/isee-logo.jpg" alt="ISEE Logo" />
            <h2 className="thumbnail-heading">ISEE LOGO</h2>
          </div>
          <div className="thumbnail-container">
            <img className="thumbnail-image" src="/images/yep-cover.png" alt="YEP Song Cover" />
            <h2 className="thumbnail-heading">YEP SONG COVER</h2>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}