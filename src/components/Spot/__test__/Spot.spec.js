import React from 'react';
import { shallow } from 'enzyme';

import Spot from '../Spot';

describe('Components: <Spot />', () => {
  const wrapper = shallow(
    <Spot classes={{}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Spot>,
  );

  it('Create a snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
