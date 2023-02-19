//React library
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    useLocation,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
//Stylesheet
import '@/styles/index.css';
// Pages
import Page404 from '@/pages/statusCodes/FourOFour';
import Page500 from '@/pages/statusCodes/FiveHundred';
import PageHome from '@/pages/Home';
import PageUserForm from '@/pages/UserForm';
import PageStartOverQuestion from '@/pages/StartOverQuestion';
import PageReader from '@/pages/Reader/Reader';
import PageThanks from '@/pages/Reader/Thanks';
import PagePrivacy from '@/pages/additional/Privacy';
import PageAboutUs from '@/pages/additional/AboutUs';
import PageDeleteRecording from '@/pages/additional/DeleteRecording';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Page({ title, children }) {
    return (
        <>
            <ScrollToTop />
            <Toaster />
            <Helmet>
                <title>{title} - GiDinStemme</title>
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
        path: '/velkommen-tilbake',
        element: (
            <Page title="Velkommen tilbake!">
                <PageStartOverQuestion />
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
                <PagePrivacy />
            </Page>
        ),
    },
    {
        path: '/om-oss',
        element: (
            <Page title="Om Oss">
                <PageAboutUs />
            </Page>
        ),
    },
    {
        path: '/slett',
        element: (
            <Page title="Slett bidrag">
                <PageDeleteRecording />
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
