import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './components/stores/RegistrationSlice';
import contactReducer from './components/stores/ContactSlice';
import faqReducer from './components/stores/FaqSlice'


const store = configureStore({
  reducer: {
    registration: registrationReducer,
    contact: contactReducer,
    faq: faqReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
