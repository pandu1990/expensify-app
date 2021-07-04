import React from 'react';
import { shallow } from 'enzyme';
import { test, jest, beforeEach, expect } from '@jest/globals';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, setSortBy, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  setSortBy = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters filters={filters} setTextFilter={setTextFilter} setSortBy={setSortBy} setStartDate={setStartDate} setEndDate={setEndDate} />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'text filter';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(setSortBy).toHaveBeenLastCalledWith(value);
});

test('should sort by createdAt date', () => {
  const value = 'createdAt';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(setSortBy).toHaveBeenLastCalledWith(value);
});

test('should handle startDate and endDate changes', () => {
  const startDate = moment(0).add(2, 'years');
  const endDate = moment(0).add(5, 'years');
  wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const focusedInput = 'startDate';
  wrapper.find(DateRangePicker).prop('onFocusChange')(focusedInput);
  expect(wrapper.state('calendarFocused')).toBe(focusedInput);
});
