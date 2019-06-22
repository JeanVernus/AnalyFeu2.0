import React, { Component } from 'react';
import NavBarMaterial from "./Components/Navbar";
import Routing from "./Components/Routing";
import FooterBar from "./Components/Footer";
import SUBoutton from './Components/ScrollUpButton';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div >
          <NavBarMaterial />
          <Routing />
          <FooterBar />
        </div>
        <div >
          <SUBoutton />
        </div>
      </div >
    );
  }
}

export default App;
