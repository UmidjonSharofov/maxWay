import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
       <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
