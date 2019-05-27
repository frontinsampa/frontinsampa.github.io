import uuid from 'uuid/v4';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Section from '../../../commons/Section';

import Svg from '../../../components/Svg';
import Spot from '../../../components/Spot';
import SpotBar from '../../../components/SpotBar';

const SPEAKERS_LIST = [
  {
    name: 'Hugo Bessa',
    occupation: 'Desenvolvedor Front-End',
    description: 'Desenvolvedor Front-End com foco em simplicidade.',
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: 'https://twitter.com/hugobessaa',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: 'https://via.placeholder.com/340x340/181819?text=<Palestrante />',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
];

const Speakers = () => (
  <Section collapsed>
    <Grid container>
      {
        SPEAKERS_LIST.map(({
          name,
          occupation,
          description,
          photo,
          social,
        }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={uuid()}>
            <Spot>
              <img src={photo} alt={name} />

              {
                description && (
                  <SpotBar>
                    <Typography component="h3" variant="h6">
                      { name }
                    </Typography>

                    <Typography component="p" variant="body2" paragraph>
                      { occupation }
                    </Typography>

                    <Typography component="p" paragraph>
                      { description }
                    </Typography>

                    <Grid container alignItems="center" spacing={2}>
                      {
                        social.twitter && (
                          <Grid item xs="auto">
                            <Link href={social.twitter} underline="none" target="_blank" rel="noopener">
                              <Svg src="/assets/images/social-media-twitter.svg" fallback="/assets/images/social-media-twitter.png" />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        social.github && (
                          <Grid item xs="auto">
                            <Link href={social.github} underline="none" target="_blank" rel="noopener">
                              <Svg src="/assets/images/social-media-twitter.svg" fallback="/assets/images/social-media-twitter.png" />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        social.personal && (
                          <Grid item xs="auto">
                            <Link href={social.personal} underline="none" target="_blank" rel="noopener">
                              <Svg src="/assets/images/social-media-twitter.svg" fallback="/assets/images/social-media-twitter.png" />
                            </Link>
                          </Grid>
                        )
                      }
                    </Grid>
                  </SpotBar>
                )
              }
            </Spot>
          </Grid>
        ))
      }
    </Grid>
  </Section>
);

export default Speakers;
