import React, {useEffect} from 'react';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import About from './About';
import AOS from 'aos';
import "aos/dist/aos.css";

const Main = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        });
    },[])
    return (
        <main className="main">
            <Header />
            <div className="container">
                <About />
                <Features />
            </div>
            <Footer />
        </main>
    )
}

export default React.memo(Main)