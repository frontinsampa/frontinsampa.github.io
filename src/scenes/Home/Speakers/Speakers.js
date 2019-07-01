import uuid from 'uuid/v4';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Prismic from 'prismic-reactjs';
import orderBy from 'lodash/orderBy';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import Section from '../../../commons/Section';

import Image from '../../../components/Image';
import Svg from '../../../components/Svg';
import Spot from '../../../components/Spot';
import SpotBar from '../../../components/SpotBar';

import getSpeakers from './store/getSpeakers';

const Speakers = ({ dispatch, content }) => {
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch(getSpeakers());
      setLoading(true);
    }
  });

  return (
    <Section collapsed progress={content.length}>
      <Grid container>
        {
          orderBy(content, ['name'], ['asc']).map(({
            name,
            occupation,
            description,
            photo,
            social_media_twitter,
            social_media_github,
            website,
          }) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={uuid()}>
              <Spot>
                <Image src={photo.medium.url} presentation alt={photo.medium.alt} {...photo.medium.dimensions} />

                <SpotBar>
                  <Box marginBottom={1}>
                    <Grid container alignItems="center" spacing={2}>
                      {
                        social_media_twitter.url && (
                          <Grid item xs="auto">
                            <Link href={Prismic.Link.url(social_media_twitter)} underline="none" target="_blank" rel="noopener">
                              <Svg src="/assets/images/social-media-twitter.svg" fallback="/assets/images/social-media-twitter.png" />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        social_media_github.url && (
                          <Grid item xs="auto">
                            <Link href={Prismic.Link.url(social_media_github)} underline="none" target="_blank" rel="noopener">
                              <Svg src="/assets/images/social-media-github.svg" fallback="/assets/images/social-media-twitter.png" />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        website.url && (
                          <Grid item xs="auto">
                            <Link href={Prismic.Link.url(website)} underline="none" target="_blank" rel="noopener">
                              <Svg src="/assets/images/social-media-site.svg" fallback="/assets/images/social-media-twitter.png" />
                            </Link>
                          </Grid>
                        )
                      }
                    </Grid>
                  </Box>

                  <Typography component="h3" variant="h6">
                    { name }
                  </Typography>

                  <Typography component="p" variant="body2" paragraph>
                    { occupation }
                  </Typography>

                  <Typography component="p">
                    { Prismic.RichText.asText(description) }
                  </Typography>
                </SpotBar>
              </Spot>
            </Grid>
          ))
        }
      </Grid>
    </Section>
  );
};

Speakers.propTypes = {
  dispatch: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired,
};

export default connect(store => ({
  content: store.speakers.content,
}))(Speakers);
