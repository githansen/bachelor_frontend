//React library
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
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
//Adminpanel
import DashFirstPage from '@/dashboard/pages/Dashboard.jsx';
import Login from '@/dashboard/pages/Login.jsx';
import TextPage from '@/dashboard/pages/texts/TextPage.jsx';
import TextSinglePage from '@/dashboard/pages/texts/TextSinglePage';
import TextSingleView from '@/dashboard/pages/texts/TextSingleView';
import TargetsPage from '@/dashboard/pages/targets/TargetPage';
import NewTargetPage from '@/dashboard/pages/targets/NewTarget';
import EditTargetPage from '@/dashboard/pages/targets/EditTarget';
import SettingsPage from '@/dashboard/pages/settings/Settings';
import ContributionPage from '@/dashboard/pages/contributions/ContributionPage';
import TagCategoriesPage from '@/dashboard/pages/tags/TagCategoriesPage';
import TagSingleCategoryPage from '@/dashboard/pages/tags/TagSingleCategoryPage';
import TagSinglePage from '@/dashboard/pages/tags/TagSinglePage';

function Page({ title, children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        document.title = `${title} - GiDinStemme`;
    }, [title]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Toaster />
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
    {
        path: '/gdsadmin/dashboard',
        element: (
            <Page title="Dashboard">
                <DashFirstPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/',
        element: (
            <Page title="Logg inn">
                <Login />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/text',
        element: (
            <Page title="Tekster">
                <TextPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/target',
        element: (
            <Page title="Målgrupper">
                <TargetsPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/settings',
        element: (
            <Page title="Innstillinger">
                <SettingsPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/contributions',
        element: (
            <Page title="Bidrag">
                <ContributionPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/text/new',
        element: (
            <Page title="Legg til ny tekst">
                <TextSinglePage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/text/edit',
        element: (
            <Page title="Rediger tekst">
                <TextSinglePage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/text/view',
        element: (
            <Page title="Se tekst">
                <TextSingleView />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/target/new',
        element: (
            <Page title="Legg til ny målgruppe">
                <NewTargetPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/target/edit',
        element: (
            <Page title="Rediger målgruppe">
                <EditTargetPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags',
        element: (
            <Page title="Brukertags">
                <TagCategoriesPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/age',
        element: (
            <Page title="Alder - Tag">
                <TagSingleCategoryPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/gender',
        element: (
            <Page title="Kjønn - Tag">
                <TagSingleCategoryPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/language',
        element: (
            <Page title="Morsmål - Tag">
                <TagSingleCategoryPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/dialect',
        element: (
            <Page title="Dialekt - Tag">
                <TagSingleCategoryPage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/age/tag',
        element: (
            <Page title="Aldersgruppe merkelapp">
                <TagSinglePage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/gender/tag',
        element: (
            <Page title="Kjønn merkelapp">
                <TagSinglePage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/language/tag',
        element: (
            <Page title="Morsmål merkelapp">
                <TagSinglePage />
            </Page>
        ),
    },
    {
        path: '/gdsadmin/tags/dialect/tag',
        element: (
            <Page title="Dialekt merkelapp">
                <TagSinglePage />
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
