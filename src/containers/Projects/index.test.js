import React from 'react';
import { shallow } from 'enyzme';

import Projects from '.';

it('should match snapshot', () => {
  const wrapper = shallow(<Projects />);
  expect(wrapper).toMatchSnapshot();
});
