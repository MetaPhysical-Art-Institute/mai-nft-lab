/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import maiLogo from "./MAILOGO.png"
import { ConnectButton } from "web3uikit";
import { Link } from "react-router-dom";


export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={maiLogo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link to="/pages/home">Home</Link>
          <Link to="/pages/whitepaper">Whitepaper</Link>
          <Link to="/pages/marketplace">Bodega</Link>
          <Link to="/pages/portal">Lab</Link>
          <ConnectButton />
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🧪
      </button>
    </header>
  );
}
