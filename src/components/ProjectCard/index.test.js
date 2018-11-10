import React from 'react';
import { shallow } from 'enyzme';

import ProjectCard from '.';

it('should match snapshot', () => {
  const wrapper = shallow(<ProjectCard />);
  expect(wrapper).toMatchSnapshot();
});
