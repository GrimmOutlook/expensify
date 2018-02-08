import { store, combineReducers } from 'redux';
import uuid from 'uuid';

// ACTIONS:
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// DELETE_EXPENSE
const deleteExpense = ({ id } = {}) => ({
  type: 'DELETE_EXPENSE',
  id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_AMOUNT
// SORT_BY_DATE
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer:

const expensesDefault = [];

const expensesReducer = (state = expensesDefault, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case DELETE_EXPENSE:
      return state.filter(item => item.id !== action.id) [...state, action.expense];
    default:
      return state;
  }
};


// Filters Reducer:

const filtersDefault = {
  text: '',
  sortBy: date,
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store:

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log('store.getState(): ', store.getState());

const expenseOne = store.dispatch(addExpense({description: 'groceries', amount: 3400}));
const expenseTwo = store.dispatch(addExpense({description: 'fuel', amount: 2400}));

store.dispatch(deleteExpense({ id: expenseOne.expense.id }));

const demoState = {

  expenses: [{
    id: 'longnumberstring',
    description: 'January Rent',
    note: 'Too much for rent.',
    amount: 102800,  // in pennies
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: amount,   // amount or date
    startDate: undefined,
    endDate: undefined
  }

};
