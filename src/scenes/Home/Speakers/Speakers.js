import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-reactjs';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import Section from '../../../commons/Section';

import Image from '../../../components/Image';
import Svg from '../../../components/Svg';
import Spot from '../../../components/Spot';
import SpotBar from '../../../components/SpotBar';

import { getSpeakersByYear } from '../../../services/content';

async function getPage() {
  const response = await getSpeakersByYear();
  const speakers = getSpeakers(response);

  return {
    title: 'Palestrantes',
    body: {
      speakers,
    },
  };
}

function getSpeakers(data) {
  const speakers = data
    .map(({ id, data: speaker }) => {
      const photo = filterSpeakerPhoto(speaker.photo);

      return {
        ...speaker,
        id,
        photo,
      };
    });

  return speakers;
}

function filterSpeakerPhoto(photo) {
  const { alt, dimensions, url } = photo;
  /**
   * TODO: add other resolutions
   */
  return {
    alt,
    dimensions,
    url,
  };
}

const Speakers = () => {
  const [page, setPage] = useState({
    title: null,
    body: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await getPage();

        setPage(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Section
      collapsed
      /* ??? */
      progress={!loading}
    >
      <Grid container>
        {
          page.body.speakers && page.body.speakers.map((speaker) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={speaker.id}
            >
              <Spot>
                <Image
                  presentation
                  src={speaker.photo.url}
                  alt={speaker.photo.alt}
                  {...speaker.photo.dimensions}
                />

                <SpotBar>
                  <Box marginBottom={1}>
                    <Grid
                      container
                      alignItems="center"
                      spacing={2}
                    >
                      {
                        speaker.social_media_twitter?.url && (
                          <Grid item xs="auto">
                            <Link
                              href={Prismic.Link.url(speaker.social_media_twitter)}
                              underline="none"
                              target={speaker.social_media_twitter.target}
                              rel="noopener"
                            >
                              <Svg
                                src="/assets/images/social-media-twitter.svg"
                                fallback="/assets/images/social-media-twitter.png"
                              />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        speaker.social_media_instagram?.url && (
                          <Grid item xs="auto">
                            <Link
                              href={Prismic.Link.url(speaker.social_media_instagram)}
                              underline="none"
                              target={speaker.social_media_instagram.target}
                              rel="noopener"
                            >
                              <Svg
                                src="/assets/images/social-media-instagram.svg"
                                fallback="/assets/images/social-media-instagram.png"
                              />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        speaker.social_media_youtube?.url && (
                          <Grid item xs="auto">
                            <Link
                              href={Prismic.Link.url(speaker.social_media_youtube)}
                              underline="none"
                              target={speaker.social_media_youtube.target}
                              rel="noopener"
                            >
                              <Svg
                                src="/assets/images/social-media-youtube.svg"
                                fallback="/assets/images/social-media-youtube.png"
                              />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        speaker.social_media_github?.url && (
                          <Grid item xs="auto">
                            <Link
                              href={Prismic.Link.url(speaker.social_media_github)}
                              underline="none"
                              target={speaker.social_media_github.target}
                              rel="noopener"
                            >
                              <Svg
                                src="/assets/images/social-media-github.svg"
                                fallback="/assets/images/social-media-twitter.png"
                              />
                            </Link>
                          </Grid>
                        )
                      }

                      {
                        speaker.website?.url && (
                          <Grid item xs="auto">
                            <Link
                              href={Prismic.Link.url(speaker.website)}
                              underline="none"
                              target={speaker.website.target}
                              rel="noopener"
                            >
                              <Svg
                                src="/assets/images/social-media-site.svg"
                                fallback="/assets/images/social-media-twitter.png"
                              />
                            </Link>
                          </Grid>
                        )
                      }
                    </Grid>
                  </Box>

                  <Typography component="h3" variant="h6">
                    {speaker.name}
                  </Typography>

                  <Typography component="p" variant="body2" paragraph>
                    {speaker.occupation}
                  </Typography>

                  <Typography component="p">
                    {Prismic.RichText.asText(speaker.description)}
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

export default Speakers;
