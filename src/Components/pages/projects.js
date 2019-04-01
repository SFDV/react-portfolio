import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
        <div class="project container">
          <h1>Projects Page Content</h1>

          <div class="col-md-6" id="smash">
            <p class="title">The Smash Center</p>

            <p class="description">My final project from the Rutger's Coding Bootcamp. An app that allows users to create customizable profiles, and post basic information about tournaments they plan on holding. Technologies used in this project include Express, Node, and MongoDB</p>

            <img class="projectlogo" id="smashlogo" alt="" src={require("./images/smashlogo.png")} />
          </div>
        </div>

    );
  }
}

export default Projects;