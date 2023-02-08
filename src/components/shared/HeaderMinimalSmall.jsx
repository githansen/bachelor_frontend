import GiDinStemmeIconWBg from '../../assets/img/GiDinStemmeIconWBg.png';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function HeaderMinimalSmall() {
    const navigate = useNavigate();
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <header className='bg-skumring w-full fixed top-0 inset-x-0'>
                <nav className="xs:py-3 xs:px-2 sm:py-5 sm:px-4">
                    <div className="grid grid-cols-2 items-center  mx-5">
                        <div>
                            <button
                                type="button"
                                className="flex items-center"
                                onClick={openModal}
                            >
                                <img
                                    src={GiDinStemmeIconWBg}
                                    className="h-[2rem]"
                                    alt="GiDinStemme - Logo"
                                />
                            </button>
                        </div>
                        <div className="text-right flex flex-col">
                            <small className='xs:text-xsliten sm:text-smliten text-solskinn'>
                                Estimert lesetid 2 min
                            </small>
                            <h6 className="text-h6 font-semibold text-fred">
                                Klar til opptak?
                            </h6>
                        </div>
                    </div>
                </nav>
            </header>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                        as="h5"
                                        className="xs:text-xsh5 sm:text-smh5 md:text-mdh5 lg:text-lgh5 xl:text-xlh5 text-h5 font-medium leading-6"
                                    >
                                        Sikker på at du vil avslutte?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                    <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p text-metall">
                                            Merk at all din data vil bli borte.
                                        </p>
                                    </div>

                                    <div className="mt-5">
                                        <button
                                            type="button"
                                            className="xs:w-full w-48 xs:text-xsknapp sm:text-smknapp md:text-mdknapp lg:text-lgknapp xl:text-xlknapp text-knapp transScale bg-solskinn px-4 py-4 text-natt mt-2 rounded inline-flex justify-center items-center gap-2"
                                            onClick={() => navigate('/')}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                                />
                                            </svg>
                                            Ta meg tilbake
                                        </button>

                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="xs:w-full w-40 xs:text-xsknappliten sm:text-smknappliten md:text-mdknappliten lg:text-lgknappliten xl:text-xlknappliten text-knappliten bg-mane px-5 py-2 mt-2 text-natt rounded border-2 border-mane hover:bg-paskeegg hover:border-solskinn"
                                        >
                                            Avbryt
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}