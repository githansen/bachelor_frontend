//React
import React, { useEffect, useRef, useState } from 'react';
//React library
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
//Icons
import { DocumentIcon } from '@heroicons/react/24/solid';
import {
    ChevronRightIcon,
    ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';

export default function TextSinglePage() {
    //Navigation
    const navigate = useNavigate();
    //Location - used to determine if the user is creating a new tag or editing an existing one
    const location = useLocation();
    const actionType = location.state.action;
    const [title, setTitle] = useState('');
    const [submitBtnText, setSubmitBtnText] = useState('');

    useEffect(() => {
        if (actionType) {
            if (actionType === 'new') {
                setTitle('Legg til ny tekst');
                setSubmitBtnText('Legg til');
            } else if (actionType === 'edit') {
                setTitle('Rediger tekst:');
                setSubmitBtnText('Oppdater');
            }
        } else {
            navigate(`/gdsadmin/text`);
        }
    }, [actionType, navigate]);

    //
    const [wordCount, setWordCount] = useState(0);
    const [textTime, setTextTime] = useState(0);

    const handleTextChange = (e) => {
        const text = e.target.value;
        const words = text.split(' ').length;
        const time = Math.round(words / 200);
        setWordCount(words - 1);
        setTextTime(time);
    };

    const selectStyle = {
        control: (base, state) => {
            let border = '2px solid #f2f2f2';

            if (state.isSelected) {
                border = '2px solid #0089D5';
            }
            if (state.isFocused) {
                border = '2px solid #0089D5';
            }

            return {
                ...base,
                border,
                boxShadow: 'none',
                '&:hover': {
                    border: '2px solid #0089D5',
                },
            };
        },
        control: (styles, state) => ({
            ...styles,
            boxShadow: 'none',
            background: state.hasValue ? '#D3EFFF' : '#FFFFFF',
            border: '2px solid #0089D5',
            outline: '0',
            color: state.hasValue ? '#FFFFFF' : '#000000',
            '&:hover': {
                cursor: 'pointer',
            },
        }),
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: '#0089D5',
            };
        },
        multiValueLabel: (styles, { data }) => ({
            ...styles,
            color: '#ffffff',
        }),
        menuList: (provided) => ({
            ...provided,
            paddingTop: 0,
            paddingBottom: 0,
            boxShadow: 'none',
            border: '1.5px solid #0089D5',
            borderRadius: '5px',
        }),
        multiValueRemove: (styles, { data }) => ({
            ...styles,
            color: '#00C9FF',
            ':hover': {
                backgroundColor: '#00C9FF',
                color: 'white',
            },
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: '#ffffff',
        }),
        indicatorSeparator: (base) => {
            return {
                ...base,
                display: 'none',
            };
        },
    };

    const Option = (props) => {
        const {
            children,
            className = '',
            cx,
            isDisabled,
            isFocused,
            isSelected,
            innerProps,
        } = props;
        return (
            <div
                className={cx(
                    {
                        option: true,
                        'option--is-disabled': isDisabled,
                        'option--is-focused': isFocused,
                        'option--is-selected': isSelected,
                    },
                    `${className} dasboardSelectOptionsStyle SelectOptionsStyle`
                )}
                {...innerProps}
            >
                {children}
            </div>
        );
    };
    const NoOptionsMessage = (props) => {
        return (
            <components.NoOptionsMessage {...props}>
                <span>Ingen resultat...</span>
            </components.NoOptionsMessage>
        );
    };

    const targetOptions = [
        { value: '1', label: 'NordmennU40' },
        { value: '2', label: 'AfrikaO60' },
        { value: '3', label: 'Europa18' },
        { value: '4', label: 'Amerika20' },
        { value: '5', label: 'Danmark18' },
    ];
    const keywordOptions = [
        { value: '1', label: 'Baosj' },
        { value: '2', label: 'Gætter' },
        { value: '3', label: 'Keef' },
        { value: '4', label: 'Hashish' },
        { value: '5', label: 'Kæbe' },
    ];
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
                                        to="/gdsadmin/text"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <DocumentIcon className="h-4 w-4 mr-1" />
                                        Tekster
                                    </NavLink>
                                </li>
                                <li ariaCurrent="page" className="text-bolge">
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 mr-1" />
                                        {actionType === 'edit' ? '' : title}
                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                            {actionType === 'edit'
                                                ? 'Random tittel'
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
                                {actionType === 'edit' ? 'Random tittel' : ''}
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
                            placeholder="Skriv inn en overskrift..."
                            defaultValue={`${
                                actionType === 'edit' ? 'Random tittel' : ''
                            }`}
                        />

                        <m.textarea
                            initial={{ y: '20px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="w-full bg-fred mb-5 shadow border-0 text-bolge rounded-md p-5 text-xlp"
                            rows="10"
                            onChange={(e) => {
                                handleTextChange(e);
                            }}
                            placeholder="Her skriver du inn din tekst..."
                            defaultValue={`${
                                actionType === 'edit'
                                    ? 'Dette er en random tekst generert for å være en verdi her.'
                                    : ''
                            }`}
                        />

                        <m.div
                            initial={{ y: '20px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="bg-fred w-full p-10 rounded-lg shadow"
                        >
                            <h6 className="text-xlh6 font-fet mb-2">
                                Nøkkelord
                            </h6>
                            <small className="text-xsliten text-bolge">
                                Velg en eller flere nøkkelord. Har du ingen
                                nøkkelord, eller ønsker å legge til en ny. Klikk
                                her.
                            </small>

                            <Select
                                placeholder={<div>Ikke valgt...</div>}
                                name="Skriv inn nøkkelord"
                                options={keywordOptions}
                                isClearable={false}
                                isMulti
                                components={{ NoOptionsMessage, Option }}
                                className="text-left mt-3"
                                styles={selectStyle}
                                defaultValue={
                                    actionType === 'edit' && [
                                        keywordOptions[2],
                                        keywordOptions[3],
                                    ]
                                }
                            />
                        </m.div>
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
                                {submitBtnText} tekst
                            </h6>
                            <ul className="text-xlp">
                                <li>
                                    <p>Antall ord: {wordCount}</p>
                                </li>
                                <li>
                                    <p>Estimert lesetid: {textTime} min</p>
                                    <small className="text-stein">
                                        Beregnet på 200 ord per minutt.
                                    </small>
                                </li>
                            </ul>

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
                                    {submitBtnText}
                                </button>
                                <NavLink
                                    to="/gdsadmin/text"
                                    className="col-span-1 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-metall bg-none text-metall hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center"
                                >
                                    Avbryt
                                </NavLink>
                            </div>
                        </m.div>
                        <m.div
                            initial={{ y: '20px', opacity: 0 }}
                            animate={{ y: '0', opacity: 1 }}
                            transition={{
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            className="bg-fred w-full p-10 rounded-lg shadow mb-5"
                        >
                            <h6 className="text-xlh6 font-fet mb-2">
                                Målgruppe
                            </h6>
                            <small className="text-xsliten text-bolge">
                                Velg en eller flere målgrupper. Har du ingen
                                målgrupper, eller ønsker å legge til en ny{' '}
                                <Link to={'/gdsadmin/tags'}>klikk her.</Link>
                            </small>
                            <Select
                                placeholder={<div>Ikke valgt...</div>}
                                name="Velg en målgruppe"
                                options={targetOptions}
                                isClearable={false}
                                isMulti
                                components={{ NoOptionsMessage, Option }}
                                className="text-left mt-3"
                                styles={selectStyle}
                                defaultValue={
                                    actionType === 'edit' && [
                                        targetOptions[2],
                                        targetOptions[3],
                                    ]
                                }
                            />
                        </m.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
