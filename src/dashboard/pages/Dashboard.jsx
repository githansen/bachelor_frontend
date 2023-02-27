//React library
import { NavLink, useNavigate } from 'react-router-dom';
//Animation library
import { motion as m } from 'framer-motion';
//Shared
import DashMenu from '../components/shared/DashMenu';
//Graphic
import dashBg from '@/assets/img/Banner/dashBg.jpeg';
//Flags
//https://github.com/stephenway/react-flagkit
import { FlagIcon as Flag } from 'react-flag-kit';
//Charts
import ChartUsersPerDay from '../components/chart/ChartUsersPerDay';
import ChartUserAge from '../components/chart/ChartUserAge';
import ChartUserGender from '../components/chart/ChartUserGender';
import ChartUserDialect from '../components/chart/ChartUserDialect';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-lysbakgrunn">
            <DashMenu />

            <div className="p-12 w-full">
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

                <div className="grid grid-cols-3 gap-5 mb-10">
                    <div
                        style={{ backgroundImage: `url(${dashBg})` }}
                        //className="bg-cover z-0 bg-center hover:opacity-80 transition-all duration-350 ease-in-out  h-[40em] rounded-lg drop-shadow-xl bg-bolge text-fred border-stein "
                        className="bg-cover col-span-2 z-0 bg-center h-[30em] rounded-lg drop-shadow-xl bg-bolge text-fred"
                    >
                        <div className="grid grid-cols-1 items-end space-y-28 h-full">
                            <div className="row-middle">
                                <div className="bg-gradient-to-t from-blue-700 to-blue-500 opacity-80 cursor-pointer rounded-lg absolute inset-0" />
                                <div className="z-10 absolute text-center w-full mt-10">
                                    <h4 className="text-xlh4 font-semifet drop-shadow-md">
                                        Innsendte bidrag
                                    </h4>
                                    <h2 className="text-[80px] font-feteste text-fred drop-shadow-md">
                                        145 132
                                    </h2>
                                </div>
                            </div>
                            <div className="row-end text-skumring">
                                <ChartUsersPerDay />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className="bg-cover z-0 bg-center h-[30em] rounded-lg drop-shadow-md bg-gradient-to-t from-blue-700 to-blue-500 py-10 place-items-center"
                        >
                            <div className="px-10 pb-5 text-fred">
                                <h6 className="text-xlh6 font-fet">
                                    Topp 5 morsmål
                                </h6>
                                <p className="text-xlp font-normal text-fred opacity-80">
                                    Mest populære morsmål blant brukerne.
                                </p>
                            </div>
                            <div className="px-10">
                                <ul>
                                    <li className="inline-flex place-items-center justify-between w-full bg-fred shadow-lg py-2 px-6 rounded-lg mb-4">
                                        <div className="flex place-items-center gap-3">
                                            <div className="w-fit">
                                                <Flag code="NO" size={20} />
                                            </div>
                                            <p className="text-xlliten font-fet">
                                                Norsk
                                            </p>
                                        </div>
                                        <p className="text-xlp text-metall">
                                            1 234{' '}
                                            <small className="text-xlsmall">
                                                bidrag
                                            </small>
                                        </p>
                                    </li>
                                    <li className="inline-flex place-items-center justify-between w-full bg-fred shadow-lg py-2 px-6 rounded-lg mb-4">
                                        <div className="flex place-items-center gap-3">
                                            <div className="w-fit">
                                                <Flag
                                                    code="PK"
                                                    size={20}
                                                    className="w-fit"
                                                />
                                            </div>
                                            <p className="text-xlliten font-fet">
                                                Punjabi
                                            </p>
                                        </div>
                                        <p className="text-xlp text-metall">
                                            850{' '}
                                            <small className="text-xlsmall">
                                                bidrag
                                            </small>
                                        </p>
                                    </li>
                                    <li className="inline-flex place-items-center justify-between w-full bg-fred shadow-lg py-2 px-6 rounded-lg mb-4">
                                        <div className="flex place-items-center gap-3">
                                            <div className="w-fit">
                                                <Flag
                                                    code="AL"
                                                    size={20}
                                                    className="w-fit"
                                                />
                                            </div>
                                            <p className="text-xlliten font-fet">
                                                Albansk
                                            </p>
                                        </div>
                                        <p className="text-xlp text-metall">
                                            548{' '}
                                            <small className="text-xlsmall">
                                                bidrag
                                            </small>
                                        </p>
                                    </li>
                                    <li className="inline-flex place-items-center justify-between w-full bg-fred shadow-lg py-2 px-6 rounded-lg mb-4">
                                        <div className="flex place-items-center gap-3">
                                            <div className="w-fit">
                                                <Flag
                                                    code="SE"
                                                    size={20}
                                                    className="w-fit"
                                                />
                                            </div>
                                            <p className="text-xlliten font-fet">
                                                Svensk
                                            </p>
                                        </div>
                                        <p className="text-xlp text-metall">
                                            293{' '}
                                            <small className="text-xlsmall">
                                                bidrag
                                            </small>
                                        </p>
                                    </li>
                                    <li className="inline-flex place-items-center justify-between w-full bg-fred shadow-lg py-2 px-6 rounded-lg mb-4">
                                        <div className="flex place-items-center gap-3">
                                            <div className="w-fit">
                                                <Flag
                                                    code="DK"
                                                    size={20}
                                                    className="w-fit"
                                                />
                                            </div>
                                            <p className="text-xlliten font-fet">
                                                Dansk
                                            </p>
                                        </div>
                                        <p className="text-xlp text-metall">
                                            56{' '}
                                            <small className="text-xlsmall">
                                                bidrag
                                            </small>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </m.div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5 mb-8 ">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        className="rounded-lg drop-shadow-md bg-fred w-full py-10"
                    >
                        <div className="px-10 pb-5 text-skumring">
                            <h6 className="text-xlh6 font-fet">Aldersgraf</h6>
                            <p className="text-xlp font-normal text-metall">
                                Aldersfordeling ved innsendte bidrag.
                            </p>
                        </div>
                        <div className="px-10">
                            <ChartUserAge />
                        </div>
                    </m.div>
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        className="rounded-lg drop-shadow-md bg-fred w-full py-10"
                    >
                        <div className="px-10 pb-5 text-skumring">
                            <h6 className="text-xlh6 font-fet">Dialektsgraf</h6>
                            <p className="text-xlp font-normal text-metall">
                                Dialektfordeling ved innsendte bidrag.
                            </p>
                        </div>
                        <div className="px-10">
                            <ChartUserDialect />
                        </div>
                    </m.div>
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        className="rounded-lg drop-shadow-md bg-fred w-full py-10"
                    >
                        <div className="px-10 pb-5 text-skumring">
                            <h6 className="text-xlh6 font-fet">Kjønnsgraf</h6>
                            <p className="text-xlp font-normal text-metall">
                                Kjønnsfordeling ved innsendte bidrag.
                            </p>
                        </div>
                        <div className="px-10">
                            <ChartUserGender />
                        </div>
                    </m.div>
                </div>

                <div className="grid grid-cols-1 gap-5 mb-8 ">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                    >
                        <div className="flex justify-between px-20 h-[19rem] rounded-lg drop-shadow-md bg-gradient-to-r from-blue-700 to-blue-500 place-items-center">
                            <div className=" text-fred max-w-[18rem]">
                                <h6 className="text-xlh6 font-fet">
                                    Statistikk
                                </h6>
                                <p className="text-xlp font-normal">
                                    Generell statistikk av data i databasen til
                                    GiDinStemme.
                                </p>
                            </div>
                            <div className="grid grid-cols-4 gap-10">
                                <NavLink
                                    to="/gdsadmin/text/"
                                    className="bg-fred rounded-lg py-5 grid place-content-center gap-0 px-10 shadow-lg text-center hover:shadow-2xl transition-all duration-250 ease-in-out"
                                >
                                    <h5 className="text-xlh5 font-feteste text-blue-700">
                                        23
                                    </h5>
                                    <p className="text-xsp font-semifet text-blue-700">
                                        Tekster
                                    </p>
                                </NavLink>
                                <NavLink
                                    to="/gdsadmin/target/"
                                    className="bg-fred rounded-lg py-5 grid place-content-center gap-0 px-10 shadow-lg text-center hover:shadow-2xl transition-all duration-250 ease-in-out"
                                >
                                    <h5 className="text-xlh5 font-feteste text-blue-700">
                                        15
                                    </h5>
                                    <p className="text-xsp font-semifet text-blue-500">
                                        Målgrupper
                                    </p>
                                </NavLink>
                                <div
                                    to="/gdsadmin/text/"
                                    className="bg-fred rounded-lg py-5 grid place-content-center gap-0 px-10 shadow-lg text-center hover:shadow-2xl transition-all duration-250 ease-in-out"
                                >
                                    <h5 className="text-xlh5 font-feteste text-blue-500">
                                        345 792
                                    </h5>
                                    <p className="text-xsp font-semifet text-blue-500">
                                        Brukere
                                    </p>
                                </div>
                                <NavLink
                                    to="/gdsadmin/contributions/"
                                    className="bg-fred rounded-lg py-5 grid place-content-center gap-0 px-10 shadow-lg text-center hover:shadow-2xl transition-all duration-250 ease-in-out"
                                >
                                    <h5 className="text-xlh5 font-feteste text-rose">
                                        249
                                    </h5>
                                    <p className="text-xsp font-semifet text-rose">
                                        Slettede
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>
        </div>
    );
}
