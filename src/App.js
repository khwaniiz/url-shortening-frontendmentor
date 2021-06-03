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

// https://github.com/dgdev1024/2020-fm-url-shortening-api-landing-page/blob/master/src/com/shortened-link/index.jsx

// https://github.com/xk1656/shorten-url-page/blob/master/src/components/Main/Main.style.scss

// https://github.com/jomefavourite/url-shortening-api-master_frontendmentor/blob/master/src/components/Shorten.js#L11