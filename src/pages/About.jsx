import PageTitle from "../components/PageTitle";
import "./About.css";

export default function About({ openNav }) {
  return (
    <div>
      <header>
    <p id="menu-icon" onClick={openNav}>☰</p>
    <h1>MUNIZA SIDDIQUI</h1>
  </header>
        <PageTitle title="ABOUT ME"/>

        <div className="main">
          <div className="photo-stack">
              <div className="tombstone-mask red-tombstone"></div>
              <div className="tombstone-mask photo">
              <img className="portrait" src="/images/portrait.jpeg" alt="Portrait" />
              </div>
              <div className="tombstone-mask yellow-tombstone"></div>
            </div>
            <p className="description">Hey! I’m Muniza Siddiqui, a graphic designer and artist from Richmond, VA and currently based in the Washington D.C. area. I have a BFA in graphic design and minor in computer science from VCUarts. 

My work consists of designing social media graphics, posters, cover art, web design, logo design, package design, video production, and animation.

I currently work as a multimedia specialist at Carahsoft Technology Corp, and I am open to freelance and contract work. I am excited to work with you.</p>
          
        </div>

        <div className="skills-section">
          <h1 className="skills-title">SKILLS</h1>
          <div className="rectangle-row">

              <div className="rectangle">
                <h3 className="skills-heading">DESIGN</h3>
                <p className="skills">Canva, Photoshop, Illustrator, InDesign</p>
              </div>
              <div className="rectangle">
                <h3 className="skills-heading">FRONT-END</h3>
                <p className="skills">Figma, Framer, UI/UX, React.js, HTML, CSS, JavaScript, Responsive Design</p>
              </div>
              <div className="rectangle">
                <h3 className="skills-heading">MULTIMEDIA</h3>
                <p className="skills">After Effects, Lightroom, Audition, Premiere Pro, Unity</p>
              </div>
            </div>
          </div>
    </div>
  );
}
