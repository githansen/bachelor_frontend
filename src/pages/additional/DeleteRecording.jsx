//React library
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
//Input component library
import Input from 'react-input-auto-format';
//Animation library
import { motion as m } from 'framer-motion';
//Toast Library
import toast, { Toaster as Notification } from 'react-hot-toast';
//Graphic assets
import Layout from '@/components/shared/Layout';
import DeleteGraphic from '@/assets/img/ThreeDeeGraphic/DeleteGraphic.webp';

export default function DeleteRecording() {
    let [isOpen, setIsOpen] = useState(false);
    let [userInput, setUserInput] = useState('');

    let notifyError = () => toast.error('Noe gikk galt. Prøv på nytt!');
    const notifySuccess = () => toast.success('Ditt bidrag ble slettet!');

    function deleteContribution() {
        setIsOpen(false);
        notifySuccess();
    }

    return (
        <>
            <Layout>
                <Notification />
                <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                    <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[40rem] xl:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col place-items-center justify-center">
                        <m.img
                            initial={{ y: '-15%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            src={DeleteGraphic}
                            className="xs:h-[12rem] sm:h-[12rem] md:h-[13rem] lg:h-[15rem] h-[15rem] mb-10"
                        />
                        <m.h1
                            initial={{ y: '25%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="
                            text-fet 
                            xs:text-xsh1 
                            sm:text-smh1 
                            xl:text-xlh1 
                            text-h1
                            text-skumring
                            mb-2"
                        >
                            Slett ditt bidrag
                        </m.h1>
                        <m.p
                            initial={{ y: '25%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeOut',
                                delay: 0.2,
                            }}
                            className="
                            font-normal 
                            xs:text-xsp 
                            sm:text-smp 
                            xl:text-xlp 
                            text-p
                            text-skumring
                            sm:max-w-lg
                            text-center
                            mb-4"
                        >
                            Om du ønsker å slette ditt bidrag må du fylle inn
                            feltet under. Vi har ikke samlet inn noe av din
                            info, og det er derfor kun mulig å slette ditt
                            bidrag om du har din bidragskode.
                        </m.p>

                        <form className="flex flex-col place-items-center justify-center">
                            <m.div
                                initial={{ y: '25%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="mb-4"
                            >
                                <Input
                                    format="#######-#####-#####-#######"
                                    className="xs:min-w-[18rem] sm:min-w-[19rem] min-w-[20rem] xs:p-2 p-3 my-2 text-center font-fet border-2 placeholder-solnedgang border-solskinn bg-paskeegg text-bark rounded-lg focus:outline-none focus:shadow-outline"
                                    id="bidragskode"
                                    type="text"
                                    placeholder="123E4567-E89B-12D30-EG94348"
                                    onChange={(e) =>
                                        setUserInput(e.target.value.trim())
                                    }
                                    onKeyPress={(e) => {
                                        if (/^[A-Za-z0-9]{}}$/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                />
                                <p
                                    className={`
                                    text-center
                                    text-stein
                                    font-normal
                                    ${
                                        userInput.length === 27
                                            ? 'hidden'
                                            : 'block'
                                    }`}
                                >{`${userInput.length}/27`}</p>
                            </m.div>

                            <div
                                className={`
                                ${
                                    userInput.length === 27 ? 'block' : 'hidden'
                                }`}
                            >
                                <m.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeOut',
                                    }}
                                    type="button"
                                    onClick={() => setIsOpen(true)}
                                    className={`
                                    font-semifet 
                                    xs:text-xsknapp 
                                    sm:text-smknapp 
                                    xl:text-xlknapp 
                                    text-knapp 
                                    text-fred 
                                    bg-rose 
                                    xs:w-full 
                                    w-fit 
                                    transScale 
                                    px-14 
                                    py-4 
                                    mb-2 
                                    mt-2 
                                    rounded 
                                    inline-flex 
                                    justify-center 
                                    items-center 
                                    gap-2`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                    Slett
                                </m.button>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsOpen(false)}
                >
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
                        <div className="flex min-h-full items-center justify-center xs:p-5 text-center">
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
                                        Sikker på at du slette ditt bidrag?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p text-metall">
                                            Denne endringen kan ikke
                                            tilbakestilles.
                                        </p>
                                    </div>

                                    <div className="mt-5 grid md:place-content-center">
                                        <button
                                            type="button"
                                            onClick={deleteContribution}
                                            className="
                                        font-fet
                                        hover:font-feteste
                                        xs:text-xsknapp 
                                        sm:text-smknapp 
                                        xl:text-xlknapp 
                                        text-knapp 
                                        text-rose 
                                        bg-fred
                                        hover:bg-rose
                                        hover:text-fred
                                        border-4
                                        hover:border-rose
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
                                            <svg
                                                className="w-6 h-6 mb-1"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                color="currentColor"
                                            >
                                                <path
                                                    d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            Slett
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setIsOpen(false)}
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
