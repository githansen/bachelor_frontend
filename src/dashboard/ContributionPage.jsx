//Shared
import DashMenu from './DashMenu';
import { TableForContribution } from './table/TableForContribution';
import '../styles/table.css';

export default function ContributionPage() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        { accessor: 'text', label: 'Tekst' },
        { accessor: 'target', label: 'Målgruppe' },
        { accessor: 'contribution_date', label: 'Innlest dato' },
        {
            accessor: 'is_deleted',
            label: 'Last ned',
            format: (value) => (value ? 'Slettet' : 'Last ned'),
        },
    ];

    const rows = [
        {
            id: 1,
            text: 'Liz Lemon',
            target: 'NordmennU40',
            is_deleted: true,
            contribution_date: '20. Februar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 2,
            text: 'Jack Donaghy',
            target: 'AfrikaO60',
            is_deleted: true,
            contribution_date: '22. Januar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 3,
            text: 'Tracy Morgan',
            target: 'Europa18',
            is_deleted: false,
            contribution_date: '19. Februar 2022',
        },
        {
            id: 4,
            text: 'Jenna Maroney',
            target: 'Amerika20',
            is_deleted: false,
            contribution_date: '22. Mars 2022',
        },
        {
            id: 5,
            text: 'Kenneth Parcell',
            target: 'Ingen',
            is_deleted: false,
            contribution_date: '15. Desember 2022',
        },
        {
            id: 6,
            text: 'Pete Hornberger',
            target: 'Danmark18',
            is_deleted: true,
            contribution_date: '13. Februar 2022',
        },
        {
            id: 7,
            text: 'Frank Rossitano',
            target: 'AfrikaO60',
            is_deleted: false,
            contribution_date: '16. Januar 2022',
        },
    ];

    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-lysbakgrunn">
                <div className="mb-5 items-end">
                    <h2 className="text-xlh2 font-feteste leading-10 mb-3">
                        Innspillinger
                    </h2>
                    <p>
                        Her kan du se alle innspillinger som er lagt til. Du kan
                        søke på innspillinger, sortere på kolonner og slette
                        innspillinger.
                    </p>
                </div>
                <div>
                    <TableForContribution
                        rows={rows}
                        columns={columns}
                        tableId="ContributionPage"
                    />
                </div>
            </div>
        </div>
    );
}
