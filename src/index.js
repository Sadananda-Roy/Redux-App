import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reduxStore from "./Redux/Store.js" 
import './index.css';
import ThemeWrapper from './ThemeWrapper.jsx';

const App = () => {
  return (
  // root.render(
    // <React>
        <Provider store={reduxStore}>
          <ThemeWrapper />
        </Provider>
    // </React>
  // );
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
//   <React>
//     <App />
//   </React>,
//   document.getElementById('root')
// );
