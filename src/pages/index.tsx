import React from 'react';

// Sections
import Welcome from '../sections/Welcome/Welcome';
import About from '../sections/About/About';
import Employment from '../sections/Employment/Employment';
import Works from '../sections/Works/Works';
import Skills from '../sections/Skills/Skills';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

const Home = () => {
    return (
        <div className={'app'}>
            <Welcome />
            <About />
            <Employment />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
