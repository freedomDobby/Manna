// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { RecoilRoot } from 'recoil';
const container =document.getElementById('root');
if(!container) throw new Error('Failed to find the root element');
const root=ReactDOM.createRoot(container);
const queryClient =new QueryClient();


root.render(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      <App />
      </RecoilRoot>
   </QueryClientProvider>
    </BrowserRouter>

);
 