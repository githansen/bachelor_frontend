import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function ResetModal({ open, onClose, onReset }) {
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-natt bg-opacity-90" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-14 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="xs:py-15 xs:px-5 p-14 w-full max-w-md text-center transform overflow-hidden rounded-lg bg-fred align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="xs:text-xsh5 sm:text-smh5 md:text-mdh5 lg:text-lgh5 xl:text-xlh5 text-h5 font-medium leading-6"
                                    >
                                    Ønsker du en ny tekst?
                                </Dialog.Title>

                                <div className="mt-5 grid sm:justify-center md:place-content-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="xs:w-full w-48 xs:text-xsbtn sm:text-smbtn md:text-mdbtn lg:text-lgbtn xl:text-xlbtn text-btn transScale bg-solskinn px-4 py-4 text-natt mt-2 rounded inline-flex justify-center items-center gap-2"
                                    >
                                        Nei!
                                    </button>

                                    <button
                                        type="button"
                                        className="xs:w-full w-40 xs:text-xsbtnsmall justify-self-center sm:text-smbtnsmall md:text-mdbtnsmall lg:text-lgbtnsmall xl:text-xlbtnsmall text-btnsmall bg-mane px-5 py-2 mt-2 text-natt rounded border-2 border-mane hover:bg-paskeegg hover:border-solskinn"
                                        onClick={onReset}
                                    >
                                        Ja
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
