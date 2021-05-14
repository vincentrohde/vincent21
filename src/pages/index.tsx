import React from 'react';

// Sections
import Welcome from '../sections/Welcome/Welcome';
import About from '../sections/About/About';
import Projects from '../sections/Projects/Projects';
import Work from '../sections/Work/Work';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

const Home = () => {
    return (
        <div className={'app-wrapper'}>
            <div className={'app'}>
                <Welcome />
                <About />
                <Projects />
                <Work />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
