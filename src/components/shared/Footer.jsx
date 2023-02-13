import PolitietLogo from '../../assets/img/politiet-logo.jpeg';
import GiDinStemmeIconWBg from '../../assets/img/GiDinStemmeIconWBg.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full mt-auto">
            <div className="xs:px-14 sm:px-14 md:px-20 bg-skumring text-fred mt-20 pt-5">
                <div className="flex-col text-center md:flex-row md:text-left flex justify-between m-16 lg:mt-10 mb-0 mx-auto lg:max-w-6xl">
                    <div className="grid content-between">
                        <div className="mb-10">
                            <NavLink to="/">
                                <img
                                    src={GiDinStemmeIconWBg}
                                    className="w-[4rem] mb-7 xs:mx-auto sm:mx-auto md:mx-0 "
                                ></img>
                            </NavLink>
                            <h1 className="xs:text-xsh1 sm:text-smh1 md:text-mdh1 xl:text-xlh1 text-h1 mb-2">
                                <b>Gi Din Stemme</b>
                            </h1>
                            <h5 className="xs:text-xsh5 sm:text-smh5 md:text-mdh5 xl:text-xlh5 text-h5 md:w-3/4">
                                Bidra med å holde Norge trygt, doner et lydklipp
                                med din stemme.
                            </h5>
                        </div>
                        <div className="mb-4 xs:hidden sm:hidden md:inline-flex">
                            <small className="xs:text-xsliten sm:text-smliten md:text-mdliten xl:text-xlliten text-liten  text-kveld">
                                © 2023 GiDinStemme | Utviklet av Sefa, Tony,
                                Henrik og Johan
                            </small>
                        </div>
                    </div>
                    <div className="grid content-between">
                        <div className="xs:mt-0 md:mt-10">
                            <h5 className="xs:text-xsh5 sm:text-smh5 md:text-mdh5 xl:text-xlh5 text-h5 ">
                                <b>Nyttige lenker</b>
                            </h5>
                            <ul className="text-metall mt-3">
                                <li>
                                    <NavLink
                                        to="/intro"
                                        className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p hover:text-fred transition duration-150 ease-in-out"
                                    >
                                        Spill inn lyd
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/om-oss"
                                        className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p hover:text-fred transition duration-150 ease-in-out"
                                    >
                                        Hva er gi din stemme?
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/slett"
                                        className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p hover:text-fred transition duration-150 ease-in-out"
                                    >
                                        Slett ditt bidrag
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/personvern"
                                        className="xs:text-xsp sm:text-smp md:text-mdp lg:text-lgp xl:text-xlp text-p hover:text-fred transition duration-150 ease-in-out"
                                    >
                                        Personvern
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="xs:hidden sm:hidden md:inline-flex w-fit flex-col bg-fred txt-black rounded-tl-lg rounded-tr-lg px-5 py-3 content-end	mt-16">
                            <div className="flex flex-auto gap-3 justify-center content-center">
                                <p className="md:text-mdp lg:text-lgp self-center min-w-[7rem]">
                                    I samarbeid med
                                </p>
                                <a
                                    href="https://www.politiet.no/om-politiet/organisasjonen/sarorganene/pit/"
                                    target="_blank"
                                >
                                    <img
                                        src={PolitietLogo}
                                        alt="Politiet - Logo"
                                        className="object-contain w-28 hover:opacity-40 transition duration-150 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden mx-auto mt-10 pt-5 w-full  flex-col bg-fred txt-black rounded-tl-lg rounded-tr-lg px-5 py-3 content-end">
                            <div className="mb-2 flex flex-col gap-3 justify-center content-center">
                                <p className="text-xsliten text-skumring self-center">
                                    Utviklet av Sefa, Tony, Henrik og Johan.{' '}
                                    <br></br>I samarbeid med
                                </p>
                                <a
                                    href="https://www.politiet.no/om-politiet/organisasjonen/sarorganene/pit/"
                                    target="_blank"
                                    className="place-self-center"
                                >
                                    <img
                                        src={PolitietLogo}
                                        alt="Politiet - Logo"
                                        className="object-contain w-24"
                                    />
                                </a>
                            </div>
                            <div>
                                <small className="text-xsliten text-stein">
                                    © 2023 GiDinStemme
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
