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
    DocumentIcon,
    ArrowLeftIcon,
    CheckBadgeIcon,
} from '@heroicons/react/24/outline';

export default function TextSingleView() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        {
            accessor: 'audio_file',
            label: 'Lydfil',
            format: (value) => '',
            type: 'audio',
        },
        { accessor: 'target', label: 'Målgruppe' },
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
            target: 'NordmennU40',
            is_deleted: true,
            contribution_date: '20. Februar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 2,
            target: 'AfrikaO60',
            is_deleted: true,
            contribution_date: '22. Januar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 3,
            target: 'Ingen',
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
                                        to="/gdsadmin/text"
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
                            <DocumentIcon className="h-5 w-5 mr-2 text-fred" />
                            <p className="text-smp text-fred leading-none	">
                                Tekst
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
                            className="px-5 text-xlh2 font-feteste leading-10 text-fred"
                        >
                            Random tittel
                        </m.h2>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center content-center">
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
                            <div className="grid items-center text-fred opacity-60">
                                <p className="text-xlp mb-5">
                                    <b>Nøkkelord:</b> Hashish, Kæbe, Mæbe
                                </p>
                                <div className="max-h-[15rem] overflow-auto scrollbar-hide">
                                    <p className="text-smp ">
                                        In bibendum lacus at efficitur congue.
                                        Integer convallis vehicula dignissim.
                                        Pellentesque sodales vitae felis eu
                                        rhoncus. Pellentesque imperdiet sem
                                        risus, nec lacinia elit lacinia non. Sed
                                        mattis efficitur bibendum. Aenean neque
                                        diam, faucibus sed sodales vitae,
                                        finibus eget leo. Praesent fringilla in
                                        tellus ut facilisis. Integer et velit
                                        posuere, venenatis sapien sit amet,
                                        ornare diam. Praesent lacinia porttitor
                                        lectus quis tristique. Aenean
                                        condimentum neque at massa feugiat
                                        euismod. Nunc condimentum libero nunc,
                                        et sagittis arcu ultricies vel.
                                        Vestibulum faucibus quam lacus. Vivamus
                                        sit amet dolor a urna convallis
                                        tincidunt id ut libero. Curabitur
                                        tincidunt, enim eget rutrum consectetur,
                                        est felis iaculis massa, a egestas dui
                                        sem non est. Phasellus mauris ante,
                                        consequat non convallis sit amet,
                                        venenatis sed turpis. Duis accumsan
                                        purus urna, ut pellentesque mi consequat
                                        a. Quisque tempus nisi a augue ultricies
                                        commodo. Ut varius justo sit amet luctus
                                        bibendum. Maecenas gravida vel lorem in
                                        laoreet. Suspendisse id lectus quam.
                                        Pellentesque consectetur risus nec
                                        egestas gravida. Nulla ornare dapibus
                                        metus vel posuere. Maecenas placerat
                                        risus ac nibh tincidunt viverra. Proin
                                        feugiat mi nunc, eu viverra tellus
                                        ullamcorper a. Fusce aliquam, augue in
                                        egestas hendrerit, ante augue consequat
                                        dui, sit amet accumsan mi lectus a
                                        risus. Aenean nisl justo, porttitor sed
                                        orci ut, ornare varius lorem.Phasellus
                                        pharetra ultricies nisl eu hendrerit.
                                        Quisque vestibulum viverra quam, id
                                        laoreet tellus ullamcorper eu. Praesent
                                        consequat mi finibus justo sollicitudin
                                        tempus. Cras ut hendrerit orci, quis
                                        pulvinar libero. Sed porttitor, purus
                                        dignissim tempus sagittis, dolor velit
                                        rutrum sapien, non ultricies neque leo
                                        et odio. Fusce posuere lobortis dictum.
                                        Suspendisse ut ligula at ex ultricies
                                        tristique. Pellentesque et euismod
                                        justo.
                                    </p>
                                </div>
                                <p className="text-xsliten mt-5">
                                    Sist endret: 22.12.2022
                                </p>
                            </div>
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
