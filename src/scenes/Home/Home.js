/* eslint-disable */
import React from 'react';

import Hero from './Hero';
import About from './About';
import Speakers from './Speakers';
import Timeline from './Timeline';
import Sponsors from './Sponsors';
import Partners from './Partners';
import Contact from './Contact';

const Home = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Timeline />
    <Speakers />
    <Partners />
    <Sponsors />
    <Contact />
  </React.Fragment>
);

export default Home;
