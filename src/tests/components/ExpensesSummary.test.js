import React from 'react';
import { shallow } from 'enzyme';
import { test, expect } from '@jest/globals';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenesesSummary correctly for one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={109500} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenesesSummary correctly for multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={234500} />);
  expect(wrapper).toMatchSnapshot();
});
