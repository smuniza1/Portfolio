import PageTitle from "../components/PageTitle";
import "./WebDesign.css";
import { Link } from "react-router-dom";

export default function WebDesign({ openNav }) {
  return (
    <div className="webdesign-page">
      <header>
        <p id="menu-icon" onClick={openNav}>☰</p>
        <Link to="/" className="site-header">
          <h1>Muniza Siddiqui</h1>
        </Link>
      </header>

      <main className="webdesign-main">
        <PageTitle title="WEB DESIGN" />

        <div className="web-gallery">
          <a
            className="web-card"
            href="https://smuniza1.github.io/Hand-Embroidery-101/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="web-thumbnail"
              src="/images/hand embroidery 101 thumbnail.png"
              alt="Hand Embroidery 101 website"
            />
          </a>

          <a
            className="web-card"
            href="https://smuniza1.github.io/Saiyr-Product-Landing-Page/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="web-thumbnail"
              src="/images/saiyr thumbnail.png"
              alt="Saiyr product landing page"
            />
          </a>
        </div>
      </main>
    </div>
  );
}