import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Pages
import Page404 from './pages/statusCodes/FourOFour';
import Page500 from './pages/statusCodes/FiveHundred';
import PageHome from './pages/Home';
import PageUserForm from './pages/UserForm';
import PageReader from './pages/Reader';
import PageThanks from './pages/Thanks';
import Personvern from './pages/Personvern';

const router = createBrowserRouter([
    // Main pages
    {
        path: '/',
        element: <PageHome />,
    },
    {
        path: '/intro',
        element: <PageUserForm />,
    },
    {
        path: '/les',
        element: <PageReader />,
    },
    {
        path: '/takk',
        element: <PageThanks />,
    },
    {
        path: '/personvern',
        element: <Personvern />,
    },
    // Error pages
    {
        path: '*',
        element: <Page404 />,
    },
    {
        path: '/500',
        element: <Page500 />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
