//React library
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Shared components
import Footer from '@/components/shared/Footer';
//Animation library
import { motion as m } from 'framer-motion';
//Graphic assets
import GiDinStemmeIconNoBg from '@/assets/img/Logo/GiDinStemmeIconNoBg.png';
import heroimg1 from '@/assets/img/Hero/hero-img-1.webp';
import heroimg2 from '@/assets/img/Hero/hero-img-2.webp';
import heroimg3 from '@/assets/img/Hero/hero-img-3.webp';
import heroimg4 from '@/assets/img/Hero/hero-img-4.webp';
import heroimg5 from '@/assets/img/Hero/hero-img-5.webp';
import heroimg6 from '@/assets/img/Hero/hero-img-6.webp';
import heroimg7 from '@/assets/img/Hero/hero-img-7.webp';
import heroimg8 from '@/assets/img/Hero/hero-img-8.webp';
import heroimg9 from '@/assets/img/Hero/hero-img-9.webp';
import heroimg10 from '@/assets/img/Hero/hero-img-10.webp';
// Api
import { queryApi } from '@/utils/api.jsx';

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        queryApi('User/IsLoggedIn')
            .then((res) => {
                if (res === true) {
                    navigate('/velkommen-tilbake');
                }
            });
    }, []);

    return (
        <div>
            <div
                className="
                flex-col-reverse 
                xl:h-screen 
                xl:max-w-7xl 
                md:flex-row 
                text-center 
                md:text-left 
                mt-10 
                mx-5 gap-10 
                sm:mt-22 
                sm:mx-14 
                sm:gap-6 
                md:mt-26 
                md:mx-20 
                g:h-[50rem] 
                lg:max-w-6xl 
                lg:mx-auto 
                flex 
                place-items-center 
                justify-between"
            >
                <m.div
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.0 }}
                    className="
                    w-full 
                    max-w-lg"
                >
                    <img
                        src={GiDinStemmeIconNoBg}
                        className="mb-10 xs:hidden sm:hidden md:inline-flex h-[4rem] lg:h-[6rem]"
                        alt="GiDinStemme - Logo"
                    />

                    <div className="text-h6 bg-paskeegg rounded-full w-fit py-1 px-4 mb-2 xs:mx-auto sm:mx-auto md:mx-0">
                        Utviklet i 🇳🇴 for Norge
                    </div>
                    <h1
                        className="
                        text-fet 
                        xs:text-xsh1 
                        sm:text-smh1 
                        xl:text-xlh1 
                        text-h1
                        text-skumring
                        mb-3"
                    >
                        Bidra med din stemme!
                    </h1>

                    <h6
                        className="
                        font-normal 
                        xs:text-xsh6 
                        sm:text-smh6 
                        md:text-xlh6 
                        xl:text-xlh6 
                        text-h6
                        text-skumring
                        mb-2"
                    >
                        Vi leter mennesker i alle aldre, med ulike morsmål,
                        forskjellige dialekter og alle kjønn!
                    </h6>

                    <button
                        onClick={() => navigate('/intro')}
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
                        gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-play"
                        >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Sett i gang
                    </button>
                </m.div>

                <div className="xs:w-full lg:max-w-lg">
                    <div className="sm:drop-shadow-md md:drop-shadow-2xl xs:justify-center xs:space-x-4 sm:space-x-8 flex items-center justify-center  lg:space-x-8">
                        <div className="grid flex-shrink-0 lg:grid-cols-1 gap-y-6 lg:gap-y-8">
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.0,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg9}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.1,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg2}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                        </div>
                        <div className="grid flex-shrink-0 lg:grid-cols-1 gap-y-6 lg:gap-y-8">
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.2,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg3}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.25,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg1}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.2,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg4}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                        </div>
                        <div className="grid flex-shrink-0 lg:grid-cols-1 gap-y-6 lg:gap-y-8">
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.0,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg5}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                            <m.div
                                initial={{ y: '10%', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    ease: 'easeOut',
                                    delay: 0.1,
                                }}
                                className="
                                xs:h-24 
                                xs:w-20 
                                sm:h-44
                                sm:w-32 
                                md:h-48 
                                md:w-36 
                                lg:h-56 
                                lg:w-44 
                                xl:h-80 
                                xl:w-60 
                                overflow-hidden 
                                rounded-lg"
                            >
                                <img
                                    src={heroimg8}
                                    alt=""
                                    className="sm:drop-shadow-md md:drop-shadow-2xl h-full w-full object-cover object-center"
                                />
                            </m.div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
