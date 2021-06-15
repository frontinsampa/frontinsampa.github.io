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
    },
    a11y: {
      description: 'Abrir nossa página no Facebook',
    },
  },
  {
    href: '/youtube',
    icon: {
      src: '/assets/images/social-media-youtube.svg',
      fallback: '/assets/images/social-media-youtube.png',
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
        Quer tirar dúvidas ou mandar sugestões?
      </Typography>
    </Box>

    <Box mb={4}>
      {
        /**
         * @todo Solve word-wrap problem.
         */
      }
      <Typography component="p" paragraph style={{ wordWrap: 'break-word' }}>
        <Link href="mailto:contato@frontinsampa.com.br" aria-label="Abrir e-mail com destinatário contato@frontinsampa.com.br" underline="none" color="secondary" variant="h5">
          contato@frontinsampa.com.br
        </Link>
      </Typography>
      <Typography component="p" paragraph style={{ wordWrap: 'break-word' }}>
        <Link href="mailto:comunidade@frontinsampa.com.br" aria-label="Abrir e-mail com destinatário comunidade@frontinsampa.com.br" underline="none" color="secondary" variant="h5">
          comunidade@frontinsampa.com.br
        </Link>
      </Typography>
    </Box>
    <Box mb={4}>
      <Typography component="p" paragraph variant="h3">
        Que tal palestrar?
      </Typography>
      <Typography component="p" paragraph variant="h4" style={{ wordWrap: 'break-word' }}>
        <Link href="https://forms.gle/qP8KMKH5KSvc8CbW7" aria-label="Abrir link https://forms.gle/qP8KMKH5KSvc8CbW7" color="secondary" variant="h5">
          Acesse nosso Call For Papers
        </Link>
      </Typography>
    </Box>
    <Box mb={4}>
      <Typography component="p" paragraph variant="h3">
        Patrocine
      </Typography>
      <Typography component="p" paragraph variant="h4" style={{ wordWrap: 'break-word' }}>
        <Link href="https://drive.google.com/file/d/1n8XW5U-lJuxSI56oMfT9D32a-QdZQCmF/view" aria-label="Abrir link https://drive.google.com/file/d/1n8XW5U-lJuxSI56oMfT9D32a-QdZQCmF/view" color="secondary" variant="h5">
          FSPON21 Media Kit
        </Link>
      </Typography>
    </Box>
    <Typography component="p" paragraph variant="h3">
      Edições anteriores
    </Typography>
    <Typography component="div" color="textSecondary" variant="h5">
      <Link
        href="https://www.youtube.com/watch?v=0qtRQYS4V5A"
        underline="none"
        color="secondary"
        variant="h5"
        target="_blank"
      >
        frontinsampa.com.br/youtube
      </Link>
    </Typography>
  </Section>
);

export default Contact;
