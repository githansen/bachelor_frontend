//React
import React, { useEffect, useState } from 'react';
//React library
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
//Icons
import {
    ArrowUpCircleIcon,
    ChevronRightIcon,
    TagIcon,
    UserIcon,
    FaceSmileIcon,
    FlagIcon,
    StarIcon,
} from '@heroicons/react/24/outline';

export default function TagSinglePage() {
    //Navigation
    const navigate = useNavigate();
    //Location - used to determine if the user is creating a new tag or editing an existing one
    const location = useLocation();
    const actionType = location.state.action;
    const categoryType = location.state.categoryType;
    //State - used to determine the data of the page
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const [titlePrefix, setTitlePrefix] = useState('');
    const [submitBtnText, setSubmitBtnText] = useState('');
    const [breadcrumbText, setBreadcrumbText] = useState('');

    useEffect(() => {
        if (actionType && categoryType) {
            if (categoryType === 'age') {
                setTitle('aldersgruppe');
                setIcon(<UserIcon className="h-4 w-4 mr-1" />);
            } else if (categoryType === 'gender') {
                setTitle('kjønn');
                setIcon(<FaceSmileIcon className="h-4 w-4 mr-1" />);
            } else if (categoryType === 'language') {
                setTitle('morsmål');
                setIcon(<FlagIcon className="h-4 w-4 mr-1" />);
            } else if (categoryType === 'dialect') {
                setTitle('dialekt');
                setIcon(<StarIcon className="h-4 w-4 mr-1" />);
            }

            if (actionType === 'new') {
                if (categoryType === 'gender' || categoryType === 'language') {
                    setTitlePrefix('Nytt');
                    setBreadcrumbText('Legg til nytt');
                } else {
                    setTitlePrefix('Ny');
                    setBreadcrumbText('Legg til ny');
                }
                setSubmitBtnText('Legg til');
            } else if (actionType === 'edit') {
                setTitlePrefix('Rediger');
                setSubmitBtnText('Oppdater');
                setBreadcrumbText('Rediger');
            }
        } else {
            navigate(`/gdsadmin/tags`);
        }
    }, [actionType]);
    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="flex justify-between mb-5 items-center">
                    <div className="mb-5 w-full">
                        <nav
                            className="flex mb-6 text-xlp"
                            aria-label="Breadcrumb"
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
                                <li className="inline-flex items-center text-bolge hover:opacity-60 transition duration-200">
                                    <NavLink
                                        to={`/gdsadmin/tags/${categoryType}`}
                                        state={categoryType}
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <ChevronRightIcon className="h-5 w-5 mr-1" />
                                        {icon}
                                        {title.charAt(0).toUpperCase() +
                                            title.slice(1)}
                                    </NavLink>
                                </li>
                                <li aria-current="page" className="text-bolge">
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 mr-1" />
                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                            {breadcrumbText} {title}
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <m.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className="text-xlh2 font-feteste leading-10 mb-3"
                        >
                            {titlePrefix} {title}
                        </m.h2>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-2">
                        <input
                            className="bg-fred shadow w-full p-5 rounded-lg mb-8 text-xlh5 font-fet text-bolge"
                            placeholder={`Skriv inn ${title.toLowerCase()}...`}
                        ></input>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-fred w-full p-10 rounded-lg shadow mb-5">
                            <h6 className="text-xlh6 font-fet mb-2">
                                {submitBtnText} {title.toLowerCase()}
                            </h6>
                            <div className="grid grid-cols-3 gap-5">
                                <button className="col-span-2 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                                    <ArrowUpCircleIcon className="h-6 w-6" />
                                    {submitBtnText}
                                </button>
                                <NavLink
                                    to={`/gdsadmin/tags/${categoryType}`}
                                    state={categoryType}
                                    className="col-span-1 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-metall bg-none text-metall hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center"
                                >
                                    Avbryt
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
