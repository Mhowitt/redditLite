import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainLayout} />
        </div>
      </Router>
    );
  }
}

export default App;
