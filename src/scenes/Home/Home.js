import React from 'react';

import Hero from './Hero';
import About from './About';
import Timeline from './Timeline';
import Contact from './Contact';

const Home = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Timeline />
    <Contact />
  </React.Fragment>
);

export default Home;
