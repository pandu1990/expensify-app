import React from 'react';
import { shallow } from 'enzyme';
import { test, expect } from '@jest/globals';
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage';

test('should render ExpenseDashBoardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashBoardPage />);
  expect(wrapper).toMatchSnapshot();
});
