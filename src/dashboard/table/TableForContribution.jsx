import { useState, useMemo } from 'react';
import { sortRows, filterRows, paginateRows } from './helpers';
import { Pagination } from './Pagination';
//Icons
import {
    ArrowPathIcon,
    ArrowSmallUpIcon,
    ArrowSmallDownIcon,
    ArrowsUpDownIcon,
} from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export const TableForContribution = ({ columns, rows, tableId }) => {
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
                            if (column.accessor === 'is_deleted') {
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
                                    row.is_deleted
                                        ? 'opacity-50 hover:opacity-100'
                                        : ''
                                }`}
                            >
                                {columns.map((column) => {
                                    if (column.format) {
                                        if (row.is_deleted) {
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
                                            return (
                                                <td
                                                    key={column.accessor}
                                                    className="px-5 py-4"
                                                >
                                                    <button className="text-xlliten font-normal border-2 border-kveld bg-none text-kveld hover:border-skumring hover:bg-skumring hover:text-fred transition-all duration-200 px-3 py-1 rounded inline-flex place-items-center gap-1.5">
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
        </>
    );
};
