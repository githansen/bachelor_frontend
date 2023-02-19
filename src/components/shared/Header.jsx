//React library
import { NavLink } from 'react-router-dom';
//Graphic assets
import GiDinStemmeIconNoBg from '@/assets/img/Logo/GiDinStemmeIconNoBg.png';
import { ReactComponent as StarIcon } from '@/assets/icons/StarIcon.svg';

export default function Header() {
    return (
        <header>
            <nav className="py-10 xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="flex flex-wrap sm:justify-between items-center mx-auto xs:place-content-center sm:max-w-screen-xl">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 hover:opacity-70 transition duration-150 ease-in-out"
                    >
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
                        to="/intro"
                        className="flex items-center lg:order-2 xs:hidden gap-2 hover:text-metall rounded-full transition duration-150 ease-in-out"
                    >
                        <StarIcon className="w-6 h-6" />
                        <p className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p ">
                            Bidra med din stemme
                        </p>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
