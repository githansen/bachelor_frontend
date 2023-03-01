//Icons
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/solid';

export const Pagination = ({
    activePage,
    count,
    rowsPerPage,
    totalPages,
    setActivePage,
}) => {
    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

    return (
        <>
            <div className="flex place-items-start text-metall">
                <p>
                    Viser rad{' '}
                    {beginning === end ? end : `${beginning} - ${end}`} av{' '}
                    {count}
                </p>
            </div>
            <div className="text-center text-metall">
                <div className="pagination mb-5">
                    <button
                        disabled={activePage === 1}
                        className={`${
                            activePage === 1 ? 'opacity-30' : ''
                        } flex place-items-center hover:text-natt transition-all duration-150`}
                        onClick={() => setActivePage(1)}
                    >
                        <ChevronDoubleLeftIcon className="h-5 w-5" />
                        Første
                    </button>
                    <button
                        disabled={activePage === 1}
                        className={`${
                            activePage === 1 ? 'opacity-30' : ''
                        } flex place-items-center hover:text-natt transition-all duration-150`}
                        onClick={() => setActivePage(activePage - 1)}
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                        Forrige
                    </button>
                    <button
                        disabled={activePage === totalPages}
                        className={`${
                            activePage === totalPages ? 'opacity-30' : ''
                        } flex place-items-center hover:text-natt transition-all duration-150`}
                        onClick={() => setActivePage(activePage + 1)}
                    >
                        Neste
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                    <button
                        disabled={activePage === totalPages}
                        className={`${
                            activePage === totalPages ? 'opacity-30' : ''
                        } flex place-items-center hover:text-natt transition-all duration-150`}
                        onClick={() => setActivePage(totalPages)}
                    >
                        Siste
                        <ChevronDoubleRightIcon className="h-5 w-5" />
                    </button>
                </div>
                <div>
                    <p>
                        Side {activePage} av {totalPages}
                    </p>
                </div>
            </div>
        </>
    );
};
