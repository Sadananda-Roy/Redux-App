import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reduxStore from "./Redux/Store" 
import './index.css';
import ThemeWrapper from './ThemeWrapper';

const App = () => {
  
  root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
          <ThemeWrapper />
        </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
