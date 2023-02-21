//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from './DashMenu';
//Icons
import { PlayCircleIcon } from '@heroicons/react/24/solid';

export default function Contributions() {
    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-mane">
                <div className="inline-flex gap-3 mb-10 items-end">
                    <PlayCircleIcon className="w-12" />
                    <h2 className="text-xlh2 font-feteste leading-11">
                        Bidrag
                    </h2>
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
