import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Home.css";

const TITLES = ["GRAPHIC DESIGNER", "WEB DESIGNER", "MULTIMEDIA SPECIALIST"];
const HOLD_DURATION = 2200;
const TRANSITION_DURATION = 400;

function AnimatedTagline() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [wrapWidth, setWrapWidth] = useState(null);
  const measureRef = useRef(null);

  // After first render, measure all titles and lock to the widest
  useEffect(() => {
    if (!measureRef.current) return;
    const el = measureRef.current;
    let max = 0;
    TITLES.forEach((t) => {
      el.textContent = t;
      max = Math.max(max, el.getBoundingClientRect().width);
    });
    el.textContent = TITLES[0];
    setWrapWidth(Math.ceil(max));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (titleIndex + 1) % TITLES.length;
      setNextIndex(next);
      setAnimating(true);

      setTimeout(() => {
        setTitleIndex(next);
        setNextIndex(null);
        setAnimating(false);
      }, TRANSITION_DURATION);
    }, HOLD_DURATION);

    return () => clearInterval(interval);
  }, [titleIndex]);

  return (
    <p className="home-tagline">
      <span ref={measureRef} className="tagline-word tagline-measure" aria-hidden="true">
        {TITLES[0]}
      </span>
      <span
        className="tagline-rotating-wrap"
        style={wrapWidth ? { width: wrapWidth } : {}}
      >
        <span className={`tagline-word ${animating ? "slide-out" : ""}`}>
          {TITLES[titleIndex]}
        </span>
        {animating && nextIndex !== null && (
          <span className="tagline-word slide-in">
            {TITLES[nextIndex]}
          </span>
        )}
      </span>
    </p>
  );
}

export function EchoName() {
  const copies = 15;

  return (
    <div className="echo-wrap">
      {Array.from({ length: copies }).map((_, i) => {
        const offset = copies - 1 - i;
        const x = offset * 10;
        const y = offset * offset * 0.45;

        return (
          <span
            key={i}
            className={`echo-layer ${i === copies - 1 ? "front" : "back"}`}
            style={{
              transform: `translate(-50%, 0) translate(${x}px, ${y}px)`,
              animationDelay: `${(copies - 1 - i) * 40}ms`,
            }}
          >
            Muniza Siddiqui
          </span>
        );
      })}
    </div>
  );
}

const navLinks = [
  { to: "/graphics",    label: "GRAPHICS" },
  { to: "/photography", label: "PHOTOGRAPHY" },
  { to: "/webdesign",   label: "WEB DESIGN" },
  { to: "/video",       label: "VIDEO" },
  { to: "/about",       label: "ABOUT" }
];

export default function Home({ openNav }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <p id="menu-icon" onClick={openNav}>☰</p>
      </header>

      {/* Hero */}
      <section className="home-hero">
        <AnimatedTagline />
        <EchoName />
      </section>

      {/* Nav links */}
      <nav className="home-nav" aria-label="Portfolio sections">
        {navLinks.map(({ to, label }, i) => (
          <Link
            key={to}
            to={to}
            className="home-nav-link"
            style={{ animationDelay: `${300 + i * 80}ms` }}
          >
            <span className="home-nav-index">0{i + 1}</span>
            <span className="home-nav-label">{label}</span>
            <span className="home-nav-arrow">→</span>
          </Link>
        ))}
      </nav>

      {/* Footer line */}
      <footer className="home-footer">
        <span>Open to freelance &amp; contract work</span>
        <a href="mailto:sidmuniza@gmail.com" className="home-contact-link">
          Get in touch
        </a>
      </footer>
    </div>
  );
}