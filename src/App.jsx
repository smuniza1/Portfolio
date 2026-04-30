import { useState } from "react";
import NavMenu from "./components/NavMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Video from "./pages/Video";
import WebDesign from "./pages/WebDesign";
import About from "./pages/About";
import Photography from "./pages/Photography";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(prev => !prev);

  return (
    <>
      <NavMenu isOpen={navOpen} close={() => setNavOpen(false)} />

      <Routes>
        <Route path="/"            element={<Home       openNav={toggleNav} />} />
        <Route path="/graphics"    element={<Graphics   openNav={toggleNav} />} />
        <Route path="/video"       element={<Video      openNav={toggleNav} />} />
        <Route path="/webdesign"   element={<WebDesign  openNav={toggleNav} />} />
        <Route path="/about"       element={<About      openNav={toggleNav} />} />
        <Route path="/photography" element={<Photography openNav={toggleNav} />} />
      </Routes>
    </>
  );
}

export default App;