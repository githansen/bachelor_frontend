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
                    <div className="fixed inset-0 bg-black bg-opacity-90" />
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
                            <Dialog.Panel className="w-full max-w-md text-center transform overflow-hidden rounded-lg bg-white p-14 align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-h4 font-medium leading-6"
                                >
                                    Ønsker du en ny tekst?
                                </Dialog.Title>

                                <div className="mt-5 grid place-content-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="transScale bg-secondary px-4 py-4 font-bold text-p text-black mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
                                    >
                                        Nei!
                                    </button>

                                    <button
                                        type="button"
                                        className="bg-light px-5 py-2 mt-2 text-black font-medium rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
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
