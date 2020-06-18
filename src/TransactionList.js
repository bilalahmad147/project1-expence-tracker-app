import React, { useContext } from 'react';
import {GlobalContext} from './globalState';
import Transactions from './transactions.js';

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList;