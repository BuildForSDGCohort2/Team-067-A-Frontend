import React, { useState, useEffect } from 'react';
import Overlay from './components/Overlay';
import Main from './components/main';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
    
  },[]);
  return (
      <Router>
        {isLoading ? <Overlay /> :
        <>
        <Navbar />
        <Route path='/' exact component={Main} />
        <Route path='/gallery' component={Gallery} />
        <Footer />
        </>
        }
      </Router>
  )
}

export default App
