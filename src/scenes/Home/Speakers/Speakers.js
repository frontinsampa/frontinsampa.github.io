import uuid from 'uuid/v4';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import Section from '../../../commons/Section';

import Image from '../../../components/Image';
import Svg from '../../../components/Svg';
import Spot from '../../../components/Spot';
import SpotBar from '../../../components/SpotBar';

const SPEAKERS_LIST = [
  {
    name: 'Marina Limeira',
    occupation: 'Software Engineer',
    description: 'Natural de Alagoas, é engenheira no Nubank, contribuiu para projetos da Mozilla Brasil e organizou edições do Rails Girls.',
    photo: '/assets/images/speaker-marina-limeira.png',
    social: {
      twitter: 'https://twitter.com/marinalimeira_',
      github: 'https://github.com/marinalimeira',
      personal: 'http://www.marinalimeira.com',
    },
  },
  {
    name: 'Hugo Bessa',
    occupation: 'Desenvolvedor Front-End',
    description: 'Desenvolvedor Front-End com foco em simplicidade.',
    photo: '/assets/images/speaker-hugo-bessa.png',
    social: {
      twitter: 'https://twitter.com/hugobessaa',
      github: 'https://github.com/hugobessaa',
      personal: 'http://hugobessa.com.br',
    },
  },
  {
    name: 'Josélia Costa',
    occupation: 'Desenvolvedora de Software',
    description: 'Desenvolvedora de software na ThoughtWorks, trabalha com desenvolvimento desde 2014 e adora a stack de front-end.',
    photo: '/assets/images/speaker-joselia-costa.png',
    social: {
      twitter: 'https://twitter.com/meninadoviolao',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: '/assets/images/speaker.jpg',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: '/assets/images/speaker.jpg',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: '/assets/images/speaker.jpg',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: '/assets/images/speaker.jpg',
    social: {
      twitter: '/',
      github: null,
      personal: null,
    },
  },
  {
    name: null,
    description: null,
    photo: '/assets/images/speaker.jpg',
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
              <Image src={photo} width={342} height={314} alt="" presentation />

              {
                description && (
                  <SpotBar>
                    <Box marginBottom={1}>
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
                                <Svg src="/assets/images/social-media-github.svg" fallback="/assets/images/social-media-twitter.png" />
                              </Link>
                            </Grid>
                          )
                        }

                        {
                          social.personal && (
                            <Grid item xs="auto">
                              <Link href={social.personal} underline="none" target="_blank" rel="noopener">
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
                      { description }
                    </Typography>
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
