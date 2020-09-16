import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/signup" component={() => {
        window.location.href="https://sdgcrm.herokuapp.com/signup"
        return null
      }} />
      <Route path="/login" component={() => {
        window.location.href="https://sdgcrm.herokuapp.com/login"
        return null
      }} />
      <main className="container">
        <About />
        <Features />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
