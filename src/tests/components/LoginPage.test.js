import React from 'react';
import { shallow } from 'enzyme';
import { expect, test, jest } from '@jest/globals';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startGoogleLogin on button click', () => {
  const startGoogleLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLoginSpy} />);
  wrapper.find('button').at(0).simulate('click');
  expect(startGoogleLoginSpy).toHaveBeenCalled();
});

test('should call startTwitterLogin on button click', () => {
  const startTwitterLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startTwitterLogin={startTwitterLoginSpy} />);
  wrapper.find('button').at(1).simulate('click');
  expect(startTwitterLoginSpy).toHaveBeenCalled();
});
