import React, { Component } from 'react';
import Header from './Header.jsx';
import List from './Complexes/List';
import Show from './Complexes/Show';
import Footer from './Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={List} />
          <Route exact path="/complex" component={Show} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
