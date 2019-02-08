import React, { Component } from 'react';

import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homepage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
