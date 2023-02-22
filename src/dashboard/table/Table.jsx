import { useState, useMemo } from 'react';
import { sortRows, filterRows, paginateRows } from './helpers';
import { Pagination } from './Pagination';
//Icons
import { ArrowPathIcon } from '@heroicons/react/24/solid';

export const Table = ({ columns, rows }) => {
    const [activePage, setActivePage] = useState(1);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({ order: 'asc', orderBy: 'id' });
    const rowsPerPage = 3;

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
            <div className="w-full flex justify-end mb-10">
                <button
                    onClick={clearAll}
                    className="text-xlknappliten font-fet border-4 border-bolge bg-none text-bolge hover:bg-bolge hover:text-fred transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center"
                >
                    <ArrowPathIcon className="h-6 w-6" />
                    Nullstill filter
                </button>
            </div>

            <table>
                <thead>
                    <tr id="searchRow">
                        {columns.map((column) => {
                            return (
                                <th key={column.label}>
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
                        })}
                    </tr>
                    <tr>
                        {columns.map((column) => {
                            const sortIcon = () => {
                                if (column.accessor === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return '⬆️';
                                    }
                                    return '⬇️';
                                } else {
                                    return '️↕️';
                                }
                            };
                            return (
                                <th key={column.accessor}>
                                    <span>{column.label}</span>
                                    <button
                                        onClick={() =>
                                            handleSort(column.accessor)
                                        }
                                    >
                                        {sortIcon()}
                                    </button>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {calculatedRows.map((row) => {
                        return (
                            <tr
                                key={row.id}
                                className={`${
                                    row.is_deleted ? 'isDeleted' : ''
                                }`}
                            >
                                {columns.map((column) => {
                                    if (column.format) {
                                        return (
                                            <td key={column.accessor}>
                                                {column.format(
                                                    row[column.accessor]
                                                )}
                                            </td>
                                        );
                                    }
                                    return (
                                        <td key={column.accessor}>
                                            {row[column.accessor]}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {count > 0 ? (
                <Pagination
                    activePage={activePage}
                    count={count}
                    rowsPerPage={rowsPerPage}
                    totalPages={totalPages}
                    setActivePage={setActivePage}
                />
            ) : (
                <p>No data found</p>
            )}
        </>
    );
};
