//React library
import { useNavigate } from 'react-router-dom';
//Shared components
import Footer from '@/components/shared/Footer';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import UserFormIcon from '@/assets/img/ThreeDeeGraphic/UserForm.png';

export default function StartOverQuestion() {
    const navigate = useNavigate();
    return (
        <div>
            <main className="pt-10 mx-5 gap-4 sm:pt-22 sm:mx-14 sm:gap-6 md:pt-26 md:mx-20 md:gap-10 lg:min-h-[55rem] lg:max-w-6xl lg:mx-auto">
                <div className="xs:text-center flex flex-col place-items-center xs:my-[5rem] sm:my-[6rem] md:my-[7rem] xl:my-[10rem]">
                    <m.img
                        initial={{ y: '-25%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        src={UserFormIcon}
                        className="xs:h-[12rem] sm:h-[12rem] md:h-[13rem] lg:h-[15rem] h-[15rem] mb-10"
                    ></m.img>

                    <m.h2
                        initial={{ y: '50%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="
                            font-fet 
                            xs:text-xsh2 
                            sm:text-smh2 
                            xl:text-xlh2 
                            text-h2
                            text-skumring
                            mb-2"
                    >
                        Hei, igjen!
                    </m.h2>
                    <m.h4
                        initial={{ y: '50%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="
                            font-normal 
                            xs:text-xsh4 
                            sm:text-smh4 
                            xl:text-xlh4 
                            text-h4
                            text-metall
                            mb-4"
                    >
                        Ser ut som du har vært her før.
                    </m.h4>

                    <m.ul
                        initial={{ y: '10%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="
                            font-normal 
                            xs:text-xsp
                            sm:text-smp
                            xl:text-xlp
                            text-p
                            text-skumring
                            mb-4
                            text-left"
                    >
                        <li>
                            <b>Kjønn:</b> Mann
                        </li>
                        <li>
                            <b>Alder:</b> 18-30
                        </li>
                        <li>
                            <b>Morsmål:</b> Norsk
                        </li>
                        <li>
                            <b>Dialekt:</b> Østlandet
                        </li>
                    </m.ul>

                    <m.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        onClick={() => navigate('/les')}
                        className="
                            font-fet 
                            xs:text-xsknapp 
                            sm:text-smknapp 
                            xl:text-xlknapp 
                            text-knapp 
                            text-natt 
                            bg-solskinn 
                            xs:w-full 
                            w-fit 
                            transScale 
                            px-11
                            py-5 
                            mb-2 
                            mt-2 
                            rounded 
                            inline-flex 
                            justify-center 
                            items-center 
                            gap-1"
                    >
                        Fortsett
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </m.button>
                    <m.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        onClick={() => navigate('/intro')}
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
                                px-11 
                                py-3 
                                mt-2
                                mb-2
                                rounded 
                                transition 
                                ease-in-out 
                                duration-200"
                    >
                        Start på nytt
                    </m.button>
                </div>
            </main>
            <div></div>
            <Footer />
        </div>
    );
}
