import Layout from '../../components/shared/Layout';
import { Link } from 'react-router-dom';
import FiveHundredIcon from '../../assets/img/FiveHundred.png';

export default function FiveHundred() {
    return (
        <Layout>
            <div className="xs:mx-14 sm:mx-14 lg:mx-auto lg:max-w-6xl">
                <div className="min-h-[20rem] md:min-h-[40rem] lg:min-h-[50rem] xs:my-8 sm:my-10 md:my-12 lg:my-14px xl:my-14 flex flex-col place-items-center justify-center gap-5">
                    <img 
                        src={FiveHundredIcon}
                        className="xs:h-[14rem] sm:h-[20rem] md:h-[22rem] lg:h-[25rem] xl:h-[27rem] mb-2 object-contain"
                    ></img>

                    <h1 
                        className="xs:text-xsh1 sm:text-smh1 md:text-mdh1 lg:text-lgh1 xl:text-xlh1 text-h1 mb-2 text-center"
                    >
                        500 Intern feil...
                    </h1>
                    <h4 
                        className="xs:text-xsh4 sm:text-smh4 md:text-mdh4 lg:text-lgh4 xl:text-xlh4 text-h4 mb-5 text-center"
                    >
                        Prøv å laste siden på nytt eller gå tilbake til forsiden.
                    </h4>
                    <Link
                        to="/"
                        className="xs:w-full w-48 transScale bg-solskinn px-4 py-4 mb-2 text-natt mt-2 rounded inline-flex justify-center items-center gap-2 xs:text-xsknapp sm:text-smknapp md:text-mdknapp lg:text-lgknapp xl:text-xlknapp text-knapp"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 pr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Tilbake hjem
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
