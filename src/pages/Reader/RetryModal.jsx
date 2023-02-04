import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function RetryModal({ open, onClose, onRetry }) {
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
                                    className="text-h4 font-medium"
                                >
                                    Er du sikker på at du vil starte opptaket på
                                    nytt?
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-p text-gray-500">
                                        Merk at det du har spilt inn vil bli
                                        slettet.
                                    </p>
                                </div>

                                <div className="mt-5 grid place-content-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="transScale uppercase bg-secondary px-4 py-4 font-bold text-p text-black mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
                                    >
                                        Avbryt
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onRetry}
                                        className="bg-light px-5 text-small py-3 mt-2 font-medium text-black rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
                                    >
                                        Start opptak på nytt
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
