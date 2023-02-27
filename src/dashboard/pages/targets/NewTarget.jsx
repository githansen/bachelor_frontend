//React library
import { NavLink } from 'react-router-dom';
import Select, { components } from 'react-select';
//Shared
import DashMenu from '../../components/shared/DashMenu';
//Icons
import { ArrowUpCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function NewTarget() {
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

    const ageOptions = [
        { value: '1', label: '18-29' },
        { value: '2', label: '30-39' },
        { value: '3', label: '40-49' },
        { value: '4', label: '50-59' },
        { value: '5', label: '60+' },
    ];
    const genderOptions = [
        { value: 'mann', label: 'Mann' },
        { value: 'kvinne', label: 'Kvinne' },
        { value: 'annet', label: 'Annet' },
    ];
    const languageOptions = [
        { value: 'norsk', label: 'Norsk' },
        { value: 'arabisk', label: 'Arabisk' },
        { value: 'alabansk', label: 'Albansk' },
    ];
    const dialectOptions = [
        { value: 'ostlandsk', label: 'Østlandsk' },
        { value: 'vestlandsk', label: 'Vestlandsk' },
        { value: 'trondersk', label: 'Trøndersk' },
        { value: 'nordnorsk', label: 'Nordnorsk' },
        { value: 'annet', label: 'Annet' },
    ];
    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="flex justify-between mb-5 items-center">
                    <div className="mb-5 items-end">
                        <h2 className="text-xlh2 font-feteste leading-10 mb-3">
                            Legg til ny målgruppe
                        </h2>
                        <nav
                            className="flex mt-6 text-xlp"
                            aria-label="Breadcrumb"
                        >
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center text-bolge hover:opacity-60 transition duration-200">
                                    <NavLink
                                        to="/gdsadmin/target"
                                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <UserGroupIcon className="h-4 w-4 mr-1" />
                                        Målgruppe
                                    </NavLink>
                                </li>
                                <li aria-current="page" className="text-bolge">
                                    <div className="flex items-center">
                                        <svg
                                            aria-hidden="true"
                                            className="w-6 h-6 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                            Legg til ny målgruppe
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
                            placeholder="Gi målgruppen et navn..."
                        ></input>

                        <textarea
                            className="w-full bg-fred shadow border-0 text-bolge rounded-md p-5 text-xlp mb-8"
                            rows="4"
                            placeholder="Beskriv målgruppen..."
                        ></textarea>
                        <div className="grid grid-cols-2 gap-10 mb-8">
                            <div className="bg-fred w-full p-10 rounded-lg shadow">
                                <h6 className="text-xlh6 font-fet mb-2">
                                    Aldersgruppe
                                </h6>
                                <small className="text-xsliten text-bolge">
                                    Velg en eller flere aldersgrupper.
                                </small>
                                <Select
                                    placeholder={<div>Ikke valgt...</div>}
                                    name="Velg et kjønn"
                                    options={ageOptions}
                                    isClearable={false}
                                    isMulti
                                    components={{ NoOptionsMessage, Option }}
                                    className="text-left mt-3"
                                    styles={selectStyle}
                                />
                            </div>
                            <div className="bg-fred w-full p-10 rounded-lg shadow">
                                <h6 className="text-xlh6 font-fet mb-2">
                                    Kjønn
                                </h6>
                                <small className="text-xsliten text-bolge">
                                    Velg et eller flere kjønn.
                                </small>
                                <Select
                                    placeholder={<div>Ikke valgt...</div>}
                                    name="Velg et kjønn"
                                    options={genderOptions}
                                    isClearable={false}
                                    isMulti
                                    components={{ NoOptionsMessage, Option }}
                                    className="text-left mt-3"
                                    styles={selectStyle}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <div className="bg-fred w-full p-10 rounded-lg shadow">
                                <h6 className="text-xlh6 font-fet mb-2">
                                    Morsmål
                                </h6>
                                <small className="text-xsliten text-bolge">
                                    Velg en eller flere morsmål.
                                </small>
                                <Select
                                    placeholder={<div>Ikke valgt...</div>}
                                    name="Velg et kjønn"
                                    options={languageOptions}
                                    isClearable={false}
                                    isMulti
                                    components={{ NoOptionsMessage, Option }}
                                    className="text-left mt-3"
                                    styles={selectStyle}
                                />
                            </div>
                            <div className="bg-fred w-full p-10 rounded-lg shadow">
                                <h6 className="text-xlh6 font-fet mb-2">
                                    Dialekt
                                </h6>
                                <small className="text-xsliten text-bolge">
                                    Velg en eller flere dialekter.
                                </small>
                                <Select
                                    placeholder={<div>Ikke valgt...</div>}
                                    name="Velg et kjønn"
                                    options={dialectOptions}
                                    isClearable={false}
                                    isMulti
                                    components={{ NoOptionsMessage, Option }}
                                    className="text-left mt-3"
                                    styles={selectStyle}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-fred w-full p-10 rounded-lg shadow mb-5">
                            <h6 className="text-xlh6 font-fet mb-2">
                                Publiser målgruppe
                            </h6>

                            <select className="mt-4 rounded border-2 border-bolge text-bolge w-full">
                                <option value="draft">Kladd</option>
                                <option value="published">Publisert</option>
                                <option value="notPublished">
                                    Ikke publisert
                                </option>
                            </select>

                            <button className="mt-4 w-full text-center text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 justify-center place-items-center">
                                <ArrowUpCircleIcon className="h-6 w-6" />
                                Legg til
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
