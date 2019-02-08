import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        LOGO

        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Projects</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
      </header>
    );
  }
}

export default Header;