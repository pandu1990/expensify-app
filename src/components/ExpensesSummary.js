import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> {expenseCount === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
      </h1>
      <div className="page-header__actions">
        <Link to="/create" className="button">Add Expense</Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
