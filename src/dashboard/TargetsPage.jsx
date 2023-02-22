//Shared
import DashMenu from './DashMenu';
import { TableForTextPage } from './table/TableForTextPage';
import '../styles/table.css';
//Icons
import { PlusIcon } from '@heroicons/react/24/solid';

export default function TargetsPage() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        { accessor: 'name', label: 'Navn' },
        { accessor: 'last_changed_date', label: 'Sist endret dato' },
        { accessor: 'added_date', label: 'Lagt til' },
        {
            accessor: 'is_changeable',
            label: 'Endre',
            format: (value) => (value ? 'Endre' : 'Ingen tilgang'),
        },
    ];

    const rows = [
        {
            id: 1,
            name: 'Textittel',
            last_changed_date: '14. April 2022',
            added_date: '10. Februar 2022',
            is_changeable: true,
        },
        {
            id: 2,
            name: 'Random tittel',
            last_changed_date: '23. Juni 2022',
            added_date: '05. Mars 2022',
            is_changeable: true,
        },
        {
            id: 3,
            name: 'Dette er en tittel',
            last_changed_date: '06. Desember 2022',
            added_date: '21. April 2022',
            is_changeable: false,
        },
    ];

    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-lysbakgrunn">
                <div className="flex justify-between mb-5 items-center">
                    <div className="mb-5 items-end">
                        <h2 className="text-xlh2 font-feteste leading-10 mb-3">
                            Målgrupper
                        </h2>
                        <p>
                            Her kan du se alle målgruppene som er lagt inn i
                            systemet. Du kan laste ned målgruppene som er lagt
                            inn i systemet.
                        </p>
                    </div>

                    <div className="inline-flex text-right place-content-end items-center w-full mb-5 gap-5">
                        <p>Viser 3 av 59 målgrupper</p>
                        <button className="text-xlknappliten font-fet border-2 border-solskinn bg-solskinn text-natt hover:bg-paskeegg transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center">
                            <PlusIcon className="h-6 w-6" />
                            Legg til ny
                        </button>
                    </div>
                </div>
                <div>
                    <TableForTextPage
                        rows={rows}
                        columns={columns}
                        tableId="TextPage"
                    />
                </div>
            </div>
        </div>
    );
}
