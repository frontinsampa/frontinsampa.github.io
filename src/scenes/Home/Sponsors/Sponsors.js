import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Prismic from 'prismic-reactjs';

import { getSponsorshipByYear, getSponsorByIds } from '../../../services/content';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Image from '../../../components/Image';
import Spot from '../../../components/Spot';

import Section from '../../../commons/Section';

const Sponsors = () => {
  const [title, setTitle] = useState();
  const [sponsors, setSponsors] = useState([]);

  const getSponsors = async () => {
    const [response] = await getSponsorshipByYear();
    const { title, body } = response.data;

    const [sliceClients] = body.filter(({ slice_type }) => slice_type === 'clients');
    const sponsorsList = sliceClients.items.map(({ client: { id }, spotlight }) => ({ id, spotlight }));
    const sponsorsIds = sponsorsList.map(({ id }) => id);

    const sponsorsPages = await getSponsorByIds(sponsorsIds);

    const sponsorsDetails = sponsorsPages.map(({ data: body, ...page }) => {
      const { spotlight } = sponsorsList.find(({ id }) => id === page.id);

      return { ...body, spotlight };
    });

    return { title, sponsors: sponsorsDetails };
  };

  useEffect(() => {
    (async () => {
      const {
        title,
        sponsors: sponsorsDetails,
      } = await getSponsors();

      setTitle(title);
      setSponsors(sponsorsDetails);
    })();
  });

  return (
    <Section
      title={title && Prismic.RichText.asText(title)}
      titleCustomColor="ocean"
      progress={sponsors.length}
    >
      <Grid container spacing={2}>
        {
          sponsors && sponsors.map((sponsor) => (
            <Grid item key={sponsor.id}>
              <Spot width={236} height={130}>
                <Link
                  href={sponsor.website.url}
                  target={sponsor.website.target}
                  rel="noopener"
                  underline="none"
                >
                  <Image
                    presentation
                    src={sponsor.image.url}
                    alt={sponsor.image.alt}
                    {...sponsor.image.dimensions}
                  />
                </Link>
              </Spot>
            </Grid>
          ))
        }
      </Grid>
    </Section>
  );
};

Sponsors.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  available: PropTypes.bool.isRequired,
};

export default Sponsors;
