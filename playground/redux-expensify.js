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
