import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
const container =document.getElementById('root');
if(!container) throw new Error('Failed to find the root element');
const root=ReactDOM.createRoot(container);
const queryClient =new QueryClient();

const store= configureStore({reducer:rootReducer}); 

root.render(
    <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterMoment}>
    <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
    </Provider>
   </QueryClientProvider>
    </LocalizationProvider>
    </BrowserRouter>

);
 