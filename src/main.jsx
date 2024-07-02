import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { HelmetProvider } from 'react-helmet-async';


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster></Toaster>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
