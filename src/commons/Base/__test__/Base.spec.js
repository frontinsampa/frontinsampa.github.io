import React from 'react';
import { shallow } from 'enzyme';

import Base from '../Base';

describe('Commons: <Base />', () => {
  const wrapper = shallow(
    <Base>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </Base>,
  );

  it('Create a snapshot.', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
