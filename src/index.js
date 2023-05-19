import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {QueryClientProvider, QueryClient } from 'react-query';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import LayOut from './pages/layOut';
import HomeBody from './pages/homeBody';
import {Classes,ClassDetail} from './pages/classes';
import {Clients,ClientDetail}from './pages/clients';
import ErrorPage from './pages/404/ErrorPage'




if(process.env.NODE_ENV ===  'production') disableReactDevTools()


const router = createBrowserRouter([
  {
    path:'/',
    element:<LayOut/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<HomeBody/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'clients',
        element:<Clients/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'classes',
        element:<Classes/>,
        errorElement:<ErrorPage/>,
      }
    ]
  }
  ,
  {
    path:'/clientsDetail/:clientId',
    element:<ClientDetail/>,
    errorElement:<ErrorPage/>,
  },
  {
    path:'/classesDetail/:classId',
    element:<ClassDetail/>,
    errorElement:<ErrorPage/>
  }
])

const query = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
