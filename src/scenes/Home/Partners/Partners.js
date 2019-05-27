import uuid from 'uuid/v4';

import React from 'react';

import Grid from '@material-ui/core/Grid';

import Section from '../../../commons/Section';


/**
 * @todo Move `PARTNERS_LIST` to configuration file.
 */
const PARTNERS_LIST = [
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

const Partners = ({}) => {
  return (
    <Section title="Apoiadores">
      <Grid container>
        {
          PARTNERS_LIST.map(({ name, logo }) => (
            <Grid item xs={12} md={6} lg={4} key={uuid()}>
              <img src={logo} alt={name} />
            </Grid>
          ))
        }
      </Grid>
    </Section>
  )
};

export default Partners;
