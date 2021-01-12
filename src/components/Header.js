
import { Component } from 'react';

// style
import '../assets/css/Header.css';

// components
import Nav from './Nav';
import Config from './Config';

class Header extends Component {
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
