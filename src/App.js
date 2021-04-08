import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import photos from './components/pages/photos';
import Projects from './components/pages/Projects';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/Scroll/ScrollToTop';
import ScrollIndecatior from './components/Scroll/ScrollIndecatior';
import Music from './components/Music/Music';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }
    // return () => {
    //   cleanup
    // }
    , [])

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <ScrollIndecatior></ScrollIndecatior>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/photos' component={photos} />
          <Route path='/Music-by-reading-face' component={Music} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;