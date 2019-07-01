import uuid from 'uuid/v4';
import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/filter';
import Prismic from 'prismic-reactjs';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Section from '../Section';

import Image from '../../components/Image';
import Spot from '../../components/Spot';

const Showcase = ({ title, body, titleColor }) => body && (
  <Section title={Prismic.RichText.asText(title)} titleCustomColor={titleColor} progress={body.length}>
    <Box mb={1}>
      <Grid container spacing={2}>
        {
          /**
           * Highlight blocks.
           * @todo REDUCE!
           */
          filter(body, { slice_type: 'showcase' }).map(({ items }) => items.filter(({ showcase_type }) => ['Patrocínio', 'Apoio'].includes(showcase_type)).map(({
            showcase_image,
            showcase_link,
          }) => (
            <Grid item key={uuid()}>
              <Spot width={236} height={130}>
                <Link href={showcase_link.url} target={showcase_link.target} rel="noopener" underline="none">
                  <Image src={showcase_image.large.url} presentation alt={showcase_image.large.alt} {...showcase_image.large.dimensions} />
                </Link>
              </Spot>
            </Grid>
          )))
        }
      </Grid>
    </Box>

    <Grid container spacing={2}>
      {
        /**
         * Small blocks.
         * @todo REDUCE!
         */
        filter(body, { slice_type: 'showcase' }).map(({ items }) => items.filter(({ showcase_type }) => showcase_type === 'Feira de Recrutamento').map(({
          showcase_image,
          showcase_link,
        }) => (
          <Grid item key={uuid()}>
            <Spot width={110} height={110}>
              <Link href={showcase_link.url} target={showcase_link.target} rel="noopener" underline="none">
                <Image src={showcase_image.small.url} presentation alt={showcase_image.small.alt} {...showcase_image.small.dimensions} />
              </Link>
            </Spot>
          </Grid>
        )))
      }
    </Grid>
  </Section>
);

Showcase.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  titleColor: PropTypes.string,
};

Showcase.defaultProps = {
  titleColor: null,
};

export default Showcase;
