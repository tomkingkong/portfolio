import React from 'react';
import { shallow } from 'enyzme';

import App from '..';

it('should match snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});