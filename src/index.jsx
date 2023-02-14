import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { useEffect } from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    useLocation,
} from 'react-router-dom';
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
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = `GiDinStemme - ${title}`;
    }, [title]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <>{children}</>;
}

const router = createBrowserRouter([
    // Main pages
    {
        path: '/',
        element: (
            <Page title="Hjem">
                <PageHome />
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
                <Page404 />
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
