import React, { Component } from 'react';
import './Header.css';

import Navbar from './Navbar/Navbar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar />
      </header>
    );
  }
}

export default Header;