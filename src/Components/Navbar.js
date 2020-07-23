import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
         <nav id="navbar" className="navbar">
          <div className="center">
               <ul className="nav">
                    <a href="/home">
                         <li className="nav-link nav-item">
                              Home
                         </li>
                    </a>
                    <a href="/bollywood">
                         <li className="nav-link nav-item">
                              Bollywood
                         </li>
                    </a>
               </ul>
          </div>
     </nav>
    </div>
  );
}

export default Navbar;