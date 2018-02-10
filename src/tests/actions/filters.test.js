import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
  const date = moment();
  const action = setStartDate(date);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: date
  });
});

test('should generate set end date action object', () => {
  const date = moment();
  const action = setEndDate(date);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: date
  });
});

test('should generate set text filter action object with provided value', () => {
  const action = setTextFilter('Bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Bill'
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});