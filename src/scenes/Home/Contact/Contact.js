import uuid from 'uuid/v4';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Svg from '../../../components/Svg';

import Section from '../../../commons/Section';

/**
 * @todo Move `SOCIAL_MEDIA` to configuration file.
 */
const SOCIAL_MEDIA = [
  {
    href: 'https://twitter.com/frontinsp',
    icon: {
      src: '/assets/images/social-media-twitter.svg',
      fallback: '/assets/images/social-media-twitter.png',
      a11y: {
        title: 'Icone Twitter',
      },
    },
    a11y: {
      description: 'Abrir nossa página no Twitter',
    },
  },
  {
    href: 'https://www.instagram.com/frontinsampa/',
    icon: {
      src: '/assets/images/social-media-instagram.svg',
      fallback: '/assets/images/social-media-instagram.png',
      a11y: {
        title: 'Icone Instagram',
      },
    },
    a11y: {
      description: 'Abrir nossa página no Instagram',
    },
  },
  {
    href: 'https://www.facebook.com/frontinsampa/',
    icon: {
      src: '/assets/images/social-media-facebook.svg',
      fallback: '/assets/images/social-media-facebook.png',
      a11y: {
        title: 'Icone Facebook',
      },
    },
    a11y: {
      description: 'Abrir nossa página no Facebook',
    },
  },
  {
    href: 'https://www.youtube.com/frontinsampa',
    icon: {
      src: '/assets/images/social-media-youtube.svg',
      fallback: '/assets/images/social-media-youtube.png',
      a11y: {
        title: 'Icone YouTube',
      },
    },
    a11y: {
      description: 'Abrir nossa página no YouTube',
    },
  },
];

const Contact = () => (
  <Section component="footer" title="Contato" titleCustomColor="nature">
    <Box mb={4}>
      <Grid container alignItems="center" spacing={4}>
        {
          SOCIAL_MEDIA.map(({
            href,
            icon,
            a11y,
          }) => (
            <Grid item xs="auto" key={uuid()}>
              <Link href={href} target="_blank" rel="noopener" underline="none" aria-label={a11y.description}>
                <Svg {...icon} />
              </Link>
            </Grid>
          ))
        }
      </Grid>
    </Box>

    <Box mb={4}>
      <Typography component="p" paragraph variant="h3">
        Quer patrocinar, tirar dúvidas ou mandar sugestões?
      </Typography>
    </Box>

    <Box mb={4}>
      {
        /**
         * @todo Solve word-wrap problem.
         */
      }
      <Typography component="p" paragraph variant="h4" style={{ wordWrap: 'break-word' }}>
        <Link href="mailto:contato@frontinsampa.com.br" aria-label="Abrir e-mail com destinatário contato@frontinsampa.com.br" color="inherit" underline="none">
          contato@frontinsampa.com.br
        </Link>
      </Typography>
    </Box>
  </Section>
);

export default Contact;
