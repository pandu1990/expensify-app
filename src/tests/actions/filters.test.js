import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  setSortBy
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

test('should generate set text filter action object with text value', () => {
  const text = 'Some text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate set sort by action object with createdAt value', () => {
  const action = setSortBy('createdAt');
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'createdAt'
  });
});

test('should generate set sort by action object with amount value', () => {
  const action = setSortBy('amount');
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  });
});
