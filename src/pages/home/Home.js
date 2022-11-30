import React from 'react';
import Login from './HireMeForm';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import ScrollToTop from './ScrollToTop';
import Skills from './Skills';

const Home = ({dark}) => {
    return (
        <div className='dark:bg-black bg-white'>
            <Hero />
            <About />
            <Skills />
            <Projects dark={dark}/>
            <Contact />
            <ScrollToTop />
            <Login />

        </div>
    )
}

export default Home