import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

export default function NavMenu({ isOpen, close }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      // if menu exists AND click is outside it
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        close();
      }
    }

    // only listen when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, close]);

  return (
    <div
      ref={menuRef}
      id="mySidenav"
      className={`sidenav ${isOpen ? "open" : ""}`}
    >
      <Link to="/" onClick={close}>HOME</Link>
      <Link to="/graphics" onClick={close}>GRAPHICS</Link>
      <Link to="/webdesign" onClick={close}>WEB DESIGN</Link>
      <Link to="/about" onClick={close}>ABOUT</Link>
    </div>
  );
}


