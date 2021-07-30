import React, { Component } from 'react';

import './App.css';
import "./resources/fonts/fontWeb/css/fontello.css"


import PageOne from "./Pages/PageOne"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageOne />
      </div>
    );
  }
}

export default App;
