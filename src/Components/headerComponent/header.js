import React, { Component } from 'react';


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