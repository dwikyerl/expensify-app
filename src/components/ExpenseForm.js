import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();

class ExpenseForm extends React.Component {
  state = {
    description: this.props.description || '',
    note: this.props.note || '',
    amount: (this.props.amount / 100) || '',
    createdAt: moment(this.props.createdAt) || moment(),
    calendarFocused: false,
    error: ''
  };

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
    if(!amount || amount.match(/^\d{1,}(\.\d*)?$/)){
      this.setState(() => ({ amount }))
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description.trim() || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount '}))
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description.trim(),
        amount: +this.state.amount * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Decription"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>{this.props.mode} Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;