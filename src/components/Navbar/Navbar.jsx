import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/');
  };

  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={() => gotoHome()}>
          LUXURY RENTALS
        </div>
        <ul>
          <li>
            <Link to={"/about"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/villas"}>VILLAS</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
        {/* Alternar entre RxHamburgerMenu y RxCross2 */}
        {navHeight ? (
          <RxCross2
            className="hamburger"
            onClick={() => setNavHeight(false)}
          />
        ) : (
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => setNavHeight(true)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;