import React from 'react';
import './App.css';
import { Myconst } from './contaxt';
import { NewApp } from './newapp';

export function App() {
  var [count, setCount] = React.useState(0);
  var Increment = () => {
    setCount(count + 1);
  }
  var Decrement = () => {
    setCount(count - 1);
  }

  return (
    <Myconst.Provider value={{ count: count, Increment: Increment, Decrement: Decrement }}>
      <NewApp />
    </Myconst.Provider>

  );
}


