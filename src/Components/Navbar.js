import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
         <nav id="navbar" className="navbar">
          <div className="center">
               <ul className="nav">
                    <li className="nav-item">
                         <a href="/home" className="nav-link">
                              Home
                         </a>
                    </li>
                    <li className="nav-item">
                         <a href="/bollywood" className="nav-link">
                              Bollywood
                         </a>
                    </li>
               </ul>
          </div>
     </nav>
    </div>
  );
}

export default Navbar;