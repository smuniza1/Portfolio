import React from 'react';
import { Link } from "react-router-dom";

export default function NavMenu({ isOpen, close }) {
  return (
    <div
      id="mySidenav"
      className={`sidenav ${isOpen ? "open" : ""}`}
    >

      <Link to="/" onClick={close}>HOME</Link>
      <Link to="/graphics" onClick={close}>WORK</Link>
      <Link to="/about" onClick={close}>ABOUT</Link>
    </div>
  );
}


