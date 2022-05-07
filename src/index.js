import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from "./redux/store"
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store} >
      <BrowserRouter>
       <App /> 
      </BrowserRouter>
        
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

