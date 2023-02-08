import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// Pages
import Page404 from './pages/statusCodes/FourOFour';
import Page500 from './pages/statusCodes/FiveHundred';
import PageHome from './pages/Home';
import Overskrifter from './pages/Overskrifter';
import PageUserForm from './pages/UserForm';
import PageReader from './pages/Reader/Reader';
import PageThanks from './pages/Thanks';
import Personvern from './pages/additional/Personvern';
import HvaEr from './pages/additional/HvaEr';
import Slett from './pages/additional/Slett';

function Page({ title, children }) {
    return (
        <>
            <Helmet>
                <title>GiDinStemme - {title}</title>
            </Helmet>
            {children}
        </>
    );
}

const router = createBrowserRouter([
    // Main pages
    {
        path: '/',
        element: (
            <Page title="Hjem">
                <Overskrifter />
            </Page>
        ),
    },
    {
        path: '/intro',
        element: (
            <Page title="Spørreskjema">
                <PageUserForm />
            </Page>
        ),
    },
    {
        path: '/les',
        element: (
            <Page title="Innspilling">
                <PageReader />
            </Page>
        ),
    },
    {
        path: '/takk',
        element: (
            <Page title="Takk for ditt bidrag">
                <PageThanks />
            </Page>
        ),
    },
    {
        path: '/personvern',
        element: (
            <Page title="Personvern">
                <Personvern />
            </Page>
        ),
    },
    {
        path: '/om-oss',
        element: (
            <Page title="Om Oss">
                <HvaEr />
            </Page>
        ),
    },
    {
        path: '/slett',
        element: (
            <Page title="Slett bidrag">
                <Slett />
            </Page>
        ),
    },
    // Error pages
    {
        path: '*',
        element: (
            <Page title="404">
                <Page500 />
            </Page>
        ),
    },
    {
        path: '/500',
        element: (
            <Page title="500">
                <Page500 />
            </Page>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
