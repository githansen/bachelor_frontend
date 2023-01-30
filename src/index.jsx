import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import FourOFour from './pages/statusCodes/FourOFour';
import PageHome from './pages/Home';
import PageUserForm from './pages/UserForm';
import PageReader from './pages/Reader';
import PageThanks from './pages/Thanks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />,
    errorElement: FourOFour,
  }, 
  {
    path: '/intro',
    element: <PageUserForm />
  },
  {
    path: '/les',
    element: <PageReader />
  },
  {
    path: '/takk',
    element: <PageThanks />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
