import React from "react";
import Nav from "./Nav";
import Config from "./Config";

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="Header">
        <Nav></Nav>
        <Config></Config>
        {}
      </header>
    );
  }
}

export default Header;
