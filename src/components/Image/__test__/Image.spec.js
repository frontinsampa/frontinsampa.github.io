import React from 'react';
import { shallow } from 'enzyme';

import Image from '../Image';

jest.mock('uuid/v4', () => jest.fn().mockImplementation(() => 'string'));

describe('Components: <Image />', () => {
  describe('With `presentation` as `true`.', () => {
    const wrapper = shallow(
      <Image src="/path/to/image.png" alt="" presentation />,
    );

    it('Create a snapshot.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('With `presentation` props as `false`.', () => {
    const wrapper = shallow(
      <Image src="/path/to/image.png" alt="" a11y={{
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      }} />,
    );

    it('Create a snapshot.', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
