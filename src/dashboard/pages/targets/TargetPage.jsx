//React library
import { NavLink } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../../components/shared/DashMenu';
import { StandardTable } from '../../components/table/StandardTable';
import '@/styles/tableStyle.css';
//Icons
import { PlusIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function TargetPage() {
    const columns = [
        { accessor: 'id', label: 'ID' },
        { accessor: 'name', label: 'Navn' },
        { accessor: 'last_changed_date', label: 'Sist endret dato' },
        { accessor: 'added_date', label: 'Lagt til' },
        {
            accessor: 'is_changeable',
            label: 'Endre',
            format: (value) => (value ? 'Endre' : 'Ingen tilgang'),
            type: 'action',
            action: 'onlyEdit', //onlyEdit or editAndDelete
            editLink: 'edit',
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
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
                <div className="flex justify-between mb-5 items-center">
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
                                <UserGroupIcon className="w-12" />
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
                                Målgrupper
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
                            Her kan du se alle målgruppene som er lagt inn i
                            systemet.
                        </m.p>
                    </div>

                    <div className="inline-flex text-right place-content-end items-center w-full mb-5 gap-5">
                        <p>Viser 3 av 59 målgrupper</p>
                        <NavLink to="/gdsadmin/target/new">
                            <div className="text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center">
                                <PlusIcon className="h-6 w-6" />
                                Legg til ny
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <StandardTable
                        rows={rows}
                        columns={columns}
                        tableId="StandardTable"
                    />
                </div>
            </div>
        </div>
    );
}
