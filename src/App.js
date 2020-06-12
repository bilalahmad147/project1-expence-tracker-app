import React from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';

function App() {
  return (
    <div>
      <Header />
      <div class="container">
      <Balance />
      </div>
    </div>
  );
}

export default App;
