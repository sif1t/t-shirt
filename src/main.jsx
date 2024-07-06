import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import OrderReview from './OrderReview/OrderReview.jsx';
import Grandpa from './components/Grandpa/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
       {
         path: "/",
         element: <Home></Home>,
         loader: () => fetch ('tshirts.json'),
       },
       {
         path: "review",
         element:<OrderReview></OrderReview>
       },
       {
         path: "/grandpa",
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
