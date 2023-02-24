//React
import React, { useEffect, useRef, useState } from 'react';
//React library
import { NavLink } from 'react-router-dom';
import Select, { components } from 'react-select';
//Shared
import DashMenu from './DashMenu';
//Icons
import { DocumentIcon } from '@heroicons/react/24/solid';
import {
    ChevronRightIcon,
    ArrowUpCircleIcon,
} from '@heroicons/react/24/outline';

export default function EditText() {
    const textAreaRef = useRef();
    const [wordCount, setWordCount] = useState(0);
    const [textTime, setTextTime] = useState(0);

    const countWords = (e) => {
        const text = textAreaRef.current.value;
        setWordCount(text.split(' ').length);
        setTextTime((wordCount / 200).toFixed(2));
    };
    useEffect(() => {
        countWords();
    });

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
    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-lysbakgrunn">
                <div className="flex justify-between mb-5 items-center">
                    <div className="mb-5 items-end">
                        <h2 className="text-xlh2 font-normal leading-10 mb-3">
                            Rediger tekst :{' '}
                            <span className="font-feteste">Random tittel</span>
                        </h2>
                        <nav
                            className="flex mt-6 text-xlp"
                            aria-label="Breadcrumb"
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
                                <li aria-current="page" className="text-bolge">
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 mr-1" />
                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                            Random tittel
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-2">
                        <input
                            className="bg-fred shadow w-full p-5 rounded-lg mb-8 text-xlh5 font-fet text-bolge"
                            placeholder="Skriv inn en overskrift..."
                            value="Random tittel"
                        />

                        <textarea
                            className="w-full bg-fred shadow border-0 text-bolge rounded-md p-5 text-xlp"
                            rows="10"
                            ref={textAreaRef}
                            onChange={countWords}
                            placeholder="Her skriver du inn din tekst..."
                        >
                            Dette er en random tekst generert for å være en
                            verdi her.
                        </textarea>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-fred w-full p-10 rounded-lg shadow mb-5">
                            <ul className="text-xlp">
                                <li>
                                    <p className="text-xlp text-stein">
                                        ID: 5 | Publisert: 23.02.2022
                                    </p>
                                </li>
                            </ul>
                            <h6 className="text-xlh6 font-fet mb-2">
                                Oppdater tekst
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

                            <select className="mt-4 rounded border-2 border-bolge text-bolge w-full">
                                <option value="draft">Kladd</option>
                                <option value="published" selected>
                                    Publisert
                                </option>
                                <option value="notPublished">
                                    Ikke publisert
                                </option>
                            </select>

                            <div className="grid grid-cols-3 gap-5">
                                <button className="col-span-2 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                                    <ArrowUpCircleIcon className="h-6 w-6" />
                                    Oppdater
                                </button>
                                <button className="col-span-1 mt-4 w-full text-center text-xlknappliten font-fet border-2 border-metall bg-none text-metall hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                                    Avbryt
                                </button>
                            </div>
                        </div>
                        <div className="bg-fred w-full p-10 rounded-lg shadow">
                            <h6 className="text-xlh6 font-fet mb-2">
                                Målgruppe
                            </h6>
                            <small className="text-xsliten text-bolge">
                                Velg en eller flere målgrupper. Har du ingen
                                målgrupper, eller ønsker å legge til en ny.
                                Klikk her.
                            </small>
                            <Select
                                placeholder={<div>Ikke valgt...</div>}
                                name="Velg et kjønn"
                                options={targetOptions}
                                isClearable={false}
                                isMulti
                                components={{ NoOptionsMessage, Option }}
                                className="text-left mt-3"
                                styles={selectStyle}
                                defaultValue={[
                                    targetOptions[2],
                                    targetOptions[3],
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
