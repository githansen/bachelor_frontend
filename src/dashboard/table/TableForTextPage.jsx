//React library
import { NavLink } from 'react-router-dom';
//React library
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect, useMemo } from 'react';
import { sortRows, filterRows, paginateRows } from './helpers';
import { Pagination } from './Pagination';
//Icons
import {
    ArrowPathIcon,
    ArrowSmallUpIcon,
    ArrowSmallDownIcon,
    ArrowsUpDownIcon,
    TrashIcon,
} from '@heroicons/react/24/solid';
import { PencilIcon } from '@heroicons/react/24/outline';

export const TableForTextPage = ({ columns, rows, tableId }) => {
    //Open/close modal
    let [isOpen, setIsOpen] = useState(false);
    //Delete entity
    function deleteEntity() {
        setIsOpen(true);
        //Slett entity fra backend her
    }
    //
    const [activePage, setActivePage] = useState(1);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });
    const rowsPerPage = 10;

    const filteredRows = useMemo(
        () => filterRows(rows, filters),
        [rows, filters]
    );
    const sortedRows = useMemo(
        () => sortRows(filteredRows, sort),
        [filteredRows, sort]
    );
    const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

    const count = filteredRows.length;
    const totalPages = Math.ceil(count / rowsPerPage);

    const handleSearch = (value, accessor) => {
        setActivePage(1);

        if (value) {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [accessor]: value,
            }));
        } else {
            setFilters((prevFilters) => {
                const updatedFilters = { ...prevFilters };
                delete updatedFilters[accessor];

                return updatedFilters;
            });
        }
    };

    const handleSort = (accessor) => {
        setActivePage(1);
        setSort((prevSort) => ({
            order:
                prevSort.order === 'asc' && prevSort.orderBy === accessor
                    ? 'desc'
                    : 'asc',
            orderBy: accessor,
        }));
    };

    const clearAll = () => {
        setSort({ order: 'asc', orderBy: 'id' });
        setActivePage(1);
        setFilters({});
    };

    return (
        <>
            <table id={tableId} className="rounded-lg shadow-lg">
                <thead>
                    <tr id="searchRow">
                        {columns.map((column) => {
                            if (column.accessor === 'is_changeable') {
                                return (
                                    <th
                                        key={column.label}
                                        className="px-5 pt-7"
                                    ></th>
                                );
                            } else {
                                return (
                                    <th
                                        key={column.label}
                                        className="px-5 pt-7"
                                    >
                                        <input
                                            key={`${column.accessor}-search`}
                                            type="search"
                                            placeholder={`Søk etter ${column.label}`}
                                            value={filters[column.accessor]}
                                            onChange={(event) =>
                                                handleSearch(
                                                    event.target.value,
                                                    column.accessor
                                                )
                                            }
                                        />
                                    </th>
                                );
                            }
                        })}
                    </tr>
                    <tr>
                        {columns.map((column) => {
                            const sortIcon = () => {
                                if (column.accessor === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return (
                                            <>
                                                <ArrowSmallUpIcon className="h-5 w-5" />
                                            </>
                                        );
                                    }
                                    return (
                                        <>
                                            <ArrowSmallDownIcon className="h-5 w-5" />
                                        </>
                                    );
                                } else {
                                    return (
                                        <>
                                            <ArrowsUpDownIcon className="h-5 w-5" />
                                        </>
                                    );
                                }
                            };
                            if (column.accessor === 'is_changeable') {
                                return (
                                    <th key={column.accessor} className="p-5">
                                        <div className="flex place-items-center gap-2">
                                            <p className="text-smp">
                                                {column.label}
                                            </p>
                                        </div>
                                    </th>
                                );
                            } else {
                                return (
                                    <th key={column.accessor} className="p-5">
                                        <div className="flex place-items-center gap-2">
                                            <p className="text-smp">
                                                {column.label}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    handleSort(column.accessor)
                                                }
                                            >
                                                {sortIcon()}
                                            </button>
                                        </div>
                                    </th>
                                );
                            }
                        })}
                    </tr>
                </thead>
                <tbody className="text-xsp">
                    {calculatedRows.map((row) => {
                        return (
                            <tr
                                key={row.id}
                                className={`${
                                    row.is_changeable
                                        ? ''
                                        : 'opacity-50 hover:opacity-100'
                                }`}
                            >
                                {columns.map((column) => {
                                    if (column.type === 'action') {
                                        if (!row.is_changeable) {
                                            return (
                                                <td
                                                    key={column.accessor}
                                                    className="px-5 py-4"
                                                >
                                                    <span className="bg-rose text-fred py-2 px-4 rounded tracking-normal">
                                                        {column.format(
                                                            row[column.accessor]
                                                        )}
                                                    </span>
                                                </td>
                                            );
                                        } else {
                                            if (column.action === 'onlyEdit') {
                                                return (
                                                    <td
                                                        key={column.accessor}
                                                        className="px-5 py-4"
                                                    >
                                                        <NavLink
                                                            to={column.editLink}
                                                            state={{
                                                                action: 'edit',
                                                                categoryType:
                                                                    column.categoryType,
                                                            }}
                                                            className="text-xlliten font-normal border-2 border-kveld bg-none text-kveld hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-3 py-1 rounded inline-flex place-items-center gap-1.5"
                                                        >
                                                            <PencilIcon className="h-5 w-5" />
                                                            Endre
                                                        </NavLink>
                                                    </td>
                                                );
                                            } else if (
                                                column.action ===
                                                'editAndDelete'
                                            ) {
                                                return (
                                                    <td
                                                        key={column.accessor}
                                                        className="px-5 py-4 flex gap-2"
                                                    >
                                                        <NavLink
                                                            to={column.editLink}
                                                            state={{
                                                                action: 'edit',
                                                                categoryType:
                                                                    column.categoryType,
                                                            }}
                                                            className="text-xlliten font-normal border-2 border-kveld bg-none text-kveld hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-3 py-2 rounded inline-flex place-items-center gap-1.5"
                                                        >
                                                            <PencilIcon className="h-5 w-5" />
                                                        </NavLink>
                                                        <button
                                                            onClick={
                                                                deleteEntity
                                                            }
                                                            className="text-xlliten font-normal border-2 border-rose bg-none text-rose hover:border-rose hover:bg-rose hover:text-fred transition-all duration-200 px-3 py-2 rounded inline-flex place-items-center gap-1.5"
                                                        >
                                                            <TrashIcon className="h-5 w-5" />
                                                        </button>
                                                    </td>
                                                );
                                            }
                                        }
                                    } else if (
                                        column.type === 'customPrefixOrSuffix'
                                    ) {
                                        return (
                                            <td
                                                key={column.accessor}
                                                className="px-5 py-4"
                                            >
                                                {column.format(
                                                    row[column.accessor]
                                                )}
                                            </td>
                                        );
                                    }
                                    return (
                                        <td
                                            key={column.accessor}
                                            className="px-5 py-4"
                                        >
                                            {row[column.accessor]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="grid grid-cols-3 mt-10 pb-10 px-2 w-full">
                {count > 0 ? (
                    <Pagination
                        activePage={activePage}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        totalPages={totalPages}
                        setActivePage={setActivePage}
                    />
                ) : (
                    <p>Ingen resultater...</p>
                )}

                <div className="w-full flex place-items-start justify-end">
                    <button
                        onClick={clearAll}
                        className="text-xlknappliten font-fet border-2 border-metall bg-none text-metall hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center"
                    >
                        <ArrowPathIcon className="h-6 w-6" />
                        Nullstill filter
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-natt bg-opacity-90" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center xs:p-5 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="xs:py-15 xs:px-5 p-14 w-full max-w-md text-center transform overflow-hidden rounded-lg bg-fred align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="
                        font-fet 
                        xs:text-xsh5 
                        sm:text-smh5 
                        xl:text-xlh5 
                        text-h5
                        text-skumring"
                                    >
                                        Sikker på at du vil slette ...
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p text-metall">
                                            Denne endringen kan ikke
                                            tilbakestilles.
                                        </p>
                                    </div>

                                    <div className="mt-5 grid md:place-content-center">
                                        <button
                                            type="button"
                                            onClick=""
                                            className="
                        font-fet
                        hover:font-feteste
                        xs:text-xsknapp 
                        sm:text-smknapp 
                        xl:text-xlknapp 
                        text-knapp 
                        text-rose 
                        bg-fred
                        hover:bg-rose
                        hover:text-fred
                        border-4
                        hover:border-rose
                        xs:w-full 
                        w-48
                        transScale 
                        px-8 
                        py-5 
                        mb-2 
                        mt-2 
                        justify-self-center
                        rounded 
                        inline-flex 
                        justify-center 
                        items-center 
                        gap-1"
                                        >
                                            <svg
                                                className="w-6 h-6 mb-1"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                color="currentColor"
                                            >
                                                <path
                                                    d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            Slett
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
                                            className="
                        font-fet
                        xs:text-xsknappliten 
                        sm:text-smknappliten 
                        xl:text-xlknappliten 
                        text-knappliten 
                        text-metall 
                        hover:text-fred 
                        bg-mane 
                        hover:bg-skumring
                        xs:w-full 
                        w-fit 
                        px-10 
                        py-3 
                        mt-2
                        mb-2
                        justify-self-center
                        rounded 
                        transition 
                        ease-in-out 
                        duration-200"
                                        >
                                            Avbryt
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
