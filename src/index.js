// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { App } from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import './styles/modern-normalize.css';
import './index.css';
import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/x-and-o"> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);