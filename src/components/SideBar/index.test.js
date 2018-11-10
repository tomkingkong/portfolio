import React from 'react';
import { shallow } from 'enyzme';

import SideBar from '.';

it('should match snapshot', () => {
  const wrapper = shallow(<SideBar />);
  expect(wrapper).toMatchSnapshot();
});
