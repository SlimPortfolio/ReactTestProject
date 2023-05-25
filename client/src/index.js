import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { Provider} from 'react-redux';
import App from './App';
import store, { Persistor } from "./redux/store";
import reportWebVitals from './reportWebVitals';
import {PersistGate} from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      {/* wrap the app component in persistgate */}
      <PersistGate Loading={null} persistor={Persistor}>
        <App />
      </PersistGate>  
    </Provider>
  </StrictMode>
);

// ReactDOM.render(
//   // <Provider store={store}>
//     <App />,
//   // </Provider>,
//   document.getElementById('root')
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
