export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const setSortBy = (sortBy) => ({
  type: 'SET_SORT_BY',
  sortBy
});
export const setSortByAmount = () => setSortBy('amount');
export const setSortByDate = () => setSortBy('date');

export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
