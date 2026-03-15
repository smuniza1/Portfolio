import { useState } from "react";
import "./Graphics.css";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";


const images = [
  { full: "/images/poetry-slam-1-full.jpg",
    title: "POETRY SLAM POSTER" },
  { full: "/images/video-snack-full.jpg",
    title: "VIDEO SNACK" },
  { full: "/images/poetry-slam-2-full.png",
    title: "POETRY SLAM POSTER" },
  { full: "/images/paul-thek-full.jpg",
    title: "PAUL THEK POSTER" },
  {/*{ thumb: "/images/isee-logo.jpg", 
    full: "",
    title: "ISEE LOGO" },
  { thumb: "/images/yep-cover.png", 
    full: "",
    title: "YEP SONG COVER" },*/}
];

export default function Graphics({ openNav }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="graphics-page">
      <header>
        <p id="menu-icon" onClick={openNav}>☰</p>
        <Link to="/" className="site-header">
          <h1>Muniza Siddiqui</h1>
        </Link>
      </header>

      <main>
        <PageTitle title="GRAPHICS" />
        <div className="content">
          <div className="brands">
            <div className="lif">
              <h1 className="brand-names">Lost in Frenchlation</h1>
              <div className="brand-images">
                <img className="ig-posts" src="/images/lif-social-1.jpeg"></img>
                <img className="ig-posts" src="/images/lif-social-2.jpeg"></img>
                <img className="ig-posts" src="/images/lif-social-3.jpeg"></img>
                <img className="ig-posts" src="/images/lif-social-4.jpeg"></img>
                <img className="ig-posts" src="/images/lif-story-5.png"></img>
              </div>
            </div>
            <div className="mamas-pizza">
              <h1 className="brand-names">Mama's NY Style Pizza</h1>
              <div className="brand-images">
                <figure>
                <figcaption className="captions">LOGO</figcaption>
                <img className="ig-posts"  id="mamas-image" src="/images/mamas-pizza.jpg"></img>
                </figure>
                <figure>
                <figcaption className="captions">MURAL</figcaption>
                <img className="ig-posts" id="mural-image" src="/images/mural-full.jpg"></img>
                </figure>
              </div>
            </div>
            <div className="music-pops">
              <h1 className="brand-names">Music Pops</h1>
              <div className="music-pops-images">
                <img id="music-pops-box" src="/images/music-pops-box-design.png"></img>
                <div className="music-pops-grid">
                  <img src="/images/music-pops-katy-front.png"></img>
                  <img src="/images/music-pops-brent-front.png"></img>
                  <img src="/images/music-pops-sza-front.png"></img>
                  <img src="/images/music-pops-nicki-front.png"></img>
                </div>
              </div>
            </div>
            
          
          
          <h1 className="posters-text">POSTERS</h1>
          <div className="gallery graphics-gap">
            
            {images.map((image) => (
              <div
                key={image.full}
                className="thumbnail-container"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  className="thumbnail-image"
                  src={image.full}
                  alt={image.title}
                />
                <h2 className="thumbnail-heading">{image.title}</h2>
              </div>
            ))}
          </div>
        </div>
        </div>

      </main>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="lightbox-image"
              src={selectedImage.full}
              alt={selectedImage.title}
            />
            <p className="lightbox-caption">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}