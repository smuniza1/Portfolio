import { useState } from "react";
import "./Graphics.css";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const posterImages = [
  { full: "/images/poetry-slam-1-full.jpg", title: "POETRY SLAM POSTER" },
  { full: "/images/video-snack-full.jpg", title: "VIDEO SNACK" },
  { full: "/images/poetry-slam-2-full.png", title: "POETRY SLAM POSTER" },
  { full: "/images/paul-thek-full.jpg", title: "PAUL THEK POSTER" },
];

const muralImages = [
  { full: "/images/mural-full.jpg", title: "MURAL" },
  { full: "/images/mural-onion.jpeg", title: "Mural Onion" },
  { full: "/images/mural-pepper.jpeg", title: "Mural Pepper" },
  { full: "/images/mural-tomato.jpeg", title: "Mural Tomato" },
  { full: "/images/mural-mushroom.jpeg", title: "Mural Mushroom" },
];

const musicPopsImages = [
  { full: "/images/music-pops-box-design.png", title: "Music Pops Box" },
  { full: "/images/music-pops-katy-front.png", title: "BOMB POP FLAVOR" },
  { full: "/images/music-pops-brent-front.png", title: "ORANGE FLAVOR" },
  { full: "/images/music-pops-sza-front.png", title: "TUTTI FRUITY FLAVOR" },
  { full: "/images/music-pops-nicki-front.png", title: "BLUE RASPBERRY FLAVOR" },
];

export default function Graphics({ openNav }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedGallery(null);
    setSelectedIndex(0);
  };

  const openPosterLightbox = (image) => {
    setSelectedImage(image);
    setSelectedGallery("posters");
    setSelectedIndex(0);
  };

  const openGallery = (galleryName, index) => {
    let gallery = [];

    if (galleryName === "mural") gallery = muralImages;
    if (galleryName === "music") gallery = musicPopsImages;

    setSelectedGallery(galleryName);
    setSelectedIndex(index);
    setSelectedImage(gallery[index]);
  };

  const showNextImage = (e) => {
    e.stopPropagation();

    let gallery = null;

    if (selectedGallery === "mural") gallery = muralImages;
    if (selectedGallery === "music") gallery = musicPopsImages;

    if (!gallery) return;

    const nextIndex = (selectedIndex + 1) % gallery.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(gallery[nextIndex]);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();

    let gallery = null;

    if (selectedGallery === "mural") gallery = muralImages;
    if (selectedGallery === "music") gallery = musicPopsImages;

    if (!gallery) return;

    const prevIndex = (selectedIndex - 1 + gallery.length) % gallery.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(gallery[prevIndex]);
  };

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
                <img
                  className="ig-posts"
                  src="/images/lif-social-1.jpeg"
                  alt="Lost in Frenchlation social post 1"
                />
                <img
                  className="ig-posts"
                  src="/images/lif-social-2.jpeg"
                  alt="Lost in Frenchlation social post 2"
                />
                <img
                  className="ig-posts"
                  src="/images/lif-social-3.jpeg"
                  alt="Lost in Frenchlation social post 3"
                />
                <img
                  className="ig-posts"
                  src="/images/lif-social-4.jpeg"
                  alt="Lost in Frenchlation social post 4"
                />
                <img
                  className="ig-posts"
                  src="/images/lif-story-5.png"
                  alt="Lost in Frenchlation story post"
                />
              </div>
            </div>

            <div className="mamas-pizza">
              <h1 className="brand-names">Mama's NY Style Pizza</h1>
              <div className="brand-images">
                <figure>
                  <figcaption className="captions">LOGO</figcaption>
                  <img
                    id="logo-image"
                    src="/images/mamas-pizza.jpg"
                    alt="Mama's Pizza logo"
                  />
                </figure>

                <div className="mural">
                  <figure>
                    <figcaption className="captions">MURAL</figcaption>
                    <img
                      id="mural-image"
                      src="/images/mural-full.jpg"
                      alt="Mama's Pizza mural"
                      onClick={() => openGallery("mural", 0)}
                    />
                  </figure>

                  <div className="mural-individual-pics">
                    <img
                      src="/images/mural-onion.jpeg"
                      alt="Mural onion"
                      onClick={() => openGallery("mural", 1)}
                    />
                    <img
                      src="/images/mural-pepper.jpeg"
                      alt="Mural pepper"
                      onClick={() => openGallery("mural", 2)}
                    />
                    <img
                      src="/images/mural-tomato.jpeg"
                      alt="Mural tomato"
                      onClick={() => openGallery("mural", 3)}
                    />
                    <img
                      src="/images/mural-mushroom.jpeg"
                      alt="Mural mushroom"
                      onClick={() => openGallery("mural", 4)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="music-pops">
              <h1 className="brand-names">Music Pops</h1>
              <div className="music-pops-images">
                <img
                  id="music-pops-box"
                  src="/images/music-pops-box-design.png"
                  alt="Music Pops box design"
                  onClick={() => openGallery("music", 0)}
                />

                <div className="music-pops-grid">
                  <img
                    src="/images/music-pops-katy-front.png"
                    alt="BOMB POP FLAVOR"
                    onClick={() => openGallery("music", 1)}
                  />
                  <img
                    src="/images/music-pops-brent-front.png"
                    alt="ORANGE FLAVOR"
                    onClick={() => openGallery("music", 2)}
                  />
                  <img
                    src="/images/music-pops-sza-front.png"
                    alt="TUTTI FRUITY FLAVOR"
                    onClick={() => openGallery("music", 3)}
                  />
                  <img
                    src="/images/music-pops-nicki-front.png"
                    alt="BLUE RASPBERRY FLAVOR"
                    onClick={() => openGallery("music", 4)}
                  />
                </div>
              </div>
            </div>

            <h1 className="posters-text">POSTERS</h1>

            <div className="gallery graphics-gap">
              {posterImages.map((image) => (
                <div
                  key={image.full}
                  className="thumbnail-container"
                  onClick={() => openPosterLightbox(image)}
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

          {(selectedGallery === "mural" || selectedGallery === "music") && (
            <>
              <button
                className="lightbox-arrow lightbox-arrow-left"
                onClick={showPrevImage}
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <button
                className="lightbox-arrow lightbox-arrow-right"
                onClick={showNextImage}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </>
          )}

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