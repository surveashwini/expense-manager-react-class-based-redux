import React from 'react';
import './App.scss';
import Authenticate from './../../HOC/Authenticate'

import Add from './../Add/Add'
import Report from '../Report/Report';
import Edit from '../Edit/Edit';

import Login from '../Login/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <main className="content">
          <BrowserRouter>
              <Switch>
                
                <Route path="/add" component={Authenticate(Add)} />
                <Route path="/report" component={Authenticate(Report)} />
                <Route path="/edit/:expenseId" component={Authenticate(Edit)} />
                <Route path="/" component={Login} />
              </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}


export default App;
