import React from 'react';
import { shallow } from 'enzyme';

import Svg from '../Svg';

describe('Components: <Svg />', () => {
  const wrapper = shallow(
    <Svg src="/path/to/image.svg" fallback="/path/to/image.png" />,
  );

  it('Create a snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
