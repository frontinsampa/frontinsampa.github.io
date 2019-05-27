import React from 'react';
import { shallow } from 'enzyme';

import Section from '../Section';

jest.mock('@material-ui/core/Grid');
jest.mock('@material-ui/core/Container');
jest.mock('../../../components/Typed');

describe('Components: <Section />', () => {
  describe('With `title` prop as `null`.', () => {
    const wrapper = shallow(
      <Section classes={{}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Section>,
    );

    it('Create a snapshot.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
