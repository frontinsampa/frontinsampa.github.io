import uuid from 'uuid/v4';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Prismic from 'prismic-reactjs';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TypographyCore from '@material-ui/core/Typography';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

import getTimeline from './store/getTimeline';

import transformToScheduleHour from '../../../utils/transformToScheduleHour';

const Timeline = ({ dispatch, page }) => {
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch(getTimeline());
      setLoading(true);
    }
  });

  return loaded && (
    <Section
      title={Prismic.RichText.asText(page.title)}
      titleCustomColor="ocean"
      progress={page.body.length}
    >
      {
        page && (
          <>
            <Box mb={6}>
              <Typography component="div" variant="h4">
                { Prismic.RichText.render(page.content) }
              </Typography>
            </Box>

            <Grid container>
              {
                page.body.filter(({ slice_type }) => slice_type === 'timeline').map(({ items }) => items.map(({
                  heading,
                  description,
                  type,
                  schedule_from,
                  schedule_to,
                }) => (
                  <Grid item xs={12} md={10} lg={8} key={uuid()}>
                    <Box mb={6}>
                      <Typography component="span" variant="h4" display="block" paragraph customColor="ocean">
                        { transformToScheduleHour(schedule_from, schedule_to) }
                      </Typography>

                      <Typography component="h3" variant="h5" paragraph>
                        { heading }
                      </Typography>

                      {
                        type && (
                          <Grid container alignItems="flex-start" spacing={1}>
                            <Grid item>
                              <ChatBubbleOutline />
                            </Grid>

                            <Grid item>
                              <Typography component="small">
                                { type }
                              </Typography>
                            </Grid>
                          </Grid>
                        )
                      }

                      {
                        description && (
                          <TypographyCore component="div" variant="h6" paragraph color="textSecondary">
                            { Prismic.RichText.render(description) }
                          </TypographyCore>
                        )
                      }
                    </Box>
                  </Grid>
                )))
              }
            </Grid>
          </>
        )
      }
    </Section>
  );
};

Timeline.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
};

export default connect((store) => ({
  page: store.timeline.page,
}))(Timeline);
