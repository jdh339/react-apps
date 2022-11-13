import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator />
    <footer className='footer'>
      <a target='_blank' rel='noreferrer' href='https://icons8.com/icon/9M06nT4c-UY4/calculator'>Calculator</a>
      <span> icon by </span>
      <a target='_blank' rel='noreferrer' href='https://icons8.com'>Icons8</a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
