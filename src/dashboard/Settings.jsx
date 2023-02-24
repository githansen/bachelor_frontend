//React
import { useState } from 'react';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from './DashMenu';
import '@/styles/dashboard.css';
//Icons
import {
    CogIcon,
    CheckIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export default function Settings() {
    let [wordPerMinute, setWordPerMinute] = useState(200);
    let [showSubmitButton, setShowSubmitButton] = useState(false);
    const handleInputChange = (event) => {
        let inputValue = event.target.valueAsNumber;
        if (inputValue === wordPerMinute || inputValue < event.target.min) {
            setShowSubmitButton(false);
        } else {
            setShowSubmitButton(true);
        }
        console.log(inputValue + ' ' + wordPerMinute);
    };
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
                    <div className="h-96 rounded-lg border-4 border-solid border-fred shadow-md bg-fred flex items-center">
                        <div className="w-full text-center p-10">
                            <div className="mb-5">
                                <h6 className="text-xlh6 font-fet text-skumring">
                                    Ord pr.minutt.
                                </h6>
                                <small className="text-xlliten font-normal text-metall">
                                    Her kan du velge hvor mange ord pr.minutt.
                                    som blir satt som standard innlesning.
                                </small>
                            </div>
                            <div>
                                <form className="flex place-items-center w-full justify-center items-stretch">
                                    <input
                                        className="rounded-l bg-krystall max-w-[10rem] text-center text-bolge font-fet text-xlp"
                                        defaultValue={wordPerMinute}
                                        onChange={handleInputChange}
                                        type="number"
                                        min="1"
                                    />
                                    <button
                                        type="button"
                                        className={`${
                                            !showSubmitButton ? 'hidden' : ''
                                        } text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 rounded-r`}
                                    >
                                        <CheckIcon className="w-6" />
                                    </button>
                                </form>
                                <small className="text-xsliten text-metall">
                                    ord per minutt
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 rounded-lg border-4 border-solid border-fred shadow-md bg-fred flex items-center">
                        <div className="w-full text-center p-10">
                            <div className="mb-5">
                                <h6 className="text-xlh6 font-fet text-skumring">
                                    Endre passord
                                </h6>
                                <small className="text-xlliten font-normal text-metall">
                                    Du blir sendt til Azure for å endre
                                    passordet ditt
                                </small>
                            </div>
                            <div>
                                <a
                                    href="https://azure.microsoft.com/nb-no/"
                                    target="_blank"
                                >
                                    <div className="text-xlknappliten font-fet border-2 border-bolge bg-bolge text-fred hover:bg-krystall hover:text-bolge transition-all duration-200 px-4 py-2 rounded inline-flex gap-2 place-items-center">
                                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                                        Åpne Azure
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                    <div className="h-96 rounded-lg border-4 border-dashed border-stein" />
                </div>
            </div>
        </div>
    );
}
