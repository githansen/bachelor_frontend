import GiDinStemmeIconNoBg from '../../assets/img/GiDinStemmeIconNoBg.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav className="py-10 xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="flex flex-wrap sm:justify-between items-center mx-auto xs:place-content-center sm:max-w-screen-xl">
                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            src={GiDinStemmeIconNoBg}
                            className="mr-1 h-6 sm:h-9"
                            alt="GiDinStemme - Logo"
                        />
                        <span className="self-center font-semifet whitespace-nowrap text-skumring">
                            GiDinStemme
                        </span>
                    </NavLink>
                    <NavLink
                        to="/om-oss"
                        className="flex items-center lg:order-2 xs:hidden"
                    >
                        <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p hover:text-stein transition duration-150 ease-in-out">
                            Om oss
                        </p>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
