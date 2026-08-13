import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

export default function Video({ openNav }) {
  return (
    <div>
    <header>
        <p id="menu-icon" onClick={openNav}>☰</p>
        <Link to="/" className="site-header">
          <h1>Muniza Siddiqui</h1>
        </Link>
      </header>

      <main className="webdesign-main">
      <PageTitle title="VIDEO"/>

        <div className="web-gallery">
          <a
            className="web-card"
            href="https://vimeo.com/318452688?fl=ip&fe=ec"
            target="_blank"
            rel="noreferrer"
          >
            <figure>
              <img
                className="web-thumbnail"
                src="/images/summer thumbnail.png"
                alt="Summer video thumbnail"
              />
              <figcaption className="web-card-caption">Summer</figcaption>
            </figure>
          </a>

          <a
            className="web-card"
            href="https://youtu.be/sRkQY4YMkjA?si=s8WNVrFGs_5fitEH"
            target="_blank"
            rel="noreferrer"
          >
            <figure>
              <img
                className="web-thumbnail"
                src="/images/soar365 thumbnail.png"
                alt="Soar365 Volunteer Impact Video thumbnail"
              />
              <figcaption className="web-card-caption">SOAR365 Volunteer Impact Video</figcaption>
            </figure>
          </a>
        </div>
      </main>
    </div>
  );
}