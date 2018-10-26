import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
// import Header from './containers/Header';
// import Error404 from './Error404';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={props => <MainLayout {...props} />} />
            <Route
              path="/subreddit/:redditName"
              render={props => <MainLayout {...props} />}
            />
            {/* <Route component={Error404} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
