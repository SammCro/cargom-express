import React from 'react';
import ReactDOM from 'react-dom/client';
import './style_sheets/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context';
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <App/> 
      <ToastContainer />
    </UserProvider>
  </BrowserRouter>
);


