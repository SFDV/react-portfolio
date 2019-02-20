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
                      <a class="home" href="#">Home</a>
                  </li>
                  <li>
                      <a class="projects" href="#">Projects</a>
                  </li>
                  <li>
                      <a class="contact" href="#">Contact</a>
                  </li>
              </ul>
          </nav>

        </div>
      </header>
    );
  }
}

export default Header;