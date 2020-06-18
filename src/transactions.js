import React, { useContext } from 'react';
import { GlobalContext } from './globalState';

const Transactions = ({ transaction }) => {
  const { delTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button
        onClick={() => delTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transactions;