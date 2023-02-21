//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from './DashMenu';
//Icons
import { PlusIcon } from '@heroicons/react/24/solid';
import { DocumentIcon } from '@heroicons/react/24/solid';

export default function Dashboard() {
    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-mane">
                <div className="flex justify-between mb-5 items-center">
                    <div className="inline-flex gap-3 items-end">
                        <DocumentIcon className="w-12" />
                        <h2 className="text-xlh2 font-feteste leading-11">
                            Tekster
                        </h2>
                    </div>

                    <div className="inline-flex text-right place-content-end items-center w-full mb-5 gap-5">
                        <p>Viser 12 av 254 tekster</p>
                        <button className="text-xlknapp font-fet border-4 border-solskinn bg-solskinn text-natt hover:bg-paskeegg transition-all duration-200 px-8 py-4 rounded inline-flex gap-2 place-items-center">
                            <PlusIcon className="h-6 w-6" />
                            Legg til ny
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                </div>
            </div>
        </div>
    );
}
