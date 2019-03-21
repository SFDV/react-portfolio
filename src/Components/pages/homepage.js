import React, { Component } from 'react';

class Homepage extends Component {

  render() {
    return (
        <div class="home container">
          <h1>About Me</h1>

          <p id="homepageText"> Hello! I'm Dan Vickey. A full-stack web developer based in central    New Jersey.
            <br/>
            I specialize in front-end UI and UX development, but am also knowledgable with back-end development.
            <br/>
            Listed below are the frameworks and technologies I have experience with
            <br/>
            <br/>
            <div class="skillContainer">
              <img class="skillimg" id="html5img" alt="" src={require("./images/html-5-logo.png")} />
              <img class="skillimg" id="css3img" alt="" src={require("./images/css-3-logo.png")} />
              <img class="skillimg" id="jsimg" alt="" src={require("./images/js-logo.png")} />
              <br/>
              <img class="skillimg" id="handlebarsimg" alt="" src={require("./images/handlebars-js.png")} />
              <img class="skillimg" id="jqueryimg" alt="" src={require("./images/jquery-logo.png")} />
              <img class="skillimg" id="nodeimg" alt="" src={require("./images/nodejs.png")} />
              <img class="skillimg" id="reactimg" alt="" src={require("./images/react-logo.png")} />
              <img class="skillimg" id="mysqlimg" alt="" src={require("./images/mysql-logo-png-transparent.png")} />
              <br/>
              <img class="skillimg" id="firebaseimg" alt="" src={require("./images/firebase.png")} />
              <img class="skillimg" id="mongodbimg" alt="" src={require("./images/mongodb-logo.png")} />
              <img class="skillimg" id="sequelizeimg" alt="" src={require("./images/Sequelize.png")} />

            </div>
          </p>
        </div>

    );
  }
}

export default Homepage;