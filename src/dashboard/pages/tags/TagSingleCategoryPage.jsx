//React
import React, { useEffect, useState } from 'react';
//React library
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
import { StandardTable } from '../../components/table/StandardTable';
import '@/styles/tableStyle.css';
//Icons
import {
    ChevronRightIcon,
    PlusIcon,
    TagIcon,
    UserIcon,
    FaceSmileIcon,
    FlagIcon,
    StarIcon,
} from '@heroicons/react/24/outline';

export default function TagSingleCategoryPage() {
    //Navigation
    const navigate = useNavigate();
    //Location - used to determine if the user is creating a new tag or editing an existing one
    const location = useLocation();
    const categoryType = location.state.categoryType;
    //State - used to determine the data of the page
    const [urlVariable, setUrlVariable] = useState('');
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        if (categoryType === 'age') {
            setUrlVariable('age');
            setTitle('Aldersgrupper');
            setIcon(<UserIcon className="w-12" />);
        } else if (categoryType === 'gender') {
            setUrlVariable('gender');
            setTitle('Kjønn');
            setIcon(<FaceSmileIcon className="w-12" />);
        } else if (categoryType === 'language') {
            setUrlVariable('language');
            setTitle('Morsmål');
            setIcon(<FlagIcon className="w-12" />);
        } else if (categoryType === 'dialect') {
            setUrlVariable('dialect');
            setTitle('Dialekter');
            setIcon(<StarIcon className="w-12" />);
        } else {
            navigate('/gdsadmin/tags');
        }
    }, [categoryType]);

    const columns = [
        { accessor: 'id', label: 'ID' },
        {
            accessor: 'agegroup',
            label: 'Aldersgruppe',
            format: (value) => value + ' år',
            type: 'customPrefixOrSuffix',
        },
        { accessor: 'last_changed_date', label: 'Sist endret dato' },
        { accessor: 'added_date', label: 'Lagt til' },
        {
            accessor: 'is_changeable',
            label: 'Handling',
            format: (value) => (value ? '' : 'Ingen tilgang'),
            type: 'action',
            action: 'editAndDeleteNoView',
            editLink: 'tag',
            deleteLink: 'delete',
            categoryType: categoryType,
        },
    ];

    const rows = [
        {
            id: 1,
            agegroup: '18 - 29',
            last_changed_date: '14. April 2022',
            added_date: '10. Februar 2022',
            is_changeable: true,
        },
        {
            id: 2,
            agegroup: '30 - 39',
            last_changed_date: '23. Juni 2022',
            added_date: '05. Mars 2022',
            is_changeable: true,
        },
        {
            id: 3,
            agegroup: '40 - 49',
            last_changed_date: '06. Desember 2022',
            added_date: '21. April 2022',
            is_changeable: false,
        },
    ];

    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="flex justify-between mb-5 items-center">
                    <div className="mb-5 w-full">
                        <nav
                            className="flex mb-6 text-xlp"
                            ariaLabel="Breadcrumb"
                        >
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center text-bolge hover:opacity-60 transition duration-200">
                                    <NavLink
                                        to="/gdsadmin/tags"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <TagIcon className="h-4 w-4 mr-1" />
                                        Merkelapp kategorier
                                    </NavLink>
                                </li>
                                <li ariaCurrent="page" className="text-bolge">
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 mr-1" />
                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                            {title}
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <div className="inline-flex gap-3">
                            <m.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                            >
                                {icon}
                            </m.span>
                            <m.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeOut',
                                }}
                                className="text-xlh2 font-feteste leading-10 mb-3"
                            >
                                {title}
                            </m.h2>
                        </div>
                        <m.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className="text-xlp mt-2"
                        >
                            Liste over alle {title.toLowerCase()}
                        </m.p>
                    </div>

                    <div className="inline-flex text-right place-content-end items-center w-full mb-5 gap-5">
                        <p>24 {title.toLocaleLowerCase()}</p>
                        <NavLink
                            to={`/gdsadmin/tags/${urlVariable}/tag`}
                            state={{
                                action: 'new',
                                categoryType: categoryType,
                            }}
                        >
                            <div className="text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center">
                                <PlusIcon className="h-6 w-6" />
                                Legg til ny
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <StandardTable
                        rows={rows}
                        columns={columns}
                        tableId="StandardTable"
                    />
                </div>
            </div>
        </div>
    );
}
