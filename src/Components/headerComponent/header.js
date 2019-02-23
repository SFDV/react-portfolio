import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>

        <div class="container">

          <div class="logo">
            
          </div>

          <nav>
              <ul>
                  <li class="nav transform">
                      <a class="home" href="/">Home</a>
                  </li>
                  <li class="nav transform">
                      <a class="projects" href="/projects">Projects</a>
                  </li>
                  <li class="nav transform">
                      <a class="contact" href="/contact">Contact</a>
                  </li>
              </ul>
          </nav>

        </div>
      </header>
    );
  }
}

export default Header;