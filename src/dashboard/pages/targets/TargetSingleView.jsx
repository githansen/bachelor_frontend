//React library
import { NavLink } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
import { ContributionTable } from '../../components/table/ContributionTable';
import '@/styles/tableStyle.css';
//Icons
import {
    ChevronRightIcon,
    UserGroupIcon,
    UserIcon,
    FaceSmileIcon,
    FlagIcon,
    StarIcon,
    ArrowLeftIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline';

export default function TargetSingleView() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        {
            accessor: 'audio_file',
            label: 'Lydfil',
            format: (value) => '',
            type: 'audio',
        },
        { accessor: 'text', label: 'Tekst' },
        { accessor: 'keyword', label: 'Nøkkelord' },
        { accessor: 'contribution_date', label: 'Innlest dato' },
        {
            accessor: 'is_deleted',
            label: 'Last ned',
            format: (value) => (value ? 'Slettet' : 'Last ned'),
            type: 'action',
        },
    ];

    const rows = [
        {
            id: 1,
            text: 'Textittel',
            keyword: 'Hashish',
            is_deleted: true,
            contribution_date: '20. Februar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 2,
            text: 'Textittel',
            keyword: 'Kæbe',
            is_deleted: true,
            contribution_date: '22. Januar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 3,
            text: 'Random tittel',
            keyword: 'Mæbe',
            is_deleted: false,
            contribution_date: '15. Desember 2022',
        },
    ];

    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="flex justify-between items-center mb-10">
                    <div className="items-end">
                        <nav className="flex text-xlp" ariaLabel="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center text-bolge hover:opacity-60 transition duration-200">
                                    <NavLink
                                        to="/gdsadmin/target"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <ArrowLeftIcon className="h-5 w-5 mr-1" />
                                        Tilbake
                                    </NavLink>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="flex gap-5 items-center">
                        <div className=" inline-flex gap-1 justify-center place-items-center text-bolge">
                            <CheckBadgeIcon className="h-8 w-8" />
                            <p className="text-xlp font-feteste">Publisert</p>
                        </div>
                        <button className="text-center text-xlknappliten font-fet border-2 border-skumring bg-skumring text-fred hover:bg-rose hover:border-rose transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                            Fjern publisering
                        </button>
                    </div>
                    {/* Bruk denne når tekst ikke er publisert: <div className="flex gap-5 items-center">
            <div className=" inline-flex gap-1 justify-center place-items-center text-rose">
                <XCircleIcon className="h-8 w-8" />
                <p className="text-xlp font-feteste">
                    Ikke publisert
                </p>
            </div>
            <button className="text-center text-xlknappliten font-fet border-2 border-skumring bg-skumring text-fred hover:bg-bolge hover:border-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                Publiser på nytt
            </button>
        </div> */}
                </div>

                <div className="mb-12 shadow-sm rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 p-8">
                    <div>
                        <m.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 1, opacity: 0.7 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="inline-flex items-center px-5 mb-3 opacity-70"
                        >
                            <UserGroupIcon className="h-5 w-5 mr-2 text-fred" />
                            <p className="text-smp text-fred leading-none	">
                                Målgruppe
                            </p>
                        </m.div>
                        <m.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                delay: 0.1,
                            }}
                            className="pb-4 px-5 text-xlh2 font-feteste leading-10 text-fred"
                        >
                            Europa18
                        </m.h2>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                delay: 0.1,
                            }}
                            className="px-5 py-1 grid items-center text-fred opacity-60"
                        >
                            <p className="text-xsliten">
                                Sist endret: 22.12.2022
                            </p>
                        </m.div>
                    </div>
                    <div className="grid grid-cols-4 justify-items-center content-center gap-5">
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                delay: 0.1,
                            }}
                            className="p-5 w-full"
                        >
                            <div className="grid items-center">
                                <UserIcon className="h-8 w-8 mr-2 text-fred" />
                                <h4 className="text-xlp text-fred font-fet">
                                    Aldersgrupper
                                </h4>
                            </div>
                            <ul className="text-fred max-h-24 overflow-auto scrollbar-hide">
                                <li>
                                    <p className="text-smp">18 - 29 år</p>
                                </li>
                                <li>
                                    <p className="text-smp">30 - 39 år</p>
                                </li>
                                <li>
                                    <p className="text-smp">40 - 49 år</p>
                                </li>
                                <li>
                                    <p className="text-smp">50 - 59 år</p>
                                </li>
                            </ul>
                        </m.div>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                delay: 0.15,
                            }}
                            className="p-5 w-full"
                        >
                            <div className="grid items-center">
                                <FaceSmileIcon className="h-8 w-8 mr-2 text-fred" />
                                <h4 className="text-xlp text-fred font-fet">
                                    Kjønn
                                </h4>
                            </div>
                            <ul className="text-fred max-h-24 overflow-auto scrollbar-hide">
                                <li>
                                    <p className="text-smp">Mann</p>
                                </li>
                            </ul>
                        </m.div>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                delay: 0.2,
                            }}
                            className="p-5 w-full"
                        >
                            <div className="grid items-center">
                                <FlagIcon className="h-8 w-8 mr-2 text-fred" />
                                <h4 className="text-xlp text-fred font-fet">
                                    Morsmål
                                </h4>
                            </div>
                            <ul className="text-fred max-h-24 overflow-auto scrollbar-hide">
                                <li>
                                    <p className="text-smp">Norsk</p>
                                </li>
                                <li>
                                    <p className="text-smp">Punjabi</p>
                                </li>
                            </ul>
                        </m.div>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                                delay: 0.25,
                            }}
                            className="p-5 w-full"
                        >
                            <div className="grid items-center">
                                <StarIcon className="h-8 w-8 mr-2 text-fred" />
                                <h4 className="text-xlp text-fred font-fet">
                                    Dialekt
                                </h4>
                            </div>
                            <ul className="text-fred max-h-24 overflow-auto scrollbar-hide">
                                <li>
                                    <p className="text-smp">Østlandsk</p>
                                </li>
                            </ul>
                        </m.div>
                    </div>
                </div>
                <div>
                    <ContributionTable
                        rows={rows}
                        columns={columns}
                        tableId="ContributionPage"
                    />
                </div>
            </div>
        </div>
    );
}
