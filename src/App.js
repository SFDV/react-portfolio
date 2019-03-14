import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homepage';
import Projects from './Components/pages/projects';
import Contact from './Components/pages/contact';
import './App.css';


const App = () => (
  <Router>
    <div className="App">
        <Header />
        <div className="maincontainer">
          <Route exact path="/" component={Homepage}/>
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>  
        <Footer />
    </div>
  </Router>
)

export default App;
