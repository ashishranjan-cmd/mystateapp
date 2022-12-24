import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function hi(){
  console.log("hello")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <button onClick={hi}>Click Here</button>
  </div>
);
