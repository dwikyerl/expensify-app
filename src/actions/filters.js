// SET_TEXT_FILTER
exports.setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
exports.sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
exports.sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
exports.setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
exports.setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});