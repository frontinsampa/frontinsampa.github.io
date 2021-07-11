import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-reactjs';


import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { getSponsorshipByYear, getSponsorByIds } from '../../../services/content';

import Image from '../../../components/Image';
import Spot from '../../../components/Spot';

import Section from '../../../commons/Section';

async function getPage() {
  const [response] = await getSponsorshipByYear();
  const { title, body } = response.data;

  const sponsorshipSlice = await getSponsorship(body);

  return {
    title,
    body: {
      sponsorship: sponsorshipSlice,
    },
  };
}

async function getSponsorship(data) {
  const slice = data
    .filter(({ slice_type }) => slice_type === 'sponsorship')
    .map(({ primary: { sponsorship_quota: quota }, items }) => ({
      quota,
      sponsors: items.map(({ sponsor: { id } }) => id),
    }));

  const sponsorsIds = slice.flatMap(({ sponsors }) => sponsors);
  const sponsorsPages = await getSponsorByIds(sponsorsIds);

  const body = slice.map(({ quota, sponsors: ids }) => {
    const sponsors = ids
      .map((id) => {
        const sponsor = sponsorsPages
          .find(page => page.id === id)
          .data;

        const image = filterSponsorImageByQuota(quota, sponsor.image);

        return { ...sponsor, image };
      });

    return {
      quota,
      sponsors,
    };
  });

  return body;
}

function filterSponsorImageByQuota(quota, image) {
  if (['specialist', 'senior'].includes(quota.toLowerCase())) {
    const { alt, dimensions, url } = image;
    return {
      alt,
      dimensions,
      url,
    };
  }

  const size = {
    /**
     * TODO: update image dimensions
     */
    plena: 'small',
    junior: 'small',
  }[quota.toLowerCase()];

  return image[size] || image;
}

const Sponsors = () => {
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
      title={page.title && Prismic.RichText.asText(page.title)}
      titleCustomColor="ocean"
      /* ??? */
      progress={!loading}
    >
      {
        page.body.sponsorship && page.body.sponsorship.map(({ sponsors }) => (
          <Grid container spacing={2}>
            {
              sponsors.map(sponsor => (
                <Grid item key={sponsor.id}>
                  <Box mb={1}>
                    <Spot {...sponsor.image.dimensions}>
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

Sponsors.propTypes = {};

export default Sponsors;
