//React library
import { NavLink, useNavigate } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from './DashMenu';
//Graphic
import dashBg from '@/assets/img/Banner/dashBg.jpeg';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="flex">
            <DashMenu />

            <div className="p-12 w-full bg-lysbakgrunn">
                <div className="inline-flex gap-3 mb-10">
                    <div>
                        <m.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className="text-xlh2 font-feteste leading-10"
                        >
                            Hei, Ola!
                        </m.h2>
                        <m.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeOut',
                            }}
                            className="text-xlp mt-2"
                        >
                            I dag er det{' '}
                            <span className="capitalize">
                                {new Date().toLocaleString('nb', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                    weekday: 'long',
                                })}
                                .
                            </span>
                        </m.p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div
                        style={{ backgroundImage: `url(${dashBg})` }}
                        className="bg-cover z-0 bg-center hover:opacity-80 transition-all duration-350 ease-in-out justify-center p-10 col-span-1 flex h-[40em] rounded-lg drop-shadow-xl bg-bolge text-fred border-stein place-items-center"
                    >
                        <NavLink
                            to="/gdsadmin/contributions"
                            className="bg-bolge opacity-70 cursor-pointer rounded-lg absolute inset-0"
                        />
                        <div className="z-10 relative text-center">
                            <h2 className="text-[80px] font-feteste text-fred drop-shadow-md">
                                145 132
                            </h2>
                            <h4 className="text-xlh4 font-semifet drop-shadow-md">
                                Innsendte bidrag
                            </h4>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="grid grid-cols-2 gap-5 mb-8 ">
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                            >
                                <NavLink
                                    to="/gdsadmin/text"
                                    className="flex h-[19rem] rounded-lg drop-shadow-md bg-fred place-items-center border-b-8 border-bolge hover:border-b-[20px] transition-all duration-250 ease-in-out cursor-pointer"
                                >
                                    <div className="w-full text-center">
                                        <h2 className="text-xlh1 font-feteste text-bolge">
                                            23
                                        </h2>
                                        <h4 className="text-xlh6 font-semifet">
                                            Tekster
                                        </h4>
                                    </div>
                                </NavLink>
                            </m.div>
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                            >
                                <NavLink
                                    to="/gdsadmin/target"
                                    className="flex h-[19rem] rounded-lg drop-shadow-md bg-fred place-items-center border-b-8 border-bolge hover:border-b-[20px] transition-all duration-250 ease-in-out cursor-pointer"
                                >
                                    <div className="w-full text-center">
                                        <h2 className="text-xlh1 font-feteste text-bolge">
                                            15
                                        </h2>
                                        <h4 className="text-xlh6 font-semifet">
                                            Målgrupper
                                        </h4>
                                    </div>
                                </NavLink>
                            </m.div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                                className="flex h-[19rem] rounded-lg drop-shadow-md bg-fred place-items-center border-b-8 border-drape hover:border-b-[20px] transition-all duration-250 ease-in-out"
                            >
                                <div className="w-full text-center">
                                    <h2 className="text-xlh1 font-feteste text-drape">
                                        345 792
                                    </h2>
                                    <h4 className="text-xlh6 font-semifet">
                                        Brukere
                                    </h4>
                                </div>
                            </m.div>
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: 'easeInOut',
                                }}
                            >
                                <NavLink
                                    to="/gdsadmin/contributions"
                                    className="flex h-[19rem] rounded-lg drop-shadow-md bg-fred place-items-center border-b-8 border-rose hover:border-b-[20px] transition-all duration-250 ease-in-out cursor-pointer"
                                >
                                    <div className="w-full text-center">
                                        <h2 className="text-xlh1 font-feteste text-rose">
                                            249
                                        </h2>
                                        <h4 className="text-xlh6 font-semifet ">
                                            Slettede opptak
                                        </h4>
                                    </div>
                                </NavLink>
                            </m.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
