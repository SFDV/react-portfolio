import React, { Component } from 'react';

import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
