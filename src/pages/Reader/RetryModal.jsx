//React library
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// This is the modal that pops up when the user clicks the "Prøv på nytt" button
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
                                    className="
                                        font-fet 
                                        xs:text-xsh5 
                                        sm:text-smh5 
                                        xl:text-xlh5 
                                        text-h5
                                        text-skumring"
                                >
                                    Er du sikker på at du vil starte opptaket på
                                    nytt?
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p text-metall">
                                        Merk at det du har spilt inn vil bli
                                        slettet.
                                    </p>
                                </div>

                                <div className="mt-5 grid md:place-content-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="
                                        font-fet 
                                        xs:text-xsknapp 
                                        sm:text-smknapp 
                                        xl:text-xlknapp 
                                        text-knapp 
                                        text-natt 
                                        bg-solskinn 
                                        xs:w-full 
                                        w-48
                                        transScale 
                                        px-8 
                                        py-5 
                                        mb-2 
                                        mt-2 
                                        justify-self-center
                                        rounded 
                                        inline-flex 
                                        justify-center 
                                        items-center 
                                        gap-1"
                                    >
                                        Avbryt
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onRetry}
                                        className="
                                        font-fet
                                        xs:text-xsknappliten 
                                        sm:text-smknappliten 
                                        xl:text-xlknappliten 
                                        text-knappliten 
                                        text-metall 
                                        hover:text-skumring 
                                        bg-mane 
                                        hover:bg-paskeegg
                                        border-2
                                        border-mane 
                                        hover:border-solskinn
                                        xs:w-full 
                                        w-fit 
                                        px-10 
                                        py-3 
                                        mt-2
                                        mb-2
                                        justify-self-center
                                        rounded 
                                        transition 
                                        ease-in-out 
                                        duration-200"
                                    >
                                        Prøv igjen
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
