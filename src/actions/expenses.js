import uuid from 'uuid/v1';

// ADD_EXPENSE
exports.addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE

exports.removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
exports.editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});