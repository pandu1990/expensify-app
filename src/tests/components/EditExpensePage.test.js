import React from 'react';
import { shallow } from 'enzyme';
import { test, jest, expect, beforeEach } from '@jest/globals';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;
const expense = expenses[2];
beforeEach(() => {
  editExpenseSpy = jest.fn();
  startRemoveExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense}
      editExpense={editExpenseSpy}
      startRemoveExpense={startRemoveExpenseSpy}
      history={historySpy}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expense.id });
});
