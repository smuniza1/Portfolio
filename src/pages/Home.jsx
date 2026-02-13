import { Link } from "react-router-dom";

export default function Home({ openNav }) {
  return (
    <>
      <header>
        <p id="menu-icon" onClick={openNav}>☰</p>

        <h1>MUNIZA SIDDIQUI</h1>
      </header>

      <section className="head-portion">
        <svg width="625" height="400" id="wavy-line">

      <path d="M 50, 90 
      C 90,20 200,90 210,55 
      C 220,5 270,70 280,80 
      
      C 330,110 340,30 430,10 
      C 500,1 500,180 590,180 
      C 650,190 620,250 580,270
      C 530,300 550,360 600,400" stroke="#F4BB29" fill="none" />
    </svg>
    <div className="yolk-container">
      <div className="yolk-1"></div>
      <div className="yolk-2"></div>
      <svg width="121" height="122" id="little-wave-1">
        <path d="M 50, 15
        C 50,15 100,45 50,110" stroke="#F4BB29" strokeWidth={6} fill="none"></path>
      </svg>
      <svg width="200" height="170" id="little-wave-2">
        <path d="M 30, 70
        C 30,40 55,30 66,62" stroke="#F4BB29" strokeWidth={6} fill="none"></path>
      </svg>
      <svg width="200" height="170" id="little-wave-3">
        <path d="M 50, 40
        C 50,40 120,10 150,90" stroke="#F4BB29" strokeWidth={6} fill="none"></path>
      </svg>
    </div>
    <svg width="540" height="400" id="wavy-line-2">
      <path d="M 70,60 
      C 30,85 20,125 28,187
      C 30,215 60,230 70,300
      C 75,325 100,400 150,305
      C 159,290 225,225 300,300
      C 315,315 400,330 425,280
      C 438,260 480,250 540,257"
      stroke="#F4BB29" fill="none" strokeWidth={1}/>
    </svg>
        <div className="portfolio-letters top">
          <p className="letter" id="P">P</p>
          <p className="letter" id="o1">o</p>
          <p className="letter" id="r">r</p>
          <p className="letter" id="t">t</p>
        </div>
        <div className="portfolio-letters bottom">
          <p className="letter" id="f">f</p>
          <p className="letter" id="o2">o</p>
          <p className="letter" id="l">l</p>
          <p className="letter" id="i">i</p>
          <p className="letter" id="o3">o</p>
        </div>
      </section>

      <div className="categories">
        <div className="category-group">
          <div className="circle-group">
            <div className="circle"></div>
            <div className="inner-circle"></div>
          </div>
          <Link to="/graphics" className="categories-link">WORK</Link>
        </div>

        <div className="category-group">
          <div className="circle-group">
            <div className="circle"></div>
            <div className="inner-circle"></div>
          </div>
          <Link to="/about" className="categories-link">ABOUT</Link>
        </div>

        {/*<div className="category-group">
          <div className="circle-group">
            <div className="circle"></div>
            <div className="inner-circle"></div>
          </div>
          <Link to="/video" className="categories-link">VIDEO</Link>
        </div>*/}
      </div>
    </>
  );
}
