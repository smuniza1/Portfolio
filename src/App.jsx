import { useState } from "react";
import NavMenu from "./components/NavMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Video from "./pages/Video";
import WebDesign from "./pages/WebDesign";
import About from "./pages/About";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
    
      <NavMenu isOpen={navOpen} close={() => setNavOpen(false)} />

      <Routes>
        <Route path="/" element={<Home openNav={() => setNavOpen(true)} />} />
        <Route path="/graphics" element={<Graphics openNav={() => setNavOpen(true)} />} />
        <Route path="/video" element={<Video openNav={() => setNavOpen(true)} />} />
        <Route path="/webdesign" element={<WebDesign openNav={() => setNavOpen(true)} />} />
        <Route path="/about" element={<About openNav={() => setNavOpen(true)} />} />
      </Routes>
    </>
  );
}


export default App;
