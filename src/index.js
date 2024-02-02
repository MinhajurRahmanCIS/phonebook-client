import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import UpdateContact from './components/UpdateContact';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/contacts',
        element: <Contacts></Contacts>,
        loader: () => fetch('http://localhost:5000/contacts')
      },
      {
        path: '/updatecontact/:id',
        element: <UpdateContact></UpdateContact>,
        loader: ({params}) => fetch(`http://localhost:5000/contacts/${params.id}`)
      },
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
