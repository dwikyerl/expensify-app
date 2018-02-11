import expenseReducer from '../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});


test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '1',
      description: 'Water bill',
      note: '',
      amount: 20000,
      createdAt: 0
    }
  }

  const state = expenseReducer(undefined, action);
  expect(state).toEqual([ action.expense ]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      ...expenses[1],
      description: 'Water bill',
    }
  }

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([ expenses[0], action.updates, expenses[2] ]);
});

test('should not edit an expense if expense not found ', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'Water bill',
    }
  }

  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

