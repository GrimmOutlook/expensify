import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const expensifyDashboard = () => (
  <div>
    The Dashboard Component
  </div>
);

const addExpense = () => (
  <div>
    The Add Expense Component
  </div>
);

const editExpense = () => (
  <div>
    The Edit Expense Component
  </div>
);

const helpPage = () => (
  <div>
    The Help Page Component
  </div>
)

const NoMatch = () => (
  <div>
    404 - You done messed up!
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={expensifyDashboard} />
      <Route exact path='/create' component={addExpense} />
      <Route exact path='/edit' component={editExpense} />
      <Route exact path='/help' component={helpPage} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
