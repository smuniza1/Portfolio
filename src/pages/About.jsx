import PageTitle from "../components/PageTitle";
import "./About.css";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    title: "DESIGN",
    skills: ["Canva", "Photoshop", "Illustrator", "InDesign"],
  },
  {
    title: "FRONT-END",
    skills: [
      "Figma",
      "Framer",
      "UI/UX",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    title: "MULTIMEDIA",
    skills: ["After Effects", "Lightroom", "Audition", "Premiere Pro", "Unity"],
  },
];

export default function About({ openNav }) {
  return (
    <div className="about-page">
      <header>
        <p id="menu-icon" onClick={openNav}>☰</p>

        <Link to="/" className="site-header">
          <h1>Muniza Siddiqui</h1>
        </Link>
      </header>

      <PageTitle title="ABOUT ME" />

      <main className="about-main">
        <section className="about-intro">
          <div className="photo-stack" aria-label="Portrait of Muniza Siddiqui">
            <div className="tombstone-mask red-tombstone"></div>

            <div className="tombstone-mask photo">
              <img
                className="portrait"
                src="/images/portrait.jpeg"
                alt="Muniza Siddiqui portrait"
              />
            </div>

            <div className="tombstone-mask yellow-tombstone"></div>
          </div>

          <div className="description">
            <p>
              Hey! I’m Muniza Siddiqui, a graphic designer and artist from
              Richmond, VA and currently based in the Washington D.C. area. I
              have a BFA in graphic design and minor in computer science from
              VCUarts.
            </p>

            <p>
              My work consists of designing social media graphics, posters,
              cover art, web design, logo design, package design, video
              production, and animation.
            </p>

            <p>
              I currently work as a multimedia specialist at Carahsoft
              Technology Corp, and I am open to freelance and contract work. I
              am excited to work with you.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2 className="skills-title">SKILLS</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3 className="skills-heading">{group.title}</h3>

                <ul className="skills-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}