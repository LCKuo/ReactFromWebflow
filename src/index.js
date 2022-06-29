import React from 'react';
import ReactDOM from 'react-dom/client';
import './A.css';
import './B.css';
import './C.css';
import './styles';
import './scripts';
import reportWebVitals from './reportWebVitals';
import IndexView from './views/IndexView';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexView />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
