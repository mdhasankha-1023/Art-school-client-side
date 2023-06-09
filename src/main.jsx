import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </QueryClientProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
)
