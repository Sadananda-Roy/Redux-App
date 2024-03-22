import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Assets/Router/My-app-router'; 
import { Provider } from 'react-redux';
import reduxStore from "../src/Redux/Store" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
