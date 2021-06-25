import React from 'react';
import { shallow } from 'enzyme';
import { test, expect } from '@jest/globals';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
