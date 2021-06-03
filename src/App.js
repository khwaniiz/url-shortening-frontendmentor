import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Statistics from './components/statistics/Statistics'
import GetStart from './components/getStart/GetStart'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path='/' />
      </Switch>

      <Hero />
      <Statistics />
      <GetStart />
      <Footer />
    </Router>
  );
}

export default App;
