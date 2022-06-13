import React from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "web3uikit";
import "./header.css";
import maiLogo from "./MAILOGO.png"


 const Header = () => {


    return (
        <div className="header">
        <div className="logoContainer">
           <img src={maiLogo} alt="maiLogo" className="maiLogo" />
        </div>
        
        <nav>

          <div className="headerItems">
          <Link to="/pages/home">Home</Link>  
          <Link to="/pages/whitepaper">Whitepaper</Link> 
          <Link to="/pages/marketplace">MarketPlace</Link>  
          <Link to="/pages/portal">The Portal</Link> 
        
          
          
          <div className="loginButton">
          <ConnectButton />
          </div>
          </div>

        </nav>

        </div> 
  );
};

export default Header;
