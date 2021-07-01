import React from 'react';
import { shallow } from 'enzyme';
import { expect, test } from '@jest/globals';
import LoadingPage from '../../components/LoadingPage';

test('should correctly render LoadingPage', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
