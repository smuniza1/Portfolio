import PageTitle from "../components/PageTitle";
import "./WebDesign.css";
import { Link } from "react-router-dom";

export default function WebDesign({ openNav }) {
  return (
    <div>
      <header>
    <p id="menu-icon" onClick={openNav}>☰</p>
    <Link to="/" className="site-header">
      <h1>Muniza Siddiqui</h1>
    </Link>
  </header>
      <PageTitle title="WEB DESIGN"/>
      <div className="gallery web-gap">
        <a href="https://smuniza1.github.io/Hand-Embroidery-101/">
          <img className="web-thumbnail" src="/images/hand embroidery 101 thumbnail.png"></img>
        </a>
        <a href="https://smuniza1.github.io/Saiyr-Product-Landing-Page/">
          <img className="web-thumbnail" src="/images/saiyr thumbnail.png"></img>
        </a>
      </div>
    </div>
    
  );
}
