import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from "@vercel/analytics/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import App from './App';

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>    
    <QueryClientProvider client={client}>      
        <App />
        <Analytics/>
        <ReactQueryDevtools initialIsOpen={false} />     
    </QueryClientProvider>
  </React.StrictMode>
);
