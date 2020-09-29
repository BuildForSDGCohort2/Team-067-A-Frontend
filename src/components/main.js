import React, {useEffect} from 'react';
import Header from './Header';
import Features from './Features';
import About from './About';
import Banner from './Banner';

const Main = () => {
    useEffect(()=>{
        
    },[])
    return (
        <main className="main">
            <Header />
            <div className="container">
                <About />
                <Banner />
                <Features />
            </div>
        </main>
    )
}

export default React.memo(Main)