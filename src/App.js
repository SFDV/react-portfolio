import React, { Component } from 'react';

//Components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homepage';
import Projects from './Components/pages/projects';
import Contact from './Components/pages/contact';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="maincontainer">
          <Homepage />
          <Projects />
          <Contact />
        </div>  
        <Footer />
      </div>
    );
  }
}

export default App;
