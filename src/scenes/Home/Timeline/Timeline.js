// import uuid from 'uuid/v4';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Prismic from 'prismic-reactjs';

// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import TypographyCore from '@material-ui/core/Typography';
// import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

import Typography from '../../../components/Typography';

import Section from '../../../commons/Section';

import getTimeline from './store/getTimeline';

// import transformToScheduleHour from '../../../utils/transformToScheduleHour';

const Timeline = ({ dispatch, page }) => {
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch(getTimeline());
      setLoading(true);
    }
  });

  return loaded && (
    <Section progress={page.body.length}>
      {
        page && (
          <React.Fragment>
            <Box mb={6}>
              <Typography component="div" variant="h4">
                <p>Criamos uma programação com diversas atrações, trazendo a linguagem da TV para o digital:</p>
                {/* { Prismic.RichText.render(page.content) } */}
              </Typography>
              <Typography component="div" variant="h5">
                A GRADE DO FSP0N21 NO YOUTUBE (ATUALIZAÇÕES EM BREVE)
              </Typography>
            </Box>

            <p>09:00 É DE CASA COM FSPON21</p>
            <p>09:15 BOM DIA FULL STACK</p>
            <p>09:30 BOM DIA FRONTEND</p>
            <p>09:45 MAIS VOCÊ FRONT</p>
            <p>10:00 CAFÉ DA MANHÃ COM CONVIDADA</p>
            <p>-</p>
            <p>10:30 ENCONTRO COM FRONTEND</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>11:30 ATRAÇÃO SURPRESA</p>
            <p>-</p>
            <p>12:00 MASTER CHEF FRONTEND</p>
            <p>-</p>
            <p>12:30 PANELINHA</p>
            <p>-</p>
            <p>-</p>
            <p>13:15 FSP1 JORNAL</p>
            <p>13:30 FRONTEND HOJE</p>
            <p>-</p>
            <p>-</p>
            <p>14:15 VALE A PENA CODAR DE NOVO</p>
            <p>-</p>
            <p>-</p>
            <p>15:00 SE JOGA NO FRONT</p>
            <p>-</p>
            <p>15:30 SHOW DO SETINTERVAL</p>
            <p>-</p>
            <p>16:00 CALDEIRÃO DO JAVASCRIPT</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>17:00 MALHAÇÃO</p>
            <p>-</p>
            <p>17:30 FSP2 JORNAL</p>
            <p>17:45 ENCERRAMENTO</p>
            {/* <Grid container>
              {
                page.body.filter(({ slice_type }) => slice_type === 'timeline').map(({ items }) => items.map(({
                  title,
                  subtitle,
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
                        { title }
                      </Typography>

                      {
                        subtitle && (
                          <Typography component="h4" variant="h5" paragraph>
                            { subtitle }
                          </Typography>
                        )
                      }

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
            </Grid> */}
          </React.Fragment>
        )
      }
    </Section>
  );
};

Timeline.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
};

export default connect(store => ({
  page: store.timeline.page,
}))(Timeline);
