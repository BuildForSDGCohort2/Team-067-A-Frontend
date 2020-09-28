import React, {useEffect} from 'react';
import Header from './Header';
import Features from './Features';
import About from './About';

const Main = () => {
    useEffect(()=>{
        
    },[])
    return (
        <main className="main">
            <Header />
            <div className="container">
                <About />
                <Features />
            </div>
        </main>
    )
}

export default React.memo(Main)