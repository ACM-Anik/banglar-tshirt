import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import MainLayout from './components/Layout/MainLayout';
import Grandpa from './familyComponents/Grandpa/Grandpa';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tShirts.json')
      },
      {
        path:'review',
        element: <OrderReview/>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
