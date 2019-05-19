import uuid from 'uuid/v4';

import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Section from '../../../commons/Section';

const SPONSORS_HIGHLIGHT = [
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=SPONSOR',
  },
];

const SPONSORS_DEFAULT = [
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/100x100&text=SPONSOR',
  },
];

const Sponsors = () => (
  <Section title="Patrocinadores">
    <GridList cellHeight={150} cols={4}>
      {
        SPONSORS_HIGHLIGHT.map(({ name, logo }) => (
          <GridListTile key={uuid()}>
            <img src={logo} alt={name} />
          </GridListTile>
        ))
      }
    </GridList>

    <GridList cellHeight={100} cols={8}>
      {
        SPONSORS_DEFAULT.map(({ name, logo }) => (
          <GridListTile key={uuid()}>
            <img src={logo} alt={name} />
          </GridListTile>
        ))
      }
    </GridList>
  </Section>
);

export default Sponsors;
