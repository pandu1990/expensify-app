import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = !startDate || createdAtMoment.isSameOrAfter(startDate);
    const endDateMatch = !endDate || createdAtMoment.isSameOrBefore(endDate);
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return b.createdAt - a.createdAt;
      case 'amount':
        return b.amount - a.amount;
    }
  });
};
export default getVisibleExpenses;
