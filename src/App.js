import React from 'react';
import './App.css';
import Header from './Header.js';
import Balance from './Balance.js';
import IncomeExpense from './incomeExpense.js';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

import GlobalProvider from './globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
