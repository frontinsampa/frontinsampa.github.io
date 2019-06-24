import uuid from 'uuid/v4';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Prismic from 'prismic-reactjs';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

import getTimeline from './store/getTimeline';

const Timeline = ({ dispatch, content }) => {
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getTimeline());
    setLoading(true);
  }, [loaded]);

  return loaded && (
    <Section>
      {
        content.map(({ body }) => (
          <React.Fragment key={uuid()}>
            <Box mb={6}>
              <Typography component="p" variant="h4">
                1 dia, 8 horas de conteúdo, 7 Talks, 2 Lightning Talks, 1 Keynote.
              </Typography>
            </Box>

            <Grid container>
              {
                body.filter(({ slice_type }) => slice_type === 'timeline').map(({ items }) => items.map(({
                  schedule,
                  title,
                  description,
                }) => (
                  <Grid item xs={12} lg={8} key={uuid()}>
                    <Typography component="span" variant="h4" display="block" paragraph>
                      { Prismic.Date(schedule).toString() }
                    </Typography>

                    <Typography component="h3" variant="h5" paragraph>
                      { title }
                    </Typography>

                    <Typography component="h4" variant="h5" paragraph>Lorem ipsum dolor</Typography>

                    <Typography component="p" variant="h6" paragraph>
                      { Prismic.RichText.asText(description) }
                    </Typography>
                  </Grid>
                )))
              }
            </Grid>
          </React.Fragment>
        ))
      }
    </Section>
  );
};

Timeline.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired,
};

export default connect(store => ({
  content: store.timeline.content,
}))(Timeline);
