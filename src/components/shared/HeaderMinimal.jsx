import GiDinStemmeIconNoBg from '../../assets/img/GiDinStemmeIconNoBg.png';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Header() {
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
            <header>
                <nav className="px-4 lg:px-6 pt-10 pb-2">
                    <div className="flex justify-start mx-14">
                        <button
                            type="button"
                            className="flex items-center"
                            onClick={openModal}
                        >
                            <img
                                src={GiDinStemmeIconNoBg}
                                className="h-[2rem] opacity-30 hover:opacity-100 transition duration-200 ease-in-out"
                                alt="GiDinStemme - Logo"
                            />
                        </button>
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
                                        as="h3"
                                        className="
                                        font-fet 
                                        xs:text-xsh5 
                                        sm:text-smh5 
                                        xl:text-xlh5 
                                        text-h5
                                        text-skumring"
                                    >
                                        Sikker på at du vil avslutte?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p text-metall">
                                            Merk du kan ikke angre denne
                                            handlingen
                                        </p>
                                    </div>
                                    <div className="mt-5 grid md:place-content-center">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="
                                        font-semifet 
                                        xs:text-xsknapp 
                                        sm:text-smknapp 
                                        xl:text-xlknapp 
                                        text-knapp 
                                        text-natt 
                                        bg-solskinn 
                                        xs:w-full 
                                        w-56
                                        transScale 
                                        px-8 
                                        py-5 
                                        mb-2 
                                        mt-2 
                                        justify-self-center
                                        rounded 
                                        inline-flex 
                                        justify-center 
                                        items-center"
                                        >
                                            Nei, fortsett!
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => navigate('/')}
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
                                        inline-flex 
                                        justify-center 
                                        items-center 
                                        rounded 
                                        transition 
                                        ease-in-out 
                                        duration-200"
                                        >
                                            Ja, avslutt.
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
