import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import ExpensifyDashboard from '../components/ExpensifyDashboard';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NoMatch from '../components/NoMatch';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={ExpensifyDashboard} />
          <Route exact path='/create' component={AddExpense} />
          <Route exact path='/edit/:id' component={EditExpense} />
          <Route exact path='/help' component={HelpPage} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;
