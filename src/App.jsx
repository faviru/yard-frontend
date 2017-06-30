import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import List from './Complexes/List';
import Show from './Complexes/Show';
import Footer from './Footer';

const App = () =>
  (<Router>
    <div className="App">
      <Header />
      <Route exact path="/" component={List} />
      <Route exact path="/complex/:id" component={Show} />
      <Footer />
    </div>
  </Router>);
export default App;
