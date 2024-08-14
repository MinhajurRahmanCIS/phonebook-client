import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import UpdateContact from './components/UpdateContact';
import Main from './components/Main';
import AuthContext from './context/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import Default from './components/Default';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Default></Default>
      },
      {
        path: '/home',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/contacts',
        element: <PrivateRoute><Contacts></Contacts></PrivateRoute>
      },
      {
        path: '/updatecontact/:id',
        element: <UpdateContact></UpdateContact>,
        loader: ({ params }) => fetch(`http://localhost:5000/contacts/${params.id}`)
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
