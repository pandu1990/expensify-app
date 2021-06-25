import React from 'react';
import { shallow } from 'enzyme';
import { test, jest, expect, beforeEach } from '@jest/globals';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseSpy, historySpy, wrapper;
beforeEach(() => {
  addExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={historySpy} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(addExpenseSpy).toHaveBeenCalledWith(expenses[1]);
});
