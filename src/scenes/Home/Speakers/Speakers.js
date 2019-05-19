import uuid from 'uuid/v4';

import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Section from '../../../commons/Section';

const SPEAKERS = [
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
  {
    name: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor siet amiet',
    photo: 'https://via.placeholder.com/250x250&text=SPEAKER',
  },
];

const Speakers = () => (
  <Section title="Palestrantes">
    <GridList cellHeight={250} cols={4}>
      {
        SPEAKERS.map(({ name, description, photo }, key) => (
          <GridListTile key={uuid()}>
            <img src={photo} alt={name} />
          </GridListTile>
        ))
      }
    </GridList>
  </Section>
);

export default Speakers;
