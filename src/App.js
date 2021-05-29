import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home/Home';
import photos from './components/pages/photos';
import Projects from './components/pages/projects/Projects';
import Music from './components/pages/projects/Music/Music';
import ScrollIndecatior from './components/scroll/ScrollIndecatior';
import ScrollToTop from './components/scroll/ScrollToTop';

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