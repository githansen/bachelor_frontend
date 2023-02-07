import Layout from '../../components/shared/Layout';
import { Link } from 'react-router-dom';
import FiveHundredIcon from '../../assets/img/FiveHundred.png';

export default function FiveHundred() {
    return (
        <Layout>
            <div className="min-h-[50rem] flex flex-col place-items-center justify-center">
                <img src={FiveHundredIcon} className="w-[22rem] mb-10"></img>

                <h1 className="text-h1 mb-1">500 Intern feil...</h1>
                <p className="text-h4 mb-5">
                    Prøv å laste siden på nytt eller gå tilbake til forsiden.
                </p>
                <Link
                    to="/"
                    className="transScale bg-solskinn px-4 py-4 font-bold mb-2 text-h4 text-natt mt-2  w-48 rounded inline-flex justify-center items-center gap-2"
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
        </Layout>
    );
}
