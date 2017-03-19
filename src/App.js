import React, { Component } from 'react';
import $ from "jquery";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    var embedCode = '<script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>';
    $('.acuity').append(embedCode);
    var embedButton ='<script src="https://embed.acuityscheduling.com/embed/button/13397268.js" async></script>';
    $('.acuityButton').append(embedButton)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="acuity">
        <iframe src="https://app.acuityscheduling.com/schedule.php?owner=13397268" width="100%" height="800" frameBorder="0"></iframe>
        </div>
        <div className="acuityButton"></div>
      </div>
    );
  }
}

export default App;
