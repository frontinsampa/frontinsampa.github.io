import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Section from '../../../commons/Section';

const Place = () => (
  <Section title="Local">
    <Grid container alignItems="center">
      <Grid item xs>
        <Typography component="h3">Lorem ipsum</Typography>

        <Typography component="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quas consequuntur nisi libero reprehenderit possimus.</Typography>
      </Grid>

      <Grid>
        <img src="https://via.placeholder.com/450X350&text=PLACE" alt="" />
      </Grid>
    </Grid>

    <Typography component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, error iste perferendis provident similique nihil dicta, hic in ducimus harum nemo, cum ullam consequuntur quibusdam neque corporis numquam culpa iusto!</Typography>

    <Grid component="ul" container>
      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">Lorem ipsum dolor sit amet consectetur.</Typography>
      </Grid>
    </Grid>
  </Section>
);

export default Place;
