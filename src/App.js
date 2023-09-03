import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home/Home';
import photos from './components/pages/photos';
import Music from './components/pages/projects/Music/Music';
import Projects from './components/pages/projects/Projects';
import ScrollColor from './components/scroll/ScrollColor';
import ScrollToTop from './components/scroll/ScrollToTop';
import FileNotFound from './components/fileNotFound/FileNotFound';
import ChatWindow from './components/chatwindow/chat';

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
      <ScrollColor></ScrollColor>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/photos' component={photos} />
          <Route exact path='/music-by-reading-face' component={Music} />
          <Route exact component={FileNotFound} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;