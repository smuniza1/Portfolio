import { useState, useMemo } from "react";
import "./Photography.css";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

/**
 * Add your photos here.
 * Each entry needs:
 *   src   – path to the image (e.g. "/images/photo-1.jpg")
 *   title – short display name shown in the overlay / lightbox
 *   category – one of the CATEGORIES keys below (used for filtering)
 */
const photos = [
  // ── portraits ──────────────────────────────────────────────────────
  { src: "/images/Photography/global-cyber-may-25.jpeg",  title: "Global Cyber Innovation Summit 2025",       category: "events" },
  { src: "/images/Photography/global-cyber-may-25-2.jpeg",  title: "Global Cyber Innovation Summit 2025",    category: "events" },
  { src: "/images/Photography/global-cyber-may-25-3.jpeg",  title: "Global Cyber Innovation Summit 2025",      category: "events" },
  { src: "/images/Photography/global-cyber-may-25-4.jpeg",  title: "Global Cyber Innovation Summit 2025",      category: "events" },
  { src: "/images/Photography/global-cyber-5.jpeg",  title: "Global Cyber Innovation Summit 2025",      category: "events" },

  // ── street ─────────────────────────────────────────────────────────
  { src: "/images/Photography/ooda-24-1.jpeg",    title: "OODAcon 2024",   category: "events" },
  { src: "/images/Photography/ooda-24-2.jpeg",    title: "OODAcon 2024",         category: "events" },
  { src: "/images/Photography/ooda-24-3.jpeg",    title: "OODAcon 2024",       category: "events" },

  // ── nature ─────────────────────────────────────────────────────────
  { src: "/images/Photography/icvf-24-1.jpg",    title: "ICVF 2024",      category: "events" },
  { src: "/images/Photography/icvf-24-2.jpg",    title: "ICVF 2024",    category: "events" },
  { src: "/images/Photography/icvf-24-3.jpg",    title: "ICVF 2024",    category: "events" },
  { src: "/images/Photography/icvf-24-4.jpg",    title: "ICVF 2024",    category: "events" }
];
 
const CATEGORIES = [
  { key: "events",    label: "EVENTS" }
];

export default function Photography({ openNav }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter to the currently visible photos
  const visible = useMemo(
    () =>
      activeFilter === "all"
        ? photos
        : photos.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  // Lightbox helpers
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + visible.length) % visible.length);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % visible.length);
  };

  const currentPhoto = lightboxIndex !== null ? visible[lightboxIndex] : null;

  // Close on Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + visible.length) % visible.length);
    if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % visible.length);
  };

  return (
    <div className="photography-page" onKeyDown={handleKeyDown} tabIndex={-1}>
      <header>
        <p id="menu-icon" onClick={openNav}>☰</p>
        <Link to="/" className="site-header">
          <h1>Muniza Siddiqui</h1>
        </Link>
      </header>

      <PageTitle title="PHOTOGRAPHY" />

      <main className="photography-main">
        <div className="photo-content">
          {/* Category filter pills */}
          <nav className="photo-filters" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`filter-pill${activeFilter === cat.key ? " active" : ""}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Masonry photo grid */}
          {visible.length === 0 ? (
            <p className="photo-empty">No photos in this category yet.</p>
          ) : (
            <div className="photo-grid">
              {visible.map((photo, idx) => (
                <div
                  key={photo.src}
                  className="photo-item"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  aria-label={`Open ${photo.title}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
                >
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <div className="photo-overlay">
                    <p className="photo-overlay-title">{photo.title}</p>
                    <p className="photo-overlay-cat">{photo.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {currentPhoto && (
        <div
          className="photo-lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="photo-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            &times;
          </button>

          <button
            className="photo-lightbox-arrow photo-lightbox-arrow-left"
            onClick={showPrev}
            aria-label="Previous photo"
          >
            &#10094;
          </button>

          <button
            className="photo-lightbox-arrow photo-lightbox-arrow-right"
            onClick={showNext}
            aria-label="Next photo"
          >
            &#10095;
          </button>

          <div
            className="photo-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="photo-lightbox-image"
              src={currentPhoto.src}
              alt={currentPhoto.title}
            />
            <p className="photo-lightbox-caption">{currentPhoto.title}</p>
            <p className="photo-lightbox-cat">{currentPhoto.category}</p>
          </div>
        </div>
      )}
    </div>
  );
}