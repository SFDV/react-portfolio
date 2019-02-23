import React, { Component } from 'react';
//import {
 // BrowserRouter as Router,
  //Route,
  //Link
//} from 'react-router-dom';


//Components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homepage';
import Projects from './Components/pages/projects';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
