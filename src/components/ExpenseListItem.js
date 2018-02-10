import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import expenses from '../reducers/expenses';


const ExpenseListItem = ({ id, description, note, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default connect()(ExpenseListItem);