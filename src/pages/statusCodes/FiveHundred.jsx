//React library
import { useNavigate } from 'react-router-dom';
//Shared components
import Layout from '@/components/shared/Layout';
//Graphic assets
import FiveHundredIcon from '@/assets/img/ThreeDeeGraphic/FiveHundred.png';
//Animation library
import { motion as m } from 'framer-motion';

//500 page
export default function FiveHundred() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[40rem] xl:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col place-items-center justify-center gap-5">
                    <m.img
                        initial={{ y: '-15%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        src={FiveHundredIcon}
                        className="xs:h-[14rem] sm:h-[20rem] md:h-[22rem] lg:h-[25rem] xl:h-[27rem] mb-2 object-contain"
                    />

                    <m.h1
                        initial={{ y: '50%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="
                        text-fet 
                        xs:text-xsh1 
                        sm:text-smh1 
                        xl:text-xlh1 
                        text-h1
                        text-skumring"
                    >
                        500 Intern feil...
                    </m.h1>

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
                        text-metall"
                    >
                        Prøv å laste siden på nytt eller gå tilbake til
                        forsiden.
                    </m.h4>

                    <m.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        onClick={() => navigate('/')}
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
                        px-8 
                        py-5 
                        mb-2 
                        mt-2 
                        rounded 
                        inline-flex 
                        justify-center 
                        items-center 
                        gap-1"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            width="25"
                            height="25"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Tilbake hjem
                    </m.button>
                </div>
            </div>
        </Layout>
    );
}
