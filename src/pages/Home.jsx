import { Link } from "react-router-dom";
import "./Home.css";

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
  { to: "/graphics",    label: "Graphics" },
  { to: "/photography", label: "Photography" },
  { to: "/video",       label: "Video" },
  { to: "/webdesign",   label: "Web Design" },
  { to: "/about",       label: "About" },
];

export default function Home({ openNav }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <p id="menu-icon" onClick={openNav}>☰</p>
      </header>

      {/* Hero */}
      <section className="home-hero">
        <p className="home-tagline">Graphic Designer &amp; Multimedia Specialist</p>
        <EchoName />
        <p className="home-location">Richmond, VA — Washington D.C.</p>
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