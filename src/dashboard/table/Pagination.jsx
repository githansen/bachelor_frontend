/* eslint-disable jsx-a11y/accessible-emoji */

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
            <div className="pagination">
                <button
                    disabled={activePage === 1}
                    className={`${activePage === 1 ? 'opacity-30' : ''}`}
                    onClick={() => setActivePage(1)}
                >
                    ⏮️ First
                </button>
                <button
                    disabled={activePage === 1}
                    className={`${activePage === 1 ? 'opacity-30' : ''}`}
                    onClick={() => setActivePage(activePage - 1)}
                >
                    ⬅️ Previous
                </button>
                <button
                    disabled={activePage === totalPages}
                    className={`${
                        activePage === totalPages ? 'opacity-30' : ''
                    }`}
                    onClick={() => setActivePage(activePage + 1)}
                >
                    Next ➡️
                </button>
                <button
                    disabled={activePage === totalPages}
                    className={`${
                        activePage === totalPages ? 'opacity-30' : ''
                    }`}
                    onClick={() => setActivePage(totalPages)}
                >
                    Last ⏭️
                </button>
            </div>
            <p>
                Page {activePage} of {totalPages}
            </p>
            <p>
                Rows: {beginning === end ? end : `${beginning} - ${end}`} of{' '}
                {count}
            </p>
        </>
    );
};
