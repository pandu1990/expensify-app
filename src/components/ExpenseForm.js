import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onCalendarFocusChange = ({ focused: calendarFocused }) => {
    this.setState(() => ({ calendarFocused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div className="form__input-group">
          <label>Description</label>
          <input type="text" placeholder="Eg., Rent" autoFocus className="text-input" value={this.state.description} onChange={this.onDescriptionChange} />
        </div>
        <div className="form__input-group">
          <label>Amount</label>
          <input type="text" placeholder="1499.99" className="text-input" value={this.state.amount} inputMode="decimal" onChange={this.onAmountChange} />
        </div>
        <div className="form__input-group">
          <label>Date</label>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
        <div className="form__input-group">
          <label>Note</label>
          <textarea placeholder="Add a note for your expense (optional)" className="textarea" value={this.state.note} onChange={this.onNoteChange}></textarea>
        </div>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
