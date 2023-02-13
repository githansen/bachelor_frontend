import PolitietLogo from '../../assets/img/politiet-logo.jpeg';
import GiDinStemmeIconNoBg from '../../assets/img/GiDinStemmeIconNoBg.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='bottom-0 w-full'>
        <div className="bg-dark text-white mt-20 pt-5">
            <div className="flex justify-between m-16 mb-0 max-w-screen-xl mx-auto">
                <div className="grid content-between">
                    <div className="mb-10">
                        <img
                            src={GiDinStemmeIconNoBg}
                            className="w-[4rem] mb-2"
                        ></img>
                        <h1 className="prose-2xl text-h1">
                            <b>Gi Din Stemme</b>
                        </h1>
                        <h5 className="prose-base text-h5 w-3/4">
                            Bidra med å holde Norge trygt, doner et lydklipp med
                            din stemme.
                        </h5>
                    </div>
                    <div className="mb-4">
                        <small className="text-small text-gray-70">
                            © 2023 GiDinStemme | Utviklet av Sefa, Tony, Henrik
                            og Johan
                        </small>
                    </div>
                </div>
                <div className="grid content-between">
                    <div className="mt-10">
                        <h5 className="text-h5">
                            <b>Nyttige lenker</b>
                        </h5>
                        <ul className="text-gray-60 mt-3">
                            <li>
                                <NavLink
                                    to="/om-oss"
                                    className="text-p hover:text-white transition duration-150 ease-in-out"
                                >
                                    Hva er gi din stemme?
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/slett"
                                    className="text-p hover:text-white transition duration-150 ease-in-out"
                                >
                                    Slett ditt bidrag
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/personvern"
                                    className="text-p hover:text-white transition duration-150 ease-in-out"
                                >
                                    Personvern
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="w-fit flex-col bg-white txt-black rounded-tl-lg rounded-tr-lg px-5 py-3 content-end	mt-16">
                        <div className="flex flex-auto gap-3 justify-center content-center">
                            <p className="text-p self-center">
                                I samarbeid med
                            </p>
                            <a href="https://www.politiet.no/" target="_blank">
                                <img
                                    src={PolitietLogo}
                                    alt="Politiet - Logo"
                                    className="object-contain w-28 hover:opacity-40 transition duration-150 ease-in-out"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
}
