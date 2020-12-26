import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Navigation from '../navigation/Navigation';
import Tracker from '../tracker/Tracker';

import './App.scss';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/tracker" component={Tracker} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
