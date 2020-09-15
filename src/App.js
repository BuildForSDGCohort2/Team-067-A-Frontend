import React from 'react';
import Header from './components/Header';
// import Guide from './components/Guide';
import Features from './components/Features';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <About />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
