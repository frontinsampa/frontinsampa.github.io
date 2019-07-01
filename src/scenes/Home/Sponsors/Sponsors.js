import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Showcase from '../../../commons/Showcase';

import getSponsors from './store/getSponsors';

const Sponsors = ({ dispatch, page, available }) => {
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch(getSponsors());
      setLoading(true);
    }
  });

  return available && (
    <Showcase titleColor="ocean" {...page} />
  );
};

Sponsors.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  available: PropTypes.bool.isRequired,
};

export default connect(({ sponsors }) => ({ ...sponsors }))(Sponsors);
