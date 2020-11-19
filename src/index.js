import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <>
    <App />
    <ToastContainer />
  </>,
  document.getElementById('root')
);
