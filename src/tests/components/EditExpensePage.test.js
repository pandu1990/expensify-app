import React from 'react';
import { shallow } from 'enzyme';
import { test, jest, expect, beforeEach } from '@jest/globals';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;
const expense = expenses[2];
beforeEach(() => {
  startEditExpenseSpy = jest.fn();
  startRemoveExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage expense={expense} startEditExpense={startEditExpenseSpy} startRemoveExpense={startRemoveExpenseSpy} history={historySpy} />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expense.id });
});
