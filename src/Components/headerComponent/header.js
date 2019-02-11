import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>

        <div class="container">

            <nav>
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
            </nav>

        </div>
      </header>
    );
  }
}

export default Header;