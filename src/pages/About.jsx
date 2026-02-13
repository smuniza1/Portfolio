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
            <div className="tombstone-mask">
            <img className="portrait" src="/images/portrait.jpeg" alt="Portrait" />
            </div>
            <p className="description">Hey! I’m Muniza Siddiqui, a graphic designer and artist from Richmond, VA and currently based in the Washington D.C. area. I have a BFA in graphic design and minor in computer science from VCUarts. 

My work consists of designing social media graphics, posters, cover art, web design, logo design, package design, video production, and animation.

I currently work as a multimedia specialist at Carahsoft Technology Corp, and I am open to freelance and contract work. I am excited to work with you.</p>
        </div>
    </div>
  );
}
