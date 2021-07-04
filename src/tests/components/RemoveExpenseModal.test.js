import React from 'react';
import { shallow } from 'enzyme';
import { test, expect, jest, beforeAll } from '@jest/globals';
import RemoveExpenseModal from '../../components/RemoveExpenseModal';

let wrapper, closeModalSpy, removeExpenseSpy;
beforeEach(() => {
  closeModalSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  wrapper = shallow(<RemoveExpenseModal showModal={true} closeModal={closeModalSpy} removeExpense={removeExpenseSpy} />);
});

test('should render RemoveExpenseModal correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should close modal when No button is clicked', () => {
  wrapper.find('button').at(1).simulate('click');
  expect(closeModalSpy).toHaveBeenCalled();
  expect(removeExpenseSpy).not.toHaveBeenCalled();
});

test('should close modal and call remove expense when Yes button is clicked', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(closeModalSpy).toHaveBeenCalled();
  expect(removeExpenseSpy).toHaveBeenCalled();
});
