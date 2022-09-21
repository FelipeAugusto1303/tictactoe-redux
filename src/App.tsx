import React from 'react';
import './App.css';
import { TicTacToe } from './components/TicTacToe'
import { store } from './components/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <TicTacToe/>
    </Provider>
  );
}

export default App;
