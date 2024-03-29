//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
import { ContributionTable } from '../../components/table/ContributionTable';
import '@/styles/tableStyle.css';
//Icons
import { PlayCircleIcon } from '@heroicons/react/24/outline';

export default function ContributionPage() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        {
            accessor: 'audio_file',
            label: 'Lydfil',
            format: (value) => '',
            type: 'audio',
        },
        { accessor: 'text', label: 'Tekst' },
        { accessor: 'target', label: 'Målgruppe' },
        { accessor: 'keyword', label: 'Nøkkelord' },
        { accessor: 'contribution_date', label: 'Innlest dato' },
        {
            accessor: 'is_deleted',
            label: 'Last ned',
            format: (value) => (value ? 'Utilgjengelig' : 'Last ned'),
            type: 'action',
        },
    ];

    const rows = [
        {
            id: 1,
            text: 'Textittel',
            target: 'NordmennU40',
            keyword: 'Keef',
            is_deleted: true,
            contribution_date: '20. Februar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 2,
            text: 'Textittel',
            target: 'AfrikaO60',
            keyword: 'Hashish, Keef',
            is_deleted: true,
            contribution_date: '22. Januar 2022',
            download_link: 'https://www.google.com',
        },
        {
            id: 3,
            text: 'Random tittel',
            target: 'Europa18',
            keyword: 'Kæbe, Mæbe',
            is_deleted: false,
            contribution_date: '19. Februar 2022',
        },
        {
            id: 4,
            text: 'Random tittel',
            target: 'Amerika20',
            keyword: 'Ingen',
            is_deleted: false,
            contribution_date: '22. Mars 2022',
        },
        {
            id: 5,
            text: 'Textittel',
            target: 'Ingen',
            keyword: 'Ingen',
            is_deleted: false,
            contribution_date: '15. Desember 2022',
        },
        {
            id: 6,
            text: 'Random tittel',
            target: 'Danmark18',
            keyword: 'Ingen',
            is_deleted: true,
            contribution_date: '13. Februar 2022',
        },
        {
            id: 7,
            text: 'Random tittel',
            target: 'AfrikaO60',
            keyword: 'Ingen',
            is_deleted: false,
            contribution_date: '16. Januar 2022',
        },
    ];

    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="mb-5 items-end">
                    <div className="inline-flex gap-3">
                        <m.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                        >
                            <PlayCircleIcon className="w-12" />
                        </m.span>
                        <m.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className="text-xlh2 font-feteste leading-10 mb-3"
                        >
                            Innspillinger
                        </m.h2>
                    </div>
                    <m.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                        className="text-xlp mt-2"
                    >
                        Her kan du se alle innspillinger som er lagt til. Du kan
                        søke på innspillinger, sortere på kolonner og slette
                        innspillinger.
                    </m.p>
                </div>
                <div>
                    <ContributionTable
                        rows={rows}
                        columns={columns}
                        tableId="ContributionPage"
                    />
                </div>
            </div>
        </div>
    );
}
