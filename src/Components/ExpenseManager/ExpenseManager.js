import React from 'react';
import Add from '../Add/Add';
import Report from '../Report/Report';
import Edit from '../Edit/Edit';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './expense-manager.css'

function ExpenseManager() {
    return (

      <BrowserRouter>
        <ul className="add-expense-section" >
          <li>
            <Link to="/add">Add Expense</Link>
          </li>
          <li>
            <Link to="/report"> Expense Report</Link>
          </li>
        </ul>
        
        <Route path="/add" component={Add} />
        <Route path="/report" component={Report} />
        <Route path="/edit/:expenseId" component={Edit} />
        
      </BrowserRouter>
    );
}

export default ExpenseManager;
