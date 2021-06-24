import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'createdAt',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to createdAt', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, {
    type: 'SET_SORT_BY',
    sortBy: 'createdAt'
  });
  expect(state.sortBy).toBe('createdAt');
});

test('should set text filter', () => {
  const text = 'this is my filter';
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text
  });
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });
  expect(state.endDate).toEqual(endDate);
});
