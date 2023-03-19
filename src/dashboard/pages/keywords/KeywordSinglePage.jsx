//React
import React, { useEffect, useRef, useState } from 'react';
//React library
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
//Icons
import { HashtagIcon } from '@heroicons/react/24/solid';
import {
    ChevronRightIcon,
    ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';

export default function KeywordSinglePage() {
    //Navigation
    const navigate = useNavigate();
    //Location - used to determine if the user is creating a new tag or editing an existing one
    const location = useLocation();
    const actionType = location.state.action;
    const [title, setTitle] = useState('');
    const [submitBtnKeyword, setSubmitBtnKeyword] = useState('');

    useEffect(() => {
        if (actionType) {
            if (actionType === 'new') {
                setTitle('Legg til nytt nøkkelord');
                setSubmitBtnKeyword('Legg til');
            } else if (actionType === 'edit') {
                setTitle('Rediger nøkkelord:');
                setSubmitBtnKeyword('Oppdater');
            }
        } else {
            navigate(`/gdsadmin/keyword`);
        }
    }, [actionType, navigate]);

    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="flex justify-between mb-5 items-center">
                    <div className="mb-5 items-end">
                        <m.nav
                            initial={{ y: '-10px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className="flex mb-6 text-xlp"
                            ariaLabel="Breadcrumb"
                        >
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center text-bolge hover:opacity-60 transition duration-200">
                                    <NavLink
                                        to="/gdsadmin/keyword"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <HashtagIcon className="h-4 w-4 mr-1" />
                                        Nøkkelord
                                    </NavLink>
                                </li>
                                <li ariaCurrent="page" className="text-bolge">
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 mr-1" />
                                        {actionType === 'edit' ? '' : title}
                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                            {actionType === 'edit'
                                                ? 'Keef'
                                                : ''}
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </m.nav>
                        <m.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className={`text-xlh2 ${
                                actionType === 'edit'
                                    ? 'font-normal'
                                    : 'font-fet'
                            } leading-10 mb-3`}
                        >
                            {title}{' '}
                            <span className="font-feteste">
                                {actionType === 'edit' ? 'Keef' : ''}
                            </span>
                        </m.h2>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-2">
                        <m.input
                            initial={{ y: '20px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="bg-fred shadow w-full p-5 rounded-lg mb-8 text-xlh5 font-fet text-bolge"
                            placeholder="Skriv inn ditt nøkkelord her..."
                            defaultValue={`${
                                actionType === 'edit' ? 'Keef' : ''
                            }`}
                        />
                    </div>
                    <div className="col-span-1">
                        <m.div
                            initial={{ y: '20px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="bg-fred w-full p-10 rounded-lg shadow mb-5"
                        >
                            {actionType === 'edit' && (
                                <ul className="text-xlp">
                                    <li>
                                        <p className="text-xlp text-stein">
                                            ID: 5 | Publisert: 23.02.2022
                                        </p>
                                    </li>
                                </ul>
                            )}
                            <h6 className="text-xlh6 font-fet mb-2">
                                {submitBtnKeyword} nøkkelord
                            </h6>

                            <select
                                defaultValue="draft"
                                className="mt-4 rounded border-2 border-bolge text-bolge w-full"
                            >
                                <option value="draft">Kladd</option>
                                <option value="published">Publisert</option>
                                <option value="notPublished">
                                    Ikke publisert
                                </option>
                            </select>

                            <div className="grid grid-cols-3 gap-5">
                                <button className="col-span-2 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                                    <ArrowUpCircleIcon className="h-6 w-6" />
                                    {submitBtnKeyword}
                                </button>
                                <NavLink
                                    to="/gdsadmin/keyword"
                                    className="col-span-1 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-metall bg-none text-metall hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center"
                                >
                                    Avbryt
                                </NavLink>
                            </div>
                        </m.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
