import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <header>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <div className={`overlay ${menuOpen ? 'open' : ''}`}>
        <div className="container">
          <nav>
            <ul>
              <li>Menü Öğesi 1</li>
              <li>Menü Öğesi 2</li>
              <li>Menü Öğesi 3</li>
              <li>Menü Öğesi 4</li>
            </ul>
          </nav>
        </div>
      </div>
      <main>
        <h1>Web Sayfası</h1>
        <p>İçerik burada yer alır.</p>
      </main>
    </div>
  );
};

export default Navbar;
