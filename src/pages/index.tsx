import React from 'react';

// Custom sections

import Welcome from '../sections/Welcome/Welcome';
import Works from '../sections/Works/Works';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';

const Home = () => {
    return (
        <div className={'app'}>
            <Welcome />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
