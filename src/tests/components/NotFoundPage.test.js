import React from 'react';
import { shallow } from 'enzyme';
import { test, expect } from '@jest/globals';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
