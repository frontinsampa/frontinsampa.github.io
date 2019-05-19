import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Section from '../../../commons/Section';

const Host = () => (
  <Section title="Apresentador">
    <Grid container alignItems="center">
      <Grid item xs>
        <Typography component="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui animi id nesciunt molestias eos voluptas, laudantium sunt officia quia expedita porro totam doloribus possimus nihil aperiam impedit culpa veniam corporis?</Typography>
      </Grid>

      <Grid>
        <img src="https://via.placeholder.com/450X350&text=HOST" alt="" />
      </Grid>
    </Grid>
  </Section>
);

export default Host;
