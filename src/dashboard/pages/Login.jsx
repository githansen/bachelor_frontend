//React
import { NavLink } from 'react-router-dom';
//Graphic assets
import { LockClosedIcon } from '@heroicons/react/20/solid';
//Graphic assets
import GiDinStemmeIconWBg from '@/assets/img/Logo/GiDinStemmeIconWBg.png';

export default function Login() {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 lg:px-8 bg-special-darkblue-admin h-screen">
                <div className="gradiant-bg-overlay" />
                <div className="w-full max-w-sm space-y-8 z-10">
                    <div>
                        <img
                            className="mx-auto h-20 w-auto hover:rotate-90 transition-all duration-500 cursor-pointer"
                            src={GiDinStemmeIconWBg}
                            alt="GiDinStemme"
                        />
                        <h2 className="mt-6 text-center text-xlh1 font-bold tracking-tight text-fred">
                            Logg inn
                        </h2>
                        <p className="mt-5 text-center text-sm text-mane font-medium">
                            Skriv inn din e-post og passord
                        </p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div className="mb-5">
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    E-post
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-md border-none px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="E-post"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Passord
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-md border-none px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Passord"
                                />
                            </div>
                        </div>

                        <div className=" w-full text-right">
                            <NavLink
                                to="/gdsadmin/dashboard"
                                className="font-medium text-bolge hover:text-krystall transition ease-in-out duration-150"
                            >
                                Glemt passord?
                            </NavLink>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border-2 bg-bolge text-fred hover:text-bolge border-bolge transition ease-in-out duration-250 py-4 px-3 text-sm font-fet text-white hover:bg-krystall focus:outline-none "
                            >
                                <LockClosedIcon
                                    className="h-5 w-5 mr-2"
                                    ariaHidden="true"
                                />
                                Logg inn
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
