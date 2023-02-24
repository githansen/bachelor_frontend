//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from './DashMenu';
//Icons
import { CogIcon } from '@heroicons/react/24/outline';

export default function Settings() {
    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-lysbakgrunn">
                <div className="inline-flex gap-3 mb-10 items-end">
                    <m.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                    >
                        <CogIcon className="w-12" />
                    </m.span>
                    <m.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                        className="text-xlh2 font-feteste leading-11"
                    >
                        Innstillinger
                    </m.h2>
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
