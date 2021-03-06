import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };

  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  }

  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: 'rent',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set startDate filter', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().startOf('month').subtract(4, 'days')
  }

  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month').subtract(4, 'days'),
    endDate: moment().endOf('month')
  });
});

test('should set endDate filter', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().endOf('month').add(4, 'days')
  }

  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month').add(4, 'days')
  });
});
