import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
        <div class="projectcontainer">
          <h1>Projects Page Content</h1>

          <a class="project" href="https://dv-capstone-client.herokuapp.com/">
            <div class="individualprojects" id="smash">
              <p class="title" id="smashcenter">The Smash Center</p>
              
              <p class="description">My final project from the Rutger's Coding Bootcamp. An app that allows users to create customizable profiles, and post basic information about tournaments they plan on holding. The app remembers all user and tournament information.</p>
              
              <p class="technologies">Technologies used: HTML, CSS, JavaScript, React, Express, Nodejs, MongoDB</p>

              <img class="projectlogo" id="smashlogo" alt="" src={require("./images/smashlogo.png")} />
            </div>
          </a>

          <a class="project" href="https://derkche.github.io/MyAmericanGuide/">
            <div class="individualprojects" id="america">
              <p class="title" id="americaguide">My America Guide</p>
              
              <p class="description">A group project form the Rutger's Coding Bootcamp. This application takes the location a user inputs and runs it through a series of APIs in order to display information such as weather, local news, and notable landmarks of the area. 
              <br></br>
              <br></br>
              Created in conjunction with <a class="partner" href="https://github.com/derkche\">Derek Chee</a>, <a class="partner" href="https://github.com/mlech413\">Mark Lech</a>, <a class="partner" href="https://github.com/OperaSinger\">Vale Rideout</a>, and <a class="partner" href="https://github.com/tundesalisu\">Salisu Babatunde</a>.</p>
              
              <p class="technologies">Technologies used: HTML, CSS, JavaScript, Express, Ajax, Nodejs, Firebase</p>

              <img class="projectlogo" id="americalogo" alt="" src={require("./images/americalogo.png")} />
            </div>
          </a>
          <a href="https://github.com/SFDV">
            <div class="github">
              
              <img class="octocat" alt="" src={require("./images/Ocotocat.png")} />
            
              
              <p id="githublink">If you're interested in seeing more of my work click here to check out my GitHub!</p>
            
            </div>
          </a>
        </div>

    );
  }
}

export default Projects;