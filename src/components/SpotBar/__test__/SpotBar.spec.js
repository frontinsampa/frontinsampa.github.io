import React from 'react';
import { shallow } from 'enzyme';

import SpotBar from '../SpotBar';

jest.mock('@material-ui/core/Box');

/**
 * @todo Resolve problem with `fade`.
 */
jest.mock('../styles', () => ({
  spotBar: {},
  spotBarContent: {},
}));

describe('Components: <SpotBar />', () => {
  const wrapper = shallow(
    <SpotBar classes={{}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </SpotBar>,
  );

  it('Create a snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
