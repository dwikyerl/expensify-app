// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      // const expenses = state.filter((expense) => expense.id !== action.id);
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id !== action.id) return expense;
        
        return {
          ...expense,
          ...action.updates
        }
      });
    default:
      return state;

  }
};

export default expensesReducer;
