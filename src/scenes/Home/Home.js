import React from 'react';

import Intro from './Intro';
import About from './About';
import Place from './Place';
import Host from './Host';
import Speakers from './Speakers';
import Sponsors from './Sponsors';
import Partners from './Partners';
import News from './News';

const Home = () => (
  <div>
    <main>
      <Intro />
      <About />
      <Place />
      <Host />
      <Speakers />
      <Sponsors />
      <Partners />
      <News />
    </main>
  </div>
);

export default Home;
