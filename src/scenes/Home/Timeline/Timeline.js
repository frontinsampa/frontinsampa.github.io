import uuid from 'uuid/v4';
import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-reactjs';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TypographyCore from '@material-ui/core/Typography';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

import transformToScheduleHour from '../../../utils/transformToScheduleHour';

import { getTimelineByYear, getSpeakersByIds } from '../../../services/content';

async function getPage() {
  const [response] = await getTimelineByYear();
  const {
    title,
    body,
    content,
  } = response.data;

  const timeline = await getTimelineDetails(body);

  return {
    title,
    body: {
      content,
      timeline,
    },
  };
}

async function getTimelineDetails(data) {
  const slices = data
    .filter(({ slice_type }) => slice_type === 'timeline')
    .map(({ items }) => (
      items.map((item) => {
        const {
          speaker,
          co_speaker_1,
          co_speaker_2,
          ...details
        } = item;

        const speakers = [
          speaker,
          co_speaker_1,
          co_speaker_2,
        ].map(({ id } = {}) => id).filter((id) => id?.length);

        return { ...details, speakers };
      })
    ));

  const speakersIds = slices
    .flatMap((items) => (
      items
        .map(({ speakers }) => speakers)
        .filter((id) => id?.length)
    ))
    .flatMap((id) => id);

  const speakersPages = await getSpeakersByIds(speakersIds);

  const body = slices.map((items) => (
    items.map(({ speakers: ids, ...program }) => {
      const speakers = speakersPages
        .map(({ id, data: { name } }) => (
          ids.includes(id) && name
        ))
        .filter((name) => name?.length);

      if (speakers) {
        return {
          ...program,
          speakers,
        };
      }

      return program;
    })
  ));

  return body;
}

const Timeline = () => {
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

        console.log(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Section
      title={page.title && Prismic.RichText.asText(page.title)}
      titleCustomColor="ocean"
      /* ??? */
      progress={!loading}
    >
      {
        page.body?.content && (
          <Box mb={6}>
            <Typography component="div" variant="h4">
              {page.body?.content && Prismic.RichText.render(page.body.content)}
            </Typography>
          </Box>
        )
      }

      {
        page.body?.timeline?.map((timeline) => (
          <Grid container key={uuid()}>
            {
              timeline.map((program) => (
                <Grid
                  item
                  xs={12}
                  md={10}
                  lg={8}
                  key={uuid()}
                >
                  <Box mb={6}>
                    <Typography
                      component="span"
                      variant="h4"
                      display="block"
                      paragraph
                      customColor="ocean"
                    >
                      {transformToScheduleHour(program.schedule_from, program.schedule_to)}
                    </Typography>

                    <Typography
                      component="h3"
                      variant="h5"
                      paragraph
                    >
                      {program.heading}
                    </Typography>

                    {
                      (program.type || program?.speakers) && (
                        <Grid
                          container
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Grid item>
                            {
                              program.type && (
                                <ChatBubbleOutline />
                              )
                            }
                          </Grid>

                          <Grid item>
                            <Typography component="small">
                              {program.type}
                              {(program.type && program?.speakers.length > 0) && ' - '}
                              {program?.speakers.join(' + ')}
                            </Typography>
                          </Grid>
                        </Grid>
                      )
                    }

                    {
                      program.description && (
                        <TypographyCore component="div" variant="h6" paragraph color="textSecondary">
                          {Prismic.RichText.render(program.description)}
                        </TypographyCore>
                      )
                    }
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        ))
      }
    </Section>
  );
};

export default Timeline;
