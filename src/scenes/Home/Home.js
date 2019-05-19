import React from 'react';

import Hero from './Hero';
import About from './About';
import Speakers from './Speakers';
import Host from './Host';
import Place from './Place';
import Partners from './Partners';
import Sponsors from './Sponsors';
import Contact from './Contact';

const Home = () => (
  <React.Fragment>
    <Hero />
    <About />
    <Speakers />
    <Host />
    <Place />
    <Sponsors />
    <Partners />
    <Contact />
  </React.Fragment>
);

export default Home;
