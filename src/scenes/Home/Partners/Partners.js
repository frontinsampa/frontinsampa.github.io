import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Showcase from '../../../commons/Showcase';

import getPartners from './store/getPartners';

const Partners = ({ dispatch, page, available }) => {
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch(getPartners());
      setLoading(true);
    }
  });

  return available && (
    <Showcase titleColor="energy" {...page} />
  );
};

Partners.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
  available: PropTypes.bool.isRequired,
};

export default connect(({ partners }) => ({ ...partners }))(Partners);
