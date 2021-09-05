import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { configureStore, createStore } from '@reduxjs/toolkit'
import todoReducer from './components/features/TodoSlice'


const store = configureStore({
  reducer:{
    todos:todoReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


