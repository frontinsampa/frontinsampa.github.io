import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '../../../styles';

import Section from '../../../commons/Section';

import styles from './styles';

const About = () => (
  <Section title="Front In Sampa 2019">
    <Typography component="p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur natus odio fugit aperiam sequi autem soluta, repudiandae quia tempora necessitatibus repellat, reprehenderit nihil ipsum rerum, cupiditate quidem minus aliquam libero.</Typography>

    <Grid component="ul" container>
      <Grid component="li" item xs>
        <Typography component="span">
          <span>70+</span> palestrantes
        </Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">
          <span>2+</span> participantes
        </Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">
          <span>30+</span> patrocinadores
        </Typography>
      </Grid>

      <Grid component="li" item xs>
        <Typography component="span">
          <span>70+</span> apoiadores
        </Typography>
      </Grid>
    </Grid>
  </Section>
);

export default withStyles(styles)(About);
