//Shared
import DashMenu from './DashMenu';
import { Table } from './table/Table';
import '../styles/table.css';

export default function TablePage() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        { accessor: 'text', label: 'Tekst' },
        {
            accessor: 'is_deleted',
            label: 'Slettet',
            format: (value) => (value ? 'Ja' : 'Nei'),
        },
        { accessor: 'contribution_date', label: 'Innlest dato' },
    ];

    const rows = [
        {
            id: 1,
            text: 'Liz Lemon',
            is_deleted: true,
            contribution_date: '02-28-1999',
        },
        {
            id: 2,
            text: 'Jack Donaghy',
            is_deleted: true,
            contribution_date: '03-05-1997',
        },
        {
            id: 3,
            text: 'Tracy Morgan',
            is_deleted: false,
            contribution_date: '07-12-2002',
        },
        {
            id: 4,
            text: 'Jenna Maroney',
            is_deleted: false,
            contribution_date: '02-28-1999',
        },
        {
            id: 5,
            text: 'Kenneth Parcell',
            is_deleted: false,
            contribution_date: '01-01-1970',
        },
        {
            id: 6,
            text: 'Pete Hornberger',
            is_deleted: true,
            contribution_date: '04-01-2000',
        },
        {
            id: 7,
            text: 'Frank Rossitano',
            is_deleted: false,
            contribution_date: '06-09-2004',
        },
    ];

    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-mane">
                <div className="inline-flex gap-3 mb-10 items-end">
                    <h2 className="text-xlh2 font-feteste leading-11">Table</h2>
                </div>
                <div>
                    <Table rows={rows} columns={columns} />
                </div>
            </div>
        </div>
    );
}
