import React, { useState, useEffect } from 'react';
import Overlay from './components/Overlay';
import Main from './components/main';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1500)
    
  },[]);
  return (
      <>
        {isLoading ? <Overlay /> : <Main />}
      </>
  )
}

export default App
