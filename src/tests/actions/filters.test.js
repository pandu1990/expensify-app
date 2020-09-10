import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  setSortByAmount,
  setSortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should set the text filter passed', () => {
  const action = setTextFilter('test');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  });
});

test('should clear the text filter when nothing is passed', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should set sort by amount', () => {
  const action = setSortByAmount();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  });
});

test('should set sort by date', () => {
  const action = setSortByDate();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date'
  });
});
