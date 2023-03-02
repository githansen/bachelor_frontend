import { Fragment, useState, useMemo } from 'react';
import { sortRows, filterRows, paginateRows } from './addon/TableHelpers';
import { TablePagination } from './addon/TablePagination';
//Headless UI
import { Popover, Transition } from '@headlessui/react';
//Icons
import {
    ArrowPathIcon,
    ArrowSmallUpIcon,
    ArrowSmallDownIcon,
    ArrowsUpDownIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import {
    ArrowDownTrayIcon,
    PlayCircleIcon,
    StopCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';
//Toast Library
import toast from 'react-hot-toast';

export const ContributionTable = ({ columns, rows, tableId }) => {
    const [playBtn, setPlayBtn] = useState(true);
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
        toast.success('Nullstilling vellykket!');
    };

    return (
        <>
            <table id={tableId} className="rounded-lg shadow-lg table-fixed">
                <thead>
                    <tr>
                        {columns.map((column) => {
                            const sortIcon = () => {
                                if (column.accessor === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return (
                                            <ArrowSmallUpIcon className="h-5 w-5" />
                                        );
                                    }
                                    return (
                                        <ArrowSmallDownIcon className="h-5 w-5" />
                                    );
                                } else {
                                    return (
                                        <ArrowsUpDownIcon className="h-5 w-5" />
                                    );
                                }
                            };
                            if (column.accessor === 'is_deleted') {
                                return (
                                    <th key={column.accessor} className="p-5">
                                        <div className="flex place-items-center gap-2">
                                            <p className="text-smp">
                                                {column.label}
                                            </p>
                                        </div>
                                    </th>
                                );
                            } else if (column.accessor === 'audio_file') {
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
                                        <Popover className="relative">
                                            <div className="flex place-items-center gap-2">
                                                <button
                                                    onClick={() =>
                                                        handleSort(
                                                            column.accessor
                                                        )
                                                    }
                                                >
                                                    {sortIcon()}
                                                </button>
                                                <Popover.Button
                                                    type="button"
                                                    className="hover:opacity-25 transition-all duration-200 ease-in-out"
                                                >
                                                    <MagnifyingGlassIcon className="w-5 h-5" />
                                                </Popover.Button>
                                                <p className="text-smp">
                                                    {column.label}
                                                </p>
                                            </div>

                                            <Transition
                                                appear
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-[-125%]"
                                                enterTo="opacity-100 translate-y-[-90%]"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-[-90%]"
                                                leaveTo="opacity-0 translate-y-[-125%]"
                                            >
                                                <Popover.Panel className="absolute z-10">
                                                    <div className="overflow-hidden rounded-lg p-2 text-skumring ring-opacity-5 bg-fred  border-skumring">
                                                        <input
                                                            key={`${column.accessor}-search`}
                                                            type="search"
                                                            placeholder="Søk"
                                                            value={
                                                                filters[
                                                                    column
                                                                        .accessor
                                                                ]
                                                            }
                                                            onChange={(e) =>
                                                                handleSearch(
                                                                    e.target
                                                                        .value,
                                                                    column.accessor
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </Popover>
                                    </th>
                                );
                            }
                        })}
                    </tr>
                </thead>
                <tbody className="text-p">
                    {calculatedRows.map((row) => {
                        return (
                            <tr key={row.id}>
                                {columns.map((column) => {
                                    if (column.type === 'action') {
                                        if (row.is_deleted) {
                                            return (
                                                <td
                                                    key={column.accessor}
                                                    className="px-5 py-3"
                                                >
                                                    <button
                                                        onClick={() => {
                                                            toast.error(
                                                                'Bidrag er slettet, kan ikke lastes ned'
                                                            );
                                                        }}
                                                        className="text-xlliten font-normal border-2 border-rose bg-fred text-rose px-3 py-1 rounded inline-flex place-items-center gap-1.5"
                                                    >
                                                        <XMarkIcon className="h-5 w-5" />
                                                        <span>
                                                            {column.format(
                                                                row[
                                                                    column
                                                                        .accessor
                                                                ]
                                                            )}
                                                        </span>
                                                    </button>
                                                </td>
                                            );
                                        } else {
                                            return (
                                                <td
                                                    key={column.accessor}
                                                    className="px-5 py-3"
                                                >
                                                    <button
                                                        onClick={() => {
                                                            toast.success(
                                                                'Fil lastet ned'
                                                            );
                                                        }}
                                                        className="text-xlliten font-normal border-2 border-kveld bg-none text-kveld hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-3 py-1 rounded inline-flex place-items-center gap-1.5"
                                                    >
                                                        <ArrowDownTrayIcon className="h-5 w-5" />
                                                        <span>
                                                            {column.format(
                                                                row[
                                                                    column
                                                                        .accessor
                                                                ]
                                                            )}
                                                        </span>
                                                    </button>
                                                </td>
                                            );
                                        }
                                    }
                                    if (column.type === 'audio') {
                                        if (row.is_deleted) {
                                            return (
                                                <td
                                                    key={column.accessor}
                                                    className="px-5 py-3"
                                                >
                                                    <button
                                                        onClick={() => {
                                                            toast.error(
                                                                'Bidrag er slettet, kan ikke avspilles.'
                                                            );
                                                        }}
                                                        className="text-rose px-3 py-1 rounded inline-flex place-items-center gap-1.5"
                                                    >
                                                        <XCircleIcon className="h-8 w-8" />
                                                    </button>
                                                </td>
                                            );
                                        } else {
                                            if (playBtn) {
                                                return (
                                                    <td
                                                        key={column.accessor}
                                                        className="px-5 py-3"
                                                    >
                                                        <button
                                                            onClick={() => {
                                                                toast.success(
                                                                    'Lyd spilles av'
                                                                );
                                                                setPlayBtn(
                                                                    false
                                                                );
                                                            }}
                                                            className="text-bolge px-3 py-1 rounded inline-flex place-items-center gap-1.5"
                                                        >
                                                            <PlayCircleIcon className="h-8 w-8" />
                                                        </button>
                                                    </td>
                                                );
                                            } else {
                                                return (
                                                    <td
                                                        key={column.accessor}
                                                        className="px-5 py-3"
                                                    >
                                                        <button
                                                            onClick={() => {
                                                                toast.success(
                                                                    'Lyd stoppet'
                                                                );
                                                                setPlayBtn(
                                                                    true
                                                                );
                                                            }}
                                                            className="text-bolge px-3 py-1 rounded inline-flex place-items-center gap-1.5"
                                                        >
                                                            <StopCircleIcon className="h-8 w-8" />
                                                        </button>
                                                    </td>
                                                );
                                            }
                                        }
                                    }
                                    return (
                                        <td
                                            key={column.accessor}
                                            className="px-5 py-3"
                                        >
                                            <p className="text-p text-skumring">
                                                {row[column.accessor]}
                                            </p>
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div
                className={`${
                    count > 0 ? 'grid grid-cols-3' : 'place-items-center'
                } mt-10 pb-10 px-2 w-full`}
            >
                {count > 0 ? (
                    <TablePagination
                        activePage={activePage}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        totalPages={totalPages}
                        setActivePage={setActivePage}
                    />
                ) : (
                    <div className="w-full text-center">
                        <p className="text-xlp text-metall">
                            Ingen resultater...
                        </p>
                    </div>
                )}

                <div
                    className={`${
                        count > 0 ? 'justify-end' : 'justify-center mt-5'
                    } w-full flex place-items-start`}
                >
                    <button
                        onClick={clearAll}
                        className="text-xlknappliten font-fet border-2 border-metall bg-none text-metall hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center"
                    >
                        <ArrowPathIcon className="h-6 w-6" />
                        Nullstill filter
                    </button>
                </div>
            </div>
        </>
    );
};
