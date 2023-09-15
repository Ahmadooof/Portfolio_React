import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { HeaderProvider, useHeaders } from './utilities/headercontext'; // Import HeaderProvider here
import { insertUser } from './services/user';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderProvider> {/* Wrap your entire app with HeaderProvider */}
        <ScrollToTop />
        <ScrollColor />
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/photos' element={<photos />} />
            <Route path='/music-by-reading-face' element={<Music />} />
            <Route path='*' element={<FileNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </HeaderProvider>
    </>
  );
}

export default App;