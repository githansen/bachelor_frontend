import Layout from '../../components/shared/Layout';
import SlettIkon from '../../assets/img/Slett.png';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Slett() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <Layout>
                <div className="mx-auto max-w-screen-xl w-full">
                    <div className="min-h-[50rem] flex flex-col place-items-center justify-center">
                        <img src={SlettIkon} className="w-[10rem] mb-5"></img>
                        <h2 className="text-h1 mb-2">Slett ditt bidrag</h2>
                        <p className="text-p mb-5 sm:max-w-2xl text-center">
                            Om du ønsker å slette ditt bidrag må du fylle inn
                            feltet under. Vi har ikke samlet inn noe av din
                            info, og det er derfor kun mulig å slette ditt
                            bidrag om du har din bidragskode.
                        </p>
                        <form className="flex flex-col place-items-center justify-center mb-20">
                            <div className="mb-4">
                                <input
                                    className="border-2 w-[20rem] text-center placeholder-orange-200 border-secondary bg-secondary-soft p-3 rounded-lg text-orange-600 font-bold leading-tight focus:outline-none focus:shadow-outline"
                                    id="bidragskode"
                                    type="text"
                                    placeholder="123E4567-E89B-12D30-EG94348"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    className="transScale bg-red px-4 py-4 font-bold text-p text-white mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
                                    onClick={openModal}
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
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                    Slett
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>

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
                                        Sikker på at du slette ditt bidrag?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-p text-gray-500">
                                            Denne endringen kan ikke
                                            tilbakestilles.
                                        </p>
                                    </div>

                                    <div className="mt-5">
                                        <button
                                            type="button"
                                            className="transScale bg-red px-4 py-4 font-bold text-p text-white mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
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
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                            Slett!
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            className="bg-light px-5 py-2 mt-2 text-black w-40 rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
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
