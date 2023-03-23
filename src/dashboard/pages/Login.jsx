//React
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//Graphic assets
import { LockClosedIcon } from '@heroicons/react/20/solid';
//Graphic assets
import GiDinStemmeIconWBg from '@/assets/img/Logo/GiDinStemmeIconWBg.png';
// Api
import { queryApi } from '@/utils/api.jsx';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        queryApi(
            '/Admin/LogIn',
            {
                username,
                password
            },
            {
                method: 'POST',
                toast: {
                    loading: 'Logger inn...',
                    success: 'Du er nå logget inn som administrator',
                    error: (res) => res.status === 401 ?
                        'Feil brukernavn eller passord' :
                        'Noe gikk galt, prøv igjen senere'
                },
            }
        ).then(() => navigate('/gdsadmin/dashboard'));
    };

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
                            Skriv inn ditt brukernavn og passord
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={e => e.preventDefault()}>
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div className="mb-5">
                                <label
                                    htmlFor="username"
                                    className="sr-only"
                                >
                                    Brukernavn
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="string"
                                    required
                                    className="relative block w-full appearance-none rounded-md border-none px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Brukernavn"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className=" w-full text-right">
                            <NavLink
                                to="/gdsadmin/"
                                className="font-medium text-bolge hover:text-krystall transition ease-in-out duration-150"
                            >
                                Glemt passord?
                            </NavLink>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border-2 bg-bolge text-fred hover:text-bolge border-bolge transition ease-in-out duration-250 py-4 px-3 text-sm font-fet text-white hover:bg-krystall focus:outline-none "
                                onClick={handleLogin}
                            >
                                <LockClosedIcon
                                    className="h-5 w-5 mr-2"
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
