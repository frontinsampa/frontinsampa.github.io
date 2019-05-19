import uuid from 'uuid/v4';

import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Section from '../../../commons/Section';

const PARTNERS = [
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=PARTNERS',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=PARTNERS',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=PARTNERS',
  },
  {
    name: 'Lorem Ipsum',
    logo: 'https://via.placeholder.com/150x100&text=PARTNERS',
  },
];

const Partners = () => (
  <Section title="Apoiadores">
    <GridList cellHeight={150} cols={4}>
      {
        PARTNERS.map(({ name, logo }) => (
          <GridListTile key={uuid()}>
            <img src={logo} alt={name} />
          </GridListTile>
        ))
      }
    </GridList>
  </Section>
);

export default Partners;
