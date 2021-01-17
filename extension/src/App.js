/*global chrome*/
//replace with another photo
//look into App.cs

import React, { Component } from 'react';
import logo from './newicon.svg';
import './App.css';
import Form from './form.js';
import Info from './info.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.isExt ? 
            <img src={chrome.runtime.getURL("static/media/newicon.svg")} className="App-logo" alt="logo" />
          :
            <img src={logo} className="App-logo" alt="logo" />
          } 

          <h1 className="App-title">COVID-19 Reviews</h1>
        </header>
        <p className="App-intro">
          The COVID-19 pandemic is pretty scary. Find the stores that can provide you with the safest environment and share your own experiences with other users.
        </p>
        <p className="App-intro">
          Help others find safe spaces too! Rate the current location on its adherence to COVID-19 safety precautions and regulations.
        </p>
        <Form></Form>
        <Info></Info>
        <img class="App-bottom-image" src="images/undraw_location_review_dmxd.png"/>
      </div>
    );
  }
}

export default App;
