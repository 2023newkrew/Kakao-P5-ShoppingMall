import React from 'react';
import Router from 'Router';
import { OrderProvider } from 'contexts/OrderContext';
import './App.css';

function App() {
  return (
    <div className="app">
      <OrderProvider>
        <Router />
      </OrderProvider>
    </div>
  );
}

export default App;
