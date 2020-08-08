import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const setSortBy = (sortBy) => ({
  type: 'SET_SORT_BY',
  sortBy
});
const setSortByAmount = () => setSortBy('amount');
const setSortByDate = () => setSortBy('date');

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducers = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducers
}));

store.subscribe(() => {
  console.log(store.getState());
});

const { expense: { id: rentId } } = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const { expense: { id: coffeeId } } = store.dispatch(addExpense({ description: 'Coffee', amount: 3 }));

store.dispatch(removeExpense(rentId));
store.dispatch(editExpense(coffeeId, { amount: 5 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(setSortByAmount());
store.dispatch(setSortByDate());

store.dispatch(setStartDate(1000));
store.dispatch(setEndDate(2000));
store.dispatch(setStartDate());
store.dispatch(setEndDate());
