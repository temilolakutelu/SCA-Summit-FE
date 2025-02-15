import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

import App from './App';

// axios
axios.defaults.baseURL = 'http://localhost:4000/';

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

axios.defaults.headers.post['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(request => {
  
  // Do something before request is sent  
  return request;

}, error => {

  return Promise.reject(error);

});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();