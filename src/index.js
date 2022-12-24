import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function colorch(){
  console.log("color changed");
  document.getElementById("root").style.color="red";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Welcome to HOME page</h1>
    <App />
    <button onClick={colorch}>Click Here</button>
  </div>
);
