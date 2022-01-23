import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

//STORE

//ACTION 
const login = () => {
  return {
    type: 'LOGIN'
  }
}
const logOut = () => {
  return {
    type: 'LOGOUT'
  }
}

//REDUCER
const manager = (state = 0, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return state = 10;
    case 'LOGOUT':
      return state = 5
  }
}

// let store = createStore(manager)

// store

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
