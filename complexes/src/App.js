import React, { Component } from 'react';
import Header from './Header.jsx';
import List from './Complexes/List/List.jsx';
import Footer from './Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <List />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
